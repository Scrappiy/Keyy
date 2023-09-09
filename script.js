function vvd(){
    let a = document.getElementById("vx").value;
    let b=0, c=0, d=0;
    b=Number(a);
    alert(b);
c=b/1000;
d=b/43;
b=Math.round(Math.log10(b));
c=Math.round(Math.exp(c));
d=Math.round(Math.log2(d));
a=String(b)+String(d)+String(c);
document.getElementById("vx").value=a;
alert(a);
}