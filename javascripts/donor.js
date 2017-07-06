var donation = function(oldDonation)
{
	let donorObj = {};
	let donorList ={
	"donors": 
	[{
		"firstName" : "John",
		"lastName" : "Helen",
		"pledge" : 20
	},
	{
		"firstName" : "Jay",
		"lastName" : "Grisham",
		"pledge" : 70
	},
	{
		"firstName" : "Hannah",
		"lastName" : "Shaw",
		"pledge" : 50
	},
	{
		"firstName" : "Neha",
		"lastName" : "Kumar",
		"pledge" : 7
	}]
	}
	for(let i=0; i<donorList.donors.length; i++)
	{
		donation.domStuff.putOnDom(donorList.donors[i])
	}
	donorObj.accessDonorList = function()
	{
		return donorList.donors;
	}

	donorObj.addDonor = function(donorInfo)
	{
		donorList.donors.push(donorInfo);
		donation.domStuff.putOnDom(donorInfo);
		console.log(donorList);
	}
oldDonation.donorObj = donorObj;
return oldDonation;
}(donation || {})