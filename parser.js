function txtToHtml(txt){
	let html = txt;
	html = html.replace(/^\s*(======) *(.*) *$1 *$/gm, '<h6 class="heading">$2</h6>');
	html = html.replace(/^\s*(=====) *(.*) *$1 *$/gm, '<h5 class="heading">$2</h5>');
	html = html.replace(/^\s*(====) *(.*) *$1 *$/gm, '<h4 class="heading">$2</h4>');
	html = html.replace(/^\s*(===) *(.*) *$1 *$/gm, '<h3 class="heading">$2</h3>');
	html = html.replace(/^\s*(==) *(.*) *$1 *$/gm, '<h2 class="heading">$2</h2>');
	html = html.replace(/^\s*([^<].*) *$/gm, '<p>$1</p>');
	html = html.replace(/''' *([^'].*?) *'''/g, '<span class="bold">$1</span>');
	html = html.replace(/'' *([^'].*?) *''/g, '<span class="italic">$1</span>');
	html = html.replace(/\[ *(\S+?) +(.+?) *\]/g, '<a href="$1" class="external-link">$2</a>');
	html = html.replace(/\s+/g, ' ');
	return html;
}

function htmlToTxt(html){
	let txt = html;
	// TODO parser HTML to TXT
	return txt;
}

const txt = document.body.innerHTML.replace(/<script src="parser.js"><\/script>$/, '');
document.body.innerHTML = txtToHtml(txt);
