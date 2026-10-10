import React, { useState } from 'react';
import { Mail, Linkedin, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Something went wrong sending your message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: <Mail size={22} style={{ color: '#00f2fe' }} />,
      label: 'Email',
      value: 'namansrivastava2312@gmail.com',
      href: 'mailto:namansrivastava2312@gmail.com',
    },
    {
      icon: <Linkedin size={22} style={{ color: '#a855f7' }} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/naman-srivastava-9b8a84184',
      href: 'https://linkedin.com/in/naman-srivastava-9b8a84184',
    },
    // {
    //   icon: <Phone size={22} style={{ color: '#e100ff' }} />,
    //   label: 'Phone',
    //   value: '+91 8310766557',
    //   href: 'tel:+918310766557',
    // },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="bg-blob bg-blob-cyan" style={{ bottom: '-10%', left: '10%' }} />

      <div className="container">
        <div className="contact-header">
          <div className="contact-titleWrapper">
            <MessageSquare size={24} style={{ color: '#00f2fe' }} />
            <h2 className="contact-title">Let's Connect</h2>
          </div>
          <div className="contact-divider" />
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-infoCol">
            <h3 className="contact-infoTitle">Get in Touch</h3>
            <p className="contact-infoDesc">
              Whether you are looking to hire a senior full-stack developer, want to discuss cloud-native architectures, or just want to say hi, feel free to drop a message or reach out directly!
            </p>

            <div className="contact-methodsList">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  target={method.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="glass-card contact-method-link"
                >
                  <div className="contact-methodIcon">{method.icon}</div>
                  <div style={{ textAlign: 'left' }}>
                    <h4 className="contact-methodLabel">{method.label}</h4>
                    <p className="contact-methodValue">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card contact-formCard">
            {isSuccess ? (
              <div className="contact-successContainer">
                <CheckCircle2 size={60} style={{ color: '#00f2fe', marginBottom: '1.5rem' }} />
                <h3 className="contact-successTitle">Message Sent!</h3>
                <p className="contact-successDesc">
                  Thank you for reaching out, Naman. Your message has been received, and I'll get back to you as soon as possible.
                </p>
                <button onClick={() => setIsSuccess(false)} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="contact-formTitle">Send a Message</h3>

                <div className="contact-inputGroup">
                  <label htmlFor="name" className="contact-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="contact-input"
                  />
                </div>

                <div className="contact-inputGroup">
                  <label htmlFor="email" className="contact-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="contact-input"
                  />
                </div>

                <div className="contact-inputGroup">
                  <label htmlFor="message" className="contact-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Hi Naman, let's collaborate on..."
                    className="contact-input contact-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  <Send size={16} />
                </button>
                {error && (
                  <p style={{ color: '#ff6b6b', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="contact-footer">
          <p className="contact-footerText">
            © {new Date().getFullYear()} Naman Srivastava. Built with React, Vite & TypeScript.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
