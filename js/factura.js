var precio;
var cantidad;
var total;
productos=['Echo Dot G1', 'Echo dot G3', 'Echo dot G5', 'Echo Show'];
producto='Echo dot G3';
precio=[60.00, 90.00, 120.00, 110.00];
cantidad=[50,50,35,40];
total=precio*cantidad;
var texto='';
var el=document.getElementById('cost');
for(let i=0; i<productos.length;i++)
{
    texto+=productos[i]+' $'+(precio[i]*cantidad[i])+' ';
}
el.textContent=texto;
