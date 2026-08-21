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
["","","ART","","EDF","CIE","EDF","MAT","ENR","GEO","HIS"],
["EDF","","","","","HIS","ART","CIE","POR","MAT","ENR"],
["","","","EDF","","HIS","ART","CIE","POR","HIS","MAT"]
],
"QUA":[
["","","","","","CIE","ENR","MAT","CIE","POR","ART"],
["","","ING","","","CIE","EDF","ENR","CIE","MAT","ART"],
["ING","","EDF","","","EDF","MAT","CIE","ING","CIE","POR"],
["","EDF","","ING","ART","ENR","CIE","POR","MAT","CIE","GEO"],
["","ING","","EDF","ART","MAT","CIE","POR","EDF","ENR","GEO"]
],
"QUI":[
["","","","ART","ING","GEO","POR","HIS","MAT","ING","ING"],
["","","","ART","ING","GEO","POR","HIS","EDF","MAT","ING"],
["","","","","","MAT","GEO","ART","HIS","POR","EDF"],
["ING","","EDF","","","ING","EDF","GEO","HIS","CIE","MAT"],
["","EDF","ING","","","ING","MAT","GEO","CIE","EDF","POR"]
],
"SEX":[
["","ING","","","","MAT","GEO","ING","EDF","ART","POR"],
["","","","ING","","EDF","HIS","ING","MAT","ART","POR"],
["","","","","EDF","HIS","MAT","ART","ING","ING","GEO"],
["","","EDF","","","ART","ING","MAT","GEO","POR","EDF"],
["EDF","","","","","ART","ING","EDF","GEO","POR","MAT"]
]
};

/* ================= VESPERTINO ================= */

const tardeCabecalho = ["Dia","Aula","1°B","1°C","2°B","2°C","3°B","4°B","5°B","5°C","6°B","6°C","7°C","8°B"];

const tardeDados = {

  "SEG": [
    ["ART", "EDF", "", "", "", "", "", "EDF", "POR", "MAT", "GEO", "ART"],
    ["EDF", "ART", "", "", "", "", "EDF", "", "POR", "GEO", "MAT", "ART"],
    ["", "", "", "ART", "EDF", "", "", "", "ART", "GEO", "EDF", "MAT"],
    ["", "", "ART", "", "", "", "", "", "MAT", "POR", "ART", "EDF"],
    ["", "", "", "", "", "EDF", "", "", "EDF", "POR", "ART", "GEO"]
  ],
  "TER": [
    ["", "", "ART", "EDF", "", "", "EDF", "", "CIE", "HIS", "POR", "HIS"],
    ["", "", "EDF", "ART", "", "", "", "", "CIE", "ENR", "POR", "HIS"],
    ["", "ART", "", "", "EDF", "", "", "EDF", "HIS", "CIE", "HIS", "MAT"],
    ["ART", "", "", "", "", "ART", "", "", "POR", "CIE", "EDF", "ENR"],
    ["EDF", "", "", "", "", "ART", "", "", "POR", "EDF", "ENR", "GEO"]
  ],
  "QUA": [
    ["ING", "EDF", "", "", "", "", "", "", "MAT", "EDF", "CIE", "ING"],
    ["", "ING", "EDF", "", "", "", "", "", "EDF", "ART", "CIE", "ING"],
    ["", "", "", "", "", "", "", "", "ENR", "ART", "MAT", "EDF"],
    ["", "", "", "ING", "EDF", "", "", "ART", "GEO", "MAT", "ING", "CIE"],
    ["", "", "", "EDF", "ING", "EDF", "", "ART", "GEO", "MAT", "ING", "CIE"]
  ],
  "QUI": [
    ["", "", "", "ING", "", "EDF", "", "", "ING", "POR", "HIS", "GEO"],
    ["EDF", "", "", "ING", "", "", "", "", "ING", "POR", "HIS", "MAT"],
    ["", "EDF", "", "", "", "", "", "", "EDF", "MAT", "MAT", "HIS"],
    ["", "", "ING", "", "ART", "", "ING", "EDF", "MAT", "GEO", "POR", "POR"],
    ["", "", "ING", "", "ART", "", "ING", "", "MAT", "EDF", "POR", "POR"]
  ],
  "SEX": [
    ["", "ING", "", "", "EDF", "", "ART", "ING", "GEO", "HIS", "CIE", "POR"],
    ["", "", "", "EDF", "ING", "", "ART", "ING", "CIE", "HIS", "MAT", "POR"],
    ["", "", "EDF", "", "", "", "", "", "ART", "CIE", "EDF", "MAT"],
    ["", "", "", "", "", "ING", "", "", "HIS", "ING", "GEO", "CIE"],
    ["ING", "", "", "", "", "", "", "", "HIS", "ING", "GEO", "EDF"]
  ]
};

