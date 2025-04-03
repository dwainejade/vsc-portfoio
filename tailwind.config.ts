/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // VS Code theme colors
          'vscode': {
            // Main UI colors
            'bg': '#1e1e1e',
            'bg-light': '#252526',
            'bg-hover': '#2d2d2d',
            'bg-active': '#37373d',
            'border': '#1e1e1e',
            'border-light': '#323232',
            
            // Text colors
            'text': '#d4d4d4',
            'text-light': '#cccccc',
            'text-secondary': '#858585',
            
            // Accent colors
            'accent': '#007acc',
            'accent-hover': '#0088e2',
            
            // Syntax highlighting colors
            'syntax': {
              'keyword': '#569CD6',    // blue - const, import, etc.
              'variable': '#9CDCFE',   // light blue - variable names
              'function': '#DCDCAA',   // yellow - function names
              'string': '#CE9178',     // orange - string values
              'number': '#B5CEA8',     // light green - numbers
              'comment': '#6A9955',    // green - comments
              'type': '#4EC9B0',       // teal - types
              'class': '#4EC9B0',      // teal - class names
              'property': '#9CDCFE',   // light blue - property names
              'parameter': '#9CDCFE',  // light blue - parameter names
              'method': '#DCDCAA',     // yellow - method names
              'operator': '#D4D4D4',   // white - operators
              'punctuation': '#D4D4D4' // white - punctuation
            },
            
            // Status colors
            'error': '#f48771',
            'warning': '#cca700',
            'success': '#89d185',
            'modified': '#1b80b2',
            'debug': '#c586c0'
          }
        },
        fontFamily: {
          'mono': ['Consolas', 'Monaco', 'Courier New', 'monospace']
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' }
          },
          blink: {
            '0%, 100%': { opacity: '0' },
            '50%': { opacity: '1' }
          },
          typing: {
            '0%': { width: '0' },
            '100%': { width: '100%' }
          }
        },
        animation: {
          fadeIn: 'fadeIn 0.5s ease-in-out forwards',
          blink: 'blink 1s step-end infinite',
          typing: 'typing 3.5s steps(40, end)'
        }
      },
    },
    plugins: [],
  }