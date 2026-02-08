# BurimeumX - Web Proxy with Tabs

A modern web proxy application with a Google-like interface featuring tabbed browsing, history tracking, and customizable settings.

## Features

✨ **Browse Tab** - Proxy any website securely
📜 **History Tab** - Track your browsing history
⚙️ **Settings Tab** - Customize your experience
ℹ️ **About Tab** - Information about the app

## Installation

1. Clone the repository
```bash
git clone https://github.com/yeat1243/BurimeumX.git
cd BurimeumX
```

2. Install dependencies
```bash
npm install
```

3. Start the server
```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`

## Development

For development with auto-reload:
```bash
npm run dev
```

## How to Use

1. **Browse**: Enter a URL in the search bar and click "Go" or press Enter
2. **History**: Click on the History tab to see previously visited websites
3. **Settings**: Customize ad blocking, dark mode, and user agent
4. **Clear History**: Use the Settings tab to clear your browsing history

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Libraries**: Axios, Cheerio

## Project Structure

```
BurimeumX/
├── index.html      # Main HTML interface
├── server.js       # Express server and proxy logic
├── package.json    # Project dependencies
└── README.md       # This file
```

## Features in Detail

### Tabbed Interface
- Easy navigation between Browse, History, Settings, and About tabs
- Clean, modern UI inspired by Google

### Proxy Functionality
- Load any website through the proxy
- Automatic URL handling (adds https:// if needed)
- Relative URL correction for images, stylesheets, and links

### History Tracking
- Automatic history saving to browser's localStorage
- Click any history item to reload it
- Maximum 50 history entries

### Settings
- Block Ads toggle
- Dark Mode toggle
- Custom User Agent configuration
- Settings persist in localStorage

## Future Improvements

- [ ] Search functionality
- [ ] Bookmarks system
- [ ] Better ad blocking
- [ ] Dark mode UI implementation
- [ ] SSL/TLS support
- [ ] Cookie management
- [ ] Download management

## License

MIT License - feel free to use this project however you'd like!

## Author

Created by yeat1243
