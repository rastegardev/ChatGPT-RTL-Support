// Listen for the extension installation event
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    // Open a new tab with the Github URL
    chrome.tabs.create({
      url: "https://github.com/rastegardev/ChatGPT-RTL-Support",
    });
  }
});