/* ================= FUNÇÃO GERAL ================= */

/* ================= FUNÇÃO GERAL ================= */

function criarTabela(id, cabecalho, dados, horarios){
  const turnoKey = id === "manha" ? "M" : "T";
  const table = document.getElementById(id);
  let html = "<tr>";
  
  // Transforma os cabeçalhos das séries em botões clicáveis
  cabecalho.forEach((h, idx) => {
    if(idx >= 2) {
      html += `<th data-turma="${h}" class="th-clicavel" title="Filtrar turma ${h}" onclick="toggleFiltroTurma('${h}')">${h}</th>`;
    } else {
      html += `<th>${h}</th>`;
    }
  });
  html += "</tr>";

  dias.forEach(dia=>{
    aulas.forEach((aula,i)=>{
      html += `<tr class="${dia}" data-inicio="${horarios[i][0]}" data-fim="${horarios[i][1]}">`;

      if(i===0){
        html += `<td rowspan="5">${dia}</td>`;
      }

      html += `<td>${aula}<br><small>${horarios[i][0]}-${horarios[i][1]}</small></td>`;

      dados[dia][i].forEach((d, ti)=>{
        const turma = cabecalho[ti+2];
        const chave = turnoKey+"_"+dia+"_"+i+"_"+turma;
        const prof = typeof professores !== "undefined" ? professores[chave] : null;
        const dataProfAttr = prof ? ` data-prof="${prof}"` : "";
        const profArg = prof ? `'${prof}'` : 'null';
        
        // Torna a célula clicável apenas se houver uma matéria preenchida
        if (d !== "") {
          html += `<td class="${d} celula-clicavel" ${dataProfAttr} data-turma="${turma}" data-materia="${d}" onclick="toggleFiltroMateria('${d}', ${profArg})">${d}</td>`;
        } else {
          html += `<td class="${d}" data-turma="${turma}"></td>`;
        }
      });

      html += "</tr>";
    });
  });

  table.innerHTML = html;
}

/* ================= PROFESSORES ================= */
// Chave: "M_DIA_AULA_TURMA" (manhã) ou "T_DIA_AULA_TURMA" (tarde)
// DIA: SEG TER QUA QUI SEX | AULA: 0=1º … 4=5º | TURMA: ex "1°A"
// Exemplo: "M_SEG_0_1°A": "Prof. João"

