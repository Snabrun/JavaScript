function tarkasta()
{
  document.getElementById('eka').style.backgroundColor = "blue";
  document.getElementById('v1').style.border = "2px solid gray";
var massive = [];
  console.log(massive);
  massive[0] = document.getElementById('luku1').value;
  massive[1] = document.getElementById('luku2').value;
  massive[2] = document.getElementById('luku3').value;
  console.log(massive);
  document.getElementById('v1').innerHTML = "Luvut ovat: " + massive + "<br />Luvut järjestyksessä: " + massive.sort();
}

function max()
{
  document.getElementById('toka').style.backgroundColor = "blue";
  document.getElementById('v2').style.border = "2px solid gray";
  var massive1 = [];
  massive1[0] = document.getElementById('luk1').value;
  massive1[1] = document.getElementById('luk2').value;
  massive1[2] = document.getElementById('luk3').value;
  massive1[3] = document.getElementById('luk4').value;
  massive1[4] = document.getElementById('luk5').value;
  console.log(Math.max.apply(Math,massive1));
  document.getElementById('v2').innerHTML = "Luvut ovat: " + massive1 + "<br>Suurin luku: " + Math.max.apply(null,massive1);
}

function pariton()
{
  var number = document.getElementById('pariton2').value;
  if (number%2 == 0)
  {
    document.getElementById('v3').innerHTML = "Luku on parillinen";
  }
  else
  {
  document.getElementById('v3').innerHTML = "Luku on pariton";
  }
}

function ika()
{
  var ikaraja2 = document.getElementById('ikaraja').value;
  if (ikaraja2 < 16)
  {
  document.getElementById('v4').innerHTML = "Voit ajaa polkupyörää";
  }
  else if (ikaraja2 < 18)
  {
    document.getElementById('v4').innerHTML = "Voit ajaa mopoa";
  }
  else
  {
    document.getElementById('v4').innerHTML = "Voit ajaa autoa";
  }
}

function kielet()
{
  var random = document.getElementById('kie').value;
  if (random == "ru")
  {
    document.getElementById('v5').innerHTML = "Привет мир!";
  }
  else if (random == "swe")
  {
    document.getElementById('v5').innerHTML = "Hej världen!";
  }
  else
  {
    document.getElementById('v5').innerHTML = "Hello world!";
  }
}
