// pages/contact.tsx or app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center">
        We'd love to hear from you. Fill out the form below or reach out directly via email or phone.
      </p>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded w-full"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="border p-3 rounded w-full"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="border p-3 rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition duration-300"
        >
          Send Message
        </button>
      </form>

      <div className="text-center text-gray-600 pt-8">
        Or email us at: <a href="mailto:support@yourstore.com" className="text-blue-600 hover:underline">support@yourstore.com</a>
        <br />
        Phone: +213 555 123 456
      </div>
    </div>
  );
}
