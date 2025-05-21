// Initialize Particles.js
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

let users = JSON.parse(localStorage.getItem("maylab-users")) || [
    { username: "admin", password: "1234" },
    { username: "Advika", password: "B076" }
];

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('auth-modal');
    const openBtn = document.getElementById('auth-open-btn');
    const closeBtn = document.querySelector('.close-btn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');

    // Open modal
    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        loginForm.reset();
        signupForm.reset();
        clearErrors();
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            loginForm.reset();
            signupForm.reset();
            clearErrors();
        }
    });

    // Switch tabs
    loginTab.addEventListener('click', () => {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        clearErrors();
    });

    signupTab.addEventListener('click', () => {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        clearErrors();
    });

    // Login logic
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const uname = document.getElementById('login-username').value.trim();
        const pwd = document.getElementById('login-password').value.trim();
        const found = users.find(u => u.username === uname && u.password === pwd);

        if (found) {
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('username', uname);
            modal.style.display = 'none';
            openBtn.textContent = `👤 ${uname}`;
            openBtn.disabled = true;
            alert(`Welcome back, ${uname}!`);
        } else {
            document.getElementById('login-error').textContent = "Incorrect username or password!";
        }
    });

    // Signup logic
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const uname = document.getElementById('signup-username').value.trim();
        const pwd = document.getElementById('signup-password').value.trim();
        const exists = users.some(u => u.username === uname);

        if (exists) {
            document.getElementById('signup-error').textContent = "Username already exists!";
        } else {
            users.push({ username: uname, password: pwd });
            localStorage.setItem("maylab-users", JSON.stringify(users));
            alert("Signup successful! You can now login.");
            signupForm.reset();
            signupTab.classList.remove('active');
            loginTab.classList.add('active');
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        }
    });

    // Session check
    const savedUser = sessionStorage.getItem('username');
    if (sessionStorage.getItem('isLoggedIn') === 'true' && savedUser) {
        openBtn.textContent = `👤 ${savedUser}`;
        openBtn.disabled = true;
    }

    function clearErrors() {
        document.getElementById('login-error').textContent = '';
        document.getElementById('signup-error').textContent = '';
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelector(".testimonials");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    let index = 0;
    const totalTestimonials = document.querySelectorAll(".testimonial").length;
    const testimonialWidth = document.querySelector(".testimonial").offsetWidth + 20; // Adjust for gap

    function updateScroll() {
        testimonials.style.transform = `translateX(-${index * testimonialWidth}px)`;
    }

    rightBtn.addEventListener("click", function () {
        index++;
        if (index >= totalTestimonials) {
            index = 0; // Loop back to start
        }
        updateScroll();
    });

    leftBtn.addEventListener("click", function () {
        index--;
        if (index < 0) {
            index = totalTestimonials - 1; // Go to last testimonial
        }
        updateScroll();
    });
});
