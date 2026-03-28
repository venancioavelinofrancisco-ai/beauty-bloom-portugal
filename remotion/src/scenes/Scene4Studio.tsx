import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile } from "remotion";

export const Scene4Studio = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const panX = interpolate(frame, [0, 90], [5, -5], { extrapolateRight: "clamp" });
  const imgOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const textOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });
  const textY = interpolate(spring({ frame: frame - 20, fps, config: { damping: 18 } }), [0, 1], [50, 0]);

  const counterFrame = Math.max(0, frame - 35);
  const count = Math.min(Math.floor(counterFrame * 30), 2300);

  return (
    <AbsoluteFill>
      <Img
        src={staticFile("images/makeup-scene-3.jpg")}
        style={{
          position: "absolute",
          width: "110%",
          height: "110%",
          objectFit: "cover",
          opacity: imgOpacity * 0.5,
          transform: `translateX(${panX}%) scale(1.1)`,
          top: "-5%",
          left: "-5%",
        }}
      />

      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, hsla(340,70%,35%,0.75), hsla(340,60%,45%,0.6))" }} />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 18,
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            letterSpacing: 6,
            marginBottom: 20,
          }}
        >
          Resultados Reais
        </div>

        <div
          style={{
            fontFamily: "serif",
            fontSize: 120,
            fontWeight: 800,
            color: "white",
            textShadow: "0 0 60px rgba(255,255,255,0.3)",
          }}
        >
          +{count.toLocaleString("pt-PT")}
        </div>

        <div
          style={{
            fontFamily: "serif",
            fontSize: 44,
            color: "rgba(255,255,255,0.9)",
            fontWeight: 600,
            marginTop: 10,
          }}
        >
          Mulheres Transformadas
        </div>

        <div
          style={{
            display: "flex",
            gap: 60,
            marginTop: 60,
          }}
        >
          {[
            { num: "4.9⭐", label: "Avaliação" },
            { num: "98%", label: "Recomendam" },
            { num: "12+", label: "Módulos" },
          ].map((stat, i) => {
            const delay = 45 + i * 10;
            const s = spring({ frame: frame - delay, fps, config: { damping: 15 } });
            return (
              <div key={i} style={{ textAlign: "center", transform: `scale(${s})` }}>
                <div style={{ fontFamily: "serif", fontSize: 40, color: "white", fontWeight: 700 }}>
                  {stat.num}
                </div>
                <div style={{ fontFamily: "sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", marginTop: 8, textTransform: "uppercase", letterSpacing: 2 }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
