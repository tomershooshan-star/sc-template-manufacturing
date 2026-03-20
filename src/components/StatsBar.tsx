import { siteConfig } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function StatsBar() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="fade-section relative py-20 border-y border-white/5 bg-grid-pattern overflow-hidden"
      style={{ background: siteConfig.colors.dark }}
      aria-label="Company statistics"
    >
      {/* Subtle overlay so grid doesn't overpower */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: `${siteConfig.colors.dark}d9` }} aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x lg:divide-white/8">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="text-center px-6">
              <span
                className="block font-mono-tech text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none"
                style={{ color: siteConfig.colors.accent }}
              >
                {stat.value}
              </span>
              <span className="block font-mono-tech text-white/25 text-[10px] font-medium tracking-[0.25em] uppercase mt-3">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
