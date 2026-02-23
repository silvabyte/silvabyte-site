import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function Arrow() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path
        d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <a href="/">
        <img src="./images/logos/icon_128_dark.svg" alt="silvabyte" height="32" width="32" className="h-8 w-8" />
      </a>
      <nav className="flex items-center gap-8">
        <a
          href="#work"
          className="text-stone text-[14px] hover:text-lilac transition-colors duration-200"
        >
          Work
        </a>
        <a
          href="#projects"
          className="text-stone text-[14px] hover:text-lilac transition-colors duration-200"
        >
          Projects
        </a>
        <a
          href="mailto:mat@silvabyte.com"
          className="text-[14px] text-ink font-medium border border-rule rounded-full px-5 py-2 hover:bg-lilac hover:text-white hover:border-lilac transition-all duration-200"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-24 pb-32">
      <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-serif font-normal leading-[1.1] tracking-tight text-ink max-w-[680px]">
        Building software
        <br />
        that moves the needle.
      </h1>
      <p className="mt-8 text-[18px] leading-relaxed text-ink-light max-w-[520px]">
        I'm Mat Silva — a software engineer and technical leader who helps
        businesses ship products, scale systems, and build teams that last.
      </p>
      <div className="mt-10 flex items-center gap-6">
        <a
          href="mailto:mat@silvabyte.com"
          className="group text-[15px] font-medium text-white bg-lilac rounded-full px-7 py-3 hover:bg-lilac-hover transition-colors duration-200"
        >
          Let's talk
          <Arrow />
        </a>
        <a
          href="#work"
          className="group text-[15px] text-stone hover:text-lilac transition-colors duration-200"
        >
          See my work
          <Arrow />
        </a>
      </div>
    </section>
  );
}

function WorkSection() {
  const areas = [
    {
      title: "Consulting",
      description:
        "Technical strategy, architecture reviews, and hands-on engineering for teams that need senior firepower.",
    },
    {
      title: "Advising",
      description:
        "Ongoing technical guidance for founders and CTOs navigating growth, hiring, and platform decisions.",
    },
    {
      title: "Mentorship",
      description:
        "One-on-one coaching for engineers leveling up — from senior IC to staff and beyond.",
    },
    {
      title: "Co-founding",
      description:
        "Open to the right partnership. I bring deep technical execution and a bias for shipping.",
    },
  ];

  return (
    <section id="work" className="py-24 border-t border-rule">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">
        <div>
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-stone">
            How I work
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-14">
          {areas.map((area) => (
            <div key={area.title}>
              <h3 className="text-[17px] font-medium text-ink mb-3">
                {area.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-stone">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 border-t border-rule">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">
        <div>
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-stone">
            Projects
          </h2>
        </div>
        <div className="space-y-12">
          <a
            href="https://weekend.business"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[17px] font-medium text-ink group-hover:text-lilac transition-colors duration-200">
                  Weekend Business
                  <Arrow />
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-stone max-w-[480px]">
                  An online course teaching non-programmers how to build and
                  command AI agents — no coding required.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/matsilva"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[17px] font-medium text-ink group-hover:text-lilac transition-colors duration-200">
                  Open Source
                  <Arrow />
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-stone max-w-[480px]">
                  Active contributor and maintainer. Check out my work on GitHub
                  to see what I've been building.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 border-t border-rule">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">
        <div>
          <p className="text-[13px] font-medium uppercase tracking-widest text-stone">
            Connect
          </p>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/matsilva"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-[15px] text-stone hover:text-lilac transition-colors duration-200"
          >
            GitHub
            <Arrow />
          </a>
          <a
            href="https://linkedin.com/in/matsilva"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-[15px] text-stone hover:text-lilac transition-colors duration-200"
          >
            LinkedIn
            <Arrow />
          </a>
          <a
            href="https://x.com/matsilva"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-[15px] text-stone hover:text-lilac transition-colors duration-200"
          >
            X
            <Arrow />
          </a>
        </div>
      </div>
      <div className="mt-16">
        <img src="./images/logos/SilvaByte.svg" alt="SilvaByte" width="120" className="w-[120px] mb-3" />
        <p className="text-[13px] text-stone-light">
          &copy; {new Date().getFullYear()} SilvaByte, LLC
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-[960px] px-6">
        <Header />
        <main>
          <Hero />
          <WorkSection />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
