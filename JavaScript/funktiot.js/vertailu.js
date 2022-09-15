var terve = "maailma";
function heippa(terve)
{
  var sana = "hei ";
  alert(sana + terve + "!");
}
function laskeYhteen(l1, l2)
{
  var yhteensa = l1+l2;
  return yhteensa;
}
function tulosta(l1, l2)
{
  var vastaus = laskeYhteen(l1, l2);
  alert(vastaus);
}
function onkoSamat(lu1, lu2)
{
  if(lu1 == lu2)
  {
    alert("Luvut ovat samat!");
  }
  else {
    alert("Luvut eivät ole samat!");
  }
}
function luvunKoko(luk1)
{
  if(luk1 < 0)
  {
    alert("Luku on negatiivinen");
  }
  else if (luk1 < 1000)
  {
    alert("Luku on pienempi kuin 1000");
  }
  else {
    alert("Luku on suurempi tai yhtäsuuri kuin 1000");
  }
}
function eriSuuret(luku1, luku2)
{
  if(luku1 != luku2)
  {
    alert("Luvut ovat erisuuret");
  }
  else {
    alert("Luvut ovat samat");
  }
}
function jaTesti(x1)
{
  if(x1 >= 100 && x1 <= 200)
  {
    alert("Luku on lukujen 100 ja 200 välissä");
  }
  else {
    alert("Luku ei ole lukujen 100 ja 200 välissä");
  }
}
function taiTesti(x2)
{
  if(x2 < 100 || x2 > 200)
  {
    alert("Luku on pienempi kuin 100 tai suurempi kuin 200");
  }
  else {
    alert("Luku on 100 ja 200 välissä");
  }
}
