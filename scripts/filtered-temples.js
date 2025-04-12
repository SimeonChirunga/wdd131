// File: filtered-temples.js
// Store the selected elements that we are going to use. 
const hambutton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation')

//--------------------------------------------------------
// Using the ".show" class definition from templs.css
//--------------------------------------------------------
menu.addEventListener('click', () => {
    // menu.classList.toggle('show');
    // layout.classList.toggle('show');
    toggleMenuButton();
});
// ABOVE - Add a click event listener to the hamburger button and use a callback
//         function that toggles the element's list of classes.

function toggleMenuButton() {
    menu.classList.toggle('show');
    layout.classList.toggle('show');
};

// hambutton.addEventListener('click', () => {
// 	;
// })

// function toggleActive(element) {

// }

let pagename = "Home Page";

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Panamá City Panamá",
        location: "Ancon, Panamá, Panama",
        dedicated: "2008, August, 10",
        area: 18943,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/panama-city-panama/400x250/panama-city-temple-lds-569186-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Fukuoka Japan",
        location: "Fukuoka-shi, Fukuoka, Japan",
        dedicated: "2000, June, 11",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Helsinki Finland",
        location: "Espoo, Uusimaa, Finland",
        dedicated: "2006, February, 27",
        area: 16350,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/helsinki-finland/400x225/helsinki-finland-temple-lds-354498-wallpaper.jpg",
        width: "400px",
        height: "225px"
    },

    // Add more temple objects here...
];

// Call the createTempleCard() function (defined below)
createTempleCard(temples, "Starting Home Page");

const homelink = document.querySelector("#home");
const oldlink = document.querySelector("#old");
const newlink = document.querySelector("#new");
const largelink = document.querySelector("#large");
const smalllink = document.querySelector("#small");

// Anonymous () function definitions
// Home button - get all temples
homelink.addEventListener('click', () => {
    let hometemple = temples;
    createTempleCard(hometemple, "Temples Home Page");
})

newlink.addEventListener('click', () => {
    let newtemple = temples.filter(temples => (new Date(temples.dedicated).getFullYear() > 2000));
    createTempleCard(newtemple, "New Temples");
})

oldlink.addEventListener('click', () => {
    let oldtemple = temples.filter(temples => (new Date(temples.dedicated).getFullYear() < 1990));
    createTempleCard(oldtemple, "Old Temples");
})

largelink.addEventListener('click', () => {
    let largetemple = temples.filter(temples => temples.area > 90000);
    createTempleCard(largetemple, "Larger Temples");
})

smalllink.addEventListener('click', () => {
    let smalltemple = temples.filter(temples => temples.area < 100000);
    createTempleCard(smalltemple, "Smaller Temples");
})

function createTempleCard(filteredTemples, pagename) {
    // clear out last selected list of temples
    document.querySelector(".container").innerHTML = "";
    document.querySelector("#pagename").innerHTML = "";

    // Add page Title
    // let pagename = "Home Page";
    let h2Title = document.createElement("h2");
    h2Title.innerHTML = `<h2 class="stdlf">${pagename}</h2>`;
    document.querySelector("#pagename").appendChild(h2Title);

    // Foreach temple in the temples Array, do the following
    filteredTemples.forEach(temple => {
        let card = document.createElement("div");
        card.classList.add("card");
        // Above - add class="card" to the above <div class="card">
        // Since img is part of <div>, it will use the class: .card img

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:     </span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "398");
        img.setAttribute("height", "250");

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);

        document.querySelector(".container").appendChild(card);
    })
}