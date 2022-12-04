function formValue(form) {
  var firstName = form.firstName.value;
  var lastName = form.lastName.value;
  var address = form.address.value;
  var postIndex = form.index.value;
  var city = form.city.value;
  var phone = form.phone.value;
  var email = form.email.value;
  //tarkistetaan etunimesi
  console.log(firstName);
  if (firstName.length < 3) {
    alert("Anna nimi, jossa on vähintään kolme kirjainta")
    return false;
  }
  //tarkistetaan sukunimesi
  if (lastName.length < 3) {
    alert("Anna sukunimi, jossa on vähintään kolme kirjainta")
    return false;
  }
  if (address < 3) {

  }

}
