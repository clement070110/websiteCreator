const colorInput = document.getElementById('inputTextColor');
const backgroundInput = document.getElementById('inputBody');
const h1ColorInput = document.getElementById('h1ColorInput');
var areas = ['introduction', 'p1']

backgroundInput.addEventListener('change', updateBg);
colorInput.addEventListener('change', updateTextC);
h1ColorInput.addEventListener('change', updateH1TextColor);

function updateBg(e) {
  document.getElementById('body').style.backgroundColor = e.target.value;
  document.getElementById('h1Input').style.backgroundColor = e.target.value;
	for (let i = 0; i < areas.length+1; i++) {
		document.getElementById(areas[i]).style.backgroundColor = e.target.value;
	}
}
function updateTextC(e) {
	for (let i = 0; i < areas.length+1; i++) {
		document.getElementById(areas[i]).style.color = e.target.value;
	}

}
function updateH1TextColor(e) {
  document.getElementById('h1Input').style.color = e.target.value;
}