// 文化页面交互功能

document.addEventListener('DOMContentLoaded', function() {
    initializeCulturePage();
    setupCultureAnimations();
    setupSmoothScrolling();
});

// 初始化文化页面
function initializeCulturePage() {
    setupNavigation();
    setupCultureItemHover();
    displayImperialTime();
    setupCultureGridEffects();
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

// 设置文化项动画
function setupCultureAnimations() {
    const cultureItems = document.querySelectorAll('.culture-item');
    const heritageContent = document.querySelector('.heritage-content');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // 为文化网格项添加延迟动画
                if (entry.target.classList.contains('culture-item')) {
                    const index = Array.from(cultureItems).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    cultureItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });
    
    if (heritageContent) {
        heritageContent.style.opacity = '0';
        heritageContent.style.transform = 'translateY(30px)';
        heritageContent.style.transition = 'all 0.8s ease-out';
        observer.observe(heritageContent);
    }
}

// 设置文化项悬停效果
function setupCultureItemHover() {
    const cultureItems = document.querySelectorAll('.culture-item');
    
    cultureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.borderColor = '#d4af37';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
            
            // 图标放大效果
            const icon = this.querySelector('.culture-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.borderColor = '#e8e4d9';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            
            // 图标恢复
            const icon = this.querySelector('.culture-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
}

// 设置文化网格特效
function setupCultureGridEffects() {
    const cultureGrid = document.querySelector('.culture-grid');
    if (!cultureGrid) return;
    
    // 添加网格背景图案
    cultureGrid.style.backgroundImage = `
        radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(139, 0, 0, 0.1) 0%, transparent 50%)
    `;
    cultureGrid.style.backgroundSize = '100% 100%';
    cultureGrid.style.padding = '2rem';
    cultureGrid.style.borderRadius = '20px';
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
    timeDisplay.innerHTML = `<p>${timeString} - 文化昌盛之时</p>`;
    timeDisplay.style.cssText = `
        text-align: center;
        color: #8b0000;
        font-size: 1.1rem;
        margin-top: 2rem;
        padding: 1rem;
        background: rgba(212, 175, 55, 0.1);
        border-radius: 10px;
        border: 1px solid #d4af37;
        font-style: italic;
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

// 文化特色展示功能
function setupCultureFeatures() {
    const cultureItems = document.querySelectorAll('.culture-item');
    
    cultureItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            const description = this.querySelector('p').textContent;
            
            // 创建特色展示模态框
            showCultureFeatureModal(title, description, this.innerHTML);
        });
    });
}

// 显示文化特色模态框
function showCultureFeatureModal(title, description, content) {
    const modal = document.createElement('div');
    modal.className = 'culture-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>${title}</h3>
            <div class="modal-body">${content}</div>
        </div>
    `;
    
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: #fff;
        padding: 2rem;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        max-height: 80%;
        overflow-y: auto;
        position: relative;
        transform: scale(0.8);
        transition: transform 0.3s ease;
    `;
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.style.cssText = `
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
        cursor: pointer;
        color: #8b0000;
    `;
    
    document.body.appendChild(modal);
    
    // 显示动画
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // 关闭功能
    closeBtn.addEventListener('click', function() {
        modal.style.opacity = '0';
        modalContent.style.transform = 'scale(0.8)';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.opacity = '0';
            modalContent.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        }
    });
}

// 页面加载完成后的效果
window.addEventListener('load', function() {
    // 添加页面加载动画
    document.body.classList.add('loaded');
    
    // 延迟显示内容，增强加载体验
    setTimeout(() => {
        const mainContent = document.querySelector('.culture-section');
        if (mainContent) {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }
    }, 300);
    
    // 初始化文化特色展示
    setupCultureFeatures();
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