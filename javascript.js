var toggle = document.getElementById('container');
var toggleContainer = document.getElementById('toggle-container');
var toggleNumber;

toggle.addEventListener('click', function() {
	toggleNumber = !toggleNumber;
	if (toggleNumber) {
		toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
		toggleContainer.style.backgroundColor = '#D74046';
	} else {
		toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
		toggleContainer.style.backgroundColor = 'dodgerblue';
	}
	console.log(toggleNumber)
});
document.getElementById('dimmer')
function dim(bool)
{
    if (typeof bool=='undefined') bool=true; // so you can shorten dim(true) to dim()
    document.getElementById('dimmer').style.display=(bool?'block':'none');
}    

dim(true); // on
dim(false); // off
//==========================================================
var modal = document.getElementById('myModal');
var btn = document.getElementById('pageChange');
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
	modal.style.display = 'block';
}
span.onclick = function() {
	modal.style.display = 'none';
}
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
}