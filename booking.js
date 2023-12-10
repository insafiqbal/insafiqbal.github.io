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
const AdvDropDown = document.getElementById("AdvdropDown")
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
const LoyalBtn = document.getElementById("loyalBtn")

//Output
const bookOutput = document.getElementById("bookingOutput");
const advOutput = document.getElementById("advbookingOutput");
const customerOutput = document.getElementById("customerOutput");
const LoyaltyOutput = document.getElementById("loyaltyOutput");
const TotalcostOutput = document.getElementById("totalcostOutput");

//Customer Table
const CustomerTable = document.getElementById("customerbooktable");

//Table
const RoomTable = document.getElementById("booktable");

//Adventure Table
const AdvBookTable = document.getElementById("advbooktable");

//Pop Up Room
const popup = document.querySelector('.room-popup');
const closebtnPopup = document.getElementById('okBtn');
const popupName = document.getElementById('popupName');

closebtnPopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none'
    }
});

//Pop up Adventure
const advPopup = document.querySelector('.adv-popup');
const popupAdv = document.getElementById('popupadv');
const advclosebtnPopup = document.getElementById('okBtnadv');


advclosebtnPopup.addEventListener('click', () => {
    advPopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === advPopup) {
        advPopup.style.display = 'none'
    }
});



//Booking Input
singleInput.addEventListener('input',bookingdetails);
doubleInput.addEventListener('input',bookingdetails);
tripleInput.addEventListener('input',bookingdetails);
kidsMealInput.addEventListener('input',bookingdetails);
extrabedCheck.addEventListener('change',bookingdetails);
bookBtn.addEventListener('click',bookingdetails);
LoyalBtn.addEventListener('click',checkLoyalty);

//Adventure Booking Input
localAdultsInput.addEventListener('input',adventuredetails)
localKidsInput.addEventListener('input',adventuredetails)
foreignAdultsInput.addEventListener('input',adventuredetails)
foreignKidsInput.addEventListener('input',adventuredetails)
diveAdultscheck.addEventListener('change',adventuredetails)
diveKidscheck.addEventListener('change',adventuredetails)

//Total Booking
// singleInput.addEventListener('input',calculateTotalCost)
// doubleInput.addEventListener('input',calculateTotalCost)
// tripleInput.addEventListener('input',calculateTotalCost)
// kidsMealInput.addEventListener('input',calculateTotalCost)
// extrabedCheck.addEventListener('change',calculateTotalCost)

// localAdultsInput.addEventListener('input',calculateTotalCost)
// localKidsInput.addEventListener('input',calculateTotalCost)
// foreignAdultsInput.addEventListener('input',calculateTotalCost)
// foreignKidsInput.addEventListener('input',calculateTotalCost)
// diveAdultscheck.addEventListener('change',calculateTotalCost)
// diveKidscheck.addEventListener('change',calculateTotalCost)

//Customer Information
// bookBtn.addEventListener('click',customerTable)
// emailInput.addEventListener('input',customerTable)
// phoneNumberInput.addEventListener('input',customerTable)
// countryInput.addEventListener('input',customerTable)

//Check in and out current booking
checkinInput.addEventListener('input',bookingdetails)
checkoutInput.addEventListener('input',bookingdetails)

//Table Additon
bookBtn.addEventListener('click', () => {
    const name = fnameInput.value.trim();
    if (validateForm()) {
        customerTable();
        addbook();
        resetbooking(); 
        popupName.textContent = `Your Booking has been confirmed, ${name}`;
        popup.style.display = 'flex';
    }
});

advBookBtn.addEventListener('click', () => {
    const dropdown =  AdvDropDown.value;
    if (advvalidateForm()){
        advaddbook();
        resetbooking(); 
        popupAdv.textContent = `You have successfully booked ${dropdown}`;
        advPopup.style.display = 'flex';
    }
});

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


//Side POP UP

//Booking Details
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
        totalbookingCost += (8000*Sroom) + (8000*Droom) + (8000*Troom);
    }

    //Promo Code
    let discountedvalue = totalbookingCost * 0.05;
    
    if (promocode == "Promo123"){
        totalbookingCost -= discountedvalue;
    }  
    
    //Output
    bookOutput.innerHTML = `<u>LKR</u> ${totalbookingCost}`;

    return totalbookingCost;
}

//Adventure Booking
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

    return totaladventurecost;
}

