import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Social Drive Media",
  description:
    "Get in touch with Social Drive Media. Talk to Matt Baer about AI marketing tools, social media management, or any of our services for small businesses in Greencastle, PA.",
  alternates: {
    canonical: "https://www.socialdrivemedia.com/contact",
  },
  openGraph: {
    title: "Contact — Social Drive Media",
    description:
      "Reach out to Social Drive Media. We respond to every inquiry personally — no auto-replies, no call centers.",
    url: "https://www.socialdrivemedia.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">
            Let&rsquo;s Talk About Your{" "}
            <span className="text-gradient">Small Business</span>
          </h1>
          <p className="text-xl text-[#94a3b8] leading-relaxed">
            No auto-replies. No call centers. You send a message, Matt reads it personally and gets back to you. That&rsquo;s how we do things.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#0f172a] mb-2">Send a Message</h2>
            <p className="text-[#64748b] mb-8">
              Tell us about your business and what you&rsquo;re looking for. We typically respond within one business day.
            </p>
            <form
              action="https://formspree.io/f/xanynlvz"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[#111827] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#478ac9] focus:border-transparent transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@yourbusiness.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[#111827] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#478ac9] focus:border-transparent transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-medium text-[#374151] mb-1.5">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  placeholder="Your Business Name"
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[#111827] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#478ac9] focus:border-transparent transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#374151] mb-1.5">
                  How Can We Help? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your business and what you're looking to achieve with your marketing..."
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[#111827] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#478ac9] focus:border-transparent transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 text-base font-semibold text-white rounded-xl gradient-accent hover:opacity-90 transition-opacity"
              >
                Send Message →
              </button>

              <p className="text-xs text-[#94a3b8] text-center">
                By submitting, you agree to be contacted by Social Drive Media. We don&rsquo;t spam. Ever.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0f172a] mb-6">Contact Info</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#478ac9]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#478ac9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#374151]">Email</p>
                    <a href="mailto:matt@socialdrivemedia.com" className="text-[#478ac9] hover:underline text-sm">
                      matt@socialdrivemedia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#478ac9]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#478ac9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#374151]">Location</p>
                    <p className="text-sm text-[#64748b]">Greencastle, Pennsylvania</p>
                    <p className="text-xs text-[#94a3b8] mt-0.5">Serving small businesses nationwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#478ac9]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#478ac9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#374151]">Office Hours</p>
                    <p className="text-sm text-[#64748b]">Monday – Friday: 9AM – 5PM ET</p>
                    <p className="text-sm text-[#64748b]">Saturday – Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SmallBizHQ nudge */}
            <div className="bg-gradient-to-br from-[#478ac9]/10 to-[#6366f1]/10 rounded-2xl p-8 border border-[#478ac9]/20">
              <div className="text-2xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Rather Skip the Form?</h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-5">
                Start free with SmallBizHQ — no form required, no call needed. Run an AI audit on your business in minutes and see exactly where you stand.
              </p>
              <a
                href="https://smallbizhq.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg gradient-accent hover:opacity-90 transition-opacity"
              >
                Start Free at SmallBizHQ →
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-medium text-[#374151] mb-4">Follow Social Drive Media</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/driveyoursocialimpact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] text-sm font-medium text-[#374151] hover:border-[#478ac9] hover:text-[#478ac9] transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/social_drivemedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] text-sm font-medium text-[#374151] hover:border-[#478ac9] hover:text-[#478ac9] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@SocialDriveMedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] text-sm font-medium text-[#374151] hover:border-[#478ac9] hover:text-[#478ac9] transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
