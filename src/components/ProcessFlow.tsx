import { siteConfig } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'RFQ',
    description: 'Submit drawings or specs. We respond with a detailed quote within 24 hours.',
  },
  {
    number: '02',
    title: 'Engineering Review',
    description: 'Our engineers review DFM, tolerances, and material selection to optimize your part.',
  },
  {
    number: '03',
    title: 'Production',
    description: 'CNC machining, fabrication, and welding run on a dedicated schedule with live status.',
  },
  {
    number: '04',
    title: 'Quality Inspection',
    description: 'CMM verification, dimensional reports, and material certs issued before release.',
  },
  {
    number: '05',
    title: 'Shipping',
    description: 'Packed, labeled, and shipped with full traceability. Blanket orders welcome.',
  },
];

export function ProcessFlow() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="process"
      className="fade-section py-28 lg:py-40 overflow-hidden"
      style={{ background: siteConfig.colors.dark }}
      aria-label="Our process"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-4 font-mono-tech"
            style={{ color: siteConfig.colors.accent }}
          >
            How We Work
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.0] uppercase">
            From RFQ to Delivery
          </h2>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="stagger-children visible relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-[38px] left-0 right-0 h-px"
            style={{ background: 'rgba(255,255,255,0.06)' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-0">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex lg:flex-col items-start lg:items-start gap-6 lg:gap-0 pb-10 lg:pb-0 lg:pr-8">
                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div
                    className="lg:hidden absolute left-[19px] top-[40px] w-px bottom-0"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                    aria-hidden="true"
                  />
                )}

                {/* Step circle */}
                <div
                  className="relative z-10 w-10 h-10 shrink-0 flex items-center justify-center border"
                  style={{
                    borderColor: index === 0 ? siteConfig.colors.accent : 'rgba(255,255,255,0.12)',
                    background: index === 0 ? `${siteConfig.colors.accent}14` : siteConfig.colors.dark,
                  }}
                >
                  <span
                    className="font-mono-tech text-xs font-bold"
                    style={{ color: index === 0 ? siteConfig.colors.accent : 'rgba(255,255,255,0.3)' }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:mt-8 flex-1">
                  <h3 className="text-white font-black text-sm uppercase tracking-wider mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/35 text-xs leading-relaxed max-w-[180px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead time footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-12">
          <div>
            <span className="font-mono-tech text-xs text-white/25 uppercase tracking-widest block mb-1">
              Typical Lead Time
            </span>
            <span
              className="font-mono-tech text-2xl font-bold"
              style={{ color: siteConfig.colors.accent }}
            >
              2 – 4 Weeks
            </span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" aria-hidden="true" />
          <div>
            <span className="font-mono-tech text-xs text-white/25 uppercase tracking-widest block mb-1">
              Rush Available
            </span>
            <span className="font-mono-tech text-2xl font-bold text-white/60">
              5 – 7 Days
            </span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" aria-hidden="true" />
          <div>
            <span className="font-mono-tech text-xs text-white/25 uppercase tracking-widest block mb-1">
              Quote Response
            </span>
            <span className="font-mono-tech text-2xl font-bold text-white/60">
              &lt; 24 Hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
