import type { ReactNode } from 'react';

interface MetricProps {
  value: ReactNode;
  label: string;
  size?: 'lg' | 'sm';
}

export default function Metric({ value, label, size = 'sm' }: MetricProps) {
  const valueClass =
    size === 'lg'
      ? 'font-mono text-2xl font-semibold sm:text-[clamp(2.25rem,3.6vw,3rem)] leading-none tracking-tight text-accent'
      : 'font-mono text-lg font-semibold leading-tight text-ember sm:text-xl';
  const labelClass = size === 'lg' ? 'mt-3 text-sm leading-snug text-body' : 'mt-1 text-xs leading-snug text-muted';

  return (
    <div className="flex flex-col">
      <dt className={`order-2 ${labelClass}`}>{label}</dt>
      <dd className={`order-1 whitespace-nowrap ${valueClass}`}>{value}</dd>
    </div>
  );
}
