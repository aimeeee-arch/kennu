import { useState } from 'react';
import { clearAll, exportJSON, importJSON } from '../engines/storage';

export default function Settings() {
  const [msg, setMsg] = useState('');

  const doExport = () => {
    const blob = new Blob([exportJSON()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kennu-voortgang.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const doImport = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const ok = importJSON(String(reader.result));
      setMsg(ok ? 'Voortgang geïmporteerd ✓' : 'Importeren mislukt — ongeldig bestand');
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-7">
      <h1 className="text-xl font-bold">Instellingen</h1>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide opacity-70">Voortgang</h2>
        <div className="flex flex-wrap gap-2">
          <button onClick={doExport} className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm">
            Exporteer (back-up)
          </button>
          <label className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm cursor-pointer">
            Importeer
            <input
              type="file"
              accept="application/json"
              className="hidden"
              onChange={e => e.target.files?.[0] && doImport(e.target.files[0])}
            />
          </label>
          <button
            onClick={() => {
              if (confirm('Alle voortgang wissen? Dit kan niet ongedaan worden gemaakt.')) {
                clearAll();
                setMsg('Voortgang gewist');
              }
            }}
            className="px-3 py-2 rounded-xl border border-red-900 text-red-300 hover:bg-red-950 text-sm"
          >
            Wis alles
          </button>
        </div>
        {msg && <p className="text-sm opacity-70">{msg}</p>}
      </section>

      <p className="text-xs opacity-40">Kennu · jouw persoonlijke leer-eilanden</p>
    </div>
  );
}
