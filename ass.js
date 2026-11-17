let customerName = "Nenman";
let phoneNumber = "07066873691";
let registrationStatus = "true"
let airtimeBalance = 500;
let bundleCode = 2;

// task B

let data;
let price;

switch (bundleCode) {
    case 1:
        data ="500MB"
        price = 200;
        break;

    case 2:
        data = "1GB";
        price = "350";
        break;

        case 3:
        data = "2GB";
        price = "600";
        break;

    case 4:
        data = "5GB";
        price = "1,500";
        break;
        
        default:
            data = "invalid bundle";
            price = "undefined"
}
// task c

 
if (registrationStatus === false){
    console.log("Not registered");
}
else if (airtimeBalance < 0){
    console.log("invalid-balance")
}
else if (price === undefined){
    console.log("invalidbundle")
}
else if (airtimeBalance < price){
    console.log('insuficient airtime')
}
else{ 
    console.log("purchase succesfull")
    console.log("customer:",customerName)
    console.log("registered:", registrationStatus)
    console.log("airtime:", airtimeBalance)
}
// task d output in the console

// task e
 
// the selected bundle must be validated
// unregister customers may be allowed
//switch is suitable for bundle sellection because it checks different bunndle code





