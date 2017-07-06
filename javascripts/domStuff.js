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
oldDonation.domStuff = domStuff;
return oldDonation;
}(donation || {});

