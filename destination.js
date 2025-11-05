const places = [
  {
    name: "Masjid al-Haram, Mecca",
    image: "images/Masjid al haram.jpg",
    description:
      "The holiest mosque in Islam, located in Mecca. It surrounds the Kaaba, the Qibla for Muslims worldwide.",
    price: "$1,200",
    days: "5 Days / 4 Nights",
    hotel: "5★ Hotel Zamzam Tower",
    transport: "Air + AC Bus",
    meals: "Breakfast & Dinner Included",
  },
  {
    name: "Al-Masjid an-Nabawi, Medina",
    image: "images/Masjid-an-Nabawi.jpg",
    description:
      "The Prophet’s Mosque in Medina, established by Prophet Muhammad (PBUH). It is the second holiest site in Islam.",
    price: "$1,000",
    days: "4 Days / 3 Nights",
    hotel: "4★ Al Eiman Royal",
    transport: "Flight + Local Transfers",
    meals: "All Meals Included",
  },
  {
    name: "Al-Aqsa Mosque, Jerusalem",
    image: "images/Masjid-Al-Aqsa.avif",
    description:
      "Located in Jerusalem, it is Islam’s third holiest mosque and the first Qibla of Muslims.",
    price: "$950",
    days: "3 Days / 2 Nights",
    hotel: "4★ Hashimi Hotel",
    transport: "Flight + Private Car",
    meals: "Breakfast Included",
  },
  {
    name: "Imam Hussain Shrine, Karbala (Iraq)",
    image: "images/karbala.jpg",
    description:
      "The resting place of Imam Husayn ibn Ali in Karbala, Iraq — a site of devotion and reflection.",
    price: "$1,100",
    days: "4 Days / 3 Nights",
    hotel: "5★ Karbala Rayhaan by Rotana",
    transport: "Flight + Bus",
    meals: "All Meals Included",
  },
  {
    name: "Shrine of Abdul Qadir Jilani, Baghdad (Iraq)",
    image: "images/sheikh-abdul-qadir-jilani.jpg",
    description:
      "The shrine of Sheikh Abdul Qadir Jilani (RA), a prominent Sufi saint known for his teachings of peace and piety.",
    price: "$1,250",
    days: "5 Days / 4 Nights",
    hotel: "4★ Baghdad International Hotel",
    transport: "Flight + AC Coach",
    meals: "Breakfast & Dinner Included",
  },
  {
    name: "Dargah Khwaja Garib Nawaz, Ajmer (Rajasthan, India)",
    image: "images/Ajmer-Sharif.webp",
    description:
      "The Dargah of Khwaja Moinuddin Chishti, one of the most visited spiritual centers in India symbolizing love and unity.",
    price: "$500",
    days: "3 Days / 2 Nights",
    hotel: "3★ Ajmer Inn",
    transport: "Train + Taxi",
    meals: "Breakfast Included",
  },
  {
    name: "Dargah Ala Hazrat, Bareilly (Uttar Pradesh, India)",
    image: "images/Ala Hazrat.jpg",
    description:
      "The shrine of Imam Ahmad Raza Khan Barelvi (RA), a great Islamic scholar and reformer of the Ahl-e-Sunnat.",
    price: "$450",
    days: "2 Days / 1 Night",
    hotel: "3★ Noor Mahal Hotel",
    transport: "Train + Local Auto",
    meals: "Breakfast Included",
  },
  {
    name: "Dargah Baba Tajuddin, Nagpur (India)",
    image: "images/hazrat-baba-tajuddin.jpg",
    description:
      "The Dargah of Baba Tajuddin Aulia (RA), a revered Sufi saint of Nagpur known for his miraculous blessings.",
    price: "$400",
    days: "2 Days / 1 Night",
    hotel: "2★ Taj Palace Inn",
    transport: "Train + Auto",
    meals: "Breakfast Included",
  },
  {
    name: "Great Mosque of Kairouan, Tunisia",
    image: "images/mosque.webp",
    description:
      "One of the oldest mosques in North Africa, symbolizing the spread of Islam in the Maghreb region.",
    price: "$1,300",
    days: "6 Days / 5 Nights",
    hotel: "5★ La Kasbah Hotel",
    transport: "Flight + Tour Bus",
    meals: "Breakfast & Dinner Included",
  },
];

const placesContainer = document.getElementById("placesContainer");
const searchInput = document.getElementById("searchInput");

function displayPlaces(filteredPlaces) {
  placesContainer.innerHTML = "";
  filteredPlaces.forEach((place) => {
    const card = document.createElement("div");
    card.classList.add("place-card");
    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}">
      <div class="place-info">
        <h2>${place.name}</h2>
        <p>${place.description}</p>
      </div>
      <div class="package-details">
        <span class="price">Price: ${place.price}</span>
        <span class="days">Duration: ${place.days}</span>
        <span class="hotel">Hotel: ${place.hotel}</span>
        <span class="transport">Transport: ${place.transport}</span>
        <span class="meals">Meals: ${place.meals}</span>
        <button class="btn-book">Book Now</button>
      </div>
    `;
    placesContainer.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => {
  const searchText = e.target.value.toLowerCase();
  const filtered = places.filter((place) =>
    place.name.toLowerCase().includes(searchText)
  );
  displayPlaces(filtered);
});

// Load all destinations by default
displayPlaces(places);
