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
    var measurementInput = document.getElementById(
      "measurement");
    measurementInput.addEventListener("input", function () {
      if (document.getElementById("label").textContent === " Gallons") {
        validateGallons(); 
      }
      else {
        validateLitres();
      }
    });
  }
  
  function validateGallons() {
    var measurementInput = document.getElementById(
      "measurement");
    if (measurementInput.value < 1 || measurementInput.value > 4000) {
      alert('Gallon quantity must be between 1 and 4000.');
      measurementInput.value = "";
      console.log("success");
    }
    else {
      console.log("failed")
    }
  }

  function validateLitres() {
    var measurementInput = document.getElementById(
      "measurement");
    if (measurementInput.value < 1 || measurementInput.value > 4000) {
      alert('Gallon quantity must be between 1 and 1000.');
      measurementInput.value = "";
      console.log("success");
    }
    else {
      console.log("failed")
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