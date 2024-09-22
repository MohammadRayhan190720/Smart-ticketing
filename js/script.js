// finding element
const selectedSeat = document.getElementById('selectedSeat');



function selectedSeatHandler(event){
  

  selectedSeat.innerHTML = `
  <li class="text-base font-normal flex justify-around">
    <span>${event.innerText}</span>
    <span>economy</span>
    <span> $550</span>
  </li>
`;
}