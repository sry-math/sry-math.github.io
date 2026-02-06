# Portfolio Website

This is a modern, responsive portfolio website built with Next.js and ready for GitHub Pages deployment.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment to GitHub Pages

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Steps to Deploy:

1.  **Push to GitHub**:
    Initialize a git repository if you haven't already, commit your changes, and push to a new GitHub repository.
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

2.  **Configure GitHub Settings**:
    - Go to your repository on GitHub.
    - Click on **Settings** > **Pages**.
    - Under **Build and deployment** > **Source**, select **GitHub Actions**.
    - The deployment workflow will automatically run on your next push.

## Customization

- **Content**: Edit `app/page.tsx` to update your information and projects.
- **Styles**: Edit `app/globals.css` and `app/page.module.css` to change colors and fonts.
- **Config**: `next.config.ts` is configured for static export (`output: 'export'`).
