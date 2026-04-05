// 刚朝官方网站交互功能

// 大臣数据 - 融合大明制度与大唐气度
const originalMinistersData = [
    {
        rank: "正一品",
        name: "张居正",
        title: "内阁首辅大学士",
        duties: "总揽朝政，辅佐圣上，制定国策。秉承大明之严谨制度，确保朝政清明。"
    },
    {
        rank: "从一品",
        name: "魏征",
        title: "尚书左仆射",
        duties: "监察百官，直言进谏。继承大唐之开放气度，促进朝堂言论自由。"
    },
    {
        rank: "正二品",
        name: "戚继光",
        title: "兵部尚书",
        duties: "统辖全国兵马，镇守边疆。融合明清军事制度，确保国防安全。"
    },
    {
        rank: "从二品",
        name: "房玄龄",
        title: "吏部尚书",
        duties: "掌管官员选拔任用，考核政绩。延续大唐科举制度，选拔贤能。"
    },
    {
        rank: "正三品",
        name: "海瑞",
        title: "都察院御史",
        duties: "纠察百官，肃清吏治。秉持大明清官传统，维护朝纲。"
    },
    {
        rank: "从三品",
        name: "杜如晦",
        title: "户部尚书",
        duties: "管理国家财政，征收赋税。借鉴大唐经济政策，促进民生。"
    },
    {
        rank: "正四品",
        name: "于谦",
        title: "礼部尚书",
        duties: "主持礼仪典制，接待外宾。融合明清礼仪制度，彰显国威。"
    },
    {
        rank: "从四品",
        name: "姚崇",
        title: "工部尚书",
        duties: "负责工程建设，水利交通。继承大唐工程技艺，建设国家。"
    }
];

// 王朝历史数据
const historyData = {
    founding: "刚朝由太祖皇帝于烈武元年建立，承袭历代王朝之精华。",
    achievements: [
        "统一全国，建立完善行政体系",
        "推行科举制度，选拔贤能之士",
        "发展经济，促进贸易繁荣",
        "加强国防，确保边疆安定",
        "弘扬文化，促进艺术发展"
    ]
};

// 初始化函数
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadMinisters();
    setupScrollAnimations();
    setupSmoothScrolling();
});

// 初始化导航功能
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // 导航点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // 移除所有激活状态
                navLinks.forEach(l => l.classList.remove('active'));
                // 添加当前激活状态
                this.classList.add('active');
                
                // 平滑滚动到目标区域
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 滚动时更新导航激活状态
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// 加载大臣信息
function loadMinisters() {
    const ministersGrid = document.getElementById('ministersGrid');
    
    if (!ministersGrid) return;
    
    originalMinistersData.forEach(minister => {
        const card = createMinisterCard(minister);
        ministersGrid.appendChild(card);
    });
}

// 创建大臣卡片
function createMinisterCard(minister) {
    const card = document.createElement('div');
    card.className = 'minister-card fade-in-up';
    
    card.innerHTML = `
        <div class="minister-rank">${minister.rank}</div>
        <h3 class="minister-name">${minister.name}</h3>
        <div class="minister-title">${minister.title}</div>
        <p class="minister-duties">${minister.duties}</p>
    `;
    
    return card;
}

// 设置滚动动画
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.minister-card, .section-title, .emperor-profile, .map-container');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// 设置平滑滚动
function setupSmoothScrolling() {
    // 为所有内部链接添加平滑滚动
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

// 显示当前时间（王朝纪年）
function displayImperialTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    // 模拟王朝纪年（基于当前年份）
    const imperialYear = year - 2023 + 1; // 假设烈武元年为2023年
    
    const timeString = `烈武${imperialYear}年${month}月${day}日 ${hours}:${minutes}`;
    
    // 可以在页面的某个位置显示这个时间
    console.log(`当前王朝时间：${timeString}`);
}

// 页面加载完成后的初始化
window.addEventListener('load', function() {
    // 显示当前时间
    displayImperialTime();
    
    // 添加加载完成动画
    document.body.classList.add('loaded');
    
    // 模拟数据加载延迟效果
    setTimeout(() => {
        const loadingElements = document.querySelectorAll('.portrait-placeholder, .map-placeholder');
        loadingElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'scale(1)';
        });
    }, 1000);
});

// 键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // Alt + 数字键快速导航
    if (e.altKey && e.key >= '1' && e.key <= '6') {
        const sections = ['home', 'emperor', 'ministers', 'territory', 'history', 'culture'];
        const index = parseInt(e.key) - 1;
        if (sections[index]) {
            const targetSection = document.getElementById(sections[index]);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});

// 响应式菜单功能（移动端）
function setupMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    
    const navContainer = document.querySelector('.nav-container');
    navContainer.appendChild(navToggle);
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
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

// 导出函数供其他脚本使用（如果需要）
window.ImperialWebsite = {
    originalMinistersData,
    historyData,
    displayImperialTime,
    reloadMinisters: loadMinisters
};