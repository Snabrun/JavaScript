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
  }
}
