var inici = new Date();

for(var i = 0; i<=1500000; i++) {
    document.write(i);
}
var fi = new Date();
document.write("<br>");
document.write((fi-inici)+" temps d'execució en ms");


var inici = new Date();

for(var i = 0; i<=3000; i++) {
    document.write(i);
}
var fi = new Date();
document.write("<br>");
document.write((fi-inici)+" temps d'execució en ms");
