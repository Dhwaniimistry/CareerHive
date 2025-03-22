$(document).ready(function() {
    // Animate search bar on hero section
    $('.job-search-form input, .job-search-form select').on('focus', function() {
        $(this).parent().addClass('shadow-sm');
    }).on('blur', function() {
        $(this).parent().removeClass('shadow-sm');
    });

    // Initialize job listings
    loadJobListings('all');

    // Job filters
    $('#jobFilters .nav-link').on('click', function(e) {
        e.preventDefault();
        $('#jobFilters .nav-link').removeClass('active');
        $(this).addClass('active');
        
        const filter = $(this).data('filter');
        loadJobListings(filter);
    });

    // Load testimonials
    loadTestimonials();

    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        if(target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('shadow-sm');
        } else {
            $('.navbar').removeClass('shadow-sm');
        }
    });

    // Animation for feature cards and step cards
    animateOnScroll('.feature-card, .step-card', 'fadeInUp');

    // Form submission handlers
    $('.job-search-form').on('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Search functionality will be implemented here');
    });

    $('.newsletter-form').on('submit', function(e) {
        e.preventDefault();
        // Add your newsletter subscription logic here
        const email = $(this).find('input[type="email"]').val();
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            $(this).find('input[type="email"]').val('');
        }
    });

    // Find Jobs button click
    $('#findJobsBtn').on('click', function() {
        // Add your search functionality here
        alert('Search functionality will be implemented here');
    });
});

// Function to load job listings
function loadJobListings(filter) {
    // Sample job data - in a real application, this would come from an API
    const jobs = [
        {
            id: 1,
            title: 'Senior Frontend Developer',
            company: 'TechCorp',
            location: 'San Francisco, CA',
            remote: false,
            salary: '$120K - $150K',
            type: 'Full-time',
            logo: '/Hackathon/website/Job Hunt/images/techcorp.jpeg',
            posted: '2 days ago',
            tags: ['React', 'TypeScript', 'CSS'],
            highPaying: true
        },
        {
            id: 2,
            title: 'UX/UI Designer',
            company: 'DesignHub',
            location: 'Remote',
            remote: true,
            salary: '$90K - $110K',
            type: 'Full-time',
            logo: '/Hackathon/website/Job Hunt/images/designhub.jpg',
            posted: '1 day ago',
            tags: ['Figma', 'Adobe XD', 'Sketch'],
            highPaying: false
        },
        {
            id: 3,
            title: 'DevOps Engineer',
            company: 'CloudTech',
            location: 'Remote',
            remote: true,
            salary: '$130K - $160K',
            type: 'Full-time',
            logo: '/Hackathon/website/Job Hunt/images/cloudtech.png',
            posted: '3 days ago',
            tags: ['AWS', 'Docker', 'Kubernetes'],
            highPaying: true
        },
        {
            id: 4,
            title: 'Marketing Specialist',
            company: 'GrowthLabs',
            location: 'New York, NY',
            remote: false,
            salary: '$70K - $90K',
            type: 'Full-time',
            logo: '/Hackathon/website/Job Hunt/images/growthlabs.png',
            posted: '5 days ago',
            tags: ['Digital Marketing', 'SEO', 'Analytics'],
            highPaying: false
        }
    ];

    // Filter jobs based on selected filter
    let filteredJobs = jobs;
    if (filter === 'remote') {
        filteredJobs = jobs.filter(job => job.remote);
    } else if (filter === 'full-time') {
        filteredJobs = jobs.filter(job => job.type === 'Full-time');
    } else if (filter === 'high-paying') {
        filteredJobs = jobs.filter(job => job.highPaying);
    }

    // Clear existing job listings
    $('#jobListings').empty();

    // Generate HTML for each job
    filteredJobs.forEach(job => {
        const jobHtml = `
            <div class="col-lg-6 col-xl-3">
                <div class="job-card">
                    <div class="company-logo">
                        <img src="${job.logo}" alt="${job.company} logo">
                    </div>
                    <h5 class="job-title">${job.title}</h5>
                    <p class="company-name mb-1">${job.company}</p>
                    <div class="d-flex align-items-center mb-2">
                        <i class="fas fa-map-marker-alt me-1 text-muted"></i>
                        <span class="text-muted small">${job.location}</span>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <i class="fas fa-dollar-sign me-1 text-muted"></i>
                        <span class="text-muted small">${job.salary}</span>
                        <span class="mx-2">•</span>
                        <span class="text-muted small">${job.type}</span>
                    </div>
                    <div class="mb-2">
                        ${job.tags.map(tag => `<span class="job-badge bg-light">${tag}</span>`).join('')}
                    </div>
                    <div class="text-muted small">Posted ${job.posted}</div>
                    <div class="quick-apply">
                        <button class="btn btn-sm btn-light">Quick Apply</button>
                    </div>
                </div>
            </div>
        `;
        $('#jobListings').append(jobHtml);
    });
}

// Function to load testimonials
function loadTestimonials() {
    // Sample testimonial data
    const testimonials = [
        {
            id: 1,
            text: "I found my dream job within just 2 weeks of using CareerHive. The platform's AI matching feature recommended positions that perfectly matched my skills and preferences.",
            name: "Mike Robinson",
            position: "UX Designer at TechCorp",
            image: "/Hackathon/website/Job Hunt/images/Mike Robinson.jpeg"
        },
        {
            id: 2,
            text: "As a hiring manager, CareerHive has transformed our recruitment process. We've been able to find qualified candidates in half the time compared to other platforms.",
            name: "Aarav Mehta",
            position: "HR Director at CloudTech",
            image: "/Hackathon/website/Job Hunt/images/Aarav Mehta.jpeg"
        },
        {
            id: 3,
            text: "The one-click application feature saved me countless hours during my job search. I was able to apply to multiple positions quickly and efficiently.",
            name: "Ava Chen",
            position: "Software Engineer at DataLabs",
            image: "/Hackathon/website/Job Hunt/images/Ava Chen.jpeg"
        }
    ];

    // Generate HTML for testimonials
    let isFirst = true;
    testimonials.forEach(testimonial => {
        const testimonialHtml = `
            <div class="carousel-item ${isFirst ? 'active' : ''}">
                <div class="testimonial-card text-center">
                    <div class="testimonial-img">
                        <img src="${testimonial.image}" alt="${testimonial.name}">
                    </div>
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <h5 class="testimonial-author">${testimonial.name}</h5>
                    <p class="text-muted">${testimonial.position}</p>
                </div>
            </div>
        `;
        $('#testimonialCarousel .carousel-inner').append(testimonialHtml);
        isFirst = false;
    });
}

// Animation function
function animateOnScroll(elements, animationClass) {
    $(elements).each(function() {
        const element = $(this);
        
        if (isElementInViewport(element)) {
            element.addClass(animationClass);
        }
        
        $(window).scroll(function() {
            if (isElementInViewport(element)) {
                element.addClass(animationClass);
            }
        });
    });
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el[0].getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}