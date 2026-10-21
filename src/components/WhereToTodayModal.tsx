import React, { useState } from 'react';
import { Venue } from '../types';

interface WhereToTodayModalProps {
  isOpen: boolean;
  onClose: () => void;
  venues: Venue[];
  onSelectAndInspect: (venue: Venue) => void;
}

export const WhereToTodayModal: React.FC<WhereToTodayModalProps> = ({
  isOpen,
  onClose,
  venues,
  onSelectAndInspect,
}) => {
  const [maxMinutes, setMaxMinutes] = useState<number>(15);
  const [weatherCondition, setWeatherCondition] = useState<'drizzle' | 'dry' | 'downpour'>('drizzle');
  const [pricePreference, setPricePreference] = useState<string>('all');
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [decreedVenue, setDecreedVenue] = useState<Venue | null>(null);

  if (!isOpen) return null;

  // Filter candidate pool
  const candidatePool = venues.filter((v) => {
    if (v.tier === 'sanction' || v.tier === 'archived') return false;
    if (v.walkMinutes > maxMinutes) return false;
    if (pricePreference !== 'all' && v.price !== pricePreference) return false;
    if (weatherCondition === 'downpour' && v.walkMinutes > 8) return false;
    return true;
  });

  const handleSummonDecree = () => {
    setIsSpinning(true);
    setDecreedVenue(null);

    const pool = candidatePool.length > 0 ? candidatePool : venues.filter((v) => v.tier === 'approved');
    let counter = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * pool.length);
      setDecreedVenue(pool[randomIndex]);
      counter++;
      if (counter > 15) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 90);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#F7F0DF] w-full max-w-lg rounded-2xl border-2 border-[#D9CFB8] shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#0e1b44] text-white px-5 py-4 border-b border-[#8a5100]/40 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#ffdcbd] text-2xl">casino</span>
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold text-[#ffdcbd] tracking-widest block">
                EXPRESS ADJUDICATION ENGINE
              </span>
              <h2 className="font-['Playfair_Display'] text-lg sm:text-xl font-bold text-[#fff8f3]">
                Where To Today? [12:25 Quorum]
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

        {/* Modal Body */}
        <div className="p-5 flex flex-col gap-4 overflow-y-auto max-h-[80vh]">
          {/* Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-['Plus_Jakarta_Sans']">
            {/* Walk Tolerance */}
            <div className="bg-[#F3ECDB] p-3 rounded-xl border border-[#D9CFB8]">
              <label className="font-bold text-[#001854] block mb-1.5">
                Maximum Walking Leg:
              </label>
              <div className="flex gap-1">
                {[5, 10, 15, 20].map((mins) => (
                  <button
                    key={mins}
                    onClick={() => setMaxMinutes(mins)}
                    className={`flex-1 py-1 rounded font-bold transition-colors cursor-pointer ${
                      maxMinutes === mins ? 'bg-[#001854] text-white' : 'bg-[#F7F0DF] text-[#1e1b17] hover:bg-[#efe7e0]'
                    }`}
                  >
                    {mins}m
                  </button>
                ))}
              </div>
            </div>

            {/* Weather / Drizzle Factor */}
            <div className="bg-[#F3ECDB] p-3 rounded-xl border border-[#D9CFB8]">
              <label className="font-bold text-[#001854] block mb-1.5">
                Manchester Weather Matrix:
              </label>
              <div className="flex gap-1">
                {[
                  { id: 'dry', label: 'Dry' },
                  { id: 'drizzle', label: 'Fine Drizzle' },
                  { id: 'downpour', label: 'Torrential' },
                ].map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setWeatherCondition(w.id as any)}
                    className={`flex-1 py-1 text-[11px] rounded font-bold transition-colors cursor-pointer ${
                      weatherCondition === w.id ? 'bg-[#001854] text-white' : 'bg-[#F7F0DF] text-[#1e1b17] hover:bg-[#efe7e0]'
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <button
            onClick={handleSummonDecree}
            disabled={isSpinning}
            className={`w-full py-3 rounded-xl text-sm font-['Plus_Jakarta_Sans'] font-bold text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all ${
              isSpinning ? 'bg-[#757681] cursor-not-allowed' : 'bg-[#001854] hover:bg-[#1b2f6b] active:scale-98'
            }`}
          >
            <span className="material-symbols-outlined text-lg">gavel</span>
            <span>{isSpinning ? 'Deliberating in Chambers...' : 'Summon Parliamentary Lunch Decree'}</span>
          </button>

          {/* Decreed Venue Result Card */}
          {decreedVenue && (
            <div className="bg-[#fbf2eb] p-4 rounded-xl border-2 border-[#8a5100]/50 shadow-md flex flex-col gap-3 animate-fade-in">
              <div className="flex items-center justify-between border-b border-[#D9CFB8] pb-2">
                <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold text-[#8a5100] tracking-wider">
                  OFFICIAL TRIBUNAL DECREE ISSUED
                </span>
                <span className="bg-[#E8F5EE] text-[#1E7A4E] text-[10px] font-bold px-2 py-0.5 rounded">
                  {decreedVenue.scores.overallScore} / 10 Score
                </span>
              </div>

              <div className="flex items-start gap-3">
                <img
                  alt={decreedVenue.name}
                  src={decreedVenue.image}
                  className="w-20 h-20 rounded-lg object-cover border border-[#D9CFB8]"
                />
                <div className="flex-1">
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#001854]">
                    {decreedVenue.name}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#8a5100] font-bold">
                    {decreedVenue.street} · {decreedVenue.walkMinutes} min walk ({decreedVenue.distanceMiles} mi)
                  </p>
                  <p className="font-['Playfair_Display'] text-xs italic text-[#454650] mt-1 line-clamp-2">
                    “{decreedVenue.verdictQuote}”
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F0DF] p-2.5 rounded border border-[#D9CFB8] text-xs">
                <strong className="text-[#8a5100] block text-[10px] uppercase font-['Plus_Jakarta_Sans']">
                  Eat Like Us:
                </strong>
                <span className="text-[#001854] font-semibold">{decreedVenue.coreMandateOrder}</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onSelectAndInspect(decreedVenue);
                  }}
                  className="flex-1 py-2 rounded-lg bg-[#001854] text-white text-xs font-['Plus_Jakarta_Sans'] font-bold hover:bg-[#1b2f6b] transition-colors cursor-pointer"
                >
                  Accept Decree & View Audit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
