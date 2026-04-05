import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — AI Marketing, Social Media Management & More",
  description:
    "Explore Social Drive Media's full service lineup: social media management, AI marketing tools (SmallBizHQ), business intelligence reports (StratIQ), and fully managed AI marketing (Forge). Serving small businesses in Greencastle, PA and beyond.",
  alternates: {
    canonical: "https://www.socialdrivemedia.com/services",
  },
  openGraph: {
    title: "Services — AI Marketing, Social Media Management & More",
    description:
      "From free AI tools to fully managed marketing — Social Drive Media has a solution for every stage of your small business growth.",
    url: "https://www.socialdrivemedia.com/services",
  },
};

const services = [
  {
    id: "social-media",
    icon: "📱",
    name: "Social Media Management",
    tagline: "Consistent, on-brand content without lifting a finger.",
    description:
      "Most small business owners know they should be posting on social media — they just don't have the time or bandwidth to do it consistently. That's where we come in. We handle content creation, scheduling, and engagement across your key platforms so your brand stays active and visible, even when you're heads-down running your business.",
    includes: [
      "Content calendar planning",
      "Platform-native post creation (Facebook, Instagram, LinkedIn)",
      "Scheduling and publishing",
      "Community engagement and comment responses",
      "Monthly performance reporting",
    ],
    cta: { label: "Get Started", href: "/contact" },
    price: "Starting at $297/mo",
    accent: "#478ac9",
  },
  {
    id: "smallbizhq",
    icon: "🚀",
    name: "SmallBizHQ — Free AI Marketing Toolkit",
    tagline: "Your unfair advantage. At zero cost.",
    description:
      "SmallBizHQ is the top of our product ecosystem — and it's completely free. It's an AI-powered marketing toolkit designed specifically for small businesses. Run SEO audits, generate content ideas, analyze competitors, and discover what your customers are actually searching for. No agency required. No credit card needed.",
    includes: [
      "AI-powered SEO site audit",
      "Competitor gap analysis",
      "Content idea generator",
      "Local SEO recommendations",
      "Social media audit",
    ],
    cta: { label: "Try SmallBizHQ Free", href: "https://smallbizhq.co", external: true },
    price: "Free",
    accent: "#22c55e",
  },
  {
    id: "stratiq",
    icon: "📊",
    name: "StratIQ — AI Business Intelligence Reports",
    tagline: "Know your position. Own your market.",
    description:
      "StratIQ delivers deep-dive competitive analysis and marketing strategy in the form of a professional, actionable report — powered by AI and delivered fast. Most agencies charge thousands for what StratIQ produces in hours. Walk away knowing exactly where you stand against your competitors and exactly what to do about it.",
    includes: [
      "Full competitor analysis (up to 5 competitors)",
      "Market positioning report",
      "SEO gap analysis",
      "Content strategy recommendations",
      "Social media audit vs. competitors",
      "AI-generated action plan with prioritized steps",
    ],
    cta: { label: "Order a Report", href: "https://trystratiq.com", external: true },
    price: "$97 – $297",
    accent: "#6366f1",
  },
  {
    id: "forge",
    icon: "⚡",
    name: "Forge — AI-Powered Managed Marketing",
    tagline: "Your marketing. Fully automated. Fully managed.",
    description:
      "Forge is the most hands-off way to have a world-class marketing operation running for your small business. We combine AI automation with human oversight to deliver content, strategy, posting, and reporting — every single month. You focus on your business. We handle the rest.",
    includes: [
      "Monthly content strategy built by AI, refined by humans",
      "Automated social media posting across all platforms",
      "AI-driven blog content (SEO-optimized)",
      "Monthly performance dashboard and reporting",
      "Quarterly strategy review calls",
      "Priority support and direct access to Matt",
    ],
    cta: { label: "Apply for Forge", href: "/contact" },
    price: "From $97/mo (Pilot) · $497/mo (Pro)",
    accent: "#0f172a",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">
            Everything Your Small Business Needs to{" "}
            <span className="text-gradient">Win Online</span>
          </h1>
          <p className="text-xl text-[#94a3b8] leading-relaxed">
            From free AI tools to fully managed marketing — we&rsquo;ve built a complete ecosystem for small businesses at every stage. Start free. Scale when you&rsquo;re ready.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-24">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-sm font-semibold mb-4"
                  style={{ backgroundColor: service.accent }}
                >
                  <span>{service.icon}</span>
                  <span>{service.price}</span>
                </div>
                <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight mb-3">
                  {service.name}
                </h2>
                <p className="text-lg font-medium text-[#64748b] mb-5">{service.tagline}</p>
                <p className="text-[#374151] leading-relaxed mb-8">{service.description}</p>
                {"external" in service.cta && service.cta.external ? (
                  <a
                    href={service.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-base font-semibold text-white rounded-xl hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: service.accent }}
                  >
                    {service.cta.label} →
                  </a>
                ) : (
                  <Link
                    href={service.cta.href}
                    className="inline-flex items-center px-6 py-3 text-base font-semibold text-white rounded-xl hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: service.accent }}
                  >
                    {service.cta.label} →
                  </Link>
                )}
              </div>

              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#64748b] mb-5">
                    What&rsquo;s Included
                  </h3>
                  <ul className="space-y-3">
                    {service.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                          style={{ backgroundColor: `${service.accent}20` }}
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke={service.accent}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-[#374151]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-[#0f172a] mb-4">Not Sure Where to Start?</h2>
          <p className="text-[#64748b] leading-relaxed mb-8">
            Start with SmallBizHQ — it&rsquo;s completely free and will show you exactly where your business stands online. From there, you&rsquo;ll have a clear picture of what you need next. No pressure, no sales calls required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://smallbizhq.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-xl gradient-accent hover:opacity-90 transition-opacity"
            >
              Start Free — SmallBizHQ
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#0f172a] rounded-xl border border-[#e2e8f0] bg-white hover:bg-[#f8fafc] transition-colors"
            >
              Talk to Matt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
