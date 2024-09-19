
document.getElementById('navSelect').addEventListener('change', function() {
    let selectedValue = this.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
});

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