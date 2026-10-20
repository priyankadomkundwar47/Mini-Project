/
const GST_RATE = 0.05;            
const PACKAGING_FEE = 20;        
const DELIVERY_FEE = 30;          
const FREE_DELIVERY_ABOVE = 499;  
const MAX_QTY_PER_ITEM = 20;     
const CART_STORAGE_KEY = "urbanSpiceCart";


const categories = [
  "Starters",
  "Main Course",
  "Breads",
  "Rice & Biryani",
  "Snacks",
  "Beverages",
  "Desserts"
];

const menuItems = [
  {
    id: 1,
    name: "Paneer Tikka",
    category: "Starters",
    price: 249,
    veg: true,
    popular: true,
    description: "Soft paneer cubes marinated in spiced yogurt and grilled in the tandoor.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 2,
    name: "Veg Manchurian",
    category: "Starters",
    price: 189,
    veg: true,
    popular: false,
    description: "Crispy vegetable dumplings tossed in a tangy Indo-Chinese garlic sauce.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 3,
    name: "Hara Bhara Kebab",
    category: "Starters",
    price: 199,
    veg: true,
    popular: false,
    description: "Pan-fried spinach, peas and potato patties with mild Indian spices.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 4,
    name: "Chicken Tikka",
    category: "Starters",
    price: 289,
    veg: false,
    popular: true,
    description: "Juicy chicken pieces marinated overnight and char-grilled to perfection.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 5,
    name: "Butter Paneer Masala",
    category: "Main Course",
    price: 279,
    veg: true,
    popular: true,
    description: "Paneer simmered in a rich, creamy tomato and butter gravy.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 6,
    name: "Dal Tadka",
    category: "Main Course",
    price: 189,
    veg: true,
    popular: false,
    description: "Yellow lentils cooked with garlic, cumin and a smoky ghee tempering.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 7,
    name: "Butter Chicken",
    category: "Main Course",
    price: 329,
    veg: false,
    popular: true,
    description: "Tender tandoori chicken in a velvety tomato-butter sauce.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 8,
    name: "Veg Biryani",
    category: "Rice & Biryani",
    price: 229,
    veg: true,
    popular: false,
    description: "Fragrant basmati rice layered with vegetables, saffron and whole spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 9,
    name: "Chicken Biryani",
    category: "Rice & Biryani",
    price: 299,
    veg: false,
    popular: true,
    description: "Slow-cooked dum biryani with spiced chicken, served with raita.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 10,
    name: "Jeera Rice",
    category: "Rice & Biryani",
    price: 129,
    veg: true,
    popular: false,
    description: "Steamed basmati rice tempered with cumin seeds and ghee.",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 11,
    name: "Butter Naan",
    category: "Breads",
    price: 55,
    veg: true,
    popular: false,
    description: "Soft tandoor-baked flatbread brushed with melted butter.",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 12,
    name: "Tandoori Roti",
    category: "Breads",
    price: 35,
    veg: true,
    popular: false,
    description: "Whole-wheat bread baked fresh in a clay tandoor.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 13,
    name: "Garlic Naan",
    category: "Breads",
    price: 69,
    veg: true,
    popular: false,
    description: "Naan topped with chopped garlic and fresh coriander.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 14,
    name: "Veg Burger",
    category: "Snacks",
    price: 129,
    veg: true,
    popular: false,
    description: "Crispy veggie patty with lettuce, tomato and creamy sauce in a toasted bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 15,
    name: "French Fries",
    category: "Snacks",
    price: 109,
    veg: true,
    popular: false,
    description: "Golden, crunchy fries dusted with peri-peri masala.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 16,
    name: "Cold Coffee",
    category: "Beverages",
    price: 119,
    veg: true,
    popular: true,
    description: "Thick, chilled coffee blended with milk and a scoop of ice cream.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 17,
    name: "Masala Chai",
    category: "Beverages",
    price: 49,
    veg: true,
    popular: false,
    description: "Hot Indian tea brewed with ginger, cardamom and fresh milk.",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 18,
    name: "Fresh Lime Soda",
    category: "Beverages",
    price: 79,
    veg: true,
    popular: false,
    description: "Fizzy soda with fresh lime juice - choose sweet or salted.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=70"
  },
  {
    id: 19,
    name: "Gulab Jamun",
    category: "Desserts",
    price: 89,
    veg: true,
    popular: true,
    description: "Two warm milk dumplings soaked in cardamom sugar syrup.",
    image: "https://images.unsplash.com/photo-1601303516534-bf4e0a6b1e2c?auto=format&fit=crop&w=600&q=70"
  }
];

