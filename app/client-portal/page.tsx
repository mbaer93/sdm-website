import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Portal — SD Accelerate",
  description:
    "Access your Social Drive client portal. Log in to SD Accelerate to view your marketing reports, content calendar, and account dashboard. Or choose an SD Accelerate package to get started.",
  alternates: {
    canonical: "https://www.socialdrivemedia.com/client-portal",
  },
  openGraph: {
    title: "Client Portal — SD Accelerate",
    description: "Choose your SD Accelerate package or log in to your dashboard.",
    url: "https://www.socialdrivemedia.com/client-portal",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const packages = [
  {
    name: "Starter",
    price: "Contact for pricing",
    description: "Perfect for businesses just getting started with social media management.",
    features: [
      "Social media management",
      "Monthly reporting",
      "1 platform",
    ],
    accent: "#478ac9",
    subject: "SD Accelerate Starter Package",
    popular: false,
  },
  {
    name: "Growth",
    price: "Contact for pricing",
    description: "Everything you need to grow your presence across multiple platforms.",
    features: [
      "Everything in Starter",
      "3 platforms",
      "Weekly reporting",
      "Content calendar",
    ],
    accent: "#6366f1",
    subject: "SD Accelerate Growth Package",
    popular: true,
  },
  {
    name: "Accelerate",
    price: "Contact for pricing",
    description: "The full-service experience with dedicated support and custom strategy.",
    features: [
      "Everything in Growth",
      "Unlimited platforms",
      "Daily monitoring",
      "Dedicated account manager",
      "Custom strategy",
    ],
    accent: "#0f172a",
    subject: "SD Accelerate Accelerate Package",
    popular: false,
  },
];

export default function ClientPortalPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            SD Accelerate
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">
            Choose Your Package
          </h1>
          <p className="text-xl text-[#94a3b8] leading-relaxed mb-4">
            Get started with SD Accelerate — Social Drive&rsquo;s managed marketing program. Select the tier that fits your business and reach out to get going.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight mb-4">
              SD Accelerate Packages
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              All packages include direct access to the Social Drive team. Pricing details will be confirmed on your onboarding call.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-2xl p-8 border shadow-sm relative overflow-hidden flex flex-col ${
                  pkg.popular
                    ? "border-[#6366f1] shadow-lg shadow-[#6366f1]/10"
                    : "border-[#e2e8f0]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white bg-[#6366f1]">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2">{pkg.name}</h3>
                  <div className="text-lg font-semibold mb-3" style={{ color: pkg.accent }}>
                    {pkg.price}
                  </div>
                  <p className="text-sm text-[#64748b] leading-relaxed">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: `${pkg.accent}20` }}
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke={pkg.accent}
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
                      <span className="text-sm text-[#374151]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:ben@socialdrivemedia.com?subject=${encodeURIComponent(pkg.subject)}`}
                  className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-xl hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: pkg.accent }}
                >
                  Get Started →
                </a>
              </div>
            ))}
          </div>

          {/* Already a client */}
          <div className="mt-16 text-center">
            <p className="text-[#64748b] mb-4">Already a client?</p>
            <a
              href="https://sdaccelerate.cldportal.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-2xl gradient-accent hover:opacity-90 transition-opacity shadow-lg shadow-[#478ac9]/30"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Log In to SD Accelerate
            </a>
            <p className="mt-3 text-sm text-[#64748b]">
              Opens in a new tab →{" "}
              <span className="font-mono text-[#94a3b8]">sdaccelerate.cldportal.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* What's in the portal */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#0f172a] text-center mb-12">
            What You&rsquo;ll Find in Your Dashboard
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📊", title: "Performance Reports", desc: "Monthly marketing reports with real data on what's working." },
              { icon: "📅", title: "Content Calendar", desc: "See what's scheduled and upcoming across all your platforms." },
              { icon: "📈", title: "Campaign Tracking", desc: "Follow your campaigns from launch through results." },
              { icon: "💬", title: "Direct Communication", desc: "Message the Social Drive team directly without digging through email threads." },
            ].map((item) => (
              <div key={item.title} className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0] text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold text-[#0f172a] mb-2">{item.title}</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-4">Having Trouble Logging In?</h2>
          <p className="text-[#64748b] mb-8">
            If you&rsquo;ve lost access to your SD Accelerate account or need help getting set up, reach out to Matt directly. We&rsquo;ll get you back in within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-xl gradient-accent hover:opacity-90 transition-opacity"
            >
              Contact Support
            </Link>
            <a
              href="mailto:ben@socialdrivemedia.com"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#0f172a] rounded-xl border border-[#e2e8f0] hover:bg-white transition-colors"
            >
              Email Us Directly
            </a>
          </div>
          <p className="mt-6 text-sm text-[#64748b]">
            Not a client yet?{" "}
            <a href="https://smallbizhq.co" target="_blank" rel="noopener noreferrer" className="text-[#478ac9] hover:underline">
              Start free with SmallBizHQ
            </a>{" "}
            or{" "}
            <Link href="/services" className="text-[#478ac9] hover:underline">
              explore our services
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
