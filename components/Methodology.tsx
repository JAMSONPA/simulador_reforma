import React from 'react';

const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="mt-16">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Metodologia Simplificada</h2>
        <p className="max-w-2xl mx-auto mt-2 text-slate-600">
          Uma visão gerencial para fins de simulação. Não substitui a interpretação jurídica ou contábil da legislação.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-10 bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-rose-100/50">
        <ul className="space-y-4 text-sm text-slate-700 list-disc list-inside">
          <li>
            Considera-se o faturamento anual informado como base para aplicação das alíquotas.
          </li>
          <li>
            A carga tributária atual é tratada como um percentual único sobre o faturamento (PIS, COFINS, ICMS, ISS, etc.).
          </li>
          <li>
            A nova alíquota CBS/IBS representa a carga estimada após a Reforma, sem considerar créditos.
          </li>
          <li>
            O percentual de créditos aproveitáveis é aplicado sobre o faturamento, reduzindo o valor de imposto projetado.
          </li>
          <li className="!mt-6">
            <strong className="font-semibold text-slate-800">Cálculos básicos:</strong>
            <div className="mt-2 pl-4 text-xs font-mono bg-slate-100 p-4 rounded-lg space-y-1">
              <p>Imposto atual = Faturamento × (Carga atual / 100)</p>
              <p>Imposto novo bruto = Faturamento × (Carga nova / 100)</p>
              <p>Créditos = Faturamento × (Créditos / 100)</p>
              <p>Imposto novo = máx(0; Imposto novo bruto – Créditos)</p>
            </div>
          </li>
        </ul>
        <p className="text-xs text-slate-500 mt-6">
          Referência conceitual: Reforma Tributária do consumo no Brasil (CBS/IBS). Os parâmetros podem ser refinados em projetos de consultoria TECHNOVE.
        </p>
      </div>
    </section>
  );
};

export default Methodology;