// Emoji used on the placeholder picture when a food image cannot be loaded
const categoryEmoji = {
  "Starters": "🍢",
  "Main Course": "🍛",
  "Breads": "🍞",
  "Rice & Biryani": "🍚",
  "Snacks": "🍔",
  "Beverages": "🥤",
  "Desserts": "🍮"
};


/* ---------- 3. APP STATE ----------
   cart is an array of small objects: { id: <dish id>, qty: <how many> }
   Only the id and quantity are stored; names and prices are always read from menuItems,
   so if you change a price in the menu, the cart updates automatically.
*/
let cart = [];
let activeCategory = "All";   // "All", "Popular" or one of the categories
let searchText = "";
let vegOnly = false;
let toastTimer = null;
let lastFocusedElement = null; // remembers where focus was before the order pop-up opened


/* ---------- 4. PAGE ELEMENTS ---------- */
const menuGrid = document.getElementById("menuGrid");
const categoryFilters = document.getElementById("categoryFilters");
const searchInput = document.getElementById("searchInput");
const vegOnlyCheckbox = document.getElementById("vegOnly");
const resultsInfo = document.getElementById("resultsInfo");
const noResults = document.getElementById("noResults");
const resetFiltersBtn = document.getElementById("resetFilters");
const menuSection = document.getElementById("menu");

const cartToggle = document.getElementById("cartToggle");
const cartCount = document.getElementById("cartCount");
const cartPanel = document.getElementById("cartPanel");
const cartClose = document.getElementById("cartClose");
const cartEmpty = document.getElementById("cartEmpty");
const cartBody = document.getElementById("cartBody");
const cartItems = document.getElementById("cartItems");
const overlay = document.getElementById("overlay");
const browseMenuBtn = document.getElementById("browseMenuBtn");

const billSubtotal = document.getElementById("billSubtotal");
const billGst = document.getElementById("billGst");
const billPackaging = document.getElementById("billPackaging");
const billDelivery = document.getElementById("billDelivery");
const billTotal = document.getElementById("billTotal");
const deliveryHint = document.getElementById("deliveryHint");

const placeOrderBtn = document.getElementById("placeOrderBtn");
const clearCartBtn = document.getElementById("clearCartBtn");
const showPopularBtn = document.getElementById("showPopularBtn");

const orderModal = document.getElementById("orderModal");
const orderNumber = document.getElementById("orderNumber");
const orderItemCount = document.getElementById("orderItemCount");
const orderAmount = document.getElementById("orderAmount");
const orderLines = document.getElementById("orderLines");
const orderModalClose = document.getElementById("orderModalClose");

const toast = document.getElementById("toast");


/* ---------- 5. HELPER FUNCTIONS ---------- */

// Turns a number into Indian rupee format, e.g. 1234.5 -> "₹1,234.50"
// showDecimals = false gives "₹249", true gives "₹249.00"
function formatINR(amount, showDecimals) {
  const digits = showDecimals ? 2 : 0;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  }).format(amount);
}

// Rounds to 2 decimal places (avoids tiny floating-point errors like 12.450000001)
function round2(number) {
  return Math.round(number * 100) / 100;
}

