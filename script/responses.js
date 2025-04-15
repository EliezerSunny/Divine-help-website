function getBotReply(text) {
      const msg = text.toLowerCase();
      if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) 
      return "Hello! How can I help you today?";
      if (msg.includes("service") || msg.includes("program")) 
      return "We have Sunday and midweek services. Would you like details?";
      if (msg.includes("wow") || msg.includes("oh")) 
      return "Yeah 👍";
      if (msg.includes("your name") || msg.includes("who are you") || msg.includes("what is your name?")) return "I am Divine AI 🤖";
      if (msg.includes("amen") || msg.includes("amen in Jesus name")) 
      return "Amen!!!";
      if (msg.includes("happy sunday")) 
      return "Wish you many Sundays to come!!!";
      if (msg.includes("god")) 
      return "God is great!!!";
      if (msg.includes("i love this") || msg.includes("i like this")) 
      return "I'm glad you do. 🤗";
      if (msg.includes("goodnight") || msg.includes("i like this")) 
      return "Have a wonderful dream! 😴";
      if (msg.includes("good afternoon")) 
      return "To you too! How is your day going?";
      if (msg.includes("good evening")) 
      return "Evening, how was your day?";
      if (msg.includes("good morning")) 
      return "Morning to you too! 🥱 How was your night?";
      if (msg.includes("good") || msg.includes("great")) 
      return "Great to hear that.";
      
      // history 
      if (msg.includes("founder") || msg.includes("church prophet")) 
      return "Prophet Ezra Adebayo Adetunji";
      if (msg.includes("develop") || msg.includes("create")) 
      return "Eliazer Adetayo";
      if (msg.includes("history") || msg.includes("establishment")) 
      return "THE HISTORY OF ESTABLISHMENT OF ONA IWA MIMO C&S CHURCH, DIVINE HELP. <br>             There are many messages of God that were received by the servant of God, Apostle Ezra Adebayo Adetunji, about the plan of God to establish church through him. Some of these messages were sent through prophets and prophetess, while some messages were sent directly to him. God revealed His mission to establish His church through Apostle Ezra Adetunji to prophetess Esther Olayemi Ojuoluwa. From Erekiti Ondo State, on 5th July, 2017. Prophetess Esther Ojuoluwa received another message from God on wednesday, 3rd october, 2018 that Apostle Adetunji should establish church. <br> On Wednesday 3rd october, 2018 God sent the following messages to Apostle Ezra Adetunji through prophet James Koredele Olalowo. From Oyo, Oyo State. The message goes thus: <br> 1. 'It is time for you to go out and establish the church of the Lord'. In the message the location of the church was mentioned (along Oloko-road, Igboho, Oyo State. Nigeria). <br> 2. 'Apostle Ezra Adetunji was mandated by God to begin process for ordination as prophet'. To this effect Bayo Adetunji harken to the Word of God and was ordained as prophet on 28th October, 2018 by spiritual father (General Overseer) of Ona Iwa Mimo Cherubim and Seraphim church, Nigeria and Overseas. In person of Joseph Aderibigbe Ibikunle(COM, JP). <br> Prophet Olalowo added 'you are raise for the rise of some people and the fall of some people, don't be afraid'. <br> On 7th October, 2018 Apostle Ezra Adetunji himself received message from God which confirmed many messages through prophets and prophetess that he should rise up and establish the church. <br> In a dream he (Adetunji) had. He received message of God through one of the late spiritual father (General Overseer) of Ona Iwa Mimo Cherubim and Seraphim late Jacob Oyesiji(COM). The message goes thus 'my Son we see your commitment and your conserted efforts to the service of God and humanity towards the stability and expansion of the church of God and spreading the gospel. You are highly commended. Go ahead with good services to God, for God is with you always'. <br> This is another Word of God that came to his servant through prophetess Caroline Oladele of Akure, Ondo State. 'It is true that God send you to establish His church, don't tary and do not fear, for God is by your Sides'. <br> Moreover, in a dream had by Mrs. Racheal Adetunji (the minister's wife) on 18th December, 2018 that God has prepared a room upstair for She and her husband, where many people will run to for their safety. <br> The establishment of the church. On 6th October, 2018, the proposed land for the new church was reached by prophet Ezra Adebayo and prophet James Olalowo to sanctify the land in preparation for the commencement of first Sunday service. The formal launching of the church came up on 23rd December, 2018 when first Sunday service was observed. In attendance were prophet Ezra Adebayo and his family.";
      
      // Seasons Greatings
      if (msg.includes("merry christmas") || msg.includes("happy christmas")) 
      return "May the joy of Christ's birth fill your heart with blessings, peace, and new beginnings. Christ is born!!!";
      if (msg.includes("easter") || msg.includes("Happy easter")) 
      return "May the joy of Christ's resurrection fill your heart with hope, peace, and new beginnings. He is risen! 🎉";
      if (msg.includes("new year") || msg.includes("Happy new year")) 
      return "Wish you many more! IJN";
      
      
      
      return "I'm here to assist you with information about our church.";
    }
    
   