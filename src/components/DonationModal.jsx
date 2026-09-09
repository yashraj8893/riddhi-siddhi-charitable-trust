import React, { useState } from 'react';
import { 
  X, Heart, Check, QrCode, ShieldCheck, Sparkles, 
  ArrowRight, Copy, CheckCircle2, FileText, User, Mail, 
  Phone, CreditCard, Building2, Smartphone
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRUST_INFO, BANK_ACCOUNTS } from '../data/trustData';
import { TrustLogoSvg, Tax80GBadgeSvg, SafeDonationShieldSvg } from './SvgAssets';

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000, 25000];

const CAUSES_OPTIONS = [
  { id: "general", label: "Where It's Needed Most (General Fund)" },
  { id: "medical", label: "Medical Emergency Appeal & Child Surgeries" },
  { id: "shelter", label: "Shelter Home for Orphaned Kids (Airoli)" },
  { id: "education", label: "Education & School Kits for Children" },
  { id: "meals", label: "Meals for All (Hunger Alleviation & Rations)" },
  { id: "old-age", label: "Old Age Home Senior Healthcare & Care" },
  { id: "women", label: "Women Skill Training & Livelihood" },
  { id: "animal", label: "Animal Welfare & Daily Stray Feeding" },
  { id: "disaster", label: "Disaster Emergency & Flood Relief" }
];