//Loyalty 
function checkLoyalty(){

    const Sroom = parseInt(singleInput.value);
    const Droom = parseInt(doubleInput.value);
    const Troom = parseInt(tripleInput.value);

    let totalRooms = 0;

    if ((!isNaN(Sroom) && Sroom > 0)){
        totalRooms += Sroom;
    }if ((!isNaN(Droom) && Droom > 0)){
        totalRooms += Droom;
    }if ((!isNaN(Troom) && Troom > 0)){
        totalRooms += Troom;
    };
    
    let points;

    if(totalRooms > 3){
        points = totalRooms*20;
    }

    LoyaltyOutput.innerHTML = `${points} points`;

}

//Reset Booking
function resetbooking(){
    document.getElementById('booking-form').reset();
    
    bookOutput.innerHTML = `<u>LKR</u> 0.00`;
    advOutput.innerHTML = `<u>LKR</u> 0.00`;
}

//TABLES

//Customer Table 
function customerTable(){

    const customerdetails = {
        name: `${fnameInput.value} ${lnameInput.value}`,
        Email: emailInput.value,
        PhoneNumber: phoneNumberInput.value,
        country: countryInput.value,
    };

    const newRow = CustomerTable.insertRow(-1);
    for (const detail in customerdetails) {
        const newCell = newRow.insertCell();
        newCell.textContent = customerdetails[detail];
    }


}

//Booking Table
function addbook(){
    const name = `${fnameInput.value} ${lnameInput.value}`;
    const checkInDate = checkinInput.value;
    const checkOutDate = checkoutInput.value;
    const AdultsInput = noAdultsInput.value || 0;
    const ChildrenInput = noChildrenInput.value || 0;
    const KidsInput = kidsMealInput.value || 0;
    const singleinput = singleInput.value || 0;
    const doubleinput = doubleInput.value || 0;
    const triple = tripleInput.value || 0;
    const wifi = wifiCheck.checked ? 'Yes' : 'No';
    const pool = poolCheck.checked ? 'Yes' : 'No';
    const garden = gardenCheck.checked ? 'Yes' : 'No';
    const extrabed = extrabedCheck.checked ? 'Yes' : 'No';
    const promocode = promocodeInput.value ? 'Yes' : 'No';
    const totalcost = bookingdetails();

    const details = {
        name: name,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        adults: AdultsInput,
        children: ChildrenInput,
        kids: KidsInput,
        single: singleinput,
        double: doubleinput,
        triple: triple,
        wifi: wifi,
        pool: pool,
        garden: garden,
        extraBed: extrabed,
        promocode: promocode,
        totalCost: totalcost,
    };

    const labels = {
        name: 'Name',
        checkInDate: 'Check-in Date',
        checkOutDate: 'Check-Out Date',
        adults: 'No. of Adults',
        children: 'No. of Children',
        kids: 'Above 5 Years',
        single: 'Single Rooms',
        double: 'Double Rooms',
        triple: 'Triple Rooms',
        wifi: 'WiFi',
        pool: 'Pool View',
        garden: 'Garden View',
        extraBed: 'Extra Bed',
        promocode: 'Promo Code',
        totalCost: 'Total Cost',
    };

    const newRow = RoomTable.insertRow(-1);
    for (const detail in details) {
        const cell = newRow.insertCell();
        cell.textContent = details[detail];
        cell.setAttribute('data-label', labels[detail]);
    };
    
}

//Adventure Booking Table
function advaddbook(){
    
    const name = `${fnameInput.value} ${lnameInput.value}`;
    const dropdown =  AdvDropDown.value;
    const localadults = localAdultsInput.value || 0;
    const localkids = localKidsInput.value || 0;
    const foreignadults = foreignAdultsInput.value || 0;
    const foreignkids = foreignKidsInput.value || 0;
    const DiveAdult = diveAdultscheck.checked ? 'Yes' : 'No';
    const DiveKids = diveKidscheck.checked ? 'Yes' : 'No';
    const totalcost = adventuredetails();
    
    const details = {
        name: name,
        dropdown: dropdown,
        localadults: localadults,
        localkids: localkids,
        foreignadults: foreignadults,
        foreignkids: foreignkids,
        DiveAdult: DiveAdult,
        DiveKids: DiveKids,
        totalcost: totalcost,
    };

    const labels = {
        name: 'Name',
        dropdown: 'Adventures',
        localadults: 'Local Adults',
        localkids: 'Local Kids',
        foreignadults: 'Foreign Adults',
        foreignkids: 'Foreign Kids',
        DiveAdult: 'Guide for Diving (Adults)',
        DiveKids: 'Guide for Diving (Kids)',
        totalcost: 'Total Cost',
    };

    const newRow = AdvBookTable.insertRow(-1);
    for (const detail in details) {
        const cell = newRow.insertCell();
        cell.textContent = details[detail];
        cell.setAttribute('data-label', labels[detail]);
    };

}

