import Flower from "@/components/Flower";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(160deg, #e0f4ff 0%, #fce4ec 45%, #e8f5e9 100%)",
      }}
    >
      {/* Flower wrapper — fixed size, subtle float animation */}
      <div
        className="w-56 h-72 drop-shadow-2xl select-none"
        style={{
          animation: "gentle-sway 4s ease-in-out 2.2s infinite",
        }}
      >
        <Flower />
      </div>

      {/* Caption */}
      <p
        className="mt-8 text-rose-400 text-sm tracking-widest uppercase font-light"
        style={{ opacity: 0, animation: "center-pop 0.6s ease-out 1.4s both" }}
      >
        blooming for you
      </p>
    </main>
  );
}
