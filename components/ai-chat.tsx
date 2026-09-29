"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { generateAIResponse, ChatMessage } from "@/lib/ai-assistant";
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  ChevronDown,
  Cpu,
} from "lucide-react";

/** ICON ONLY — Cute Robot Head bernuansa Warm Peach & Cream sesuai dominan portofolio */
function SyasyaChatAIIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        {/* Chat bubble pointer (bottom tail) */}
        <path
          d="M42 88 L36 108 L54 92 Z"
          fill="#F5C6B1"
          stroke="#252525"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        {/* Main robot head / chat bubble */}
        <rect
          x="18"
          y="18"
          width="84"
          height="74"
          rx="26"
          fill="#F8D8C8"
          stroke="#252525"
          strokeWidth="3.5"
        />
        {/* Highlight shine top-left */}
        <path
          d="M32 30 Q30 22 38 21"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />
        {/* Left antenna */}
        <line x1="46" y1="18" x2="42" y2="6" stroke="#252525" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="41" cy="4" r="5" fill="#F5C6B1" stroke="#252525" strokeWidth="2.5" />
        {/* Right antenna */}
        <line x1="74" y1="18" x2="78" y2="6" stroke="#252525" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="79" cy="4" r="5" fill="#F5C6B1" stroke="#252525" strokeWidth="2.5" />
        {/* Left ear */}
        <circle cx="16" cy="46" r="10" fill="#F5C6B1" stroke="#252525" strokeWidth="3" />
        {/* Right ear */}
        <circle cx="104" cy="46" r="10" fill="#F5C6B1" stroke="#252525" strokeWidth="3" />
        {/* Face screen */}
        <rect x="36" y="36" width="48" height="40" rx="14" fill="#FFFDF8" stroke="#252525" strokeWidth="2.8" />
        {/* Eyes smile */}
        <path d="M48 52 Q51 58 54 52" stroke="#252525" strokeWidth="3.2" strokeLinecap="round" fill="none" />
        <path d="M66 52 Q69 58 72 52" stroke="#252525" strokeWidth="3.2" strokeLinecap="round" fill="none" />
        {/* Mouth */}
        <path d="M54 66 Q60 72 66 66" stroke="#252525" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

