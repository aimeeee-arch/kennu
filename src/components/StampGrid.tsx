type Props = { stamps: string[] };

// Crane-stamps: nooit reset, geen schuldgevoel. Toont de laatste ~5 weken.
export default function StampGrid({ stamps }: Props) {
  const set = new Set(stamps);
  const days: { iso: string; on: boolean }[] = [];
  const today = new Date(new Date().toISOString().slice(0, 10) + 'T00:00:00');
  for (let i = 34; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const iso = d.toISOString().slice(0, 10);
    days.push({ iso, on: set.has(iso) });
  }

  return (
    <div>
      <div className="grid grid-flow-col grid-rows-7 gap-1 w-max">
        {days.map(d => (
          <div
            key={d.iso}
            title={d.iso}
            className="w-3.5 h-3.5 rounded-sm"
            style={{ background: d.on ? '#f97316' : '#27272a' }}
          />
        ))}
      </div>
      <div className="text-xs opacity-60 mt-2">
        {stamps.length} stamp{stamps.length === 1 ? '' : 's'} verzameld
        {stamps.length >= 7 && ' 🎉'}
      </div>
    </div>
  );
}
