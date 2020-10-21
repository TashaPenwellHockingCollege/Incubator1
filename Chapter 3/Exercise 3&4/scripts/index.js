function display() {
  var gallons = document.getElementById("gallons").value;

  document.getElementById("gallonsDisplay").innerHTML =
    gallons;


  var litres = document.getElementById("gallons").value * 3.789;

  document.getElementById("litres").innerHTML = litres;

}