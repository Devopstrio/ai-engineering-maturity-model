import React from 'react';

// Devopstrio AI-EMM: Premium Glassmorphic Dashboard
// Design Style: Obsidian & Indigo Corporate Suite

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-indigo-500/30">
            {/* --- Premium Navigation --- */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-xl bg-slate-900/60 transition-all">
                <div className="max-w-screen-2xl mx-auto px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center font-black text-xl">DT</div>
                        <div className="flex flex-col leading-tight">
                            <span className="font-bold text-lg tracking-tight">AI-EMM</span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Enterprise Suite</span>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-10 text-sm font-bold tracking-wide">
                      <a href="#" className="text-slate-400 hover:text-white transition-colors">Global Insights</a>
                      <a href="#" className="text-slate-400 hover:text-white transition-colors">Audit Vault</a>
                      <a href="#" className="text-slate-400 hover:text-white transition-colors">Transformation IQ</a>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-xl shadow-indigo-600/20 transition-all transform hover:scale-105 active:scale-95">
                      New Assessment
                    </button>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-8 max-w-screen-2xl mx-auto">
                {/* --- Hero Executive Summary --- */}
                <header className="mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-tighter mb-4">
                        Diagnostic Live &middot; Fiscal Q4
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-white">Maturity Index <span className="text-indigo-500">3.42</span></h1>
                            <p className="text-slate-400 mt-6 max-w-2xl text-lg font-medium leading-relaxed">
                                Your organization is operating at <span className="text-white border-b border-indigo-500">Level 3: Defined Capability</span>. Engineering rigor is scaling, but architectural governance and LLMOps remain critical bottlenecks for Q1 production goals.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-6 rounded-3xl bg-slate-800/40 border border-white/5 backdrop-blur-md">
                                <span className="text-[10px] font-black text-slate-500 uppercase">Percentile</span>
                                <div className="text-3xl font-black mt-1">Top 12%</div>
                            </div>
                            <div className="p-6 rounded-3xl bg-indigo-600 text-white shadow-2xl shadow-indigo-600/20">
                                <span className="text-[10px] font-black text-white/50 uppercase">Target</span>
                                <div className="text-3xl font-black mt-1">Lvl 4.5</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* --- Interactive Data Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Visual Radar Component */}
                    <div className="lg:col-span-8 group relative rounded-[40px] bg-slate-900/40 border border-white/5 p-12 overflow-hidden transition-all hover:bg-slate-900/60">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-2xl font-black text-white tracking-tight">Multi-Dimensional Maturity Radar</h2>
                            <button className="text-xs font-bold text-slate-500 hover:text-white uppercase">Download Raw Spec</button>
                        </div>
                        <div className="aspect-square max-h-[500px] mx-auto relative flex items-center justify-center">
                            {/* SVG RADAR MOCKUP */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                <div className="w-full h-full border border-slate-700 rounded-full scale-100"></div>
                                <div className="absolute w-[80%] h-[80%] border border-slate-700 rounded-full"></div>
                                <div className="absolute w-[60%] h-[60%] border border-slate-700 rounded-full"></div>
                                <div className="absolute w-[40%] h-[40%] border border-slate-700 rounded-full"></div>
                            </div>
                            <div className="z-10 w-full h-full flex items-center justify-center relative">
                                <div className="w-4/5 h-4/5 bg-indigo-500/20 backdrop-blur-3xl border-2 border-indigo-500 rounded-full shadow-[0_0_80px_rgba(99,102,241,0.3)] animate-pulse-slow"></div>
                                {/* Data Pins */}
                                <div className="absolute top-[20%] left-[20%] w-3 h-3 bg-white rounded-full ring-4 ring-indigo-500/40 shadow-[0_0_20px_white]"></div>
                                <div className="absolute top-[40%] right-[15%] w-3 h-3 bg-white rounded-full ring-4 ring-indigo-500/40"></div>
                                <div className="absolute bottom-[25%] left-[50%] w-3 h-3 bg-white rounded-full ring-4 ring-indigo-500/40"></div>
                            </div>
                        </div>
                        {/* Glow Decorations */}
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]"></div>
                    </div>

                    {/* Domain Insight Cards */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="p-8 rounded-[32px] bg-slate-900 border border-white/10 shadow-2xl">
                            <h3 className="text-white font-bold mb-8">Strategic Domain Benchmarks</h3>
                            <div className="space-y-6">
                                {[
                                    { name: 'LLMOps', score: 1.5, status: 'red' },
                                    { name: 'Security', score: 2.8, status: 'amber' },
                                    { name: 'Data Readiness', score: 4.5, status: 'emerald' },
                                    { name: 'MLOps', score: 3.2, status: 'indigo' }
                                ].map((d, index) => (
                                    <div key={index} className="flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-1.5 h-6 rounded-full bg-${d.status}-500/40 group-hover:h-8 transition-all`}></div>
                                            <span className="font-bold text-slate-300 group-hover:text-white">{d.name}</span>
                                        </div>
                                        <div className="text-xl font-black text-white">{d.score.toFixed(1)}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Integration Action Card */}
                        <div className="p-8 rounded-[32px] bg-indigo-600 shadow-2xl shadow-indigo-600/10 group cursor-pointer overflow-hidden relative">
                             <div className="relative z-10">
                                <h4 className="text-white font-bold text-lg mb-2">Deploy EDPA Foundation</h4>
                                <p className="text-indigo-100 text-sm leading-relaxed mb-6">Your data readiness maturity (Lvl 2) is blocking Level 4 certification. Resolve gaps in 4 clicks.</p>
                                <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-colors">
                                    Initiate Blueprint
                                </button>
                             </div>
                             {/* Decorative Gradient */}
                             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-all"></div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Dashboard;
