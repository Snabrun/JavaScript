function tarkasta()
{
  var luku1 = document.getElementById('luku').value;
if (luku1 > 0) {
  document.getElementById("v1").innerHTML = "Luku on positiivinen";
}
else {
  document.getElementById("v1").innerHTML = "Luku on negatiivinen";
}

}
