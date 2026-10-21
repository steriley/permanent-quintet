import React, { useState } from 'react';
import { Venue } from '../types';

interface SuggestVenueModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetVenue?: Venue | null;
  onSubmitted: (venueName: string) => void;
}

export const SuggestVenueModal: React.FC<SuggestVenueModalProps> = ({
  isOpen,
  onClose,
  targetVenue,
  onSubmitted,
}) => {
  const [name, setName] = useState(targetVenue ? targetVenue.name : '');
  const [street, setStreet] = useState(targetVenue ? targetVenue.street : '');
  const [signatureDish, setSignatureDish] = useState(targetVenue ? targetVenue.coreMandateOrder : '');
  const [testimony, setTestimony] = useState('');
  const [petitionerName, setPetitionerName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setIsSuccess(true);
    setTimeout(() => {
      onSubmitted(name);
      setIsSuccess(false);
      setName('');
      setStreet('');
      setSignatureDish('');
      setTestimony('');
      setPetitionerName('');
      onClose();
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#F7F0DF] w-full max-w-lg rounded-2xl border-2 border-[#D9CFB8] shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#0e1b44] text-white px-5 py-4 border-b border-[#8a5100]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffdcbd] text-xl">
              {targetVenue ? 'edit_note' : 'add_task'}
            </span>
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold text-[#ffdcbd] tracking-widest block">
                CITIZEN PETITION TO THE CHAIRS
              </span>
              <h2 className="font-['Playfair_Display'] text-lg font-bold text-[#fff8f3]">
                {targetVenue ? `Testimony on ${targetVenue.name}` : 'Suggest Venue for Statutory Audit'}
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

        {/* Form Body */}
        {isSuccess ? (
          <div className="p-8 text-center flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#E8F5EE] text-[#1E7A4E] flex items-center justify-center text-2xl font-bold">
              ✓
            </div>
            <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#001854]">
              Petition Gazetted to the Standing Docket
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#454650] max-w-xs">
              Your sworn testimony has been delivered to the Lord Presiding Inspector for surprise delegation review.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-3.5 text-xs font-['Plus_Jakarta_Sans']">
            <div>
              <label className="font-bold text-[#001854] block mb-1">
                Establishment Name:
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Pollen, Flat Baker, Wilderness..."
                className="w-full p-2 bg-white border border-[#D9CFB8] rounded-lg text-[#1e1b17] focus:ring-2 focus:ring-[#001854] outline-none"
              />
            </div>

            <div>
              <label className="font-bold text-[#001854] block mb-1">
                Street / Area (Within 2.5 Miles of Crown Sq):
              </label>
              <input
                type="text"
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="e.g. Tib Street, Ancoats, Oxford Road..."
                className="w-full p-2 bg-white border border-[#D9CFB8] rounded-lg text-[#1e1b17] focus:ring-2 focus:ring-[#001854] outline-none"
              />
            </div>

            <div>
              <label className="font-bold text-[#001854] block mb-1">
                Mandate Dish to Inspect:
              </label>
              <input
                type="text"
                required
                value={signatureDish}
                onChange={(e) => setSignatureDish(e.target.value)}
                placeholder="e.g. Pastrami Reuben, Sourdough Slice, Karahi..."
                className="w-full p-2 bg-white border border-[#D9CFB8] rounded-lg text-[#1e1b17] focus:ring-2 focus:ring-[#001854] outline-none"
              />
            </div>

            <div>
              <label className="font-bold text-[#001854] block mb-1">
                Citizen Observations (Crumb Integrity, Dispatch Speed, Value):
              </label>
              <textarea
                rows={3}
                required
                value={testimony}
                onChange={(e) => setTestimony(e.target.value)}
                placeholder="Describe why this establishment warrants the attention of the Four Chairs..."
                className="w-full p-2 bg-white border border-[#D9CFB8] rounded-lg text-[#1e1b17] focus:ring-2 focus:ring-[#001854] outline-none"
              />
            </div>

            <div>
              <label className="font-bold text-[#001854] block mb-1">
                Petitioner Name / Title (Optional):
              </label>
              <input
                type="text"
                value={petitionerName}
                onChange={(e) => setPetitionerName(e.target.value)}
                placeholder="e.g. J. Smith, Clerk of Spinningfields"
                className="w-full p-2 bg-white border border-[#D9CFB8] rounded-lg text-[#1e1b17] focus:ring-2 focus:ring-[#001854] outline-none"
              />
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-[#F3ECDB] text-[#454650] font-bold hover:bg-[#efe7e0] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-[#001854] text-white font-bold hover:bg-[#1b2f6b] cursor-pointer"
              >
                Submit Sworn Petition
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
