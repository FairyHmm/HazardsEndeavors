var cnt = 0, n = 9;
var a = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 'magic-text', 't9'];

document.addEventListener('click', function() {
	//alert("1");
	if (cnt <= n)
	{
	  var textElement = document.getElementById(a[cnt]);
	  textElement.style.display = 'block';
	  if (a[cnt] == 'magic-text')
		  textElement.style.animation = 'typewriter 1s steps(44), background-pan 1s linear infinite';
	  else
		textElement.style.animation = 'typewriter 1s steps(44)';
	  cnt++;
	}
});
