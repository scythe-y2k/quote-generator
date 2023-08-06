let totalPrice = 0;

function displayServiceDetails() {
  const selectElement = document.getElementById("service-select");
  const selectedOption = selectElement.options[selectElement.selectedIndex].value;

  if (selectedOption) {
    const [serviceName, serviceRate] = selectedOption.split("|");
    document.getElementById("service-rate").value = parseInt(serviceRate);
  } else {
    document.getElementById("service-rate").value = "";
  }
}

function generateQuote() {
  const serviceName = document.getElementById("service-select").value;
  const serviceRate = parseInt(document.getElementById("service-rate").value);
  const service
