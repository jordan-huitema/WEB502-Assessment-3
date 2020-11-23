// Create prefrences
// If pref isnt in local storage, create it
if (!localStorage.pref) {
    let pref = {
        browse: 'All Bikes',
        product: null
    };
    localStorage.setItem('pref', JSON.stringify(pref));
}
// Load pref object from storage
let pref = JSON.parse(localStorage.getItem('pref'));

// Store current pref object
function storePref () {
    localStorage.setItem('pref', JSON.stringify(pref));
}

// Browse page 
// Set pref, link page
function browsePage (cat) {
    pref.browse = cat;
    storePref();
    window.location.href = '../pages/browse.html';
}

// Load Content
if (window.location.pathname === '/pages/browse.html') {
    // Set Title Image
    document.getElementById('browseImg').src = `../imgs/${pref.browse.replaceAll(" ", "").toLowerCase()}.webp`;
    // Set Title Text
    document.getElementById('browseTitle').textContent = `${pref.browse} Bikes`;
}

// Product Page
// Set pref, link page
function productPage (itm, cst) {
    pref.product = {item: itm, cost: cst};
    storePref();
    window.location.href = '../pages/product.html';
}

// Load Content
if (window.location.pathname === '/pages/product.html') {
    // Set Images
    document.getElementById('productTitleImg').src = `../imgs/${pref.product.item.replaceAll(" ", "").toLowerCase()}.webp`;

    let imgs = document.getElementById('productImgs').children;
    for (i = 0; i < imgs.length; i++) {
        imgs[i].src = `../imgs/${pref.product.item.replaceAll(" ", "").toLowerCase()}.webp`;
    }

    // Set Title and Cost
    document.getElementById('productCost').textContent = `${pref.product.item}, $${pref.product.cost}`;
    document.getElementById('productTitle').textContent = pref.product.item;
}

// Payment Page
// Load Content
if (window.location.pathname === '/pages/payment.html') {
    // Set Image
    document.getElementById('paymentImg').src = `../imgs/${pref.product.item.replaceAll(" ", "").toLowerCase()}.webp`;
    // Set Title, cost
    document.getElementById('paymentTitle').textContent = pref.product.item;
    document.getElementById('_payment-bike').textContent = `$${pref.product.cost}`;
}

console.log('ran dynamic');