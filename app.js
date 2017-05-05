var element = document.querySelector('.paragraph');

element.addEventListener('click', function(){
	var p = document.querySelector('.paragraph');
	console.log(element);
	p.className('red');
});
document.getE