"use client";
import { useState, useEffect, use, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const CustomVideoPlayer = dynamic(() => import("../../../components/VideoPlayer"), {
  ssr: false,
  loading: () => <div className="w-full aspect-video bg-black flex items-center justify-center"><div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" /></div>,
});

const formatCategory = (cat) => {
  if (!cat || cat === "All") return "All";
  return cat.replace(/^(IN|PK)[^\w]*/i, "").replace(/[^\w]*LIVE$/i, "").trim();
};

export default function WatchPage({ params }) {
  const { id } = use(params);
  const [channels, setChannels] = useState([]);
  const [channel, setChannel] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch("/channels.js")
      .then((res) => res.text())
      .then((text) => {
        const getChannels = new Function(`${text}\nreturn channels;`);
        const parsed = getChannels();
        if (Array.isArray(parsed)) {
          setChannels(parsed);
          const found = parsed.find((c) => c.id === id);
          if (found) setChannel(found);
          const saved = localStorage.getItem("selectedCategory");
          if (saved) setSelectedCategory(saved);
        }
      })
      .catch(console.error);
  }, [id]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setIsDropdownOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const categories = ["All", ...new Set(channels.map((c) => c.category))];
  const filteredChannels = channels.filter(
    (c) =>
      (selectedCategory === "All" || c.category === selectedCategory) &&
      c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="h-12 flex items-center justify-between px-3 bg-black border-b border-white/10">
        <Link href="/" className="text-xs font-bold px-2 py-1 hover:bg-white/5 rounded">← Home</Link>
        <span className="text-xs font-bold truncate px-2">{channel?.name || "Select"}</span>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Player */}
        <div className="flex-1 flex flex-col min-h-0 lg:border-r lg:border-white/10">
          <div className="flex-1"><CustomVideoPlayer url={channel?.url} channelName={channel?.name} /></div>
          {channel && <div className="p-2 bg-black border-t border-white/10 lg:hidden"><h2 className="text-xs font-bold">{channel.name}</h2><p className="text-xs text-white/40">{channel.category}</p></div>}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-60 bg-black border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col min-h-0">
          <div className="p-2 border-b border-white/10"><input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded text-xs focus:outline-none focus:border-white/30" /></div>
          <div className="p-2 border-b border-white/10" ref={dropdownRef}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full flex items-center justify-between px-2 py-1.5 bg-white/5 border border-white/10 rounded text-xs font-bold hover:bg-white/10"><span className="truncate">{formatCategory(selectedCategory)}</span><span className="text-[8px] ml-1">▼</span></button>
            {isDropdownOpen && (<div className="absolute top-24 left-0 right-0 lg:left-60 bg-black border border-white/10 rounded mt-1 z-50 max-h-40 overflow-y-auto">{categories.map((cat) => (<button key={cat} onClick={() => {setSelectedCategory(cat); localStorage.setItem("selectedCategory", cat); setIsDropdownOpen(false);}} className={`w-full px-2 py-1.5 text-xs text-left hover:bg-white/10 border-b border-white/5 ${selectedCategory === cat ? "bg-white/20" : ""}`}>{formatCategory(cat)}</button>))}</div>)}
          </div>
          <div className="flex-1 overflow-y-auto">{filteredChannels.map((c) => (<Link key={c.id} href={`/watch/${c.id}`} className={`block px-2 py-1.5 text-xs border-b border-white/5 hover:bg-white/5 ${c.id === id ? "bg-white/10 font-bold" : ""}`}><div className="font-bold truncate">{c.name}</div><div className="text-white/40 text-[10px]">{c.category}</div></Link>))}</div>
        </div>
      </div>
    </div>
  );
}
