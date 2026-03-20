import { siteConfig } from '../config';
import { Icon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ServiceMeta {
  description: string;
  cap: string;
}

const serviceMetadata: Record<string, ServiceMeta> = {
  'CNC Machining': {
    description: 'Multi-axis milling and turning for complex geometries in any material.',
    cap: '±0.001"',
  },
  'Metal Fabrication': {
    description: 'Cutting, bending, and forming sheet metal and structural components.',
    cap: '20\' MAX',
  },
  'Welding & Assembly': {
    description: 'Certified welding processes including MIG, TIG, and robotic welding.',
    cap: 'AWS D1.1',
  },
  'Quality Control': {
    description: 'In-process and final inspection with full dimensional reporting.',
    cap: 'CMM',
  },
  'Prototyping': {
    description: 'Rapid prototype development from CAD to finished part in days.',
    cap: '5-7 DAYS',
  },
  'Supply Chain Management': {
    description: 'Vendor-managed inventory and just-in-time delivery programs.',
    cap: 'JIT',
  },
};

function getServiceMeta(name: string): ServiceMeta {
  const match = Object.keys(serviceMetadata).find(
    (k) => name.toLowerCase().includes(k.toLowerCase().split(' ')[0].toLowerCase())
  );
  return match
    ? serviceMetadata[match]
    : { description: 'Professional services delivered with precision by our expert team.', cap: '' };
}

export function Services() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="services"
      className="fade-section py-28 lg:py-40"
      style={{ background: siteConfig.colors.dark }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <p
            className="font-mono-tech text-xs font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: siteConfig.colors.accent }}
          >
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.0] uppercase">
            Services
          </h2>
        </div>

        {/* Services — numbered list with capability tags */}
        <div className="stagger-children visible space-y-0 border-t border-white/8">
          {siteConfig.services.map((service, index) => {
            const meta = getServiceMeta(service.name);
            return (
              <div
                key={service.name}
                className="group flex items-start gap-6 sm:gap-10 py-8 border-b border-white/8 transition-colors duration-300 hover:bg-white/[0.02] px-2 sm:px-4"
              >
                {/* Number */}
                <span className="font-mono-tech text-white/12 font-bold text-xl tabular-nums pt-1 w-10 shrink-0 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                  <Icon
                    name={service.icon}
                    className="w-5 h-5 text-white/25 group-hover:text-white/55 transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </h3>
                    {meta.cap && (
                      <span
                        className="font-mono-tech text-[9px] font-bold tracking-[0.2em] px-2 py-0.5 uppercase"
                        style={{
                          color: siteConfig.colors.accent,
                          border: `1px solid ${siteConfig.colors.accent}40`,
                          background: `${siteConfig.colors.accent}0a`,
                        }}
                      >
                        {meta.cap}
                      </span>
                    )}
                  </div>
                  <p className="text-white/35 text-sm leading-relaxed max-w-lg">
                    {meta.description}
                  </p>
                </div>

                {/* Arrow */}
                <Icon
                  name="arrowright"
                  className="w-4 h-4 text-white/8 group-hover:text-white/35 transition-all duration-300 group-hover:translate-x-1 shrink-0 mt-2"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
