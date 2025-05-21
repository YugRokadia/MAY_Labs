const app = angular.module("shopApp", []);

app.controller("shopController", function ($scope) {
    $scope.elements = [
        { name: "Sodium Chloride", symbol: "NaCl", price: 150, quantity: "100mL", cartQuantity: 0 },
        { name: "Calcium Carbonate", symbol: "CaCO3", price: 200, quantity: "100mL", cartQuantity: 0 },
        { name: "Magnesium Sulfate", symbol: "MgSO4", price: 180, quantity: "100mL", cartQuantity: 0 },
        { name: "Hydrochloric Acid", symbol: "HCl", price: 250, quantity: "100mL", cartQuantity: 0 },
        { name: "Sulfuric Acid", symbol: "H2SO4", price: 300, quantity: "100mL", cartQuantity: 0 },
        { name: "Nitric Acid", symbol: "HNO3", price: 280, quantity: "100mL", cartQuantity: 0 },
        { name: "Potassium Permanganate", symbol: "KMnO4", price: 220, quantity: "100mL", cartQuantity: 0 },
        { name: "Sodium Hydroxide", symbol: "NaOH", price: 170, quantity: "100mL", cartQuantity: 0 },
        { name: "Potassium Chloride", symbol: "KCl", price: 160, quantity: "100mL", cartQuantity: 0 },
        { name: "Copper Sulfate", symbol: "CuSO4", price: 190, quantity: "100mL", cartQuantity: 0 },
        { name: "Zinc Sulfate", symbol: "ZnSO4", price: 185, quantity: "100mL", cartQuantity: 0 },
        { name: "Silver Nitrate", symbol: "AgNO3", price: 400, quantity: "100mL", cartQuantity: 0 },
        { name: "Hydrogen Peroxide", symbol: "H2O2", price: 210, quantity: "100mL", cartQuantity: 0 }
    ];

    $scope.elementImages = {
        "NaCl": "/images/image-removebg-previewFIRST.png",
        "CaCO3": "/images/image-removebg-preview (1).png",
        "MgSO4": "/images/image-removebg-preview (2).png",
        "HCl": "/images/image-removebg-preview (3).png",
        "H2SO4": "/images/image-removebg-preview (4).png",
        "HNO3": "/images/image-removebg-preview (5).png",
        "KMnO4": "/images/image-removebg-preview (6).png",
        "NaOH": "/images/image-removebg-preview (7).png",
        "KCl": "/images/image-removebg-preview (1).png",
        "CuSO4": "/images/image-removebg-previewFIRST.png",
        "ZnSO4": "/images/image-removebg-preview (1).png",
        "AgNO3": "/images/image-removebg-preview (4).png",
        "H2O2": "/images/image-removebg-preview (2).png"
    };

    $scope.cart = [];
    
    // Compute total price
    $scope.getTotalPrice = function () {
        return $scope.cart.reduce((total, item) => total + (item.price * item.cartQuantity), 0);
    };

    // Add to cart function
    $scope.addToCart = function (element) {
        if (element.cartQuantity === 0) {
            $scope.cart.push(element);
        }
        element.cartQuantity++;
        updateCart();
    };

    // Increment item quantity
    $scope.incrementItem = function (element) {
        element.cartQuantity++;
        updateCart();
    };

    // Decrement item quantity
    $scope.decrementItem = function (element) {
        if (element.cartQuantity > 0) {
            element.cartQuantity--;
            if (element.cartQuantity === 0) {
                // Remove item from cart if quantity is 0
                $scope.cart = $scope.cart.filter(item => item.cartQuantity > 0);
            }
            updateCart();
        }
    };

    // Update cart UI and total price
    function updateCart() {
        let totalCount = $scope.elements.reduce((sum, el) => sum + el.cartQuantity, 0);
        document.getElementById("cart-count").innerText = totalCount;

        let cartItems = document.getElementById("cart-items");
        cartItems.innerHTML = "";

        $scope.cart.forEach(element => {
            if (element.cartQuantity > 0) {
                let li = document.createElement("li");
                li.innerHTML = `${element.name} (${element.symbol}) - ${element.cartQuantity} x ₹${element.price} = ₹${element.cartQuantity * element.price}`;
                cartItems.appendChild(li);
            }
        });

        // Update total price
        document.getElementById("total-price").innerText = `Total Price: ₹${$scope.getTotalPrice()}`;
    }
});

// ✅ Cart Modal Functionality
function viewCart() {
    document.getElementById("cart-modal").style.display = "block";
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

// ✅ Close cart when clicking outside the modal
window.onclick = function (event) {
    let modal = document.getElementById("cart-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function checkout() {
    alert("Thank you for your purchase!");
    $scope.cart = [];
    $scope.elements.forEach(item => (item.cartQuantity = 0));
    $scope.updateTotalPrice();
    closeCart();
}




particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#FF00FF"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 3,
                "color": "hsl(280, 72%, 48%)"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#39FF14",
            "opacity": 0.4,
            "width": 3
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "random",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
                "enable": false
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            }
        }
    },
    "retina_detect": true
});