/** FULL LOGO — Robot + SYASYA CHAT bernuansa Warm Peach, Warm Cream & Charcoal dengan jarak/space proporsional */
function SyasyaChatAILogo({ className = "w-8 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 120 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        {/* Group Robot Head & Details — Diangkat ke atas untuk memberi ruang lega ke teks */}
        <g transform="translate(0, -6)">
          {/* Chat bubble pointer / tail */}
          <path
            d="M42 90 L36 102 L52 93 Z"
            fill="#F5C6B1"
            stroke="#252525"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          {/* Main robot head */}
          <rect
            x="18"
            y="22"
            width="84"
            height="70"
            rx="24"
            fill="#F8D8C8"
            stroke="#252525"
            strokeWidth="3.5"
          />
          {/* Highlight shine */}
          <path
            d="M32 34 Q30 26 38 25"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
          {/* Antennae */}
          <line x1="46" y1="22" x2="42" y2="9" stroke="#252525" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="41" cy="7" r="5" fill="#F5C6B1" stroke="#252525" strokeWidth="2.5" />
          <line x1="74" y1="22" x2="78" y2="9" stroke="#252525" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="79" cy="7" r="5" fill="#F5C6B1" stroke="#252525" strokeWidth="2.5" />
          {/* Ears */}
          <circle cx="16" cy="49" r="9.5" fill="#F5C6B1" stroke="#252525" strokeWidth="3" />
          <circle cx="104" cy="49" r="9.5" fill="#F5C6B1" stroke="#252525" strokeWidth="3" />
          {/* Face screen */}
          <rect
            x="36"
            y="39"
            width="48"
            height="38"
            rx="13"
            fill="#FFFDF8"
            stroke="#252525"
            strokeWidth="2.8"
          />
          {/* Eyes + Mouth */}
          <path d="M48 54 Q51 60 54 54" stroke="#252525" strokeWidth="3.2" strokeLinecap="round" fill="none" />
          <path d="M66 54 Q69 60 72 54" stroke="#252525" strokeWidth="3.2" strokeLinecap="round" fill="none" />
          <path d="M54 66 Q60 72 66 66" stroke="#252525" strokeWidth="3.2" strokeLinecap="round" fill="none" />
        </g>

        {/* Typography — Berada di bawah dengan jarak yang nyaman dan seimbang */}
        {/* SYASYA */}
        <text
          x="60"
          y="132"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
          fontSize="24"
          fontWeight="800"
          fill="#252525"
          letterSpacing="1"
        >
          SYASYA
        </text>
        {/* CHAT */}
        <text
          x="60"
          y="150"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#7A685D"
          letterSpacing="3"
        >
          CHAT
        </text>
      </svg>
    </div>
  );
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-welcome",
      sender: "assistant",
      text: "Halo, saya **Syasya Chat AI**, asisten virtual cerdas portofolio Syafiqa Zahroo. Saya siap membantu Anda menemukan informasi seputar **proyek perangkat lunak, pengalaman magang di Firstudio, publikasi paper riset IEEE iSemantic, sertifikasi, maupun tech stack**. Ada hal tertentu yang ingin Anda tanyakan?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      suggestedQuestions: [
        "Lihat Curriculum Vitae (CV) Syafiqa",
        "Ceritakan latar belakang Syafiqa",
        "Project apa saja yang sudah dibuat?",
        "Apa paper riset dan publikasinya?",
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Natural processing delay
    setTimeout(() => {
      const response = generateAIResponse(text);
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: "assistant",
        text: response.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestedQuestions: response.suggestedQuestions,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "assistant",
        text: "Percakapan telah direset. Halo, saya **Syasya Chat AI**, silakan tanyakan hal seputar profil, proyek, atau riset Syafiqa!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestedQuestions: [
          "Lihat daftar project Syafiqa",
          "Apa tech stack yang dikuasai?",
          "Ceritakan tentang paper risetnya",
        ],
      },
    ]);
  };

  // Helper to format text with bold, bullet points, and links
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, lIdx) => {
      // Bold formatter
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const renderedLine = parts.map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={pIdx} className="font-semibold text-[#252525]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      return (
        <span key={lIdx} className="block leading-relaxed min-h-[1.2em]">
          {renderedLine}
        </span>
      );
    });
  };

  return (
    <>
      {/* Floating Launcher Button — Gunakan Full Logo Robot + SYASYA CHAT bernuansa Warm Editorial */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF8] border border-[#E7E0D8] text-xs font-mono text-[#252525] shadow-md animate-bounce duration-1000 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-[#F8D8C8] border border-[#252525] animate-pulse" />
            <span className="font-medium tracking-wide">Tanya Syasya Chat AI ✦</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Buka Chat Syasya Chat AI Asisten"
          className="group relative flex items-center justify-center px-3.5 py-3 sm:px-4 sm:py-4 rounded-full bg-[#FFFDF8] text-[#252525] hover:bg-[#FFF8F3] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-[#E7E0D8] hover:border-[#252525]/40 cursor-pointer"
        >
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-[#252525]" />
          ) : (
            <div className="flex items-center gap-0">
              <SyasyaChatAILogo className="w-10 h-12 sm:w-12 sm:h-14" />
            </div>
          )}
        </button>
      </div>

      {/* Floating Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[420px] h-[550px] max-h-[82vh] bg-[#FFFDF8]/98 backdrop-blur-xl border border-[#E7E0D8] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Branded Modal Header — Dasar Warm Cream Editorial & Soft Peach Accent */}
          <div className="p-4 bg-[#FFF8F3] border-b border-[#E7E0D8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo Emblem — pakai icon only (robot saja tanpa text) */}
              <div className="relative p-1.5 bg-[#FFFDF8] rounded-xl border border-[#E7E0D8] shrink-0 shadow-2xs">
                <SyasyaChatAIIcon className="w-8 h-8" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-bold text-[#252525] font-mono tracking-wider">
                    SYASYA CHAT AI
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#DCE8D5] text-[#2D5523] text-[9px] font-mono font-medium border border-[#C6DCBD]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    ONLINE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#686868] block truncate">
                  Portfolio Intelligence • Syafiqa Zahroo
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title="Reset Percakapan"
                className="p-1.5 rounded-lg text-[#686868] hover:text-[#252525] hover:bg-[#E7E0D8]/50 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Tutup Chat"
                className="p-1.5 rounded-lg text-[#686868] hover:text-[#252525] hover:bg-[#E7E0D8]/50 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Message Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-sans scrollbar-thin">
            {messages.map((msg) => {
              const isUser = msg.sender === "user";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"} space-y-1.5`}
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#686868] px-1">
                    {isUser ? (
                      <>
                        <span>Kamu</span>
                        <span>•</span>
                        <span>{msg.timestamp}</span>
                      </>
                    ) : (
                      <>
                        <div className="w-4 h-4 rounded-md bg-[#F8D8C8] flex items-center justify-center text-[7px] text-[#252525] font-mono font-bold border border-[#252525]/20">
                          S
                        </div>
                        <span className="font-semibold text-[#252525]">Syasya Chat AI</span>
                        <span>•</span>
                        <span>{msg.timestamp}</span>
                      </>
                    )}
                  </div>

                  <div
                    className={`p-3.5 rounded-2xl max-w-[88%] text-xs leading-relaxed shadow-2xs ${
                      isUser
                        ? "bg-[#F8D8C8] text-[#252525] rounded-tr-none font-sans border border-[#E7C6B2]"
                        : "bg-[#FFF8F3] border border-[#E7E0D8] text-[#252525] rounded-tl-none font-sans"
                    }`}
                  >
                    {renderFormattedText(msg.text)}
                  </div>

                  {/* Suggested Question Pills — Serasi warna Warm Cream & Peach Accent */}
                  {!isUser && msg.suggestedQuestions && msg.suggestedQuestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1.5 max-w-[95%]">
                      {msg.suggestedQuestions.map((sug, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => handleSend(sug)}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#FFFDF8] border border-[#E7E0D8] text-[#252525] hover:bg-[#F8D8C8] hover:border-[#E7C6B2] transition-all text-left cursor-pointer shadow-2xs"
                        >
                          ✦ {sug}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator — Warm Peach & Charcoal */}
            {isTyping && (
              <div className="flex items-center gap-2 p-3 bg-[#FFF8F3] border border-[#E7E0D8] rounded-2xl rounded-tl-none w-20 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F8D8C8] animate-bounce border border-[#252525]/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A894] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#252525] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Form — Warm Cream, Send Button Charcoal */}
          <div className="p-3 bg-[#FFF8F3] border-t border-[#E7E0D8]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tanyakan proyek, magang, riset, stack..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-white border border-[#E7E0D8] text-xs font-sans text-[#252525] placeholder:text-[#888] focus:outline-none focus:border-[#252525] transition-colors shadow-2xs"
              />

              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Kirim Pesan"
                className="p-2.5 rounded-xl bg-[#252525] text-white hover:bg-black disabled:opacity-40 disabled:hover:bg-[#252525] transition-all cursor-pointer shadow-xs shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between text-[10px] font-mono text-[#888] pt-2 px-1">
              <span className="flex items-center gap-1">
                <Cpu className="w-3 h-3 text-[#686868]" />
                <span>Ditenagai Syasya Chat AI Engine</span>
              </span>
              <span>Syafiqa Zahroo &apos;26</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
