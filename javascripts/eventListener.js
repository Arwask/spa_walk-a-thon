let submit = document.getElementById('submit');
let clear = document.getElementById('reset');
submit.addEventListener('click', function()
{
	donation.domStuff.checkOption();
	donation.domStuff.getInformation();
	event.preventDefault();
	clear.click();
})