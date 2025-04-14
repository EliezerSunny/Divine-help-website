function toggleChat() {
      const chatWidget = document.getElementById('chatWidget');
      const timeBox = document.getElementById('chatTime');
      if (chatWidget.style.display === 'flex') {
        chatWidget.style.display = 'none';
      } else {
        chatWidget.style.display = 'flex';
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeBox.innerText = `Conversation started at ${timeStr}`;
      }
    }

    function sendMessage() {
      const input = document.getElementById('userInput');
      const chatBox = document.getElementById('chatMessages');
      const userText = input.value.trim();
      if (userText === '') return;

      const userMsg = document.createElement('div');
      userMsg.className = 'user-message';
      userMsg.innerText = userText;
      chatBox.appendChild(userMsg);
      input.value = '';
      chatBox.scrollTop = chatBox.scrollHeight;

      // Typing effect
      const typingMsg = document.createElement('div');
      typingMsg.className = 'bot-message typing';
      typingMsg.innerText = 'DivineAI is typing...';
      chatBox.appendChild(typingMsg);
      chatBox.scrollTop = chatBox.scrollHeight;

      setTimeout(() => {
        typingMsg.remove();
        const botMsg = document.createElement('div');
        botMsg.className = 'bot-message';
        botMsg.innerText = getBotReply(userText);
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 1200);
    }