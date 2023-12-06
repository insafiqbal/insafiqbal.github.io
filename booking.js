//Referencing DOM elements
const fnameInput = document.getElementById("firstName")
const lnameInput = document.getElementById("lastName")
const emailInput = document.getElementById("email")
const phoneNumberInput = document.getElementById("phoneNumber")
const countryInput = document.getElementById("country")

//Booking Details
const checkinInput = document.getElementById("checkin")
const checkoutInput = document.getElementById("checkout")
const noAdultsInput = document.getElementById("noAdults")
const noChildrenInput = document.getElementById("noChildren")
const kidsMealInput = document.getElementById("kidsMeal")
const noRoomsInput = document.getElementById("noRooms")


//Room Type
const singleInput = document.getElementById("single")
const doubleInput = document.getElementById("double")
const tripleInput = document.getElementById("triple")

//Add Ons
const wifiCheck = document.getElementById("wifi")
const poolCheck = document.getElementById("pool")
const gardenCheck = document.getElementById("garden")
const extrabedCheck = document.getElementById("extrabed")


//Adventures
const advNoneInput = document.getElementById("advNone")
const advSkyInput = document.getElementById("advSky")
const advCulInput = document.getElementById("advCul")
const advSurfInput = document.getElementById("advSurf")
const advSeaInput = document.getElementById("advSea")
const localAdultsInput = document.getElementById("localadults")
const localKidsInput = document.getElementById("localkids")
const foreignAdultsInput = document.getElementById("foreignadults")
const foreignKidsInput = document.getElementById("foreignkids")
const diveAdultscheck = document.getElementById("diveAdults")
const diveKidscheck = document.getElementById("diveKids")

//Code
const promocodeInput = document.getElementById("promocode")
const loyalpointsInput = document.getElementById("loyalpoints")

//Buttons
const advBookBtn = document.getElementById("book_adv_btn")
const bookBtn = document.getElementById("book_btn")
const favBookBtn = document.getElementById("book_fav_btn")


//Output
const bookOutput = document.getElementById("bookingOutput");
const advOutput = document.getElementById("advbookingOutput");
const customerOutput = document.getElementById("customerOutput");

//customerOutput
const NameOutput = document.getElementById("nameOutput");
const EmailOuput = document.getElementById("emailOutput");
const PhoneOutput = document.getElementById("phonenumberOuput");
const CountryOutput = document.getElementById("countryOutput");

//Check in and out Output
const CheckInOutput = document.getElementById("checkinOutput");
const CheckoutOutput = document.getElementById("checkoutOuput");

//Guest Output
const AdultsOutput = document.getElementById("noAdultsOutput");
const ChildrenOutput = document.getElementById("noChildrenOutput");
const KidsMealOutput = document.getElementById("kidsMealOutput");

//RoomType Output
const SingleOutput = document.getElementById("singleroomOutput");
const DoubleOutput = document.getElementById("doubleroomOutput");
const TripleOutput = document.getElementById("tripleroomOutput");

//AddOns Output
const WifiOutput = document.getElementById("wifiOutput");
const PoolOutput = document.getElementById("poolOutput");
const GardenOutput = document.getElementById("gardenOutput");
const BedOutput = document.getElementById("bedOutput");

//Table
const BookTable = document.getElementById("booktable");

//Adventure Table
const AdvBookTable = document.getElementById("advbooktable");

let total;
//Room Prices
let singleroom = 25000;
let doubleroom = 35000;
let tripleroom = 40000;

//Extra Bed
let extrabed = 8000;

//Kids Meal
let kidsmealvalue = 5000;

//Adventure Rates
let localadultrate = 5000;
let localkidrate = 2000;
let foreignadultrate = 10000;
let foreignkidrate = 5000;

//Guide Rates
let adultguiderate = 1000;
let kidguiderate = 500;


//Booking Input
singleInput.addEventListener('input',bookingdetails);
doubleInput.addEventListener('input',bookingdetails);
tripleInput.addEventListener('input',bookingdetails);
kidsMealInput.addEventListener('input',bookingdetails);
extrabedCheck.addEventListener('change',bookingdetails);
bookBtn.addEventListener('click',bookingdetails);

//Adventure Booking Input
localAdultsInput.addEventListener('input',adventuredetails)
localKidsInput.addEventListener('input',adventuredetails)
foreignAdultsInput.addEventListener('input',adventuredetails)
foreignKidsInput.addEventListener('input',adventuredetails)
diveAdultscheck.addEventListener('change',adventuredetails)
diveKidscheck.addEventListener('change',adventuredetails)

//Customer Information
// bookBtn.addEventListener('click',personalInformation)
// emailInput.addEventListener('input',personalInformation)
// phoneNumberInput.addEventListener('input',personalInformation)
// countryInput.addEventListener('input',personalInformation)



//Check in and out current bookinh
checkinInput.addEventListener('input',bookingdetails)
checkoutInput.addEventListener('input',bookingdetails)

//Table Additon
bookBtn.addEventListener('click', addbook)
advBookBtn.addEventListener('click', advaddbook)


//Check in and Out
bookBtn.addEventListener('click', () => {2
    CheckInOut();
    guestdetails();
    roomdetails();
    addons();
    resetbooking();
})

// function personalInformation(){
//     let Fname = fnameInput.value;
//     let Lname = lnameInput.value;
//     let Email = emailInput.value;
//     let PhoneNumber = phoneNumberInput.value;
//     let Country = countryInput.value;

//     NameOutput.innerHTML = `${Fname} ${Lname}`;
//     EmailOuput.innerHTML = `${Email}`;
//     PhoneOutput.innerHTML = `${PhoneNumber}`;
//     CountryOutput.innerHTML = `${Country}`;   
// }