const professores = {
  // --- SEGUNDA-FEIRA (SEG) ---
  // 1º Horário
  "M_SEG_0_1°A": "Franciane",
  "M_SEG_0_4°A": "Robson",
  "M_SEG_0_6°A": "Claudia",
  "M_SEG_0_7°A": "Silvana",
  "M_SEG_0_7°B": "Nadia",
  "M_SEG_0_8°A": "Volnei",
  "M_SEG_0_9°A": "Cristiano",
  "M_SEG_0_9°B": "Paloma",
  // 2º Horário
  "M_SEG_1_1°A": "Franciane",
  "M_SEG_1_2°A": "Robson",
  "M_SEG_1_6°A": "Raphaela",
  "M_SEG_1_7°A": "Claudia",
  "M_SEG_1_7°B": "Nadia",
  "M_SEG_1_8°A": "Patricia",
  "M_SEG_1_9°A": "Paloma",
  "M_SEG_1_9°B": "Cristiano",
  // 3º Horário
  "M_SEG_2_1°A": "Robson",
  "M_SEG_2_6°A": "Raphaela",
  "M_SEG_2_7°A": "Volnei",
  "M_SEG_2_7°B": "Cristiano",
  "M_SEG_2_8°A": "Patricia",
  "M_SEG_2_9°A": "Paloma",
  "M_SEG_2_9°B": "Claudia",
  // 4º Horário
  "M_SEG_3_5°A": "Robson",
  "M_SEG_3_6°A": "Volnei",
  "M_SEG_3_7°A": "Nadia",
  "M_SEG_3_7°B": "Paloma",
  "M_SEG_3_8°A": "Raphaela",
  "M_SEG_3_9°A": "Claudia",
  "M_SEG_3_9°B": "Giovane",
  // 5º Horário
  "M_SEG_4_3°A": "Patricia",
  "M_SEG_4_6°A": "Cristiano",
  "M_SEG_4_7°A": "Nadia",
  "M_SEG_4_7°B": "Claudia",
  "M_SEG_4_8°A": "Raphaela",
  "M_SEG_4_9°A": "Volnei",
  "M_SEG_4_9°B": "Giovane",

  // --- TERÇA-FEIRA (TER) ---
  // 1º Horário
  "M_TER_0_2°A": "Patricia",
  "M_TER_0_6°A": "Raphaela",
  "M_TER_0_7°A": "Débora",
  "M_TER_0_7°B": "Volnei",
  "M_TER_0_8°A": "Paloma",
  "M_TER_0_9°A": "Cristiano",
  "M_TER_0_9°B": "Giovane",
  // 2º Horário
  "M_TER_1_2°A": "Patricia",
  "M_TER_1_6°A": "Raphaela",
  "M_TER_1_7°A": "Débora",
  "M_TER_1_7°B": "Cristiano",
  "M_TER_1_8°A": "Claudia",
  "M_TER_1_9°A": "Volnei",
  "M_TER_1_9°B": "Paloma",
  // 3º Horário
  "M_TER_2_3°A": "Patricia",
  "M_TER_2_5°A": "Robson",
  "M_TER_2_6°A": "Silvana",
  "M_TER_2_7°A": "Cristiano",
  "M_TER_2_7°B": "Claudia",
  "M_TER_2_8°A": "Nilce",
  "M_TER_2_9°A": "Volnei",
  "M_TER_2_9°B": "Paloma",
  // 4º Horário
  "M_TER_3_1°A": "Robson",
  "M_TER_3_6°A": "Débora",
  "M_TER_3_7°A": "Patricia",
  "M_TER_3_7°B": "Silvana",
  "M_TER_3_8°A": "Raphaela",
  "M_TER_3_9°A": "Claudia",
  "M_TER_3_9°B": "Nilce",
  // 5º Horário
  "M_TER_4_4°A": "Robson",
  "M_TER_4_6°A": "Débora",
  "M_TER_4_7°A": "Patricia",
  "M_TER_4_7°B": "Silvana",
  "M_TER_4_8°A": "Raphaela",
  "M_TER_4_9°A": "Paloma",
  "M_TER_4_9°B": "Claudia",

  // --- QUARTA-FEIRA (QUA) ---
  // 1º Horário
  "M_QUA_0_6°A": "Silvana",
  "M_QUA_0_7°A": "Nilce",
  "M_QUA_0_7°B": "Claudia",
  "M_QUA_0_8°A": "Giovane",
  "M_QUA_0_9°A": "Nadia",
  "M_QUA_0_9°B": "Patricia",
  // 2º Horário
  "M_QUA_1_3°A": "Ionara",
  "M_QUA_1_6°A": "Silvana",
  "M_QUA_1_7°A": "Cristiano",
  "M_QUA_1_7°B": "Nilce",
  "M_QUA_1_8°A": "Giovane",
  "M_QUA_1_9°A": "Claudia",
  "M_QUA_1_9°B": "Patricia",
  // 3º Horário
  "M_QUA_2_1°A": "Ionara",
  "M_QUA_2_3°A": "Robson",
  "M_QUA_2_6°A": "Cristiano",
  "M_QUA_2_7°A": "Claudia",
  "M_QUA_2_7°B": "Silvana",
  "M_QUA_2_8°A": "Giuliana",
  "M_QUA_2_9°A": "Giovane",
  "M_QUA_2_9°B": "Nadia",
  // 4º Horário
  "M_QUA_3_2°A": "Robson",
  "M_QUA_3_4°A": "Ionara",
  "M_QUA_3_5°A": "Patricia",
  "M_QUA_3_6°A": "Nilce",
  "M_QUA_3_7°A": "Silvana",
  "M_QUA_3_7°B": "Nadia",
  "M_QUA_3_8°A": "Claudia",
  "M_QUA_3_9°A": "Giovane",
  "M_QUA_3_9°B": "Volnei",
  // 5º Horário
  "M_QUA_4_2°A": "Ionara",
  "M_QUA_4_4°A": "Robson",
  "M_QUA_4_5°A": "Patricia",
  "M_QUA_4_6°A": "Claudia",
  "M_QUA_4_7°A": "Silvana",
  "M_QUA_4_7°B": "Nadia",
  "M_QUA_4_8°A": "Cristiano",
  "M_QUA_4_9°A": "Nilce",
  "M_QUA_4_9°B": "Volnei",

  // --- QUINTA-FEIRA (QUI) ---
  // 1º Horário
  "M_QUI_0_4°A": "Patricia",
  "M_QUI_0_5°A": "Giuliana",
  "M_QUI_0_6°A": "Volnei",
  "M_QUI_0_7°A": "Nadia",
  "M_QUI_0_7°B": "Paloma",
  "M_QUI_0_8°A": "Claudia",
  "M_QUI_0_9°A": "Ionara",
  "M_QUI_0_9°B": "Daniela",
  // 2º Horário
  "M_QUI_1_4°A": "Patricia",
  "M_QUI_1_5°A": "Giuliana",
  "M_QUI_1_6°A": "Volnei",
  "M_QUI_1_7°A": "Nadia",
  "M_QUI_1_7°B": "Paloma",
  "M_QUI_1_8°A": "Cristiano",
  "M_QUI_1_9°A": "Claudia",
  "M_QUI_1_9°B": "Daniela",
  // 3º Horário
  "M_QUI_2_6°A": "Claudia",
  "M_QUI_2_7°A": "Volnei",
  "M_QUI_2_7°B": "Patricia",
  "M_QUI_2_8°A": "Paloma",
  "M_QUI_2_9°A": "Nadia",
  "M_QUI_2_9°B": "Cristiano",
  // 4º Horário
  "M_QUI_3_1°A": "Ionara",
  "M_QUI_3_3°A": "Robson",
  "M_QUI_3_6°A": "Giuliana",
  "M_QUI_3_7°A": "Cristiano",
  "M_QUI_3_7°B": "Volnei",
  "M_QUI_3_8°A": "Paloma",
  "M_QUI_3_9°A": "Giovane",
  "M_QUI_3_9°B": "Claudia",
  // 5º Horário
  "M_QUI_4_2°A": "Robson",
  "M_QUI_4_3°A": "Ionara",
  "M_QUI_4_6°A": "Giuliana",
  "M_QUI_4_7°A": "Claudia",
  "M_QUI_4_7°B": "Volnei",
  "M_QUI_4_8°A": "Giovane",
  "M_QUI_4_9°A": "Cristiano",
  "M_QUI_4_9°B": "Nadia",

  // --- SEXTA-FEIRA (SEX) ---
  // 1º Horário
  "M_SEX_0_2°A": "Ionara",
  "M_SEX_0_6°A": "Claudia",
  "M_SEX_0_7°A": "Volnei",
  "M_SEX_0_7°B": "Giuliana",
  "M_SEX_0_8°A": "Cristiano",
  "M_SEX_0_9°A": "Patricia",
  "M_SEX_0_9°B": "Nadia",
  // 2º Horário
  "M_SEX_1_4°A": "Ionara",
  "M_SEX_1_6°A": "Cristiano",
  "M_SEX_1_7°A": "Débora",
  "M_SEX_1_7°B": "Giuliana",
  "M_SEX_1_8°A": "Claudia",
  "M_SEX_1_9°A": "Patricia",
  "M_SEX_1_9°B": "Nadia",
  // 3º Horário
  "M_SEX_2_5°A": "Robson",
  "M_SEX_2_6°A": "Débora",
  "M_SEX_2_7°A": "Claudia",
  "M_SEX_2_7°B": "Patricia",
  "M_SEX_2_8°A": "Giuliana",
  "M_SEX_2_9°A": "Ionara",
  "M_SEX_2_9°B": "Volnei",
  // 4º Horário
  "M_SEX_3_3°A": "Robson",
  "M_SEX_3_6°A": "Patricia",
  "M_SEX_3_7°A": "Giuliana",
  "M_SEX_3_7°B": "Claudia",
  "M_SEX_3_8°A": "Volnei",
  "M_SEX_3_9°A": "Nadia",
  "M_SEX_3_9°B": "Cristiano",
  // 5º Horário
  "M_SEX_4_1°A": "Robson",
  "M_SEX_4_6°A": "Patricia",
  "M_SEX_4_7°A": "Giuliana",
  "M_SEX_4_7°B": "Cristiano",
  "M_SEX_4_8°A": "Volnei",
  "M_SEX_4_9°A": "Nadia",
  "M_SEX_4_9°B": "Claudia",

  // --- VESPERTINO (T) ---
  // "T_SEG_0_1°B": "Prof. Exemplo",
  // --- VESPERTINO (T) - SEGUNDA-FEIRA ---

"T_SEG_0_1°B": "Franciane",
  "T_SEG_0_1°C": "Gabriel",
  "T_SEG_0_5°C": "Robson",
  "T_SEG_0_6°B": "Raphaela",
  "T_SEG_0_6°C": "Rosane",
  "T_SEG_0_7°C": "Volnei",
  "T_SEG_0_8°B": "Patricia",
  "T_SEG_1_1°B": "Gabriel",
  "T_SEG_1_1°C": "Franciane",
  "T_SEG_1_5°B": "Robson",
  "T_SEG_1_6°B": "Raphaela",
  "T_SEG_1_6°C": "Volnei",
  "T_SEG_1_7°C": "Claudia",
  "T_SEG_1_8°B": "Patricia",
  "T_SEG_2_2°B": "Franciane",
  "T_SEG_2_3°B": "Gabriel",
  "T_SEG_2_6°B": "Patricia",
  "T_SEG_2_6°C": "Volnei",
  "T_SEG_2_7°C": "Robson",
  "T_SEG_2_8°B": "Claudia",
  "T_SEG_3_2°B": "Franciane",
  "T_SEG_3_6°B": "Rosane",
  "T_SEG_3_6°C": "Raphaela",
  "T_SEG_3_7°C": "Patricia",
  "T_SEG_3_8°B": "Robson",
  "T_SEG_4_4°B": "Gabriel",
  "T_SEG_4_6°B": "Robson",
  "T_SEG_4_6°C": "Raphaela",
  "T_SEG_4_7°C": "Patricia",
  "T_SEG_4_8°B": "Volnei",

  "T_TER_0_2°B": "Franciane",
  "T_TER_0_2°C": "Gabriel",
  "T_TER_0_5°B": "Robson",
  "T_TER_0_6°B": "Giovane",
  "T_TER_0_6°C": "Débora",
  "T_TER_0_7°C": "Raphaela",
  "T_TER_0_8°B": "Paloma",
  "T_TER_1_2°B": "Gabriel",
  "T_TER_1_2°C": "Franciane",
  "T_TER_1_6°B": "Giovane",
  "T_TER_1_6°C": "Nilce",
  "T_TER_1_7°C": "Raphaela",
  "T_TER_1_8°B": "Paloma",
  "T_TER_2_1°C": "Franciane",
  "T_TER_2_3°B": "Gabriel",
  "T_TER_2_5°C": "Robson",
  "T_TER_2_6°B": "Débora",
  "T_TER_2_6°C": "Giovane",
  "T_TER_2_7°C": "Paloma",
  "T_TER_2_8°B": "Claudia",
  "T_TER_3_1°B": "Franciane",
  "T_TER_3_4°B": "Patricia",
  "T_TER_3_6°B": "Raphaela",
  "T_TER_3_6°C": "Giovane",
  "T_TER_3_7°C": "Robson",
  "T_TER_3_8°B": "Nilce",
  "T_TER_4_1°B": "Gabriel",
  "T_TER_4_4°B": "Patricia",
  "T_TER_4_6°B": "Raphaela",
  "T_TER_4_6°C": "Robson",
  "T_TER_4_7°C": "Nilce",
  "T_TER_4_8°B": "Volnei",

  "T_QUA_0_1°B": "Ionara",
  "T_QUA_0_1°C": "Gabriel",
  "T_QUA_0_6°B": "Rosane",
  "T_QUA_0_6°C": "Robson",
  "T_QUA_0_7°C": "Giovane",
  "T_QUA_0_8°B": "Giuliana",
  "T_QUA_1_1°C": "Ionara",
  "T_QUA_1_2°B": "Gabriel",
  "T_QUA_1_6°B": "Robson",
  "T_QUA_1_6°C": "Patricia",
  "T_QUA_1_7°C": "Giovane",
  "T_QUA_1_8°B": "Giuliana",
  "T_QUA_2_6°B": "Nilce",
  "T_QUA_2_6°C": "Patricia",
  "T_QUA_2_7°C": "Claudia",
  "T_QUA_2_8°B": "Robson",
  "T_QUA_3_3°B": "Ionara",
  "T_QUA_3_4°B": "Gabriel",
  "T_QUA_3_5°C": "Patricia",
  "T_QUA_3_6°B": "Volnei",
  "T_QUA_3_6°C": "Rosane",
  "T_QUA_3_7°C": "Giuliana",
  "T_QUA_3_8°B": "Giovane",
  "T_QUA_4_2°C": "Gabriel",
  "T_QUA_4_4°B": "Ionara",
  "T_QUA_4_5°B": "Robson",
  "T_QUA_4_5°C": "Patricia",
  "T_QUA_4_6°B": "Volnei",
  "T_QUA_4_6°C": "Rosane",
  "T_QUA_4_7°C": "Giuliana",
  "T_QUA_4_8°B": "Giovane",

  "T_QUI_0_2°C": "Daniela",
  "T_QUI_0_4°B": "Gabriel",
  "T_QUI_0_6°B": "Giuliana",
  "T_QUI_0_6°C": "Raphaela",
  "T_QUI_0_7°C": "Paloma",
  "T_QUI_0_8°B": "Volnei",
  "T_QUI_1_1°B": "Gabriel",
  "T_QUI_1_2°C": "Daniela",
  "T_QUI_1_6°B": "Giuliana",
  "T_QUI_1_6°C": "Raphaela",
  "T_QUI_1_7°C": "Paloma",
  "T_QUI_1_8°B": "Claudia",
  "T_QUI_2_1°C": "Gabriel",
  "T_QUI_2_6°B": "Robson",
  "T_QUI_2_6°C": "Rosane",
  "T_QUI_2_7°C": "Claudia",
  "T_QUI_2_8°B": "Paloma",
  "T_QUI_3_2°B": "Daniela",
  "T_QUI_3_3°B": "Patricia",
  "T_QUI_3_5°B": "Giuliana",
  "T_QUI_3_5°C": "Robson",
  "T_QUI_3_6°B": "Rosane",
  "T_QUI_3_6°C": "Volnei",
  "T_QUI_3_7°C": "Raphaela",
  "T_QUI_3_8°B": "Nadia",
  "T_QUI_4_2°B": "Daniela",
  "T_QUI_4_3°B": "Patricia",
  "T_QUI_4_5°B": "Giuliana",
  "T_QUI_4_6°B": "Rosane",
  "T_QUI_4_6°C": "Robson",
  "T_QUI_4_7°C": "Raphaela",
  "T_QUI_4_8°B": "Nadia",

  "T_SEX_0_1°C": "Ionara",
  "T_SEX_0_3°B": "Gabriel",
  "T_SEX_0_5°B": "Patricia",
  "T_SEX_0_5°C": "Giuliana",
  "T_SEX_0_6°B": "Volnei",
  "T_SEX_0_6°C": "Débora",
  "T_SEX_0_7°C": "Giovane",
  "T_SEX_0_8°B": "Nadia",
  "T_SEX_1_2°C": "Gabriel",
  "T_SEX_1_3°B": "Ionara",
  "T_SEX_1_5°B": "Patricia",
  "T_SEX_1_5°C": "Giuliana",
  "T_SEX_1_6°B": "Giovane",
  "T_SEX_1_6°C": "Débora",
  "T_SEX_1_7°C": "Claudia",
  "T_SEX_1_8°B": "Nadia",
  "T_SEX_2_2°B": "Gabriel",
  "T_SEX_2_6°B": "Patricia",
  "T_SEX_2_6°C": "Giovane",
  "T_SEX_2_7°C": "Robson",
  "T_SEX_2_8°B": "Claudia",
  "T_SEX_3_4°B": "Ionara",
  "T_SEX_3_6°B": "Débora",
  "T_SEX_3_6°C": "Giuliana",
  "T_SEX_3_7°C": "Volnei",
  "T_SEX_3_8°B": "Giovane",
  "T_SEX_4_1°B": "Ionara",
  "T_SEX_4_6°B": "Débora",
  "T_SEX_4_6°C": "Giuliana",
  "T_SEX_4_7°C": "Volnei",
  "T_SEX_4_8°B": "Robson"

};
// --- VESPERTINO (T) ---
// "T_SEG_0_1°B": "Prof. Exemplo",


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

