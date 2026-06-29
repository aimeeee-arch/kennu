import Character from './Character';
import { BG_BY_ID } from '../game/backgrounds';

type Props = { equipped: Record<string, string | undefined>; size?: number; float?: boolean };

// De held met (optioneel) vrijgespeelde achtergrond erachter.
export default function HeroStage({ equipped, size = 120, float = true }: Props) {
  const bgId = equipped['achtergrond'];
  const bg = bgId ? BG_BY_ID[bgId] : null;
  return (
    <div className="relative rounded-xl overflow-hidden" style={{ width: size, height: Math.round(size * 1.3) }}>
      {bg && (
        <svg viewBox="0 0 100 130" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          {bg.render()}
        </svg>
      )}
      <div className="absolute inset-0 grid place-items-center">
        <Character equipped={equipped} size={size} float={float} />
      </div>
    </div>
  );
}
