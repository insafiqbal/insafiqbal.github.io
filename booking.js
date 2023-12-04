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
const wifiInput = document.getElementById("wifi")
const poolInput = document.getElementById("pool")
const gardenInput = document.getElementById("garden")
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

//Check in and Out
checkinInput.addEventListener('input',bookingdetails)
checkoutInput.addEventListener('input',bookingdetails)





// function personalInformation(){
//     let Fname = fname.value;
//     let Lname = lname.value;
//     let Email = email.value;
//     let PhoneNumber = phoneNumber.value;
//     let Country = country.value;

//     outputText.innerHTML = `
// FIRST NAME   : ${Fname} <br><br>
// LAST NAME    : ${Lname} <br><br>
// EMAIL        : ${Email} <br><br>
// PHONE NUMBER : ${PhoneNumber} <br><br>
// COUNTRY      : ${Country} `;
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
    bookOutput.innerText = `LKR ${totalbookingCost}`;

}

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

    advOutput.innerText = `LKR ${totaladventurecost}`;
}

