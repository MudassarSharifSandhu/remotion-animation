import React from 'react';
import { interpolate, spring, useCurrentFrame, } from 'remotion';


export const Subtitle: React.FC = () => {
  const frame = useCurrentFrame();
  const durationInFrames = 100;
  const fromFlexGrow = 0; 
  const toFlexGrow = 1; 

  const interpolatedFlexGrow = spring({
    frame,
    fps: 30,
    config: {
      mass: 0.5,
      damping: 10,
    },
    from: fromFlexGrow,
    to: toFlexGrow,
    durationInFrames,
  });

  return (
    <div
      style={{
        flexGrow: interpolatedFlexGrow,
        width: '400px',
        height: '200px',
      }}
    >
      Your component's content
      <TextComponent text={"text component"} />
    </div>
  );
};

const TextComponent: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const durationInFrames = 100; // Animation duration in frames
  const fromFlexShrink = 1; // Initial flex-grow value
  const toFlexShrink = 0; // Target flex-grow value

  const interpolatedFlexGrow = spring({
    frame,
    fps: 30,
    config: {
      mass: 0.5,
      damping: 10,
    },
    from: fromFlexShrink,
    to: toFlexShrink,
    durationInFrames,
  });

  const opacity = interpolate(frame, [0, 500], [0, 1], {
    extrapolateRight: 'clamp'
  })

  const marginLeft = interpolate(frame, [0, 5], [1, 1], {
    extrapolateRight: 'clamp'
  })


  const x = interpolate(frame, [0, 500], [-33, 0]);


  return (

    <div
      style={{
        width: '200px',
        flexShrink: interpolatedFlexGrow,
        backgroundColor: 'beige',
        marginLeft: marginLeft,
        opacity: opacity,
        transform: `translateX(${x}px)`,
        textAlign:'center'
      }}
    >
      {text}
    </div>

  );
}

