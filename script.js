// SignBridge Landing Page - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navigation
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // Animate elements on scroll
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

    // Observe all major sections
    const animatedElements = document.querySelectorAll(
        '.problem-card, .feature-row, .solution-highlight'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add click handlers to all CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-accent');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent default if it's not a link
            if (this.tagName === 'BUTTON') {
                e.preventDefault();
                console.log('CTA clicked:', this.textContent);
                // Add your form/modal logic here
                alert('Demo request form would open here. Connect this to your scheduling system.');
            }
        });
    });

    // Simulate typing effect for hero transcription
    const typingElement = document.querySelector('.transcription-line.typing .text');
    if (typingElement) {
        const originalText = typingElement.textContent;
        let charIndex = 0;
        
        function typeText() {
            if (charIndex < originalText.length) {
                typingElement.textContent = originalText.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeText, 100);
            }
        }
        
        // Start typing after a delay
        setTimeout(() => {
            typingElement.textContent = '';
            typeText();
        }, 2000);
    }

    // Add hover effects to problem cards
    const problemCards = document.querySelectorAll('.problem-card');
    problemCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Log page load for analytics (replace with your analytics)
    console.log('SignBridge Landing Page Loaded');
    console.log('Timestamp:', new Date().toISOString());
});

// Add a simple form validation helper (if you add forms later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Export for use in other scripts if needed
window.SignBridge = {
    validateEmail: validateEmail
};
