"use client";

import { Player } from "@remotion/player";
import { DemoVideo } from "@/components/remotion/DemoVideo";

export default function DemoVideoPage() {
    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-8">
            <div className="max-w-4xl w-full flex flex-col items-center">
                <h1 className="text-4xl font-bold text-white mb-4">Remotion in Next.js Demo</h1>
                <p className="text-neutral-400 mb-12 text-center max-w-xl">
                    Hier ist euer erstes programmatisches Video direkt im Browser.
                    Gebaut in React, abgespielt mit dem Remotion Player.
                </p>

                <div className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,51,102,0.15)] border border-neutral-800 w-full aspect-video bg-black">
                    <Player
                        component={DemoVideo}
                        durationInFrames={180}
                        compositionWidth={1920}
                        compositionHeight={1080}
                        fps={30}
                        controls
                        autoPlay
                        loop
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
