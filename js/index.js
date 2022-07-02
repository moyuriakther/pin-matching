// Random Pin Generate
const generatePin = () => {
  const generateRandom = Math.round(Math.random() * 10000);
  const randomString = generateRandom + "";
  if (randomString.length == 4) {
    document.getElementById("display-pin").value = randomString;
  } else {
    generatePin();
  }
};
// typed pin generate
document.getElementById("key-pad").addEventListener("click", function (e) {
  const typedNumber = e.target.innerText;
  const typedInput = document.getElementById("typed-numbers");
  if (isNaN(typedNumber)) {
    if (typedNumber == "C") {
      typedInput.value = "";
    }
  } else {
    const previousPin = typedInput.value;
    typedInput.value = previousPin + typedNumber;
  }
});
// pin Match
const verifyPin = () => {
  const generatePin = document.getElementById("display-pin").value;
  const typedPin = document.getElementById("typed-numbers").value;
  const notifySuccess = document.getElementById("notify-success");
  const notifyFail = document.getElementById("notify-fail");
  if (generatePin == typedPin) {
    notifySuccess.style.display = "block";
    notifyFail.style.display = "none";
  } else {
    notifySuccess.style.display = "none";
    notifyFail.style.display = "block";
  }
};
