"use client";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full border-b border-dashed border-gray-200 bg-linear-to-br from-emerald-50/50 via-white to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto border-x border-dashed border-gray-200 h-full">
            <div className="min-h-[60vh] flex flex-col justify-center items-center text-center p-8 md:p-12 relative">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/50 text-emerald-700 text-sm font-medium mb-6 border border-dashed border-emerald-200 hover:bg-emerald-100 transition-colors cursor-default">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  v2.0 is now live
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Cloud storage made <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500 animate-pulse">
                    simple & secure.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed px-4">
                  Store, share, and collaborate on files from any device.
                  Experience the future of cloud storage with end-to-end
                  encryption.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                  <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 font-semibold transition-all shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group">
                    Start Uploading
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </button>
                  <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 border border-dashed border-gray-200 px-8 py-4 font-semibold transition-all hover:border-gray-300 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2">
                    View Pricing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full border-dashed border-gray-200 bg-gray-50/30"
        >
          <div className="max-w-7xl mx-auto border-x border-dashed border-gray-200 h-full">
            <div className="grid md:grid-cols-3 gap-4 p-4 md:gap-0 md:p-0 md:divide-x divide-dashed divide-gray-200">
              <div className="group bg-white p-8 md:p-12 border border-dashed border-gray-200 md:border-0 hover:bg-gray-50/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm z-10 relative">
                <div className="w-12 h-12 bg-emerald-50 flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300 border border-dashed border-emerald-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  Bank-Grade Security
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Your files are encrypted with AES-256 before they even leave
                  your device.
                </p>
              </div>

              <div className="group bg-white p-8 md:p-12 border border-dashed border-gray-200 md:border-0 hover:bg-gray-50/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm z-10 relative">
                <div className="w-12 h-12 bg-emerald-50 flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300 border border-dashed border-emerald-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  Lightning Fast
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Global CDN ensures your files are available instantly,
                  wherever you are.
                </p>
              </div>

              <div className="group bg-white p-8 md:p-12 border border-dashed border-gray-200 md:border-0 hover:bg-gray-50/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm z-10 relative">
                <div className="w-12 h-12 bg-emerald-50 flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300 border border-dashed border-emerald-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  Seamless Sharing
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Create public or private links with expiration dates and
                  password protection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full border-t border-dashed border-gray-200 bg-white"
        >
          <div className="max-w-7xl mx-auto border-x border-dashed border-gray-200 h-full py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Simple, transparent pricing
              </h2>
              <p className="text-lg text-gray-500">
                Choose the plan that&apos;s right for you. No hidden fees.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <div className="p-8 border border-dashed border-gray-200 bg-gray-50/50 flex flex-col hover:border-gray-300 transition-colors duration-300 hover:-translate-y-1 hover:shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">
                  $0
                  <span className="text-base font-normal text-gray-500">
                    /mo
                  </span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    5 GB Storage
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Basic Support
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Single User
                  </li>
                </ul>
                <button className="w-full border border-dashed border-gray-300 text-gray-700 py-3 font-medium hover:bg-white hover:border-gray-400 transition-all hover:-translate-y-0.5 active:translate-y-0">
                  Get Started
                </button>
              </div>

              {/* Pro Plan */}
              <div className="p-8 border border-dashed border-emerald-200 bg-emerald-50/30 flex flex-col relative hover:border-emerald-300 transition-colors duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 border-l border-b border-dashed border-emerald-200">
                  POPULAR
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">
                  $12
                  <span className="text-base font-normal text-gray-500">
                    /mo
                  </span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    1 TB Storage
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Priority Support
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Up to 5 Users
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Advanced Sharing
                  </li>
                </ul>
                <button className="w-full bg-emerald-600 text-white py-3 font-medium hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all hover:-translate-y-0.5 active:translate-y-0">
                  Start Free Trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="p-8 border border-dashed border-gray-200 bg-gray-50/50 flex flex-col hover:border-gray-300 transition-colors duration-300 hover:-translate-y-1 hover:shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Enterprise
                </h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">
                  $49
                  <span className="text-base font-normal text-gray-500">
                    /mo
                  </span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Unlimited Storage
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    24/7 Dedicated Support
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Unlimited Users
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    SSO & Audit Logs
                  </li>
                </ul>
                <button className="w-full border border-dashed border-gray-300 text-gray-700 py-3 font-medium hover:bg-white hover:border-gray-400 transition-all hover:-translate-y-0.5 active:translate-y-0">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="w-full border-t border-dashed border-gray-200  bg-gray-50/30"
        >
          <div className="max-w-7xl mx-auto border-x border-dashed border-gray-200 h-full py-16 md:py-24">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white border border-dashed border-gray-200 p-6 hover:border-emerald-200 transition-colors hover:shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    How secure is my data?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We use industry-standard AES-256 encryption for all files at
                    rest and TLS for files in transit. Your data is safe with
                    us.
                  </p>
                </div>

                <div className="bg-white border border-dashed border-gray-200 p-6 hover:border-emerald-200 transition-colors hover:shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Can I share files with non-users?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes! You can generate public links for any file or folder.
                    You can also set expiration dates and passwords for added
                    security.
                  </p>
                </div>

                <div className="bg-white border border-dashed border-gray-200 p-6 hover:border-emerald-200 transition-colors hover:shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    What happens if I exceed my storage limit?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We&apos;ll notify you when you&apos;re close to your limit.
                    You can upgrade your plan at any time to get more storage
                    instantly.
                  </p>
                </div>

                <div className="bg-white border border-dashed border-gray-200 p-6 hover:border-emerald-200 transition-colors hover:shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Do you offer a free trial?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes, our Pro plan comes with a 14-day free trial so you can
                    experience all the premium features risk-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-white border-t border-dashed border-gray-200">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-6 py-8 border-x border-dashed border-gray-200 gap-4 md:gap-0">
          <div className="font-mono text-xl">
            <span className="text-emerald-700 font-bold">File</span>
            <span>Store</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <button className="hover:text-emerald-600 hover:underline transition-colors decoration-dashed underline-offset-4">
              Instagram
            </button>
            <button className="hover:text-emerald-600 hover:underline transition-colors decoration-dashed underline-offset-4">
              Twitter
            </button>
            <button className="hover:text-emerald-600 hover:underline transition-colors decoration-dashed underline-offset-4">
              Facebook
            </button>
          </div>
          <div className="text-sm text-gray-400">© 2024 FileStore Inc.</div>
        </div>
      </footer>
    </div>
  );
}
