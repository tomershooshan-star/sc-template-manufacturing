import { motion } from "framer-motion";
import { siteConfig } from "../config";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Robert T.",
    role: "President & Founder",
    bio: "45+ years building precision manufacturing from a single machine shop into a regional leader.",
    imageSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=face",
  },
  {
    name: "James W.",
    role: "VP of Operations",
    bio: "20 years optimizing production floors. Drives efficiency gains across every department.",
    imageSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=face",
  },
  {
    name: "Karen S.",
    role: "Quality Director",
    bio: "15 years ensuring zero-defect output. Leads ISO compliance and continuous improvement.",
    imageSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop&crop=face",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function TeamCards() {
  return (
    <section
      className="py-28 lg:py-40"
      style={{ backgroundColor: siteConfig.colors.dark }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-16 max-w-2xl">
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
            style={{ color: siteConfig.colors.accent }}
          >
            The Team
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.05]">
            Meet Our Leaders
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="relative overflow-hidden group"
              variants={itemVariants}
              style={{ height: "480px" }}
            >
              <img
                src={member.imageSrc}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm text-white/50 mb-2">{member.bio}</p>
                <p className="font-bold text-lg">{member.name}</p>
                <p
                  className="text-sm"
                  style={{ color: siteConfig.colors.accent }}
                >
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
