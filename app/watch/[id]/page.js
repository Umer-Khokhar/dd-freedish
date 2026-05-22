"use client";
import { useState, useEffect, use } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const CustomVideoPlayer = dynamic(
  () => import("../../../components/VideoPlayer"),
  {
    ssr: false,
    loading: () => (
      <div className="px-4 sm:px-6 w-full">
        <div className="w-full aspect-video bg-black rounded-2xl flex items-center justify-center">
          <div className="w-12 h-12 border-[3px] border-white/20 border-t-orange-500 rounded-full animate-spin" />
        </div>
      </div>
    ),
  },
);

export default function WatchPage({ params }) {
  const { id } = use(params);
  const [channels, setChannels] = useState([]);
  const [channel, setChannel] = useState(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    fetch("/channels.js")
      .then((res) => res.text())
      .then((text) => {
        try {
          const getChannels = new Function(`${text}\nreturn channels;`);
          const parsed = getChannels();
          if (Array.isArray(parsed)) {
            setChannels(parsed);
            const found = parsed.find((c) => c.id === id);
            if (found) setChannel(found);
          }
        } catch (err) {
          console.error("Error parsing channels:", err);
        }
      });
  }, [id]);

  const relatedChannels = channels
    .filter(
      (c) => channel && c.category === channel.category && c.id !== channel.id,
    )
    .slice(0, 8);

  const logoSrc =
    channel?.logo &&
    !channel.logo.startsWith("data:image/jpeg;base64") &&
    !imgError
      ? channel.logo
      : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0f] transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto pb-16 pt-4 sm:pt-6">
        {/* Back Button */}
        <div className="px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-semibold mb-4 sm:mb-5 px-4 py-2 rounded-xl bg-white dark:bg-[#15151f] border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-orange-500 hover:border-orange-500 dark:hover:text-orange-500 dark:hover:border-orange-500 transition-all duration-200 shadow-sm"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Channels
          </Link>
        </div>

        {/* Video Player */}
        <div className="animate-fade-in-up w-full px-4 sm:px-6">
          <CustomVideoPlayer url={channel?.url} channelName={channel?.name} />
        </div>

        {/* Channel Info Section */}
        {channel && (
          <div className="px-4 sm:px-6">
            <div
              className="animate-fade-in-up mt-3 sm:mt-6 p-3 sm:p-6 rounded-xl sm:rounded-[20px] bg-white dark:bg-[#15151f] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3 sm:gap-5 transition-colors duration-300"
              style={{ animationDelay: "100ms" }}
            >
              {/* Channel Logo */}
              <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl shrink-0 bg-slate-50 dark:bg-[#0a0a0f] border border-slate-200 dark:border-slate-800 flex items-center justify-center overflow-hidden">
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={channel.name}
                    onError={() => setImgError(true)}
                    className="max-w-[90%] max-h-[90%] object-contain"
                  />
                ) : (
                  <span
                    className="text-[18px] sm:text-[28px] font-black text-transparent bg-clip-text"
                    style={{ backgroundImage: "var(--accent-gradient)" }}
                  >
                    {channel.name.replace(/^(IN:|PK:)\s*/i, "").charAt(0)}
                  </span>
                )}
              </div>

              {/* Channel Details */}
              <div className="flex-1 min-w-0">
                <h1 className="text-[16px] sm:text-[22px] font-black text-slate-900 dark:text-white tracking-tight mb-1 sm:mb-1.5">
                  {channel.name}
                </h1>
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-[12px] font-bold text-orange-500">
                    {channel.category}
                  </span>
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[12px] sm:text-[13px] font-bold text-green-500">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 live-pulse" />
                    Live Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Channels */}
        {relatedChannels.length > 0 && (
          <div className="px-4 sm:px-6">
            <div
              className="animate-fade-in-up mt-8 sm:mt-10"
              style={{ animationDelay: "200ms" }}
            >
              <h2 className="text-[18px] font-bold text-slate-900 dark:text-white mb-4 sm:mb-5 tracking-tight">
                Related Channels
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {relatedChannels.map((rc, idx) => (
                  <RelatedChannelCard key={rc.id} channel={rc} index={idx} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function RelatedChannelCard({ channel, index }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  const logoSrc =
    channel.logo &&
    !channel.logo.startsWith("data:image/jpeg;base64") &&
    !imgErr
      ? channel.logo
      : null;

  return (
    <Link
      href={`/watch/${channel.id}`}
      className="group block rounded-[14px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#15151f] shadow-sm hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(249,115,22,0.1)] transition-all duration-300 overflow-hidden"
      style={{
        animationDelay: `${index * 40}ms`,
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-[100px] flex items-center justify-center bg-slate-50 dark:bg-[#0a0a0f] relative p-3">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={channel.name}
            onError={() => setImgErr(true)}
            className={`w-full h-full object-contain transition-transform duration-500 ${hovered ? "scale-110" : "scale-100"}`}
            loading="lazy"
          />
        ) : (
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-[20px] font-black"
            style={{ background: "var(--accent-gradient)" }}
          >
            {channel.name.replace(/^(IN:|PK:)\s*/i, "").charAt(0)}
          </div>
        )}

        {/* Play overlay on hover */}
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
        >
          <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center shadow-lg transform transition-transform duration-300 scale-90 group-hover:scale-100">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="white"
              className="ml-0.5"
            >
              <polygon points="6 3 20 12 6 21" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-slate-200 dark:border-slate-800">
        <h3 className="text-[13px] font-bold text-slate-900 dark:text-white truncate">
          {channel.name}
        </h3>
      </div>
    </Link>
  );
}
