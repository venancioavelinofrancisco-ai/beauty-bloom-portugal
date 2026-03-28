import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile } from "remotion";

export const Scene1Intro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleY = interpolate(spring({ frame, fps, config: { damping: 15, stiffness: 80 } }), [0, 1], [80, 0]);
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const subtitleOpacity = interpolate(frame, [25, 45], [0, 1], { extrapolateRight: "clamp" });
  const subtitleY = interpolate(spring({ frame: frame - 25, fps, config: { damping: 20 } }), [0, 1], [40, 0]);

  const imgScale = interpolate(spring({ frame: frame - 10, fps, config: { damping: 12 } }), [0, 1], [1.1, 1]);
  const imgOpacity = interpolate(frame, [10, 30], [0, 1], { extrapolateRight: "clamp" });

  const shimmer = interpolate(frame, [0, 100], [-100, 200]);

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Background image with overlay */}
      <Img
        src={staticFile("images/makeup-scene-1.jpg")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: imgOpacity * 0.35,
          transform: `scale(${imgScale})`,
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(180,50,80,0.7) 0%, rgba(120,30,60,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 120px" }}>
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            fontFamily: "serif",
            fontSize: 90,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            textShadow: "0 4px 30px rgba(0,0,0,0.3)",
          }}
        >
          Automaquiagem
        </div>

        {/* Shimmer line */}
        <div
          style={{
            width: 300,
            height: 3,
            margin: "30px auto",
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.8) ${shimmer}%, transparent)`,
            borderRadius: 2,
            opacity: interpolate(frame, [15, 30], [0, 1], { extrapolateRight: "clamp" }),
          }}
        />

        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            fontFamily: "sans-serif",
            fontSize: 36,
            color: "rgba(255,255,255,0.9)",
            fontWeight: 500,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          A Arte de Te Sentires Linda
        </div>
      </div>
    </AbsoluteFill>
  );
};
