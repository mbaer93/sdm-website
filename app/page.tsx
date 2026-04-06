import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Drive — AI-Powered Marketing for Small Businesses",
  description:
    "Social Drive builds AI-powered marketing tools, strategies, and systems for small businesses. Based in Greencastle, PA. Start free with SmallBizHQ.",
  alternates: {
    canonical: "https://www.socialdrivemedia.com",
  },
  openGraph: {
    title: "Social Drive — AI-Powered Marketing for Small Businesses",
    description:
      "We build the tools, strategies, and systems that help small businesses grow online — without the agency price tag.",
    url: "https://www.socialdrivemedia.com",
  },
};

const products = [
  {
    icon: "🚀",
    name: "SmallBizHQ",
    tagline: "Free AI Marketing Toolkit",
    description:
      "Your all-in-one free toolkit for AI-powered SEO audits, content ideas, competitor analysis, and more. No credit card. No catch. Built to give small businesses a real advantage.",
    price: "Free",
    href: "https://smallbizhq.co",
    accent: "#478ac9",
    badge: "Start Here",
  },
  {
    icon: "📊",
    name: "StratIQ",
    tagline: "AI Business Intelligence Reports",
    description:
      "Deep-dive competitive analysis and actionable marketing strategy — delivered as a professional report in hours, not weeks. Know exactly where you stand and what to do about it.",
    price: "From $97",
    href: "https://trystratiq.com",
    accent: "#6366f1",
    badge: "Most Popular",
  },
  {
    icon: "⚡",
    name: "SD Accelerate",
    tagline: "Social Media Management Platform",
    description:
      "Our flagship client platform for hands-on social media management. Get scheduling, analytics, expert guidance, and a dedicated team — all from one dashboard.",
    price: "From $100/mo",
    href: "/client-portal",
    accent: "#478ac9",
    badge: "Client Platform",
  },
];

const whyUs = [
  {
    icon: "🤝",
    title: "A Partner, Not a Vendor",
    body: "Matt picks up the phone. You won\'t get handed off to an account manager who doesn\'t know your business. We build real relationships because we genuinely care about your success.",
  },
  {
    icon: "🔓",
    title: "No Contracts. Ever.",
    body: "Month-to-month, always. We earn your business every single month. If we\'re not delivering real value, you shouldn\'t be locked in — and we\'re confident enough in our work that we don\'t need you to be.",
  },
  {
    icon: "🏘️",
    title: "Small Business at Heart",
    body: "Our founder ran a landscaping business and spent a decade in the fire service. We know what it means to work with your hands, serve a community, and build something real. That\'s who we built this for.",
  },
  {
    icon: "🤖",
    title: "AI That Actually Works",
    body: "We don\'t just talk about AI — we\'ve built it. Our tools diagnose your marketing gaps and automate the fixes. Real results, not buzzwords.",
  },
];

const testimonials = [
  {
    quote:
      "Social Drive didn\'t just post content — they actually understood our business and helped us show up online the right way. Matt is the real deal.",
    author: "Local Business Owner",
    location: "Hagerstown, MD",
  },
  {
    quote:
      "The StratIQ report opened our eyes to what our competitors were doing that we weren\'t. We pivoted our marketing in two weeks and saw results within the month.",
    author: "Restaurant Owner",
    location: "Chambersburg, PA",
  },
  {
    quote:
      "I tried three other agencies before Social Drive. None of them felt like a partner. Matt does. It\'s a completely different experience.",
    author: "Home Services Business Owner",
    location: "Greencastle, PA",
  },
];

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Social Drive",
  url: "https://www.socialdrivemedia.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greencastle",
    addressRegion: "PA",
    addressCountry: "US",
  },
  description: "AI-powered marketing for small businesses",
  founder: {
    "@type": "Person",
    name: "Matt Baer",
  },
  sameAs: [
    "https://www.facebook.com/driveyoursocialimpact",
    "https://www.instagram.com/social_drivemedia/",
    "https://www.youtube.com/@SocialDriveMedia",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#478ac9] animate-pulse"></span>
            Now offering AI-powered marketing for small businesses
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Marketing That Actually Works —{" "}
            <span className="text-gradient">Powered by AI, Built for Small Business</span>
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
            Social Drive builds the tools, strategies, and systems that help small businesses grow online — without the agency price tag. We start you free, diagnose your gaps, and automate the fixes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://smallbizhq.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-xl gradient-accent hover:opacity-90 transition-opacity shadow-lg shadow-[#478ac9]/25"
            >
              Start Free with SmallBizHQ
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="https://trystratiq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              See Our Reports
            </a>
          </div>
          {/* Trust line */}
          <p className="mt-8 text-sm text-[#64748b]">
            Trusted by small businesses in Greencastle, PA and across the region. No contracts. No fluff.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4">
              The Social Drive Product Suite
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              One ecosystem. Three products. A complete path from &ldquo;just getting started&rdquo; to fully managed marketing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm card-hover relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: product.accent }}
                  >
                    {product.badge}
                  </span>
                </div>
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-extrabold text-[#0f172a] mb-1">{product.name}</h3>
                <p className="text-sm font-medium text-[#64748b] mb-4">{product.tagline}</p>
                <p className="text-[#374151] text-sm leading-relaxed mb-6">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold" style={{ color: product.accent }}>
                    {product.price}
                  </span>
                  {product.href.startsWith("http") ? (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: product.accent }}
                    >
                      Get Started →
                    </a>
                  ) : (
                    <Link
                      href={product.href}
                      className="inline-flex items-center text-sm font-semibold text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: product.accent }}
                    >
                      Learn More →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Social Drive */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4">
              Why Small Businesses Choose Social Drive
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              We&rsquo;re not your typical agency. We&rsquo;re a partner — built by someone who&rsquo;s been in the trenches of small business ownership.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-3">{item.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4">
              What Small Business Owners Say
            </h2>
            <p className="text-lg text-[#64748b]">Real feedback from real clients across our region.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#374151] leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[#0f172a] text-sm">{t.author}</p>
                  <p className="text-xs text-[#64748b]">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Matt CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-6">
            Built by a Small Business Owner, for Small Business Owners
          </h2>
          <p className="text-lg text-[#94a3b8] leading-relaxed mb-8">
            Matt Baer spent a decade as a firefighter in Northern Virginia, then built and ran a landscaping business from the ground up. He knows what it takes to run a small business — and he built Social Drive to give business owners like him the marketing firepower they deserve.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 text-base font-semibold text-[#0f172a] bg-white rounded-xl hover:bg-[#f8fafc] transition-colors"
          >
            Meet Matt &amp; the Story Behind Social Drive →
          </Link>
        </div>
      </section>

      {/* Client Portal CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-1">Already a client?</h3>
            <p className="text-[#64748b]">Access your SD Accelerate dashboard and client portal.</p>
          </div>
          <a
            href="https://sdaccelerate.cldportal.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center px-6 py-3 text-base font-semibold text-white rounded-xl bg-[#478ac9] hover:bg-[#3a78b5] transition-colors"
          >
            Go to SD Accelerate →
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight mb-6">
            Ready to grow your small business with AI?
          </h2>
          <p className="text-lg text-[#64748b] mb-10">
            Start free. No credit card. No commitment. See what AI-powered marketing can do for your business in Greencastle, PA and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://smallbizhq.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-xl gradient-accent hover:opacity-90 transition-opacity shadow-lg shadow-[#478ac9]/25"
            >
              Start Free with SmallBizHQ
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0f172a] rounded-xl border border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors"
            >
              Talk to Matt →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
