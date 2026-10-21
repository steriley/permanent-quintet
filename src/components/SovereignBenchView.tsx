import React from 'react';
import { Venue } from '../types';
import { InteractiveMap } from './InteractiveMap';

interface SovereignBenchViewProps {
  venues: Venue[];
  selectedVenue: Venue;
  onSelectVenue: (venue: Venue) => void;
  onOpenAudit: (venue: Venue) => void;
  onOpenRoute?: (venue: Venue) => void;
  onOpenTestimony?: (venue: Venue) => void;
}

export const SovereignBenchView: React.FC<SovereignBenchViewProps> = ({
  venues,
  selectedVenue,
  onSelectVenue,
  onOpenAudit,
}) => {
  // The Quintet comprises the top 5 ranked venues
  const quintetVenues = venues.filter((v) => v.isQuintet).sort((a, b) => (a.quintetRank || 0) - (b.quintetRank || 0));
  
  // The companion pillars are quintet venues other than the currently active hero
  const companionPillars = quintetVenues.filter((v) => v.id !== selectedVenue.id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
      {/* LEFT COLUMN: INTERACTIVE CARTOGRAPHIC MAP & AUXILIARY DISPATCH WIDGETS (lg:col-span-5) */}
      <div className="lg:col-span-5 flex flex-col gap-3">
        {/* Cartographic Map */}
        <InteractiveMap
          venues={venues}
          selectedVenue={selectedVenue}
          onSelectVenue={onSelectVenue}
          onOpenAudit={onOpenAudit}
        />

        {/* Auxiliary Panel A: Atmospheric Dispatch & Auditor's Fast Docket */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* MCR Weather & Lunch Condition */}
          <div className="bg-[#F7F0DF] rounded-xl p-3 border border-[#D9CFB8] shadow-sm flex flex-col justify-between gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase text-[#8a5100] font-bold tracking-wider">
                ATMOSPHERIC DISPATCH
              </span>
              <span className="material-symbols-outlined text-[#8a5100] text-[16px]">rainy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-['Playfair_Display'] text-base text-[#001854] font-bold">
                12°C · Fine Drizzle
              </span>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#454650] leading-snug">
              Walking tolerance standard: Under-canopy transit recommended towards Bridge St.
            </p>
          </div>

          {/* Auditor Deliberation Fast Docket */}
          <div className="bg-[#F7F0DF] rounded-xl p-3 border border-[#D9CFB8] shadow-sm flex flex-col justify-between gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase text-[#1E7A4E] font-bold tracking-wider">
                FAST DOCKET
              </span>
              <span className="material-symbols-outlined text-[#1E7A4E] text-[16px]">verified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-['Playfair_Display'] text-[13px] text-[#001854] font-bold">
                90 Venues Indexed
              </span>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#454650] leading-snug">
              29 Approved Chambers. Unanimous bench quorum in permanent session.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: THE GOLDEN CUT SHOWCASE (PRIMARY GAZETTED ROLL CALL) (lg:col-span-7) */}
      <div className="lg:col-span-7 flex flex-col gap-3.5">
        {/* Golden Cut Showcase Container Banner */}
        <div className="bg-[#0e1b44] text-white p-4 rounded-2xl shadow-xl flex flex-col gap-3 relative overflow-hidden border border-[#D9CFB8]/40">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#8a5100]/15 blur-2xl pointer-events-none"></div>

          {/* Showcase Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#8a5100]/30 pb-2.5">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ffdcbd] text-[16px]">award_star</span>
                <span className="font-['Plus_Jakarta_Sans'] text-[#ffdcbd] text-[10px] uppercase font-bold tracking-widest">
                  THE GOLDEN CUT // THE CHAIRS’ PERMANENT QUINTET
                </span>
              </div>
              <h2 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#fff8f3] tracking-tight font-bold">
                The Sovereign Bench of Manchester Lunch
              </h2>
            </div>
            <div className="flex items-center gap-1 bg-[#25315b]/80 px-2.5 py-1 rounded-lg border border-[#8a5100]/20 shrink-0">
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase text-[#ffdcbd] font-bold tracking-wide">
                TOP LUNCHING GUARANTEED
              </span>
            </div>
          </div>

          {/* Showcase Hero Card: Selected Venue */}
          <article className="w-full bg-[#F3ECDB] text-[#1e1b17] rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row border border-[#D9CFB8]">
            {/* Left Hero Sub-Column: Image & Wax Seal Stamp */}
            <div className="relative md:w-5/12 min-h-[220px] md:min-h-full bg-[#34302b] overflow-hidden group shrink-0">
              <img
                alt={selectedVenue.name}
                className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                src={selectedVenue.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001854]/95 via-[#001854]/30 to-transparent pointer-events-none"></div>

              {/* Wax Seal Stamp */}
              <div className="absolute top-2.5 right-2.5 z-20">
                <button
                  onClick={() => onOpenAudit(selectedVenue)}
                  title="Click to view certified audit"
                  className="relative group cursor-pointer focus:outline-none"
                >
                  <img
                    alt="Chairs Authenticated Stamp"
                    className="w-11 h-11 rounded-full shadow-lg ring-2 ring-[#ffdcbd] bg-[#F7F0DF] object-cover transition-transform group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqgP2VMinATbGPTBgGdz_4wqnqb1G3I77nmOy5s6K0rO9FkVS4GTeB3vtY5upA9ScB29X6FIDH_yQaQJw4-_abrDdR5xP-PNE42Xbu7EVgjdIdlvnYUMNZUJ5nrKP4oSH55MwZb1qfyI3v3tUAO-MFao_Yo25bJQrgtsdsKtQUZME6pK-hvSs7G_GQdsmnAvvhVT4NIGqtPDfQgsrW6Cm796GYdH8hV8JLRvlOYPJ1zMw1Y9VMYon8zF4pbKqoaaTwHQ"
                  />
                </button>
              </div>
            </div>

            {/* Right Hero Sub-Column: Text, Review & Telemetry */}
            <div className="p-3.5 flex flex-col justify-between gap-2.5 bg-[#F3ECDB] flex-1">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-['Plus_Jakarta_Sans'] font-bold tracking-wide uppercase ${
                    selectedVenue.tier === 'approved'
                      ? 'bg-[#E8F5EE] text-[#1E7A4E]'
                      : selectedVenue.tier === 'deliberation'
                      ? 'bg-[#FEF5E7] text-[#C27803]'
                      : selectedVenue.tier === 'sanction'
                      ? 'bg-[#FDF0F0] text-[#B92B27]'
                      : 'bg-[#F0F2F5] text-[#5A6474]'
                  }`}>
                    LUNCH CLUB CONTENDER · {selectedVenue.tierLabel} · {selectedVenue.price}
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#001854] font-bold tracking-tight leading-snug">
                  {selectedVenue.name}
                </h3>
                <p className="font-['Playfair_Display'] text-[#8a5100] text-[13px] italic">
                  {selectedVenue.category} · {selectedVenue.street}
                </p>
              </div>

              {/* Eat Like Us Callout */}
              <div className="bg-[#F7F0DF] px-3 py-2 rounded-lg flex items-start gap-2 shadow-inner border border-[#D9CFB8]/60">
                <span className="material-symbols-outlined text-[#8a5100] text-[18px] shrink-0 mt-0.5">
                  restaurant_menu
                </span>
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase tracking-wider text-[#8a5100] font-bold">
                    EAT LIKE US
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#1e1b17] font-semibold leading-tight">
                    {selectedVenue.coreMandateOrder}
                  </span>
                </div>
              </div>

              {/* Editorial Puff Piece Block */}
              <div className="bg-white/80 p-2.5 rounded-lg shadow-sm border border-[#D9CFB8]/50">
                <blockquote className="font-['Playfair_Display'] text-[#1e1b17] text-[12px] leading-relaxed italic">
                  “{selectedVenue.verdictQuote}”
                </blockquote>
                <div className="mt-1 text-right">
                  <cite className="font-['Plus_Jakarta_Sans'] text-[9px] uppercase text-[#8a5100] font-bold not-italic">
                    — {selectedVenue.inspectorCite}
                  </cite>
                </div>
              </div>

              {/* Telemetry Grid */}
              <div className="flex items-center justify-between pt-2 mt-1 border-t border-[#D9CFB8]/50 text-xs">
                <span className="flex items-center gap-1 text-[#454650] font-medium text-[11px]">
                  <span className="material-symbols-outlined text-[14px]">directions_walk</span>
                  {selectedVenue.walkMinutes} min walk ({selectedVenue.distanceMiles} mi)
                </span>
                <span className="hidden sm:inline text-[#757681] text-[11px]">
                  Queue: {selectedVenue.queueTimeMinutes}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border border-[#1E7A4E] text-[#1E7A4E] bg-[#E8F5EE]/80">
                  {selectedVenue.inspectionsCount} INSPECTIONS
                </span>
              </div>
            </div>
          </article>

          {/* Companion Pillars #02 to #05 Header & Density Grid */}
          <div className="flex flex-col gap-2 pt-1">
            <div className="flex items-center justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-[#efe7e0] text-[9px] uppercase tracking-wider font-bold">
                Double Inspection Standard Verified
              </span>
              <span className="text-[10px] text-[#ffdcbd] font-medium">
                Click any pillar to inspect
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {companionPillars.slice(0, 4).map((pillar) => (
                <div
                  key={pillar.id}
                  onClick={() => onSelectVenue(pillar)}
                  className="bg-[#fbf2eb] border border-[#D9CFB8] rounded-xl p-3 flex flex-col justify-between shadow-sm hover:border-[#1b2f6b] hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <img
                      alt={pillar.name}
                      className="w-20 h-20 rounded-lg object-cover shrink-0 border border-[#D9CFB8]/60 shadow-sm group-hover:scale-105 transition-transform"
                      src={pillar.image}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-['Playfair_Display'] text-sm sm:text-base font-bold text-[#001854] truncate group-hover:text-[#8a5100] transition-colors">
                          {pillar.name}
                        </h4>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-xs text-[#8a5100] font-bold">{pillar.price}</span>
                        </div>
                      </div>
                      <p className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#8a5100] uppercase tracking-wider truncate mt-0.5 font-bold">
                        {pillar.street} · {pillar.category.split(',')[0]}
                      </p>
                      <p className="text-xs text-[#454650] mt-1 leading-snug line-clamp-2">
                        {pillar.verdictQuote}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 mt-2 border-t border-[#D9CFB8]/50 text-xs">
                    <span className="flex items-center gap-1 text-[#454650] font-medium text-[11px]">
                      <span className="material-symbols-outlined text-[14px]">directions_walk</span>
                      {pillar.walkMinutes} min walk ({pillar.distanceMiles} mi)
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border ${
                      pillar.tier === 'approved'
                        ? 'border-[#1E7A4E] text-[#1E7A4E] bg-[#E8F5EE]/60'
                        : 'border-[#C27803] text-[#C27803] bg-[#FEF5E7]'
                    }`}>
                      {pillar.inspectionsCount} INSPECTIONS
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
