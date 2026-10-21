import React from 'react';
import { Venue } from '../types';

interface HallOfShameViewProps {
  sanctionedVenues: Venue[];
  onOpenAudit: (venue: Venue) => void;
}

export const HallOfShameView: React.FC<HallOfShameViewProps> = ({
  sanctionedVenues,
  onOpenAudit,
}) => {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      {/* Banner */}
      <div className="bg-[#B92B27] text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-red-900 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-red-200 font-['Plus_Jakarta_Sans'] text-xs uppercase font-bold tracking-widest mb-1">
            <span className="material-symbols-outlined text-sm">warning</span>
            <span>OFFICIAL DOCKET SANCTIONS · NO RIGHT OF APPEAL</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-2xl sm:text-4xl font-bold tracking-tight">
            The Hall of Midday Shame
          </h1>
          <p className="font-['Playfair_Display'] text-sm sm:text-base italic text-red-100 mt-2 max-w-xl leading-relaxed">
            “Those who compromise the dignity of the crumb shall find no sanctuary in Manchester.”
          </p>
        </div>

        <div className="bg-red-900/60 p-3 rounded-xl border border-red-400/40 text-center shrink-0">
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] uppercase tracking-wider block text-red-200 font-bold">
            Sanctions Decreed
          </span>
          <span className="font-['Playfair_Display'] text-3xl font-bold text-white">
            20
          </span>
          <span className="text-[10px] text-red-200 block">Strictly Enforced</span>
        </div>
      </div>

      {/* Condemnation Notice */}
      <div className="bg-[#FDF0F0] border border-[#B92B27]/40 rounded-xl p-4 text-xs text-[#1e1b17] leading-relaxed shadow-sm">
        <strong className="text-[#B92B27] uppercase tracking-wider block mb-1 font-['Plus_Jakarta_Sans']">
          Notice of Parliamentary Censure:
        </strong>
        The establishments below have committed unforgivable violations of the Crown Square Accord. Infractions include serving bread refrigerated below 2°C, deploying unseasoned water-bloated poultry breast, charging £14.50 for bagged spinach leaves, and generating soggy bottom buns.
      </div>

      {/* Cards of Shame */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sanctionedVenues.map((v) => (
          <div
            key={v.id}
            className="bg-[#fbf2eb] border-2 border-[#B92B27]/50 rounded-xl overflow-hidden shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="relative h-44 w-full bg-stone-900 overflow-hidden">
                <img
                  alt={v.name}
                  src={v.image}
                  className="w-full h-full object-cover grayscale contrast-125 opacity-85"
                />
                <div className="absolute inset-0 bg-red-900/30"></div>
                <div className="absolute top-2.5 left-2.5 bg-[#B92B27] text-white font-bold text-xs px-2 py-0.5 rounded shadow">
                  SANCTIONED
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-black/85 text-red-300 font-bold text-xs px-2 py-0.5 rounded">
                  Score: {v.scores.overallScore} / 10
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#001854]">
                    {v.name}
                  </h3>
                  <span className="text-xs font-bold text-[#8a5100]">{v.street}</span>
                </div>

                <div className="bg-[#FDF0F0] p-2.5 rounded border border-[#B92B27]/30 text-xs text-red-900">
                  <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold text-[#B92B27] block">
                    Statutory Infraction:
                  </span>
                  {v.sanctionReason || 'Severe compromise of crumb integrity and culinary decorum.'}
                </div>

                <blockquote className="font-['Playfair_Display'] text-xs italic text-[#454650] mt-1">
                  “{v.verdictQuote}”
                </blockquote>
              </div>
            </div>

            <div className="p-4 pt-0 border-t border-[#D9CFB8]/50 mt-2 flex items-center justify-between">
              <span className="text-xs text-[#757681]">
                Inspected {v.inspectionsCount} times · Confirmed Guilt
              </span>
              <button
                onClick={() => onOpenAudit(v)}
                className="px-3 py-1 rounded bg-[#B92B27] text-white text-xs font-bold font-['Plus_Jakarta_Sans'] hover:bg-red-800 transition-colors"
              >
                Read Condemnation Docket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
