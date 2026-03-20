import { siteConfig } from '../config';
import { Icon } from './Icons';

const HERO_IMAGE_DEFAULT = 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1800&q=80&fit=crop';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={siteConfig.heroImage || HERO_IMAGE_DEFAULT}
          alt="Manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Technical spec overlay — top-right corner */}
      <div className="absolute top-8 right-10 hidden lg:flex flex-col items-end gap-3 z-10">
        <div className="flex items-center gap-6">
          {[
            { value: '45+', label: 'YRS' },
            { value: '10M+', label: 'PARTS' },
            { value: '99.7%', label: 'QUALITY' },
          ].map((spec) => (
            <div key={spec.label} className="text-right">
              <span
                className="block font-mono-tech text-lg font-bold leading-none"
                style={{ color: siteConfig.colors.accent }}
              >
                {spec.value}
              </span>
              <span className="font-mono-tech text-[9px] text-white/30 tracking-[0.3em] uppercase">
                {spec.label}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-white/10" aria-hidden="true" />
      </div>

      {/* Content — bottom-aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pb-24 pt-40">
        <div className="max-w-4xl">
          {/* Overline */}
          <p
            className="font-mono-tech text-xs font-bold tracking-[0.25em] uppercase mb-6"
            style={{ color: siteConfig.colors.accent }}
          >
            {siteConfig.license}
          </p>

          {/* Headline — ALL CAPS, max weight */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.92] tracking-tighter mb-8 uppercase">
            {siteConfig.companyName}
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-white/50 font-light leading-relaxed mb-12 max-w-xl">
            {siteConfig.tagline}
          </p>

          {/* Inline spec strip — mobile friendly version of the overlay */}
          <div className="flex items-center gap-6 mb-12 lg:hidden">
            {[
              { value: '45+', label: 'YRS' },
              { value: '10M+', label: 'PARTS' },
              { value: '99.7%', label: 'QUALITY' },
            ].map((spec, i) => (
              <div key={spec.label} className="flex items-center gap-6">
                {i > 0 && <div className="w-px h-6 bg-white/10" aria-hidden="true" />}
                <div>
                  <span
                    className="block font-mono-tech text-base font-bold leading-none"
                    style={{ color: siteConfig.colors.accent }}
                  >
                    {spec.value}
                  </span>
                  <span className="font-mono-tech text-[9px] text-white/30 tracking-[0.25em] uppercase">
                    {spec.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-5"
              style={{
                background: siteConfig.colors.accent,
                color: '#000',
              }}
            >
              {siteConfig.ctaText}
              <Icon name="arrowright" className="w-4 h-4" />
            </a>
            <a
              href="#capabilities"
              className="text-white/40 hover:text-white text-sm font-medium tracking-widest uppercase transition-colors duration-300 font-mono-tech"
            >
              Capabilities
            </a>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-3 opacity-30">
        <span className="font-mono-tech text-[9px] text-white tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-lr' }}>
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
