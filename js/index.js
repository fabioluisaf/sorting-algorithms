var elementsInput = document.querySelector("#elements");
var algorithmsInput = document.querySelector("#algorithms");

var resetButton = document.querySelector("#reset-button");
var startButton = document.querySelector("#start-button");
var shuffleButton = document.querySelector("#shuffle-button");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var slope = canvas.height / canvas.width;
var barWidth = 0;
var isRunning = false;

var array;
var algorithmsArray = [
  null,
  new BubbleSort(),
  new SelectionSort(),
  new InsertionSort(),
  new BinaryInsertionSort(),
  new CocktailSort(),
  new MergeSort(),
  new QuickSort(),
  new GravitySort()
];

createSelectionInput(algorithmsArray);
makeBackground();
toggleElements();

//#############################################################################################################
//----------------------------------------------EVENT LISTENERS------------------------------------------------
//#############################################################################################################
//-------------------------------------------------------------------------------------------------------------

elementsInput.addEventListener("input", function(event) {
  //Number of elements textbox
  var numberOfElements = collectInputValue();

  barWidth = canvas.width / numberOfElements;
  array = [];

  var count = barWidth;

  for (var i = 0; i < numberOfElements; i++, count += barWidth) {
    array[i] = new Bar(barWidth, slope * count);
  }

  array = shuffle(array);

  toggleElements();
  drawOnScreen(array, "white");
});

//-------------------------------------------------------------------------------------------------------------

algorithmsInput.addEventListener("change", function(event) {
  toggleElements();
  shuffleButton.dispatchEvent(new Event("click"));
});

//-------------------------------------------------------------------------------------------------------------

startButton.addEventListener("click", async function(event) {
  console.log(
    "Running " +
      algorithmsArray[algorithmsInput.value].name +
      " for " +
      elementsInput.value +
      " elements"
  );
  isRunning = true;
  toggleElements();

  await algorithmsArray[algorithmsInput.value].sort(array);

  console.log("Done!");
  isRunning = false;

  drawOnScreen(array, "#00FF00");
  toggleElements();
});

//-------------------------------------------------------------------------------------------------------------

shuffleButton.addEventListener("click", function(event) {
  array = shuffle(array);
  toggleElements();
  drawOnScreen(array, "white");
});

//-------------------------------------------------------------------------------------------------------------

resetButton.addEventListener("click", function(event) {
  //Reset button
  elementsInput.value = "";
  algorithmsInput.value = 0;

  elementsInput.dispatchEvent(new Event("input"));
  algorithmsInput.dispatchEvent(new Event("change"));

  toggleElements();
});

//#############################################################################################################
//-----------------------------------------BUTTON DISPLAYABILITY-----------------------------------------------
//#############################################################################################################
//-------------------------------------------------------------------------------------------------------------

function toggleStartButton() {
  console.log();
  if (
    elementsInput.value === 0 ||
    elementsInput.value === "0" ||
    elementsInput.value === "" ||
    algorithmsInput.value === "0" ||
    algorithmsInput.value === 0 ||
    isRunning
  ) {
    startButton.disabled = true;
  } else {
    startButton.disabled = false;
  }
}

//-------------------------------------------------------------------------------------------------------------

function toggleResetButton() {
  if (
    ((elementsInput.value === 0 ||
      elementsInput.value === "0" ||
      elementsInput.value === "") &&
      (algorithmsInput.value === "0" || algorithmsInput.value === 0)) ||
    isRunning
  ) {
    resetButton.disabled = true;
  } else {
    resetButton.disabled = false;
  }
}

//-------------------------------------------------------------------------------------------------------------

function toggleShuffleButton() {
  if (!startButton.disabled && !isRunning) {
    shuffleButton.disabled = false;
  } else {
    shuffleButton.disabled = true;
  }
}

//-------------------------------------------------------------------------------------------------------------

function toggleAlgorithmSelection() {
  if (!resetButton.disabled && !isRunning) {
    algorithmsInput.disabled = false;
  } else {
    algorithmsInput.disabled = true;
  }
}

//-------------------------------------------------------------------------------------------------------------

function toggleElementsInput() {
  if (!isRunning) {
    elementsInput.disabled = false;
  } else {
    elementsInput.disabled = true;
  }
}

//-------------------------------------------------------------------------------------------------------------

function toggleElements() {
  toggleResetButton();
  toggleStartButton();
  toggleShuffleButton();
  toggleAlgorithmSelection();
  toggleElementsInput();
}

//#############################################################################################################
//--------------------------------------------FUNCTIONALITIES--------------------------------------------------
//#############################################################################################################
//-------------------------------------------------------------------------------------------------------------

function drawOnScreen(array, color) {
  //display an array as a bar graph
  makeBackground();

  var position = 0;

  for (var i = 0; i < array.length; i++) {
    array[i].color = color;
    array[i].display(position);
    position += barWidth;
  }
}

//-------------------------------------------------------------------------------------------------------------

function createSelectionInput(optionsArray) {
  for (var i = 1; i < optionsArray.length; i++) {
    algorithmsInput.appendChild(createOption(optionsArray[i].name, i));
  }
}

//-------------------------------------------------------------------------------------------------------------

function createOption(name, value) {
  var option = document.createElement("option");
  option.textContent = name;
  option.value = value;

  return option;
}

//-------------------------------------------------------------------------------------------------------------

function collectInputValue() {
  if (elementsInput.value < 0) {
    elementsInput.value = "";
  }

  if (elementsInput.value > 9999) {
    elementsInput.value = 9999;
  }

  return elementsInput.value;
}
