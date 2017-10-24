document.addEventListener("DOMContentLoaded", function(){
	chrome.tabs.query({
		active: !0, 
		lastFocusedWindow: !0
	},
	function(t){
		var currentTab = t[0];
		var currentURL = currentTab.url;
		var youtubeID = currentURL.split('watch?v=')[1];
		document.getElementById('thumbnail').setAttribute('src', 'https://i.ytimg.com/vi/' + youtubeID + '/hqdefault.jpg')
		
	});
});