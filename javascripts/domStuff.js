var donation = function(oldDonation)
{
let domStuff = {};

let fname = document.getElementById('firstName');
let lname = document.getElementById('lastName');
let amt = document.getElementById('amount');

domStuff.getInformation = function()
{
	// console.log("in getInformation");
	let donorInfo = {};
	donorInfo.firstName = fname.value;
	donorInfo.lastName = lname.value;
	donorInfo.pledge = amt.value;
	oldDonation.donorObj.addDonor(donorInfo);
}

domStuff.putOnDom = function(donorInfo)
{
	let tableDiv = document.getElementById('infoTable');
	var msg = `<tr><td>${donorInfo.firstName} ${donorInfo.lastName}</td><td>${donorInfo.pledge}</td></tr>`;
	tableDiv.innerHTML += msg;
}
oldDonation.domStuff = domStuff;
return oldDonation;
}(donation || {});

