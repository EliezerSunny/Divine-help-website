function getBotReply(text) {
      const msg = text.toLowerCase();
      if (msg.includes("hello") || msg.includes("hi")) return "Hello! How can I help you today?";
      if (msg.includes("service") || msg.includes("program")) return "We have Sunday and midweek services. Would you like details?";
      if (msg.includes("wow") || msg.includes("oh")) return "Yeah 👍";
      if (msg.includes("your name") || msg.includes("who are you") || msg.includes("what is your name?")) return "I am Divine AI 🤖";
      if (msg.includes("amen") || msg.includes("amen in Jesus name")) return "Amen!!!";
      if (msg.includes("happy sunday")) return "Wish you many Sundays to come!!!";
      
      // history 
      if (msg.includes("founder") || msg.includes("establishment")) return "Prophet Ezra Adebayo Adetunji";
      if (msg.includes("develop") || msg.includes("create")) return "Eliazer Adetayo";
      
      // Seasons Greatings
      if (msg.includes("merry christmas") || msg.includes("happy christmas")) return "May the joy of Christ's birth fill your heart with blessings, peace, and new beginnings. Christ is born!!!";
      if (msg.includes("easter") || msg.includes("Happy easter")) return "May the joy of Christ's resurrection fill your heart with hope, peace, and new beginnings. He is risen! 🎉";
      if (msg.includes("new year") || msg.includes("Happy new year")) return "Wosh you many more! IJN";
      
      return "I'm here to assist you with information about our church.";
    }
    
   