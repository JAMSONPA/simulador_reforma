import React from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';

const Contact: React.FC = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Este formulário é apenas uma simulação e não envia dados. Para contato, utilize o WhatsApp ou e-mail.");
  };

  return (
    <section id="contato" className="mt-16">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Fale com a TECHNOVE</h2>
        <p className="max-w-2xl mx-auto mt-2 text-slate-600">
          Deseja adaptar o simulador, integrar com o Sienge ou utilizar em painéis gerenciais? Entre em contato.
        </p>
      </div>
      <div className="grid lg:grid-cols-5 gap-8 mt-10 items-start">
        {/* FORM */}
        <form onSubmit={handleFormSubmit} className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-xl shadow-rose-100/50">
          <h3 className="font-bold text-lg text-slate-900 mb-6">Envie uma mensagem</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="nomeContato" className="text-sm font-semibold text-slate-700 block mb-1.5">Nome</label>
              <input type="text" id="nomeContato" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500" placeholder="Seu nome" />
            </div>
             <div>
              <label htmlFor="emailContato" className="text-sm font-semibold text-slate-700 block mb-1.5">E-mail</label>
              <input type="email" id="emailContato" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500" placeholder="seuemail@empresa.com" />
            </div>
             <div>
              <label htmlFor="empresaContato" className="text-sm font-semibold text-slate-700 block mb-1.5">Empresa</label>
              <input type="text" id="empresaContato" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500" placeholder="Nome da empresa" />
            </div>
            <div>
              <label htmlFor="mensagemContato" className="text-sm font-semibold text-slate-700 block mb-1.5">Mensagem</label>
              <textarea id="mensagemContato" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 resize-y" placeholder="Ex: Quero integrar com o Sienge..."></textarea>
            </div>
          </div>
          <button type="submit" className="mt-6 w-full rounded-full px-6 py-3 bg-rose-600 text-white font-semibold shadow-lg shadow-rose-500/30 transition-all duration-200 ease-in-out hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-0.5">
            Enviar (Simulação)
          </button>
        </form>

        {/* INFO */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-xl shadow-rose-100/50 text-sm text-slate-700">
          <h3 className="font-bold text-lg text-slate-900 mb-4">Dados da TECHNOVE</h3>
          <div className="space-y-2">
            <p><strong>Razão Social:</strong> TECHNOVE Tecnologia & Comunicação Ltda</p>
            <p><strong>CNPJ:</strong> 44.827.378/0001-39</p>
            <p><strong>Consultor:</strong> Jamson Pereira Amaral</p>
            <p><strong>E-mail:</strong> <a href="mailto:jamson@technoveti.com.br" className="text-rose-600 hover:underline">jamson@technoveti.com.br</a></p>
            <p><strong>Contato:</strong> (83) 99626-1318</p>
          </div>
          <a
            href="https://wa.me/5583996261318?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Simulador%20da%20Reforma%20Tribut%C3%A1ria."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-full px-5 py-2.5 bg-green-500 text-white font-semibold shadow-lg shadow-green-500/30
                       transition-all duration-200 ease-in-out hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-0.5"
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
