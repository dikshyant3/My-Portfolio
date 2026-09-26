import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

// OpenStreetMap embed — no API key required. bbox frames the Tennessee Tech
// campus; marker pins the Ashraf Islam Engineering Building (36.1755, -85.5081).
const MAP_EMBED_URL =
  'https://www.openstreetmap.org/export/embed.html' +
  '?bbox=-85.5141%2C36.1730%2C-85.5021%2C36.1780' +
  '&layer=mapnik' +
  '&marker=36.1755%2C-85.5081';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };
  
  return (
    <section className="py-16 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="contact-heading" className="text-3xl md:text-4xl mb-4 text-[var(--color-text-primary)] text-center">
          Interested to work together?
        </h2>
        <p className="text-xl text-[var(--color-text-secondary)] mb-12 text-center">
          Let's talk
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[var(--color-bg-light)] rounded-lg p-6 shadow-md">
              <h3 className="text-xl text-[var(--color-text-primary)] mb-6">Get in touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent-blue)] text-white flex items-center justify-center flex-shrink-0">
                    <Mail size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm text-[var(--color-text-muted)] mb-1">Email</h4>
                    <a
                      href="mailto:dikshyantdhungana@gmail.com"
                      className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-blue)] transition-colors"
                    >
                      dikshyantdhungana@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent-blue)] text-white flex items-center justify-center flex-shrink-0">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm text-[var(--color-text-muted)] mb-1">Phone</h4>
                    <a
                      href="tel:+1234567890"
                      className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-blue)] transition-colors"
                    >
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent-blue)] text-white flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm text-[var(--color-text-muted)] mb-1">Office</h4>
                    <address className="text-[var(--color-text-primary)] not-italic">
                      AIEB (Room 231)<br />
                      1021 Stadium Drive<br />
                      Cookeville, TN 38501
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-[var(--color-bg-light)] rounded-lg overflow-hidden shadow-md h-64">
              <iframe
                title="Map showing the Ashraf Islam Engineering Building at Tennessee Tech, Cookeville, Tennessee"
                src={MAP_EMBED_URL}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-[var(--color-bg-light)] rounded-lg p-6 shadow-md"
              aria-label="Contact form"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-[var(--color-text-primary)] mb-2">
                    Your Name <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:border-transparent transition-colors"
                    placeholder="John Doe"
                    aria-required="true"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-[var(--color-text-primary)] mb-2">
                    Email <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                    aria-required="true"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-[var(--color-text-primary)] mb-2">
                    Message <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:border-transparent transition-colors resize-none"
                    placeholder="Your message here..."
                    aria-required="true"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--color-accent-blue)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-accent-blue-dark)] transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:ring-offset-2"
                  aria-label={isSubmitting ? 'Sending message' : 'Send message'}
                >
                  <Send size={20} aria-hidden="true" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitMessage && (
                  <div
                    className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm"
                    role="status"
                    aria-live="polite"
                  >
                    {submitMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};