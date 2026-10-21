import React from 'react';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onOpenWhereToToday: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  onOpenWhereToToday,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FBF6EA] shadow-[0_2px_10px_rgba(22,19,15,0.06)]">
      {/* Top Main Navigation Bar */}
      <div className="h-20 sm:h-24 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between border-b border-[#D9CFB8]">
        {/* Brand Crest & Title */}
        <button 
          onClick={() => onTabChange('sovereign-bench')} 
          className="flex items-center gap-3 sm:gap-3.5 group text-left cursor-pointer focus:outline-none"
        >
          <div className="relative flex items-center justify-center shrink-0">
            <img 
              alt="MCR Lunch Club Crest" 
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-[#001854]/20 shadow-sm transition-transform group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqgP2VMinATbGPTBgGdz_4wqnqb1G3I77nmOy5s6K0rO9FkVS4GTeB3vtY5upA9ScB29X6FIDH_yQaQJw4-_abrDdR5xP-PNE42Xbu7EVgjdIdlvnYUMNZUJ5nrKP4oSH55MwZb1qfyI3v3tUAO-MFao_Yo25bJQrgtsdsKtQUZME6pK-hvSs7G_GQdsmnAvvhVT4NIGqtPDfQgsrW6Cm796GYdH8hV8JLRvlOYPJ1zMw1Y9VMYon8zF4pbKqoaaTwHQ" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-['Playfair_Display'] text-lg sm:text-xl text-[#001854] tracking-tight font-bold group-hover:text-[#1b2f6b] transition-colors leading-tight">
              MCR LUNCH CLUB
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[9px] sm:text-[10px] uppercase text-[#8a5100] tracking-widest font-bold">
              LEDGER OF VERDICTS · MANCHESTER
            </span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 px-2 py-1.5 rounded-full bg-[#F3ECDB]/90 border border-[#D9CFB8]/80 shadow-sm">
          <button 
            onClick={() => onTabChange('sovereign-bench')}
            className={`px-3.5 py-1.5 rounded-full font-['Plus_Jakarta_Sans'] text-[13px] font-semibold transition-all flex items-center gap-1.5 ${
              currentTab === 'sovereign-bench'
                ? 'bg-[#001854] text-white shadow-sm'
                : 'text-[#454650] hover:bg-[#F7F0DF] hover:text-[#001854]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] text-[#ffdcbd]">award_star</span>
            <span>The Sovereign Bench</span>
          </button>

          <button 
            onClick={() => onTabChange('the-manifesto')}
            className={`px-3.5 py-1.5 rounded-full font-['Plus_Jakarta_Sans'] text-[13px] font-semibold transition-all flex items-center gap-1.5 ${
              currentTab === 'the-manifesto'
                ? 'bg-[#001854] text-white shadow-sm'
                : 'text-[#454650] hover:bg-[#F7F0DF] hover:text-[#001854]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] text-[#8a5100]">description</span>
            <span>The Manifesto</span>
          </button>

          <button 
            onClick={() => onTabChange('tiers')}
            className={`px-3.5 py-1.5 rounded-full font-['Plus_Jakarta_Sans'] text-[13px] font-semibold transition-all flex items-center gap-1.5 ${
              currentTab === 'tiers'
                ? 'bg-[#001854] text-white shadow-sm'
                : 'text-[#454650] hover:bg-[#F7F0DF] hover:text-[#001854]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] text-[#1E7A4E]">workspace_premium</span>
            <span>Tiers</span>
          </button>

          <button 
            onClick={() => onTabChange('audits-and-inspections')}
            className={`px-3.5 py-1.5 rounded-full font-['Plus_Jakarta_Sans'] text-[13px] font-semibold transition-all flex items-center gap-1.5 ${
              currentTab === 'audits-and-inspections'
                ? 'bg-[#001854] text-white shadow-sm'
                : 'text-[#454650] hover:bg-[#F7F0DF] hover:text-[#001854]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] text-[#8a5100]">fact_check</span>
            <span>Inspections</span>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] px-1.5 py-0.5 rounded-full bg-[#E8F5EE] text-[#1E7A4E] border border-[#1E7A4E]/20 font-bold ml-0.5">
              90
            </span>
          </button>

          <button 
            onClick={() => onTabChange('hall-of-shame')}
            className={`px-3.5 py-1.5 rounded-full font-['Plus_Jakarta_Sans'] text-[13px] font-semibold transition-all flex items-center gap-1.5 ${
              currentTab === 'hall-of-shame'
                ? 'bg-[#B92B27] text-white shadow-sm'
                : 'text-[#454650] hover:bg-[#F7F0DF] hover:text-[#B92B27]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] text-[#B92B27]">local_fire_department</span>
            <span>Hall of Shame</span>
          </button>
        </nav>

        {/* Action: Where to Today? [12:25] */}
        <div className="flex items-center gap-2">
          <button 
            onClick={onOpenWhereToToday}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#ffdcbd] text-[#2c1600] font-['Plus_Jakarta_Sans'] text-xs sm:text-[13px] border border-[#8a5100]/20 hover:bg-[#ffb86d] transition-all shadow-sm font-semibold cursor-pointer active:scale-95"
          >
            <span className="material-symbols-outlined text-[16px] text-[#8a5100]">casino</span>
            <span className="font-bold">Where To Today?</span>
            <span className="bg-[#F7F0DF]/90 px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] font-bold text-[#8a5100] border border-[#D9CFB8]/60">
              [12:25]
            </span>
          </button>
        </div>
      </div>

      {/* Official Manifesto Sub-Banner */}
      <div className="h-7 bg-[#F7F0DF] border-b border-[#D9CFB8] px-4 sm:px-6 flex items-center justify-between text-[#454650] overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] sm:text-[11px] uppercase tracking-wider text-[#001854] truncate">
            <strong className="text-[#8a5100] font-bold">THE OFFICIAL MANIFESTO:</strong> “We lunch with purpose. We judge with integrity. We return only where deserved.” • Independent venues first • 2.5 Mile Base: Spinningfields Crown Sq
          </span>
          <div className="hidden md:flex items-center gap-2 text-[10px] text-[#757681] shrink-0 ml-4 font-semibold">
            <span>SESSION: MICHAELMAS TERM</span>
            <span>•</span>
            <span className="text-[#1E7A4E] font-bold">BENCH IN SESSION</span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Strip */}
      <div className="lg:hidden flex items-center overflow-x-auto px-4 py-1.5 bg-[#F3ECDB] border-b border-[#D9CFB8] gap-1.5 text-xs">
        <button 
          onClick={() => onTabChange('sovereign-bench')}
          className={`px-2.5 py-1 rounded-full whitespace-nowrap text-xs font-semibold ${
            currentTab === 'sovereign-bench' ? 'bg-[#001854] text-white' : 'text-[#454650]'
          }`}
        >
          Sovereign Bench
        </button>
        <button 
          onClick={() => onTabChange('the-manifesto')}
          className={`px-2.5 py-1 rounded-full whitespace-nowrap text-xs font-semibold ${
            currentTab === 'the-manifesto' ? 'bg-[#001854] text-white' : 'text-[#454650]'
          }`}
        >
          Manifesto
        </button>
        <button 
          onClick={() => onTabChange('tiers')}
          className={`px-2.5 py-1 rounded-full whitespace-nowrap text-xs font-semibold ${
            currentTab === 'tiers' ? 'bg-[#001854] text-white' : 'text-[#454650]'
          }`}
        >
          Tiers
        </button>
        <button 
          onClick={() => onTabChange('audits-and-inspections')}
          className={`px-2.5 py-1 rounded-full whitespace-nowrap text-xs font-semibold ${
            currentTab === 'audits-and-inspections' ? 'bg-[#001854] text-white' : 'text-[#454650]'
          }`}
        >
          Inspections (90)
        </button>
        <button 
          onClick={() => onTabChange('hall-of-shame')}
          className={`px-2.5 py-1 rounded-full whitespace-nowrap text-xs font-semibold ${
            currentTab === 'hall-of-shame' ? 'bg-[#B92B27] text-white' : 'text-[#454650]'
          }`}
        >
          Hall of Shame
        </button>
      </div>
    </header>
  );
};
