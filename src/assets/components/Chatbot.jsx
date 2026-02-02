import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaPaperPlane, FaTimes, FaUser, FaPhone, FaEnvelope, FaQuoteRight, FaTruck } from "react-icons/fa";

const initialMessages = [
    {
        id: 1,
        text: "👋 Hello! I'm CLE Freight Assistant. I can help you with shipping quotes, tracking, carrier partnerships, and more! What can I help you with today?",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
];

const quickQuestions = [
    "Get a freight quote",
    "Track my shipment",
    "Become a carrier partner",
    "Contact support",
    "Services offered",
    "Get insurance info"
];

const faqResponses = {
    "get a freight quote": "To get a freight quote, you can:\n1. Visit our Quote page\n2. Call us at +1 (862) 417-3188\n3. Email clefreight@outlook.com\n\nWhat type of shipment are you shipping?",
    "track my shipment": "For shipment tracking, please provide your tracking number or contact our dispatch team at +1 (862) 417-3188 for real-time updates on your shipment.",
    "become a carrier partner": "To become a carrier partner, email clefreight@outlook.com with your MC#, insurance certificate, and we'll guide you through the setup process. What's your MC number?",
    "contact support": "You can contact us:\n📞 Phone: +1 (862) 417-3188\n✉️ Email: clefreight@outlook.com\n📍 Dispatch: Available 24/7",
    "services offered": "We offer:\n• Dry Van Shipping\n• Reefer (Temperature Controlled)\n• Flatbed\n• Full Truckload (FTL)\n• Nationwide Coverage\n• 24/7 Dispatch",
    "get insurance info": "CLE FREIGHT LLC is fully insured. Our insurance details:\n• MC#: 1775717\n• DOT#: 4491865\n• Fully Licensed & Insured",
    "hello": "Hello! How can I help you with your freight needs today?",
    "hi": "Hi there! Welcome to CLE Freight. What shipping service are you looking for?",
    "thanks": "You're welcome! Is there anything else I can help you with?",
    "thank you": "You're welcome! Let me know if you need anything else.",
    "bye": "Goodbye! Feel free to reach out anytime. Have a great day!",
    "goodbye": "Goodbye! Safe travels and talk soon!"
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(initialMessages);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (text) => {
        if (!text.trim()) return;

        // Add user message
        const userMessage = {
            id: messages.length + 1,
            text: text,
            sender: "user",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText("");
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const botResponse = generateBotResponse(text.toLowerCase());
            const botMessage = {
                id: messages.length + 2,
                text: botResponse,
                sender: "bot",
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000);
    };

    const generateBotResponse = (userInput) => {
        // Check for exact matches
        for (const [key, response] of Object.entries(faqResponses)) {
            if (userInput.includes(key)) {
                return response;
            }
        }

        // Check for keyword matches
        if (userInput.includes("quote") || userInput.includes("price") || userInput.includes("cost")) {
            return "I can help with freight quotes! For accurate pricing, I'll need:\n• Pickup & delivery locations\n• Trailer type\n• Shipment weight\n• Commodity\n\nWould you like me to help you with a quote?";
        } else if (userInput.includes("track") || userInput.includes("where") || userInput.includes("location")) {
            return "For shipment tracking, please contact our dispatch team at +1 (862) 417-3188 with your shipment number. They can provide real-time updates.";
        } else if (userInput.includes("carrier") || userInput.includes("driver") || userInput.includes("truck")) {
            return "Interested in becoming a carrier partner? We offer:\n• Competitive rates\n• Quick payment\n• Consistent loads\n\nEmail clefreight@outlook.com to get started!";
        } else if (userInput.includes("service") || userInput.includes("what do you")) {
            return "CLE FREIGHT LLC offers:\n📦 Dry Van Shipping\n❄️ Reefer Services\n🚛 Flatbed Transport\n🇺🇸 Nationwide Coverage\n⏱️ 24/7 Dispatch Support\n\nWhat type of shipment do you have?";
        } else if (userInput.includes("contact") || userInput.includes("call") || userInput.includes("email")) {
            return "Contact Information:\n📞 Phone: +1 (862) 417-3188\n✉️ Email: clefreight@outlook.com\n🕒 Dispatch: 24/7\n\nHow can I assist you further?";
        }

        // Default response
        return "I understand you're asking about \"" + userInput + "\". For detailed assistance, please contact our team at +1 (862) 417-3188 or email clefreight@outlook.com. How else can I help?";
    };

    const handleQuickQuestion = (question) => {
        handleSendMessage(question);
    };

    const handleQuickAction = (action) => {
        switch (action) {
            case 'call':
                window.location.href = 'tel:+18624173188';
                break;
            case 'email':
                window.location.href = 'mailto:clefreight@outlook.com';
                break;
            case 'quote':
                window.location.href = '/quote';
                break;
            case 'carrier':
                window.location.href = '/contact#carriers';
                break;
        }
    };

    return (
        <>
            {/* Chatbot Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#133866] to-[#4372ac] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer"
                aria-label="Open chatbot"
            >
                <FaRobot className="text-2xl" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
            </button>

            {/* Chat Modal */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 cursor-pointer bg-black/30 backdrop-blur-sm z-[100] cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Chat Window */}
                    <div className="fixed  right-6 z-[101] w-[95vw] max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#133866] to-[#4372ac] px-4 py-3 text-white">
                            <div className="flex items-center justify-end">
                               
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        </div>

                        {/* Chat Messages */}
                        <div className="h-80 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`mb-4 ${msg.sender === "user" ? "text-right" : "text-left"}`}
                                >
                                    <div className={`inline-flex max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"} items-end gap-2`}>
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === "user"
                                            ? "bg-[#4372ac] ml-2"
                                            : "bg-gradient-to-r from-[#133866] to-[#4372ac] mr-2"
                                            }`}>
                                            {msg.sender === "user" ? (
                                                <FaUser className="text-white text-sm" />
                                            ) : (
                                                <FaRobot className="text-white text-sm" />
                                            )}
                                        </div>
                                        <div>
                                            <div className={`px-4 py-3 rounded-2xl ${msg.sender === "user"
                                                ? "bg-[#4372ac] text-white rounded-br-none"
                                                : "bg-gray-100 text-gray-800 rounded-bl-none"
                                                }`}>
                                                <p className="text-sm whitespace-pre-line">{msg.text}</p>
                                            </div>
                                            <span className="text-xs text-gray-500 mt-1 block">
                                                {msg.timestamp}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="mb-4 text-left">
                                    <div className="inline-flex items-end gap-2">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#133866] to-[#4372ac] flex items-center justify-center mr-2">
                                            <FaRobot className="text-white text-sm" />
                                        </div>
                                        <div className="px-4 py-3 rounded-2xl bg-gray-100 text-gray-800 rounded-bl-none">
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Questions */}
                        <div className="px-4 py-3 border-t border-gray-200 bg-white">
                            <div className="mb-3">
                                <p className="text-xs font-medium text-gray-600 mb-2">Quick questions:</p>
                                <div className="flex flex-wrap gap-2">
                                    {quickQuestions.map((question, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleQuickQuestion(question)}
                                            className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors cursor-pointer"
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
                                    placeholder="Type your message here..."
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4372ac] focus:border-transparent"
                                />
                                <button
                                    onClick={() => handleSendMessage(inputText)}
                                    className="w-12 h-12 rounded-full bg-gradient-to-r from-[#133866] to-[#4372ac] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
                                >
                                    <FaPaperPlane />
                                </button>
                            </div>

                             
                          
                        </div>
                    </div>
                </>
            )}

            <style jsx>{`
                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.9) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                .animate-scale-in {
                    animation: scale-in 0.2s ease-out;
                }
            `}</style>
        </>
    );
}