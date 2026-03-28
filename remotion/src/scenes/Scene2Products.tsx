import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile } from "remotion";

export const Scene2Products = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const imgX = interpolate(spring({ frame, fps, config: { damping: 18 } }), [0, 1], [-200, 0]);
  const imgOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const textOpacity = interpolate(frame, [15, 35], [0, 1], { extrapolateRight: "clamp" });
  const textX = interpolate(spring({ frame: frame - 15, fps, config: { damping: 15 } }), [0, 1], [100, 0]);

  const badgeScale = spring({ frame: frame - 40, fps, config: { damping: 10, stiffness: 150 } });

  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "row" }}>
      {/* Left: Product image */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <Img
          src={staticFile("images/makeup-products.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: imgOpacity,
            transform: `translateX(${imgX}px) scale(1.05)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, transparent 60%, hsl(340, 65%, 45%) 100%)",
          }}
        />
      </div>

      {/* Right: Text */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          opacity: textOpacity,
          transform: `translateX(${textX}px)`,
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 18,
            color: "rgba(255,255,255,0.7)",
            textTransform: "uppercase",
            letterSpacing: 4,
            marginBottom: 20,
          }}
        >
          Produtos Acessíveis
        </div>
        <div
          style={{
            fontFamily: "serif",
            fontSize: 60,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.2,
            marginBottom: 30,
          }}
        >
          Tudo o que precisas já está na tua cidade
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 24,
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.6,
          }}
        >
          Primor · Wells · Sephora
        </div>

        {/* Badge */}
        <div
          style={{
            marginTop: 40,
            transform: `scale(${badgeScale})`,
            background: "rgba(255,255,255,0.15)",
            border: "2px solid rgba(255,255,255,0.3)",
            borderRadius: 20,
            padding: "16px 32px",
            display: "inline-block",
            width: "fit-content",
          }}
        >
          <span style={{ fontFamily: "sans-serif", fontSize: 20, color: "white", fontWeight: 600 }}>
            💄 +2.300 alunas satisfeitas
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
