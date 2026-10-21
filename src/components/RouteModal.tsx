import React from 'react';
import { Venue } from '../types';

interface RouteModalProps {
  venue: Venue | null;
  onClose: () => void;
}

export const RouteModal: React.FC<RouteModalProps> = ({ venue, onClose }) => {
  if (!venue) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#F7F0DF] w-full max-w-lg rounded-2xl border-2 border-[#D9CFB8] shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#0e1b44] text-white px-5 py-4 border-b border-[#8a5100]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffdcbd] text-xl">navigation</span>
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold text-[#ffdcbd] tracking-widest block">
                STATUTORY PEDESTRIAN ROUTING
              </span>
              <h2 className="font-['Playfair_Display'] text-lg font-bold text-[#fff8f3]">
                Route to {venue.name}
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
        <div className="p-5 flex flex-col gap-4 text-xs font-['Plus_Jakarta_Sans']">
          <div className="bg-[#fbf2eb] p-3 rounded-xl border border-[#D9CFB8] flex items-center justify-between">
            <div>
              <span className="text-[#8a5100] font-bold block text-[10px] uppercase">
                Base Origin Point:
              </span>
              <span className="font-bold text-[#001854]">Spinningfields Crown Square Assizes</span>
            </div>
            <div className="text-right">
              <span className="text-[#1E7A4E] font-bold block text-sm">
                {venue.walkMinutes} min walk
              </span>
              <span className="text-[#757681]">{venue.distanceMiles} miles</span>
            </div>
          </div>

          {/* Turn-by-turn civic directions */}
          <div className="bg-[#F3ECDB] p-4 rounded-xl border border-[#D9CFB8] flex flex-col gap-3">
            <h4 className="font-['Playfair_Display'] font-bold text-sm text-[#001854]">
              Chamber-Approved Walking Itinerary
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#001854] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-[#001854]">Depart Crown Square Assizes:</strong> Head north past the Civil Justice Centre towards Bridge Street.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#001854] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-[#001854]">Canopy Transit Option:</strong> Utilize the building overhangs along Bridge Street / Deansgate during Manchester drizzle.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1E7A4E] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-[#001854]">Arrival at Destination:</strong> {venue.name} situated on {venue.street} ({venue.area}). Current reported queue: {venue.queueTimeMinutes}.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F0DF] p-3 rounded-lg border border-[#D9CFB8] text-[11px] text-[#454650]">
            <strong>Advisory Note:</strong> Ensure takeaway bag is sealed properly against river moisture if transporting back to office chambers.
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F3ECDB] px-5 py-3 border-t border-[#D9CFB8] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#001854] text-white font-bold hover:bg-[#1b2f6b] cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
