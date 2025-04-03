// src/components/ui/SyntaxHighlight.tsx
import React, { ReactNode } from 'react';

interface SyntaxProps {
  children: ReactNode;
}

export const Keyword: React.FC<SyntaxProps> = ({ children }) => (
  <span className="text-vscode-syntax-keyword">{children}</span>
);

export const Variable: React.FC<SyntaxProps> = ({ children }) => (
  <span className="text-vscode-syntax-variable">{children}</span>
);

export const String: React.FC<SyntaxProps> = ({ children }) => (
  <span className="text-vscode-syntax-string">{children}</span>
);

export const Number: React.FC<SyntaxProps> = ({ children }) => (
  <span className="text-vscode-syntax-number">{children}</span>
);

export const Comment: React.FC<SyntaxProps> = ({ children }) => (
  <span className="text-vscode-syntax-comment">{children}</span>
);

export const Function: React.FC<SyntaxProps> = ({ children }) => (
  <span className="text-vscode-syntax-function">{children}</span>
);

export const Type: React.FC<SyntaxProps> = ({ children }) => (
  <span className="text-vscode-syntax-type">{children}</span>
);

export const Operator: React.FC<SyntaxProps> = ({ children }) => (
  <span className="text-vscode-syntax-operator">{children}</span>
);

interface LinkStringProps extends SyntaxProps {
  href: string;
}

export const LinkString: React.FC<LinkStringProps> = ({ children, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-vscode-syntax-string hover:underline"
  >
    {children}
  </a>
);

export const CodeLine: React.FC<SyntaxProps> = ({ children }) => (
  <div className="font-mono">{children}</div>
);

export const CodeBlock: React.FC<SyntaxProps> = ({ children }) => (
  <div className="space-y-4 font-mono">{children}</div>
);

// Default export with all components
export default {
  Keyword,
  Variable, 
  String,
  Number,
  Comment,
  Function,
  Type,
  Operator,
  LinkString,
  CodeLine,
  CodeBlock
};