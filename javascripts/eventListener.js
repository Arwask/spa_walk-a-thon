let submit = document.getElementById('submit');

submit.addEventListener('click', function()
{
	donation.domStuff.getInformation();
	
	event.preventDefault();
})