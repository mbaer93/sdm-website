import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SD Accelerate — Client Portal | Social Drive',
  description: 'Access your SD Accelerate dashboard or get started with a Social Drive package today.',
  openGraph: {
    title: 'SD Accelerate — Client Portal | Social Drive',
    description: 'Access your SD Accelerate dashboard or choose a package to get started.',
    url: 'https://www.socialdrivemedia.com/client-portal',
  },
  alternates: { canonical: 'https://www.socialdrivemedia.com/client-portal' },
}

const PACKAGES = [
  {
    name: 'Access',
    tagline: 'Platform access to get you started',
    description: 'Streamline your social media management with our powerful platform. Scheduling, analytics, and performance metrics — all in one place.',
    monthlyPrice: 100,
    yearlyPrice: 1000,
    monthlyPriceId: 'price_1Om2JuKYIBz9dddLAkQMI9ke',
    yearlyPriceId: 'price_1Om2KVKYIBz9dddLU5R1y6ho',
    highlight: false,
    features: [
      'SD Accelerate platform access',
      'Social media scheduling',
      'Performance analytics dashboard',
      'Content calendar',
      'Email support',
    ],
  },
  {
    name: 'Plus',
    tagline: 'Platform + expert guidance',
    description: 'Elevate your social media game. In addition to full platform access, receive regular check-ins and guidance from our expert team.',
    monthlyPrice: 175,
    yearlyPrice: 1750,
    monthlyPriceId: 'price_1Om2QuKYIBz9dddL7NaFwLfC',
    yearlyPriceId: 'price_1Om2TEKYIBz9dddLl0B3KJ89',
    highlight: true,
    features: [
      'Everything in Access',
      'Regular team check-ins',
      'Personalized strategy sessions',
      'Content recommendations',
      'Priority support',
      'Monthly performance review',
    ],
  },
  {
    name: 'Pro',
    tagline: 'Full-service managed social',
    description: 'Take your social media to the next level. Dedicated team support, proactive strategies, and ongoing optimization — we drive your digital impact.',
    monthlyPrice: 300,
    yearlyPrice: 3000,
    monthlyPriceId: 'price_1Om2b4KYIBz9dddLQkiECmlK',
    yearlyPriceId: 'price_1Om2bmKYIBz9dddLgZIRHvdh',
    highlight: false,
    features: [
      'Everything in Plus',
      'Dedicated account manager',
      'Proactive content creation',
      'Ongoing profile optimization',
      'Competitor monitoring',
      'Weekly reporting',
      'Direct team communication',
    ],
  },
]

export default function ClientPortalPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          SD Accelerate
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Choose the plan that fits your business — or log in if you&apos;re already a client.
        </p>
        <a
          href="https://sdaccelerate.cldportal.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#478ac9] hover:bg-[#3a7ab8] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Log In to SD Accelerate →
        </a>
      </section>

      {/* Packages */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Choose Your Plan
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              All plans include access to the SD Accelerate platform. Upgrade or cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl border p-8 flex flex-col ${
                  pkg.highlight
                    ? 'border-[#478ac9] bg-white shadow-xl ring-2 ring-[#478ac9]/20 relative'
                    : 'border-slate-200 bg-white shadow-sm'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#478ac9] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">SD Accelerate {pkg.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{pkg.tagline}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-extrabold text-slate-900">${pkg.monthlyPrice}</span>
                    <span className="text-slate-500 text-sm">/month</span>
                  </div>
                  <p className="text-sm text-slate-400">or ${pkg.yearlyPrice}/year (save ${(pkg.monthlyPrice * 12) - pkg.yearlyPrice})</p>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{pkg.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="text-[#478ac9] font-bold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <a
                    href={`https://buy.stripe.com/test_placeholder_${pkg.monthlyPriceId}`}
                    className={`block text-center font-semibold py-3 px-6 rounded-lg transition-colors ${
                      pkg.highlight
                        ? 'bg-[#478ac9] hover:bg-[#3a7ab8] text-white'
                        : 'bg-slate-900 hover:bg-slate-700 text-white'
                    }`}
                  >
                    Start Monthly — ${pkg.monthlyPrice}/mo
                  </a>
                  <a
                    href={`https://buy.stripe.com/test_placeholder_${pkg.yearlyPriceId}`}
                    className="block text-center text-sm text-[#478ac9] hover:underline font-medium py-2"
                  >
                    Annual plan — ${pkg.yearlyPrice}/yr
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-sm mt-10">
            Questions?{' '}
            <a href="mailto:ben@socialdrivemedia.com" className="text-[#478ac9] hover:underline">
              Email us
            </a>{' '}
            — we&apos;re happy to help you pick the right plan.
          </p>
        </div>
      </section>

      {/* Existing clients */}
      <section className="py-16 px-6 bg-slate-900 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Already a Client?</h2>
        <p className="text-slate-400 mb-6">Log in to your SD Accelerate dashboard to manage your account.</p>
        <a
          href="https://sdaccelerate.cldportal.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#478ac9] hover:bg-[#3a7ab8] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Log In to SD Accelerate →
        </a>
      </section>

    </main>
  )
}
