import React, { useState } from 'react';

interface FormData {
  faturamentoAnual: string;
  cargaAtual: string;
  cargaNova: string;
  creditosPercent: string;
  segmento: string;
}

interface ResultsData {
  impostoAtual: number;
  impostoNovo: number;
  diferenca: number;
  variacaoPercentual: number;
}

const Simulator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    faturamentoAnual: '',
    cargaAtual: '',
    cargaNova: '',
    creditosPercent: '',
    segmento: 'construcao',
  });
  const [results, setResults] = useState<ResultsData | null>(null);

  const normalizarNumero = (valorBruto: string): number => {
    if (!valorBruto) return NaN;
    const limpo = String(valorBruto).trim().replace(/\./g, "").replace(",", ".");
    return parseFloat(limpo);
  };

  const formatarMoeda = (valor: number): string => {
    if (!isFinite(valor)) return "R$ 0,00";
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const formatarPercentual = (valor: number): string => {
    if (!isFinite(valor)) return "0,00%";
    return valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const calcularSimulacao = () => {
    const faturamento = normalizarNumero(formData.faturamentoAnual);
    const cargaAtual = normalizarNumero(formData.cargaAtual);
    const cargaNova = normalizarNumero(formData.cargaNova);
    const creditosPercent = normalizarNumero(formData.creditosPercent);

    if (![faturamento, cargaAtual, cargaNova, creditosPercent].every(isFinite) || faturamento <= 0) {
      alert("Por favor, preencha todos os campos numéricos com valores válidos.");
      return;
    }

    const impostoAtual = faturamento * (cargaAtual / 100);
    const impostoNovoBruto = faturamento * (cargaNova / 100);
    const creditos = faturamento * (creditosPercent / 100);
    const impostoNovo = Math.max(impostoNovoBruto - creditos, 0);
    const diferenca = impostoNovo - impostoAtual;
    const variacaoPercentual = impostoAtual > 0 ? (diferenca / impostoAtual) * 100 : 0;

    setResults({ impostoAtual, impostoNovo, diferenca, variacaoPercentual });
  };

  const preencherExemplo = () => {
    const exampleData = {
      faturamentoAnual: "10.000.000,00",
      cargaAtual: "7,0",
      cargaNova: "9,0",
      creditosPercent: "3,0",
      segmento: 'construcao'
    };
    setFormData(exampleData);
    
    // We need to calculate based on example data, not stale state
    const faturamento = 10000000;
    const cargaAtual = 7;
    const cargaNova = 9;
    const creditosPercent = 3;
    const impostoAtual = faturamento * (cargaAtual / 100);
    const impostoNovoBruto = faturamento * (cargaNova / 100);
    const creditos = faturamento * (creditosPercent / 100);
    const impostoNovo = Math.max(impostoNovoBruto - creditos, 0);
    const diferenca = impostoNovo - impostoAtual;
    const variacaoPercentual = impostoAtual > 0 ? (diferenca / impostoAtual) * 100 : 0;

    setResults({ impostoAtual, impostoNovo, diferenca, variacaoPercentual });
  };

  const getImpactMessage = () => {
    if (!results) return "Preencha os dados e clique em “Calcular impacto tributário”.";
    if (Math.abs(results.diferenca) < 1) return "Carga tributária projetada muito próxima da atual.";
    return results.diferenca < 0 
      ? "Projeção de ECONOMIA tributária com a Reforma neste cenário." 
      : "Projeção de AUMENTO de carga tributária com a Reforma neste cenário.";
  };

  const getImpactColor = () => {
    if (!results || Math.abs(results.diferenca) < 1) return 'bg-gray-700 text-gray-300';
    return results.diferenca < 0 ? 'bg-green-600/20 text-green-300' : 'bg-red-600/20 text-red-300';
  };

  return (
    <section id="simulador" className="mt-16">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Simulador da Reforma Tributária</h2>
        <p className="max-w-2xl mx-auto mt-2 text-slate-600">
          Preencha os campos com valores aproximados para obter um comparativo simplificado.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 mt-10 items-start">
        {/* FORM PANEL */}
        <div className="bg-white p-6 rounded-2xl shadow-xl shadow-rose-100/50">
          <h3 className="font-bold text-lg text-slate-900 mb-6">Dados da simulação</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="faturamentoAnual" className="text-sm font-semibold text-slate-700 block mb-1.5">Faturamento anual estimado (R$)</label>
              <input type="text" id="faturamentoAnual" value={formData.faturamentoAnual} onChange={handleInputChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500" placeholder="Ex: 10.000.000,00" />
            </div>
            <div>
              <label htmlFor="cargaAtual" className="text-sm font-semibold text-slate-700 block mb-1.5">Carga tributária atual (%)</label>
              <input type="text" id="cargaAtual" value={formData.cargaAtual} onChange={handleInputChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500" placeholder="Ex: 7,5" />
            </div>
            <div>
              <label htmlFor="cargaNova" className="text-sm font-semibold text-slate-700 block mb-1.5">Nova alíquota efetiva CBS/IBS (%)</label>
              <input type="text" id="cargaNova" value={formData.cargaNova} onChange={handleInputChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500" placeholder="Ex: 9,0" />
            </div>
            <div>
              <label htmlFor="creditosPercent" className="text-sm font-semibold text-slate-700 block mb-1.5">Créditos aproveitáveis (% do faturamento)</label>
              <input type="text" id="creditosPercent" value={formData.creditosPercent} onChange={handleInputChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500" placeholder="Ex: 3,0" />
            </div>
            <div>
              <label htmlFor="segmento" className="text-sm font-semibold text-slate-700 block mb-1.5">Segmento principal</label>
              <select id="segmento" value={formData.segmento} onChange={handleInputChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 bg-white">
                <option value="construcao">Construção civil / Incorporação</option>
                <option value="servicos">Serviços</option>
                <option value="comercio">Comércio</option>
                <option value="industria">Indústria</option>
                <option value="outros">Outros</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
             <button onClick={calcularSimulacao} className="flex-1 rounded-full px-6 py-3 bg-rose-600 text-white font-semibold shadow-lg shadow-rose-500/30 transition-all duration-200 ease-in-out hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-0.5">
              Calcular Impacto
            </button>
            <button onClick={preencherExemplo} className="flex-1 rounded-full px-6 py-3 border border-rose-600 text-rose-600 font-semibold whitespace-nowrap transition-colors duration-200 ease-in-out hover:bg-rose-600 hover:text-white">
              Testar com Exemplo
            </button>
          </div>
        </div>

        {/* RESULTS PANEL */}
        <div className="bg-slate-900 p-6 rounded-2xl text-white">
          <h3 className="font-bold text-lg mb-6">Resultado da simulação</h3>
          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div className="bg-white/10 p-4 rounded-lg"><div className="opacity-80 mb-1">Impostos atuais</div><div className="font-bold text-lg">{formatarMoeda(results?.impostoAtual ?? 0)}</div></div>
            <div className="bg-white/10 p-4 rounded-lg"><div className="opacity-80 mb-1">Impostos projetados</div><div className="font-bold text-lg">{formatarMoeda(results?.impostoNovo ?? 0)}</div></div>
            <div className="bg-white/10 p-4 rounded-lg"><div className="opacity-80 mb-1">Diferença absoluta</div><div className="font-bold text-lg">{formatarMoeda(results?.diferenca ?? 0)}</div></div>
            <div className="bg-white/10 p-4 rounded-lg"><div className="opacity-80 mb-1">Variação percentual</div><div className="font-bold text-lg">{formatarPercentual(results?.variacaoPercentual ?? 0)}</div></div>
          </div>
          <div className={`text-sm font-semibold px-4 py-2 rounded-lg text-center ${getImpactColor()}`}>
            {getImpactMessage()}
          </div>
          <p className="text-xs text-slate-400 mt-4">
            💡 Utilize este resultado como insumo para reuniões de planejamento financeiro e análise de viabilidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
