import { siteConfig } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface CapabilityCard {
  title: string;
  anchorSpec: string;
  anchorLabel: string;
  specs: string[];
  tag: string;
}

const capabilities: CapabilityCard[] = [
  {
    title: 'CNC Machining',
    anchorSpec: '±0.001"',
    anchorLabel: 'Tolerance',
    specs: ['5-axis simultaneous', 'Aluminum, Steel, Titanium, Inconel', 'Up to 60" travel', 'Lights-out production'],
    tag: 'MULTI-AXIS',
  },
  {
    title: 'Metal Fabrication',
    anchorSpec: '1"',
    anchorLabel: 'Max Plate Thickness',
    specs: ['Laser cutting + plasma', 'Press brake forming', '20\' max length', 'Sheet metal & structural'],
    tag: 'LASER / PLASMA',
  },
  {
    title: 'Welding',
    anchorSpec: 'D1.1',
    anchorLabel: 'AWS Certified',
    specs: ['MIG, TIG, Stick', 'Robotic welding cells', 'Stainless, aluminum, exotic alloys', 'Full weld documentation'],
    tag: 'CERTIFIED',
  },
  {
    title: 'Quality Assurance',
    anchorSpec: 'CMM',
    anchorLabel: 'Inspection',
    specs: ['First article inspection (FAI)', 'PPAP documentation', 'Material certifications', '100% dimensional reporting'],
    tag: 'ISO 9001',
  },
];

export function Capabilities() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="capabilities"
      className="fade-section py-28 lg:py-40"
      style={{ background: siteConfig.colors.dark }}
      aria-label="Technical capabilities"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-4 font-mono-tech"
            style={{ color: siteConfig.colors.accent }}
          >
            Technical Specs
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.0] uppercase">
            Our Capabilities
          </h2>
        </div>

        {/* Capability Cards Grid */}
        <div className="stagger-children visible grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group relative p-8 transition-colors duration-300 border border-transparent hover:border-white/10"
              style={{ background: siteConfig.colors.dark }}
            >
              {/* Tag */}
              <span
                className="inline-block text-[9px] font-bold tracking-[0.3em] uppercase px-2 py-1 mb-6 font-mono-tech"
                style={{
                  color: siteConfig.colors.accent,
                  border: `1px solid ${siteConfig.colors.accent}33`,
                  background: `${siteConfig.colors.accent}0d`,
                }}
              >
                {cap.tag}
              </span>

              {/* Title */}
              <h3 className="text-white font-black text-lg uppercase tracking-tight mb-6">
                {cap.title}
              </h3>

              {/* Anchor Spec — the big visual number */}
              <div className="mb-6 border-l-2 pl-4" style={{ borderColor: siteConfig.colors.accent }}>
                <span
                  className="block text-4xl font-bold leading-none font-mono-tech"
                  style={{ color: siteConfig.colors.accent }}
                >
                  {cap.anchorSpec}
                </span>
                <span className="text-white/30 text-xs tracking-widest uppercase font-mono-tech mt-1 block">
                  {cap.anchorLabel}
                </span>
              </div>

              {/* Spec List */}
              <ul className="space-y-2">
                {cap.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-2 text-sm text-white/40">
                    <span
                      className="mt-[5px] w-1 h-1 rounded-full shrink-0"
                      style={{ background: siteConfig.colors.accent }}
                    />
                    <span className="font-mono-tech text-xs leading-relaxed">{spec}</span>
                  </li>
                ))}
              </ul>

              {/* Hover line accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: siteConfig.colors.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