/* ================= FILTROS ================= */

let filtroAtivoDia = "TODOS";

function filtrarDia(dia, btn){
filtroAtivoDia = dia;
document.querySelectorAll(".btn-dia").forEach(b => b.classList.remove("ativo"));
btn.classList.add("ativo");
aplicarFiltros();
}

function filtrarHoje(btn){
const hoje = new Date().toLocaleDateString("pt-BR",{weekday:"short",timeZone:"America/Sao_Paulo"})
.toUpperCase().substring(0,3);
filtroAtivoDia = hoje;
document.querySelectorAll(".btn-dia").forEach(b => b.classList.remove("ativo"));
btn.classList.add("ativo");
aplicarFiltros();
}

let filtroAtivoTurno = "TODOS";

function filtrarTurno(turno, btn){
filtroAtivoTurno = turno;
document.querySelectorAll(".btn-turno").forEach(b => b.classList.remove("ativo"));
btn.classList.add("ativo");
aplicarFiltros();
}

function aplicarFiltros(){
document.getElementById("secao-manha").style.display =
(filtroAtivoTurno === "TODOS" || filtroAtivoTurno === "manha") ? "" : "none";
document.getElementById("secao-tarde").style.display =
(filtroAtivoTurno === "TODOS" || filtroAtivoTurno === "tarde") ? "" : "none";

document.querySelectorAll("tr[class]").forEach(tr=>{
if(!tr.classList.length) return;
tr.style.display = (filtroAtivoDia === "TODOS" || tr.classList.contains(filtroAtivoDia)) ? "" : "none";
});
}

