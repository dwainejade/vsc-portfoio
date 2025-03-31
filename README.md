# VSCode Portfolio

A personal portfolio website built with React and TypeScript, styled to look and feel like Visual Studio Code. This project creates an interactive and familiar development environment to showcase your skills, projects, and experience.

![VSCode Portfolio Screenshot](screenshot.png)

## Features

### Core Features
- **VS Code-Like Navigation Tabs**
  - Open, close, and switch between different sections of the portfolio
  - Visual styling that matches VS Code's tab interface
  - Active tab highlighting

- **Interactive File Explorer**
  - Sidebar with expandable folder structure
  - Navigate through different sections by clicking on files
  - Familiar VS Code-style icons and layout

- **Tab Management**
  - Close tabs with a click
  - Reopen previously closed tabs
  - Drag and reorder tabs
  - Remember open tabs between sessions

- **Search Functionality**
  - Search bar to quickly find and navigate to content
  - Filter through projects, skills, or other portfolio content
  - Keyboard shortcuts for quick access

### Planned Features
- **Split View**
  - View multiple sections side by side
  - Resizable panes
  - Drag tabs between panes

- **Theme Support**
  - Switch between light and dark themes
  - Add custom VS Code themes
  - Remember preferred theme setting

- **Terminal Integration**
  - Interactive terminal component
  - Run simple commands to navigate or display information
  - Easter eggs and interactive demos

## Technology Stack

- **Frontend**: React 19 with TypeScript
- **State Management**: Zustand
- **Styling**: TailwindCSS 4
- **Build Tool**: Vite 6
- **Package Manager**: pnpm

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vscode-portfolio.git
   cd vscode-portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Build for production:
   ```bash
   pnpm build
   ```

## Project Structure

```
vscode-portfolio/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and other assets
│   ├── components/       # React components
│   │   ├── Explorer/     # Side bar file explorer components
│   │   ├── Tabs/         # Tab navigation components
│   │   └── Terminal/     # Terminal component (planned)
│   ├── pages/            # Portfolio content pages
│   ├── stores/           # Zustand state management
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── index.html            # HTML template
└── package.json          # Project dependencies and scripts
```

## Customization

### Adding New Tabs/Pages

1. Define a new tab in the `useStore.ts` file:
   ```typescript
   const initialTabs = [
     // existing tabs
     { id: 'new-tab', title: 'New Tab', extension: 'tsx', icon: '📄', isActive: false },
   ];
   ```

2. Add the corresponding content in your `App.tsx` or create a dedicated component

### Adding Projects

Create new project entries in your projects data file and they will automatically appear in the projects section.

### Customizing Theme

Modify the TailwindCSS configuration to change colors, spacing, and other design elements.

## Deployment

This project can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Example deployment with Vercel:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Visual Studio Code
- Tab system based on VS Code's tab management
- Icons and design elements styled to match the VS Code interface