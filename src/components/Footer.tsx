import React from 'react';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
  onOpenBriberyRegister: () => void;
  onOpenSuggestVenue: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateTab,
  onOpenBriberyRegister,
  onOpenSuggestVenue,
}) => {
  return (
    <footer className="w-full bg-[#0e1b44] text-[#fff8f3] border-t-2 border-[#8a5100] mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-9 flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Col 1 */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-[#ffdcbd]">gavel</span>
              <span className="font-['Playfair_Display'] text-base text-[#fff8f3] tracking-tight font-bold">
                The Sovereign Committee of the Manchester Lunch Club
              </span>
            </div>
            <p className="font-['Playfair_Display'] text-xs italic text-[#efe7e0] leading-relaxed">
              “We lunch with purpose. We judge with integrity. We return only where deserved.”
            </p>
            <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#c5c6d1] leading-relaxed">
              Independent venues first. Two separate satisfactory inspections required for Approved status. Extravagance without merit will not pass inspection.
            </p>
          </div>

          {/* Col 2 */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] uppercase tracking-wider text-[#ffdcbd] font-bold">
              Jurisdictional Scope & Currency Key
            </span>
            <div className="flex flex-col gap-1.5 text-xs text-[#efe7e0]">
              <div className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#ffdcbd] shrink-0 mt-0.5">radar</span>
                <span>Jurisdiction: Central Manchester · 2.5 Miles from Base at Spinningfields Crown Square.</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#ffdcbd] shrink-0 mt-0.5">payments</span>
                <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#c5c6d1]">
                  <strong className="text-[#fff8f3]">Cost Key:</strong> £ (&lt;£10) · ££ (£10–£20) · £££ (Payday treat)
                </span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#ffdcbd] shrink-0 mt-0.5">verified_user</span>
                <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#c5c6d1]">
                  No right of appeal is recognized. All decisions of the Chairs are final.
                </span>
              </div>
            </div>
          </div>

          {/* Col 3 */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] uppercase tracking-wider text-[#ffdcbd] font-bold">
              Tribunal Codex
            </span>
            <div className="flex flex-col gap-1.5 font-['Plus_Jakarta_Sans'] text-xs text-[#efe7e0]">
              <button
                onClick={() => onNavigateTab('the-manifesto')}
                className="hover:text-[#fff8f3] transition-colors flex items-center gap-1.5 text-left cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px] text-[#8a5100]">description</span>
                <span>The Manifesto</span>
              </button>
              <button
                onClick={onOpenBriberyRegister}
                className="hover:text-[#fff8f3] transition-colors flex items-center gap-1.5 text-left cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px] text-[#8a5100]">shield</span>
                <span>Bribery Register</span>
              </button>
              <button
                onClick={onOpenSuggestVenue}
                className="hover:text-[#fff8f3] transition-colors flex items-center gap-1.5 text-left cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px] text-[#8a5100]">add_task</span>
                <span>Suggest a Venue</span>
              </button>
              <button
                onClick={() => onNavigateTab('the-manifesto')}
                className="hover:text-[#fff8f3] transition-colors flex items-center gap-1.5 text-left cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px] text-[#8a5100]">policy</span>
                <span>Chairs' Code of Conduct</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-4 border-t border-[#25315b] flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left font-['Plus_Jakarta_Sans'] text-[10px] text-[#757681]">
          <span>
            © 2024 The High Tribunal of MCR Lunch Club. Recorded at Spinningfields, Manchester. All official decrees gazetted.
          </span>
          <span className="text-[#efe7e0]/60">
            Transcripts entered in perpetuity under the Crown Square Accord.
          </span>
        </div>
      </div>
    </footer>
  );
};
