function checkForValidUrl(tabId, changeInfo, tab) { 
  // If the letter 'g' is found in the tab's URL... 
    if (tab.url.match('http://chess.com/*') || tab.url.match('http://live.chess.com/*')) { 
        chrome.pageAction.show(tabId); 
    } 
}; 
  
// Listen for any changes to the URL of any tab. 
chrome.tabs.onUpdated.addListener(checkForValidUrl); 
  
function display(tabId, changeInfo, tab){ 
    if (tab.url.match('http://chess.com/*') || tab.url.match('http://live.chess.com/*')) { 
    chrome.tabs.insertCSS( tabId, {"file":"insertedcss.css"}); 
    chrome.tabs.executeScript(null, {file: "content_script.js"}); 
  } 
}; 
  
chrome.tabs.onUpdated.addListener(display); 
