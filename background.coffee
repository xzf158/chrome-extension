# Copyright (c) 2011 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

min = 1
max = 5
current = min

updateIcon = ->
  chrome.browserAction.setIcon(path:"icon#{current}.png");
  current++
  # console.log chrome
  chrome.tabs.getSelected (d)->
  	if(d.url.indexOf("http://") isnt -1)
  		chrome.tabs.executeScript(d.id, file: "jquery.min.js", ->
  			chrome.tabs.executeScript(d.id, file: "content_script.js")
  		)
  	console.log d
  # chrome.windows.getCurrent (d)->
  # 	console.log d

  if current > max
  	current = min

chrome.browserAction.onClicked.addListener(updateIcon)
updateIcon()