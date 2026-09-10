import React, { useState, useEffect } from 'react';
import { X, Printer, ShieldCheck, Copy } from 'lucide-react';
import { TRUST_INFO } from '../data/trustData';
import { TrustLogoSvg, TrustSealSvg } from './SvgAssets';

function numberToWords(num) {
  const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  if ((num = num.toString()).length > 9) return 'overflow';
  const n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return '';
  let str = '';
  str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
  str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
  str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
  str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
  str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Rupees Only' : 'Rupees Only';
  return str;
}

export default function ReceiptGeneratorModal({ isOpen, onClose, initialData }) {
  const defaultReceipt = {
    receiptNo: `RSCT-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`,
    date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    donorName: "Yash Vardhan",
    donorPan: "AACTR3220R",
    donorEmail: "donor@example.com",
    donorPhone: "+91 9820737415",
    donorAddress: "Mira Road East, Thane - 401107",
    amount: 5000,
    cause: "Medical Emergency Appeal & Child Surgeries",
    mode: "Online Transfer / Direct UPI (HDFC)"
  };

  const [receipt, setReceipt] = useState(initialData || defaultReceipt);
  const [copied, setCopied] = useState(false);

  // Sync initialData when passed
  useEffect(() => {
    if (initialData) {
      setReceipt(initialData);
    }
  }, [initialData]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyReceiptNumber = () => {
    navigator.clipboard.writeText(receipt.receiptNo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Modal Top Toolbar (always visible) */}
        <div className="no-print sticky top-0 z-30 bg-slate-900 text-white px-4 py-3 sm:px-6 sm:py-3.5 flex items-center justify-between border-b border-slate-800 shadow-md">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400">
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">80G Official Receipt Preview</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 sm:px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
              title="Print Receipt"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 sm:px-3.5 py-1.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 hover:text-white border border-rose-500/30 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
              title="Close Receipt (Esc)"
              aria-label="Close Receipt"
            >
              <X className="w-4 h-4" />
              <span>Cancel / Close</span>
            </button>
          </div>
        </div>

        {/* Scrollable Printable Area */}
        <div id="receipt-printable-area" className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#FAFAFC] text-slate-800 font-sans">
          
          {/* Certificate Inner Border Container */}
          <div className="border-4 border-double border-trust-900/40 rounded-2xl p-5 sm:p-8 bg-white relative shadow-sm">
            
            {/* Watermark Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <TrustLogoSvg className="w-80 h-80 sm:w-96 sm:h-96" />
            </div>

            {/* Header / Trust Letterhead */}
            <div className="text-center border-b-2 border-slate-200 pb-4 mb-5">
              <div className="flex items-center justify-center gap-2.5 mb-1">
                <TrustLogoSvg className="w-10 h-10 sm:w-12 sm:h-12" />
                <h1 className="font-display font-extrabold text-xl sm:text-3xl text-trust-950 tracking-tight">
                  RIDDHI SIDDHI CHARITABLE TRUST
                </h1>
              </div>

              <p className="text-xs text-slate-600 font-medium">
                {TRUST_INFO.address}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Email: {TRUST_INFO.email} • Helpline: {TRUST_INFO.phone1}
              </p>

              <div className="mt-2.5 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full text-[11px] font-bold">
                <span className="text-trust-800">Trust Reg No: <span className="font-mono text-crimson-600">{TRUST_INFO.regNo}</span></span>
                <span className="text-slate-300">•</span>
                <span className="text-trust-800">PAN: <span className="font-mono text-crimson-600">{TRUST_INFO.pan}</span></span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Section 80G Certified</span>
              </div>
            </div>

            {/* Receipt Title Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 bg-gradient-to-r from-trust-50 to-crimson-50/50 p-3 rounded-xl border border-slate-200 mb-5 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-semibold">Receipt No:</span>
                <span className="font-mono font-bold text-trust-900">{receipt.receiptNo}</span>
                <button onClick={copyReceiptNumber} className="no-print text-slate-400 hover:text-trust-600">
                  <Copy className="w-3.5 h-3.5" />
                </button>
                {copied && <span className="text-emerald-600 font-bold text-[10px]">Copied!</span>}
              </div>
              <div>
                <span className="text-slate-500 font-semibold">Date of Issue:</span>
                <span className="font-bold text-slate-800 ml-1 font-mono">{receipt.date}</span>
              </div>
            </div>

            {/* Donor & Donation Details Grid */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-500 text-[11px] uppercase tracking-wider block font-bold mb-1">
                    Received With Gratitude From
                  </span>
                  <span className="font-bold text-slate-900 text-sm sm:text-base block">{receipt.donorName}</span>
                  <span className="text-xs text-slate-600">{receipt.donorAddress}</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div>
                    <span className="text-slate-500 text-[11px] font-bold">Donor PAN: </span>
                    <span className="font-mono font-extrabold text-trust-900">{receipt.donorPan}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[11px] font-bold">Contact: </span>
                    <span className="text-slate-700">{receipt.donorPhone}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[11px] font-bold">Email: </span>
                    <span className="text-slate-700">{receipt.donorEmail}</span>
                  </div>
                </div>
              </div>

              {/* Amount Highlight Box */}
              <div className="p-3.5 bg-trust-50/80 border-2 border-trust-200 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-trust-700 uppercase tracking-wider block">
                      Sum of Rupees
                    </span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm italic block mt-0.5">
                      {numberToWords(receipt.amount)}
                    </span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs font-bold text-trust-700 uppercase tracking-wider block">
                      Donation Amount
                    </span>
                    <span className="font-display font-extrabold text-xl sm:text-2xl text-crimson-600 font-mono">
                      ₹{receipt.amount.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cause & Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 font-bold block mb-0.5">Purpose / Cause Allocated:</span>
                  <span className="font-semibold text-slate-800">{receipt.cause}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-bold block mb-0.5">Transaction Mode:</span>
                  <span className="font-semibold text-slate-800">{receipt.mode}</span>
                </div>
              </div>

              {/* Statutory Tax Exemption Note */}
              <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-[11px] text-amber-900 leading-relaxed">
                <span className="font-bold">Tax Exemption Notice: </span>
                Donations made to Riddhi Siddhi Charitable Trust are entitled to deduction under <span className="font-bold">Section 80G of the Income Tax Act 1961</span>. Please retain this receipt for claiming 50% deduction while filing your Income Tax Return.
              </div>

              {/* Signature & Seal Footer */}
              <div className="pt-6 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 border-t border-slate-200">
                <div className="text-left space-y-1">
                  <span className="text-[11px] text-slate-400 block">Verification Code:</span>
                  <span className="font-mono text-[11px] text-slate-600 font-bold tracking-widest uppercase block bg-slate-100 px-2.5 py-1 rounded">
                    RSCT-VERIFIED-80G
                  </span>
                </div>

                {/* Golden Official Trust Seal SVG */}
                <div className="flex-shrink-0">
                  <TrustSealSvg className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-md" />
                </div>

                <div className="text-center sm:text-right">
                  <div className="w-32 h-10 mx-auto sm:ml-auto border-b-2 border-slate-400 flex items-center justify-center text-trust-800 font-hand font-bold text-lg">
                    G. Solanki
                  </div>
                  <span className="block font-bold text-xs text-slate-800 mt-1">Authorized Signatory</span>
                  <span className="block text-[10px] text-slate-500">Riddhi Siddhi Charitable Trust</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Sticky Modal Bottom Toolbar (no-print) */}
        <div className="no-print bg-slate-100 px-4 py-3 sm:px-6 flex items-center justify-between border-t border-slate-200">
          <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
            Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">Esc</kbd> or click outside to close
          </span>
          <div className="flex items-center gap-2.5 ml-auto">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-white hover:bg-slate-200 text-slate-700 border border-slate-300 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            >
              <X className="w-4 h-4 text-rose-600" />
              <span>Cancel / Close</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Download</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
