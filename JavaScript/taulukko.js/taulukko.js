function esimerkkiTaulukko()
{
  var autot =  [];
  var caarat = ["Tesla", "VW i3", "Hyndai ionic"];
  autot.push("Jeep");
  document.write(caarat[1] + " " +autot[0] + "<br />");
  document.write(caarat + "<br />");
  document.write(autot + "<br />");
  var siirrettava = caarat.pop();
  document.write("Siirrettävä = " + siirrettava);
  document.write("<br /> Caarat taulukko = " + caarat);
  autot.unshift(siirrettava);
  document.write("<br /> Autot taulukko = " + autot);
  document.write("<br />Caarat taulukko = " + caarat + "<br />Autot taulukko" + autot);

}
