function actualizarValor(id){document.getElementById('val'+id).textContent=document.getElementById(id).value;}
function calcularICA(){const pm25=parseFloat(document.getElementById('pm25').value);const pm10=parseFloat(document.getElementById('pm10').value);
const C=Math.max(pm25,pm10);const ICA=23.52+2.236*C;const res=evaluarICA(ICA);
document.body.style.backgroundColor=res.color;document.getElementById('valorICA').textContent='ICA: '+ICA.toFixed(1);
document.getElementById('estadoICA').textContent='Estado: '+res.estado;document.getElementById('recomendaciones').textContent=res.rec;
generarEscenarios();}
function evaluarICA(I){if(I<=50)return{estado:'Buena',color:'#00e400',rec:'Sin riesgo.'};
if(I<=100)return{estado:'Aceptable',color:'#ffff00',rec:'Evite exposición prolongada.'};
if(I<=150)return{estado:'Dañina sensibles',color:'#ff7e00',rec:'Evite ejercicio al aire libre.'};
if(I<=200)return{estado:'Dañina',color:'#ff0000',rec:'Riesgo general.'};
if(I<=300)return{estado:'Muy dañina',color:'#8f3f97',rec:'Permanezca en su casa.'};
return{estado:'Peligrosa',color:'#7e0023',rec:'Emergencia sanitaria.'};}
function generarEscenarios(){const tb=document.querySelector('#tablaEscenarios tbody');tb.innerHTML='';for(let i=1;i<=5;i++){const p25=Math.random()*150,p10=Math.random()*150;const C=Math.max(p25,p10);const I=23.52+2.236*C;const r=evaluarICA(I);
tb.innerHTML+=`<tr style='background:${r.color}33'><td>${i}</td><td>${p25.toFixed(1)}</td><td>${p10.toFixed(1)}</td><td>${I.toFixed(1)}</td><td>${r.estado}</td></tr>`;}}
