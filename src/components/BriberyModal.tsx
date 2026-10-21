import React from 'react';
import { BRIBERY_REGISTER } from '../data/manifesto';

interface BriberyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BriberyModal: React.FC<BriberyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#F7F0DF] w-full max-w-2xl rounded-2xl border-2 border-[#D9CFB8] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-[#0e1b44] text-white px-6 py-4 flex items-center justify-between border-b border-[#8a5100]/40">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#ffdcbd] text-2xl">shield</span>
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold text-[#ffdcbd] tracking-widest block">
                STATUTORY DISCLOSURE & INTEGRITY
              </span>
              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#fff8f3]">
                The Anti-Corruption & Bribery Register
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
        <div className="p-6 overflow-y-auto flex flex-col gap-4">
          <div className="bg-[#fbf2eb] p-3.5 rounded-xl border border-[#D9CFB8] text-xs font-['Plus_Jakarta_Sans'] text-[#1e1b17] leading-relaxed">
            In accordance with Article I of the Crown Square Accord, all items of culinary graft, complimentary loyalty tokens, unearned extra dips, and complimentary brioche baps offered to the Chairs are strictly recorded, rejected, or incinerated.
          </div>

          <div className="flex flex-col gap-3">
            {BRIBERY_REGISTER.map((entry) => (
              <div
                key={entry.id}
                className="bg-[#F3ECDB] p-4 rounded-xl border border-[#D9CFB8] flex flex-col gap-2 text-xs font-['Plus_Jakarta_Sans']"
              >
                <div className="flex items-center justify-between border-b border-[#D9CFB8]/60 pb-1.5">
                  <span className="font-bold text-[#001854]">{entry.id} · {entry.date}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#FDF0F0] text-[#B92B27] border border-[#B92B27]/30">
                    {entry.verdict}
                  </span>
                </div>
                <div>
                  <strong className="text-[#8a5100]">Attempted Donor:</strong> {entry.donor}
                </div>
                <div>
                  <strong className="text-[#001854]">Offered Graft:</strong> {entry.offeredGraft}
                </div>
                <div className="bg-[#F7F0DF] p-2.5 rounded border border-[#D9CFB8]/60 italic text-[#454650]">
                  <strong>Chairs' Ruling:</strong> “{entry.chairNotes}”
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F3ECDB] px-6 py-3 border-t border-[#D9CFB8] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#001854] text-white text-xs font-bold font-['Plus_Jakarta_Sans'] hover:bg-[#1b2f6b] cursor-pointer"
          >
            Close Register
          </button>
        </div>
      </div>
    </div>
  );
};
