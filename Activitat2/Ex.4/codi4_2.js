/*SUMA*/ 
var inici = new Date();
var a = 1000;
var b = 1000;

for (var i = 0; i<a; i++){
    for(var j=0; j<b; j++)
    document.write(i+j)
}
var fi = new Date();
document.write("<br>")
document.write((fi-inici)+" temps d'execusió en ms");
document.write("<br>")

/*RESTA*/ 
var inici = new Date();
var a = 10;
var b = 10;

for (var i = 0; i<a; i++){
    for(var j=0; j<b; j++)
    document.write(i-j)
}
var fi = new Date();
document.write("<br>")
document.write((fi-inici)+" temps d'execusió en ms");
document.write("<br>")

/*MULTIPLICACIÓ*/ 
var inici = new Date();
var a = 1000;
var b = 1000;

for (var i = 0; i<a; i++){
    for(var j=0; j<b; j++)
    document.write(i*j)
}
var fi = new Date();
document.write("<br>")
document.write((fi-inici)+" temps d'execusió en ms");
document.write("<br>")

/*DIVISIÓ*/ 
var inici = new Date();
var a = 1000;
var b = 1000;

for (var i = 0; i<a; i++){
    for(var j=0; j<b; j++)
    document.write(i/j)
}
var fi = new Date();
document.write("<br>")
document.write((fi-inici)+" temps d'execusió en ms");
document.write("<br>")