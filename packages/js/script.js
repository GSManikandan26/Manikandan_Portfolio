// Loader page script
document.addEventListener('DOMContentLoaded', function() {
    // Animate loader elements
    const hexagons = document.querySelectorAll('.hexagon');
    
    hexagons.forEach((hex, index) => {
        gsap.to(hex, {
            rotation: 360,
            duration: 2,
            repeat: -1,
            ease: "power1.inOut",
            delay: index * 0.2
        });
    });

    // Redirect to home after 3 seconds
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 3000);
});