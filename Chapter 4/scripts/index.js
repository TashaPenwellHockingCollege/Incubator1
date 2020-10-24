function setup() {
    document.getElementById("gallons").onclick =
      function () {
        setUnits(" Litres");
      };
    document.getElementById("litres").onclick =
      function () {
        setUnits(" Gallons");
      };
  }

  function setUnits(unit) {
    var label = document.getElementById("label");
    label.innerHTML = unit;
  }

  function initialize() {
    var litresInput = document.getElementById(
        "litres");
      litresInput.addEventListener("blur",
        validateLitres());
    
      var gallonsInput = document.getElementById(
        "gallons");
      gallonsInput.addEventListener("blur",
        validateGallons());
        window.alert("Hello");
  }
  
  function validateLitres() {
    var litresInput = document.getElementById(
        "gallons");
    if (litresInput.value < 1 || litresInput.value >
      4000) {
      alert(
        'Gallon quantity must be between 1 and 4000.');
      litresInput.value = "";
      console.log("success");
    }
  }
  
  function validateGallons() {
    var gallonsInput = document.getElementById(
        "litres");
    if (gallonsInput.value < 1 || gallonsInput.value > 1000) {
      alert(
        'Litre quantity must be between 1 and 1000.'
      )
      gallonsInput.value = "";
      console.log("success");
    } 
  }
  
  function convert() {
    var litresButton = document.getElementById(
      "litres");
    var measurement = document.getElementById(
      "measurement");
  
    if (litresButton.checked) {
      convertToGallon(measurement.value);
    } else {
      convertToLitres(measurement.value);
    }
  }
  
  function convertToLitres(gallons) {
    var gallonLitre = gallons * 3.79;
    document.getElementById("answer").innerHTML =
      gallons +
      " Gallons converts to " +
      gallonLitre.toFixed(1) +
      " Litres";
  }
  
  function convertToGallon(litres) {
    var litreGallon = litres / 3.785;
    document.getElementById("answer").innerHTML =
      litres +
      " Litres converts to " +
      litreGallon.toFixed(1) +
      " Gallons";
  }