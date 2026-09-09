import React, { useState, useMemo } from 'react';
import { Image as ImageIcon, Video, Eye, Play, Sparkles, Search, ChevronDown } from 'lucide-react';
import { GALLERY_ITEMS, TRUST_VIDEOS } from '../data/trustData';

const MEDIA_CATEGORIES = [
  "All",
  "Education",
  "Shelter",
  "Meals",
  "Healthcare",
  "Old Age",
  "Women Empowerment",
  "Animal Welfare",
  "Disaster Relief",
  "Community"
];

const CATEGORY_LABELS = {
  "All": "All Photos",
  "Education": "Child Education",
  "Shelter": "Shelter & Foster",
  "Meals": "Food & Ration",
  "Healthcare": "Medical & Camps",
  "Old Age": "Senior Elders",
  "Women Empowerment": "Women Livelihood",
  "Animal Welfare": "Stray Animals",
  "Disaster Relief": "Disaster Relief",
  "Community": "Community Outreach"
};

export default function MediaGalleryView({ onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(18);

  const filteredItems = useMemo(() => {
    let items = GALLERY_ITEMS;
    if (selectedCategory !== "All") {
      items = items.filter(item => item.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.category.toLowerCase().includes(q)
      );
    }
    return items;
  }, [selectedCategory, searchQuery]);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 18);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(18);
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-10">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 lg:p-14 border border-amber-200/80 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-crimson-50 border border-crimson-200 text-crimson-800 px-3.5 py-1.5 rounded-full text-xs font-bold">
              <Sparkles className="w-4 h-4 text-crimson-600" /> Authentic Ground Impact Photography • 280+ Live Archive
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Photo &amp; Video Media Gallery
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Witness authentic moments of relief, nourishment, foster care, and medical aid enabled by our ground teams and compassionate donors across Maharashtra and rural India.
            </p>
          </div>
        </div>
      </section>

      {/* TABS & CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Photos vs Videos Toggle */}
        <div className="flex justify-center">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-1 shadow-sm border border-slate-200">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'photos'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ImageIcon className="w-4 h-4 text-crimson-600" /> Photo Archive ({GALLERY_ITEMS.length})
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'videos'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Video className="w-4 h-4 text-trust-600" /> Video Documentaries ({TRUST_VIDEOS.length})
            </button>
          </div>
        </div>

        {/* Category Pills & Search */}
        {activeTab === 'photos' && (
          <div className="space-y-4">
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search ground photo drives (e.g. ration, school, shelter)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(18);
                }}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 text-xs sm:text-sm bg-white shadow-sm focus:outline-none focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {MEDIA_CATEGORIES.map((cat) => {
                const count = cat === "All" 
                  ? GALLERY_ITEMS.length 
                  : GALLERY_ITEMS.filter(i => i.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                      selectedCategory === cat
                        ? 'bg-crimson-600 text-white shadow-md'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span>{CATEGORY_LABELS[cat] || cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      selectedCategory === cat ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="text-center text-xs text-slate-500 font-medium">
              Showing <strong className="text-slate-900">{displayedItems.length}</strong> of <strong className="text-slate-900">{filteredItems.length}</strong> field photos
            </div>

          </div>
        )}

      </section>

      {/* GALLERY CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'photos' ? (
          <div className="space-y-10">
            
            {/* Grid of Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {displayedItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(item.image, item.title, item.category)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-100 border border-slate-200/80"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Our-Mission.webp";
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="font-display font-bold text-xs sm:text-sm leading-snug mb-1 text-white line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] text-slate-300 font-semibold">
                      <Eye className="w-3.5 h-3.5 text-white" /> View full photo
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center pt-4">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm rounded-full border border-slate-300 shadow-md hover:shadow-lg transition-all"
                >
                  <ChevronDown className="w-4 h-4 text-crimson-600" />
                  <span>Load More Ground Photos ({filteredItems.length - displayedItems.length} remaining)</span>
                </button>
              </div>
            )}

          </div>
        ) : (
          /* Video Tab Showcase */
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-trust-600 uppercase tracking-wider">Documentary Footage</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                Official Video Reports from the Ground
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Watch our real-world operations in action, from children at our Airoli Shelter Home to school distribution drives across Maharashtra.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {TRUST_VIDEOS.map((video) => (
                <div 
                  key={video.id} 
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="aspect-video w-full bg-slate-900 overflow-hidden relative">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold text-crimson-600 uppercase tracking-wider bg-crimson-50 px-2.5 py-1 rounded-full inline-block mb-2">
                        {video.category}
                      </span>
                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug">
                        {video.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {video.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <a
                        href={video.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-trust-700 hover:text-crimson-600 inline-flex items-center gap-1.5 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" /> Watch on YouTube Channel
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

    </div>
  );
}
