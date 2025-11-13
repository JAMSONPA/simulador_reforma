import React from 'react';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="bg-slate-900 text-white p-4 md:p-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-bold text-lg tracking-wide">TECHNOVE | Simulador Reforma Tributária</h1>
          <p className="text-xs opacity-80">Soluções inteligentes para construtoras e incorporadoras</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a href="#como-funciona" onClick={(e) => { e.preventDefault(); onNavigate('como-funciona'); }} className="text-sm opacity-90 hover:opacity-100 hover:underline">Como funciona</a>
          <a href="#simulador" onClick={(e) => { e.preventDefault(); onNavigate('simulador'); }} className="text-sm opacity-90 hover:opacity-100 hover:underline">Simulador</a>
          <a href="#metodologia" onClick={(e) => { e.preventDefault(); onNavigate('metodologia'); }} className="text-sm opacity-90 hover:opacity-100 hover:underline">Metodologia</a>
          <a href="#contato" onClick={(e) => { e.preventDefault(); onNavigate('contato'); }} className="text-sm opacity-90 hover:opacity-100 hover:underline">Contato</a>
          <button
            onClick={() => onNavigate('simulador')}
            className="rounded-full px-5 py-2 border border-rose-500 text-rose-500 text-sm font-semibold whitespace-nowrap
                       transition-colors duration-200 ease-in-out hover:bg-rose-500 hover:text-white"
          >
            Acessar simulador
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
