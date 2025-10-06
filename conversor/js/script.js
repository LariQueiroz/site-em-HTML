document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('conForm');
  const inputTemp = document.getElementById('valor');
  const selectDe = document.getElementById('de');
  const selectPara = document.getElementById('para');

  let resultEl = document.createElement('p');
  form.parentNode.insertBefore(resultEl, form.nextSibling);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const valor = inputTemp.value;
    const de = selectDe.value;
    const para = selectPara.value;

    if (!valor || !de || !para) {
      resultEl.textContent = "Preencha todos os campos!";
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/conversor?valor=${valor}&de=${de}&para=${para}`);
      if (!response.ok) throw new Error("Erro ao converter.");
      const resultado = await response.text();
      resultEl.textContent = `Resultado: ${parseFloat(resultado).toFixed(2)} ${formatUnit(para)}`;
    } catch (err) {
      resultEl.textContent = err.message;
    }
  });

  function formatUnit(u) {
    if (u === 'celsius' || u === 'celcius') return '°C';
    if (u === 'fahrenheit') return '°F';
    if (u === 'kelvin') return 'K';
    return '';
  }
});