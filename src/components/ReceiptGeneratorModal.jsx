import React, { useState } from 'react';
import { X, Printer, Download, CheckCircle2, ShieldCheck, Heart, Copy, FileText } from 'lucide-react';
import { TRUST_INFO } from '../data/trustData';
import { TrustLogoSvg, TrustSealSvg, Tax80GBadgeSvg } from './SvgAssets';

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Toolbar (hidden on print) */}
        <div className="no-print bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> 80G Official Donation Receipt Preview
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-md"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save as PDF
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Area */}
        <div id="receipt-printable-area" className="p-6 sm:p-10 bg-[#FAFAFC] text-slate-800 font-sans">
          
          {/* Certificate Inner Border Container */}
          <div className="border-4 border-double border-trust-900/40 rounded-2xl p-6 sm:p-8 bg-white relative shadow-sm">
            
            {/* Watermark Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <TrustLogoSvg className="w-96 h-96" />
            </div>

            {/* Header / Trust Letterhead */}
            <div className="text-center border-b-2 border-slate-200 pb-5 mb-6">
              <div className="flex items-center justify-center gap-3 mb-1.5">
                <TrustLogoSvg className="w-12 h-12" />
                <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-trust-950 tracking-tight">
                  RIDDHI SIDDHI CHARITABLE TRUST
                </h1>
              </div>

              <p className="text-xs text-slate-600 font-medium">
                {TRUST_INFO.address}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Email: {TRUST_INFO.email} • Helpline: {TRUST_INFO.phone1}
              </p>

              <div className="mt-3 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full text-[11px] font-bold">
                <span className="text-trust-800">Trust Reg No: <span className="font-mono text-crimson-600">{TRUST_INFO.regNo}</span></span>
                <span className="text-slate-300">•</span>
                <span className="text-trust-800">PAN: <span className="font-mono text-crimson-600">{TRUST_INFO.pan}</span></span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Section 80G Certified</span>
              </div>
            </div>

            {/* Receipt Title Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 bg-gradient-to-r from-trust-50 to-crimson-50/50 p-3.5 rounded-xl border border-slate-200 mb-6 text-xs">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-500 text-[11px] uppercase tracking-wider block font-bold mb-1">
                    Received With Gratitude From
                  </span>
                  <span className="font-bold text-slate-900 text-base block">{receipt.donorName}</span>
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
              <div className="p-4 bg-trust-50/80 border-2 border-trust-200 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-trust-700 uppercase tracking-wider block">
                      Sum of Rupees
                    </span>
                    <span className="font-bold text-slate-900 text-sm italic block mt-0.5">
                      {numberToWords(receipt.amount)}
                    </span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs font-bold text-trust-700 uppercase tracking-wider block">
                      Donation Amount
                    </span>
                    <span className="font-display font-extrabold text-2xl text-crimson-600 font-mono">
                      ₹{receipt.amount.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cause & Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
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
              <div className="pt-8 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 border-t border-slate-200">
                <div className="text-left space-y-2">
                  <span className="text-[11px] text-slate-400 block">Verification Code:</span>
                  <span className="font-mono text-[11px] text-slate-600 font-bold tracking-widest uppercase block bg-slate-100 px-2.5 py-1 rounded">
                    RSCT-{Math.random().toString(36).substring(2, 10).toUpperCase()}
                  </span>
                </div>

                {/* Golden Official Trust Seal SVG */}
                <div className="flex-shrink-0">
                  <TrustSealSvg className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-md" />
                </div>

                <div className="text-center sm:text-right">
                  <div className="w-32 h-12 mx-auto sm:ml-auto border-b-2 border-slate-400 flex items-center justify-center text-trust-800 font-hand font-bold text-xl">
                    G. Solanki
                  </div>
                  <span className="block font-bold text-xs text-slate-800 mt-1">Authorized Signatory</span>
                  <span className="block text-[10px] text-slate-500">Riddhi Siddhi Charitable Trust</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
