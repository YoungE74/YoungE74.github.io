// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Video placeholder click handlers
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');
    videoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            // This is where you would implement actual video playing
            // For now, we'll show an alert
            alert('视频播放功能即将推出！\n\n在实际使用中，这里可以：\n- 打开视频播放器\n- 链接到视频托管平台\n- 嵌入视频播放器');
        });
    });

    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe video cards for animation
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add loading animation for images (placeholder for future real images)
    const loadingAnimation = () => {
        const placeholders = document.querySelectorAll('.video-placeholder, .avatar-placeholder');
        placeholders.forEach(placeholder => {
            placeholder.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            placeholder.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    };

    loadingAnimation();

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Add contact form functionality (placeholder)
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            if (title === 'GitHub') {
                // GitHub link is already handled by the anchor tag
                return;
            } else if (title === '邮箱') {
                // Copy email to clipboard (placeholder)
                navigator.clipboard.writeText('contact@example.com').then(() => {
                    showNotification('邮箱地址已复制到剪贴板！');
                });
            }
        });
    });

    // Notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1001;
            font-weight: 500;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Add CSS animation for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        .nav-toggle.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }

        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .nav-toggle.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    `;
    document.head.appendChild(style);
});

// Add some utility functions for future video integration
const VideoManager = {
    // Placeholder for video management functionality
    playVideo: function(videoId) {
        console.log(`Playing video: ${videoId}`);
        // Implementation would go here
    },

    pauseVideo: function(videoId) {
        console.log(`Pausing video: ${videoId}`);
        // Implementation would go here
    },

    // Function to add new videos (for content management)
    addVideo: function(videoData) {
        console.log('Adding new video:', videoData);
        // Implementation would go here
    }
};

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VideoManager };
}