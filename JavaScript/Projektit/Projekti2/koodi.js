var rivi1 = document.getElementById('m1');
var rivi2 = document.getElementById('m2');
var rivi3 = document.getElementById('m3');

var arvattava = Math.floor(Math.random()*10) + 1;
var arvaustenLukumaara = 1;
let arvatutNumerot = [];
var voitot = 0;
var tappiot = 0;



function napit(arvo)
{
  if(arvaustenLukumaara >= 3)
  {
    arvatutNumerot.push(arvo.value);
    for (var n = 1; n <= 10; n++)
    {
      document.getElementById(n).classList.add("disabled");
      document.getElementById(n).disabled = true;
    }
    m2.innerHTML = "Arvausten lukumäärä: " + arvaustenLukumaara;
    m3.innerHTML = "Arvatut numerot ovat: " + arvatutNumerot;
  }
  else
  {
    arvatutNumerot.push(arvo.value);
  }
  if(arvo.value < arvattava)
  {
    m1.innerHTML = "Annoit liian pienen numeron!";
    for(var i = 1; i <= arvo.value; i++)
    {
      document.getElementById(i).classList.add("disabled");
      document.getElementById(i).disabled = true;
    }
    if(arvaustenLukumaara >= 3)
    {
      tappiot++;
    }
  }
  else if(arvo.value > arvattava)
  {
    m1.innerHTML = "Annoit liian suuren numeron!";
    for(var j = arvo.value; j <= 10; j++)
    {
      document.getElementById(j).classList.add("disabled");
      document.getElementById(j).disabled = true;
    }
    if(arvaustenLukumaara >= 3)
    {
      tappiot++;
    }
  }
  else
  {
    m1.innerHTML = "Oikein, tämä oli koneen arpoma numero";
    document.getElementById(arvo.value).classList.add("oikein");
    document.getElementById(arvo.value).disabled = true;
    voitot++;
    for(var k = 1; k <= 10; k++ )
    {
      if(k == arvo.value && arvo.value !=10)
      {
        k++;
      }
      document.getElementById(k).classList.add("disabled");
      document.getElementById(k).disabled = true;
    }
  }
  m2.innerHTML = "Arvausten lukumäärä: " + arvaustenLukumaara;
  m3.innerHTML = "Arvatut numerot ovat: " + arvatutNumerot;
  arvaustenLukumaara++;
  document.getElementById('tilanne').innerHTML = "voitot: " + voitot + ' / tappiot: ' + tappiot;
}
function uusix()
{
  arvaustenLukumaara = 1;
  arvatutNumerot.length = 0;
  arvattava = Math.floor(Math.random()*10) + 1; 
  for(var m = 1; m <= 10; m++)
  {
    document.getElementById(m).classList.remove("disabled");
    document.getElementById(m).classList.remove("oikein");
    document.getElementById(m).disabled = false;
    m1.innerHTML = "";
    m2.innerHTML = "Arvausten lukumäärä: 0";
    m3.innerHTML = "Arvatut numerot: -";
  }
}
