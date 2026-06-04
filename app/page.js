import {
  Brain,
  Zap,
  Shield,
  Check,
  Plane,
  MapPin,
  Sparkles,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const features = [
  {
    icon: Brain,
    title: "AI-Optimized Routes",
    description:
      "Our neural tiffin network predicts traffic, weather, and crispness windows so your dosa lands hot—not soggy.",
    iconClass: "feature-icon--ai",
  },
  {
    icon: Zap,
    title: "8-Minute Delivery",
    description:
      "From tawa to terrace in under eight minutes. Bengaluru's fastest masala dosa, no traffic excuses.",
    iconClass: "feature-icon--speed",
  },
  {
    icon: Shield,
    title: "Hygienic Drone Fleet",
    description:
      "UV-sanitized pods, tamper-proof lids, and FSSAI-certified kitchens. Street-food soul, lab-grade safety.",
    iconClass: "feature-icon--fleet",
  },
];

const plans = [
  {
    name: "Masala Lite",
    description: "Perfect for weekend cravings",
    price: "₹299",
    period: "/month",
    featured: false,
    features: [
      "4 drone deliveries per month",
      "Plain & masala dosa options",
      "Standard 12-min delivery",
      "Email support",
    ],
  },
  {
    name: "Sambar Pro",
    description: "For true dosa devotees",
    price: "₹599",
    period: "/month",
    featured: true,
    features: [
      "Unlimited deliveries",
      "Full menu + chef specials",
      "Priority 8-min express lane",
      "24/7 WhatsApp concierge",
    ],
  },
];

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <a href="#" className="logo">
          <span className="logo-icon" aria-hidden="true">
            <Plane size={18} strokeWidth={2.5} />
          </span>
          AirDosa
        </a>
        <nav className="nav" aria-label="Main">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#footer">Contact</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-heading">
        <p className="hero-badge">
          <Sparkles size={14} aria-hidden="true" />
          Now flying in Bengaluru
        </p>
        <h1 id="hero-heading">
          Dosas at your doorstep.
          <br />
          <span>Delivered by drone.</span>
        </h1>
        <p className="hero-tagline">
          AirDosa is India&apos;s first AI-powered instant dosa delivery—crispy,
          hot, and airborne in minutes.
        </p>
        <div className="hero-cta">
          <a href="#pricing" className="btn btn-primary">
            <Zap size={18} aria-hidden="true" />
            Start Flying
          </a>
          <a href="#features" className="btn btn-secondary">
            See how it works
          </a>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-drone-ring">
            <div className="hero-drone-inner">
              <span className="hero-emoji">🥞</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section" aria-labelledby="features-heading">
        <AnimateOnScroll>
          <div className="section-header">
            <h2 id="features-heading">Why Bengaluru loves AirDosa</h2>
            <p>
              South Indian breakfast, reimagined with drones, data, and a whole
              lot of ghee.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimateOnScroll key={feature.title} delay={index * 120}>
                <article className="feature-card">
                  <div className={`feature-icon ${feature.iconClass}`}>
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </section>

      <section id="pricing" className="section" aria-labelledby="pricing-heading">
        <AnimateOnScroll>
          <div className="section-header">
            <h2 id="pricing-heading">Pick your dosa plan</h2>
            <p>
              Subscribe once, order anytime. Cancel when your dietitian finds
              out.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <AnimateOnScroll key={plan.name} delay={index * 150}>
              <article
                className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`}
              >
                <h3>{plan.name}</h3>
                <p className="plan-desc">{plan.description}</p>
                <p className="price">
                  {plan.price}
                  <span>{plan.period}</span>
                </p>
                <ul className="pricing-features">
                  {plan.features.map((item) => (
                    <li key={item}>
                      <Check size={18} strokeWidth={2.5} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`btn ${plan.featured ? "btn-primary" : "btn-secondary"}`}
                >
                  Choose {plan.name}
                </a>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <footer id="footer" className="footer">
        <AnimateOnScroll>
          <div className="footer-inner">
            <div className="footer-brand">
              <a href="#" className="logo" style={{ color: "white" }}>
                <span className="logo-icon" aria-hidden="true">
                  <Plane size={18} strokeWidth={2.5} />
                </span>
                AirDosa
              </a>
              <p>
                AI-powered instant dosa delivery. Made with love in
                Bengaluru, flown with pride.
              </p>
            </div>
            <div className="footer-links">
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </AnimateOnScroll>
        <p className="footer-bottom">
          <MapPin
            size={12}
            style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }}
            aria-hidden="true"
          />
          © {new Date().getFullYear()} AirDosa Technologies Pvt. Ltd. All
          rights reserved.
        </p>
      </footer>

      <a href="#pricing" className="floating-order" aria-label="Order now">
        <Zap size={18} aria-hidden="true" />
        Order Now
      </a>
    </div>
  );
}
