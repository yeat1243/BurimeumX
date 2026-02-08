const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const url = require('url');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Main proxy endpoint
app.get('/proxy', async (req, res) => {
    const targetUrl = req.query.url;

    if (!targetUrl) {
        return res.status(400).send('URL parameter is required');
    }

    try {
        const response = await axios.get(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            },
            timeout: 10000
        });

        let html = response.data;

        // Modify HTML to handle relative URLs
        html = modifyHTML(html, targetUrl);

        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send(html);
    } catch (error) {
        res.status(500).send(`
            <html>
                <body style="font-family: Arial; padding: 20px;">
                    <h2>Error Loading Page</h2>
                    <p>Failed to load: ${targetUrl}</p>
                    <p>Error: ${error.message}</p>
                </body>
            </html>
        `);
    }
});

function modifyHTML(html, baseUrl) {
    const $ = cheerio.load(html);
    const baseUrlObj = new url.URL(baseUrl);

    // Fix relative links
    $('a').each((i, elem) => {
        const href = $(elem).attr('href');
        if (href) {
            const absoluteUrl = new url.URL(href, baseUrl).href;
            $(elem).attr('href', `/proxy?url=${encodeURIComponent(absoluteUrl)}`);
        }
    });

    // Fix relative images
    $('img').each((i, elem) => {
        const src = $(elem).attr('src');
        if (src && !src.startsWith('http') && !src.startsWith('data:')) {
            const absoluteUrl = new url.URL(src, baseUrl).href;
            $(elem).attr('src', absoluteUrl);
        }
    });

    // Fix stylesheets
    $('link[rel="stylesheet"]').each((i, elem) => {
        const href = $(elem).attr('href');
        if (href && !href.startsWith('http') && !href.startsWith('data:')) {
            const absoluteUrl = new url.URL(href, baseUrl).href;
            $(elem).attr('href', absoluteUrl);
        }
    });

    return $.html();
}

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});
