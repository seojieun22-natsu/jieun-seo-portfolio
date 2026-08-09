import RevealInit from "./reveal-init";
import "./hybe.css";

export default function HybeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="hybe-root">
      <RevealInit />
      {children}
    </div>
  );
}
