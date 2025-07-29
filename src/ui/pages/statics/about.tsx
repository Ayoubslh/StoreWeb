export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
      {/* Intro Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-brand-primary">About HP Techs</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          HP Techs is built for real users. We focus on reliability, clean tech, and support that doesn’t leave you hanging.
        </p>
      </section>

      <hr className="border-gray-300" />

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary mb-4">What Drives Us</h2>
          <p className="text-gray-700">
            We’re not just another reseller. We’re a team of devs and hardware lovers who’ve been burned by overpriced gear,
            shady sellers, and slow support. So we built HP Techs the way it should be — transparent, tested, and trusted.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-brand-primary mb-4">What We Offer</h2>
          <p className="text-gray-700">
            From smartphones and laptops to components and accessories, we only list what we believe in. 
            Each product is clearly described, priced fairly, and supported properly — no fluff.
          </p>
        </div>
      </section>

      <hr className="border-gray-300" />

      {/* Approach */}
      <section className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary mb-4">Our Philosophy</h2>
          <p className="text-gray-700">
            We believe in simple tech done right. Clear specs, fast delivery, honest service.
            If it’s not good enough for us, it doesn’t make the store.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-brand-primary mb-4">What You Can Expect</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Fast & secure shopping experience</li>
            <li>Accurate, honest product listings</li>
            <li>Quick support when you need it</li>
            <li>Community-driven features coming soon</li>
          </ul>
        </div>
      </section>

      <hr className="border-gray-300" />

      {/* Final Message */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-brand-primary">Still Growing</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          HP Techs is always evolving. Your feedback drives us forward.
          We’re not a giant — we’re a small, fast-moving team who cares. And we’re just getting started.
        </p>
      </section>
    </div>
  );
}
