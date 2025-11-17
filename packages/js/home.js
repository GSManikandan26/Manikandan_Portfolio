// Home Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // =============================================
    // WEB3FORMS CONFIGURATION - ENCRYPTED
    // =============================================
    // Access Key: 499acda0-00e5-4df1-b249-e846b49e477c
    // API URL: https://api.web3forms.com/submit
    // 
    // Encryption Method: Base64
    // To update these values in the future:
    // 1. Encode new values using: btoa('your_string_here')
    // 2. Replace the encrypted values below
    // 3. Test the contact form functionality
    // =============================================
    const encryptedConfig = {
        key: 'NDk5YWNkYTAtMDBlNS00ZGYxLWIyNDktZTg0NmI0OWU0Nzdj', // Base64 encoded access_key
        url: 'aHR0cHM6Ly9hcGkud2ViM2Zvcm1zLmNvbS9zdWJtaXQ='     // Base64 encoded API endpoint
    };

    /**
     * Decrypts the encrypted Web3Forms configuration
     * @param {Object} encrypted - Encrypted configuration object
     * @returns {Object|null} Decrypted configuration or null on error
     */
    function decryptConfig(encrypted) {
        try {
            return {
                key: atob(encrypted.key),
                url: atob(encrypted.url)
            };
        } catch (error) {
            console.error('Web3Forms Configuration Decryption Error:', error);
            return null;
        }
    }

    // =============================================
    // THEME TOGGLE FUNCTIONALITY
    // =============================================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add transition class for smooth theme change
        body.classList.add('theme-transition');
        setTimeout(() => {
            body.classList.remove('theme-transition');
        }, 300);
    });

    /**
     * Updates the theme toggle icon based on current theme
     * @param {string} theme - Current theme ('dark' or 'light')
     */
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun';
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            themeIcon.className = 'fas fa-moon';
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }

    // =============================================
    // NAVBAR FUNCTIONALITY
    // =============================================
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.custom-navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Navbar Toggle with Bootstrap Integration
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Create custom hamburger icon
        const navbarTogglerIcon = navbarToggler.querySelector('.navbar-toggler-icon');
        
        // Remove default Bootstrap icon and create custom one
        navbarTogglerIcon.style.backgroundImage = 'none';
        navbarTogglerIcon.innerHTML = `
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        `;

        // Use Bootstrap's native collapse events
        navbarCollapse.addEventListener('show.bs.collapse', function () {
            navbarToggler.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        navbarCollapse.addEventListener('hide.bs.collapse', function () {
            navbarToggler.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            });
        });

        // Close menu when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 991) {
                if (!navbarToggler.contains(e.target) && !navbarCollapse.contains(e.target) && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    }

    // =============================================
    // SMOOTH SCROLLING
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Don't prevent default for navbar links - let Bootstrap handle it
            if (!this.classList.contains('nav-link')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const navbarHeight = document.querySelector('.custom-navbar').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // =============================================
    // BACK TO TOP BUTTON
    // =============================================
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopButton);

    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Back to top functionality
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // =============================================
    // MODAL FUNCTIONALITY
    // =============================================
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    const knowMoreButtons = document.querySelectorAll('.know-more-btn');
    const modalCloseButtons = document.querySelectorAll('.modal-close');

    // Open modal
    knowMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close modal when clicking outside content
    modalOverlays.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modalOverlays.forEach(modal => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    });

    // =============================================
    // WEB3FORMS CONTACT FORM HANDLING
    // =============================================
    const contactForm = document.querySelector('.contact-form');
    const successModal = document.getElementById('success-modal');
    const successCloseBtn = document.getElementById('successCloseBtn');

    if (contactForm) {
        // Remove any existing form attributes and inputs to prevent direct submission
        contactForm.removeAttribute('action');
        contactForm.removeAttribute('method');
        
        // Remove any existing hidden inputs
        const existingHiddenInputs = contactForm.querySelectorAll('input[type="hidden"]');
        existingHiddenInputs.forEach(input => input.remove());

        /**
         * Handles contact form submission to Web3Forms
         * @param {Event} e - Form submit event
         */
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                // Decrypt Web3Forms configuration
                const config = decryptConfig(encryptedConfig);
                if (!config) {
                    throw new Error('Web3Forms configuration decryption failed');
                }

                // Prepare form data for Web3Forms API
                const formData = new FormData();
                
                // Add Web3Forms required fields
                formData.append('access_key', config.key);
                formData.append('subject', 'New Contact Form Submission from Portfolio');
                formData.append('from_name', 'Portfolio Contact Form');
                formData.append('botcheck', ''); // Anti-bot field
                
                // Add form data from user input
                const name = this.querySelector('input[name="name"]').value;
                const email = this.querySelector('input[name="email"]').value;
                const subject = this.querySelector('input[name="subject"]').value;
                const message = this.querySelector('textarea[name="message"]').value;
                
                formData.append('name', name);
                formData.append('email', email);
                formData.append('subject', subject);
                formData.append('message', message);
                
                // Submit to Web3Forms API
                const response = await fetch(config.url, {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                
                if (data.success) {
                    // Show success modal
                    successModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    this.reset(); // Clear form fields
                } else {
                    throw new Error(data.message || 'Form submission failed');
                }
            } catch (error) {
                console.error('Web3Forms Submission Error:', error);
                alert('There was an error sending your message. Please try again or contact me directly at g.s.manikandan.dev@gmail.com');
            } finally {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Close success modal
    if (successCloseBtn) {
        successCloseBtn.addEventListener('click', function() {
            successModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // =============================================
    // ANIMATIONS & GSAP
    // =============================================

    // Hero Section Animations
    gsap.from('.hero-title, .hero-subtitle, .hero-description', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Hero Buttons and Social Links
    gsap.from('.hero-buttons .btn', {
        duration: 1,
        y: 30,
        opacity: 1,
        stagger: 0.2,
        delay: 1,
        ease: 'power3.out'
    });

    gsap.from('.hero-social .social-link', {
        duration: 0.8,
        y: 20,
        opacity: 1,
        stagger: 0.1,
        delay: 1.5,
        ease: 'power3.out'
    });

    // Profile Image Animation
    gsap.from('.profile-image', {
        duration: 1.5,
        scale: 0,
        rotation: 360,
        ease: 'back.out(1.7)',
        delay: 0.5
    });

    // Tech Stack Cards Animation
    gsap.utils.toArray('.tech-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Timeline Items Animation
    gsap.utils.toArray('.timeline-item').forEach(item => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Project Cards Animation
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Floating Shapes Animation
    gsap.to('.shape-1', {
        y: 40,
        rotation: 360,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.shape-2', {
        y: -50,
        rotation: -360,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.shape-3', {
        y: 35,
        rotation: 180,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Additional Animations with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    document.querySelectorAll('.about-image, .contact-info, .about-details').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
        observer.observe(el);
    });

    // Section Titles Animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            duration: 1,
            y: 50,
            opacity: 0,
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Parallax effect for floating shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.05}deg)`;
        });
    });

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing after a short delay
        setTimeout(typeWriter, 500);
    }

    // Force visibility of hero buttons and social links (safety measure)
    setTimeout(() => {
        const heroButtons = document.querySelector('.hero-buttons');
        const heroSocial = document.querySelector('.hero-social');
        
        if (heroButtons) {
            heroButtons.style.opacity = '1';
            heroButtons.style.visibility = 'visible';
        }
        
        if (heroSocial) {
            heroSocial.style.opacity = '1';
            heroSocial.style.visibility = 'visible';
        }
    }, 1000);
});