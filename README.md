# WebCoreX Company Website

A modern, responsive company website for WebCoreX built with Next.js and TailwindCSS.

## Features

- 📱 Fully responsive design
- 🎨 Modern UI with TailwindCSS
- ⚡ Static site generation for optimal performance
- 🚀 CI/CD with GitHub Actions
- 🌐 Custom domain support

## Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/webcorex-site.git
cd webcorex-site
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build the site for production:

```bash
npm run build
# or
yarn build
```

This will generate a static export in the `out` directory.

## GitHub Pages Deployment

This project automatically deploys to GitHub Pages using GitHub Actions when code is pushed to the main branch.

### Setup for GitHub Pages

1. Create a new GitHub repository
2. Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/webcorex-site.git
git push -u origin main
```

3. In your GitHub repository, go to Settings > Pages:
   - Source: GitHub Actions
   - This will be automatically configured by the workflow

4. The site will deploy to `https://your-username.github.io/webcorex-site/`

### Custom Domain Configuration

1. In your GitHub repository, go to Settings > Pages:
   - Under "Custom domain", enter your domain (e.g., webcorex.com)
   - Check "Enforce HTTPS"

2. Update your domain's DNS settings to point to GitHub Pages:
   - Add an A record pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add a CNAME record pointing to `your-username.github.io`

3. Update the `basePath` in `next.config.js` to be an empty string once your custom domain is configured.

## Project Structure

- `/src/app`: Next.js app directory
- `/src/components`: Reusable React components
- `/src/styles`: Global styles and Tailwind configuration
- `/public`: Static assets

## Customization

- Edit `tailwind.config.js` to modify theme colors and other design elements
- Update content in `/src/app/page.tsx` to change website sections
- Modify components in `/src/components` directory

## License

This project is licensed under the MIT License.
