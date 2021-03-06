// Generated by CoffeeScript 1.7.1
(function() {
  var current, max, min, updateIcon;

  min = 1;

  max = 5;

  current = min;

  updateIcon = function() {
    chrome.browserAction.setIcon({
      path: "icon" + current + ".png"
    });
    current++;
    chrome.tabs.getSelected(function(d) {
      if (d.url.indexOf("http://") !== -1) {
        chrome.tabs.executeScript(d.id, {
          file: "jquery.min.js"
        }, function() {
          return chrome.tabs.executeScript(d.id, {
            file: "content_script.js"
          });
        });
      }
      return console.log(d);
    });
    if (current > max) {
      return current = min;
    }
  };

  chrome.browserAction.onClicked.addListener(updateIcon);

  updateIcon();

}).call(this);
