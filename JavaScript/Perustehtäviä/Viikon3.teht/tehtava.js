function tehtava1()
{
 var larvo = parseInt(document.getElementById('pluku').value);
 var parLuvut = []
 for (var i=2; i < larvo; i= i+2)
 {
  parLuvut.push(i);
 }
 document.getElementById('v1').innerHTML = parLuvut.join(" ");
}

function tehtava2()
{
  var salasana = document.getElementById("oldSana").value;
  var newSalasana = []
  for (var i = 0; i < salasana.length; i++)
  {
  newSalasana += salasana[i] + 'Ö';
  }
  document.getElementById('v2').innerHTML = newSalasana;
}

function tehtava3()
{
  aSana = document.getElementById('sanaÖ').value;
  var vastaus = "ei ole";
  for (var i = 0; i < aSana.length; i++)
    {
      if (aSana[i] == "ö" || aSana[i] == "Ö")
      {
        vastaus = "On";
      }
      document.getElementById('v3').innerHTML = vastaus;

    }
}

function tehtava4()
{
  var kLuku = parseInt(document.getElementById('kerto').value);
  var vastausLuku = 1;
  for (var i = 1; i <= kLuku; i++)
  {
  vastausLuku *= i;
  }
  document.getElementById('v4').innerHTML = vastausLuku;
}

function tehtava5()
{
  var tulos = ''
  for (var i = 1; i <= 100; i++)
  {
    if (i%2 == 0 && i%3 == 0)
    {
        tulos += "Hipheijaa ";
    }
    else if (i%3 == 0)
    {
        tulos += "hip ";
    }
    else if (i%5 == 0)
    {
        tulos += "heijaa "
    }
    else
    {
        tulos += i + " ";
    }
    document.getElementById('v5').innerHTML = tulos;
  }
}

function tehtava6()
{
  var ekaN = ''
  for (var i = 1; i <= 10; i++)
  {
    ekaN += i + ' '
  }
  document.getElementById('v6').innerHTML = ekaN;
}

function tehtava7()
{
  var yhteensa = 0
  for (var i = 0; i <= 10; i++)
  {
    yhteensa += i
  }
  document.getElementById('v7').innerHTML = yhteensa;
}

function tehtava8()
{
  var ensiLuku = document.getElementById('enmLuku').value;
  var tLuku = document.getElementById('toiLuku').value;
  poteensi = ensiLuku ** tLuku;
  document.getElementById('v8').innerHTML = poteensi;
}

function tehtava9()
{
  var luvut5 = []
  luvut5[0] = document.getElementById('luvu1').value;
  luvut5[1] = document.getElementById('luvu2').value;
  luvut5[2] = document.getElementById('luvu3').value;
  luvut5[3] = document.getElementById('luvu4').value;
  luvut5[4] = document.getElementById('luvu5').value;
  document.getElementById('v9').innerHTML = "Pienin luku: " + Math.min.apply(null, luvut5) + " ja isoin luku: " + Math.max.apply(null, luvut5);
}

function tehtava10()
{
  var oldPasspord = document.getElementById('old').value;
  var passwordArray = Array.from(oldPasspord);
  var randomKirjaimet = [...'abcdefghijklmnopqrstuvwxyzäöå'];
  var uusiSalasana = []
  for (var i = 0; i < passwordArray.length; i++)
  {
    uusiSalasana.push(passwordArray[i]);
    uusiSalasana.push(randomKirjaimet[Math.floor(Math.random()*randomKirjaimet.length)])
  }
  document.getElementById('v10').innerHTML = uusiSalasana.join("");
}

function tehtava11()
{
  var numb1, numb2, pnumb, pRnumb, pSumma=0, pRSumma=0, pLuvut='', pRLuvut='';
  numb1 = parseInt(document.getElementById('pNumber').value);
  numb2 = document.getElementById('pRnumber').value;
  if (numb1%2 == 0)
  {
    pnumb = numb1;
  }
  else
  {
    pnumb = numb1 + 1;
  }
  for (var i = pnumb; i < numb2; i += 2)
  {
    pLuvut += i + ' ';
    pSumma += i;
  }
  if (numb1%2 == 0)
  {
    pRnumb = numb1 + 1;
  }
  else
  {
    pRnumb = numb1;
  }
  for (var x = pRnumb; x < numb2; x+=2)
  {
    pRLuvut += x + ' ';
    pRSumma += x;
  }
  document.getElementById('v11').innerHTML = '<p>Parilliset numerot: ' + pLuvut +' ja niiden summa: ' + pSumma + '</p><p>Parittomat luvut: ' + pRLuvut + ' ja niiden summa: '+ pRSumma + '</p>';

}
