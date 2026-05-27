"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "../../../components/ThemeProvider";
import Image from "next/image";

export default function AdminLogin() {
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        // Force a hard navigation to apply the middleware cookie properly
        window.location.href = "/admin";
      } else {
        const data = await res.json();
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Network error occurred");
    }

    setLoading(false);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${isDark ? 'bg-[#0a0a0f] text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-96 bg-orange-600/20 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className={`relative z-10 w-full max-w-md p-8 sm:p-10 rounded-[2rem] shadow-2xl ${isDark ? 'bg-[#12121a]/80 backdrop-blur-xl border border-white/5' : 'bg-white border border-slate-200'}`}>
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-2xl overflow-hidden relative bg-white dark:bg-[#0a0a0f] border border-slate-200 dark:border-white/10 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
            <Image src="/logo.png" alt="Logo" fill className="object-contain p-2" priority />
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-black tracking-tight mb-2">Admin Portal</h1>
          <p className="text-sm text-slate-500 font-medium">Sign in to manage Ultra DISHTV</p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm font-bold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all font-medium"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all font-medium"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-xl font-black tracking-wide shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Authenticating..." : "Secure Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
