"use client";
import { useState, useEffect } from "react";
import { useTheme } from "../../components/ThemeProvider";

export default function AdminDashboard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [activeTab, setActiveTab] = useState("settings");
  
  // Settings State
  const [providers, setProviders] = useState({});
  const [settingsLoading, setSettingsLoading] = useState(true);

  // Channels State
  const [channels, setChannels] = useState([]);
  const [channelsLoading, setChannelsLoading] = useState(true);
  const [search, setSearch] = useState("");
  
  // Modals
  const [editingProvider, setEditingProvider] = useState(null);
  const [editingChannel, setEditingChannel] = useState(null);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  useEffect(() => {
    fetchSettings();
    fetchChannels();
  }, []);

  const fetchSettings = async () => {
    setSettingsLoading(true);
    try {
      const res = await fetch("/api/admin/settings");
      const data = await res.json();
      setProviders(data.providers || {});
    } catch (e) {
      console.error(e);
    }
    setSettingsLoading(false);
  };

  const fetchChannels = async () => {
    setChannelsLoading(true);
    try {
      const res = await fetch("/api/admin/channels");
      const data = await res.json();
      setChannels(data || []);
    } catch (e) {
      console.error(e);
    }
    setChannelsLoading(false);
  };

  const saveSettings = async (newProviders) => {
    try {
      await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ providers: newProviders }),
      });
      setProviders(newProviders);
    } catch (e) {
      console.error(e);
      alert("Failed to save settings");
    }
  };

  const saveChannels = async (newChannels) => {
    try {
      await fetch("/api/admin/channels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newChannels),
      });
      setChannels(newChannels);
    } catch (e) {
      console.error(e);
      alert("Failed to save channels");
    }
  };

  // -- Providers Handlers --
  const handleSaveProvider = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const host = fd.get("host");
    const username = fd.get("username");
    const password = fd.get("password");
    const isNew = fd.get("isNew") === "true";
    const oldHost = fd.get("oldHost");

    const newProviders = { ...providers };
    if (!isNew && oldHost !== host) {
      delete newProviders[oldHost];
    }
    newProviders[host] = { username, password };
    
    saveSettings(newProviders);
    setEditingProvider(null);
  };

  const handleDeleteProvider = (host) => {
    if (!confirm(`Delete provider ${host}?`)) return;
    const newProviders = { ...providers };
    delete newProviders[host];
    saveSettings(newProviders);
  };

  // -- Channels Handlers --
  const handleSaveChannel = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const isNew = fd.get("isNew") === "true";
    
    const newChannel = {
      id: fd.get("id"),
      name: fd.get("name"),
      logo: fd.get("logo"),
      category: fd.get("category"),
      url: fd.get("url"),
      type: fd.get("type") || "live"
    };

    let newChannels = [...channels];
    if (isNew) {
      newChannels.unshift(newChannel);
    } else {
      const idx = newChannels.findIndex(c => c.id === newChannel.id);
      if (idx !== -1) newChannels[idx] = newChannel;
    }
    
    saveChannels(newChannels);
    setEditingChannel(null);
  };

  const handleDeleteChannel = (id) => {
    if (!confirm(`Delete channel ID ${id}?`)) return;
    const newChannels = channels.filter(c => c.id !== id);
    saveChannels(newChannels);
  };

  const filteredChannels = channels.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.category.toLowerCase().includes(search.toLowerCase())
  );

  const uniqueCategories = Array.from(new Set(channels.map((c) => c.category))).sort();
  const filteredCategories = editingChannel ? uniqueCategories.filter(c => c.toLowerCase().includes((editingChannel.category || '').toLowerCase())) : uniqueCategories;

  return (
    <div className={`min-h-screen pt-24 px-6 pb-20 ${isDark ? 'bg-[#0a0a0f] text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-black tracking-tight">Admin Dashboard</h1>
          <button 
            onClick={async () => {
              await fetch('/api/admin/logout', { method: 'POST' });
              window.location.href = '/admin/login';
            }}
            className="px-4 py-2 bg-slate-100 dark:bg-white/5 hover:bg-red-100 dark:hover:bg-red-500/20 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 rounded-lg font-bold text-sm transition-colors border border-slate-200 dark:border-white/10"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-slate-200 dark:border-white/10 pb-4">
          <button 
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-2.5 rounded-xl font-bold transition-all ${activeTab === 'settings' ? 'bg-orange-500 text-white shadow-lg' : 'bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10'}`}
          >
            Provider Settings
          </button>
          <button 
            onClick={() => setActiveTab('channels')}
            className={`px-6 py-2.5 rounded-xl font-bold transition-all ${activeTab === 'channels' ? 'bg-orange-500 text-white shadow-lg' : 'bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10'}`}
          >
            Channels Manager
          </button>
        </div>

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold">Stream Providers</h2>
                <p className="text-sm text-slate-500 mt-1">Manage global usernames and passwords for streaming servers.</p>
              </div>
              <button 
                onClick={() => setEditingProvider({ isNew: true, host: '', username: '', password: '' })}
                className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold hover:opacity-90"
              >
                + Add Provider
              </button>
            </div>
            
            {settingsLoading ? <p>Loading...</p> : (
              <div className="grid gap-4 md:grid-cols-2">
                {Object.entries(providers).map(([host, creds]) => (
                  <div key={host} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg text-orange-500">{host}</h3>
                      <div className="flex gap-2">
                        <button onClick={() => setEditingProvider({ isNew: false, oldHost: host, host, ...creds })} className="text-sm px-3 py-1 bg-slate-100 dark:bg-white/10 rounded-md font-bold hover:bg-slate-200 dark:hover:bg-white/20">Edit</button>
                        <button onClick={() => handleDeleteProvider(host)} className="text-sm px-3 py-1 bg-red-100 dark:bg-red-500/20 text-red-600 rounded-md font-bold hover:bg-red-200 dark:hover:bg-red-500/30">Delete</button>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-medium">Username</div>
                      <div className="font-mono text-sm bg-slate-50 dark:bg-black/50 p-2 rounded-md border border-slate-100 dark:border-white/5 mt-1">{creds.username}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-medium">Password</div>
                      <div className="font-mono text-sm bg-slate-50 dark:bg-black/50 p-2 rounded-md border border-slate-100 dark:border-white/5 mt-1">••••••••</div>
                    </div>
                  </div>
                ))}
                {Object.keys(providers).length === 0 && (
                  <div className="col-span-2 p-8 text-center text-slate-500 border border-dashed rounded-2xl border-slate-300 dark:border-white/20">
                    No providers configured.
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Channels Tab */}
        {activeTab === 'channels' && (
          <div className="animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h2 className="text-xl font-bold">Channels ({channels.length})</h2>
                <p className="text-sm text-slate-500 mt-1">Add, edit, or remove channels from the grid.</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-orange-500 outline-none w-full md:w-64"
                />
                <button 
                  onClick={() => setEditingChannel({ isNew: true, id: Date.now().toString(), name: '', url: '', logo: '', category: 'General' })}
                  className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold hover:opacity-90 whitespace-nowrap"
                >
                  + Add Channel
                </button>
              </div>
            </div>

            {channelsLoading ? <p>Loading...</p> : (
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 dark:bg-black/40 text-slate-500 border-b border-slate-200 dark:border-white/10">
                      <tr>
                        <th className="p-4 font-bold">Logo</th>
                        <th className="p-4 font-bold">Name</th>
                        <th className="p-4 font-bold">Category</th>
                        <th className="p-4 font-bold max-w-xs">URL</th>
                        <th className="p-4 font-bold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                      {filteredChannels.slice(0, 100).map(c => (
                        <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                          <td className="p-4">
                            {c.logo ? <img src={c.logo} className="w-10 h-10 object-contain bg-slate-100 dark:bg-black/50 rounded-md p-1" /> : <div className="w-10 h-10 bg-orange-100 dark:bg-orange-500/20 text-orange-500 rounded-md flex items-center justify-center font-bold">{c.name.charAt(0)}</div>}
                          </td>
                          <td className="p-4 font-bold">{c.name}</td>
                          <td className="p-4 text-slate-500">
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/10 rounded text-[10px] uppercase font-bold">{c.category}</span>
                          </td>
                          <td className="p-4 font-mono text-xs text-slate-500 truncate max-w-[200px]" title={c.url}>{c.url}</td>
                          <td className="p-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button onClick={() => setEditingChannel({ isNew: false, ...c })} className="px-3 py-1.5 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 rounded-md font-bold text-xs transition-colors">Edit</button>
                              <button onClick={() => handleDeleteChannel(c.id)} className="px-3 py-1.5 bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 text-red-600 rounded-md font-bold text-xs transition-colors">Delete</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {filteredChannels.length > 100 && (
                  <div className="p-4 text-center text-sm text-slate-500 border-t border-slate-200 dark:border-white/10">
                    Showing first 100 results. Use search to find specific channels.
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </div>

      {/* Provider Modal */}
      {editingProvider && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleSaveProvider} className={`w-full max-w-md p-6 rounded-2xl shadow-2xl ${isDark ? 'bg-[#15151f] border border-white/10' : 'bg-white'}`}>
            <h2 className="text-xl font-bold mb-4">{editingProvider.isNew ? 'Add Provider' : 'Edit Provider'}</h2>
            <input type="hidden" name="isNew" value={editingProvider.isNew} />
            <input type="hidden" name="oldHost" value={editingProvider.oldHost || ''} />
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-500 mb-1">Host / Domain (e.g., xx96.uk:8880)</label>
                <input required name="host" defaultValue={editingProvider.host} className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:border-orange-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 mb-1">Username</label>
                <input required name="username" defaultValue={editingProvider.username} className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:border-orange-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 mb-1">Password</label>
                <input required name="password" defaultValue={editingProvider.password} className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:border-orange-500 outline-none" />
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-8">
              <button type="button" onClick={() => setEditingProvider(null)} className="px-4 py-2 rounded-lg font-bold hover:bg-slate-100 dark:hover:bg-white/10">Cancel</button>
              <button type="submit" className="px-6 py-2 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 shadow-lg shadow-orange-500/30">Save</button>
            </div>
          </form>
        </div>
      )}

      {/* Channel Modal */}
      {editingChannel && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleSaveChannel} className={`w-full max-w-xl p-6 rounded-2xl shadow-2xl ${isDark ? 'bg-[#15151f] border border-white/10' : 'bg-white'}`}>
            <h2 className="text-xl font-bold mb-4">{editingChannel.isNew ? 'Add Channel' : 'Edit Channel'}</h2>
            <input type="hidden" name="isNew" value={editingChannel.isNew} />
            <input type="hidden" name="id" value={editingChannel.id} />
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-500 mb-1">Name</label>
                <input required name="name" defaultValue={editingChannel.name} className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:border-orange-500 outline-none font-bold" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 mb-1">Stream URL</label>
                <input required name="url" defaultValue={editingChannel.url} className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:border-orange-500 outline-none font-mono text-sm" placeholder="http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1234" />
                <p className="text-[11px] text-slate-400 mt-1">Use <code className="text-orange-500 font-bold">{`{USERNAME}`}</code> and <code className="text-orange-500 font-bold">{`{PASSWORD}`}</code> to use provider credentials automatically, or leave actual credentials if provider isn't setup.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-bold text-slate-500 mb-1">Category</label>
                  <input 
                    required 
                    name="category" 
                    value={editingChannel.category} 
                    onChange={e => {
                      setEditingChannel({ ...editingChannel, category: e.target.value });
                      setCategoryDropdownOpen(true);
                    }}
                    onFocus={() => setCategoryDropdownOpen(true)}
                    onBlur={() => setTimeout(() => setCategoryDropdownOpen(false), 200)}
                    className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:border-orange-500 outline-none text-sm font-bold" 
                    placeholder="Type or select category" 
                    autoComplete="off"
                  />
                  {categoryDropdownOpen && filteredCategories.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-white/10 rounded-lg shadow-xl max-h-48 overflow-y-auto">
                      {filteredCategories.map(cat => (
                        <div 
                          key={cat} 
                          onMouseDown={() => {
                            setEditingChannel({ ...editingChannel, category: cat });
                            setCategoryDropdownOpen(false);
                          }}
                          className="px-4 py-2 text-sm font-medium hover:bg-orange-500/10 hover:text-orange-500 cursor-pointer transition-colors"
                        >
                          {cat}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-500 mb-1">Type</label>
                  <select name="type" defaultValue={editingChannel.type || 'live'} className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:border-orange-500 outline-none text-sm font-bold">
                    <option value="live">Live TV</option>
                    <option value="vod">VOD / Movie</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 mb-1">Logo URL (optional)</label>
                <input name="logo" defaultValue={editingChannel.logo || ''} className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:border-orange-500 outline-none text-sm" />
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-8">
              <button type="button" onClick={() => setEditingChannel(null)} className="px-4 py-2 rounded-lg font-bold hover:bg-slate-100 dark:hover:bg-white/10">Cancel</button>
              <button type="submit" className="px-6 py-2 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 shadow-lg shadow-orange-500/30">Save Channel</button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
