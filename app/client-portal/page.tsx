import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Portal — SD Accelerate",
  description:
    "Access your Social Drive Media client portal. Log in to SD Accelerate to view your marketing reports, content calendar, and account dashboard.",
  alternates: {
    canonical: "https://www.socialdrivemedia.com/client-portal",
  },
  openGraph: {
    title: "Client Portal — SD Accelerate",
    description: "Welcome back. Access your SD Accelerate dashboard.",
    url: "https://www.socialdrivemedia.com/client-portal",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ClientPortalPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-[60vh] flex items-center">
        <div className="max-w-3xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Client access portal
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">
            Welcome Back
          </h1>
          <p className="text-xl text-[#94a3b8] leading-relaxed mb-12">
            Access your SD Accelerate dashboard — your hub for marketing reports, content calendars, campaign performance, and direct communication with the SDM team.
          </p>

          <a
            href="https://sdaccelerate.cldportal.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white rounded-2xl gradient-accent hover:opacity-90 transition-opacity shadow-2xl shadow-[#478ac9]/30"
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Log In to SD Accelerate
          </a>

          <p className="mt-6 text-sm text-[#64748b]">
            Opens in a new tab →{" "}
            <span className="font-mono text-[#94a3b8]">sdaccelerate.cldportal.com</span>
          </p>
        </div>
      </section>

      {/* What's in the portal */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#0f172a] text-center mb-12">
            What You&rsquo;ll Find in Your Dashboard
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📊", title: "Performance Reports", desc: "Monthly marketing reports with real data on what's working." },
              { icon: "📅", title: "Content Calendar", desc: "See what's scheduled and upcoming across all your platforms." },
              { icon: "📈", title: "Campaign Tracking", desc: "Follow your campaigns from launch through results." },
              { icon: "💬", title: "Direct Communication", desc: "Message the SDM team directly without digging through email threads." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-[#e2e8f0] text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold text-[#0f172a] mb-2">{item.title}</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#e2e8f0]">
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
              href="mailto:matt@socialdrivemedia.com"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#0f172a] rounded-xl border border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors"
            >
              Email Matt Directly
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
