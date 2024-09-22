// finding element
const selectedSeat = document.getElementById('selectedSeat');
const displaySelectedSeat = document.getElementById('displaySelectedSeat');
const availableSeat = document.getElementById('available-seat');
const totalTicketPrice = document.getElementById('total-ticket-price');
const couponInput = document.getElementById('coupon-input');
const couponBtn = document.getElementById('coupon-btn');


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

    selectedSeat.innerHTML += `
  <li class="text-base font-normal flex justify-around">
    <span>${event.innerText}</span>
    <span>economy</span>
    <span> $550</span>
  </li>
`;

    totalPrice += 550;
    totalTicketPrice.innerText = totalPrice;

    // coupon condition
    if (totalSelectedSeat.length > 3) {
      couponInput.removeAttribute("disabled");
      couponBtn.removeAttribute("disabled");
    }
  }else{
    return alert("Maximum Seats Booked")
  };

 

}