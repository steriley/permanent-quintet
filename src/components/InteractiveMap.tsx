import React, { useState } from 'react';
import { Venue } from '../types';

interface InteractiveMapProps {
  venues: Venue[];
  selectedVenue: Venue;
  onSelectVenue: (venue: Venue) => void;
  onOpenAudit: (venue: Venue) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  venues,
  selectedVenue,
  onSelectVenue,
  onOpenAudit,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [hoveredVenue, setHoveredVenue] = useState<Venue | null>(null);

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.25, 1.75));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.25, 0.75));
  const handleRecenter = () => setZoomLevel(1);

  return (
    <div className="w-full bg-[#F7F0DF] rounded-2xl border border-[#D9CFB8] shadow-md overflow-hidden flex flex-col">
      {/* Map Header Strip */}
      <div className="px-3.5 py-2.5 bg-[#0e1b44] text-white flex items-center justify-between border-b border-[#8a5100]/30">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#ffdcbd] text-[18px]">explore</span>
          <div className="flex flex-col">
            <span className="font-['Plus_Jakarta_Sans'] text-[#ffdcbd] text-[10px] uppercase font-bold tracking-wider">
              CARTOGRAPHIC PROJECTION
            </span>
            <span className="font-['Playfair_Display'] text-[#fff8f3] text-xs font-semibold">
              Spinningfields Base Isochrones
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded bg-[#25315b]/80 text-[#ffdcbd] font-['Plus_Jakarta_Sans'] text-[10px] font-bold border border-[#8a5100]/20">
            29 / 90 Active Pins
          </span>
        </div>
      </div>

      {/* Interactive Vector Cartography Container */}
      <div className="relative w-full h-[460px] bg-[#EAE3D2] overflow-hidden select-none">
        {/* Scalable Container for Zoom and Pan */}
        <div 
          className="absolute inset-0 transition-transform duration-300 origin-[170px_190px]"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Faux River Irwell Vector Stream & Street Grid */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 460">
            <defs>
              <linearGradient id="waterGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#8EA5BA" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#6E8A9E" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {/* River Irwell Curve */}
            <path 
              d="M 60 0 C 70 80, 50 140, 110 200 S 140 310, 120 460 L 160 460 C 180 310, 150 200, 90 140 C 70 80, 100 0, 100 0 Z" 
              fill="url(#waterGrad)" 
            />
            <text 
              fill="#475569" 
              fontFamily="Playfair Display" 
              fontSize="9" 
              fontStyle="italic" 
              letterSpacing="1" 
              opacity="0.75" 
              transform="rotate(72 105 210)" 
              x="105" 
              y="210"
            >
              River Irwell
            </text>

            {/* Street Grid Dashed Trajectories */}
            <path 
              d="M 0 110 L 400 130 M 0 240 L 400 220 M 180 0 L 220 460 M 270 0 L 310 460 M 340 0 L 370 460" 
              stroke="#D3C7AE" 
              strokeDasharray="3,3" 
              strokeWidth="1" 
            />
            <text fill="#78716C" fontFamily="Plus Jakarta Sans" fontSize="8" fontWeight="700" letterSpacing="0.5" transform="rotate(2 160 122)" x="160" y="122">
              BRIDGE STREET
            </text>
            <text fill="#78716C" fontFamily="Plus Jakarta Sans" fontSize="8" fontWeight="700" letterSpacing="0.5" transform="rotate(-3 200 230)" x="200" y="230">
              PETER STREET
            </text>
            <text fill="#78716C" fontFamily="Plus Jakarta Sans" fontSize="8" fontWeight="700" letterSpacing="0.5" transform="rotate(78 285 240)" x="285" y="240">
              DEANSGATE
            </text>
            <text fill="#78716C" fontFamily="Plus Jakarta Sans" fontSize="8" fontWeight="700" letterSpacing="0.5" transform="rotate(78 355 240)" x="355" y="240">
              OXFORD STREET
            </text>
          </svg>

          {/* Isochrone Rings centered on Spinningfields Crown Square (x: 170, y: 190) */}
          <div className="absolute left-[170px] top-[190px] -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full border border-[#1E7A4E]/40 bg-[#1E7A4E]/5 pointer-events-none flex items-center justify-center">
            <span className="absolute -top-2.5 font-['Plus_Jakarta_Sans'] text-[8px] text-[#1E7A4E] font-bold bg-[#F7F0DF]/90 px-1 rounded border border-[#D9CFB8]/60">
              5 MIN
            </span>
          </div>

          <div className="absolute left-[170px] top-[190px] -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full border border-[#8a5100]/40 bg-[#8a5100]/5 pointer-events-none flex items-center justify-center">
            <span className="absolute -top-2.5 font-['Plus_Jakarta_Sans'] text-[8px] text-[#8a5100] font-bold bg-[#F7F0DF]/90 px-1 rounded border border-[#D9CFB8]/60">
              10 MIN
            </span>
          </div>

          <div className="absolute left-[170px] top-[190px] -translate-x-1/2 -translate-y-1/2 w-[270px] h-[270px] rounded-full border border-[#001854]/25 bg-[#001854]/5 pointer-events-none flex items-center justify-center">
            <span className="absolute -top-2.5 font-['Plus_Jakarta_Sans'] text-[8px] text-[#001854] font-bold bg-[#F7F0DF]/90 px-1 rounded border border-[#D9CFB8]/60">
              15 MIN
            </span>
          </div>

          <div className="absolute left-[170px] top-[190px] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-[#757681]/30 pointer-events-none flex items-center justify-center">
            <span className="absolute -top-2.5 font-['Plus_Jakarta_Sans'] text-[8px] text-[#757681] font-bold bg-[#F7F0DF]/90 px-1 rounded border border-[#D9CFB8]/60">
              20 MIN
            </span>
          </div>

          {/* Central Base Marker: Spinningfields Crown Square */}
          <div 
            onClick={handleRecenter}
            className="absolute left-[170px] top-[190px] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer"
            title="Spinningfields Crown Square Assizes — Base Zero"
          >
            <div className="w-7 h-7 rounded-full bg-[#001854] text-[#ffdcbd] ring-4 ring-[#001854]/20 shadow-lg flex items-center justify-center font-bold text-[12px] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[15px]">gavel</span>
            </div>
            <div className="bg-[#001854] text-[#ffdcbd] font-['Plus_Jakarta_Sans'] text-[9px] uppercase px-1.5 py-0.5 rounded shadow mt-1 whitespace-nowrap font-bold">
              CROWN SQ BASE
            </div>
          </div>

          {/* Interactive Venue Pins */}
          {venues.map((venue) => {
            const isSelected = selectedVenue?.id === venue.id;
            const isHeroBadaBing = venue.id === 'bada-bing';
            const isSanction = venue.tier === 'sanction';

            return (
              <div
                key={venue.id}
                style={{ left: `${venue.mapCoords.x}px`, top: `${venue.mapCoords.y}px` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 cursor-pointer ${
                  isSelected ? 'z-40 scale-110' : 'z-20 hover:scale-115'
                }`}
                onClick={() => {
                  onSelectVenue(venue);
                }}
                onMouseEnter={() => setHoveredVenue(venue)}
                onMouseLeave={() => setHoveredVenue(null)}
              >
                {/* Pin Roundel */}
                <div
                  className={`flex items-center justify-center font-bold transition-all ${
                    isHeroBadaBing
                      ? 'w-8 h-8 rounded-full bg-[#ffdcbd] text-[#2c1600] ring-2 ring-[#001854] shadow-xl animate-bounce text-[12px]'
                      : isSanction
                      ? 'w-5 h-5 rounded-full bg-[#B92B27] text-white text-[9px] shadow'
                      : isSelected
                      ? 'w-7 h-7 rounded-full bg-[#001854] text-white ring-2 ring-[#8a5100] shadow-xl text-[11px]'
                      : venue.isQuintet
                      ? 'w-6 h-6 rounded-full bg-[#F7F0DF] text-[#001854] ring-2 ring-[#D9CFB8] shadow-md hover:bg-[#ffdcbd] text-[10px]'
                      : 'w-5 h-5 rounded-full bg-[#1E7A4E] text-white text-[9px] shadow opacity-85'
                  }`}
                >
                  <span className="font-['Playfair_Display'] font-bold">
                    {isSanction ? '✕' : venue.number}
                  </span>
                </div>

                {/* Floating Venue Tag on Selected or Hovered */}
                {(isSelected || hoveredVenue?.id === venue.id || isHeroBadaBing) && (
                  <div className="bg-[#F7F0DF] border border-[#D9CFB8] text-[#001854] font-['Plus_Jakarta_Sans'] text-[9px] px-1.5 py-0.5 rounded shadow mt-0.5 whitespace-nowrap font-bold flex items-center gap-1 z-50">
                    <span 
                      className={`w-1.5 h-1.5 rounded-full ${
                        venue.tier === 'approved' ? 'bg-[#1E7A4E]' : venue.tier === 'sanction' ? 'bg-[#B92B27]' : 'bg-[#C27803]'
                      }`}
                    />
                    <span>{venue.name.split(' ')[0]} ({venue.scores.overallScore})</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Floating Map Zoom / Recenter Controls */}
        <div className="absolute top-3 right-3 z-30 flex flex-col gap-1.5">
          <button 
            onClick={handleZoomIn}
            className="w-7 h-7 rounded bg-[#F7F0DF] border border-[#D9CFB8] text-[#001854] shadow flex items-center justify-center hover:bg-[#F3ECDB] active:scale-95 transition-all cursor-pointer"
            title="Zoom In"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
          </button>
          <button 
            onClick={handleZoomOut}
            className="w-7 h-7 rounded bg-[#F7F0DF] border border-[#D9CFB8] text-[#001854] shadow flex items-center justify-center hover:bg-[#F3ECDB] active:scale-95 transition-all cursor-pointer"
            title="Zoom Out"
          >
            <span className="material-symbols-outlined text-[16px]">remove</span>
          </button>
          <button 
            onClick={handleRecenter}
            className="w-7 h-7 rounded bg-[#F7F0DF] border border-[#D9CFB8] text-[#001854] shadow flex items-center justify-center hover:bg-[#F3ECDB] active:scale-95 transition-all cursor-pointer" 
            title="Recenter to Base"
          >
            <span className="material-symbols-outlined text-[16px]">my_location</span>
          </button>
        </div>

        {/* Isochrone Walking Radius Key Legend */}
        <div className="absolute bottom-3 left-3 z-30 bg-[#F7F0DF]/95 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-[#D9CFB8] text-[10px] shadow flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#1E7A4E]"></span>
            <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[#1e1b17]">5m</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#8a5100]"></span>
            <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[#1e1b17]">10m</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#001854]"></span>
            <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[#1e1b17]">15m</span>
          </div>
          <span className="text-[#757681] text-[9px]">Walking Rings</span>
        </div>
      </div>
    </div>
  );
};
