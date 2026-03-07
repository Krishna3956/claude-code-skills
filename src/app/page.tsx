import Image from "next/image";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#FFFFFF",
        gap: 32,
      }}
    >
      <Image
        src="/logos/hwyk-lockup-light.png"
        alt="How Well You Know"
        width={720}
        height={120}
        priority
        style={{ objectFit: "contain" }}
      />
      <p
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#94a3b8",
        }}
      >
        Coming Soon
      </p>
    </div>
  );
}
