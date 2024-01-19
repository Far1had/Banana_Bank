import React, { useState } from 'react';
import './App.css';

const BankComponent = () => {
  const [saldo, setSaldo] = useState(0);
  const [betrag, setBetrag] = useState('');

  const handleEinzahlen = () => {
    if (betrag !== '') {
      const eingezahlterBetrag = parseFloat(betrag);
      setSaldo(saldo + eingezahlterBetrag);
    }
  };

  const handleAuszahlen = () => {
    if (betrag !== '') {
      const ausgezahlterBetrag = parseFloat(betrag);
      setSaldo(saldo - ausgezahlterBetrag);
    }
  };

  return (
    <main>
        <h1 id="title">Banana Bank</h1>
          <div className="konto">
      
      <div>
        <h3>Mein Girokonto</h3>
        <div className="saldo">{saldo.toFixed(2)} €</div>
        <input
          type="number"
          className="geldbetrag"
          value={betrag}
          onChange={(e) => setBetrag(e.target.value)}
          placeholder="Betrag"
        />
        <button className="einzahlen" onClick={handleEinzahlen}>
          Einzahlen
        </button>
        <button className="auszahlen" onClick={handleAuszahlen}>
          Auszahlen
        </button>
      </div>
    </div>
    </main>

  );
};

export default BankComponent;
