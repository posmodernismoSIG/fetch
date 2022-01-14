const fetch = require("node-fetch");

async function llamador() {
  try {
    const llamador = await fetch('https://servicios.cali.gov.co:9090/PazysalvoPredialRest/rest/api/PazysalvoPredial/getPazysalvo', {
      method: 'POST',
      body: JSON.stringify({
        "idPredio": "964365",
        "codigoCertificado": "01",
        "getVigencias": "X"
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(llamador);
    const dato = await llamador.json();
    console.log(dato);
  } catch (err) {
    console.log(err);
  }
}


llamador();


