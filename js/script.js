// finding element
const selectedSeat = document.getElementById('selectedSeat');
const displaySelectedSeat = document.getElementById('displaySelectedSeat');
const availableSeat = document.getElementById('available-seat');
const totalTicketPrice = document.getElementById('total-ticket-price');
const couponInput = document.getElementById('coupon-input');
const couponBtn = document.getElementById('coupon-btn');
const ticketDaufaltText = document.getElementById('ticket-daufalt-text');
const grandTotal = document.getElementById('grand-total');


const totalSelectedSeat = [];
let totalPrice = 0;

function selectedSeatHandler(event){
  const value = event.innerText;

  if(totalSelectedSeat.includes(value)){
    return alert('Seat already Booked');
  } else if(totalSelectedSeat.length < 4){
    event.classList.add("bg-primary");
    event.classList.add("text-white");

    totalSelectedSeat.push(event.innerText);
    displaySelectedSeat.innerText = totalSelectedSeat.length;

    const availableSeatNumber = parseInt(availableSeat.innerText);
    const updateAvailableSeat = availableSeatNumber - 1;
    availableSeat.innerText = updateAvailableSeat;

    // remove ticket-daufalt-text
    ticketDaufaltText.classList.add('hidden');

    selectedSeat.innerHTML += `
  <li class="text-base font-normal flex justify-around">
    <span>${event.innerText}</span>
    <span>economy</span>
    <span> $550</span>
  </li>
 `;

    totalPrice += 550;
    totalTicketPrice.innerText = totalPrice.toFixed(2);

    // coupon condition
    if (totalSelectedSeat.length > 3) {
      couponInput.removeAttribute("disabled");
      couponBtn.removeAttribute("disabled");
    }
  }else{
    return alert("Maximum Seats Booked")
  };

}

// coupon discount function
document.getElementById("coupon-btn").addEventListener('click',function(){
  const couponInputValue = couponInput.value;
  let couponSave = 0;

   if (couponInputValue !== "NEW15" && couponInputValue !== "couple 20"){
    return alert("Your Input coupon code in invalid");
   }
  else if( couponInputValue === "NEW15"){
    couponSave = totalPrice * .15;

  }
  else if( couponInputValue === "couple 20"){
    couponSave = totalPrice * 0.20;

  }

  const grandTotalPrice = totalPrice - couponSave;
  grandTotal.innerText = grandTotalPrice.toFixed(2) ;
})