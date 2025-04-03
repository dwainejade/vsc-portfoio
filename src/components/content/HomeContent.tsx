// src/components/content/HomeContent.tsx
import React, { useState, useEffect, ReactNode } from 'react';
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

// const Number: React.FC<SyntaxProps> = ({ children }) => (
//   <span className="syntax-number">{children}</span>
// );

// const Comment: React.FC<SyntaxProps> = ({ children }) => (
//   <span className="syntax-comment">{children}</span>
// );

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
  const [typedText, setTypedText] = useState("");
  const fullText = "Front-End Developer";
  const [showCursor, setShowCursor] = useState(true);
  const [codeVisible, setCodeVisible] = useState(false);

  // Typing animation effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      // Start blinking cursor and show code after typing is complete
      setCodeVisible(true);
    }
  }, [typedText]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full ">
      <div className="p-8 font-mono text-left max-w-3xl w-full">
        <div className="mb-6 vscode-text">
          <p className="mb-4 opacity-80">Hi all. I am</p>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white">Dwaine Matthew</h1>
          
          <div className="flex items-center text-xl md:text-2xl mb-12">
            <span className="mr-2 syntax-function">&gt;</span>
            <span className="syntax-function">{typedText}</span>
            <span 
              className={`w-2 h-5 syntax-function-bg ml-1 ${showCursor ? '' : 'opacity-0'}`}
            ></span>
          </div>
          
          <div className={`transition-opacity duration-1000 ${codeVisible ? 'opacity-100' : 'opacity-0'}`}>
            <CodeBlock>
              {/* <div className="fade-in-delay-1">
                <Comment>// my number</Comment>
                <CodeLine>
                  <Keyword>const</Keyword> <Variable>telephoneNum</Variable> = <Number>555 123 4567</Number>;
                </CodeLine>
              </div> */}
              
              <div className="fade-in-delay-1">
                {/* <Comment>// my e-mail</Comment> */}
                <CodeLine>
                  <Keyword>const</Keyword> <Variable>email</Variable> = <LinkString href="mailto:dwainem.gnd@gmail.com">"dwainem.gnd@gmail.com"</LinkString>;
                </CodeLine>
              </div>
              
              <div className="fade-in-delay-2">
                {/* <Comment>// you can also see it on my Github page</Comment> */}
                <CodeLine>
                  <Keyword>const</Keyword> <Variable>githubLink</Variable> = <LinkString href="https://github.com/dwainejade">"https://github.com/dwainejade"</LinkString>;
                </CodeLine>
              </div>
 
              <div className="fade-in-delay-3">
                {/* <Comment>// you can check my Linkedin Page</Comment> */}
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