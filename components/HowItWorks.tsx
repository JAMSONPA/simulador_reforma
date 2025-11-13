import React from 'react';

const Card: React.FC<{ step: number; title: string; children: React.ReactNode }> = ({ step, title, children }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg shadow-rose-100/60 flex flex-col">
    <span className="text-xs font-semibold bg-rose-100 text-rose-800 px-3 py-1 rounded-full self-start mb-4">
      Etapa {step}
    </span>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600">{children}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="mt-16">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Como funciona o simulador</h2>
        <p className="max-w-2xl mx-auto mt-2 text-slate-600">
          Em poucos passos, insira os dados, compare cenários e obtenha uma visão gerencial para apoiar decisões.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <Card step={1} title="Inserção de dados">
          Informe faturamento, carga tributária atual e parâmetros para a nova CBS/IBS, além dos créditos aproveitáveis.
        </Card>
        <Card step={2} title="Comparação de cenários">
          O simulador calcula uma visão simplificada do valor pago hoje e do projetado, evidenciando a variação da carga.
        </Card>
        <Card step={3} title="Leitura gerencial">
          Visualize a diferença absoluta e percentual, facilitando discussões com diretoria, contabilidade e consultorias.
        </Card>
      </div>
    </section>
  );
};

export default HowItWorks;