/* ================= TOOLTIP PROFESSOR ================= */
const tooltip = document.getElementById("tooltip");

document.addEventListener("mousemove", e=>{
tooltip.style.left = (e.clientX + 14) + "px";
tooltip.style.top = (e.clientY - 10) + "px";
});

document.addEventListener("mouseover", e=>{
const td = e.target.closest("td[data-prof]");
if(!td || !td.dataset.prof) return;
tooltip.textContent = "👤 " + td.dataset.prof;
tooltip.classList.add("visivel");
});

document.addEventListener("mouseout", e=>{
const td = e.target.closest("td[data-prof]");
if(td) tooltip.classList.remove("visivel");
});

/* ================= FILTROS INTERATIVOS (TURMA / MATÉRIA) ================= */

let turmaFiltrada = null;
let materiaFiltrada = null;
let profFiltrado = null;

function toggleFiltroTurma(turma) {
  // Ativa o filtro ou desativa se clicar na mesma turma
  turmaFiltrada = (turmaFiltrada === turma) ? null : turma;
  aplicarFiltroCelulas();
}

function toggleFiltroMateria(materia, prof) {
  // Ativa o filtro ou desativa se clicar no mesmo par matéria+prof
  if (materiaFiltrada === materia && profFiltrado === prof) {
    materiaFiltrada = null;
    profFiltrado = null;
  } else {
    materiaFiltrada = materia;
    profFiltrado = prof;
  }
  aplicarFiltroCelulas();
}

