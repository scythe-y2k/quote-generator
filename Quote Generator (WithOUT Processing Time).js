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
  const serviceQuantity = parseInt(document.getElementById("service-quantity").value);

  if (!serviceName || !serviceRate || isNaN(serviceRate) || isNaN(serviceQuantity) || serviceQuantity < 1) {
    alert("Please select a valid service and enter a valid quantity and rate.");
    return;
  }

  const totalRate = serviceRate * serviceQuantity;
  totalPrice += totalRate;

  let quoteItem = `<div>${serviceQuantity > 1 ? serviceQuantity + " " : ""}${serviceName.split("|")[0]}${serviceQuantity > 1 ? " (" + "&#8369;" + serviceRate + " each)" : ""}: &#8369;${totalRate} <button class="no-select" onclick="deleteItem(event)">Delete</button></div>`;

  document.getElementById("generated-quote").innerHTML += quoteItem;
  document.getElementById("total-price").innerText = totalPrice;

  // Reset quantity text box to 1 after adding service to quote
  document.getElementById("service-quantity").value = 1;
}

function deleteItem(event) {
  const itemDiv = event.target.parentElement;
  const itemValue = itemDiv.textContent.trim();
  const itemRate = parseInt(itemValue.match(/₱(\d+)/)[1]);
  totalPrice -= itemRate;
  document.getElementById("total-price").innerText = totalPrice;
  itemDiv.remove();
}
