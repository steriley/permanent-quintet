export interface ManifestoArticle {
  article: string;
  title: string;
  decree: string;
}

export const MANIFESTO_ARTICLES: ManifestoArticle[] = [
  {
    article: 'Article I',
    title: 'The Purpose of Midday Nourishment',
    decree: 'We lunch with purpose. We judge with integrity. We return only where deserved. The midday meal shall not be treated as a mere administrative necessity, but as the supreme civil prerogative of the working day.'
  },
  {
    article: 'Article II',
    title: 'The Primacy of the Independent Venue',
    decree: 'Independent establishments possessing passion, artisanal craft, and character shall receive statutory preference over faceless national conglomerates. Sourdough baked with intent will forever outrank chilled cardboard triangles.'
  },
  {
    article: 'Article III',
    title: 'The 2.5-Mile Crown Square Radius',
    decree: 'Jurisdiction extends strictly within a 2.5-mile walking radius centered upon Spinningfields Crown Square Assizes. Venues requiring motorised vehicular transport require special dispensation signed by at least three Chairs.'
  },
  {
    article: 'Article IV',
    title: 'Crumb and Structural Integrity Standards',
    decree: 'A sandwich or toastie that collapses structurally under its own weight, or suffers fatal liquid migration from tomato or dressing prior to the fourth bite, commits a class-one statutory violation.'
  },
  {
    article: 'Article V',
    title: 'The Two-Inspection Rule for Approved Status',
    decree: 'No establishment may ascend to the Approved Sovereign Bench upon a single fortunate visit. At least two unannounced inspections under disparate meteorological conditions are required.'
  },
  {
    article: 'Article VI',
    title: 'The Anti-Meal-Deal Sanction',
    decree: 'Factory-chilled triangular sandwiches sealed in nitrogen gas are formally classified as emergency survival rations, eligible only for the "If We Must" or "Docket Sanctions" classification.'
  },
  {
    article: 'Article VII',
    title: 'Finality of Verdicts',
    decree: 'No right of appeal is recognized. All decisions of the Chairs are final, irrevocable, and entered into the Crown Square Accord in perpetuity.'
  }
];

export interface BriberyEntry {
  id: string;
  date: string;
  donor: string;
  offeredGraft: string;
  verdict: 'REFUSED & SANCTIONED' | 'CONFISCATED FOR DESTRUCTION' | 'RETURNED UNDER PROTEST';
  chairNotes: string;
}

export const BRIBERY_REGISTER: BriberyEntry[] = [
  {
    id: 'GRAFT-2024-001',
    date: '14 Oct 2024',
    donor: 'Spinningfields Corporate Sandwich Syndicate',
    offeredGraft: 'Complimentary loyalty card pre-stamped with 9 hot beverage tokens',
    verdict: 'REFUSED & SANCTIONED',
    chairNotes: 'Tendered in an unseemly effort to soften the Hardman Square Docket Sanction. Incinerated in committee.'
  },
  {
    id: 'GRAFT-2024-002',
    date: '28 Sep 2024',
    donor: 'Anonymous Pret Franchise Representative',
    offeredGraft: 'Plate of complimentary mini almond croissants during morning hearing',
    verdict: 'CONFISCATED FOR DESTRUCTION',
    chairNotes: 'Samples subjected to pastry flake density testing; failed Article IV. Consumed by the bailiff with stern disapproval.'
  },
  {
    id: 'GRAFT-2024-003',
    date: '19 Aug 2024',
    donor: 'Deansgate Burrito Joint (Under Review)',
    offeredGraft: 'Free extra guacamole upgrade voucher',
    verdict: 'RETURNED UNDER PROTEST',
    chairNotes: 'Guacamole value cannot purchase judicial leniency when tortilla foil wrapping causes steam soggy base.'
  },
  {
    id: 'GRAFT-2024-004',
    date: '02 Jun 2024',
    donor: 'Ancoats Sourdough Lobbyist',
    offeredGraft: 'Fresh loaf of 48-hour fermented rye bread tied with hemp string',
    verdict: 'REFUSED & SANCTIONED',
    chairNotes: 'While crust density was undeniably sublime, the gift violated impartiality protocols. Left on church doorstep.'
  }
];

export const TRIBUNAL_CHAIRS = [
  {
    name: 'Sir Alistair Finchley KC',
    title: 'Lord Presiding Inspector of Lunch',
    specialty: 'Bread Tensile Dynamics & Focaccia Compliance',
    favorite: 'Bada Bing Special',
    quote: 'If the crumb surrenders to the olive oil, the case is dismissed.'
  },
  {
    name: 'Dame Eleanor Vance',
    title: 'High Commissioner of Fermentation & Crust',
    specialty: 'Neapolitan Sourdough & Craft Ferments',
    favorite: "Rudy's Calabrese",
    quote: 'Show me blistered cornicione or show me the exit.'
  },
  {
    name: 'Marcus Sterling Esq.',
    title: 'Tribune for Confectionery Decorum',
    specialty: 'Pastry Lamination & Sweet Finishes',
    favorite: 'Siop Shop Welsh Jam Sourdough',
    quote: 'A meal without a dignified crust conclusion is merely sustenance.'
  },
  {
    name: 'Dr. Tariq Al-Mansoor',
    title: 'Chief Custodian of Mancunian Heritage',
    specialty: 'Rice \'n\' Three, Curries & Northern Street Food',
    favorite: 'This & That Lamb Karahi',
    quote: 'Three curries on rice is Manchester’s true constitutional pillar.'
  }
];
