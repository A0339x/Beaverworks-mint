import React, { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoSubject = encodeURIComponent(formData.subject || 'Contact from Website');
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:info@beaverworksmint.ca?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-canadian-red mb-3 block">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Contact Us</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Whether you're a collector, a veteran, or a fellow patriot, we want to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-1">Email</h3>
                  <a href="mailto:info@beaverworksmint.ca" className="text-slate-900 hover:text-canadian-red transition-colors">
                    info@beaverworksmint.ca
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-1">Location</h3>
                  <p className="text-slate-900">Western Canada</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-1">Response Time</h3>
                  <p className="text-slate-900">Within 48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-3">Email Client Opened</h3>
                <p className="text-slate-600 mb-6">
                  Please send the email from your mail application to complete your message.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-canadian-red hover:underline text-sm uppercase tracking-widest"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">
                      First Name <span className="text-canadian-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-canadian-red transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">
                      Last Name <span className="text-canadian-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-canadian-red transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">
                    Email Address <span className="text-canadian-red">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-canadian-red transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-canadian-red transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Custom Coin Request">Custom Coin Request</option>
                    <option value="Wholesale / Partnership">Wholesale / Partnership</option>
                    <option value="Press / Media">Press / Media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">
                    Message <span className="text-canadian-red">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-canadian-red transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-4 text-sm uppercase tracking-widest hover:bg-canadian-red transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
