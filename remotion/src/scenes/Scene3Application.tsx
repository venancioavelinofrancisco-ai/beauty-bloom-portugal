import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile } from "remotion";

export const Scene3Application = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const imgScale = interpolate(frame, [0, 100], [1.15, 1], { extrapolateRight: "clamp" });
  const imgOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const overlayOpacity = interpolate(frame, [0, 30], [0.9, 0.5], { extrapolateRight: "clamp" });

  const steps = [
    { text: "Preparação da Pele", delay: 10 },
    { text: "Base & Corretivo", delay: 25 },
    { text: "Contorno & Blush", delay: 40 },
    { text: "Olhos & Lábios", delay: 55 },
  ];

  return (
    <AbsoluteFill>
      {/* Full background image */}
      <Img
        src={staticFile("images/makeup-scene-2.jpg")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: imgOpacity,
          transform: `scale(${imgScale})`,
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, hsl(340, 70%, 40%, ${overlayOpacity}) 0%, hsl(340, 60%, 30%, ${overlayOpacity + 0.2}) 100%)`,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontFamily: "serif",
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            marginBottom: 60,
            opacity: interpolate(frame, [5, 20], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(spring({ frame: frame - 5, fps, config: { damping: 15 } }), [0, 1], [30, 0])}px)`,
          }}
        >
          Passo a Passo
        </div>

        <div style={{ display: "flex", gap: 30 }}>
          {steps.map((step, i) => {
            const s = spring({ frame: frame - step.delay, fps, config: { damping: 12, stiffness: 120 } });
            return (
              <div
                key={i}
                style={{
                  transform: `scale(${s}) translateY(${interpolate(s, [0, 1], [20, 0])}px)`,
                  opacity: interpolate(frame, [step.delay, step.delay + 15], [0, 1], { extrapolateRight: "clamp" }),
                  background: "rgba(255,255,255,0.12)",
                  border: "2px solid rgba(255,255,255,0.25)",
                  borderRadius: 24,
                  padding: "40px 36px",
                  textAlign: "center",
                  width: 260,
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 16 }}>
                  {["✨", "💧", "🎨", "💋"][i]}
                </div>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 22,
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  {step.text}
                </div>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.5)",
                    marginTop: 8,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                  }}
                >
                  Módulo {i + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
