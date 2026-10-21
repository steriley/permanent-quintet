import React from 'react';
import { TIER_COUNTS } from '../data/venues';

interface TiersViewProps {
  onSelectTierFilter: (tier: string) => void;
}

export const TiersView: React.FC<TiersViewProps> = ({ onSelectTierFilter }) => {
  const tiers = [
    {
      id: 'approved',
      title: 'Approved Chambers',
      badgeColor: 'bg-[#1E7A4E] text-white',
      count: TIER_COUNTS.approved,
      description: 'The supreme echelon of midday nourishment. Venues that have endured two unannounced visits with zero dissent from the Chairs.',
      criteria: 'Crumb integrity score > 8.5, Dispatch < 15 mins, Uncompromising culinary identity, Sovereign seating dignity.',
      reinspectionFrequency: 'Every 90 days or upon chef departure.',
    },
    {
      id: 'deliberation',
      title: 'Under Deliberation',
      badgeColor: 'bg-[#C27803] text-white',
      count: TIER_COUNTS.deliberation,
      description: 'Promising establishments under active scrutiny. Either awaiting their statutory second inspection, or resolving a minor inconsistency (e.g. bun soggy lower hinge).',
      criteria: 'One stellar inspection logged; second hearing scheduled before full committee.',
      reinspectionFrequency: 'Imminent (within 14 working days).',
    },
    {
      id: 'assessed',
      title: 'To Be Assessed',
      badgeColor: 'bg-[#5A6474] text-white',
      count: TIER_COUNTS.assessed,
      description: 'Formally gazetted on the docket following citizen petitions, awaiting the initial surprise delegation.',
      criteria: 'Valid license, within 2.5-mile radius of Spinningfields Crown Square, independent ownership.',
      reinspectionFrequency: 'Awaiting first surprise visit.',
    },
    {
      id: 'sanction',
      title: 'Docket Sanctions',
      badgeColor: 'bg-[#B92B27] text-white',
      count: TIER_COUNTS.sanction,
      description: 'Condemned establishments guilty of egregious culinary malpractice. Chilled cardboard triangles, microwaved bread tubes, or fraudulent £16 salads.',
      criteria: 'Cold butter violations, 20+ minute takeaway delays, sterile corporate atmospheres.',
      reinspectionFrequency: 'Right of appeal strictly denied.',
    },
    {
      id: 'reluctant',
      title: 'If We Must',
      badgeColor: 'bg-[#7C3A82] text-white',
      count: TIER_COUNTS.reluctant,
      description: 'Emergency sustenance only. Permitted under conditions of statutory deadline duress or Manchester rain exceeding 25mm/hr.',
      criteria: 'Edible caloric content, sub-3-minute checkout, zero culinary dignity.',
      reinspectionFrequency: 'Tolerated solely during inclement typhoons.',
    },
    {
      id: 'archived',
      title: 'Archived / Deceased',
      badgeColor: 'bg-[#71717A] text-white',
      count: TIER_COUNTS.archived,
      description: 'Chambers that have surrendered their lease, succumbed to steep commercial rent increases, or converted into crypto-fintech co-working hubs.',
      criteria: 'Permanently shuttered; memorialized for posterity in the Crown Square Accord.',
      reinspectionFrequency: 'Rest in peace.',
    },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      {/* Banner */}
      <div className="bg-[#0e1b44] text-white p-6 rounded-2xl shadow-lg border border-[#D9CFB8]/30">
        <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-[#ffdcbd] font-bold block mb-1">
          CLASSIFICATION SYSTEM & CODEX
        </span>
        <h1 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#fff8f3]">
          The Six Verdict Tiers of the Bench
        </h1>
        <p className="font-['Playfair_Display'] text-xs sm:text-sm text-[#ffdcbd] italic mt-1 max-w-2xl leading-relaxed">
          Every establishment operating within 2.5 miles of Crown Square is subjected to rigorous classification under the Accord.
        </p>
      </div>

      {/* The 4 Inspection Pillars */}
      <div className="bg-[#F7F0DF] p-5 rounded-2xl border border-[#D9CFB8] shadow-sm">
        <h2 className="font-['Playfair_Display'] text-lg font-bold text-[#001854] mb-3">
          The Four Pillars of Judicial Inspection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-[#fbf2eb] p-3.5 rounded-xl border border-[#D9CFB8]">
            <span className="material-symbols-outlined text-[#8a5100] text-xl">grain</span>
            <h4 className="font-['Playfair_Display'] font-bold text-sm text-[#001854] mt-1">Crumb & Structural Integrity</h4>
            <p className="text-xs text-[#454650] mt-1">
              Resistance of bread to oil migration, tensile crust chew, and structural stability across all four quarters.
            </p>
          </div>
          <div className="bg-[#fbf2eb] p-3.5 rounded-xl border border-[#D9CFB8]">
            <span className="material-symbols-outlined text-[#8a5100] text-xl">timer</span>
            <h4 className="font-['Playfair_Display'] font-bold text-sm text-[#001854] mt-1">Speed of Dispatch</h4>
            <p className="text-xs text-[#454650] mt-1">
              Queue length vs. throughput. A 50-minute lunch hour permits no 30-minute queue indulgence.
            </p>
          </div>
          <div className="bg-[#fbf2eb] p-3.5 rounded-xl border border-[#D9CFB8]">
            <span className="material-symbols-outlined text-[#8a5100] text-xl">payments</span>
            <h4 className="font-['Playfair_Display'] font-bold text-sm text-[#001854] mt-1">Value Ratio</h4>
            <p className="text-xs text-[#454650] mt-1">
              Does the nourishment warrant the expenditure? Extravagance without merit receives immediate downgrade.
            </p>
          </div>
          <div className="bg-[#fbf2eb] p-3.5 rounded-xl border border-[#D9CFB8]">
            <span className="material-symbols-outlined text-[#8a5100] text-xl">chair</span>
            <h4 className="font-['Playfair_Display'] font-bold text-sm text-[#001854] mt-1">Sitting Dignity</h4>
            <p className="text-xs text-[#454650] mt-1">
              Acoustic resonance, elbow room, absence of obnoxious EDM playlists, and napkin availability.
            </p>
          </div>
        </div>
      </div>

      {/* The 6 Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tiers.map((t) => (
          <div
            key={t.id}
            className="bg-[#fbf2eb] border border-[#D9CFB8] rounded-xl p-4.5 flex flex-col justify-between gap-3 shadow-sm hover:border-[#001854] transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-['Plus_Jakarta_Sans'] font-bold uppercase ${t.badgeColor}`}>
                  {t.title}
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#8a5100] bg-[#F7F0DF] px-2 py-0.5 rounded border border-[#D9CFB8]">
                  {t.count} Indexed
                </span>
              </div>
              <p className="text-xs text-[#1e1b17] leading-relaxed">
                {t.description}
              </p>
              <div className="mt-3 bg-[#F7F0DF] p-2.5 rounded border border-[#D9CFB8]/60 text-xs flex flex-col gap-1">
                <div><strong>Standard:</strong> {t.criteria}</div>
                <div><strong>Inspection Protocol:</strong> {t.reinspectionFrequency}</div>
              </div>
            </div>

            <button
              onClick={() => onSelectTierFilter(t.id)}
              className="w-full py-1.5 rounded-lg bg-[#001854] text-white text-xs font-['Plus_Jakarta_Sans'] font-bold hover:bg-[#1b2f6b] transition-colors cursor-pointer"
            >
              Filter Ledger by {t.title} ({t.count})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
