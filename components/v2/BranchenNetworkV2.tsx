'use client';

import { useEffect, useRef, useState } from 'react';
import { Stethoscope, Hammer, ShoppingCart, Truck, Factory, Store, Building, Tractor, Share2, X } from 'lucide-react';

interface BranchData {
    title: string;
    icon: React.ElementType;
    painpoints: string[];
}

const branchData: Record<string, BranchData> = {
    'healthcare': {
        title: 'Healthcare',
        icon: Stethoscope,
        painpoints: ['Patient-Triage langsam', 'Dokumentation als Zeitfresser', 'Datenschutz kritisch & komplex']
    },
    'handwerk': {
        title: 'Handwerk',
        icon: Hammer,
        painpoints: ['Terminverwaltung Chaos', 'Angebote dauern zu lang', 'Zettelwirtschaft & Papierbasiert']
    },
    'ecommerce': {
        title: 'E-Commerce',
        icon: ShoppingCart,
        painpoints: ['Content-Produktion manuell', 'Bestandsverwaltung reaktiv', 'Customer Service überlastet']
    },
    'logistik': {
        title: 'Logistik',
        icon: Truck,
        painpoints: ['Route-Optimierung manuell', 'Tracking unübersichtlich', 'Fehlerquoten hoch']
    },
    'industrie': {
        title: 'Industrie',
        icon: Factory,
        painpoints: ['Predictive Maintenance fehlt', 'Qualitätskontrolle langsam', 'Isolierte Datensilos']
    },
    'handel': {
        title: 'Handel',
        icon: Store,
        painpoints: ['Kassenintegration isoliert', 'Bestandsdaten veraltet', 'Personal-Planung manuell']
    },
    'realestate': {
        title: 'Real Estate',
        icon: Building,
        painpoints: ['Verwaltung analog', 'Besichtigungen unorganisiert', 'Dokumentation Chaos']
    },
    'landwirtschaft': {
        title: 'Landwirtschaft',
        icon: Tractor,
        painpoints: ['Wetterdaten ignoriert', 'Aussaat nach Bauchgefühl', 'Ertragsvariabilität hoch']
    },
    'socialmedia': {
        title: 'Social-Media',
        icon: Share2,
        painpoints: ['Content-Planung chaotisch', 'Posting manuell & zeitaufwendig', 'Performance ungemessen']
    }
};

const keys = Object.keys(branchData);

export default function BranchenNetworkV2() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [activeBranch, setActiveBranch] = useState<string>('healthcare');
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Nodes state to persist across renders
    const nodesRef = useRef<any[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const nodeCount = 40;
        const connectionDistance = 150;

        const resizeCanvas = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
            }
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        if (nodesRef.current.length === 0) {
            for (let i = 0; i < nodeCount; i++) {
                nodesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1,
                    baseColor: '#e5e5e5',
                    highlightColor: '#9eff20',
                    group: Math.floor(Math.random() * keys.length)
                });
            }
        }

        const activeBranchIndex = keys.indexOf(activeBranch);

        // Force nodes to move towards center slightly when active changes
        nodesRef.current.forEach(node => {
            if (node.group === activeBranchIndex) {
                node.vx += (canvas.width / 2 - node.x) * 0.001;
                node.vy += (canvas.height / 2 - node.y) * 0.001;
            }
        });

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            nodesRef.current.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            });

            const nodes = nodesRef.current;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);

                        const isActiveGroup = nodes[i].group === activeBranchIndex || nodes[j].group === activeBranchIndex;

                        if (isActiveGroup && dist < connectionDistance * 0.8) {
                            ctx.strokeStyle = `rgba(158, 255, 32, ${1 - dist / connectionDistance})`; // lime
                            ctx.lineWidth = 1.5;
                        } else {
                            ctx.strokeStyle = `rgba(200, 200, 200, ${(1 - dist / connectionDistance) * 0.3})`; // subtle gray
                            ctx.lineWidth = 0.5;
                        }
                        ctx.stroke();
                    }
                }
            }

            nodes.forEach(node => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = (node.group === activeBranchIndex) ? node.highlightColor : node.baseColor;
                if (node.group === activeBranchIndex) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = '#9eff20';
                } else {
                    ctx.shadowBlur = 0;
                }
                ctx.fill();
            });
            ctx.shadowBlur = 0;

            animationFrameId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [activeBranch]);

    const handleBranchClick = (key: string) => {
        if (key === activeBranch) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveBranch(key);
            setIsTransitioning(false);
        }, 300);
    };

    const data = branchData[activeBranch];
    const ActiveIcon = data.icon;

    return (
        <section id="branchen" className="py-32 px-6 bg-[#ffffff] border-t border-[#c7c7c7]/30 overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="v2-text-h2 mb-20 v2-reveal-element text-[#000000]">Branchen, die wir verstehen</h2>

                <div className="flex flex-col lg:flex-row min-h-[600px] border border-[#c7c7c7] bg-gray-50/50 relative">
                    <div className="w-full lg:w-1/4 border-b lg:border-b-0 lg:border-r border-[#c7c7c7] p-8 flex flex-col gap-4 z-10 bg-white/50 backdrop-blur-sm">
                        {keys.map((key) => (
                            <button
                                key={key}
                                onClick={() => handleBranchClick(key)}
                                className={`branch-btn text-left py-2 relative text-xl transition-colors ${activeBranch === key ? 'active text-[#000000]' : 'text-[#7a7a7a] hover:text-[#000000]'}`}
                            >
                                {branchData[key].title}
                            </button>
                        ))}
                    </div>

                    <div className="w-full lg:w-2/4 relative h-[400px] lg:h-auto overflow-hidden">
                        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
                    </div>

                    <div className="w-full lg:w-1/4 border-t lg:border-t-0 lg:border-l border-[#c7c7c7] p-8 bg-white/80 backdrop-blur-sm z-10 flex flex-col justify-center min-h-[400px]">
                        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-[#9eff20] text-[#000000] rounded-sm">
                                <ActiveIcon size={24} />
                            </div>
                            <h3 className="v2-text-h4 mb-6 text-[#000000]">{data.title}</h3>
                            <p className="text-sm font-bold uppercase tracking-widest text-[#7a7a7a] mb-4">Zentrale Painpoints:</p>
                            <ul className="space-y-4 v2-text-p text-[#000000] font-medium">
                                {data.painpoints.map((pp, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <X className="text-red-500 mt-1 shrink-0" size={20} />
                                        <span>{pp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
