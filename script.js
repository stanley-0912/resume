// ============================================
// 简历网站 JavaScript
// 功能：导航、平滑滚动、响应式菜单
// ============================================

// 获取 DOM 元素
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// 汉堡菜单切换
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 点击导航链接时关闭菜单
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 平滑滚动功能
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

// 页面滚动时的导航栏效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// 页面加载时的动画效果
window.addEventListener('load', () => {
    // 为所有分区添加淡入效果
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Intersection Observer 用于滚动时的动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有卡片元素
document.querySelectorAll('.experience-item, .project-card, .award-item, .contact-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// 响应式菜单处理
function handleResize() {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
}

window.addEventListener('resize', handleResize);

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('网站已加载完成');
});
