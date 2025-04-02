"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FiMenu, FiFileText } from "react-icons/fi";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-nav">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-medium text-xl">
          <span className="text-gradient font-bold">AV</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" variant="outline" className="rounded-full">
            <a href="/images/Resume.png" download="Abhishek_Verma_Resume.png" className="flex items-center gap-1">
              <FiFileText className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <FiMenu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <div className="mt-2 mb-8">
              <span className="text-gradient font-bold text-xl">AV</span>
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm" variant="outline" className="mt-2 rounded-full">
                <a
                  href="/images/Resume.png"
                  download="Abhishek_Verma_Resume.png"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-1"
                >
                  <FiFileText className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
