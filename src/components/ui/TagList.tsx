interface TagListProps {
  items: string[];
  label?: string;
  className?: string;
}

export default function TagList({ items, label, className = '' }: TagListProps) {
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="chip">
          {item}
        </li>
      ))}
    </ul>
  );
}
