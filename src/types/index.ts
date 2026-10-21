export type TierType = 
  | 'approved'
  | 'deliberation'
  | 'assessed'
  | 'sanction'
  | 'reluctant'
  | 'archived';

export interface InspectionScore {
  crumbStructuralIntegrity: number; // e.g. 9.6
  speedOfDispatch: number;          // e.g. 9.2
  valueRatio: number;                // e.g. 9.5
  sittingDignity: number;            // e.g. 8.8
  overallScore: number;              // e.g. 9.4
}

export interface Venue {
  id: string;
  number: string; // e.g. '#01'
  name: string;
  category: string;
  street: string;
  area: string;
  distanceMiles: number;
  walkMinutes: number;
  queueTimeMinutes: string;
  price: '£' | '££' | '£££';
  tier: TierType;
  tierLabel: string;
  inspectionsCount: number;
  lastInspectionDate: string;
  isQuintet?: boolean;
  quintetRank?: number;
  image: string;
  coreMandateOrder: string;
  verdictQuote: string;
  inspectorCite: string;
  scores: InspectionScore;
  mapCoords: {
    x: number; // on 400x460 map container
    y: number;
  };
  notes: string[];
  sanctionReason?: string;
  takeawayScore?: number;
}
