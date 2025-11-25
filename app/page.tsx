"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-dashed border-gray-200">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-4 border-x border-dashed border-gray-200">
          <div className="font-mono text-2xl tracking-tight">
            <span className="text-emerald-700 font-bold">File</span>
            <span>Store</span>
          </div>
          <div className="flex gap-4">
            <button className="border border-dashed border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
              Files
            </button>
            <button className="bg-emerald-100 border border-dashed border-emerald-200 text-emerald-800 px-4 py-2 text-sm font-medium hover:bg-emerald-200 transition-colors">
              Upload
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto w-full border-x border-dashed border-gray-200">
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center p-12 bg-linear-to-br from-emerald-50/50 via-white to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/50 text-emerald-700 text-sm font-medium mb-6 border border-dashed border-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              v2.0 is now live
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Cloud storage made <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">
                simple & secure.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Store, share, and collaborate on files from any device. Experience
              the future of cloud storage with end-to-end encryption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 font-semibold transition-all shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:-translate-y-1 flex items-center gap-2">
                Start Uploading
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
              </button>
              <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 border border-dashed border-gray-200 px-8 py-4 font-semibold transition-all hover:border-gray-300 flex items-center gap-2">
                View Pricing
              </button>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-gray-200 border-t border-dashed border-gray-200">
          <div className="group bg-white p-12 hover:bg-gray-50/50 transition-colors">
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
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Bank-Grade Security
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Your files are encrypted with AES-256 before they even leave your
              device.
            </p>
          </div>

          <div className="group bg-white p-12 hover:bg-gray-50/50 transition-colors">
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
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Lightning Fast
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Global CDN ensures your files are available instantly, wherever
              you are.
            </p>
          </div>

          <div className="group bg-white p-12 hover:bg-gray-50/50 transition-colors">
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
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Seamless Sharing
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Create public or private links with expiration dates and password
              protection.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-dashed border-gray-200">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-8 border-x border-dashed border-gray-200">
          <div className="font-mono text-xl">
            <span className="text-emerald-700 font-bold">File</span>
            <span>Store</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <button className="hover:text-emerald-600 hover:underline transition-colors">
              Instagram
            </button>
            <button className="hover:text-emerald-600 hover:underline transition-colors">
              Twitter
            </button>
            <button className="hover:text-emerald-600 hover:underline transition-colors">
              Facebook
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
