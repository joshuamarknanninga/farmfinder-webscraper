Here's a complete README.md you can use:

```markdown
# Farm Finder 🐔🥛

A localized search tool for finding small-scale egg and dairy sellers in Texas communities.

![Farm Finder Screenshot](./client/public/screenshot.png)

## Features

- 🔍 Search for local egg/dairy sellers in specific Texas locations
- 📍 Supported areas: Adkins, La Vernia, San Antonio
- 📱 PWA (Progressive Web App) support
- 🕸 Web scraping from Facebook/Instagram posts
- 📊 MongoDB database storage
- 🎨 Responsive UI with dark/light mode
- ⚡ Fast Vite-powered React frontend

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- npm v9+

**1. Clone repository**
```bash
git clone https://github.com/yourusername/farm-finder.git
cd farm-finder
```

**2. Server Setup**
```bash
cd server
npm install
```

**3. Client Setup**
```bash
cd ../client
npm install
```

## Configuration

**Server Environment (.env)**
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/farm-finder
PORT=5000
```
*Replace with your MongoDB credentials*

**Client Environment (.env)**
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## Usage

**Start Development Servers**

```bash
# In separate terminals
cd server && npm start
cd client && npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

**Production Build**
```bash
cd client
npm run build
```

## Tech Stack

**Frontend**
- React 18
- Vite
- Axios
- CSS3

**Backend**
- Node.js
- Express
- MongoDB/Mongoose
- Cheerio (Web Scraping)

**DevOps**
- PWA Support
- Environment Variables
- CORS Management

## Deployment

1. **MongoDB Atlas Setup**
   - Create free cluster
   - Whitelist IP (0.0.0.0/0 for testing)
   - Create database user

2. **Hosting Options**
   - Frontend: Vercel/Netlify
   - Backend: Render/Heroku
   - Database: MongoDB Atlas

## Contributing

1. Fork repository
2. Create feature branch
```bash
git checkout -b feature/your-feature
```
3. Commit changes
```bash
git commit -m 'Add some feature'
```
4. Push to branch
```bash
git push origin feature/your-feature
```
5. Open Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

- Vite for blazing-fast builds
- MongoDB Atlas for database hosting
- Cheerio for HTML parsing
- Google Custom Search integration

---

**Note:** Web scraping functionality depends on target website structures and may require periodic maintenance.