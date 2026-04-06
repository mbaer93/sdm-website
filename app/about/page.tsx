import type { Metadata } from "next";
import Link from "next/link"
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Matt Baer & Social Drive",
  description:
    "Meet Matt Baer — firefighter, small business owner, and founder of Social Drive. Learn how a decade in the fire service and running a small business shaped an AI marketing company built for small business owners.",
  alternates: {
    canonical: "https://www.socialdrivemedia.com/about",
  },
  openGraph: {
    title: "About Matt Baer & Social Drive",
    description:
      "A firefighter, a landscaper, and now an AI marketing builder. Meet the founder of Social Drive.",
    url: "https://www.socialdrivemedia.com/about",
  },
};

const values = [
  {
    icon: "💪",
    title: "Hard Work",
    body: "We don\'t cut corners. Whether it\'s a free audit or a full managed marketing program, we put in the work to deliver real results.",
  },
  {
    icon: "🎯",
    title: "Simplicity",
    body: "Marketing doesn\'t have to be complicated. We cut through the noise and give you tools and strategies that are clear, actionable, and actually work.",
  },
  {
    icon: "🤝",
    title: "Honesty",
    body: "If something isn\'t working, we\'ll tell you. We\'d rather lose a client with our integrity intact than keep one by telling them what they want to hear.",
  },
  {
    icon: "🔓",
    title: "No Contracts, No Lock-In",
    body: "Everything we offer is month-to-month. We earn your business every month because we believe that\'s how it should work.",
  },
  {
    icon: "🏘️",
    title: "Community First",
    body: "We\'re based in Greencastle, PA and we care about the small businesses that make our communities thrive — from the main street diner to the local HVAC company.",
  },
  {
    icon: "✝️",
    title: "Faith-Driven",
    body: "Our values are grounded in faith. We treat every client, partner, and team member the way we\'d want to be treated — with respect, care, and genuine investment in their success.",
  },
];

const timeline = [
  {
    year: "Early Career",
    title: "A Decade in the Fire Service",
    body: "Matt spent nearly a decade as a firefighter in Northern Virginia. The fire service teaches you teamwork, discipline, and how to stay calm and deliver when the stakes are high. Those instincts carry into everything he does.",
  },
  {
    year: "The Hustle",
    title: "Building a Business from the Ground Up",
    body: "After the fire service, Matt built and operated a landscaping business. He knows what it means to get up early, work with your hands, serve your community, and figure out how to market yourself without a big budget or a team of experts.",
  },
  {
    year: "The Pivot",
    title: "Discovering Digital Marketing",
    body: "Running a small business showed Matt the gap: most small business owners have no idea how to market themselves online, and most agencies are either too expensive or too disconnected from what it actually means to run a small business.",
  },
  {
    year: "Today",
    title: "Building AI Tools for Small Business",
    body: "Social Drive evolved from a social media agency into something bigger: an AI-powered marketing infrastructure company. Matt now builds tools like SmallBizHQ, StratIQ, and Forge to give small businesses the same marketing firepower that big companies have — at a fraction of the cost.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">
            We Have a Heart for{" "}
            <span className="text-gradient">Small, Local Businesses</span>
          </h1>
          <p className="text-xl text-[#94a3b8] leading-relaxed">
            Social Drive was built by a small business owner, for small business owners. Not a venture-backed startup. Not a corporate agency. A real person who&rsquo;s been in your shoes.
          </p>
        </div>
      </section>

      {/* Matt's Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#478ac9]/10 to-[#6366f1]/10 rounded-2xl aspect-square max-w-md mx-auto flex flex-col items-center justify-center border border-[#e2e8f0] p-12 text-center">
                <div className="w-24 h-24 rounded-full bg-[#478ac9]/20 flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-[#478ac9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-[#0f172a]">Matt Baer</p>
                <p className="text-sm text-[#64748b] mt-1">Founder & CEO</p>
                <p className="text-xs text-[#94a3b8] mt-1">Greencastle, PA</p>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight mb-6">
                Meet Matt Baer
              </h2>
              <div className="space-y-5 text-[#374151] leading-relaxed">
                <p>
                  Matt Baer spent nearly a decade as a firefighter in Northern Virginia — a job that demands grit, precision, and showing up for people at their worst moments. When he transitioned out of the fire service, he did what a lot of veterans do: he built something.
                </p>
                <p>
                  He launched a landscaping business from the ground up and ran it himself. That experience taught him everything about what small business owners actually face: tight margins, not enough hours in the day, and a marketing world that feels designed for companies with teams and budgets that most small businesses will never have.
                </p>
                <p>
                  That gap became the mission. Social Drive started as a social media management agency, but Matt kept asking: &ldquo;Why do only big companies get to use AI for marketing?&rdquo; So he started building. SmallBizHQ. StratIQ. Forge. Each tool designed to give small business owners real leverage — without the agency price tag.
                </p>
                <p>
                  Today, Social Drive operates out of Greencastle, PA with a simple belief: small businesses deserve the same quality of marketing infrastructure that enterprise companies take for granted. And they deserve a partner who actually cares — not just a vendor who takes their money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4">The Road to Social Drive</h2>
            <p className="text-lg text-[#64748b]">Every chapter of the story shapes what we build today.</p>
          </div>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-[#e2e8f0] sm:transform sm:-translate-x-1/2"></div>
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex gap-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className="hidden sm:flex sm:flex-1"></div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#478ac9] border-4 border-white shadow-md z-10 mt-2 sm:mt-0 self-start sm:self-center"></div>
                  <div className="flex-1 bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm sm:max-w-sm">
                    <span className="text-xs font-semibold text-[#478ac9] uppercase tracking-wider">{item.year}</span>
                    <h3 className="text-lg font-bold text-[#0f172a] mt-1 mb-3">{item.title}</h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4">What We Stand For</h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              These aren&rsquo;t corporate values on a wall. They&rsquo;re how Matt runs his business every day — and how everyone on the Social Drive team is expected to operate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-3">{value.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
        <div className="max-w-3xl mx-auto text-center">

          <div className="flex justify-center mb-12">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-[#478ac9]/20">
              <Image
                src="/images/matt.jpg"
                alt="Matt Baer — Founder of Social Drive"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to work with someone who actually gets it?</h2>
          <p className="text-[#94a3b8] mb-8">
            Start free with SmallBizHQ or reach out directly. Either way, we&rsquo;d love to hear about your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://smallbizhq.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-xl gradient-accent hover:opacity-90 transition-opacity"
            >
              Start Free with SmallBizHQ
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-xl border border-white/20 hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
