// This code should execute when the popup of the extension is displayed
document.addEventListener("DOMContentLoaded", function () {
  // Function to check the website address
  function checkURL(url) {
    return /^https:\/\/chat\.openai\.com\/.*/.test(url);
  }

  // Requesting information about the current tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentURL = tabs[0].url;

    // If the website address doesn't match the pattern
    if (!checkURL(currentURL)) {
      // Display a message to the user
      const message = document.createElement("p");
      message.innerHTML =
        '<p>The website address is not correct. This extension only works at <a href="https://chat.openai.com/" target="_blank">chat.openai.com</a></p>';

      // Adding the message to the HTML tag with the class 'popup'
      document.querySelector(".messageAlert").appendChild(message);

      // Hide the popup
      document.querySelector(".button").style.display = "none";
    }
  });
});

// Function to update the UI based on the button state
const updateUI = (buttonOn) => {
  const eye = document.querySelector(".eye");
  const button = document.querySelector(".button");
  const circle = document.querySelector(".circle");

  if (buttonOn) {
    eye.innerHTML = "📡";
    button.style.animation = "transformToBlue 0.5s ease-in-out 0s forwards";
    circle.style.animation = "moveCircleRight 0.5s ease-in-out 0s forwards";
  } else {
    eye.innerHTML = "🤖";
    button.style.animation = "transformToYellow 0.5s ease-in-out 0s forwards";
    circle.style.animation = "moveCircleLeft 0.5s ease-in-out 0s forwards";
  }
};

// Function to retrieve and update button state from local storage
const updateButtonStateFromLocalStorage = () => {
  chrome.storage.local.get(["buttonOn"], (result) => {
    const buttonOn = result.buttonOn && false;
    updateUI(buttonOn);
    if (buttonOn) {
      callAddStyle();
    } else {
      removeScript();
    }
  });
};

// Function to callAddStyle based on the button state
const callAddStyle = () => {
  getCurrentTab().then((tab) => {
    const { id, url } = tab;
    chrome.scripting.executeScript({
      target: { tabId: id, allFrames: true },
      files: ["assets/script/addContent.js"],
    });
  });
};

// Function to removeScript based on the button state
const removeScript = () => {
  getCurrentTab().then((tab) => {
    const { id, url } = tab;
    chrome.scripting.executeScript({
      target: { tabId: id, allFrames: true },
      files: ["assets/script/removeContent.js"],
    });
  });
};

// Function to get the current tab
const getCurrentTab = async () => {
  let queryOptions = { active: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};

// Add event listener to the button
document.querySelector(".button").addEventListener("click", () => {
  // Toggle the button state
  chrome.storage.local.get(["buttonOn"], (result) => {
    const newButtonState = !result.buttonOn; // Toggle the state
    chrome.storage.local.set({ buttonOn: newButtonState }, () => {
      updateUI(newButtonState);
      if (newButtonState) {
        callAddStyle();
      } else {
        removeScript();
      }
    });
  });
});

// Update the UI based on the button state when the content script is loaded
updateButtonStateFromLocalStorage();
