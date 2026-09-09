import React, { useState } from 'react';
import { X, Users, CheckCircle2, Heart, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRUST_INFO } from '../data/trustData';

export default function VolunteerModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [interest, setInterest] = useState('Child Education & Mentorship');
  const [availability, setAvailability] = useState('Weekends (Saturdays/Sundays)');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-trust-900 via-trust-700 to-crimson-700 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Users className="w-4 h-4" /> Join Our Volunteer Family
          </div>
          <h3 className="font-display font-bold text-2xl text-white">
            Become a Volunteer
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm mt-0.5">
            Join 1,500+ passionate changemakers serving across Maharashtra and India.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Yash Vardhan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-trust-500 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Phone *</label>
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
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. volunteer@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-trust-500 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">City / Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai / Thane / Navi Mumbai"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-trust-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Availability</label>
                  <select
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-trust-500 font-medium"
                  >
                    <option>Weekends (Saturdays/Sundays)</option>
                    <option>Weekday Evenings</option>
                    <option>Full-Time / Flexible</option>
                    <option>Emergency Disaster Deployment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Area of Interest</label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-trust-500 font-medium"
                >
                  <option>Child Education & Mentorship</option>
                  <option>Shelter Home Care & Activities (Airoli)</option>
                  <option>Food Distribution & Hunger Relief</option>
                  <option>Old Age Home Care & Companionship</option>
                  <option>Medical Health Camps & Blood Donation</option>
                  <option>Animal Welfare & Stray Feeding</option>
                  <option>Disaster Relief Field Team</option>
                  <option>Digital Media, Content & Tech</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-crimson-500 to-rose-600 hover:from-crimson-600 hover:to-rose-700 text-white font-extrabold text-sm rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Volunteer Application</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-xl text-slate-900">
                Welcome to the Family, {name}!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Our volunteer coordinator will get in touch with you via WhatsApp ({phone}) shortly with onboarding details.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 font-bold text-xs text-slate-800 rounded-xl"
              >
                Close
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
