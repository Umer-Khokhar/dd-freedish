import ChannelGrid from "../components/ChannelGrid";

export const metadata = {
  title: "ultra DISHTV - Premium Live TV Platform",
  description:
    "Watch thousands of premium live channels, movies, and sports directly in your browser.",
};

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-orange-500/30">
      <div className="relative z-20 pt-8">
        <ChannelGrid />
      </div>
    </div>
  );
}
