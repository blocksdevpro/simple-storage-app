"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-dashed border-gray-200">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-4 border-x border-dashed border-gray-200">
        <div className="font-mono text-2xl tracking-tight">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-emerald-700 font-bold group-hover:text-emerald-600 transition-colors">File</span>
            <span className="group-hover:text-gray-600 transition-colors">Store</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors hover:underline decoration-dashed underline-offset-4">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors hover:underline decoration-dashed underline-offset-4">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors hover:underline decoration-dashed underline-offset-4">
            FAQ
          </Link>
        </nav>

        <div className="hidden md:flex gap-4">
          <button className="border border-dashed border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-all hover:-translate-y-0.5 active:translate-y-0">
            Sign In
          </button>
          <button className="bg-emerald-100 border border-dashed border-emerald-200 text-emerald-800 px-4 py-2 text-sm font-medium hover:bg-emerald-200 transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-dashed border-gray-200 bg-white">
          <div className="flex flex-col p-4 space-y-4 border-x border-dashed border-gray-200 mx-auto max-w-7xl">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col gap-3 pt-4 border-t border-dashed border-gray-200">
              <button className="w-full border border-dashed border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
                Sign In
              </button>
              <button className="w-full bg-emerald-100 border border-dashed border-emerald-200 text-emerald-800 px-4 py-2 text-sm font-medium hover:bg-emerald-200 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
