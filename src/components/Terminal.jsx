"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const terminal = useRef(null);
  const currentCommandRef = useRef("");

  useEffect(() => {
    terminal.current = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#1e1e1e',
        foreground: '#ffffff'
      }
    });
    terminal.current.open(terminalRef.current);
    terminal.current.write('\x1b[32mWelcome to my portfolio (Sahil Kumar)\x1b[0m\r\n$ '); // Green welcome message

    terminal.current.onData((data) => {
      handleTerminalInput(data);
    });

    return () => {
      terminal.current.dispose();
    };
  }, []);

  const handleTerminalInput = (data) => {
    const code = data.charCodeAt(0);

    if (code === 13) { // Enter key
      terminal.current.write('\r\n');
      executeCommand(currentCommandRef.current);
      currentCommandRef.current = "";
      terminal.current.write('$ ');
    } else if (code === 127) { // Backspace key
      if (currentCommandRef.current.length > 0) {
        terminal.current.write('\b \b');
        currentCommandRef.current = currentCommandRef.current.slice(0, -1);
      }
    } else if (code < 32 || code === 255) {
      return; // Do nothing for non-printable characters
    } else {
      terminal.current.write(data);
      currentCommandRef.current += data;
    }
  };

  const executeCommand = (command) => {
    switch (command.trim()) {
      case 'help':
        terminal.current.write('\x1b[36mAvailable commands:\r\nintro, techstack, contact, projects, education,clear\x1b[0m\r\n'); // Cyan text
        break;
      case 'intro':
        terminal.current.write('\x1b[33mHello! I am a Web2.0 + Web3.0 developer.\r\nI love to build robust and scalable applications.\x1b[0m\r\n'); // Yellow text
        break;
      case 'techstack':
        terminal.current.write('\x1b[35mI am proficient in\r\nReact\r\nNode.js,\r\nExpress.js\r\nMongoDB\r\nSolidity.\x1b[0m\r\n'); // Magenta text
        break;
      case 'contact':
        terminal.current.write('\x1b[34mYou can reach me at\r\nsupersen@gmail.com\x1b[0m\r\n'); // Blue text
        break;
      case 'projects':
        terminal.current.write('\x1b[31m1. Web3 socialMedia app using hardhat and nextJs\r\n2. Course Management System\r\n3. Lingua connect\x1b[0m\r\n'); // Red text
        break;
      case 'education':
        terminal.current.write('\x1b[32mI am a Computer Science undergrad from NITK Surathkal\x1b[0m\r\n'); // Green text
        break;
      case 'clear':
        terminal.current.clear();
        break;
      case command.match(/^echo\s+(.*)$/)?.input:
        const echoedText = command.match(/^echo\s+(.*)$/)[1];
        terminal.current.write(`\x1b[37m${echoedText}\x1b[0m\r\n`); // White text
        break;
      default:
        terminal.current.write(`\x1b[31mCommand not found: ${command}\x1b[0m\r\n`); // Red text for errors
    }
  };

  return (
    <div className='sm:w-[98%] lg:w-[80%]  p-2 relative lg:ml-32 lg:mr-32 '>
      <div ref={terminalRef} className='overflow-hidden p-5'/>
    </div>
  );
};



export default TerminalComponent;
