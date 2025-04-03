import React from 'react';

const ContactContent: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-purple-400">Contact</h1>
      <p className="mb-4">Feel free to reach out to me:</p>
      <ul className="space-y-2">
        <li>
          <span className="font-semibold"><span className='const-color'>const</span> email =</span> 
          <a href="mailto:dwainem.gnd@gmail.com" className="text-blue-400 hover:underline ml-1">dwainem.gnd@gmail.com</a>
        </li>
        <li>
          <span className="font-semibold"><span className='const-color'>const</span> github =</span> 
          <a href="https://github.com/dwainejade" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">github.com/dwainejade</a>
        </li>
        <li>
          <span className="font-semibold"><span className='const-color'>const</span> linkedIn = </span> 
          <a href="https://linkedin.com/in/dwaine-matthew" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">linkedin.com/in/dwaine-matthew</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactContent;