import { MessageSquare } from 'lucide-react';
import { ChatPanel } from './ChatPanel';

export function ChatbotSection() {
  return (
    <section id="chat" className="py-16 px-4 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-foreground mb-4">Chat</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-2 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 text-primary mb-2">
              <MessageSquare className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wide">AI Assistant</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-left">
              Want to Know more?
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed text-left">
              Ask anything about Shoron's projects, skills, and experience. Get instant, detailed
              answers powered by AI.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg bg-background">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder">
                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
                </svg>
                <span className="text-sm font-medium">Projects</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg bg-background">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
                <span className="text-sm font-medium">Skills</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg bg-background">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span className="text-sm font-medium">Contact</span>
              </div>
            </div>

            <div className="hidden lg:block pt-8">
              <div className="bg-accent border border-border rounded-lg p-4">
                <p className="text-sm text-accent-foreground">
                  💡 <strong>Tip:</strong> Try asking specific questions about technologies,
                  project details, or career background for the best results.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 h-[600px]">
            <ChatPanel />
          </div>
        </div>
      </div>
    </section>
  );
}