// src/components/content/HomeContent.tsx
import React, { ReactNode } from 'react';
import '../../styles/vscode-theme.css';

// Syntax highlighting components
interface SyntaxProps {
  children: ReactNode;
}

const Keyword: React.FC<SyntaxProps> = ({ children }) => (
  <span className="syntax-keyword">{children}</span>
);

const Variable: React.FC<SyntaxProps> = ({ children }) => (
  <span className="syntax-variable">{children}</span>
);

interface LinkStringProps extends SyntaxProps {
  href: string;
}

const LinkString: React.FC<LinkStringProps> = ({ children, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="syntax-string link-hover"
  >
    {children}
  </a>
);

const CodeLine: React.FC<SyntaxProps> = ({ children }) => (
  <div className="code-line">{children}</div>
);

const CodeBlock: React.FC<SyntaxProps> = ({ children }) => (
  <div className="code-block">{children}</div>
);

// Main component
const HomeContent: React.FC = () => {
  const typedText = "Front-End Developer";
  const showCursor = false;
  const codeVisible = true;

  return (
    <div className="flex h-full ">
      <div className="p-8 font-mono text-left max-w-3xl w-full">
        <div className="mb-6 vscode-text">
          <p className="mb-4 opacity-80">Hello world. I'm,</p>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white">Dwaine Matthew</h1>
          
          <div className="flex items-center text-xl md:text-2xl mb-12">
            <span className="mr-2 syntax-function">&gt;</span>
            <span className="syntax-function">{typedText}</span>
          </div>
          
          <div className="opacity-100">
            <CodeBlock>
              <div>
                <CodeLine>
                  <Keyword>const</Keyword> <Variable>email</Variable> = <LinkString href="mailto:dwainem.gnd@gmail.com">"dwainem.gnd@gmail.com"</LinkString>;
                </CodeLine>
              </div>
              
              <div>
                <CodeLine>
                  <Keyword>const</Keyword> <Variable>githubLink</Variable> = <LinkString href="https://github.com/dwainejade">"https://github.com/dwainejade"</LinkString>;
                </CodeLine>
              </div>
 
              <div>
                <CodeLine>
                  <Keyword>const</Keyword> <Variable>linkedinPage</Variable> = <LinkString href="https://www.linkedin.com/in/dwaine-matthew/">"https://www.linkedin.com/in/dwaine-matthew/"</LinkString>;
                </CodeLine>
              </div>
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;