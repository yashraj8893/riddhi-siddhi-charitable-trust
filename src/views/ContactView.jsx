import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, MessageCircle, 
  CheckCircle2, ShieldCheck, Heart 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRUST_INFO } from '../data/trustData';

export default function ContactView() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiries');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });
    } catch (e) {}
    setSubmitted(true);
  };

  return (
    <div className="space-y-8 sm:space-y-12 py-6 sm:py-8">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-200/80 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-crimson-50 border border-crimson-200 text-crimson-800 px-3 py-1 rounded-full text-xs font-bold">
              <Phone className="w-3.5 h-3.5 text-crimson-600" /> Dedicated Helpline &amp; Donor Support
            </div>

            <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Contact Riddhi Siddhi Charitable Trust
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              Have questions about donating, volunteering, CSR collaborations, or Section 80G tax certificates? Our dedicated team is here to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION & FORM CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Office Details & Direct Map */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md space-y-4">
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900">
                Head Office Info
              </h2>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-crimson-50 text-crimson-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Registered Office Address</span>
                    <a href={TRUST_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-trust-600 transition-colors leading-relaxed block mt-0.5">
                      {TRUST_INFO.address}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Phone Helplines</span>
                    <div className="space-x-2 font-mono">
                      <a href={`tel:${TRUST_INFO.tel1}`} className="hover:text-trust-600 transition-colors">{TRUST_INFO.phone1}</a>
                      <span>/</span>
                      <a href={`tel:${TRUST_INFO.tel2}`} className="hover:text-trust-600 transition-colors">{TRUST_INFO.phone2}</a>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Email Address</span>
                    <a href={`mailto:${TRUST_INFO.email}`} className="hover:text-trust-600 transition-colors">
                      {TRUST_INFO.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Office Working Hours</span>
                    <span>{TRUST_INFO.hours}</span>
                  </div>
                </li>
              </ul>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={TRUST_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3]">
              <iframe
                title="Riddhi Siddhi Charitable Trust Office Map"
                src={TRUST_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Contact & Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/80 shadow-md space-y-5">
              
              <div>
                <span className="text-xs font-bold text-crimson-600 uppercase tracking-wider block">Reach Out Online</span>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900">
                  Send Us a Direct Message
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                  Fill in your details below and our team will get back to you within 24 business hours.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Yash Vardhan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-trust-500 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. contact@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-trust-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9820737415"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-trust-500 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Subject / Inquiry Type</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-trust-500 font-medium"
                      >
                        <option>General Inquiries</option>
                        <option>Donation & 80G Certificate Help</option>
                        <option>CSR Partnership Proposal</option>
                        <option>Shelter Home Visit Appointment</option>
                        <option>Volunteer Opportunities</option>
                        <option>Medical Aid Request</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message *</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Write your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-trust-500 font-medium"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-trust-600 to-trust-800 hover:from-trust-700 hover:to-trust-900 text-white font-extrabold text-sm rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Riddhi Siddhi Trust</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto">
                    Thank you, {name}. Our administrative team has received your message and will respond via email or phone shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
