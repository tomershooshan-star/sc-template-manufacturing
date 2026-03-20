import { siteConfig } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface CertItem {
  name: string;
  description: string;
}

const certs: CertItem[] = [
  {
    name: 'ISO 9001:2015',
    description: 'Internationally recognized quality management system ensuring consistent process control.',
  },
  {
    name: 'AS9100D',
    description: 'Aerospace quality management standard — the highest tier for aviation, space, and defense.',
  },
  {
    name: 'ITAR',
    description: 'Registered with U.S. State Dept. for handling defense-related articles and technical data.',
  },
];

const industries = [
  'Aerospace',
  'Automotive',
  'Medical Device',
  'Defense',
  'Energy',
  'Industrial OEM',
];

export function Certifications() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="certifications"
      className="fade-section py-24 border-y border-white/5"
      style={{ background: siteConfig.colors.dark }}
      aria-label="Certifications and industries served"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p
              className="text-xs font-medium tracking-[0.25em] uppercase mb-4 font-mono-tech"
              style={{ color: siteConfig.colors.accent }}
            >
              Compliance & Standards
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter uppercase">
              Certifications
            </h2>
          </div>
          <p className="text-white/25 text-sm max-w-xs">
            Audited annually. Documentation available upon request.
          </p>
        </div>

        {/* Certifications row */}
        <div className="stagger-children visible grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 mb-16">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="px-8 py-10 group transition-colors duration-300"
              style={{ background: siteConfig.colors.dark }}
            >
              <div
                className="font-mono-tech text-2xl sm:text-3xl font-bold mb-4 tracking-tight"
                style={{ color: siteConfig.colors.accent }}
              >
                {cert.name}
              </div>
              <p className="text-white/35 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Industries served */}
        <div>
          <p className="font-mono-tech text-xs text-white/20 uppercase tracking-[0.3em] mb-6">
            Industries Served
          </p>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="font-mono-tech text-xs font-medium tracking-wider uppercase px-4 py-2 border border-white/10 text-white/40 hover:text-white/70 hover:border-white/25 transition-colors duration-200 cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