function validateForm() {

    //Customer Details
    const fnameInput = document.getElementById("firstName").value.trim();
    const lnameInput = document.getElementById("lastName").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const phoneNumberInput = document.getElementById("phoneNumber").value.trim();
    const countryInput = document.getElementById("country").value.trim();

    //Booking Details
    const checkIn = checkinInput.value.trim();
    const checkOut = checkoutInput.value.trim();
    const adults = noAdultsInput.value.trim();
    const singleRooms = parseInt(singleInput.value) || 0;
    const doubleRooms = parseInt(doubleInput.value) || 0;
    const tripleRooms = parseInt(tripleInput.value) || 0;
    
    // Check if any of the required fields are empty
    if (fnameInput === '') {
      alert("Please Enter First Name");
      document.getElementById("firstName").scrollIntoView({ behavior: 'smooth', block: 'center' });
      return false;
    }

    if (lnameInput === '') {
      alert("Please Enter Last Name");
      return false;
    }

    if (emailInput === '') {
      alert("Please Enter Your Email");
      return false;
    }
    
    if (phoneNumberInput === '') {
        alert("Please Enter Your Phone Number");
        return false;
    }
    
    if (countryInput === '') {
        alert("Please Enter Your Country");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
      alert("Please enter a valid email address.");
      return false; 
    }
  
    const phonePattern = /^\d{10}$/; 
    if (!phonePattern.test(phoneNumberInput)) {
      alert("Please enter a valid 10-digit phone number.");
      return false; 
    }

    if (checkIn === '') {
        alert('Please select the Check-In Date.');
        return false;
    }

    if (checkOut === '') {
        alert('Please select the Check-Out Date.');
        return false;
    }

    if (!adults > 0){
        alert('Please enter at least one adult.');
        return false;
    }

    if (!(singleRooms > 0 || doubleRooms > 0 || tripleRooms > 0)) {
        alert('Please select atleast one room.');
        return false;
    }
  
    return true;
}
  
function advvalidateForm() {

    //Customer Details
    const fnameInput = document.getElementById("firstName").value.trim();
    const lnameInput = document.getElementById("lastName").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const phoneNumberInput = document.getElementById("phoneNumber").value.trim();
    const countryInput = document.getElementById("country").value.trim();

    //Adventure Booking
    const advType = AdvDropDown.value
    const localAdultsInput = document.getElementById("localadults")
    const localKidsInput = document.getElementById("localkids")
    const foreignAdultsInput = document.getElementById("foreignadults")
    const foreignKidsInput = document.getElementById("foreignkids")

    if (fnameInput === '') {
        alert("Please Enter First Name");
        document.getElementById("firstName").scrollIntoView({ behavior: 'smooth', block: 'center' });
        return false;
    }
  
      if (lnameInput === '') {
        alert("Please Enter Last Name");
        return false;
      }
  
      if (emailInput === '') {
        alert("Please Enter Your Email");
        return false;
      }
      
      if (phoneNumberInput === '') {
          alert("Please Enter Your Phone Number");
          return false;
      }
      
      if (countryInput === '') {
          alert("Please Enter Your Country");
          return false;
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput)) {
        alert("Please enter a valid email address.");
        return false; 
      }
    
      const phonePattern = /^\d{10}$/; 
      if (!phonePattern.test(phoneNumberInput)) {
        alert("Please enter a valid 10-digit phone number.");
        return false; 
      }

      if (advType === 'none') {
        alert('Please select an Adventure Type.');
        return false;
    }

    // if (!(localAdultsInput > 0 || localKidsInput > 0 || foreignAdultsInput > 0 || foreignKidsInput > 0 ))  {
    //     alert(`Please enter atleast one person for ${advType}`);
    //     return false;
    // }
    return true
}




