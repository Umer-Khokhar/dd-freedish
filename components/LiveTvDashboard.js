'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('./VideoPlayer'), { 
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video bg-black/90 rounded-2xl flex items-center justify-center border border-white/5 shadow-2xl">
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-white/50 mt-4 font-medium">Loading player...</span>
      </div>
    </div>
  )
});

export default function LiveTvDashboard() {
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch channels.js as text and safely parse it
    fetch('/channels.js')
      .then((res) => res.text())
      .then((text) => {
        try {
          // Since it's a local file in the format "const channels = [ ... ];",
          // we can safely execute it and return the array without polluting window.
          const getChannels = new Function(`${text}\nreturn channels;`);
          const parsedChannels = getChannels();
          if (Array.isArray(parsedChannels)) {
            setChannels(parsedChannels);
          }
        } catch (err) {
          console.error("Error parsing channels.js:", err);
        }
      })
      .catch(err => console.error("Error fetching channels.js:", err));
  }, []);

  const filteredChannels = channels.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-indigo-500/30">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              LiveTV<span className="text-indigo-500">Pro</span>
            </h1>
          </div>
          
          <div className="relative w-64 md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search channels..."
              className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full leading-5 bg-white/5 text-sm placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Video Player Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl p-1 bg-gradient-to-b from-white/5 to-transparent">
            <VideoPlayer url={selectedChannel?.url} />
          </div>
          
          <div className="bg-white/5 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-2">
              {selectedChannel ? selectedChannel.name : 'No Channel Selected'}
            </h2>
            <p className="text-white/40 text-sm">
              {selectedChannel 
                ? 'Now playing live. Connection established securely through proxy.' 
                : 'Select a channel from the list to start watching.'}
            </p>
          </div>
        </div>

        {/* Channel List Column */}
        <div className="flex flex-col h-[calc(100vh-12rem)]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold tracking-wide">Live Channels</h2>
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-medium border border-indigo-500/20">
              {filteredChannels.length} Online
            </span>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
            {filteredChannels.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-40 text-white/30">
                <p>No channels found</p>
              </div>
            ) : (
              filteredChannels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setSelectedChannel(channel)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${
                    selectedChannel?.id === channel.id
                      ? 'bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30'
                      : 'bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    selectedChannel?.id === channel.id
                      ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                      : 'bg-white/10 text-white/60 group-hover:bg-white/20 group-hover:text-white'
                  }`}>
                    {/* Placeholder for Channel Logo */}
                    <span className="font-bold text-lg">
                      {channel.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className={`font-medium truncate transition-colors duration-300 ${
                      selectedChannel?.id === channel.id ? 'text-white' : 'text-white/80 group-hover:text-white'
                    }`}>
                      {channel.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs text-white/40 group-hover:text-white/50 transition-colors duration-300">Live Stream</span>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