// Makes text safe to place inside HTML
function escapeHTML(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Finds a dish in the menu by its id (returns undefined if not found)
function getMenuItem(id) {
  return menuItems.find(function (item) {
    return item.id === id;
  });
}

// Finds a line in the cart by dish id (returns undefined if the dish is not in the cart)
function findCartLine(id) {
  return cart.find(function (line) {
    return line.id === id;
  });
}

// HTML for the green / red veg indicator
function vegIconHTML(isVeg) {
  const label = isVeg ? "Vegetarian" : "Non-vegetarian";
  return '<span class="veg-icon ' + (isVeg ? "veg" : "nonveg") + '" role="img" aria-label="' + label + '" title="' + label + '"></span>';
}

// Builds a placeholder picture (as an SVG data URL) for when an image fails to load
function createFallbackImage(label, category) {
  const emoji = categoryEmoji[category] || "🍽️";
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#ffd8a8"/><stop offset="1" stop-color="#ff922b"/>' +
    "</linearGradient></defs>" +
    '<rect width="600" height="450" fill="url(#g)"/>' +
    '<text x="300" y="235" font-size="130" text-anchor="middle">' + emoji + "</text>" +
    '<text x="300" y="340" font-size="34" font-family="Arial, sans-serif" fill="#3b2415" text-anchor="middle">' +
    escapeHTML(label || "Urban Spice") + "</text></svg>";
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

// Runs when any image fails to load: swap in the placeholder (only once, to avoid loops)
function handleImageError(event) {
  const img = event.target;
  if (!(img instanceof HTMLImageElement) || img.dataset.fallbackUsed) {
    return;
  }
  img.dataset.fallbackUsed = "true";
  img.src = createFallbackImage(img.alt, img.dataset.category);
}


/* ---------- 6. CART FUNCTIONS ---------- */

// Reads the saved cart from localStorage. Bad or old data is ignored safely.
function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    if (!Array.isArray(saved)) {
      return [];
    }
    const cleanCart = [];
    saved.forEach(function (line) {
      const id = line ? Number(line.id) : NaN;
      const qty = line ? Number(line.qty) : NaN;
      // keep only dishes that still exist in the menu and have a sensible quantity
      if (getMenuItem(id) && Number.isInteger(qty) && qty > 0 && !findInList(cleanCart, id)) {
        cleanCart.push({ id: id, qty: Math.min(qty, MAX_QTY_PER_ITEM) });
      }
    });
    return cleanCart;
  } catch (error) {
    return [];
  }
}

// Small helper used by loadCart to avoid duplicate dishes
function findInList(list, id) {
  return list.some(function (line) {
    return line.id === id;
  });
}

// Saves the cart to localStorage so it survives a page refresh
function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    // Storage may be blocked (private mode). The cart still works, it just won't be remembered.
  }
}

// Total number of items in the cart (for the badge)
function getCartCount() {
  return cart.reduce(function (total, line) {
    return total + line.qty;
  }, 0);
}

// Adds one portion of a dish to the cart
function addToCart(id) {
  const item = getMenuItem(id);
  if (!item) {
    return;
  }
  const line = findCartLine(id);
  if (line) {
    if (line.qty >= MAX_QTY_PER_ITEM) {
      showToast("Maximum " + MAX_QTY_PER_ITEM + " per dish allowed.");
      return;
    }
    line.qty += 1;
  } else {
    cart.push({ id: id, qty: 1 });
  }
  onCartChanged();
  showToast(item.name + " added to cart");
}

// Increases (+1) or decreases (-1) a dish quantity. At zero the dish is removed.
function changeQuantity(id, change) {
  const line = findCartLine(id);
  if (!line) {
    return;
  }
  const newQty = line.qty + change;
  if (newQty > MAX_QTY_PER_ITEM) {
    showToast("Maximum " + MAX_QTY_PER_ITEM + " per dish allowed.");
    return;
  }
  if (newQty <= 0) {
    // remove the dish; quantity can never go negative
    cart = cart.filter(function (cartLine) {
      return cartLine.id !== id;
    });
  } else {
    line.qty = newQty;
  }
  onCartChanged();
}

// Empties the cart (asks the customer first)
function clearCart() {
  if (cart.length === 0) {
    showToast("Your cart is already empty.");
    return;
  }
  if (!window.confirm("Remove all items from your cart?")) {
    return;
  }
  cart = [];
  onCartChanged();
  showToast("Cart cleared");
}

// Works out the bill: subtotal, GST, fees and the final payable amount
function calculateBill() {
  let subtotal = 0;
  cart.forEach(function (line) {
    const item = getMenuItem(line.id);
    if (item) {
      subtotal += item.price * line.qty;
    }
  });

  const hasItems = subtotal > 0;
  const gst = round2(subtotal * GST_RATE);
  const packaging = hasItems ? PACKAGING_FEE : 0;
  const delivery = hasItems && subtotal < FREE_DELIVERY_ABOVE ? DELIVERY_FEE : 0;
  const total = round2(subtotal + gst + packaging + delivery);

  return {
    subtotal: subtotal,
    gst: gst,
    packaging: packaging,
    delivery: delivery,
    total: total
  };
}

