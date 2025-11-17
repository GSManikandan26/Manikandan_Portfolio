// Home Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // =============================================
    // DATA CONFIGURATION
    // =============================================
    const techStackData = [
        {
            id: 'flutter',
            title: 'Flutter & Dart',
            description: 'Cross-platform mobile and desktop app development',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z"/></svg>`
        },
        {
            id: 'frontend',
            title: 'Frontend Web',
            description: 'HTML, CSS, JavaScript & Bootstrap development',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21h-8.064l.157 1.765h7.743l-.51 5.678-4.62 1.256z"/></svg>`
        },
        {
            id: 'electron',
            title: 'Electron.js',
            description: 'Cross-platform desktop application development',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zM9.75 7.5h4.5l-2.25 3.75 2.25 3.75h-4.5l2.25-3.75-2.25-3.75z"/></svg>`
        },
        {
            id: 'firebase',
            title: 'Firebase',
            description: 'Backend services, authentication & real-time database',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/></svg>`
        },
        {
            id: 'api',
            title: 'REST API',
            description: 'API integration and development for web & mobile',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z"/></svg>`
        },
        {
            id: 'mysql',
            title: 'MySQL',
            description: 'Database design, management and optimization',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12.5v-1.67A1.83 1.83 0 0014.67 9H9.33A1.83 1.83 0 007.5 10.83v2.34A1.83 1.83 0 009.33 15h5.34a1.83 1.83 0 001.83-1.83zM12 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg>`
        }
    ];

    const projectsData = [
        {
            id: 'goltens',
            title: 'Goltens EHS App',
            category: 'Mobile App',
            description: 'Internal employee platform with meetings, checklists, and real-time updates',
            technologies: ['Flutter', 'Firebase', 'REST API'],
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            screenshots: [
                'packages/images/projects/goltens-1.jpg',
                'packages/images/projects/goltens-2.jpg',
                'packages/images/projects/goltens-3.jpg'
            ]
        },
        {
            id: 'attendance',
            title: 'Attendance App',
            category: 'Mobile App',
            description: 'Real-time sync & authentication with Flutter and Firebase',
            technologies: ['Flutter', 'Firebase', 'Real-time DB'],
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            screenshots: [
                'packages/images/projects/attendance-1.jpg',
                'packages/images/projects/attendance-2.jpg'
            ]
        },
        {
            id: 'windows-suite',
            title: 'Windows Apps Suite',
            category: 'Desktop App',
            description: 'Inventory, Billing, Attendance, and Admin Panel systems',
            technologies: ['Flutter', 'Windows', 'SQLite'],
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            screenshots: []
        },
        {
            id: 'inventory-mgmt',
            title: 'Inventory Management',
            category: 'Desktop App',
            description: 'Complete inventory tracking and management system',
            technologies: ['Flutter', 'SQLite', 'Windows'],
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            screenshots: [
                'packages/images/projects/inventory-1.jpg'
            ]
        },
        {
            id: 'billing-system',
            title: 'Billing System',
            category: 'Desktop App',
            description: 'Automated billing and invoice generation system',
            technologies: ['Flutter', 'SQLite', 'Reports'],
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            screenshots: [
                'packages/images/projects/billing-1.jpg',
                'packages/images/projects/billing-2.jpg',
                'packages/images/projects/billing-3.jpg'
            ]
        },
        {
            id: 'admin-panel',
            title: 'Admin Dashboard',
            category: 'Web App',
            description: 'Comprehensive admin panel with analytics and user management',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            screenshots: [
                'packages/images/projects/admin-1.jpg',
                'packages/images/projects/admin-2.jpg'
            ]
        }
    ];

    const modalData = {
        'flutter-modal': {
            title: 'Flutter & Dart Expertise',
            content: `
                <p><strong>What I can do with Flutter & Dart:</strong></p>
                <ul>
                    <li>Develop cross-platform mobile applications for iOS and Android</li>
                    <li>Create Windows desktop applications using Flutter</li>
                    <li>Build responsive and adaptive UI that works on all screen sizes</li>
                    <li>Implement state management solutions (Provider, Bloc, GetX)</li>
                    <li>Integrate with native platform APIs and third-party services</li>
                    <li>Develop custom widgets and reusable UI components</li>
                    <li>Optimize app performance and reduce loading times</li>
                    <li>Implement complex animations and smooth transitions</li>
                    <li>Handle local data storage with SQLite and shared preferences</li>
                    <li>Implement push notifications and background services</li>
                </ul>
                
                <p><strong>Projects I've built:</strong></p>
                <ul>
                    <li>Inventory management systems</li>
                    <li>Billing and payment applications</li>
                    <li>Attendance tracking systems</li>
                    <li>Admin panel dashboards</li>
                    <li>Real-time chat applications</li>
                    <li>E-commerce mobile apps</li>
                </ul>
            `
        },
        'frontend-modal': {
            title: 'Frontend Web Development',
            content: `
                <p><strong>Technologies I work with:</strong></p>
                <ul>
                    <li><strong>HTML5:</strong> Semantic markup, accessibility, modern structure</li>
                    <li><strong>CSS3:</strong> Flexbox, Grid, animations, responsive design</li>
                    <li><strong>JavaScript:</strong> ES6+, DOM manipulation, async programming</li>
                    <li><strong>Bootstrap 5:</strong> Responsive frameworks, component libraries</li>
                    <li><strong>Responsive Design:</strong> Mobile-first approach, cross-browser compatibility</li>
                </ul>
                
                <p><strong>What I can build:</strong></p>
                <ul>
                    <li>Responsive business websites</li>
                    <li>Admin dashboards and control panels</li>
                    <li>Landing pages and portfolio sites</li>
                    <li>Interactive web applications</li>
                    <li>E-commerce frontends</li>
                </ul>
            `
        },
        'electron-modal': {
            title: 'Electron.js Desktop Development',
            content: `
                <p><strong>Desktop Application Development:</strong></p>
                <ul>
                    <li>Build cross-platform desktop applications for Windows, macOS, and Linux</li>
                    <li>Create native-feeling applications using web technologies</li>
                    <li>Implement system integrations and native APIs</li>
                    <li>Develop offline-capable desktop software</li>
                    <li>Package and distribute applications</li>
                </ul>
                
                <p><strong>Applications I've developed:</strong></p>
                <ul>
                    <li>Inventory management systems</li>
                    <li>Billing and invoicing software</li>
                    <li>Attendance tracking applications</li>
                    <li>Admin panel desktop versions</li>
                    <li>Data management tools</li>
                </ul>
            `
        },
        'firebase-modal': {
            title: 'Firebase Backend Services',
            content: `
                <p><strong>Firebase Services I work with:</strong></p>
                <ul>
                    <li><strong>Authentication:</strong> Email/password, social logins, phone auth</li>
                    <li><strong>Firestore:</strong> NoSQL database, real-time updates</li>
                    <li><strong>Realtime Database:</strong> Real-time data synchronization</li>
                    <li><strong>Cloud Storage:</strong> File uploads and downloads</li>
                    <li><strong>Cloud Functions:</strong> Serverless backend logic</li>
                    <li><strong>Hosting:</strong> Web application deployment</li>
                </ul>
                
                <p><strong>Implementation Experience:</strong></p>
                <ul>
                    <li>User authentication systems</li>
                    <li>Real-time chat applications</li>
                    <li>File storage and management</li>
                    <li>Offline data synchronization</li>
                    <li>Push notifications</li>
                </ul>
            `
        },
        'api-modal': {
            title: 'REST API Integration & Development',
            content: `
                <p><strong>API Development & Integration:</strong></p>
                <ul>
                    <li>Design and implement RESTful APIs</li>
                    <li>Integrate third-party APIs and services</li>
                    <li>Handle authentication (JWT, OAuth)</li>
                    <li>Implement CRUD operations</li>
                    <li>Error handling and status codes</li>
                    <li>API documentation</li>
                </ul>
                
                <p><strong>API Integration Experience:</strong></p>
                <ul>
                    <li>Payment gateways (Razorpay, Stripe)</li>
                    <li>Social media APIs</li>
                    <li>Mapping and location services</li>
                    <li>Email and notification services</li>
                    <li>Custom backend API integration</li>
                </ul>
            `
        },
        'mysql-modal': {
            title: 'MySQL Database Management',
            content: `
                <p><strong>Database Skills:</strong></p>
                <ul>
                    <li>Database design and normalization</li>
                    <li>SQL query optimization</li>
                    <li>Stored procedures and functions</li>
                    <li>Database security and backup</li>
                    <li>Performance tuning</li>
                </ul>
                
                <p><strong>Database Applications:</strong></p>
                <ul>
                    <li>User management systems</li>
                    <li>Inventory tracking databases</li>
                    <li>E-commerce product catalogs</li>
                    <li>Analytics and reporting systems</li>
                    <li>Multi-tenant database architectures</li>
                </ul>
            `
        }
    };

    const projectModalData = {
        'goltens-modal': {
            title: 'Goltens EHS App - Project Details',
            content: `
                <p><strong>Project Overview:</strong></p>
                <p>Internal employee platform designed for Environment, Health, and Safety management with comprehensive meeting management, checklist systems, and real-time updates.</p>
                
                <p><strong>Key Features:</strong></p>
                <ul>
                    <li>Meeting scheduling and management</li>
                    <li>Safety checklist creation and tracking</li>
                    <li>Real-time notifications and updates</li>
                    <li>Employee attendance tracking</li>
                    <li>Document management system</li>
                    <li>Reporting and analytics dashboard</li>
                </ul>
                
                <p><strong>Technologies Used:</strong></p>
                <ul>
                    <li>Flutter for cross-platform mobile development</li>
                    <li>Firebase for backend services and real-time database</li>
                    <li>REST API integration for enterprise systems</li>
                    <li>Push notifications for instant updates</li>
                    <li>Local storage for offline functionality</li>
                </ul>
                
                <p><strong>Project Impact:</strong></p>
                <ul>
                    <li>Improved safety compliance tracking by 60%</li>
                    <li>Reduced manual paperwork by 80%</li>
                    <li>Real-time incident reporting and response</li>
                    <li>Enhanced employee engagement in safety protocols</li>
                </ul>
            `
        },
        'attendance-modal': {
            title: 'Attendance App - Project Details',
            content: `
                <p><strong>Project Overview:</strong></p>
                <p>Modern attendance tracking system with real-time synchronization, multi-level authentication, and comprehensive reporting capabilities.</p>
                
                <p><strong>Key Features:</strong></p>
                <ul>
                    <li>Real-time attendance tracking</li>
                    <li>Multi-level user authentication</li>
                    <li>GPS location verification</li>
                    <li>Offline mode with sync capability</li>
                    <li>Automated reporting and analytics</li>
                    <li>Admin dashboard for management</li>
                </ul>
                
                <p><strong>Technologies Used:</strong></p>
                <ul>
                    <li>Flutter for mobile application</li>
                    <li>Firebase Authentication for secure access</li>
                    <li>Firestore for real-time data synchronization</li>
                    <li>Google Maps API for location services</li>
                    <li>Local database for offline functionality</li>
                </ul>
                
                <p><strong>Project Impact:</strong></p>
                <ul>
                    <li>Reduced manual attendance errors by 95%</li>
                    <li>Real-time attendance monitoring</li>
                    <li>Automated payroll integration</li>
                    <li>Enhanced security with location verification</li>
                </ul>
            `
        },
        'windows-modal': {
            title: 'Windows Apps Suite - Project Details',
            content: `
                <p><strong>Project Overview:</strong></p>
                <p>Comprehensive desktop application suite for business management including inventory, billing, attendance, and admin panel systems built with Flutter for Windows.</p>
                
                <p><strong>Applications Included:</strong></p>
                <ul>
                    <li><strong>Inventory Management:</strong> Stock tracking, order management, supplier database</li>
                    <li><strong>Billing System:</strong> Invoice generation, payment tracking, tax calculations</li>
                    <li><strong>Attendance System:</strong> Employee tracking, shift management, reporting</li>
                    <li><strong>Admin Panel:</strong> User management, system configuration, analytics</li>
                </ul>
                
                <p><strong>Technologies Used:</strong></p>
                <ul>
                    <li>Flutter for Windows desktop development</li>
                    <li>SQLite for local database storage</li>
                    <li>REST API for cloud synchronization</li>
                    <li>Local file system integration</li>
                    <li>Windows native API integration</li>
                </ul>
                
                <p><strong>Project Impact:</strong></p>
                <ul>
                    <li>Streamlined business operations across departments</li>
                    <li>Reduced manual data entry by 70%</li>
                    <li>Improved data accuracy and reporting</li>
                    <li>Enhanced customer service with faster billing</li>
                </ul>
            `
        },
        'inventory-mgmt-modal': {
            title: 'Inventory Management - Project Details',
            content: `
                <p><strong>Project Overview:</strong></p>
                <p>Complete inventory tracking and management system with real-time stock updates, supplier management, and automated reordering.</p>
                
                <p><strong>Key Features:</strong></p>
                <ul>
                    <li>Real-time inventory tracking</li>
                    <li>Supplier and vendor management</li>
                    <li>Automated reorder point notifications</li>
                    <li>Barcode scanning integration</li>
                    <li>Multi-location inventory support</li>
                    <li>Comprehensive reporting and analytics</li>
                </ul>
                
                <p><strong>Technologies Used:</strong></p>
                <ul>
                    <li>Flutter for cross-platform development</li>
                    <li>SQLite for local database storage</li>
                    <li>REST API for cloud synchronization</li>
                    <li>Barcode scanning libraries</li>
                    <li>Local file system for data backup</li>
                </ul>
                
                <p><strong>Project Impact:</strong></p>
                <ul>
                    <li>Reduced inventory errors by 85%</li>
                    <li>Automated reordering saved 20+ hours weekly</li>
                    <li>Real-time stock visibility across locations</li>
                    <li>Improved supplier relationship management</li>
                </ul>
            `
        },
        'billing-system-modal': {
            title: 'Billing System - Project Details',
            content: `
                <p><strong>Project Overview:</strong></p>
                <p>Automated billing and invoice generation system with payment tracking, tax calculations, and comprehensive financial reporting.</p>
                
                <p><strong>Key Features:</strong></p>
                <ul>
                    <li>Automated invoice generation</li>
                    <li>Payment tracking and reminders</li>
                    <li>Tax calculation and compliance</li>
                    <li>Customer management system</li>
                    <li>Multi-currency support</li>
                    <li>Financial reporting and analytics</li>
                </ul>
                
                <p><strong>Technologies Used:</strong></p>
                <ul>
                    <li>Flutter for desktop application</li>
                    <li>SQLite for local data storage</li>
                    <li>PDF generation libraries</li>
                    <li>REST API for payment gateway integration</li>
                    <li>Local file system for document storage</li>
                </ul>
                
                <p><strong>Project Impact:</strong></p>
                <ul>
                    <li>Reduced billing cycle time by 75%</li>
                    <li>Automated tax calculations improved accuracy</li>
                    <li>Payment tracking reduced overdue accounts by 60%</li>
                    <li>Enhanced customer satisfaction with professional invoices</li>
                </ul>
            `
        },
        'admin-panel-modal': {
            title: 'Admin Dashboard - Project Details',
            content: `
                <p><strong>Project Overview:</strong></p>
                <p>Comprehensive admin panel with user management, system configuration, analytics dashboard, and real-time monitoring capabilities.</p>
                
                <p><strong>Key Features:</strong></p>
                <ul>
                    <li>User management and role-based access</li>
                    <li>Real-time system monitoring</li>
                    <li>Analytics and reporting dashboard</li>
                    <li>System configuration and settings</li>
                    <li>Audit logs and activity tracking</li>
                    <li>Multi-tenant support</li>
                </ul>
                
                <p><strong>Technologies Used:</strong></p>
                <ul>
                    <li>HTML5, CSS3, JavaScript for frontend</li>
                    <li>Bootstrap 5 for responsive design</li>
                    <li>Chart.js for data visualization</li>
                    <li>REST API for backend communication</li>
                    <li>Local storage for user preferences</li>
                </ul>
                
                <p><strong>Project Impact:</strong></p>
                <ul>
                    <li>Centralized management improved efficiency by 40%</li>
                    <li>Real-time monitoring reduced system downtime</li>
                    <li>Role-based access enhanced security</li>
                    <li>Comprehensive analytics enabled data-driven decisions</li>
                </ul>
            `
        }
    };

    // =============================================
    // INITIALIZATION FUNCTIONS
    // =============================================

    /**
     * Initialize Tech Stack Section
     */
    function initTechStack() {
        const techContainer = document.querySelector('.tech-stack-section .row');
        techStackData.forEach(tech => {
            const techCard = `
                <div class="col-lg-4 col-md-6">
                    <div class="tech-card">
                        <div class="tech-icon">
                            ${tech.icon}
                        </div>
                        <h4>${tech.title}</h4>
                        <p>${tech.description}</p>
                        <button class="btn btn-outline-custom btn-sm know-more-btn" data-modal="${tech.id}-modal">
                            Know More
                        </button>
                    </div>
                </div>
            `;
            techContainer.innerHTML += techCard;
        });
    }

    /**
     * Initialize Projects Section
     * @param {number} limit - Number of projects to display (null for all)
     */
    function initProjects(limit = null) {
        const projectsContainer = document.getElementById('projects-container');
        const projectsToShow = limit ? projectsData.slice(0, limit) : projectsData;
        
        projectsContainer.innerHTML = '';
        
        projectsToShow.forEach(project => {
            const projectCard = `
                <div class="col-lg-4 col-md-6">
                    <div class="project-card">
                        <div class="project-image" style="background: ${project.gradient};">
                            <div class="project-overlay">
                                <div class="project-links">
                                    <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                    <a href="#" class="project-link know-more-btn" data-modal="${project.id}-modal"><i class="fas fa-info-circle"></i></a>
                                </div>
                            </div>
                            <div class="project-category">${project.category}</div>
                        </div>
                        <div class="project-content">
                            <h4>${project.title}</h4>
                            <p>${project.description}</p>
                            <div class="project-tech">
                                ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            projectsContainer.innerHTML += projectCard;
        });

        // Update View All button text
        const viewAllBtn = document.getElementById('viewAllProjects');
        if (viewAllBtn) {
            viewAllBtn.textContent = limit ? 'View All Projects' : 'Show Less Projects';
        }
    }

    /**
     * Initialize Modal System
     */
    function initModals() {
        // Create modals for tech stack
        Object.entries(modalData).forEach(([modalId, modalContent]) => {
            createModal(modalId, modalContent.title, modalContent.content);
        });

        // Create modals for projects
        Object.entries(projectModalData).forEach(([modalId, modalContent]) => {
            const project = projectsData.find(p => `${p.id}-modal` === modalId);
            let content = modalContent.content;
            
            if (project) {
                content = addScreenshotsToModal(content, project.screenshots, project.title);
            }
            
            createModal(modalId, modalContent.title, content);
        });

        // Add About modal
        createModal('about-modal', 'About Me', `
            <p><strong>Professional Summary:</strong></p>
            <p>Software Developer with 3+ years of experience specializing in Flutter mobile apps, web development, Windows desktop apps, and API integration. Skilled in delivering clean UI/UX, optimized performance, and scalable applications across multiple domains.</p>
            
            <p><strong>Personal Profile:</strong></p>
            <ul>
                <li><strong>Date of Birth:</strong> 26/09/2000</li>
                <li><strong>Age:</strong> 25</li>
                <li><strong>Gender:</strong> Male</li>
                <li><strong>Nationality:</strong> Indian</li>
                <li><strong>Marital Status:</strong> Unmarried</li>
            </ul>
            
            <p><strong>Education:</strong></p>
            <p>B.E - Electronics and Communication Engineering (2018-2022)<br>
            Builders Engineering College</p>
            
            <p><strong>Languages:</strong></p>
            <ul>
                <li>Tamil (Native)</li>
                <li>English (Professional)</li>
            </ul>
            
            <p><strong>Soft Skills:</strong></p>
            <ul>
                <li>Quick learner and adaptable to new technologies</li>
                <li>Strong team player with excellent collaboration skills</li>
                <li>Problem-solving mindset with attention to detail</li>
                <li>Ability to work in agile, fast-paced environments</li>
            </ul>
        `);
    }

    /**
     * Add screenshots section to project modal
     * @param {string} content - Original modal content
     * @param {Array} screenshots - Array of screenshot URLs
     * @param {string} projectTitle - Project title for alt text
     * @returns {string} Enhanced modal content
     */
    function addScreenshotsToModal(content, screenshots, projectTitle) {
        let screenshotsSection = '';
        
        if (screenshots && screenshots.length > 0) {
            screenshotsSection = `
                <div class="project-screenshots">
                    <h4>Project Screenshots</h4>
                    <div class="screenshots-grid">
                        ${screenshots.map((screenshot, index) => `
                            <div class="screenshot-item">
                                <img src="${screenshot}" alt="${projectTitle} - Screenshot ${index + 1}" onerror="this.style.display='none'">
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else {
            screenshotsSection = `
                <div class="project-screenshots">
                    <h4>Project Screenshots</h4>
                    <div class="no-screenshots">
                        <i class="fas fa-camera fa-2x mb-3"></i>
                        <p>Screenshots coming soon</p>
                    </div>
                </div>
            `;
        }
        
        return content + screenshotsSection;
    }

    /**
     * Create modal HTML element
     * @param {string} id - Modal ID
     * @param {string} title - Modal title
     * @param {string} content - Modal content
     */
    function createModal(id, title, content) {
        // Check if modal already exists
        if (document.getElementById(id)) {
            return;
        }

        const modal = document.createElement('div');
        modal.id = id;
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // =============================================
    // MODAL FUNCTIONALITY
    // =============================================

    /**
     * Initialize modal event listeners
     */
    function initModalEvents() {
    // Open modal functionality
    document.addEventListener('click', function(e) {
        const knowMoreBtn = e.target.closest('.know-more-btn');
        if (knowMoreBtn) {
            const modalId = knowMoreBtn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });

    // Close modal functionality
    document.addEventListener('click', function(e) {
        // Close when clicking close button
        if (e.target.classList.contains('modal-close')) {
            const modal = e.target.closest('.modal-overlay');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
            e.preventDefault();
        }
        
        // Close when clicking outside modal content
        if (e.target.classList.contains('modal-overlay')) {
            e.target.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

    // =============================================
    // WEB3FORMS CONFIGURATION - ENCRYPTED
    // =============================================
    const encryptedConfig = {
        key: 'NDk5YWNkYTAtMDBlNS00ZGYxLWIyNDktZTg0NmI0OWU0Nzdj',
        url: 'aHR0cHM6Ly9hcGkud2ViM2Zvcm1zLmNvbS9zdWJtaXQ='
    };

    /**
     * Decrypts the encrypted Web3Forms configuration
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
    // VIEW ALL PROJECTS FUNCTIONALITY
    // =============================================
    const viewAllBtn = document.getElementById('viewAllProjects');
    let showingAllProjects = false;

    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            showingAllProjects = !showingAllProjects;
            
            if (showingAllProjects) {
                initProjects(); // Show all projects
                // Scroll to projects section
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                initProjects(3); // Show only 3 projects
            }
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

    // =============================================
    // INITIALIZE ALL COMPONENTS
    // =============================================
    function initializePortfolio() {
        initTechStack();
        initProjects(3); // Show only 3 projects initially
        initModals();
        initModalEvents(); // Initialize modal event listeners
        
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
    }

    // Start the portfolio
    initializePortfolio();
});