import React from 'react';
import { TierType } from '../types';
import { TIER_COUNTS } from '../data/venues';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTier: TierType | 'all';
  onTierChange: (tier: TierType | 'all') => void;
  maxWalkMinutes: number | null;
  onMaxWalkChange: (minutes: number | null) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedTier,
  onTierChange,
  maxWalkMinutes,
  onMaxWalkChange,
}) => {
  const toggleWalkLimit = () => {
    if (maxWalkMinutes === null) {
      onMaxWalkChange(15);
    } else if (maxWalkMinutes === 15) {
      onMaxWalkChange(10);
    } else if (maxWalkMinutes === 10) {
      onMaxWalkChange(5);
    } else {
      onMaxWalkChange(null);
    }
  };

  return (
    <div className="bg-[#F7F0DF] border border-[#D9CFB8]/80 rounded-xl p-3 shadow-sm flex flex-col gap-2.5">
      {/* Top Status & Territorial Quorum Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1E7A4E] animate-pulse"></div>
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase text-[#001854] tracking-widest truncate">
            Standing Docket · Quorum Met: 4 Chairs Present at Spinningfields
          </span>
          <span className="text-[#757681] text-xs hidden sm:inline">•</span>
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#8a5100] uppercase font-bold hidden sm:inline">
            Base: Crown Square Assizes
          </span>
        </div>

        <div className="flex items-center gap-2 text-[#454650] font-['Plus_Jakarta_Sans'] text-[11px]">
          <span className="bg-[#F3ECDB] px-2.5 py-0.5 rounded-full text-[#8a5100] font-bold border border-[#D9CFB8]/60">
            TERRITORY: 2.5 MI RADIUS
          </span>
          <span className="bg-[#F3ECDB] px-2.5 py-0.5 rounded-full text-[#001854] font-bold border border-[#D9CFB8]/60">
            TOTAL REGISTERED: {TIER_COUNTS.total} VENUES
          </span>
        </div>
      </div>

      {/* Search Input and Filter Badges Strip */}
      <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-2.5">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[240px]">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#757681] text-[18px]">
            search
          </span>
          <input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-12 py-1.5 bg-white border border-[#D9CFB8]/80 rounded-lg font-['Plus_Jakarta_Sans'] text-[13px] text-[#1e1b17] placeholder:text-[#757681] focus:outline-none focus:ring-2 focus:ring-[#001854] transition-all"
            placeholder="Search docket e.g. Bada Bing, Sourdough, Bridge Street, Muffuletta..."
            type="text"
          />
          {searchQuery ? (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#757681] hover:text-[#1e1b17]"
            >
              ✕
            </button>
          ) : (
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 font-['Plus_Jakarta_Sans'] text-[10px] text-[#757681] uppercase bg-[#F7F0DF] px-1 py-0.5 rounded border border-[#D9CFB8]/60 font-semibold pointer-events-none">
              ⌘K
            </span>
          )}
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 xl:pb-0 scrollbar-none">
          {/* Approved */}
          <button
            onClick={() => onTierChange(selectedTier === 'approved' ? 'all' : 'approved')}
            className={`px-2.5 py-1 rounded-full font-['Plus_Jakarta_Sans'] text-[12px] font-semibold shadow-sm flex items-center gap-1 shrink-0 transition-colors cursor-pointer ${
              selectedTier === 'approved'
                ? 'bg-[#1E7A4E] text-white ring-2 ring-[#1E7A4E]/30'
                : 'bg-[#F3ECDB] text-[#1e1b17] hover:bg-[#E8F5EE]'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${selectedTier === 'approved' ? 'bg-white' : 'bg-[#1E7A4E]'}`}></span>
            <span>Approved</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
              selectedTier === 'approved' ? 'bg-white/20 text-white' : 'bg-[#E8F5EE] text-[#1E7A4E]'
            }`}>
              {TIER_COUNTS.approved}
            </span>
          </button>

          {/* Under Deliberation */}
          <button
            onClick={() => onTierChange(selectedTier === 'deliberation' ? 'all' : 'deliberation')}
            className={`px-2.5 py-1 rounded-full font-['Plus_Jakarta_Sans'] text-[12px] font-semibold transition-colors flex items-center gap-1 shrink-0 cursor-pointer ${
              selectedTier === 'deliberation'
                ? 'bg-[#C27803] text-white ring-2 ring-[#C27803]/30'
                : 'bg-[#F3ECDB] text-[#1e1b17] hover:bg-[#FEF5E7]'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${selectedTier === 'deliberation' ? 'bg-white' : 'bg-[#C27803]'}`}></span>
            <span>Under Deliberation</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
              selectedTier === 'deliberation' ? 'bg-white/20 text-white' : 'bg-[#F7F0DF] text-[#8a5100]'
            }`}>
              {TIER_COUNTS.deliberation}
            </span>
          </button>

          {/* To Be Assessed */}
          <button
            onClick={() => onTierChange(selectedTier === 'assessed' ? 'all' : 'assessed')}
            className={`px-2.5 py-1 rounded-full font-['Plus_Jakarta_Sans'] text-[12px] font-semibold transition-colors flex items-center gap-1 shrink-0 cursor-pointer ${
              selectedTier === 'assessed'
                ? 'bg-[#5A6474] text-white ring-2 ring-[#5A6474]/30'
                : 'bg-[#F3ECDB] text-[#1e1b17] hover:bg-[#F0F2F5]'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${selectedTier === 'assessed' ? 'bg-white' : 'bg-[#5A6474]'}`}></span>
            <span>To Be Assessed</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
              selectedTier === 'assessed' ? 'bg-white/20 text-white' : 'bg-[#F7F0DF] text-[#5A6474]'
            }`}>
              {TIER_COUNTS.assessed}
            </span>
          </button>

          {/* Docket Sanctions */}
          <button
            onClick={() => onTierChange(selectedTier === 'sanction' ? 'all' : 'sanction')}
            className={`px-2.5 py-1 rounded-full font-['Plus_Jakarta_Sans'] text-[12px] font-semibold transition-colors flex items-center gap-1 shrink-0 cursor-pointer ${
              selectedTier === 'sanction'
                ? 'bg-[#B92B27] text-white ring-2 ring-[#B92B27]/30'
                : 'bg-[#F3ECDB] text-[#1e1b17] hover:bg-[#FDF0F0]'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${selectedTier === 'sanction' ? 'bg-white' : 'bg-[#B92B27]'}`}></span>
            <span>Docket Sanctions</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
              selectedTier === 'sanction' ? 'bg-white/20 text-white' : 'bg-[#F7F0DF] text-[#B92B27]'
            }`}>
              {TIER_COUNTS.sanction}
            </span>
          </button>

          {/* If We Must */}
          <button
            onClick={() => onTierChange(selectedTier === 'reluctant' ? 'all' : 'reluctant')}
            className={`px-2.5 py-1 rounded-full font-['Plus_Jakarta_Sans'] text-[12px] font-semibold transition-colors flex items-center gap-1 shrink-0 cursor-pointer ${
              selectedTier === 'reluctant'
                ? 'bg-[#7C3A82] text-white ring-2 ring-[#7C3A82]/30'
                : 'bg-[#F3ECDB] text-[#1e1b17] hover:bg-[#F7EEF8]'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${selectedTier === 'reluctant' ? 'bg-white' : 'bg-[#7C3A82]'}`}></span>
            <span>If We Must</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
              selectedTier === 'reluctant' ? 'bg-white/20 text-white' : 'bg-[#F7F0DF] text-[#7C3A82]'
            }`}>
              {TIER_COUNTS.reluctant}
            </span>
          </button>

          {/* Archived */}
          <button
            onClick={() => onTierChange(selectedTier === 'archived' ? 'all' : 'archived')}
            className={`px-2.5 py-1 rounded-full font-['Plus_Jakarta_Sans'] text-[12px] font-semibold transition-colors flex items-center gap-1 shrink-0 cursor-pointer ${
              selectedTier === 'archived'
                ? 'bg-[#71717A] text-white ring-2 ring-[#71717A]/30'
                : 'bg-[#F3ECDB] text-[#1e1b17] hover:bg-[#F4F4F5]'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${selectedTier === 'archived' ? 'bg-white' : 'bg-[#71717A]'}`}></span>
            <span>Archived</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
              selectedTier === 'archived' ? 'bg-white/20 text-white' : 'bg-[#F7F0DF] text-[#71717A]'
            }`}>
              {TIER_COUNTS.archived}
            </span>
          </button>

          {/* Divider */}
          <div className="h-5 w-px bg-[#D9CFB8] mx-1 shrink-0"></div>

          {/* Walk Isochrone Filter Toggle */}
          <button
            onClick={toggleWalkLimit}
            className={`px-2.5 py-1 rounded-full font-['Plus_Jakarta_Sans'] text-[12px] font-semibold border transition-colors flex items-center gap-1 shrink-0 cursor-pointer ${
              maxWalkMinutes !== null
                ? 'bg-[#001854] text-white border-[#001854]'
                : 'bg-[#F7F0DF] text-[#001854] border-[#D9CFB8] hover:bg-[#F3ECDB]'
            }`}
            title="Click to cycle walking tolerance: 15m -> 10m -> 5m -> Any"
          >
            <span className="material-symbols-outlined text-[14px] text-[#8a5100]">tune</span>
            <span>{maxWalkMinutes ? `Max ${maxWalkMinutes} min walk` : 'All distances'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
