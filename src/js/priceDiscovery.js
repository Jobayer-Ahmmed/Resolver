// Function to create card element
function createCard(cardData) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
  
    cardDiv.innerHTML = `
      <div>
        <img src="${cardData.imgUrl}" alt="Food Image">
      </div>
      <span class="block mt-3 font-semibold lg:font-bold text-[#2196F3] text-base">${cardData.price}</span>
  
      <div class="flex mt-1 justify-between items-center">
        <span class="text-[#273F2B] font-semibold text-xl lg:text-2xl">${cardData.title}</span>
        <span>
          <img src="../assets/foods/icons/arrow-up-right.png" alt="Arrow Icon">
        </span>
      </div>
  
      <p class="mt-2 text-[#4B4B4B] font-normal text-base">${cardData.description}</p>
  
      <div class="text-[#818B9C] mt-2 text-[13px] font-semibold lg:font-medium flex items-center gap-2">
        <span>${cardData.reviews}</span>
        <span>|</span>
        <span>${cardData.time}</span>
        <span>|</span>
        <span>${cardData.followers}</span>
      </div>
  
      <div class="flex mt-3 items-center gap-3">
        <div>
          <img src="${cardData.avatarUrl}" alt="Avatar Image">
        </div>
        <div>
          <h2 class="text-[#101828] text-sm font-semibold">${cardData.cafeName}</h2>
          <p class="text-[#475467] font-normal text-sm">${cardData.location}</p>
        </div>
      </div>
    `;
    
    return cardDiv;
  }
  
  // Function to load cards into the section
  function loadCards(cards) {
    const container = document.getElementById('food-container');
    const cardsItem = innerWidth <= 768 ? cards.slice(0,6) : cards
    cardsItem.forEach(cardData => {
      const cardElement = createCard(cardData);
      container.appendChild(cardElement);
    });
  }
  
  // Fetch cards data from the local JSON file and load them into the section
  fetch('../../api/food.json')
    .then(response => response.json())
    .then(data => {
      loadCards(data);
    })
    .catch(error => console.error('Error fetching data:', error));



    // handling popup button ==============
const fabBtn = document.getElementById('fab-btn');
const popupMenu = document.getElementById('popup-menu');
const closePopup = document.getElementById('close-popup');

// Toggle the popup menu visibility on the floating action button click
fabBtn.addEventListener('click', () => {
  popupMenu.classList.toggle('hidden');
});

// Hide the popup when the close button is clicked
closePopup.addEventListener('click', () => {
  popupMenu.classList.add('hidden');
});

// handling popup button end ==============



// Handling tab system ===================

const tabItems = document.querySelectorAll('.tab')

//Function to handle  tab clicks ====
function handleClickTab (e) {
    const clickedTab = e.currentTarget;

    const spanElement = clickedTab.querySelector('span');

    tabItems.forEach(tab => {
        if(tab.classList.contains('clicked')){
            tab.classList.remove('clicked','text-[#273F2B]')
           const span = tab.querySelector('span')
           span.classList.add('hidden','group-hover:block')
           
        }
    })


    if (!clickedTab.classList.contains('clicked')) {
        clickedTab.classList.add('clicked','text-[#273F2B]');
        spanElement.classList.remove('hidden');
        spanElement.classList.add('bg-[#78EB54]');
    } else {
        // If the same tab is clicked again, deactivate it
        clickedTab.classList.remove('clicked','text-[#273F2B]');
        spanElement.classList.add('hidden');
        spanElement.classList.remove('bg-[#78EB54]');
    }

}


// tabItems.forEach((tab,idx) => {


//     tab.addEventListener('click',() => {
        
//         if(tab.classList.contains('clicked')){
//             tab.classList.remove('clicked')

//         tab.classList.add('hidden','group-hover:block')
            
//         }
        
//     })
    
// })

tabItems.forEach(tab => {
    tab.addEventListener('click',handleClickTab)
})
  