
function Contact() {
  return (
    <main>
      <section className="page-banner">
        <h1>Contact Us</h1>
        <p>We would love to hear from you</p>
      </section>

      <section className="section">
        <h2>Get in Touch</h2>
        <p>Feel free to contact us for any information.</p>
      </section>

      <section className="section light">
        <h2>Contact Information</h2>
        <p>Email: info@techworld.com</p>
        <p>Phone: +880 1234-567890</p>
      </section>

      <section className="section">
        <h2>Send Us a Message</h2>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required />

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
