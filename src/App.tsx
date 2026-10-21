import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { SovereignBenchView } from './components/SovereignBenchView';
import { InspectionsView } from './components/InspectionsView';
import { ManifestoView } from './components/ManifestoView';
import { TiersView } from './components/TiersView';
import { HallOfShameView } from './components/HallOfShameView';
import { WhereToTodayModal } from './components/WhereToTodayModal';
import { AuditModal } from './components/AuditModal';
import { RouteModal } from './components/RouteModal';
import { BriberyModal } from './components/BriberyModal';
import { SuggestVenueModal } from './components/SuggestVenueModal';
import { Footer } from './components/Footer';
import { VENUES } from './data/venues';
import { Venue, TierType } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('sovereign-bench');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<TierType | 'all'>('all');
  const [maxWalkMinutes, setMaxWalkMinutes] = useState<number | null>(null);

  // Default active venue is Bada Bing Sandwich Deli (#01)
  const [selectedVenue, setSelectedVenue] = useState<Venue>(VENUES[0]);

  // Modals state
  const [isWhereToTodayOpen, setIsWhereToTodayOpen] = useState(false);
  const [auditVenue, setAuditVenue] = useState<Venue | null>(null);
  const [routeVenue, setRouteVenue] = useState<Venue | null>(null);
  const [isBriberyOpen, setIsBriberyOpen] = useState(false);
  const [isSuggestOpen, setIsSuggestOpen] = useState(false);
  const [testimonyTargetVenue, setTestimonyTargetVenue] = useState<Venue | null>(null);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Filtered venues based on search & walk restrictions
  const filteredVenues = useMemo(() => {
    return VENUES.filter((venue) => {
      if (selectedTier !== 'all' && venue.tier !== selectedTier) return false;
      if (maxWalkMinutes !== null && venue.walkMinutes > maxWalkMinutes) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = venue.name.toLowerCase().includes(query);
        const matchCategory = venue.category.toLowerCase().includes(query);
        const matchStreet = venue.street.toLowerCase().includes(query);
        const matchDish = venue.coreMandateOrder.toLowerCase().includes(query);
        if (!matchName && !matchCategory && !matchStreet && !matchDish) return false;
      }
      return true;
    });
  }, [searchQuery, selectedTier, maxWalkMinutes]);

  // Keyboard shortcut: ⌘K or Ctrl+K to focus search or toggle Where to Today
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[placeholder*="Search docket"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // When selected venue isn't in filtered list, pick the first available or default
  useEffect(() => {
    if (filteredVenues.length > 0 && !filteredVenues.some((v) => v.id === selectedVenue.id)) {
      setSelectedVenue(filteredVenues[0]);
    }
  }, [filteredVenues]);

  const sanctionedVenues = useMemo(() => {
    return VENUES.filter((v) => v.tier === 'sanction');
  }, []);

  return (
    <div className="bg-[#FBF6EA] min-h-screen font-['Plus_Jakarta_Sans'] text-[#1e1b17] flex flex-col antialiased">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onTabChange={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenWhereToToday={() => setIsWhereToTodayOpen(true)}
      />

      {/* Main Page Area */}
      <main className="w-full bg-[#FBF6EA] flex-1 pt-28 sm:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4">
          {/* Parliamentary Filter & Control Strip (visible on main views) */}
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedTier={selectedTier}
            onTierChange={setSelectedTier}
            maxWalkMinutes={maxWalkMinutes}
            onMaxWalkChange={setMaxWalkMinutes}
          />

          {/* Main Screens View Routing */}
          {currentTab === 'sovereign-bench' && (
            <SovereignBenchView
              venues={filteredVenues}
              selectedVenue={selectedVenue}
              onSelectVenue={(v) => {
                setSelectedVenue(v);
              }}
              onOpenAudit={(v) => setAuditVenue(v)}
              onOpenRoute={(v) => setRouteVenue(v)}
              onOpenTestimony={(v) => {
                setTestimonyTargetVenue(v);
                setIsSuggestOpen(true);
              }}
            />
          )}

          {currentTab === 'audits-and-inspections' && (
            <InspectionsView
              venues={filteredVenues}
              selectedTier={selectedTier}
              onTierChange={setSelectedTier}
              onOpenAudit={(v) => setAuditVenue(v)}
              onOpenRoute={(v) => setRouteVenue(v)}
            />
          )}

          {currentTab === 'the-manifesto' && (
            <ManifestoView
              onOpenSuggestVenue={() => {
                setTestimonyTargetVenue(null);
                setIsSuggestOpen(true);
              }}
              onOpenBriberyRegister={() => setIsBriberyOpen(true)}
            />
          )}

          {currentTab === 'tiers' && (
            <TiersView
              onSelectTierFilter={(tier) => {
                setSelectedTier(tier as any);
                setCurrentTab('audits-and-inspections');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {currentTab === 'hall-of-shame' && (
            <HallOfShameView
              sanctionedVenues={sanctionedVenues}
              onOpenAudit={(v) => setAuditVenue(v)}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer
        onNavigateTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBriberyRegister={() => setIsBriberyOpen(true)}
        onOpenSuggestVenue={() => {
          setTestimonyTargetVenue(null);
          setIsSuggestOpen(true);
        }}
      />

      {/* Modals */}
      <WhereToTodayModal
        isOpen={isWhereToTodayOpen}
        onClose={() => setIsWhereToTodayOpen(false)}
        venues={VENUES}
        onSelectAndInspect={(venue) => {
          setSelectedVenue(venue);
          setAuditVenue(venue);
          setCurrentTab('sovereign-bench');
        }}
      />

      <AuditModal
        venue={auditVenue}
        onClose={() => setAuditVenue(null)}
        onOpenRoute={(v) => setRouteVenue(v)}
      />

      <RouteModal
        venue={routeVenue}
        onClose={() => setRouteVenue(null)}
      />

      <BriberyModal
        isOpen={isBriberyOpen}
        onClose={() => setIsBriberyOpen(false)}
      />

      <SuggestVenueModal
        isOpen={isSuggestOpen}
        targetVenue={testimonyTargetVenue}
        onClose={() => {
          setIsSuggestOpen(false);
          setTestimonyTargetVenue(null);
        }}
        onSubmitted={(vName) => {
          showToast(`Sworn testimony regarding "${vName}" logged to Michaelmas Session.`);
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#001854] text-white px-4 py-3 rounded-xl shadow-2xl border-2 border-[#ffdcbd] flex items-center gap-2.5 animate-bounce">
          <span className="material-symbols-outlined text-[#ffdcbd] text-lg">verified</span>
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
