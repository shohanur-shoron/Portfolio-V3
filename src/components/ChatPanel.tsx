import { useState, useRef, useEffect } from 'react';
import { Send, StopCircle, RefreshCw } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isHtml?: boolean;
  isError?: boolean;
}

const MAX_MESSAGES = 100;

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const [lastFailedMessage, setLastFailedMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const shouldAutoScrollRef = useRef(true);

  useEffect(() => {
    if (shouldAutoScrollRef.current) {
      // Scroll only the messages container to the bottom
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      }
    }
  }, [messages, streamingContent]);

  const handleScroll = () => {
    if (!messagesContainerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
    shouldAutoScrollRef.current = isNearBottom;
  };

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isStreaming) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
    };

    setMessages((prev) => [...prev, userMessage].slice(-MAX_MESSAGES));
    setInput('');
    setIsStreaming(true);
    setStreamingContent('');
    setLastFailedMessage(null);

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      const encodedMessage = encodeURIComponent(messageText);
      const response = await fetch(`/api/chat/?message=${encodedMessage}`, {
        signal: abortController.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No response body');
      }

      let buffer = '';
      let currentContent = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim();

            if (data === '[DONE]') {
              if (currentContent) {
                const assistantMessage: Message = {
                  id: Date.now().toString(),
                  role: 'assistant',
                  content: currentContent,
                  isHtml: true,
                };
                setMessages((prev) => [...prev, assistantMessage].slice(-MAX_MESSAGES));
              }
              setStreamingContent('');
              setIsStreaming(false);
              return;
            }

            try {
              const parsed = JSON.parse(data);

              if (parsed.type === 'status') {
                setStreamingContent(parsed.content);
              } else if (parsed.type === 'chunk') {
                currentContent += parsed.content;
                setStreamingContent(currentContent);
              } else if (parsed.type === 'error') {
                const errorMessage: Message = {
                  id: Date.now().toString(),
                  role: 'assistant',
                  content: parsed.content,
                  isError: true,
                };
                setMessages((prev) => [...prev, errorMessage].slice(-MAX_MESSAGES));
                setStreamingContent('');
                setIsStreaming(false);
                return;
              }
            } catch (e) {
              console.error('Failed to parse SSE data:', e);
            }
          }
        }
      }

      if (currentContent) {
        const assistantMessage: Message = {
          id: Date.now().toString(),
          role: 'assistant',
          content: currentContent,
          isHtml: true,
        };
        setMessages((prev) => [...prev, assistantMessage].slice(-MAX_MESSAGES));
      }

      setStreamingContent('');
      setIsStreaming(false);
    } catch (error: unknown) {
      if ((error as Error).name === 'AbortError') {
        setStreamingContent('');
        setIsStreaming(false);
        return;
      }

      const errorMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: 'Failed to connect to the chat service. Please try again.',
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage].slice(-MAX_MESSAGES));
      setLastFailedMessage(messageText);
      setStreamingContent('');
      setIsStreaming(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleCancel = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsStreaming(false);
    setStreamingContent('');
  };

  const handleRetry = () => {
    if (lastFailedMessage) {
      sendMessage(lastFailedMessage);
    }
  };

  return (
    <div className="flex flex-col h-full bg-card rounded-lg shadow-lg overflow-hidden">
      <div className="bg-slate-900 text-white px-6 py-4">
        <h3 className="text-lg font-semibold">Chat Assistant</h3>
        <p className="text-sm text-white/80">Ask me anything about Shoron</p>
      </div>

      <div
        ref={messagesContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto px-6 py-4 bg-background hide-scrollbar"
        role="log"
        aria-live="polite"
        aria-atomic="false"
        data-scroller
      >
        {messages.length === 0 && !streamingContent && (
          <div className="text-center text-muted-foreground mt-8">
            <p className="mb-4">👋 Hello! I'm here to help you learn more about Shoron.</p>
            <p className="text-sm">Try asking about:</p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <button
                onClick={() => sendMessage('What projects has Shoron worked on?')}
                className="px-3 py-1 bg-secondary border border-border rounded-full text-sm hover:bg-accent transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => sendMessage('What are Shoron\'s technical skills?')}
                className="px-3 py-1 bg-secondary border border-border rounded-full text-sm hover:bg-accent transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => sendMessage('How can I contact Shoron?')}
                className="px-3 py-1 bg-secondary border border-border rounded-full text-sm hover:bg-accent transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}

        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            role={message.role}
            content={message.content}
            isHtml={message.isHtml}
            isError={message.isError}
          />
        ))}

        {streamingContent && (
          <div className="flex justify-start mb-4">
            <div className="max-w-[80%] rounded-lg px-4 py-3 bg-card text-card-foreground border border-border rounded-bl-none">
              <div className="whitespace-pre-wrap break-words">{streamingContent}</div>
              <div className="flex items-center gap-1 mt-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        {!streamingContent && isStreaming && (
          <div className="flex justify-start mb-4">
            <div className="max-w-[80%] rounded-lg px-4 py-3 bg-card text-card-foreground border border-border rounded-bl-none">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-border bg-card px-6 py-4">
        {lastFailedMessage && !isStreaming && (
          <div className="mb-3 flex items-center gap-2">
            <button
              onClick={handleRetry}
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/90"
            >
              <RefreshCw className="w-4 h-4" />
              Retry last message
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isStreaming}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring disabled:bg-muted disabled:cursor-not-allowed"
          />

          {isStreaming ? (
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors flex items-center gap-2"
            >
              <StopCircle className="w-5 h-5" />
              Cancel
            </button>
          ) : (
            <button
              type="submit"
              disabled={!input.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-muted disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send
            </button>
          )}
        </form>
      </div>
    </div>
  );
}