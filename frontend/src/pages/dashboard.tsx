import React, { useState, useEffect } from 'react';

// Devopstrio AI-EMM: Premium Analytics Dashboard
// Framework: Next.js 14 + TailwindCSS + TypeScript

interface MaturityDomain {
    name: string;
    score: number;
    level: string;
    status: 'critical' | 'stable' | 'optimal';
}

const ExecutiveDashboard: React.FC = () => {
    const [maturityIndex, setMaturityIndex] = useState(3.42);
    const [domains, setDomains] = useState<MaturityDomain[]>([
        { name: 'LLMOps', score: 1.5, level: 'Initial', status: 'critical' },
        { name: 'Strategy', score: 4.2, level: 'Managed', status: 'optimal' },
        { name: 'Security', score: 2.8, level: 'Repeatable', status: 'stable' },
        { name: 'Governance', score: 3.5, level: 'Defined', status: 'stable' }
    ]);

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans">
            {/* --- Global Header --- */}
            <nav className="bg-white border-b px-10 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">DT</div>
                    <span className="font-bold text-xl tracking-tight">AI-EMM <span className="text-slate-400 font-normal">v3.0</span></span>
                </div>
                <div className="flex items-center gap-6 text-sm font-medium">
                    <button className="text-slate-600 hover:text-indigo-600 transition">Portfolio</button>
                    <button className="text-slate-600 hover:text-indigo-600 transition">Audit History</button>
                    <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition shadow-md">New Assessment</button>
                </div>
            </nav>

            {/* --- Hero Stat Section --- */}
            <div className="max-w-7xl mx-auto px-10 py-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <span className="uppercase text-xs font-bold text-indigo-600 tracking-widest">Global Maturity Score</span>
                        <h2 className="text-6xl font-black mt-2 text-slate-900">{maturityIndex} <span className="text-2xl text-slate-400 font-medium">/ 5.0</span></h2>
                        <p className="mt-4 text-slate-500 max-w-md italic">Balanced performance across 12 domains. Engineering rigor is increasing, but governance gaps remain.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border text-center min-w-[140px]">
                            <p className="text-xs font-bold text-slate-400 uppercase">Percentile</p>
                            <p className="text-2xl font-bold text-slate-900 mt-1">Top 15%</p>
                        </div>
                        <div className="bg-slate-900 px-6 py-4 rounded-2xl shadow-xl text-center min-w-[140px] text-white">
                            <p className="text-xs font-bold text-slate-400 uppercase">Target Level</p>
                            <p className="text-2xl font-bold mt-1">4.5</p>
                        </div>
                    </div>
                </div>

                {/* --- Grid Layout --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Radar Chart (Structural Placeholder) */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-sm border border-slate-100 min-h-[450px] relative overflow-hidden">
                        <h3 className="font-bold text-lg mb-8">Maturity Radar Portfolio</h3>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
                            {/* Concept: SVG Radar Path would go here */}
                            <div className="w-[300px] h-[300px] border-[1px] border-slate-200 rounded-full flex items-center justify-center">
                                <div className="w-[200px] h-[200px] border-[1px] border-slate-200 rounded-full flex items-center justify-center">
                                    <div className="w-[100px] h-[100px] bg-indigo-50 border border-indigo-200 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Critical Domain Heatmap */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-bold px-2 text-slate-500 uppercase text-xs tracking-widest">Domain Breakdown</h3>
                        {domains.map((d, index) => (
                            <div key={index} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center group hover:border-indigo-200 transition-all cursor-pointer">
                                <div>
                                    <p className="font-bold text-slate-800">{d.name}</p>
                                    <p className="text-xs text-slate-400">Level: {d.level}</p>
                                </div>
                                <div className="text-right">
                                    <span className={`text-sm font-black p-2 rounded-lg ${d.status === 'critical' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-emerald-500'}`}>
                                        {d.score.toFixed(1)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Enterprise Action Roadmap */}
                    <div className="lg:col-span-3 bg-white rounded-3xl p-10 shadow-sm border border-slate-100 mt-4">
                        <h3 className="font-bold text-lg mb-6">Strategic Remediation Roadmap</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-red-500">
                                <p className="font-bold text-slate-900">Immediate: LLMOps</p>
                                <p className="text-sm text-slate-500 mt-2">Deploy centralized prompting libraries and validation gates.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-amber-500">
                                <p className="font-bold text-slate-900">Short-term: Security</p>
                                <p className="text-sm text-slate-500 mt-2">Integrate Devopstrio 12-Factor Scanner into production pipelines.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-emerald-500">
                                <p className="font-bold text-slate-900">Mid-term: Strategy</p>
                                <p className="text-sm text-slate-500 mt-2">Scale AI-first culture through CCoE maturity workshops.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExecutiveDashboard;
