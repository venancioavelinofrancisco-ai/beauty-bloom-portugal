import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { Scene1Intro } from "./scenes/Scene1Intro";
import { Scene2Products } from "./scenes/Scene2Products";
import { Scene3Application } from "./scenes/Scene3Application";
import { Scene4Studio } from "./scenes/Scene4Studio";
import { Scene5CTA } from "./scenes/Scene5CTA";

export const MainVideo = () => {
  const frame = useCurrentFrame();

  const bgHue = interpolate(frame, [0, 450], [340, 350]);
  const bgSat = interpolate(frame, [0, 450], [60, 70]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, hsl(${bgHue}, ${bgSat}%, 45%) 0%, hsl(${bgHue - 5}, ${bgSat - 10}%, 55%) 50%, hsl(${bgHue}, ${bgSat}%, 40%) 100%)`,
      }}
    >
      {/* Floating decorative circles */}
      <FloatingCircles frame={frame} />

      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={100}>
          <Scene1Intro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={90}>
          <Scene2Products />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={100}>
          <Scene3Application />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={90}>
          <Scene4Studio />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={130}>
          <Scene5CTA />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

const FloatingCircles = ({ frame }: { frame: number }) => {
  const y1 = Math.sin(frame * 0.02) * 30;
  const y2 = Math.cos(frame * 0.015) * 40;
  const y3 = Math.sin(frame * 0.025) * 25;

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 100 + y1,
          right: 150,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 80 + y2,
          left: 100,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 400 + y3,
          left: "50%",
          width: 150,
          height: 150,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
        }}
      />
    </>
  );
};
