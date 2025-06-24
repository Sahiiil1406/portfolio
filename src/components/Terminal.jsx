"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const terminal = useRef(null);
  const currentCommandRef = useRef("");
  const commandHistoryRef = useRef([]);
  const historyIndexRef = useRef(-1);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initTerminal = () => {
      if (!terminalRef.current) {
        // Retry if ref is not ready
        setTimeout(initTerminal, 50);
        return;
      }

      terminal.current = new Terminal({
        cursorBlink: true,
        fontSize: 14,
        fontFamily: 'Consolas, Monaco, "Courier New", monospace',
        theme: {
          background: '#0d1117',
          foreground: '#c9d1d9',
          cursor: '#58a6ff',
          selection: '#264f78',
          black: '#484f58',
          red: '#ff7b72',
          green: '#7ee787',
          yellow: '#d29922',
          blue: '#58a6ff',
          magenta: '#bc8cff',
          cyan: '#39c5cf',
          white: '#b1bac4',
          brightBlack: '#6e7681',
          brightRed: '#ffa198',
          brightGreen: '#56d364',
          brightYellow: '#e3b341',
          brightBlue: '#79c0ff',
          brightMagenta: '#d2a8ff',
          brightCyan: '#56d4dd',
          brightWhite: '#f0f6fc'
        },
        allowTransparency: true,
        scrollback: 1000,
        tabStopWidth: 4
      });

      terminal.current.open(terminalRef.current);
      
      // Animated welcome message
      const welcomeText = 'Welcome to Sahil Kumar\'s Interactive Portfolio Terminal';
      const prompt = '\x1b[90m┌─[\x1b[0m\x1b[96msahil\x1b[0m\x1b[90m@\x1b[0m\x1b[96mportfolio\x1b[0m\x1b[90m]\r\n└─\x1b[0m\x1b[92m$\x1b[0m ';
      
      terminal.current.write('\x1b[95m' + '='.repeat(60) + '\x1b[0m\r\n');
      terminal.current.write('\x1b[93m✨ ' + welcomeText + ' ✨\x1b[0m\r\n');
      terminal.current.write('\x1b[95m' + '='.repeat(60) + '\x1b[0m\r\n');
      terminal.current.write('\x1b[36mType \x1b[0m\x1b[33m"help"\x1b[0m\x1b[36m to see available commands\x1b[0m\r\n\r\n');
      terminal.current.write(prompt);

      terminal.current.onData((data) => {
        handleTerminalInput(data);
      });

      setIsReady(true);
    };

    initTerminal();

    return () => {
      if (terminal.current) {
        terminal.current.dispose();
      }
    };
  }, []);

  const writePrompt = () => {
    terminal.current.write('\x1b[90m┌─[\x1b[0m\x1b[96msahil\x1b[0m\x1b[90m@\x1b[0m\x1b[96mportfolio\x1b[0m\x1b[90m]\r\n└─\x1b[0m\x1b[92m$\x1b[0m ');
  };

  const handleTerminalInput = (data) => {
    const code = data.charCodeAt(0);

    if (code === 13) { // Enter key
      terminal.current.write('\r\n');
      if (currentCommandRef.current.trim()) {
        commandHistoryRef.current.unshift(currentCommandRef.current.trim());
        if (commandHistoryRef.current.length > 50) {
          commandHistoryRef.current.pop();
        }
      }
      executeCommand(currentCommandRef.current);
      currentCommandRef.current = "";
      historyIndexRef.current = -1;
      writePrompt();
    } else if (code === 127 || code === 8) { // Backspace key
      if (currentCommandRef.current.length > 0) {
        terminal.current.write('\b \b');
        currentCommandRef.current = currentCommandRef.current.slice(0, -1);
      }
    } else if (code === 27) { // Escape sequences (arrow keys)
      return; // Handle in next data event
    } else if (data === '\x1b[A') { // Up arrow
      if (historyIndexRef.current < commandHistoryRef.current.length - 1) {
        historyIndexRef.current++;
        const historicalCommand = commandHistoryRef.current[historyIndexRef.current];
        // Clear current line
        terminal.current.write('\x1b[2K\r');
        writePrompt();
        terminal.current.write(historicalCommand);
        currentCommandRef.current = historicalCommand;
      }
    } else if (data === '\x1b[B') { // Down arrow
      if (historyIndexRef.current > 0) {
        historyIndexRef.current--;
        const historicalCommand = commandHistoryRef.current[historyIndexRef.current];
        terminal.current.write('\x1b[2K\r');
        writePrompt();
        terminal.current.write(historicalCommand);
        currentCommandRef.current = historicalCommand;
      } else if (historyIndexRef.current === 0) {
        historyIndexRef.current = -1;
        terminal.current.write('\x1b[2K\r');
        writePrompt();
        currentCommandRef.current = "";
      }
    } else if (code === 9) { // Tab key - auto complete
      handleTabCompletion();
    } else if (code === 3) { // Ctrl+C
      terminal.current.write('^C\r\n');
      currentCommandRef.current = "";
      writePrompt();
    } else if (code === 12) { // Ctrl+L
      terminal.current.clear();
      writePrompt();
    } else if (code < 32 || code === 255) {
      return; // Ignore other control characters
    } else {
      terminal.current.write(data);
      currentCommandRef.current += data;
    }
  };

  const handleTabCompletion = () => {
    const commands = ['help', 'intro', 'techstack', 'contact', 'projects', 'education', 'clear', 'echo', 'whoami', 'date', 'skills', 'experience'];
    const matches = commands.filter(cmd => cmd.startsWith(currentCommandRef.current));
    
    if (matches.length === 1) {
      const completion = matches[0].substring(currentCommandRef.current.length);
      terminal.current.write(completion);
      currentCommandRef.current += completion;
    } else if (matches.length > 1) {
      terminal.current.write('\r\n\x1b[36mSuggestions: \x1b[0m' + matches.join('  ') + '\r\n');
      writePrompt();
      terminal.current.write(currentCommandRef.current);
    }
  };

  const typeWriter = (text, color = '37') => {
    return new Promise((resolve) => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          terminal.current.write(`\x1b[${color}m${text[i]}\x1b[0m`);
          i++;
        } else {
          clearInterval(timer);
          terminal.current.write('\r\n');
          resolve();
        }
      }, 20);
    });
  };

  const executeCommand = async (command) => {
    const cmd = command.trim().toLowerCase();
    const args = command.trim().split(' ');
    
    switch (cmd) {
      case 'help':
        terminal.current.write('\x1b[95m╭─────────────────────────────────────────╮\x1b[0m\r\n');
        terminal.current.write('\x1b[95m│\x1b[0m           \x1b[93mAVAILABLE COMMANDS\x1b[0m           \x1b[95m│\x1b[0m\r\n');
        terminal.current.write('\x1b[95m├─────────────────────────────────────────┤\x1b[0m\r\n');
        terminal.current.write('\x1b[95m│\x1b[0m \x1b[96mhelp\x1b[0m      - Show this help menu        \x1b[95m│\x1b[0m\r\n');
        terminal.current.write('\x1b[95m│\x1b[0m \x1b[96mintro\x1b[0m     - About me                   \x1b[95m│\x1b[0m\r\n');
        terminal.current.write('\x1b[95m│\x1b[0m \x1b[96mtechstack\x1b[0m - My technical skills          \x1b[95m│\x1b[0m\r\n');
        terminal.current.write('\x1b[95m│\x1b[0m \x1b[96mskills\x1b[0m    - Detailed skill breakdown    \x1b[95m│\x1b[0m\r\n');
        terminal.current.write('\x1b[95m│\x1b[0m \x1b[96mprojects\x1b[0m  - My portfolio projects       \x1b[95m│\x1b[0m\r\n');
        terminal.current.write('\x1b[95m│\x1b[0m \x1b[96mexperience\x1b[0m- Professional experience     \x1b[95m│\x1b[0m\r\n');
        terminal.current.write('\x1b[95m│\x1b[0m \x1b[96meducation\x1b[0m - Educational background      \x1b[95m│\x1b[0m\r\n');
        terminal.current.write('\x1b[95m│\x1b[0m \x1b[96mcontact\x1b[0m   - Get in touch               \x1b[95m│\x1b[0m\r\n');
        terminal.current.write('\x1b[95m│\x1b[0m \x1b[96mwhoami\x1b[0m    - Current user info          \x1b[95m│\x1b[0m\r\n');
        terminal.current.write('\x1b[95m│\x1b[0m \x1b[96mdate\x1b[0m      - Show current date/time     \x1b[95m│\x1b[0m\r\n');
        terminal.current.write('\x1b[95m│\x1b[0m \x1b[96mclear\x1b[0m     - Clear terminal screen      \x1b[95m│\x1b[0m\r\n');
        terminal.current.write('\x1b[95m│\x1b[0m \x1b[96mecho\x1b[0m      - Echo back text             \x1b[95m│\x1b[0m\r\n');
        terminal.current.write('\x1b[95m╰─────────────────────────────────────────╯\x1b[0m\r\n');
        terminal.current.write('\x1b[90mTip: Use Tab for auto-completion, ↑↓ for command history\x1b[0m\r\n');
        break;

      case 'intro':
        terminal.current.write('\x1b[93m🚀 Hello! I\'m Sahil Kumar\x1b[0m\r\n\r\n');
        await typeWriter('A passionate Full-Stack Developer specializing in Web2.0 + Web3.0 technologies.', '36');
        await typeWriter('I love building robust, scalable applications that solve real-world problems.', '36');
        await typeWriter('Always exploring cutting-edge technologies and best practices! 💻✨', '36');
        break;

      case 'techstack':
        terminal.current.write('\x1b[95m🛠️  TECHNOLOGY STACK\x1b[0m\r\n');
        terminal.current.write('\x1b[95m' + '─'.repeat(25) + '\x1b[0m\r\n');
        terminal.current.write('\x1b[92m▶ Frontend:\x1b[0m React.js, Next.js, HTML5, CSS3, JavaScript (ES6+)\r\n');
        terminal.current.write('\x1b[94m▶ Backend:\x1b[0m Node.js, Express.js, RESTful APIs\r\n');
        terminal.current.write('\x1b[93m▶ Database:\x1b[0m MongoDB, PostgreSQL, Redis\r\n');
        terminal.current.write('\x1b[96m▶ Blockchain:\x1b[0m Solidity, Hardhat, Web3.js, Ethers.js\r\n');
        terminal.current.write('\x1b[91m▶ DevOps:\x1b[0m Docker, AWS, Git, CI/CD\r\n');
        terminal.current.write('\x1b[35m▶ Tools:\x1b[0m VS Code, Postman, Figma, Linux\r\n');
        break;

      case 'skills':
        terminal.current.write('\x1b[96m📊 SKILL PROFICIENCY LEVELS\x1b[0m\r\n');
        terminal.current.write('\x1b[96m' + '═'.repeat(35) + '\x1b[0m\r\n');
        const skills = [
          { name: 'React/Next.js', level: 90, color: '92' },
          { name: 'Node.js/Express', level: 85, color: '93' },
          { name: 'MongoDB', level: 80, color: '94' },
          { name: 'Solidity/Web3', level: 75, color: '95' },
          { name: 'JavaScript/TS', level: 88, color: '96' },
          { name: 'Python', level: 70, color: '91' }
        ];
        
        skills.forEach(skill => {
          const filled = Math.floor(skill.level / 10);
          const empty = 10 - filled;
          const bar = '█'.repeat(filled) + '░'.repeat(empty);
          terminal.current.write(`\x1b[${skill.color}m${skill.name.padEnd(15)}\x1b[0m [\x1b[92m${bar}\x1b[0m] ${skill.level}%\r\n`);
        });
        break;

      case 'projects':
        terminal.current.write('\x1b[93m🎯 FEATURED PROJECTS\x1b[0m\r\n');
        terminal.current.write('\x1b[93m' + '═'.repeat(25) + '\x1b[0m\r\n\r\n');
        
        terminal.current.write('\x1b[96m1. 🌐 Web3 Social Media Platform\x1b[0m\r\n');
        terminal.current.write('   \x1b[90m├─\x1b[0m Decentralized social platform with smart contracts\r\n');
        terminal.current.write('   \x1b[90m├─\x1b[0m Tech: Hardhat, Next.js, Solidity, IPFS\r\n');
        terminal.current.write('   \x1b[90m└─\x1b[0m Features: NFT profiles, token rewards, DAO governance\r\n\r\n');
        
        terminal.current.write('\x1b[95m2. 📚 Course Management System\x1b[0m\r\n');
        terminal.current.write('   \x1b[90m├─\x1b[0m Full-stack LMS with real-time features\r\n');
        terminal.current.write('   \x1b[90m├─\x1b[0m Tech: MERN Stack, Socket.io, JWT\r\n');
        terminal.current.write('   \x1b[90m└─\x1b[0m Features: Live classes, assignments, progress tracking\r\n\r\n');
        
        terminal.current.write('\x1b[94m3. 🌍 Lingua Connect\x1b[0m\r\n');
        terminal.current.write('   \x1b[90m├─\x1b[0m Language learning platform with AI integration\r\n');
        terminal.current.write('   \x1b[90m├─\x1b[0m Tech: React, Node.js, OpenAI API, PostgreSQL\r\n');
        terminal.current.write('   \x1b[90m└─\x1b[0m Features: AI tutoring, speech recognition, gamification\r\n');
        break;

      case 'experience':
        terminal.current.write('\x1b[92m💼 PROFESSIONAL EXPERIENCE\x1b[0m\r\n');
        terminal.current.write('\x1b[92m' + '═'.repeat(35) + '\x1b[0m\r\n\r\n');
        terminal.current.write('\x1b[96m🏢 Full-Stack Developer Intern\x1b[0m\r\n');
        terminal.current.write('   \x1b[90m├─\x1b[0m Duration: 6 months\r\n');
        terminal.current.write('   \x1b[90m├─\x1b[0m Built responsive web applications\r\n');
        terminal.current.write('   \x1b[90m└─\x1b[0m Collaborated with cross-functional teams\r\n\r\n');
        terminal.current.write('\x1b[93m🚀 Freelance Web3 Developer\x1b[0m\r\n');
        terminal.current.write('   \x1b[90m├─\x1b[0m Smart contract development\r\n');
        terminal.current.write('   \x1b[90m├─\x1b[0m DApp frontend integration\r\n');
        terminal.current.write('   \x1b[90m└─\x1b[0m Successfully delivered 5+ projects\r\n');
        break;

      case 'contact':
        terminal.current.write('\x1b[96m📧 GET IN TOUCH\x1b[0m\r\n');
        terminal.current.write('\x1b[96m' + '═'.repeat(20) + '\x1b[0m\r\n');
        terminal.current.write('\x1b[92m📧 Email:\x1b[0m    supersen@gmail.com\r\n');
        terminal.current.write('\x1b[94m🔗 LinkedIn:\x1b[0m /in/sahilkumar-dev\r\n');
        terminal.current.write('\x1b[95m🐙 GitHub:\x1b[0m   /sahilkumar-dev\r\n');
        terminal.current.write('\x1b[93m🌐 Portfolio:\x1b[0m www.sahilkumar.dev\r\n');
        terminal.current.write('\x1b[91m📱 Twitter:\x1b[0m  @sahilkumar_dev\r\n');
        break;

      case 'education':
        terminal.current.write('\x1b[93m🎓 EDUCATIONAL BACKGROUND\x1b[0m\r\n');
        terminal.current.write('\x1b[93m' + '═'.repeat(30) + '\x1b[0m\r\n');
        terminal.current.write('\x1b[96m🏛️  National Institute of Technology Karnataka (NITK)\x1b[0m\r\n');
        terminal.current.write('   \x1b[90m├─\x1b[0m Bachelor of Technology in Computer Science\r\n');
        terminal.current.write('   \x1b[90m├─\x1b[0m Surathkal, Karnataka\r\n');
        terminal.current.write('   \x1b[90m├─\x1b[0m Current CGPA: 8.5/10\r\n');
        terminal.current.write('   \x1b[90m└─\x1b[0m Expected Graduation: 2025\r\n\r\n');
        terminal.current.write('\x1b[95m📚 Relevant Coursework:\x1b[0m\r\n');
        terminal.current.write('   • Data Structures & Algorithms\r\n');
        terminal.current.write('   • Database Management Systems\r\n');
        terminal.current.write('   • Computer Networks\r\n');
        terminal.current.write('   • Software Engineering\r\n');
        break;

      case 'whoami':
        terminal.current.write('\x1b[96msahil@portfolio:~$ \x1b[92mCurrently viewing Sahil Kumar\'s portfolio\x1b[0m\r\n');
        terminal.current.write('\x1b[90mRole: Full-Stack Developer | Web3 Enthusiast\x1b[0m\r\n');
        break;

      case 'date':
        const now = new Date();
        terminal.current.write(`\x1b[94m📅 ${now.toDateString()}\x1b[0m\r\n`);
        terminal.current.write(`\x1b[94m⏰ ${now.toLocaleTimeString()}\x1b[0m\r\n`);
        break;

      case 'clear':
        terminal.current.clear();
        break;

      case '':
        break;

      default:
        if (args[0] === 'echo') {
          const echoText = args.slice(1).join(' ');
          terminal.current.write(`\x1b[97m${echoText}\x1b[0m\r\n`);
        } else {
          terminal.current.write(`\x1b[91m❌ Command not found: '\x1b[93m${command}\x1b[91m'\x1b[0m\r\n`);
          terminal.current.write(`\x1b[90mType '\x1b[96mhelp\x1b[90m' to see available commands\x1b[0m\r\n`);
        }
    }
  };



  return (
    <div className="h-[600px] p-4">
      <div className="max-w-6xl mx-auto ">
        <div className="bg-[#161b22] rounded-lg shadow-2xl border border-[#30363d] overflow-hidden bg-opacity-0 h-[500px] md:h-[530px] ">
          <div className="bg-[#21262d] px-4 py-2 flex items-center space-x-2 border-b border-[#30363d]">
            <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
            <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
            <div className="w-3 h-3 bg-[#27ca3f] rounded-full"></div>
            <div className="ml-4 text-[#2d4b6c] text-sm font-mono">
              sahil@portfolio: ~
            </div>
          </div>
          <div className="p-4">
            <div 
              ref={terminalRef} 
              className="min-h-[600px] w-full focus:outline-none"
              style={{ 
                background: 'transparent',
                fontFamily: 'Consolas, Monaco, "Courier New", monospace'
              }}
            />
          </div>
        </div>
        {/* <div className="mt-4 text-center text-[#8b949e] text-sm">
          <p>💡 Pro tip: Use <span className="text-[#58a6ff]">Tab</span> for auto-completion and <span className="text-[#58a6ff]">↑↓</span> arrows for command history</p>
        </div> */}
      </div>
    </div>
  );
};

export default TerminalComponent;