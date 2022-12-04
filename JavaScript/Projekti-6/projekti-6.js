function formValue(form) {
  var firstName = form.firstName.value;
  var lastName = form.lastName.value;
  var address = form.address.value;
  var formIndex = form.index.value;
  var city = form.city.value;
  var phone = form.phone.value;
  var email = form.email.value;
  //tarkistetaan etunimesi
  console.log(firstName);
  console.log(email);
  if (firstName.length < 3) {
    alert("Anna nimesi, jossa on vähintään kolme kirjainta");
    return false;
  }
  //tarkistetaan sukunimesi
  if (lastName.length < 3) {
    alert("Anna sukunimesi, jossa on vähintään kolme kirjainta");
    return false;
  }
  //tarkistetaan osoitteesi
  if (address.length < 3) {
    alert("Anna osoitteesi, jossa on vähintään kolme kirjainta");
    return false;
  }
  //tarkistetaan indeksisi
  if (formIndex.length < 5) {
    alert("Anna indeksisi, jossa on vähintään viisi lukua");
    return false;
  }
  //tarkistetaan kaupunkisi
  if (city.length < 3) {
    alert("Anna kaupunkisi, jossa on vähintään kolme kirjainta");
    return false;
  }
  //tarkistetaan puhelimesi
  if (phone.length < 6) {
    alert("Anna puhelimesi, jossa on vähintään kuusi lukua");
    return false;
  }
  //lähetetään tietoja paikalliseen tallennustilaan


  else {
    console.log("test");
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var address = document.getElementById("form-address").value;
    var postIndex = document.getElementById("form-index").value;
    var city = document.getElementById("form-city").value;
    var phone = document.getElementById("form-phone").value;
    var userMail = document.getElementById("form-email").value;
    const userInfo = {
      firstName,
      lastName,
      address,
      postIndex,
      city,
      phone,
    };
    localStorage.setItem(userMail, JSON.stringify(userInfo));
  }


}
