import {txtToHtml, htmlToTxt} from './parser.js';
(async () => {
	const currentPage = location.pathname.replace(/^\/parser\/(.*)\.html$/, '$1');
	const pageName = currentPage ? currentPage : 'index';
	const pageSource = await fetch(`${pageName}.txt`);
	const txt = await pageSource.text();
	const pageHeading = document.createElement('h1');
	const parserOutput = document.createElement('div');
	pageHeading.innerText = document.title;
	parserOutput.id = 'parser-output';
	parserOutput.innerHTML = txtToHtml(txt)
	document.body.appendChild(pageHeading);
	document.body.appendChild(parserOutput);
})();
