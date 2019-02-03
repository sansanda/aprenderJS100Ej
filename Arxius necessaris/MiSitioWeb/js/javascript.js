var prueba = "prueba2222";
function printToday()
{
  var hoy = new Date();
  document.write(+ hoy.getDate() + "/" + (hoy.getMonth()+1) + "/" + hoy.getFullYear());
};

function fechaCompleta(fecha,formato)
{
  var diaSemana = fecha.getDay()-1;
  if (diaSemana<0) diaSemana=6;
  
  var dia = fecha.getDate(); //dia del mes
  var diaDosDigitos = dia;
  if (dia<10) diaDosDigitos = '0' + dia;
  var dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
  var nombreDia = dias[diaSemana];
  
  var mes = fecha.getMonth();// mes del año (enero = 0)
  var mesActual = mes+1;
  var meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','dieciembre'];
  var nombreMes = meses[mesActual];

  var year = fecha.getFullYear();

  formato=formato.replace(/#DIASEMANA#/,nombreDia);
  formato=formato.replace(/#diasemana#/,nombreDia.slice(0,3));
  formato=formato.replace(/#DIA#/,dia);
  formato=formato.replace(/#dia#/,diaDosDigitos);
  formato=formato.replace(/#MESES#/,nombreMes);
  formato=formato.replace(/#meses#/,nombreMes.slice(0,3));
  formato=formato.replace(/#MES#/,nombreMes);
  formato=formato.replace(/#YEAR#/,year);
  formato=formato.replace(/#year#/,year.toString().slice(-2));
  
  return formato;
  
}