const dias = ["SEG","TER","QUA","QUI","SEX"];
const aulas = ["1º","2º","3º","4º","5º"];

/* ================= HORÁRIOS ================= */

const horariosManha = [
["07:45","08:30"],
["08:30","09:15"],
["09:15","10:00"],
["10:15","11:00"],
["11:00","11:45"]
];

const horariosTarde = [
["13:15","14:00"],
["14:00","14:45"],
["14:45","15:30"],
["15:45","16:30"],
["16:30","17:15"]
];

/* ================= MATUTINO ================= */

const manhaCabecalho = ["Dia","Aula","1°A","2°A","3°A","4°A","5°A","6°A","7°A","7°B","8°A","9°A","9°B"];

const manhaDados = {
"SEG":[
["ART","","","EDF","","MAT","CIE","POR","GEO","EDF","HIS"],
["ART","EDF","","","","POR","MAT","POR","ART","HIS","EDF"],
["EDF","","","","","POR","GEO","EDF","ART","HIS","MAT"],
["","","","","EDF","GEO","POR","HIS","POR","MAT","CIE"],
["","","ART","","","EDF","POR","MAT","POR","GEO","CIE"]
],
"TER":[
["","ART","","","","POR","HIS","GEO","HIS","EDF","CIE"],
["","ART","","","","POR","HIS","EDF","MAT","GEO","HIS"],
["","","ART","","EDF","CIE","EDF","MAT","POR","GEO","HIS"],
["EDF","","","","","HIS","ART","CIE","POR","MAT","ENR"],
["","","","EDF","","HIS","ART","CIE","ENR","HIS","MAT"]
],
"QUA":[
["","","","","","CIE","ENR","MAT","CIE","POR","ART"],
["","","ING","","","CIE","EDF","ENR","CIE","MAT","ART"],
["ING","","EDF","","","EDF","MAT","CIE","ING","ENR","POR"],
["","EDF","","ING","ART","ENR","CIE","POR","MAT","CIE","GEO"],
["","ING","","EDF","ART","MAT","CIE","POR","EDF","CIE","GEO"]
],
"QUI":[
["","","","ART","ING","GEO","POR","HIS","MAT","ING","ING"],
["","","","ART","ING","GEO","POR","HIS","EDF","MAT","ING"],
["","","","","","MAT","GEO","ART","HIS","POR","EDF",],
["ING","","EDF","","","ING","EDF","GEO","HIS","CIE","MAT"],
["","EDF","ING","","","ING","MAT","GEO","CIE","EDF","POR"]
],
"SEX":[
["","ING","","","","EDF","GEO","ING","MAT","ART","POR"],
["","","","ING","","MAT","HIS","ING","EDF","ART","POR"],
["","","","","EDF","HIS","MAT","ART","ING","ING","GEO"],
["","","EDF","","","ART","ING","MAT","GEO","POR","EDF"],
["EDF","","","","","ART","ING","EDF","GEO","POR","MAT"]
]
};

/* ================= VESPERTINO ================= */

const tardeCabecalho = ["Dia","Aula","1°B","1°C","2°B","2°C","3°B","4°B","5°B","5°C","6°B","6°C","7°C","8°B"];

const tardeDados = {
"SEG":[
["ART","EDF","","","","","","EDF","POR","MAT","GEO","ART"],
["EDF","ART","","","","","EDF","","POR","GEO","MAT","ART"],
["","","","ART","EDF","","","","ART","GEO","EDF","MAT"],
["","","EDF","","","","","","MAT","POR","ART","EDF"],
["","","","","","EDF","","","EDF","POR","ART","GEO"]
],
"TER":[
["","","ART","EDF","","","EDF","","HIS","CIE","POR","HIS"],
["","","EDF","ART","","","","","HIS","CIE","POR","HIS"],
["","ART","","","EDF","","","EDF","CIE","HIS","HIS","MAT"],
["ART","","","","","ART","","","POR","MAT","EDF","ENR"],
["EDF","","","","","ART","","","POR","EDF","ENR","GEO"]
],
"QUA":[
["ING","EDF","","","","","","","MAT","EDF","CIE","ING"],
["","ING","","","","","","","EDF","ART","CIE","ING"],
["","","","","","","","","ENR","ART","MAT","EDF"],
["","","","","ING","EDF","","ART","GEO","MAT","ING","CIE"],
["","","ART","EDF","","ING","EDF","ART","GEO","ENR","ING","CIE"]
],
"QUI":[
["","","","ING","","EDF","","","ING","POR","HIS","MAT"],
["EDF","","","ING","","","","","ING","POR","HIS","GEO"],
["","EDF","","","","","","","EDF","GEO","MAT","HIS"],
["","","ING","","ART","","ING","EDF","GEO","MAT","POR","POR"],
["","","ING","","ART","","ING","","MAT","EDF","POR","POR"]
],
"SEX":[
["","ING","","","EDF","","ART","ING","HIS","CIE","MAT","POR"],
["","","","EDF","ING","","ART","ING","MAT","HIS","CIE","POR"],
["","","EDF","","","","","","ART","HIS","EDF","CIE"],
["","","","","","ING","","","CIE","ING","GEO","MAT"],
["ING","","","","","","","","CIE","ING","GEO","EDF"]
]
};

/* ================= FUNÇÃO GERAL ================= */

function criarTabela(id, cabecalho, dados, horarios){
const table = document.getElementById(id);
let html = "<tr>";
cabecalho.forEach(h=> html += `<th>${h}</th>`);
html += "</tr>";

dias.forEach(dia=>{
aulas.forEach((aula,i)=>{
html += `<tr class="${dia}" data-inicio="${horarios[i][0]}" data-fim="${horarios[i][1]}">`;

if(i===0){
html += `<td rowspan="5">${dia}</td>`;
}

html += `<td>${aula}<br><small>${horarios[i][0]}-${horarios[i][1]}</small></td>`;

dados[dia][i].forEach(d=>{
html += `<td class="${d}">${d}</td>`;
});

html += "</tr>";
});
});

table.innerHTML = html;
}

/* 🔥 AGORA CRIA AS DUAS TABELAS */

criarTabela("manha",manhaCabecalho,manhaDados,horariosManha);
criarTabela("tarde",tardeCabecalho,tardeDados,horariosTarde);

/* ================= DESTACAR AULA ATUAL ================= */

function destacarAulaAtual(){

const agora = new Date().toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"});
const horaAtual = agora.split(" ")[1].substring(0,5);
const diaAtual = new Date().toLocaleDateString("pt-BR",{weekday:"short",timeZone:"America/Sao_Paulo"})
.toUpperCase().substring(0,3);

document.querySelectorAll("tr").forEach(tr=>{
tr.classList.remove("aula-atual");

if(tr.classList.contains(diaAtual)){
const inicio = tr.dataset.inicio;
const fim = tr.dataset.fim;

if(inicio && horaAtual >= inicio && horaAtual < fim){
tr.classList.add("aula-atual");
}
}
});
}

destacarAulaAtual();
setInterval(destacarAulaAtual,60000);

/* ================= MOSTRAR HOJE ================= */

function mostrarHoje(){
const hoje = new Date().toLocaleDateString("pt-BR",{weekday:"short"}).toUpperCase().substring(0,3);
document.querySelectorAll("tr").forEach(tr=>{
if(tr.classList.length > 0){
tr.style.display = tr.classList.contains(hoje) ? "" : "none";
}
});
}

function mostrarTodos(){
document.querySelectorAll("tr").forEach(tr=>{
tr.style.display="";
});
}