function bookingdetails(){
    let totalprice = 0;

    //Value for Rooms
    let Sroom = singleInput.value;
    let Droom = doubleInput.value;
    let Troom = tripleInput.value;

    //Value for Kids Meal
    let kidsMeal = kidsMealInput.value;

    
    //Promo Code Value
    let promocode = promocodeInput.value;
    
    
    //Check in and out values
    let checkin = new Date(checkinInput.value);
    let checkout = new Date(checkoutInput.value);

    let timeDifference = checkout - checkin;

    let numberofdays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    let totalbookingCost = ( (singleroom * Sroom) + (doubleroom * Droom) + (tripleroom * Troom) + (kidsmealvalue * kidsMeal) ) * numberofdays;

    //Extra Bed checking
    if (extrabedCheck.checked){
        totalbookingCost += 8000;
    }
    
    //Promo code 
    let discountedvalue = totalbookingCost * 0.05;

    if (promocode == "Promo123"){
        totalbookingCost -= discountedvalue;
    }

    //Output
    bookOutput.innerHTML = `<u>LKR</u> ${totalbookingCost}`;
}

//Reset Booking
function resetbooking(){
    document.getElementById('booking-form').reset();

    bookOutput.innerHTML = `<u>LKR</u> 0.00`;
    advOutput.innerHTML = `<u>LKR</u> 0.00`;
}

//Table Check in and Out Details
// function CheckInOut(){
//     let checkin = checkinInput.value;
//     let checkout = checkoutInput.value;

//     CheckInOutput.innerHTML = `${checkin}`;
//     CheckoutOutput.innerHTML = `${checkout}`;
// }

// //Table Guest details
// function guestdetails(){
//      let adultsInput = noAdultsInput.value;
//      let childrenInput = noChildrenInput.value;
//      let kidsInput = kidsMealInput.value;

//      AdultsOutput.innerHTML = `${adultsInput}`;
//      ChildrenOutput.innerHTML = `${childrenInput}`;
//      KidsMealOutput.innerHTML = `${kidsInput}`;
// }

// //Table Room Details
// function roomdetails(){
//     let SingleInput = singleInput.value;
//     let DoubleInput = doubleInput.value;
//     let TripleInput = tripleInput.value;

//     SingleOutput.innerHTML = `${SingleInput}`;
//     DoubleOutput.innerHTML = `${DoubleInput}`;
//     TripleOutput.innerHTML = `${TripleInput}`;
// }

// //Table Addons Details
// function addons(){
//     if (wifiCheck.checked){
//         WifiOutput.innerText = `Yes`;
//     }else{
//         WifiOutput.innerText = `No`;
//     }

//     if (poolCheck.checked){
//         PoolOutput.innerText = `Yes`;
//     }else{
//         PoolOutput.innerText = `No`;
//     }

//     if (gardenCheck.checked){
//         GardenOutput.innerText = `Yes`;
//     }else{
//         GardenOutput.innerText = `No`;
//     }

//     if (extrabedCheck.checked){
//         BedOutput.innerText = `Yes`;
//     }else{
//         BedOutput.innerText = `No`;
//     }
// }

function addbook(){

    const overalbookingDetails = {

        name: `${fnameInput.value} ${lnameInput.value}`,
        checkInDate: checkinInput.value,
        checkOutDate: checkoutInput.value,
        AdultsInput: noAdultsInput.value,
        ChildrenInput: noChildrenInput.value,
        KidsInput: kidsMealInput.value,
        singleinput: singleInput.value,
        doubleinput: doubleInput.value,
        triple: tripleInput.value,
        wifi: wifiCheck.checked ? 'Yes' : 'No',
        pool: poolCheck.checked ? 'Yes' : 'No',
        garden: gardenCheck.checked ? 'Yes' : 'No',
        extrabed: extrabedCheck.checked ? 'Yes' : 'No',
        totalcost: bookOutput.innerHTML,
    };

    const newRow = BookTable.insertRow(-1);
    for (const detail in overalbookingDetails) {
        const newCell = newRow.insertCell();
        newCell.textContent = overalbookingDetails[detail];
    }
}

function advaddbook(){

    const averagebookingdetails = {

        name: `${fnameInput.value} ${lnameInput.value}`,
        localadults: localAdultsInput.value,
        localkids: localKidsInput.value,
        foreignadults: foreignAdultsInput.value,
        foreignkids: foreignKidsInput.value,
        DiveAdult: diveAdultscheck.checked ? 'Yes' : 'No',
        DiveKids: diveKidscheck.checked ? 'Yes' : 'No',
        totalcost: advOutput.innerHTML,
    };

    const newRow = AdvBookTable.insertRow(-1);
    for (const detail in averagebookingdetails) {
        const newCell = newRow.insertCell();
        newCell.textContent = averagebookingdetails[detail];
    }
}

//Reset Booking
bookBtn.addEventListener('click',resetbooking)

function adventuredetails(){
    let localAdult = localAdultsInput.value;
    let localKid = localKidsInput.value;
    let foreignAdult = foreignAdultsInput.value;
    let foreignKid = foreignKidsInput.value;

    let totaladventurecost = (localAdult * localadultrate) + (localKid * localkidrate) + (foreignAdult * foreignadultrate) + (foreignKid * foreignkidrate)

    if (diveAdultscheck.checked){
        totaladventurecost += 1000;
    }if(diveKidscheck.checked){
        totaladventurecost += 500;
    }

    advOutput.innerHTML = `<u>LKR</u> ${totaladventurecost}`;
}