export default function DonationModal({ isOpen, onClose, initialCause, onOpenReceiptWithData }) {
  const [step, setStep] = useState(1); // 1: Amount & Cause, 2: Donor Info, 3: Payment / UPI QR, 4: Success
  const [amount, setAmount] = useState(2500);
  const [customAmount, setCustomAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedCause, setSelectedCause] = useState(initialCause || "general");
  const [copiedBank, setCopiedBank] = useState(false);

  // Donor form
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorPan, setDonorPan] = useState('');
  const [donorAddress, setDonorAddress] = useState('');
  const [wants80G, setWants80G] = useState(true);

  if (!isOpen) return null;

  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : amount;
  const estimated80GSavings = Math.round((currentAmount * 0.5) * 0.30); // 50% deduction at 30% slab

  const handleAmountClick = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleNextToInfo = () => {
    if (currentAmount < 100) {
      alert("Minimum donation amount is ₹100");
      return;
    }
    setStep(2);
  };

  const handleNextToPayment = (e) => {
    e.preventDefault();
    if (!donorName || !donorPhone) {
      alert("Please enter your Name and Mobile Number");
      return;
    }
    setStep(3);
  };

  const handleConfirmPayment = () => {
    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }

    setStep(4);
  };

  const handleGenerateReceipt = () => {
    const receiptData = {
      receiptNo: `RSCT-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      donorName: donorName || "Kind Supporter",
      donorPan: donorPan.toUpperCase() || "PAN NOT PROVIDED",
      donorEmail: donorEmail || "support@riddhisiddhicharitabletrust.org",
      donorPhone: donorPhone || "+91 9820737415",
      donorAddress: donorAddress || "Mumbai, India",
      amount: currentAmount,
      cause: CAUSES_OPTIONS.find(c => c.id === selectedCause)?.label || "General Charity Fund",
      mode: "Online / Direct UPI",
      taxExemption: "50% Exemption under Section 80G of Income Tax Act 1961"
    };

    onClose();
    if (onOpenReceiptWithData) {
      onOpenReceiptWithData(receiptData);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const upiQrString = `upi://pay?pa=riddhisiddhict@hdfcbank&pn=Riddhi%20Siddhi%20Charitable%20Trust&am=${currentAmount}&cu=INR&tn=Donation%2080G`;
  const upiQrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiQrString)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="bg-trust-900 text-white p-5 sm:p-6 relative border-b border-trust-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> 80G Tax-Exempt Contribution
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            Make a Life-Changing Donation
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
            PAN: <span className="font-mono font-bold text-amber-300">{TRUST_INFO.pan}</span> • Reg No: <span className="font-mono font-bold text-emerald-300">{TRUST_INFO.regNo}</span>
          </p>

          {/* Stepper indicator */}
          <div className="flex items-center gap-2 mt-4 text-xs font-semibold">
            <span className={`px-2.5 py-1 rounded-full ${step >= 1 ? 'bg-amber-400 text-trust-950 font-bold' : 'bg-white/20 text-white/60'}`}>
              1. Amount
            </span>
            <span className="text-white/40">→</span>
            <span className={`px-2.5 py-1 rounded-full ${step >= 2 ? 'bg-amber-400 text-trust-950 font-bold' : 'bg-white/20 text-white/60'}`}>
              2. Donor Info
            </span>
            <span className="text-white/40">→</span>
            <span className={`px-2.5 py-1 rounded-full ${step >= 3 ? 'bg-amber-400 text-trust-950 font-bold' : 'bg-white/20 text-white/60'}`}>
              3. Pay & QR
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 max-h-[75vh] overflow-y-auto">

          {/* STEP 1: Amount & Cause Selection */}
          {step === 1 && (
            <div className="space-y-6">
              
              {/* Frequency Toggle */}
              <div className="flex bg-slate-100 p-1 rounded-2xl max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={() => setIsMonthly(false)}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                    !isMonthly ? 'bg-white text-trust-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setIsMonthly(true)}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-1 ${
                    isMonthly ? 'bg-crimson-500 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Monthly Angel
                </button>
              </div>

              {/* Preset Amounts Grid */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Select Donation Amount (INR)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                  {PRESET_AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleAmountClick(amt)}
                      className={`py-3 px-2 rounded-2xl font-bold text-sm border-2 transition-all text-center ${
                        amount === amt && !customAmount
                          ? 'border-crimson-500 bg-crimson-50/70 text-crimson-700 shadow-sm scale-105'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount Input */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Or Enter Custom Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-base">₹</span>
                  <input
                    type="number"
                    min="100"
                    placeholder="Enter amount (e.g. 1500)"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setAmount(0); }}
                    className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-crimson-500 transition-all text-base"
                  />
                </div>
              </div>

              {/* Cause Allocation Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Direct My Contribution To
                </label>
                <select
                  value={selectedCause}
                  onChange={(e) => setSelectedCause(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl font-semibold text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-trust-500"
                >
                  {CAUSES_OPTIONS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 80G Tax Benefit Live Callout */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 text-amber-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  %
                </div>
                <div className="text-xs text-amber-900">
                  <span className="font-bold">Estimated Section 80G Tax Benefit: </span>
                  With a donation of <span className="font-bold">₹{currentAmount.toLocaleString('en-IN')}</span>, you can save up to{' '}
                  <span className="font-extrabold text-crimson-700 font-mono">₹{estimated80GSavings.toLocaleString('en-IN')}</span> on your taxable income.
                </div>
              </div>

              <button
                type="button"
                onClick={handleNextToInfo}
                className="w-full py-4 bg-gradient-to-r from-crimson-500 to-rose-600 hover:from-crimson-600 hover:to-rose-700 text-white font-extrabold text-base rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed with ₹{currentAmount.toLocaleString('en-IN')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

            </div>
          )}

          {/* STEP 2: Donor Info (For 80G & Form 10BE) */}
          {step === 2 && (
            <form onSubmit={handleNextToPayment} className="space-y-4">
              <div className="bg-trust-50/70 border border-trust-200 rounded-2xl p-3.5 text-xs text-trust-900 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-trust-600 flex-shrink-0" />
                <span>
                  Please provide your accurate details so we can issue your official <span className="font-bold">80G Tax Certificate (Form 10BE)</span>.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Legal Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Yash Vardhan Solanki"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-trust-500 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9820737415"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-trust-500 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address (For Receipt)</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="e.g. donor@example.com"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-trust-500 font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    PAN Card Number <span className="text-crimson-600 font-bold">(Mandatory for 80G)</span>
                  </label>
                  <input
                    type="text"
                    maxLength="10"
                    placeholder="e.g. ABCDE1234F"
                    value={donorPan}
                    onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono font-bold uppercase focus:outline-none focus:ring-2 focus:ring-trust-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">City / State</label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai, Maharashtra"
                    value={donorAddress}
                    onChange={(e) => setDonorAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-trust-500 font-medium"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="80gCheck"
                  checked={wants80G}
                  onChange={(e) => setWants80G(e.target.checked)}
                  className="rounded text-crimson-500 focus:ring-crimson-400 w-4 h-4"
                />
                <label htmlFor="80gCheck" className="text-xs text-slate-600 cursor-pointer">
                  I wish to claim 50% Tax Exemption under Section 80G for this contribution.
                </label>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3 border border-slate-300 text-slate-700 font-bold text-sm rounded-2xl hover:bg-slate-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-trust-600 hover:bg-trust-700 text-white font-extrabold text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Continue to Payment (₹{currentAmount.toLocaleString('en-IN')})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Payment & Dynamic UPI QR */}
          {step === 3 && (
            <div className="space-y-6">
              
              {/* Order summary box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="text-slate-500">Donor:</span> <span className="font-bold text-slate-800">{donorName}</span>
                  <p className="text-[11px] text-slate-500">PAN: {donorPan || "Not provided"}</p>
                </div>
                <div className="text-right">
                  <span className="text-slate-500">Amount:</span>
                  <span className="block font-extrabold text-lg text-crimson-600 font-mono">
                    ₹{currentAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* UPI QR Code Generation */}
              <div className="bg-gradient-to-br from-trust-50 to-crimson-50/40 border border-trust-200/80 rounded-3xl p-5 text-center">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-trust-600 text-white text-xs font-bold rounded-full mb-3 shadow-sm">
                  <Smartphone className="w-3.5 h-3.5" /> Instant Scan with Any UPI App
                </span>
                
                <h4 className="font-display font-bold text-base text-slate-900 mb-1">
                  Google Pay • PhonePe • Paytm • BHIM • Cred
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Open your camera or UPI app and scan the generated QR code below
                </p>

                {/* QR Display */}
                <div className="inline-block p-4 bg-white rounded-2xl shadow-xl border border-slate-200">
                  <img
                    src={upiQrImageUrl}
                    alt="Riddhi Siddhi Trust Direct UPI QR"
                    className="w-48 h-48 sm:w-56 sm:h-56 mx-auto object-contain"
                  />
                  <span className="block font-mono font-bold text-[11px] text-slate-600 mt-2">
                    Amount: ₹{currentAmount.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs">
                  <span className="text-slate-600 font-medium">Direct UPI VPA:</span>
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
                    <span className="font-mono font-bold text-trust-700">riddhisiddhict@hdfcbank</span>
                    <button
                      onClick={() => copyToClipboard('riddhisiddhict@hdfcbank')}
                      className="text-slate-400 hover:text-trust-600 p-0.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {copiedBank && <span className="text-emerald-600 font-bold text-xs">Copied!</span>}
                </div>
              </div>

              {/* Bank Account Direct Transfer Option */}
              <div className="border border-slate-200 rounded-2xl p-4 bg-white space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-trust-600" /> Primary HDFC Bank Details
                  </span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">RTGS / NEFT / IMPS</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                  <div>A/C Name: <span className="font-bold text-slate-800">Riddhi Siddhi Charitable Trust</span></div>
                  <div>Bank: <span className="font-bold text-slate-800">HDFC Bank (Dahisar W)</span></div>
                  <div>A/C No: <span className="font-mono font-bold text-trust-800">50200004807417</span></div>
                  <div>IFSC: <span className="font-mono font-bold text-trust-800">HDFC0001230</span></div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-3 border border-slate-300 text-slate-700 font-bold text-sm rounded-2xl hover:bg-slate-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleConfirmPayment}
                  className="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>I Have Completed Payment</span>
                </button>
              </div>

            </div>
          )}

          {/* STEP 4: Success & Automated Receipt Generation */}
          {step === 4 && (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl text-slate-900">
                  Thank You, {donorName || "Kind Benefactor"}!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
                  Your generous contribution of <span className="font-bold text-crimson-600">₹{currentAmount.toLocaleString('en-IN')}</span> has been received with gratitude. You are bringing hope, meals, and dignity to lives across India.
                </p>
              </div>

              {/* Instant 80G Certificate Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 max-w-md mx-auto text-left text-xs text-amber-900 space-y-1.5">
                <div className="font-bold flex items-center gap-1 text-amber-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> 80G Tax Exemption Certificate Ready
                </div>
                <p>
                  As per Section 80G guidelines, your donation receipt with PAN (<span className="font-mono font-bold">{donorPan || "Recorded"}</span>) is prepared for tax filing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleGenerateReceipt}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-trust-600 to-trust-800 hover:from-trust-700 hover:to-trust-900 text-white font-bold text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>View & Download 80G Receipt</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-2xl transition-all"
                >
                  Close
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
