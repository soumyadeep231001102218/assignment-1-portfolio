import { useState } from 'react';
import './Contact.css';

const CONTACT_DETAILS = [
  { icon: '📧', label: 'Email', value: 'soumyadeepp857@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 XXXXX XXXXX' },
  { icon: '📍', label: 'Location', value: 'West Bengal, India' },
  { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/soumyadeep-paul' },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let&apos;s Work Together</h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hi? Drop me a message!
        </p>

        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__info-text">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>

            <div className="contact__details">
              {CONTACT_DETAILS.map((detail) => (
                <div className="contact__detail-item" key={detail.label}>
                  <div className="contact__detail-icon">{detail.icon}</div>
                  <div className="contact__detail-text">
                    <div className="contact__detail-label">{detail.label}</div>
                    <div className="contact__detail-value">{detail.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__socials">
              <a className="contact__social-link" href="#" aria-label="GitHub">🐙</a>
              <a className="contact__social-link" href="#" aria-label="LinkedIn">💼</a>
              <a className="contact__social-link" href="#" aria-label="Twitter">🐦</a>
              <a className="contact__social-link" href="#" aria-label="Instagram">📸</a>
            </div>
          </div>

          <div className="contact__form-card">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label className="contact__form-label" htmlFor="name">Full Name</label>
                  <input
                    className="contact__form-input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label className="contact__form-label" htmlFor="email">Email</label>
                  <input
                    className="contact__form-input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="subject">Subject</label>
                <input
                  className="contact__form-input"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="message">Message</label>
                <textarea
                  className="contact__form-textarea"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button className="contact__form-submit" type="submit">
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
