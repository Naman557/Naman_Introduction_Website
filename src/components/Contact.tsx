import React, { useState } from 'react';
import { Mail, Linkedin, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
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
    {
      icon: <Phone size={22} style={{ color: '#e100ff' }} />,
      label: 'Phone',
      value: '+91 8310766557',
      href: 'tel:+918310766557',
    },
  ];

  return (
    <section id="contact" className="section" style={styles.section}>
      <div className="bg-blob bg-blob-cyan" style={{ bottom: '-10%', left: '10%' }} />

      <div className="container">
        <div style={styles.header}>
          <div style={styles.titleWrapper}>
            <MessageSquare size={24} style={{ color: '#00f2fe' }} />
            <h2 style={styles.title}>Let's Connect</h2>
          </div>
          <div style={styles.divider} />
        </div>

        <div style={styles.grid}>
          {/* Left Column: Direct Contact Info */}
          <div style={styles.infoCol}>
            <h3 style={styles.infoTitle}>Get in Touch</h3>
            <p style={styles.infoDesc}>
              Whether you are looking to hire a senior full-stack developer, want to discuss cloud-native architectures, or just want to say hi, feel free to drop a message or reach out directly!
            </p>

            <div style={styles.methodsList}>
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  target={method.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="glass-card contact-method-link"
                  style={styles.methodCard}
                >
                  <div style={styles.methodIcon}>{method.icon}</div>
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={styles.methodLabel}>{method.label}</h4>
                    <p style={styles.methodValue}>{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card" style={styles.formCard}>
            {isSuccess ? (
              <div style={styles.successContainer}>
                <CheckCircle2 size={60} style={{ color: '#00f2fe', marginBottom: '1.5rem' }} />
                <h3 style={styles.successTitle}>Message Sent!</h3>
                <p style={styles.successDesc}>
                  Thank you for reaching out, Naman. Your message has been received, and I'll get back to you as soon as possible.
                </p>
                <button onClick={() => setIsSuccess(false)} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={styles.form}>
                <h3 style={styles.formTitle}>Send a Message</h3>
                
                <div style={styles.inputGroup}>
                  <label htmlFor="name" style={styles.label}>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    style={styles.input}
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label htmlFor="email" style={styles.label}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    style={styles.input}
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label htmlFor="message" style={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Hi Naman, let's collaborate on..."
                    style={{ ...styles.input, ...styles.textarea }}
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
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>
            © {new Date().getFullYear()} Naman Srivastava. Built with React, Vite & TypeScript.
          </p>
        </footer>
      </div>

      <style>{`
        .contact-method-link {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .contact-method-link:hover {
          transform: translateX(8px);
          border-color: rgba(0, 242, 254, 0.3);
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    paddingBottom: '40px',
  },
  header: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    marginBottom: '3.5rem',
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.75rem',
  },
  title: {
    fontSize: '2.2rem',
    fontWeight: '800',
    letterSpacing: '-0.02em',
  },
  divider: {
    width: '60px',
    height: '4px',
    background: 'linear-gradient(90deg, #00f2fe, #7f00ff)',
    borderRadius: '2px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '3rem',
    alignItems: 'start',
    marginBottom: '5rem',
    '@media (max-width: 968px)': {
      gridTemplateColumns: '1fr',
    },
  },
  infoCol: {
    textAlign: 'left' as const,
  },
  infoTitle: {
    fontSize: '1.6rem',
    color: '#ffffff',
    marginBottom: '1rem',
  },
  infoDesc: {
    color: '#9ca3af',
    fontSize: '1.05rem',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
  },
  methodsList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.25rem',
  },
  methodCard: {
    // Shared styled tags via class
  },
  methodIcon: {
    padding: '10px',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  methodLabel: {
    fontSize: '0.85rem',
    color: '#9ca3af',
    fontWeight: '500',
    marginBottom: '2px',
  },
  methodValue: {
    fontSize: '1.05rem',
    color: '#ffffff',
    fontWeight: '600',
    wordBreak: 'break-all' as const,
  },
  formCard: {
    padding: '2.5rem',
    textAlign: 'left' as const,
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.25rem',
  },
  formTitle: {
    fontSize: '1.6rem',
    color: '#ffffff',
    marginBottom: '0.5rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.88rem',
    color: '#e5e7eb',
    fontWeight: '600',
  },
  input: {
    background: 'rgba(7, 9, 19, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#ffffff',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
  },
  textarea: {
    resize: 'vertical' as const,
  },
  successContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
    padding: '2rem 0',
  },
  successTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '0.75rem',
  },
  successDesc: {
    color: '#9ca3af',
    maxWidth: '360px',
    lineHeight: '1.6',
  },
  footer: {
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    paddingTop: '2.5rem',
    textAlign: 'center' as const,
  },
  footerText: {
    color: '#6b7280',
    fontSize: '0.88rem',
  },
};

export default Contact;
