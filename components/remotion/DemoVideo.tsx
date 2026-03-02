import { AbsoluteFill, useVideoConfig, useCurrentFrame, spring, interpolate } from "remotion";

export const DemoVideo = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Spring animation for scaling up
    const scale = spring({
        fps,
        frame,
        config: {
            damping: 15,
        },
    });

    // Fade in effect for the text below
    const opacity = interpolate(frame, [30, 60], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // Slight move up effect
    const translateY = interpolate(frame, [30, 60], [20, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill
            style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#000000",
                color: "white",
                fontFamily: "Inter, sans-serif"
            }}
        >
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
            }}>
                <div style={{
                    transform: `scale(${scale})`,
                    fontSize: "120px",
                    fontWeight: 800,
                    background: "-webkit-linear-gradient(45deg, #FF3366, #FF9933)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    Hallo Leo & Marvin!
                </div>
                <div style={{
                    opacity,
                    transform: `translateY(${translateY}px)`,
                    fontSize: "48px",
                    marginTop: "40px",
                    color: "#A0A0A0"
                }}>
                    Willkommen zu <span style={{ color: '#fff', fontWeight: 'bold' }}>Remotion</span>.
                </div>
                <div style={{
                    opacity: interpolate(frame, [60, 90], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
                    transform: `translateY(${interpolate(frame, [60, 90], [20, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}px)`,
                    fontSize: "32px",
                    marginTop: "20px",
                    color: "#666"
                }}>
                    Dies ist ein programmierbares React-Video in eurem Projekt.
                </div>
            </div>
        </AbsoluteFill>
    );
};
