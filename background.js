// Listen for the extension installation event
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    // Open a new tab with a specific URL when the extension is installed
    chrome.tabs.create({
      url: "https://rastegar.info/chatgpt-rtl-support/?utm_term=install&utm_source=chromewebstore",
    });
  } else if (details.reason === "update") {
    // If the extension is updated, open a different URL
    chrome.tabs.create({
      url: "https://rastegar.info/chatgpt-rtl-support/#whats-new",
    });
  }
});