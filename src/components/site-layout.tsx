import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-transparent.png";
export const moreLinks = [
  ["/carbon-markets", "Carbon Markets & Climate Finance"],
  ["/climate-business-models", "Climate Business Models"],
  ["/partners", "Partners & Engagement"],
  ["/impact", "Impact Priorities"],
  ["/why-africa-climate-actions", "Why Africa Climate Actions"],
] as const;
const navLinks = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/services", "Solutions"],
  ["/projects", "Projects"],
  ["/digital-mrv", "Digital MRV"],
] as const;
export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Africa Climate Actions home">
      <img
        src={logo}
        alt="Africa Climate Actions — People | Partnerships | Resilient Africa"
        width="1151"
        height="350"
      />
    </Link>
  );
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);
  const [mobileMore, setMobileMore] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map(([to, label]) => (
            <Link key={to} to={to} className="nav-link">
              {label}
            </Link>
          ))}
          <div className="nav-more">
            <Button
              variant="nav"
              aria-expanded={more}
              onClick={() => setMore(!more)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setMore(false);
              }}
            >
              More <ChevronDown />
            </Button>
            {more && (
              <div className="nav-menu">
                {moreLinks.map(([to, label]) => (
                  <Link key={to} to={to} onClick={() => setMore(false)}>
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Button asChild variant="brand" size="lg">
            <Link to="/contact">
              Let’s Talk <ArrowUpRight />
            </Link>
          </Button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map(([to, label]) => (
            <Link key={to} to={to} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <button
            className="mobile-more-trigger"
            type="button"
            aria-expanded={mobileMore}
            onClick={() => setMobileMore(!mobileMore)}
          >
            More <ChevronDown />
          </button>
          {mobileMore && (
            <div className="mobile-more-links">
              {moreLinks.map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => {
                    setMobileMore(false);
                    setOpen(false);
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
          <Link to="/contact" onClick={() => setOpen(false)}>
            Let’s Talk
          </Link>
        </nav>
      )}
    </header>
  );
}
export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="shell contact-band-inner">
        <div>
          <h2>Build the next climate solution with us.</h2>
          <p>
            Bring your project, your ambition, or your next big question. Let’s explore what we can
            build together.
          </p>
        </div>
        <Button className="cta" asChild variant="brand" size="lg">
          <Link to="/contact">
            Partner With Us <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand-column">
            <Brand />
            <p className="footer-about">
              Climate solutions for cleaner energy, productive agriculture, stronger businesses, and
              resilient communities across Africa.
            </p>
          </div>
          <div>
            <h3 className="footer-heading">Explore</h3>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/services">Our Solutions</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/digital-mrv">Digital MRV</Link>
              <Link to="/carbon-markets">Carbon Markets & Climate Finance</Link>
              <Link to="/climate-business-models">Climate Business Models</Link>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">Connect</h3>
            <div className="footer-links">
              <Link to="/partners">Partners & Engagement</Link>
              <Link to="/impact">Impact Priorities</Link>
              <Link to="/why-africa-climate-actions">Why Africa Climate Actions</Link>
              <Link to="/contact">Let’s Talk</Link>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">Addis Ababa, Ethiopia</h3>
            <div className="footer-contact">
              Nefas Silk Lafto Sub City,
              <br />
              Woreda 01, Addis Ababa
              <br />
              <br />
              <a href="tel:+251923275050">+251 923 275 050</a>
              <br />
              <a href="mailto:africaclimate568@gmail.com">africaclimate568@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Africa Climate Actions PLC. All rights reserved.</span>
          <div className="footer-bottom-links">
            <span>People · Partnerships · Resilient Africa</span>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
