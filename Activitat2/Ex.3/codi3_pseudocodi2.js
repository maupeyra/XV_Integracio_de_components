var a = parseInt(prompt("Intordueixi una xifra qualsevol"));
var b = parseInt(prompt("Intordueixi una xifra qualsevol"));
var c = parseInt(prompt("Intordueixi una xifra qualsevol"));
if(a==b){
    if(b==c)
        document.write('Els tres numeros son iguals');
    else if(b>c)
        alert("Els dos primers nombres són igual i l'orde és: " +a+' = '+b+' > '+c);
    else
        alert("Els dos primers nombres són igual i l'ordre és: "+c+' > '+a+' = '+b);
}
else if(a==c){
    if(a>b)
        alert("El primer i el tercer són iguals i l'orde és: "+a+' = '+c+' > '+b);
    else
        alert("El primer i el tercer són iguals i l'orde és: "+b+' > '+a+' = '+c);
}
else if(b==c){
    if(b>a)
        alert("El segon i tercer son iguals i l'ordre és: "+b+' = '+c+' > '+a);
    else
        alert("El primer i el tercer són iguals i l'orde és: "+a+' > '+b+' = '+c);
}
else if((a>b)&&(b>c))
    alert("L'ordre és: "+a+' > '+b+' > '+c);
else if((a>c)&&(c>b))
    alert("L'ordre és: "+a+' > '+c+' > '+b);
else if((b>a)&&(a>c))
    alert("L'ordre és: "+b+' > '+a+' > '+c);
else if((b>c)&&(c>a))
    alert("L'ordre és: "+b+' > '+c+' > '+a);
else if((c>a)&&(a>b))
    alert("L'ordre és: "+c+' > '+a+' > '+b);
else if((c>b)&&(b>a))
    alert("L'ordre és: "+c+' > '+b+' > '+a);