function aplicarFiltroCelulas() {
  const tabelas = document.querySelectorAll("table");
  
  // 1. Aplica o filtro de Turma (Esconde/Mostra as colunas inteiras)
  document.querySelectorAll("th[data-turma], td[data-turma]").forEach(el => {
    if (turmaFiltrada) {
      el.style.display = (el.dataset.turma === turmaFiltrada) ? "" : "none";
    } else {
      el.style.display = "";
    }
  });

  // Ajusta a largura da tabela para não ficar esticada quando filtrar apenas 1 turma
  tabelas.forEach(t => {
      t.style.minWidth = turmaFiltrada ? "auto" : "1400px";
  });

  // 2. Aplica o filtro de Matéria e Professor (Dá o efeito de opacidade)
  document.querySelectorAll("td[data-materia]").forEach(el => {
    el.classList.remove("inativo"); // Reseta o estado
    
    if (materiaFiltrada) {
      const celulaProf = el.dataset.prof || null;
      // Checa se a matéria e o professor da célula batem exatamente com o clique
      if (el.dataset.materia === materiaFiltrada && celulaProf === profFiltrado) {
        el.classList.remove("inativo");
      } else {
        el.classList.add("inativo");
      }
    }
  });
  
  atualizarAvisoFiltro();
}

function atualizarAvisoFiltro() {
  let aviso = document.getElementById("aviso-filtros");
  
  // Cria o elemento de aviso se ele não existir
  if(!aviso) {
    aviso = document.createElement("div");
    aviso.id = "aviso-filtros";
    aviso.className = "filtro-ativo-aviso";
    
    // Insere o aviso logo após os botões de turno (segundo conjunto de .botoes)
    const botoesTurno = document.querySelectorAll(".botoes")[1];
    botoesTurno.parentNode.insertBefore(aviso, botoesTurno.nextSibling);
  }
  
  let textos = [];
  if (turmaFiltrada) textos.push(`Série: ${turmaFiltrada}`);
  if (materiaFiltrada) {
      const nomeProf = profFiltrado ? profFiltrado : 'Sem Professor';
      textos.push(`Disciplina: ${materiaFiltrada} (${nomeProf})`);
  }
  
  if (textos.length > 0) {
    aviso.innerHTML = `Filtros Ativos: <strong>${textos.join(" | ")}</strong> <br><small>(Clique novamente no item para remover o filtro)</small>`;
  } else {
    aviso.innerHTML = "";
  }
}