// Called every time the cart changes: save it and refresh everything that shows it
function onCartChanged() {
  saveCart();
  updateCartBadge();
  renderCart();
  refreshCardActions();
}


/* ---------- 7. DRAWING THE PAGE ---------- */

// Creates the category buttons (All, Popular, then each category)
function renderCategories() {
  const names = ["All", "Popular"].concat(categories);
  categoryFilters.innerHTML = names
    .map(function (name) {
      const isActive = name === activeCategory;
      const label = name === "Popular" ? "⭐ Popular" : escapeHTML(name);
      return (
        '<button type="button" class="category-btn' + (isActive ? " active" : "") + '"' +
        ' data-category="' + escapeHTML(name) + '" aria-pressed="' + isActive + '">' +
        label + "</button>"
      );
    })
    .join("");
}

// Changes the selected category and redraws the menu
function setCategory(name) {
  activeCategory = name;
  categoryFilters.querySelectorAll(".category-btn").forEach(function (button) {
    const isActive = button.dataset.category === activeCategory;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderMenu();
}

// Clears the search box, the veg filter and the category
function resetFilters() {
  searchText = "";
  searchInput.value = "";
  vegOnly = false;
  vegOnlyCheckbox.checked = false;
  setCategory("All");
}

// Returns only the dishes that match the category, search text and veg filter
function getFilteredItems() {
  const term = searchText.trim().toLowerCase();
  return menuItems.filter(function (item) {
    let matchesCategory = true;
    if (activeCategory === "Popular") {
      matchesCategory = item.popular;
    } else if (activeCategory !== "All") {
      matchesCategory = item.category === activeCategory;
    }
    const matchesSearch = item.name.toLowerCase().includes(term);
    const matchesVeg = !vegOnly || item.veg;
    return matchesCategory && matchesSearch && matchesVeg;
  });
}

// HTML for the Add button (dish not in cart) or the - qty + stepper (dish in cart)
function actionsHTML(id) {
  const line = findCartLine(id);
  if (!line) {
    return '<button type="button" class="btn-add" data-action="add" data-id="' + id + '">Add</button>';
  }
  return stepperHTML(id, line.qty);
}

// HTML for the quantity stepper used on menu cards and in the cart
function stepperHTML(id, qty) {
  return (
    '<div class="stepper" role="group" aria-label="Quantity">' +
    '<button type="button" data-action="dec" data-id="' + id + '" aria-label="Decrease quantity">−</button>' +
    '<span class="qty">' + qty + "</span>" +
    '<button type="button" data-action="inc" data-id="' + id + '" aria-label="Increase quantity">+</button>' +
    "</div>"
  );
}

// HTML for one menu card
function createCardHTML(item) {
  const name = escapeHTML(item.name);
  return (
    '<article class="menu-card" data-id="' + item.id + '">' +
      '<div class="card-image">' +
        '<img src="' + escapeHTML(item.image) + '" alt="' + name + '" data-category="' + escapeHTML(item.category) + '" loading="lazy">' +
        (item.popular ? '<span class="badge-popular">⭐ Popular</span>' : "") +
      "</div>" +
      '<div class="card-body">' +
        '<div class="card-title-row">' + vegIconHTML(item.veg) + '<h3 class="card-title">' + name + "</h3></div>" +
        '<p class="card-desc">' + escapeHTML(item.description) + "</p>" +
        '<div class="card-footer">' +
          '<span class="card-price">' + formatINR(item.price, false) + "</span>" +
          '<div class="card-actions" data-actions-for="' + item.id + '">' + actionsHTML(item.id) + "</div>" +
        "</div>" +
      "</div>" +
    "</article>"
  );
}

// Draws all menu cards that match the current filters
function renderMenu() {
  const items = getFilteredItems();
  menuGrid.innerHTML = items.map(createCardHTML).join("");
  noResults.hidden = items.length !== 0;

  let info = "Showing " + items.length + (items.length === 1 ? " dish" : " dishes");
  if (activeCategory !== "All") {
    info += " in " + activeCategory;
  }
  if (searchText.trim() !== "") {
    info += ' matching "' + searchText.trim() + '"';
  }
  resultsInfo.textContent = info;
}

// Updates only the Add / stepper area of every card (so images don't reload)
function refreshCardActions() {
  document.querySelectorAll(".card-actions").forEach(function (box) {
    box.innerHTML = actionsHTML(Number(box.dataset.actionsFor));
  });
}

// Updates the number on the cart icon in the header
function updateCartBadge() {
  const count = getCartCount();
  cartCount.textContent = count;
  cartCount.classList.toggle("is-empty", count === 0);
  cartToggle.setAttribute("aria-label", "Open cart, " + count + (count === 1 ? " item" : " items"));
}

// Draws the cart list and the bill summary
function renderCart() {
  const isEmpty = cart.length === 0;
  cartEmpty.hidden = !isEmpty;
  cartBody.hidden = isEmpty;

  cartItems.innerHTML = cart
    .map(function (line) {
      const item = getMenuItem(line.id);
      return (
        '<li class="cart-item">' +
          '<div class="cart-item-info">' +
            vegIconHTML(item.veg) +
            "<div>" +
              '<p class="cart-item-name">' + escapeHTML(item.name) + "</p>" +
              '<p class="cart-item-price">' + formatINR(item.price, false) + " × " + line.qty + "</p>" +
            "</div>" +
          "</div>" +
          '<div class="cart-item-controls">' +
            stepperHTML(item.id, line.qty) +
            '<p class="cart-item-subtotal">' + formatINR(item.price * line.qty, false) + "</p>" +
          "</div>" +
        "</li>"
      );
    })
    .join("");

  const bill = calculateBill();
  billSubtotal.textContent = formatINR(bill.subtotal, true);
  billGst.textContent = formatINR(bill.gst, true);
  billPackaging.textContent = formatINR(bill.packaging, true);
  billTotal.textContent = formatINR(bill.total, true);

  if (isEmpty) {
    billDelivery.textContent = formatINR(0, true);
    billDelivery.classList.remove("free");
    deliveryHint.textContent = "";
  } else if (bill.delivery === 0) {
    billDelivery.textContent = "FREE";
    billDelivery.classList.add("free");
    deliveryHint.textContent = "🎉 You have unlocked free delivery!";
  } else {
    billDelivery.textContent = formatINR(bill.delivery, true);
    billDelivery.classList.remove("free");
    deliveryHint.textContent =
      "Add " + formatINR(FREE_DELIVERY_ABOVE - bill.subtotal, false) + " more for free delivery.";
  }
}


/* ---------- 8. CART PANEL, ORDER CONFIRMATION, MESSAGES ---------- */

// True when the screen is wide enough to show the cart as a sidebar
function isDesktopLayout() {
  return window.matchMedia("(min-width: 1000px)").matches;
}

// Keeps the page from scrolling behind the drawer or the order pop-up
function updateScrollLock() {
  const drawerOpen = cartPanel.classList.contains("open");
  const modalOpen = !orderModal.hidden;
  document.body.classList.toggle("no-scroll", drawerOpen || modalOpen);
}

// Cart icon: opens the drawer on mobile, or points to the sidebar on desktop
function openCart() {
  if (isDesktopLayout()) {
    const box = cartPanel.getBoundingClientRect();
    const isVisible = box.top < window.innerHeight && box.bottom > 0;
    if (!isVisible) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
    cartPanel.classList.add("highlight");
    setTimeout(function () {
      cartPanel.classList.remove("highlight");
    }, 900);
    return;
  }
  cartPanel.classList.add("open");
  overlay.hidden = false;
  updateScrollLock();
  cartClose.focus();
}

// Closes the mobile cart drawer
function closeCart() {
  cartPanel.classList.remove("open");
  overlay.hidden = true;
  updateScrollLock();
}

// Shows a short message at the bottom of the screen
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2200);
}

