// Array of product data
const products = [
    {
        "prodname": "Spring Type Apaxx PVC Foot Valves",
        "image": "http://5.imimg.com/data5/SELLER/Default/2024/3/404228298/KS/IH/UJ/19133487/spring-type-foot-valbe-250x250.jpg",
        "proddispid": 183143050,
        "catid": "130"
    },
    {
        "prodname": "Flap Type Apaxx PVC Foot Valves",
        "image": "http://5.imimg.com/data5/SELLER/Default/2024/3/404227695/UK/SS/XQ/19133487/abs-taps-250x250.jpg",
        "proddispid": 183143051,
        "catid": "130"
    },
    {
        "prodname": "1 Inch Apaxx PVC Foot Valves",
        "image": "http://5.imimg.com/data5/NSDMERP/Default/2022/4/UG/IK/FO/19133487/pvc-foot-valves-1649229422265-250x250.jpg",
        "proddispid": 183145454,
        "catid": "130"
    },
    {
        "prodname": "Apaxx PVC Ball Valves",
        "image": "http://5.imimg.com/data5/NSDMERP/Default/2022/4/VZ/DQ/AO/19133487/apaxx-ball-valves-1649229258322-250x250.jpg",
        "proddispid": 183145450,
        "catid": "130"
    },
    {
        "prodname": "PVC Apaxx Threaded End Ball Valve",
        "image": "http://5.imimg.com/data5/NSDMERP/Default/2022/4/RB/OU/VW/19133487/apaxx-ball-valves-pasted-and-threaded-1649229303871-250x250.jpg",
        "proddispid": 183145451,
        "catid": "130"
    },
    {
        "prodname": "Black Apaxx Return Line Filter",
        "image": "http://5.imimg.com/data5/SELLER/Default/2024/3/404235843/EF/RT/OK/19133487/return-line-filter-250x250.jpg",
        "proddispid": 271762720,
        "catid": "97"
    },
    {
        "prodname": "Red Apxx Return Line Filter",
        "image": "http://5.imimg.com/data5/SELLER/Default/2024/3/404478041/QP/HJ/IO/19133487/red-apxx-return-line-filter-250x250.jpg",
        "proddispid": 271762594,
        "catid": "97"
    },
    {
        "prodname": "Apaxx PVC High Pressure Ball Valves",
        "image": "http://5.imimg.com/data5/SELLER/Default/2024/3/404231755/HD/HQ/WX/19133487/heavy-duty-ball-valve-250x250.jpg",
        "proddispid": 183143052,
        "catid": "130"
    }
];

// Array for Suction Hose products
const suctionHose = [
    {
        "prodname": "APAXX",
        "image": "images/apaxx.jpg",
        "hosesize": '1" - 2"',
        "hoseprice": "1550.00 - 4600.00"
    },
    {
        "prodname": "AQUAFLO",
        "image": "images/aquaflo.jpg",
        "hosesize": '1" - 2"',
        "hoseprice": "1350.00 - 4275.00"
    },
    {
        "prodname": "AQUAGREEN",
        "image": "images/aquagreen.jpg",
        "hosesize": '1"',
        "hoseprice": "1050.00"
    }
];

// Array for Garden Hose products
const gardenHose = [
    {
        "prodname": "Zebra",
        "image": "images/zebra.jpg",
        "hosesize": '1/2" - 3/4" 15-100mtr',
        "hoseprice": "390.00 - 2600.00"
    },
    {
        "prodname": "Candy",
        "image": "images/candy.jpg",
        "hosesize": '1/2" - 3/4" 15-30mtr',
        "hoseprice": "350.00 - 1010.00"
    },
    {
        "prodname": "Soft",
        "image": "images/soft.jpg",
        "hosesize": '1/2" 30mtr',
        "hoseprice": "480.00 - 700.00"
    },
    {
        "prodname": "AQUA FLO BRAIDED HOSE",
        "image": "images/aquaflobraided.jpg",
        "hosesize": '1/2" - 1" 30mtr',
        "hoseprice": "550.00 - 1300.00"
    }
];

// Function to render all products in different sections
function loadAllProducts() {
    const generalProductGrid = document.getElementById('generalProductGrid');
    const suctionHoseGrid = document.getElementById('suctionHoseGrid');
    const gardenHoseGrid = document.getElementById('gardenHoseGrid');

    // Render general products
    generalProductGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.prodname}">
            <h3>${product.prodname}</h3>
            <p>Product ID: ${product.proddispid}</p>
            <p>Category ID: ${product.catid}</p>
        </div>
    `).join('');

    // Render Suction Hose products
    suctionHoseGrid.innerHTML = suctionHose.map(hose => `
        <div class="product-card">
            <img src="${hose.image}" alt="${hose.prodname}">
            <h3>${hose.prodname}</h3>
            <p>Size: ${hose.hosesize}</p>
            <p>Price: ₹${hose.hoseprice}</p>
        </div>
    `).join('');

    // Render Garden Hose products
    gardenHoseGrid.innerHTML = gardenHose.map(hose => `
        <div class="product-card">
            <img src="${hose.image}" alt="${hose.prodname}">
            <h3>${hose.prodname}</h3>
            <p>Size: ${hose.hosesize}</p>
            <p>Price: ₹${hose.hoseprice}</p>
        </div>
    `).join('');
}

// Load all products on page load
loadAllProducts();

function performSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Redirect to the search results page with the query as a URL parameter
    if (searchInput) {
        window.location.href = `search_results.html?query=${searchInput}`;
    } else {
        alert("Please enter a product name to search.");
    }
}

