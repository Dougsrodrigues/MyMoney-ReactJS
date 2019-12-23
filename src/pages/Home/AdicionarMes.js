import React from "react";

const minAno = 2019;
const maxAno = 2022;

export default function AdicionarMes() {
  const anos = [];
  for (let i = minAno; i <= maxAno; i++) {
    anos.push(i);
  }
  const saveNew = () => {
    // post({ valor: 10, decricao: "olá" });
  };
  const doRemove = () => {
    // remove("movimentacoes/2019-08/-LwVqHT1KwM5bT2K5Nam");
  };
  return (
    <>
      <h2>Adicionar mês</h2>
      <select>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
      </select>
      <select>
        <option value="01">01</option>
        <option value="02">02</option>
      </select>
      <button onClick>Adicionar mês</button>
      <button onClick>Delete</button>
    </>
  );
}