// Makes an order number like US261011-4821 (US + YYMMDD + random 4 digits)
function generateOrderNumber() {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const random = Math.floor(1000 + Math.random() * 9000);
  return "US" + yy + mm + dd + "-" + random;
}

// Place Order: check the cart, build the order, empty the cart, show confirmation
function placeOrder() {
  if (cart.length === 0) {
    showToast("Your cart is empty. Please add at least one dish.");
    return;
  }

  const bill = calculateBill();
  const order = {
    number: generateOrderNumber(),
    total: bill.total,
    itemCount: getCartCount(),
    lines: cart.map(function (line) {
      const item = getMenuItem(line.id);
      return { name: item.name, qty: line.qty, subtotal: item.price * line.qty };
    })
  };

  cart = [];
  onCartChanged();
  closeCart();
  showOrderModal(order);
}

// Fills in and opens the order confirmation pop-up
function showOrderModal(order) {
  orderNumber.textContent = order.number;
  orderItemCount.textContent = order.itemCount;
  orderAmount.textContent = formatINR(order.total, true);
  orderLines.innerHTML = order.lines
    .map(function (line) {
      return "<li><span>" + escapeHTML(line.name) + " × " + line.qty + "</span><span>" + formatINR(line.subtotal, false) + "</span></li>";
    })
    .join("");

  lastFocusedElement = document.activeElement;
  orderModal.hidden = false;
  updateScrollLock();
  orderModalClose.focus();
}

