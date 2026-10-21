import React, { useState } from 'react';
import { Venue, TierType } from '../types';

interface InspectionsViewProps {
  venues: Venue[];
  onOpenAudit: (venue: Venue) => void;
  onOpenRoute: (venue: Venue) => void;
  selectedTier: TierType | 'all';
  onTierChange: (tier: TierType | 'all') => void;
}

export const InspectionsView: React.FC<InspectionsViewProps> = ({
  venues,
  onOpenAudit,
  onOpenRoute,
  selectedTier,
  onTierChange,
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [sortBy, setSortBy] = useState<'score' | 'distance' | 'inspections' | 'price'>('score');

  const filteredVenues = venues.filter((v) => {
    if (selectedTier !== 'all' && v.tier !== selectedTier) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'score') return b.scores.overallScore - a.scores.overallScore;
    if (sortBy === 'distance') return a.distanceMiles - b.distanceMiles;
    if (sortBy === 'inspections') return b.inspectionsCount - a.inspectionsCount;
    if (sortBy === 'price') return a.price.length - b.price.length;
    return 0;
  });

  return (
    <div className="flex flex-col gap-5">
      {/* Page Header */}
      <div className="bg-[#0e1b44] text-white p-6 rounded-2xl shadow-lg border border-[#D9CFB8]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#ffdcbd] font-['Plus_Jakarta_Sans'] text-xs uppercase font-bold tracking-widest mb-1">
            <span className="material-symbols-outlined text-sm">fact_check</span>
            <span>PARLIAMENTARY ROLL CALL · AUDITS & INSPECTIONS</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold tracking-tight text-[#fff8f3]">
            The 90 Venues of Central Manchester
          </h1>
          <p className="font-['Playfair_Display'] text-xs sm:text-sm text-[#ffdcbd] italic mt-1">
            Gazetted inspection records within the 2.5-mile perimeter from Spinningfields Crown Square.
          </p>
        </div>

        {/* View and Sort Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex bg-[#25315b] p-1 rounded-lg border border-[#8a5100]/30 text-xs font-['Plus_Jakarta_Sans']">
            <button
              onClick={() => setSortBy('score')}
              className={`px-2.5 py-1 rounded transition-all ${
                sortBy === 'score' ? 'bg-[#ffdcbd] text-[#2c1600] font-bold' : 'text-[#ffdcbd] hover:text-white'
              }`}
            >
              Highest Score
            </button>
            <button
              onClick={() => setSortBy('distance')}
              className={`px-2.5 py-1 rounded transition-all ${
                sortBy === 'distance' ? 'bg-[#ffdcbd] text-[#2c1600] font-bold' : 'text-[#ffdcbd] hover:text-white'
              }`}
            >
              Closest Walk
            </button>
            <button
              onClick={() => setSortBy('inspections')}
              className={`px-2.5 py-1 rounded transition-all ${
                sortBy === 'inspections' ? 'bg-[#ffdcbd] text-[#2c1600] font-bold' : 'text-[#ffdcbd] hover:text-white'
              }`}
            >
              Most Audited
            </button>
          </div>

          <div className="flex bg-[#25315b] p-1 rounded-lg border border-[#8a5100]/30 text-xs">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded transition-all ${viewMode === 'grid' ? 'bg-[#ffdcbd] text-[#2c1600]' : 'text-white'}`}
              title="Grid View"
            >
              <span className="material-symbols-outlined text-[18px]">grid_view</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded transition-all ${viewMode === 'table' ? 'bg-[#ffdcbd] text-[#2c1600]' : 'text-white'}`}
              title="Ledger Table View"
            >
              <span className="material-symbols-outlined text-[18px]">table_rows</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVenues.map((venue) => (
            <div
              key={venue.id}
              className="bg-[#fbf2eb] border border-[#D9CFB8] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#1b2f6b]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full bg-[#34302b] overflow-hidden">
                  <img
                    alt={venue.name}
                    src={venue.image}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-[#001854]/90 text-white font-['Playfair_Display'] text-xs font-bold px-2 py-0.5 rounded shadow">
                      {venue.number}
                    </span>
                  </div>
                  <div className="absolute top-2.5 right-2.5">
                    <span
                      className={`text-[10px] font-['Plus_Jakarta_Sans'] font-bold px-2 py-0.5 rounded shadow uppercase ${
                        venue.tier === 'approved'
                          ? 'bg-[#1E7A4E] text-white'
                          : venue.tier === 'deliberation'
                          ? 'bg-[#C27803] text-white'
                          : venue.tier === 'sanction'
                          ? 'bg-[#B92B27] text-white'
                          : 'bg-[#5A6474] text-white'
                      }`}
                    >
                      {venue.tierLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-black/70 text-[#ffdcbd] font-bold text-xs px-2 py-0.5 rounded">
                    Score: {venue.scores.overallScore} / 10
                  </div>
                </div>

                <div className="p-3.5 flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-1">
                    <h3 className="font-['Playfair_Display'] text-base font-bold text-[#001854]">
                      {venue.name}
                    </h3>
                    <span className="text-xs text-[#8a5100] font-bold shrink-0">{venue.price}</span>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#8a5100] uppercase font-bold tracking-wide">
                    {venue.street} · {venue.area}
                  </p>
                  <p className="font-['Playfair_Display'] text-xs italic text-[#454650] line-clamp-2">
                    “{venue.verdictQuote}”
                  </p>

                  <div className="bg-[#F7F0DF] p-2 rounded text-xs border border-[#D9CFB8]/60 mt-1">
                    <span className="font-['Plus_Jakarta_Sans'] text-[9px] uppercase font-bold text-[#8a5100] block">
                      Eat Like Us:
                    </span>
                    <span className="text-[#1e1b17] font-medium leading-tight text-[11px]">
                      {venue.coreMandateOrder}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 pt-0 border-t border-[#D9CFB8]/40 mt-2 flex items-center justify-between text-xs">
                <span className="text-[#454650] font-medium flex items-center gap-1 text-[11px]">
                  <span className="material-symbols-outlined text-[14px]">directions_walk</span>
                  {venue.walkMinutes}m ({venue.distanceMiles}mi)
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onOpenRoute(venue)}
                    className="px-2 py-1 rounded bg-[#F7F0DF] text-[#001854] text-[11px] font-bold border border-[#D9CFB8] hover:bg-[#efe7e0] transition-colors"
                  >
                    Walk
                  </button>
                  <button
                    onClick={() => onOpenAudit(venue)}
                    className="px-2.5 py-1 rounded bg-[#001854] text-white text-[11px] font-bold hover:bg-[#1b2f6b] transition-colors"
                  >
                    Audit Docket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Table View */
        <div className="bg-[#F7F0DF] rounded-xl border border-[#D9CFB8] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-['Plus_Jakarta_Sans']">
              <thead className="bg-[#0e1b44] text-[#ffdcbd] uppercase font-bold tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-3">No.</th>
                  <th className="py-3 px-3">Venue & Speciality</th>
                  <th className="py-3 px-3">Location</th>
                  <th className="py-3 px-3">Walk From Base</th>
                  <th className="py-3 px-3">Tier</th>
                  <th className="py-3 px-3">Price</th>
                  <th className="py-3 px-3 text-right">Score</th>
                  <th className="py-3 px-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9CFB8]/60">
                {filteredVenues.map((v) => (
                  <tr key={v.id} className="hover:bg-[#F3ECDB] transition-colors">
                    <td className="py-2.5 px-3 font-bold text-[#001854]">{v.number}</td>
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-[#001854]">{v.name}</div>
                      <div className="text-[10px] text-[#8a5100] italic">{v.category}</div>
                    </td>
                    <td className="py-2.5 px-3 text-[#454650]">{v.street}</td>
                    <td className="py-2.5 px-3 font-medium text-[#1e1b17]">
                      {v.walkMinutes} min ({v.distanceMiles} mi)
                    </td>
                    <td className="py-2.5 px-3">
                      <span
                        className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${
                          v.tier === 'approved'
                            ? 'bg-[#E8F5EE] text-[#1E7A4E]'
                            : v.tier === 'deliberation'
                            ? 'bg-[#FEF5E7] text-[#C27803]'
                            : v.tier === 'sanction'
                            ? 'bg-[#FDF0F0] text-[#B92B27]'
                            : 'bg-[#F0F2F5] text-[#5A6474]'
                        }`}
                      >
                        {v.tierLabel}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-bold text-[#8a5100]">{v.price}</td>
                    <td className="py-2.5 px-3 text-right font-['Playfair_Display'] font-bold text-[#001854] text-sm">
                      {v.scores.overallScore}
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <button
                        onClick={() => onOpenAudit(v)}
                        className="px-2 py-1 rounded bg-[#001854] text-white text-[10px] font-bold hover:bg-[#1b2f6b]"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
