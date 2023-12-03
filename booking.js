//Referencing DOM elements
const fname = document.getElementById("firstName")
const lname = document.getElementById("lastName")
const email = document.getElementById("email")
const phoneNumber = document.getElementById("phoneNumber")
const country = document.getElementById("country")

//Booking Details
const checkin = document.getElementById("checkin")
const checkout = document.getElementById("checkout")
const noAdults = document.getElementById("noAdults")
const noChildren = document.getElementById("noChildren")
const noRooms = document.getElementById("noRooms")
const extraBeds = document.getElementById("extraBeds")


//Room Type
const single = document.getElementById("single")
const double = document.getElementById("double")
const triple = document.getElementById("triple")

//Add Ons
const wifi = document.getElementById("wifi")
const pool = document.getElementById("pool")
const garden = document.getElementById("garden")

//Adventures
const advNone = document.getElementById("advNone")
const advSky = document.getElementById("advSky")
const advCul = document.getElementById("advCul")
const advSurf = document.getElementById("advSurf")
const advSea = document.getElementById("advSea")
const localAdults = document.getElementById("localadults")
const localKids = document.getElementById("localkids")
const foreignAdults = document.getElementById("foreignadults")
const foreignKids = document.getElementById("foreignkids")
const diveAdults = document.getElementById("diveAdults")
const diveKids = document.getElementById("diveKids")

//Code
const promocode = document.getElementById("promocode")
const loyalpoints = document.getElementById("loyalpoints")

//Buttons
const advBook = document.getElementById("book_adv_btn")
const book = document.getElementById("book_btn")
const favBook = document.getElementById("book_fav_btn")


//Output
const outputText = document.getElementById("output");



book.addEventListener('click', personalInformation);

function personalInformation(){
    let Fname = fname.value;
    let Lname = lname.value;
    let Email = email.value;
    let PhoneNumber = phoneNumber.value;
    let Country = country.value;

    outputText.innerHTML = `
FIRST NAME   : ${Fname} <br><br>
LAST NAME    : ${Lname} <br><br>
EMAIL       : ${Email} <br><br>
PHONE NUMBER : ${PhoneNumber} <br><br>
COUNTRY      : ${Country} `;


}