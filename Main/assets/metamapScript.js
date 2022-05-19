var cloudinary = require('cloudinary').v2; 
var arguments = process.argv;
var fs = require('fs');

cloudinary.config({ 
   cloud_name: <Your-Cloud-Name>, 
   api_key: <Your-API-Key>, 
   api_secret: <Your-Secret>,
   secure: true
});

const IDD = arguments[2];
const Surname = arguments[3];
const GivenName = arguments[4];
const PlaceOfBirth = arguments[5];
const CAN = arguments[6];
const ImKey = arguments[7];
const tokenID = arguments[8];

const data = {
  "attributes": [
    {
      "trait_type": "IDD",
      "value": IDD
    },
    {
      "trait_type": "Name/Surname/Nom",
      "value": Surname
    },
	{
      "trait_type": "Vorname/Given names/Prenoms",
      "value": GivenName
    },
	{
      "trait_type": "Geburtsort/Place of Birth/Lieu de naissance",
      "value": PlaceOfBirth
    },
	{
      "trait_type": "CAN",
      "value": CAN
    }
  ],
  "description": "Smart Identity token for ERIKA MUSTERMANN. ",
  "image": "ipfs://"+ImKey,
  "name": "SmartIdentity#1"
};

var dictstring = JSON.stringify(data);
fs.writeFile("assets/nft-metadata.json", dictstring, err => {
  if (err) {
    console.error(err)
    return
}});



var result = cloudinary.uploader.upload("assets/nft-metadata.json", { resource_type: "raw" }, 
          function(err, result) {
			  
			 if (err) {
                 console.error(err)
             return}
             var api_url = result['secure_url'];

             fs.appendFile("assets/metamap.txt", tokenID+':'+api_url+'\r\n', err => {
             if (err) {
                console.error(err)
             return
          }});
});
