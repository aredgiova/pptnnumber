let GBP_USD = {
    nombre: 'GBP/USD',
    neutro: 0,
    verde: 1,
    rojo: -1
};

let EUR_USD = {
    nombre: 'EUR/USD',
    neutro: 0,
    verde: 1,
    rojo: -1
};

let USD_YEN = {
    nombre: 'USD/YEN',
    neutro: 0,
    verde: 1,
    rojo: -1
};

let GBP_EUR = {
    nombre: 'GBP/EUR',
    neutro: 0,
    verde: 1,
    rojo: -1
};

let EUR_YEN = {
    nombre: 'EUR/YEN',
    neutro: 0,
    verde: 1,
    rojo: -1
};

let GBP_YEN = {
    nombre: 'GBP/YEN',
    neutro: 0,
    verde: 1,
    rojo: -1
};

const grupoDivisas = [GBP_USD, EUR_USD, USD_YEN, GBP_EUR, EUR_YEN, GBP_YEN];

d3.csv("./csv/csvared.csv", function(data) {
    asignarValoresCsv(data);
    renderizarNuevosValores();
});

function renderizarNuevosValores() {
    document.getElementById("gbp_usd").innerHTML = GBP_USD.neutro;
    document.getElementById("eur_usd").innerHTML = EUR_USD.neutro;
    document.getElementById("usd_yen").innerHTML = USD_YEN.neutro;
    document.getElementById("gbp_eur").innerHTML = GBP_EUR.neutro;
    document.getElementById("eur_yen").innerHTML = EUR_YEN.neutro;
    document.getElementById("gbp_yen").innerHTML = GBP_YEN.neutro;

    document.getElementById("gbp_usd_p").innerHTML = GBP_USD.verde;
    document.getElementById("eur_usd_p").innerHTML = EUR_USD.verde;
    document.getElementById("usd_yen_p").innerHTML = USD_YEN.verde;
    document.getElementById("gbp_eur_p").innerHTML = GBP_EUR.verde;
    document.getElementById("eur_yen_p").innerHTML = EUR_YEN.verde;
    document.getElementById("gbp_yen_p").innerHTML = GBP_YEN.verde;

    document.getElementById("gbp_usd_n").innerHTML = GBP_USD.rojo;
    document.getElementById("eur_usd_n").innerHTML = EUR_USD.rojo;
    document.getElementById("usd_yen_n").innerHTML = USD_YEN.rojo;
    document.getElementById("gbp_eur_n").innerHTML = GBP_EUR.rojo;
    document.getElementById("eur_yen_n").innerHTML = EUR_YEN.rojo;
    document.getElementById("gbp_yen_n").innerHTML = GBP_YEN.rojo;
}

// const myForm = document.getElementById("myForm");
// const csvFile = document.getElementById("csvFile");

function asignarValoresCsv(str, delimiter = ";") {
    /* str = str.replace(/['"]+/g, '');
    console.log(str);

    const rows = str.split(/\r\n|\n\r|\n|\r/);
    rows.shift();
    console.log('rows', rows); */

    str.forEach(element => {
        let rowSplited = element["PARDIV; PPTN; PPTNP; PPTNN "].split(delimiter);
        grupoDivisas.forEach(divisa => {
            if (divisa.nombre === rowSplited[0]) {
                divisa.neutro = rowSplited[1];
                divisa.verde = rowSplited[2];
                divisa.rojo = rowSplited[3];
            }
        });
    });
}

/* myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = csvFile.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const text = e.target.result;
        asignarValoresCsv(text);
        renderizarNuevosValores();
    };

    reader.readAsText(input);
}); */