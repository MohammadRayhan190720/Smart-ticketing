// finding element
const selectedSeat = document.getElementById('selectedSeat');

const displaySelectedSeat = document.getElementById('displaySelectedSeat');

const availableSeat = document.getElementById('available-seat');


const totalSelectedSeat = [];
function selectedSeatHandler(event){

  event.classList.add('bg-primary');
  event.classList.add('text-white');

  totalSelectedSeat.push(event.innerText);
  displaySelectedSeat.innerText = totalSelectedSeat.length;

  const availableSeatNumber = parseInt(availableSeat.innerText);
  const updateAvailableSeat = availableSeatNumber - 1;
  availableSeat.innerText = updateAvailableSeat ;
  
  

  selectedSeat.innerHTML = `
  <li class="text-base font-normal flex justify-around">
    <span>${event.innerText}</span>
    <span>economy</span>
    <span> $550</span>
  </li>
`;
}