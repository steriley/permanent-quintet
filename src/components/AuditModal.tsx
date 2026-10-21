import React from 'react';
import { Venue } from '../types';

interface AuditModalProps {
  venue: Venue | null;
  onClose: () => void;
  onOpenRoute: (venue: Venue) => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ venue, onClose, onOpenRoute }) => {
  if (!venue) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#F7F0DF] w-full max-w-2xl rounded-2xl border-2 border-[#D9CFB8] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#0e1b44] text-white px-6 py-4 flex items-center justify-between border-b border-[#8a5100]/40">
          <div className="flex items-center gap-3">
            <span className="font-['Playfair_Display'] text-sm font-bold bg-[#ffdcbd] text-[#2c1600] px-2 py-0.5 rounded">
              {venue.number}
            </span>
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold text-[#ffdcbd] tracking-widest block">
                OFFICIAL RECORD OF VERDICT & CERTIFIED AUDIT
              </span>
              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#fff8f3]">
                {venue.name}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#25315b] hover:bg-[#314380] text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex flex-col gap-5">
          {/* Top Summary Banner with Wax Stamp */}
          <div className="relative bg-[#F3ECDB] p-4 rounded-xl border border-[#D9CFB8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1 pr-14 sm:pr-0">
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase tracking-wider font-bold text-[#8a5100] block mb-1">
                {venue.category} · {venue.street} ({venue.area})
              </span>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${
                  venue.tier === 'approved' ? 'bg-[#1E7A4E] text-white' : venue.tier === 'sanction' ? 'bg-[#B92B27] text-white' : 'bg-[#C27803] text-white'
                }`}>
                  {venue.tierLabel}
                </span>
                <span className="text-xs font-bold text-[#001854] bg-[#F7F0DF] px-2 py-0.5 rounded border border-[#D9CFB8]">
                  Price: {venue.price}
                </span>
                <span className="text-xs font-bold text-[#001854] bg-[#F7F0DF] px-2 py-0.5 rounded border border-[#D9CFB8]">
                  {venue.inspectionsCount} Inspections Filed
                </span>
              </div>
            </div>

            {/* Wax Seal Stamp */}
            <div className="absolute top-4 right-4 sm:static shrink-0">
              <div className="relative">
                <img
                  alt="Chairs Authenticated Stamp"
                  className="w-16 h-16 rounded-full shadow-md ring-2 ring-[#ffdcbd] bg-[#F7F0DF] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqgP2VMinATbGPTBgGdz_4wqnqb1G3I77nmOy5s6K0rO9FkVS4GTeB3vtY5upA9ScB29X6FIDH_yQaQJw4-_abrDdR5xP-PNE42Xbu7EVgjdIdlvnYUMNZUJ5nrKP4oSH55MwZb1qfyI3v3tUAO-MFao_Yo25bJQrgtsdsKtQUZME6pK-hvSs7G_GQdsmnAvvhVT4NIGqtPDfQgsrW6Cm796GYdH8hV8JLRvlOYPJ1zMw1Y9VMYon8zF4pbKqoaaTwHQ"
                />
              </div>
            </div>
          </div>

          {/* Core Mandate Order */}
          <div className="bg-[#fbf2eb] p-3.5 rounded-xl border border-[#D9CFB8]">
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold text-[#8a5100] tracking-wider block mb-1">
              EAT LIKE US:
            </span>
            <p className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#001854]">
              {venue.coreMandateOrder}
            </p>
          </div>

          {/* Scores Breakdown Meters */}
          <div className="bg-[#F3ECDB] p-4 rounded-xl border border-[#D9CFB8] flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-[#D9CFB8] pb-2">
              <span className="font-['Playfair_Display'] text-base font-bold text-[#001854]">
                Judicial Criteria Evaluation
              </span>
              <span className="font-['Playfair_Display'] text-lg font-bold text-[#001854]">
                Overall: {venue.scores.overallScore} / 10
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-['Plus_Jakarta_Sans']">
              <div>
                <div className="flex justify-between font-bold text-[#1e1b17] mb-1">
                  <span>Crumb / Tensile Integrity:</span>
                  <span className="text-[#001854]">{venue.scores.crumbStructuralIntegrity} / 10</span>
                </div>
                <div className="w-full h-2 bg-[#D9CFB8] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1E7A4E] rounded-full"
                    style={{ width: `${(venue.scores.crumbStructuralIntegrity / 10) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-[#1e1b17] mb-1">
                  <span>Speed of Dispatch:</span>
                  <span className="text-[#001854]">{venue.scores.speedOfDispatch} / 10</span>
                </div>
                <div className="w-full h-2 bg-[#D9CFB8] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#8a5100] rounded-full"
                    style={{ width: `${(venue.scores.speedOfDispatch / 10) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-[#1e1b17] mb-1">
                  <span>Value Ratio:</span>
                  <span className="text-[#001854]">{venue.scores.valueRatio} / 10</span>
                </div>
                <div className="w-full h-2 bg-[#D9CFB8] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#001854] rounded-full"
                    style={{ width: `${(venue.scores.valueRatio / 10) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-[#1e1b17] mb-1">
                  <span>Sitting Dignity:</span>
                  <span className="text-[#001854]">{venue.scores.sittingDignity} / 10</span>
                </div>
                <div className="w-full h-2 bg-[#D9CFB8] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#25315b] rounded-full"
                    style={{ width: `${(venue.scores.sittingDignity / 10) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Judicial Citation & Observations */}
          <div className="bg-[#fbf2eb] p-4 rounded-xl border border-[#D9CFB8]">
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold text-[#8a5100] tracking-wider block mb-2">
              AUDIT TRANSCRIPT OBSERVATIONS:
            </span>
            <ul className="list-disc list-inside text-xs text-[#1e1b17] space-y-1.5 leading-relaxed font-['Plus_Jakarta_Sans']">
              {venue.notes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t border-[#D9CFB8]/60">
              <blockquote className="font-['Playfair_Display'] text-xs italic text-[#001854]">
                “{venue.verdictQuote}”
              </blockquote>
              <span className="block text-right font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase text-[#8a5100] mt-1">
                — Entered into Record by {venue.inspectorCite} ({venue.lastInspectionDate})
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#F3ECDB] px-6 py-3.5 border-t border-[#D9CFB8] flex items-center justify-between">
          <span className="text-xs text-[#757681] font-['Plus_Jakarta_Sans']">
            {venue.walkMinutes} min walk from Crown Square Assizes
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenRoute(venue);
              }}
              className="px-4 py-2 rounded-lg bg-[#ffdcbd] text-[#2c1600] text-xs font-['Plus_Jakarta_Sans'] font-bold border border-[#8a5100]/30 hover:bg-[#ffb86d] cursor-pointer"
            >
              Route Walk
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#001854] text-white text-xs font-['Plus_Jakarta_Sans'] font-bold hover:bg-[#1b2f6b] cursor-pointer"
            >
              Close Docket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
