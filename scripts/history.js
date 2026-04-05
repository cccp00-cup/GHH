// 历史页面交互功能

document.addEventListener('DOMContentLoaded', function() {
    initializeHistoryPage();
    setupTimelineAnimations();
    setupSmoothScrolling();
});

// 初始化历史页面
function initializeHistoryPage() {
    setupNavigation();
    setupAchievementHover();
    displayImperialTime();
}

// 设置导航功能
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// 设置时间线动画
function setupTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'all 0.8s ease-out';
        observer.observe(item);
    });
}

// 设置成就项悬停效果
function setupAchievementHover() {
    const achievementItems = document.querySelectorAll('.achievement-item');
    
    achievementItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 3px 15px rgba(0, 0, 0, 0.1)';
        });
    });
}

// 显示王朝时间
function displayImperialTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    
    // 模拟王朝纪年（基于当前年份）
    const imperialYear = year - 2023 + 1; // 假设烈武元年为2023年
    
    const timeString = `烈武${imperialYear}年${month}月${day}日`;
    
    // 在页面底部显示时间
    const timeDisplay = document.createElement('div');
    timeDisplay.className = 'imperial-time';
    timeDisplay.innerHTML = `<p>${timeString}</p>`;
    timeDisplay.style.cssText = `
        text-align: center;
        color: #8b0000;
        font-size: 1.1rem;
        margin-top: 2rem;
        padding: 1rem;
        background: rgba(212, 175, 55, 0.1);
        border-radius: 10px;
        border: 1px solid #d4af37;
    `;
    
    const footer = document.querySelector('.imperial-footer .container');
    if (footer) {
        footer.insertBefore(timeDisplay, footer.firstChild);
    }
}

// 设置平滑滚动
function setupSmoothScrolling() {
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
}

// 页面加载完成后的效果
window.addEventListener('load', function() {
    // 添加页面加载动画
    document.body.classList.add('loaded');
    
    // 延迟显示内容，增强加载体验
    setTimeout(() => {
        const mainContent = document.querySelector('.history-section');
        if (mainContent) {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }
    }, 300);
});

// 响应式菜单功能
function setupMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    navToggle.style.cssText = `
        background: #d4af37;
        color: #8b0000;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 1.2rem;
        cursor: pointer;
        display: none;
    `;
    
    const navContainer = document.querySelector('.nav-container');
    navContainer.appendChild(navToggle);
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // 移动端样式
    if (window.innerWidth <= 768) {
        navToggle.style.display = 'block';
        navMenu.style.cssText = `
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #8b0000;
            flex-direction: column;
            padding: 1rem;
        `;
        
        navMenu.classList.add('active');
    }
}

// 检查是否需要移动端菜单
if (window.innerWidth <= 768) {
    setupMobileMenu();
}

// 窗口大小改变时重新检查
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768 && !document.querySelector('.nav-toggle')) {
        setupMobileMenu();
    }
});