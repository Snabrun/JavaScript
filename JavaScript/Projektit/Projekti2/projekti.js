var kerrat = 0;
var luvut = document.getElementsByClassName('nayta');
let arvoLuku = Math.ceil(Math.random()*10);
let win = 0;
var winNumero = 0;
var loseNumero = 0;


function arvaa(arpa)
{
  kerrat++;
  var arvaus = arpa.value;
  if (kerrat < 3 && wi == 0)
  {
    if (arvaus < arvoLuku)
    {
      document.getElementById('viesti').innerHTML = 'Valitsit pienen numeron';
      document.getElementById(''+arvaus+'').classList.add("vaarin");
      document.getElementById(''+arvaus+'').disabled = true;
    }
    else if (arvaus > arvoLuku)
    {
      document.getElementById('viesti').innerHTML = 'Valitsit liian suuren numeron';
      document.getElementById('' +arvaus+'').classList.add("vaarin");
      document.getElementById(''+arvaus+'').disabled = true;      
    }
    else if (arvus == arvoLuku)
    {
      document.getElementById('viesti').innerHTML = 'Oikein, käytit ' + kerrat + ' kertaa<br><button class="taas" onclick="pelaaTaas()">Pelaa taas</button>';
      document.getElementById(''+arvoLuku+'').classList.toggle("oikein");
      win = 1;
      winNumero += 1;
      document.getElementById('winNumero').innerHTML = winNumero;

    }
  }
  else if (kerrat == 3 && win == 0)
  {
    if (arvaus < arvoLuku)
    {
      document.getElementById('viesti').innerHTML = 'Valitsit liian pienen numeron ja käytit kaikki arvauksesi,<br> oikea luku on ' + arvoLuku + '<br><button class="taas" onclick="pelaaTaas()">Pelaa taas</button>';
      document.getElementById('' + arvaus+'').classList.add("vaarin");
      document.getElementById(''+arvaus+'').disabled = true;
    }
  }
}
