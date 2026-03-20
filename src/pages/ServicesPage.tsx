import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import { Icon } from '../components/Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SERVICES_BANNER = 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1800&q=80&fit=crop';

const extendedDescriptions: Record<string, { long: string; highlights: string[] }> = {
  'CNC Machining': {
    long: 'Multi-axis CNC milling and turning centers capable of producing complex geometries in aluminum, steel, titanium, and exotic alloys with tolerances to +/- 0.001".',
    highlights: ['3, 4, and 5-axis milling', 'CNC turning & Swiss screw', 'Exotic alloys & plastics', 'Lights-out manufacturing'],
  },
  'Metal Fabrication': {
    long: 'Full-service metal fabrication from laser cutting and plasma cutting to press brake forming and roll bending for structural and sheet metal components.',
    highlights: ['Laser & plasma cutting', 'Press brake forming', 'Structural steel fabrication', 'Sheet metal assemblies'],
  },
  'Welding & Assembly': {
    long: 'AWS-certified welders performing MIG, TIG, stick, and robotic welding on carbon steel, stainless, and aluminum with full weld procedure qualifications.',
    highlights: ['MIG & TIG welding', 'Robotic welding cells', 'Mechanical assembly', 'Weld certifications (AWS D1.1)'],
  },
  'Quality Control': {
    long: 'Comprehensive quality management system with in-process inspection, CMM verification, and full dimensional reporting to meet your exact specifications.',
    highlights: ['CMM inspection', 'First article reports (FAI)', 'Statistical process control', 'Material certifications'],
  },
  'Prototyping': {
    long: 'Rapid prototype development from CAD models to finished parts in days. Bridge the gap between design and production with quick-turn machined prototypes.',
    highlights: ['Quick-turn prototypes', 'CAD/CAM programming', 'Design for manufacturability', 'Low-volume production'],
  },
  'Supply Chain Management': {
    long: 'Vendor-managed inventory, kanban systems, and just-in-time delivery programs to keep your production lines running without interruption.',
    highlights: ['Vendor-managed inventory', 'Kanban & JIT delivery', 'Blanket order management', 'Kitting & sub-assembly'],
  },
};

function getExtended(name: string) {
  const key = Object.keys(extendedDescriptions).find(
    (k) => name.toLowerCase().includes(k.toLowerCase().split(' ')[0].toLowerCase())
  );
  return key
    ? extendedDescriptions[key]
    : {
        long: 'Industry-leading expertise ensuring every project is completed to the highest standard.',
        highlights: ['Expert craftsmanship', 'On-time delivery', 'Budget transparency', 'Quality guarantee'],
      };
}

export function ServicesPage() {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <main>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[320px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={SERVICES_BANNER} alt="Manufacturing facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pb-16">
          <nav className="mb-4 flex items-center gap-2 text-xs text-white/30" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Services</span>
          </nav>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
            Our Services
          </h1>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-28 lg:py-40" style={{ background: siteConfig.colors.dark }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div ref={gridRef} className="fade-section space-y-0 border-t border-white/10">
            {siteConfig.services.map((service, index) => {
              const ext = getExtended(service.name);
              return (
                <div
                  key={service.name}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-white/10 hover:bg-white/[0.01] transition-colors px-2"
                >
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <span className="text-white/10 font-black text-3xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title + Icon */}
                  <div className="lg:col-span-3 flex items-start gap-4">
                    <Icon
                      name={service.icon}
                      className="w-5 h-5 text-white/20 shrink-0 mt-1"
                    />
                    <h3 className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5">
                    <p className="text-white/40 text-sm leading-relaxed">
                      {ext.long}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="lg:col-span-3">
                    <div className="space-y-2">
                      {ext.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-white/20 rounded-full shrink-0" />
                          <span className="text-white/30 text-xs">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <a
              href={siteConfig.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:gap-5"
              style={{ background: siteConfig.colors.accent, color: '#000' }}
            >
              Request a Free Quote
              <Icon name="arrowright" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
