
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, BrainCircuit, Search } from 'lucide-react';
import { streamChatResponse, generateThinkingResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

interface ChatBotProps {
  visible?: boolean;
}

const ChatBot: React.FC<ChatBotProps> = ({ visible = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hola, soy el asistente virtual de lahuertarealestate. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [useThinking, setUseThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      if (useThinking) {
        // Complex query mode
        setMessages(prev => [...prev, { role: 'model', text: '', isThinking: true }]);
        const response = await generateThinkingResponse(userMsg);
        setMessages(prev => {
            const newArr = [...prev];
            newArr[newArr.length - 1] = { role: 'model', text: response, isThinking: false };
            return newArr;
        });
      } else {
        // Fast streaming mode
        let fullText = '';
        let currentSources: string[] = [];
        
        setMessages(prev => [...prev, { role: 'model', text: '' }]);
        
        const history = messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));

        await streamChatResponse(
          history,
          userMsg,
          (chunk) => {
            fullText += chunk;
            setMessages(prev => {
                const newArr = [...prev];
                newArr[newArr.length - 1] = { 
                    role: 'model', 
                    text: fullText,
                    sources: currentSources 
                };
                return newArr;
            });
          },
          (sources) => {
              currentSources = sources;
          }
        );
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Disculpa, ha habido un error. Por favor inténtalo de nuevo.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button with transition for visibility */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-neutral-900 text-white rounded-full shadow-xl hover:scale-105 transition-all duration-500 ease-in-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        {isOpen ? <X /> : <MessageCircle />}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 z-50 w-96 max-w-[90vw] bg-white shadow-2xl rounded-lg border border-neutral-200 flex flex-col max-h-[600px] transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
          
          {/* Header */}
          <div className="p-4 border-b border-neutral-100 bg-neutral-50 rounded-t-lg flex justify-between items-center">
            <div>
                <h3 className="font-serif font-bold text-neutral-900">Consultor Virtual</h3>
                <p className="text-[10px] text-neutral-500">Powered by Gemini 3 Pro</p>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-[10px] text-neutral-500">Modo Profundo</span>
                <button 
                    onClick={() => setUseThinking(!useThinking)}
                    className={`w-8 h-4 rounded-full relative transition-colors ${useThinking ? 'bg-neutral-900' : 'bg-neutral-300'}`}
                >
                    <div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${useThinking ? 'translate-x-4' : ''}`} />
                </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white h-80">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-neutral-900 text-white rounded-tr-none' 
                      : 'bg-neutral-100 text-neutral-800 rounded-tl-none'
                  }`}
                >
                   {msg.isThinking ? (
                       <div className="flex items-center gap-2 text-xs text-neutral-500">
                           <BrainCircuit size={14} className="animate-pulse"/>
                           <span>Pensando...</span>
                       </div>
                   ) : (
                       msg.text
                   )}
                   
                   {msg.sources && msg.sources.length > 0 && (
                       <div className="mt-2 pt-2 border-t border-neutral-200/20">
                           <p className="flex items-center gap-1 text-[10px] opacity-70 mb-1">
                               <Search size={10} /> Fuentes:
                           </p>
                           {msg.sources.map((src, i) => (
                               <a key={i} href={src} target="_blank" rel="noreferrer" className="block text-[10px] underline truncate hover:text-blue-400">
                                   {src}
                               </a>
                           ))}
                       </div>
                   )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-100 bg-neutral-50 rounded-b-lg">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pregunta sobre inversiones o el mercado..."
                className="flex-1 bg-white border border-neutral-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neutral-900"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="p-2 bg-neutral-900 text-white rounded-md disabled:opacity-50 hover:bg-neutral-700"
              >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
          </form>
        </div>
    </>
  );
};

export default ChatBot;
