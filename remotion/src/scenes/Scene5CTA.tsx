import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const Scene5CTA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgPulse = Math.sin(frame * 0.05) * 5;

  const titleScale = spring({ frame, fps, config: { damping: 10, stiffness: 100 } });
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const priceOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });
  const priceScale = spring({ frame: frame - 30, fps, config: { damping: 8, stiffness: 150 } });

  const urgencyOpacity = interpolate(frame, [55, 75], [0, 1], { extrapolateRight: "clamp" });
  const urgencyPulse = 1 + Math.sin(frame * 0.1) * 0.03;

  const badgeOpacity = interpolate(frame, [80, 95], [0, 1], { extrapolateRight: "clamp" });
  const badgeY = interpolate(spring({ frame: frame - 80, fps, config: { damping: 12 } }), [0, 1], [30, 0]);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 50%, hsl(340, 75%, ${50 + bgPulse}%) 0%, hsl(340, 80%, ${30 + bgPulse}%) 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Sparkle decorations */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 350 + Math.sin(frame * 0.03 + i) * 30;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 960 + Math.cos(angle + frame * 0.01) * radius,
              top: 540 + Math.sin(angle + frame * 0.01) * radius,
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.4)",
              opacity: interpolate(frame, [10, 30], [0, 1], { extrapolateRight: "clamp" }),
            }}
          />
        );
      })}

      <div
        style={{
          textAlign: "center",
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
        }}
      >
        <div
          style={{
            fontFamily: "serif",
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
            textShadow: "0 4px 40px rgba(0,0,0,0.3)",
          }}
        >
          Não Fiques de Fora
        </div>
      </div>

      <div
        style={{
          marginTop: 40,
          opacity: priceOpacity,
          transform: `scale(${priceScale})`,
          textAlign: "center",
        }}
      >
        <div style={{ fontFamily: "sans-serif", fontSize: 24, color: "rgba(255,255,255,0.6)", textDecoration: "line-through", marginBottom: 8 }}>
          De 97€
        </div>
        <div style={{ fontFamily: "serif", fontSize: 100, fontWeight: 800, color: "white", textShadow: "0 0 40px rgba(255,255,255,0.3)" }}>
          27,99€
        </div>
        <div style={{ fontFamily: "sans-serif", fontSize: 20, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>
          Acesso vitalício · Certificado incluído
        </div>
      </div>

      {/* Urgency */}
      <div
        style={{
          marginTop: 50,
          opacity: urgencyOpacity,
          transform: `scale(${urgencyPulse})`,
          background: "rgba(220, 40, 40, 0.3)",
          border: "2px solid rgba(255,100,100,0.5)",
          borderRadius: 20,
          padding: "18px 48px",
        }}
      >
        <span style={{ fontFamily: "sans-serif", fontSize: 24, color: "white", fontWeight: 700 }}>
          ⚠️ ÚLTIMAS 17 VAGAS — O preço sobe em breve!
        </span>
      </div>

      {/* Bottom badge */}
      <div
        style={{
          marginTop: 40,
          opacity: badgeOpacity,
          transform: `translateY(${badgeY}px)`,
          fontFamily: "sans-serif",
          fontSize: 18,
          color: "rgba(255,255,255,0.5)",
        }}
      >
        💄 Já são +2.300 alunas · 47 pessoas a ver agora
      </div>
    </AbsoluteFill>
  );
};
