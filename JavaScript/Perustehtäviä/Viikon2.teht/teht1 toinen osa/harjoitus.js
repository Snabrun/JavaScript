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
switch (paiva) {
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

function karkavuosi()
{
  var vuosi = document.getElementById('vuodenN').value;
  if (vuosi/4 && vuosi/100 == 1)
  {
    document.getElementById("v3").innerHTML = "Vuosi on karkavuosi";
    console.log('vuosi');
    else if (vuosi/400)
    {
      document.getElementById("v3").innerHTML = "Vuosi on karkavuosi";
    }
    else
    {
      document.getElementById("v3").innerHTML = "Vuosi ei ole karkausvuosi";
    }
  }
}
