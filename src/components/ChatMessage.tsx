declare const marked: any;

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  isHtml?: boolean;
  isError?: boolean;
}

export function ChatMessage({ role, content, isHtml, isError }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-3 text-left ${
          isUser
            ? 'bg-[#1e90ff] text-white rounded-br-none'
            : isError
            ? 'bg-destructive text-destructive-foreground border border-destructive/50 rounded-bl-none'
            : 'bg-card text-card-foreground border border-border rounded-bl-none'
        }`}
      >
        {isHtml && !isError ? (
          <div
            dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
            className="prose prose-sm max-w-none dark:prose-invert"
          />
        ) : (
          <div className="whitespace-pre-wrap break-words">{content}</div>
        )}
      </div>
    </div>
  );
}
