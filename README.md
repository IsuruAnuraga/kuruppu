# Portfolio Website - DevOps Engineer

A modern, responsive portfolio website built with React, TypeScript, and Vite, showcasing DevOps and Cloud Engineering expertise.

## 🚀 Features

- Modern, responsive design
- Smooth scrolling navigation
- Sections: Home, About, Skills, Experience, Projects, Contact
- Social media integration
- Optimized for performance

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite (rolldown)
- **Styling:** CSS3
- **Deployment:** Azure Web App

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Start production server
npm start
```

## 🔧 Development

```bash
# Run linter
npm run lint

# Build project
npm run build
```

## 📝 GitHub Repository Setup

The repository is configured as **Kuruppu**. To set up the GitHub repository:

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `Kuruppu`
   - Choose public or private
   - Don't initialize with README (we already have one)

2. **Connect local repository to GitHub:**
   ```bash
   git remote add origin https://github.com/IsuruAnuraga/Kuruppu.git
   git branch -M main
   git push -u origin main
   ```

3. **Verify connection:**
   ```bash
   git remote -v
   ```

## ☁️ Azure Web App Deployment

This project is configured for deployment to Azure Web App. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Steps:

1. **Create Azure Web App** (via Azure Portal or CLI)
2. **Configure GitHub Actions:**
   - Add `AZURE_WEBAPP_PUBLISH_PROFILE` secret to GitHub
   - Update `AZURE_WEBAPP_NAME` in `.github/workflows/azure-deploy.yml`
3. **Push to main branch** - automatic deployment will trigger

### Manual Deployment:

```bash
# Build the project
npm run build

# Deploy using Azure CLI
az webapp deploy --resource-group <resource-group> --name <app-name> --src-path ./dist
```

## 📁 Project Structure

```
my-portfoio/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── dist/               # Build output (generated)
├── .github/
│   └── workflows/      # GitHub Actions workflows
├── server.js           # Production server
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🔗 Links

- **GitHub Repository:** [Kuruppu](https://github.com/IsuruAnuraga/Kuruppu)
- **Live Site:** (Update with your Azure Web App URL)

## 📄 License

This project is private and proprietary.

## 👤 Author

**Isuru Anuraga Kuruppu**
- GitHub: [@IsuruAnuraga](https://github.com/IsuruAnuraga)
- LinkedIn: [Isuru Anuraga Sri Kuruppu](https://www.linkedin.com/in/isuru-anuraga-sri-kuruppu/)

---

Built with ❤️ using React, TypeScript, and Vite
