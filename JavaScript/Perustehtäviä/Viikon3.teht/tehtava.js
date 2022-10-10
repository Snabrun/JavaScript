function tehtava1()
{
 var larvo = parseInt(document.getElementById('pluku').value);
 var jono = "<p>";
 for (var i=2; i < larvo; i= i+2)
 {
    jono =+ i;
    jono =+ " ";
 }
    jono =+ "</p>";
 document.getElementById('v1').innerHTML = jono;
}
