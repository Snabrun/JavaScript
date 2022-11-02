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

function check()
{
  var paiva = document.getElementById('number').value;
switch (paiva)
{
  case "1":
  document.getElementById("v2").innerHTML = "Maanantai"
    break;
    case "2":
    document.getElementById("v2").innerHTML = "Tiistai"
      break;
      case "3":
      document.getElementById("v2").innerHTML = "Keskiviikko"
        break;
        case "4":
        document.getElementById("v2").innerHTML = "Torstai"
          break;
          case "5":
          document.getElementById("v2").innerHTML = "Perjantai"
            break;
            case "6":
            document.getElementById("v2").innerHTML = "Lauantai"
              break;
              case "7":
              document.getElementById("v2").innerHTML = "Suunnuntai"
                break;

  default:
  document.getElementById("v2").innerHTML = "Anna joku numero 1-7"


 }
}

function karka()
{
  var vuosi = document.getElementById('vuodenN').value;
  if (vuosi % 4 != 0 || (vuosi % 100 == 0 && vuosi % 400 != 0))
  {
    document.getElementById("v3").innerHTML = "Tavallinen";
  }
  else {
    document.getElementById("v3").innerHTML = "Karkavuosi";
  }
}

function keskiA()
{
  var numero1 = document.getElementById('luku4').value;
  var numero2 = document.getElementById('luku5').value;
  var numero3 = document.getElementById('luku6').value;
  var numero4 = document.getElementById('luku7').value;
  var numero5 = document.getElementById('luku8').value;
  var summa = Number(numero1) + Number(numero2) + Number(numero3) + Number(numero4) + Number(numero5);
  var kesk = summa / 5;
  if (summa > 0 && kesk > 0)
  {
    document.getElementById("v4").innerHTML = "Lukujen summa on: " + summa + " ja keskiarvo on: " + kesk;
  }
  else
  {
    document.getElementById("v4").innerHTML = "Anna joku luku!";
  }
}

function laskin()
{
  var x = document.getElementById('laskinx').value;
  for (var i=1; i < 11; i++)
  {
    lasku ="Kertolasku: " + x + "*" + i + "=" + x * i;
    document.write(lasku + "<br>")
  }


}
