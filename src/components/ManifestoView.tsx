import React from 'react';
import { MANIFESTO_ARTICLES, TRIBUNAL_CHAIRS } from '../data/manifesto';

interface ManifestoViewProps {
  onOpenSuggestVenue: () => void;
  onOpenBriberyRegister: () => void;
}

export const ManifestoView: React.FC<ManifestoViewProps> = ({
  onOpenSuggestVenue,
  onOpenBriberyRegister,
}) => {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      {/* Manifesto Proclamation Banner */}
      <div className="bg-[#0e1b44] text-[#fff8f3] p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-[#8a5100]/40 text-center relative overflow-hidden">
        <div className="flex justify-center mb-3">
          <img
            alt="MCR Lunch Club Official Crest"
            className="w-16 h-16 rounded-full object-cover ring-4 ring-[#ffdcbd] shadow-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqgP2VMinATbGPTBgGdz_4wqnqb1G3I77nmOy5s6K0rO9FkVS4GTeB3vtY5upA9ScB29X6FIDH_yQaQJw4-_abrDdR5xP-PNE42Xbu7EVgjdIdlvnYUMNZUJ5nrKP4oSH55MwZb1qfyI3v3tUAO-MFao_Yo25bJQrgtsdsKtQUZME6pK-hvSs7G_GQdsmnAvvhVT4NIGqtPDfQgsrW6Cm796GYdH8hV8JLRvlOYPJ1zMw1Y9VMYon8zF4pbKqoaaTwHQ"
          />
        </div>
        <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-[#ffdcbd] font-bold">
          CONSTITUTIONAL ACCORD OF SPINNINGFIELDS CROWN SQUARE
        </span>
        <h1 className="font-['Playfair_Display'] text-2xl sm:text-4xl font-bold mt-1 text-[#fff8f3]">
          The Official Lunchtime Manifesto
        </h1>
        <p className="font-['Playfair_Display'] text-base sm:text-lg italic text-[#ffdcbd] mt-3 max-w-2xl mx-auto leading-relaxed">
          “We lunch with purpose. We judge with integrity. We return only where deserved.”
        </p>
        <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#dce1ff] mt-2 max-w-xl mx-auto">
          Proclaimed at the Assizes of Crown Square, Manchester. Decreed by the unanimous assent of the Four Standing Chairs.
        </p>
      </div>

      {/* The 7 Articles */}
      <div className="bg-[#F7F0DF] p-6 rounded-2xl border border-[#D9CFB8] shadow-sm flex flex-col gap-4">
        <div className="border-b border-[#D9CFB8] pb-3 flex items-center justify-between">
          <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#001854]">
            Articles of the High Tribunal
          </h2>
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#8a5100] font-bold uppercase tracking-wider">
            7 Codified Decrees
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MANIFESTO_ARTICLES.map((item) => (
            <div
              key={item.article}
              className="bg-[#F3ECDB] p-4 rounded-xl border border-[#D9CFB8] flex flex-col gap-1.5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-[#8a5100]">
                  {item.article}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E7A4E]"></span>
              </div>
              <h3 className="font-['Playfair_Display'] text-base font-bold text-[#001854]">
                {item.title}
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#1e1b17] leading-relaxed">
                {item.decree}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* The Four Standing Chairs */}
      <div className="bg-[#F7F0DF] p-6 rounded-2xl border border-[#D9CFB8] shadow-sm flex flex-col gap-4">
        <div className="border-b border-[#D9CFB8] pb-3">
          <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#001854]">
            The Four Standing Chairs of the Quorum
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#454650] mt-0.5">
            Permanent judicial panel holding jurisdiction over all midday assessments across the 2.5-mile perimeter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TRIBUNAL_CHAIRS.map((chair) => (
            <div
              key={chair.name}
              className="bg-[#fbf2eb] p-4 rounded-xl border border-[#D9CFB8] flex flex-col justify-between gap-3 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-[#8a5100] text-[18px]">gavel</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] uppercase font-bold text-[#8a5100] tracking-wider">
                    {chair.title}
                  </span>
                </div>
                <h4 className="font-['Playfair_Display'] text-base font-bold text-[#001854]">
                  {chair.name}
                </h4>
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#454650] mt-1">
                  <strong>Specialty:</strong> {chair.specialty}
                </p>
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#454650]">
                  <strong>Mandate Favorite:</strong> {chair.favorite}
                </p>
              </div>

              <blockquote className="font-['Playfair_Display'] text-xs italic text-[#001854] bg-[#F7F0DF] p-2.5 rounded border border-[#D9CFB8]/60">
                “{chair.quote}”
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Parliamentary Citizen Actions */}
      <div className="bg-[#0e1b44] text-white p-6 rounded-2xl border border-[#8a5100]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#fff8f3]">
            Petitions & Vigilance
          </h3>
          <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#ffdcbd] mt-1 max-w-lg">
            Have you discovered an independent establishment of uncommon crumb integrity? Or suspected a vendor of attempting to influence the Chairs?
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenBriberyRegister}
            className="px-3.5 py-2 rounded-lg bg-[#25315b] text-[#ffdcbd] text-xs font-bold font-['Plus_Jakarta_Sans'] border border-[#8a5100]/30 hover:bg-[#314380] transition-colors cursor-pointer"
          >
            Inspect Bribery Register
          </button>
          <button
            onClick={onOpenSuggestVenue}
            className="px-4 py-2 rounded-lg bg-[#ffdcbd] text-[#2c1600] text-xs font-bold font-['Plus_Jakarta_Sans'] hover:bg-[#ffb86d] transition-colors cursor-pointer"
          >
            Petition the Chairs
          </button>
        </div>
      </div>
    </div>
  );
};
