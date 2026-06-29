// Heel licht: **bold** en lege regels als alinea-scheiding.
type Props = { text: string; className?: string };

export default function MarkdownLite({ text, className = '' }: Props) {
  const paragraphs = text.split(/\n\s*\n/);
  return (
    <div className={'space-y-3 leading-relaxed ' + className}>
      {paragraphs.map((p, i) => (
        <p key={i}>
          {p.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
            part.startsWith('**') && part.endsWith('**')
              ? <strong key={j} className="font-semibold">{part.slice(2, -2)}</strong>
              : <span key={j}>{part}</span>
          )}
        </p>
      ))}
    </div>
  );
}
