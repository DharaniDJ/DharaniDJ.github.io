const EMPHASIS_PATTERN = /\*\*(.+?)\*\*/g;

interface EmphasisProps {
  text: string;
}

export default function Emphasis({ text }: EmphasisProps) {
  const parts = text.split(EMPHASIS_PATTERN);
  if (import.meta.env.DEV) {
    console.assert((text.match(/\*\*/g)?.length ?? 0) % 2 === 0, `Unbalanced ** markers in: ${text}`);
  }
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ember">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
