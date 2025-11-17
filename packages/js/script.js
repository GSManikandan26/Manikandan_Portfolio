// Binary Matrix Loader Script
document.addEventListener('DOMContentLoaded', function() {
    // Create and animate binary matrix
    const binaryMatrix = document.querySelector('.binary-matrix');
    
    // Create binary digits
    for (let i = 0; i < 80; i++) {
        const binaryDigit = document.createElement('div');
        binaryDigit.className = 'binary-digit';
        binaryDigit.textContent = Math.random() > 0.5 ? '1' : '0';
        
        // Random position
        binaryDigit.style.left = `${Math.random() * 100}%`;
        binaryDigit.style.top = `${Math.random() * 100}%`;
        
        binaryMatrix.appendChild(binaryDigit);
        
        // Animate each binary digit
        gsap.to(binaryDigit, {
            y: -1000,
            opacity: 1,
            duration: 6 + Math.random() * 4,
            repeat: -1,
            ease: "none",
            delay: i * 0.1,
            rotation: 360,
            onComplete: function() {
                gsap.set(binaryDigit, { y: 1000, opacity: 0 });
            }
        });
        
        // Flicker effect
        gsap.to(binaryDigit, {
            opacity: () => Math.random() * 0.8 + 0.2,
            duration: 0.1,
            repeat: -1,
            yoyo: true,
            delay: i * 0.1
        });
    }

    // Animate computer icon
    gsap.to('.computer-monitor', {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    // Redirect to home after 3 seconds
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 3000);
});