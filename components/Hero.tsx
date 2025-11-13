import React from 'react';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="mt-6">
      <div className="grid lg:grid-cols-5 gap-8 bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-rose-100/50" style={{background: 'radial-gradient(circle at top left, #9f123915, #ffffff)'}}>
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Simulador da Reforma Tributária para o setor imobiliário.
          </h1>
          <p className="text-slate-600 mb-6">
            Calcule o impacto simplificado da Reforma Tributária em sua operação. Ferramenta orientativa desenvolvida pela <strong>TECHNOVE</strong>, especialista em soluções para construtoras e incorporadoras.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-xs font-medium bg-rose-100 text-rose-800 px-3 py-1.5 rounded-full">Foco em construção civil e incorporação</span>
            <span className="text-xs font-medium bg-rose-100 text-rose-800 px-3 py-1.5 rounded-full">Apoio à gestão e planejamento</span>
            <span className="text-xs font-medium bg-rose-100 text-rose-800 px-3 py-1.5 rounded-full">Consultoria especializada</span>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => onNavigate('simulador')}
              className="rounded-full px-6 py-3 bg-rose-600 text-white font-semibold shadow-lg shadow-rose-500/30
                         transition-all duration-200 ease-in-out hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-0.5"
            >
              Simular agora
            </button>
            <button
              onClick={() => onNavigate('metodologia')}
              className="rounded-full px-6 py-3 border border-rose-600 text-rose-600 font-semibold whitespace-nowrap
                         transition-colors duration-200 ease-in-out hover:bg-rose-600 hover:text-white"
            >
              Ver metodologia
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            ⚠️ Este simulador é orientativo e não substitui a análise detalhada de um profissional.
          </p>
        </div>

        <div className="lg:col-span-2 bg-gradient-to-br from-rose-800 to-slate-900 rounded-2xl p-6 text-white flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-lg mb-2">Visão Rápida de Impacto</h2>
            <p className="text-sm opacity-80">
              Use o simulador como ponto de partida para discutir cenários com sua equipe.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-6 text-xs">
            <div className="bg-white/10 p-3 rounded-lg"><div className="opacity-80 mb-1">Segmento</div><div className="font-bold text-sm">Construtoras</div></div>
            <div className="bg-white/10 p-3 rounded-lg"><div className="opacity-80 mb-1">Consultoria</div><div className="font-bold text-sm">Especialista</div></div>
            <div className="bg-white/10 p-3 rounded-lg"><div className="opacity-80 mb-1">Aplicação</div><div className="font-bold text-sm">Planejamento</div></div>
            <div className="bg-white/10 p-3 rounded-lg"><div className="opacity-80 mb-1">Responsável</div><div className="font-bold text-sm">J. P. Amaral</div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
