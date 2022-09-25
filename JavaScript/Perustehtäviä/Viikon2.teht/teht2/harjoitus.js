function tarkasta()
{
  var paiva = document.getElementById('luku').value;
switch (paiva) {
  case "1":
  document.getElementById("v1").innerHTML = "Maanantai"
    break;
    case "2":
    document.getElementById("v1").innerHTML = "Tiistai"
      break;
      case "3":
      document.getElementById("v1").innerHTML = "Keskiviikko"
        break;
        case "4":
        document.getElementById("v1").innerHTML = "Torstai"
          break;
          case "5":
          document.getElementById("v1").innerHTML = "Perjantai"
            break;
            case "6":
            document.getElementById("v1").innerHTML = "Lauantai"
              break;
              case "7":
              document.getElementById("v1").innerHTML = "Suunnuntai"
                break;

  default:
  document.getElementById("v1").innerHTML = "Anna joku numero 1-7"


}

}