// Closes the order confirmation pop-up
function closeOrderModal() {
  orderModal.hidden = true;
  updateScrollLock();
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

// Smoothly scrolls down to the menu
function scrollToMenu() {
  menuSection.scrollIntoView({ behavior: "smooth" });
}

// Handles clicks on Add, + and - buttons (used by both the menu and the cart list)
function handleQuantityClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }
  const container = event.currentTarget;
  const action = button.dataset.action;
  const id = Number(button.dataset.id);

  if (action === "add") {
    addToCart(id);
  } else if (action === "inc") {
    changeQuantity(id, 1);
  } else if (action === "dec") {
    changeQuantity(id, -1);
  }

  // The buttons were redrawn, so give keyboard focus back to the matching button
  const wanted = {
    add: ["inc"],
    inc: ["inc"],
    dec: ["dec", "add"]
  }[action];
  for (let i = 0; i < wanted.length; i++) {
    const next = container.querySelector('button[data-action="' + wanted[i] + '"][data-id="' + id + '"]');
    if (next) {
      next.focus();
      break;
    }
  }
}


/* ---------- 9. EVENT LISTENERS AND START-UP ---------- */
function setupEventListeners() {
  // Search box: filter as the customer types
  searchInput.addEventListener("input", function (event) {
    searchText = event.target.value;
    renderMenu();
  });

  // Veg only checkbox
  vegOnlyCheckbox.addEventListener("change", function (event) {
    vegOnly = event.target.checked;
    renderMenu();
  });

  // Category buttons
  categoryFilters.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-category]");
    if (button) {
      setCategory(button.dataset.category);
    }
  });

  resetFiltersBtn.addEventListener("click", resetFilters);

  // Add / + / - buttons on menu cards and inside the cart
  menuGrid.addEventListener("click", handleQuantityClick);
  cartItems.addEventListener("click", handleQuantityClick);

  // Cart open / close
  cartToggle.addEventListener("click", openCart);
  cartClose.addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);

  // Cart buttons
  placeOrderBtn.addEventListener("click", placeOrder);
  clearCartBtn.addEventListener("click", clearCart);
  browseMenuBtn.addEventListener("click", function () {
    closeCart();
    scrollToMenu();
  });

  // Hero button: show only popular dishes
  showPopularBtn.addEventListener("click", function () {
    resetFilters();
    setCategory("Popular");
    scrollToMenu();
  });

  // Order confirmation pop-up
  orderModalClose.addEventListener("click", closeOrderModal);
  orderModal.addEventListener("click", function (event) {
    if (event.target === orderModal) {
      closeOrderModal();
    }
  });

  // Escape key closes the pop-up or the drawer
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") {
      return;
    }
    if (!orderModal.hidden) {
      closeOrderModal();
    } else if (cartPanel.classList.contains("open")) {
      closeCart();
    }
  });

  // If the window becomes wide, the drawer is no longer needed
  window.addEventListener("resize", function () {
    if (isDesktopLayout() && cartPanel.classList.contains("open")) {
      closeCart();
    }
  });

  // Image errors do not "bubble", so we listen in the capture phase
  document.addEventListener("error", handleImageError, true);
}

// Start the app
function init() {
  cart = loadCart();

  document.getElementById("year").textContent = new Date().getFullYear();

  renderCategories();
  renderMenu();
  updateCartBadge();
  renderCart();
  setupEventListeners();

  // Images already in the page (like the hero picture) may have failed before our listener was ready
  document.querySelectorAll("img.js-img").forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) {
      handleImageError({ target: img });
    }
  });
}

init();
