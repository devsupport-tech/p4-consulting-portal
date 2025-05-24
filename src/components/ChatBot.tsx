
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm here to help you learn more about P4 Companies and Services. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to P4 Companies and Services. I'm here to help you with information about our consulting services. What would you like to know?";
    }
    
    if (message.includes('service') || message.includes('what do you do')) {
      return "We offer comprehensive business consulting services including Business Strategy, Financial Consulting, Management Consulting, and Human Resources consulting. Would you like to know more about any specific service?";
    }
    
    if (message.includes('strategy') || message.includes('strategic')) {
      return "Our Business Strategy services help you define clear objectives, identify market opportunities, and develop comprehensive roadmaps for sustainable growth. We provide market analysis, strategic planning, and business model optimization.";
    }
    
    if (message.includes('financial') || message.includes('finance')) {
      return "Our Financial Consulting services help optimize your financial operations, improve profitability, and make sound financial decisions. We offer financial analysis, cost optimization, forecasting, and investment strategy guidance.";
    }
    
    if (message.includes('management') || message.includes('operational')) {
      return "Our Management Consulting focuses on optimizing organizational structure, processes, and leadership capabilities. We help with organizational design, process optimization, change management, and leadership development.";
    }
    
    if (message.includes('hr') || message.includes('human resources') || message.includes('talent')) {
      return "Our HR consulting services help build exceptional teams and develop effective talent management strategies. We assist with talent acquisition, performance management, compensation optimization, and culture development.";
    }
    
    if (message.includes('contact') || message.includes('get in touch') || message.includes('consultation')) {
      return "I'd be happy to help you get in touch! You can schedule a free consultation by visiting our Contact page or clicking the 'Schedule a Free Consultation' button. Our team will respond promptly to discuss your specific needs.";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return "Our pricing varies based on the specific services and scope of your project. We offer customized solutions tailored to your needs. I'd recommend scheduling a free consultation where we can discuss your requirements and provide a detailed proposal.";
    }
    
    if (message.includes('experience') || message.includes('track record')) {
      return "P4 Companies and Services has over 10 years of experience, having served 150+ clients across 25+ industries with a 95% client satisfaction rate. Our expert team brings diverse expertise and proven results to every engagement.";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! I'm glad I could help. If you have any other questions about our services or would like to schedule a consultation, please don't hesitate to ask!";
    }
    
    if (message.includes('bye') || message.includes('goodbye')) {
      return "Thank you for your interest in P4 Companies and Services! Feel free to reach out anytime if you have more questions. Have a great day!";
    }
    
    return "That's a great question! For detailed information about that topic, I'd recommend speaking with one of our consulting experts. You can schedule a free consultation through our Contact page, or feel free to ask me about our specific services: Strategy, Financial, Management, or HR consulting.";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-200 flex items-center justify-center",
          isOpen && "hidden"
        )}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-background border border-border rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">P4 Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded p-1 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.isBot ? "justify-start" : "justify-end"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] p-3 rounded-lg text-sm",
                    message.isBot
                      ? "bg-secondary text-foreground"
                      : "bg-primary text-white"
                  )}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary text-foreground p-3 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-primary text-white p-2 rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
