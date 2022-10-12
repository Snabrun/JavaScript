function tehtava1()
{
  var points = 0
  var sana = document.getElementById('word').value;
  for (var i = 0; i < sana.length; i++)
  {
    switch (sana[i])
    {
      case 'a':
      case 'e':
      case 'i':
      case 'n':
      case 's':
      case 't':
      case 'A':
      case 'E':
      case 'I':
      case 'N':
      case 'S':
      case 'T':
      points ++;
      break;
      case 'o':
      case 'ä':
      case 'k':
      case 'l':
      case 'O':
      case 'Ä':
      case 'K':
      case 'L':
      points +=2;
      break;
      case 'u':
      case 'm':
      case 'U':
      case 'M':
      points +=3;
      break;
      case 'y':
      case 'h':
      case 'j':
      case 'p':
      case 'r':
      case 'v':
      case 'Y':
      case 'H':
      case 'J':
      case 'P':
      case 'R':
      case 'V':
      points +=4;
      break;
      case 'ö':
      case 'd':
      case 'Ö':
      case 'D':
      points +=7;
      break;
      case 'b':
      case 'f':
      case 'g':
      case 'B':
      case 'F':
      case 'G':
      points +=8;
      break;
      case 'c':
      case 'C':
      points += 10;
      break;
      default:
      points += 12;
    }
    document.getElementById('v1').innerHTML = "<p>Sanan " + sana + " pisteet ovat: " + points + "</p>";
  }
}
