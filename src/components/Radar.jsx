import { radarBlips } from "../data/data.jsx";

export default function Radar() {
  return (
    <div className="radar-wrap">
      <div className="radar-ring r1"></div>
      <div className="radar-ring r2"></div>
      <div className="radar-ring r3"></div>
      <div className="radar-ring r4"></div>
      <div className="radar-crosshair"></div>
      <div className="radar-sweep"></div>
      <div className="radar-center"></div>

      {radarBlips.map((blip) => (
        <div
          key={blip.label}
          className={`blip ${blip.variant}`.trim()}
          style={{ top: blip.top, left: blip.left }}
        >
          <span className="pt"></span>
          <label>{blip.label}</label>
        </div>
      ))}
    </div>
  );
}
