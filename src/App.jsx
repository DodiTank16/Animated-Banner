import React, { useState } from "react";
import BannerOne from "./HeroBanner";
import BannerTwo from "./CurtainsHeroBanner";

const banners = [BannerOne, BannerTwo];

const App = () => {
  const [activeBannerIndex, setActiveBannerIndex] = useState(null);

  const nextBanner = () => {
    setActiveBannerIndex((prev) =>
      prev < banners.length - 1 ? prev + 1 : prev
    );
  };

  const prevBanner = () => {
    setActiveBannerIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const ActiveBanner =
    activeBannerIndex !== null ? banners[activeBannerIndex] : null;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER (only after selection) */}
      {activeBannerIndex !== null && (
        <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 bg-black/70 z-50">
          <button
            onClick={prevBanner}
            disabled={activeBannerIndex === 0}
            className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 disabled:opacity-40"
          >
            Previous
          </button>

          <button
            onClick={nextBanner}
            disabled={activeBannerIndex === banners.length - 1}
            className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 disabled:opacity-40"
          >
            Next
          </button>
        </header>
      )}

      {/* INITIAL OPTIONS */}
      {activeBannerIndex === null && (
        <div className="min-h-screen flex items-center justify-center gap-6">
          <button
            onClick={() => setActiveBannerIndex(0)}
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-xl font-semibold"
          >
            Banner 1
          </button>

          <button
            onClick={() => setActiveBannerIndex(1)}
            className="px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-xl font-semibold"
          >
            Banner 2
          </button>
        </div>
      )}

      {/* BANNER VIEW */}
      {ActiveBanner && (
        <div className="pt-16">
          <ActiveBanner />
        </div>
      )}
    </div>
  );
};

export default App;
