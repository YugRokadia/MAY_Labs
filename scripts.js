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
                "color": "#FF073A"
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
