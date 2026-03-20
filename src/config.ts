/**
 * Site configuration — all customizable fields.
 * This file gets auto-generated per lead from their Prospeo data.
 * To customize for a new lead, just replace the values below.
 */

export const siteConfig = {
  // Company Info
  companyName: "Titan Manufacturing",
  tagline: "Precision Engineering Since 1978",
  description: "Full-service manufacturing facility specializing in custom metal fabrication, CNC machining, and industrial solutions.",
  phone: "(555) 456-7890",
  email: "info@titanmfg.com",
  address: "8900 Industrial Boulevard",
  city: "Cleveland",
  state: "OH",

  // Logo — auto-fetched from Clearbit
  logoUrl: "https://logo.clearbit.com/titanmfg.com",

  // Hero image — custom photo URL; leave empty to use the default Unsplash image
  heroImage: "",

  // Colors — extracted from logo or set manually
  colors: {
    primary: "#263238",      // Main brand color
    primaryLight: "#455a64",  // Lighter variant
    accent: "#e65100",       // Accent/CTA color (industrial orange)
    dark: "#050505",         // Dark backgrounds (true black)
    light: "#f8fafc",        // Light backgrounds
    text: "#1e293b",         // Body text
    textLight: "#64748b",    // Muted text
  },

  // Services — from Prospeo keywords
  services: [
    { name: "CNC Machining", icon: "layers" },
    { name: "Metal Fabrication", icon: "hammer" },
    { name: "Welding & Assembly", icon: "pencil" },
    { name: "Quality Control", icon: "shield" },
    { name: "Prototyping", icon: "clipboard" },
    { name: "Supply Chain Management", icon: "building" },
  ],

  // Stats — generic but impressive
  stats: [
    { value: "10M+", label: "Parts Produced" },
    { value: "45+", label: "Years Experience" },
    { value: "99.7%", label: "Quality Rate" },
    { value: "ISO", label: "9001 Certified" },
  ],

  // Testimonials — placeholder
  testimonials: [
    {
      text: "Consistently delivers precision parts on tight deadlines. They've been our primary supplier for over a decade.",
      author: "VP of Operations",
      role: "Automotive OEM",
    },
    {
      text: "Their prototyping speed cut our product development cycle in half. Exceptional quality every time.",
      author: "Engineering Director",
      role: "Aerospace Components",
    },
  ],

  // CTA
  ctaText: "Request a Quote",
  ctaUrl: "https://cal.com/scale-ify/clarity-call",

  // Footer
  license: "ISO 9001:2015 Certified",
  certifications: ["ISO 9001:2015", "AS9100D Aerospace", "ITAR Registered"],

  // SEO
  siteUrl: "https://demo.scaleify.co",
};
