import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">KINGDOM 3903</p>
        <h1>3903 Command Center</h1>
        <p className="subtitle">Central command hub and tool platform · by Lagertha</p>
      </section>

      <section className="tools" aria-label="Tools">
        <article className="card active">
          <span className="status">READY FOR INTEGRATION</span>
          <h2>FlagFiller Registry</h2>
          <p>Operational registry for coordinated flag filling in Kingdom 3903.</p>
        </article>

        <article className="card">
          <span className="status muted">COMING SOON</span>
          <h2>ROK BattleTrack</h2>
          <p>Battle performance and tracking module.</p>
        </article>

        <article className="card">
          <span className="status muted">COMING SOON</span>
          <h2>ROK Deal Hunter</h2>
          <p>Deal intelligence and comparison module.</p>
        </article>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
