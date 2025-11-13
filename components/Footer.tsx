import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-rose-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
        <p>Simulador da Reforma Tributária – TECHNOVE Tecnologia & Comunicação Ltda.</p>
        <p>Exemplo educacional e demonstrativo.</p>
        <p className="mt-2">
          Contato: <a href="mailto:jamson@technoveti.com.br" className="text-rose-600 hover:underline">jamson@technoveti.com.br</a> | 
          WhatsApp: <a href="https://wa.me/5583996261318" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">(83) 99626-1318</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
