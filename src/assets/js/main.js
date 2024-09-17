
// Mobile Menu Trigger
const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

// Mobile Category 
const categories = [
  { title: "Easiest Admin", date: "Fall 2024" },
  { title: "Fastest Implementation", date: "Summer 2024" },
  { title: "Best Support", date: "Winter 2024" },
  { title: "Leader", date: "Winter 2024" },
  { title: "Best Innovation", date: "Spring 2024" },
  { title: "Most User-Friendly", date: "Fall 2024" },
  { title: "Top Rated", date: "Winter 2024" },
  { title: "Best Experience", date: "Winter 2024" }
];

const firstCategoryGrid = document.getElementById("firstCategoryGrid");
const secondCategoryGrid = document.getElementById("secondCategoryGrid");




// Function to render categories
function renderCategories() {
  // Clear existing content
  firstCategoryGrid.innerHTML = "";
  secondCategoryGrid.innerHTML = "";

  // Check if the screen is mobile
  const isMobile = window.innerWidth < 768;

  // On mobile, show the first 5 categories
  if (isMobile) {
    const mobileCategories = categories.slice(0, 5);
    mobileCategories.forEach((category) => {
      const categoryItem = `
        <div class="bg-white py-3 px-6 rounded-full shadow-md flex items-center space-x-2">
          <span class="bg-gray-200 p-2 rounded-full">
            <img src="./src/assets/images/Icon/cup.png" alt="cup" class="h-6 w-6" />
          </span>
          <div>
            <p class="font-semibold text-gray-800">${category.title}</p>
            <p class="text-gray-500 text-sm">${category.date}</p>
          </div>
        </div>
      `;
      firstCategoryGrid.innerHTML += categoryItem;
    });
  } else {
    // On larger screens, show 3 categories in the first grid
    const firstSectionCategories = categories.slice(0, 3);
    firstSectionCategories.forEach((category) => {
      const categoryItem = `
        <div class="bg-white py-3 px-6 rounded-full shadow-md flex items-center space-x-2">
          <span class="bg-gray-200 p-2 rounded-full">
            <img src="./src/assets/images/Icon/cup.png" alt="cup" class="h-6 w-6" />
          </span>
          <div>
            <p class="font-semibold text-gray-800">${category.title}</p>
            <p class="text-gray-500 text-sm">${category.date}</p>
          </div>
        </div>
      `;
      firstCategoryGrid.innerHTML += categoryItem;
    });

    // Show the remaining 5 categories in the second grid
    const secondSectionCategories = categories.slice(3, 8);
    secondSectionCategories.forEach((category) => {
      const categoryItem = `
        <div class="bg-white py-3 px-6 rounded-full shadow-md flex items-center space-x-2">
          <span class="bg-gray-200 p-2 rounded-full">
            <img src="./src/assets/images/Icon/cup.png" alt="cup" class="h-6 w-6" />
          </span>
          <div>
            <p class="font-semibold text-gray-800">${category.title}</p>
            <p class="text-gray-500 text-sm">${category.date}</p>
          </div>
        </div>
      `;
      secondCategoryGrid.innerHTML += categoryItem;
    });
  }
}

// Render categories on load
renderCategories();

// Re-render categories when the window is resized
window.addEventListener("resize", renderCategories);






