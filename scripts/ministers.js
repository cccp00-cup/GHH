// 刚朝大臣名录 - 包含古今中外历史名臣

const ministersData = {
    loyal: [
        { id: 'wen-tianxiang', name: '文天祥', title: '右丞相', dynasty: '南宋', description: '忠肝义胆，宁死不屈', traits: '忠臣', image: 'wen-tianxiang.png' },
        { id: 'yue-fei', name: '岳飞', title: '武穆王', dynasty: '南宋', description: '精忠报国，抗金名将', traits: '忠臣', image: 'yue-fei.png' },
        { id: 'guan-yu', name: '关羽', title: '武圣', dynasty: '三国', description: '义薄云天，忠义无双', traits: '忠臣', image: 'guan-yu.png' },
        { id: 'zhao-xun', name: '赵云', title: '常山赵子龙', dynasty: '三国', description: '一身是胆，忠勇双全', traits: '忠臣', image: 'zhao-xun.png' },
        { id: 'yan-linqing', name: '颜真卿', title: '太子太师', dynasty: '唐朝', description: '忠烈名臣，书法大家', traits: '忠臣', image: 'yan-linqing.png' },
        { id: 'zhang-xu', name: '张巡', title: '御史中丞', dynasty: '唐朝', description: '死守睢阳，忠勇可嘉', traits: '忠臣', image: 'zhang-xu.png' },
        { id: 'yang-jian', name: '杨继业', title: '金刀老令公', dynasty: '北宋', description: '杨家将始祖，忠勇传家', traits: '忠臣', image: 'yang-jian.png' },
        { id: 'shi-ke-fa', name: '史可法', title: '兵部尚书', dynasty: '明朝', description: '死守扬州，壮烈殉国', traits: '忠臣', image: 'shi-ke-fa.png' }
    ],
    wise: [
        { id: 'jiang-ziya', name: '姜子牙', title: '太师', dynasty: '西周', description: '智谋无双，辅佐文王', traits: '智者', image: 'jiang-ziya.png' },
        { id: 'zhang-liang', name: '张良', title: '留侯', dynasty: '西汉', description: '运筹帷幄，决胜千里', traits: '智者', image: 'zhang-liang.png' },
        { id: 'kong-ming', name: '诸葛亮', title: '武乡侯', dynasty: '三国', description: '神机妙算，鞠躬尽瘁', traits: '智者', image: 'kong-ming.png' },
        { id: 'wei-qing', name: '卫青', title: '大司马大将军', dynasty: '西汉', description: '北击匈奴，战功赫赫', traits: '智者', image: 'wei-qing.png' },
        { id: 'bai-qi', name: '白起', title: '武安君', dynasty: '战国', description: '战神白起，百战百胜', traits: '智者', image: 'bai-qi.png' },
        { id: 'han-xin', name: '韩信', title: '淮阴侯', dynasty: '西汉', description: '兵仙神帅，百战不殆', traits: '智者', image: 'han-xin.png' },
        { id: 'guo-fu', name: '郭子仪', title: '汾阳王', dynasty: '唐朝', description: '再造大唐，功高震主', traits: '智者', image: 'guo-fu.png' },
        { id: 'xun-yu', name: '荀彧', title: '尚书令', dynasty: '东汉', description: '王佐之才，曹魏谋主', traits: '智者', image: 'xun-yu.png' }
    ],
    treacherous: [
        { id: 'qin-hui', name: '秦桧', title: '宰相', dynasty: '南宋', description: '陷害忠良，卖国求荣', traits: '奸臣', image: 'qin-hui.png' },
        { id: 'wang-zhi', name: '王振', title: '司礼监掌印太监', dynasty: '明朝', description: '专权误国，土木之变', traits: '奸臣', image: 'wang-zhi.png' },
        { id: 'wei-zheng', name: '魏忠贤', title: '九千岁', dynasty: '明朝', description: '权倾朝野，祸乱朝纲', traits: '奸臣', image: 'wei-zheng.png' },
        { id: 'li-lun', name: '李林甫', title: '宰相', dynasty: '唐朝', description: '口蜜腹剑，嫉贤妒能', traits: '奸臣', image: 'li-lun.png' },
        { id: 'yan-song', name: '严嵩', title: '内阁首辅', dynasty: '明朝', description: '贪赃枉法，结党营私', traits: '奸臣', image: 'yan-song.png' },
        { id: 'zhu-gaozhi', name: '赵高', title: '中车府令', dynasty: '秦朝', description: '指鹿为马，祸乱朝纲', traits: '奸臣', image: 'zhu-gaozhi.png' },
        { id: 'dong-zhuo', name: '董卓', title: '相国', dynasty: '东汉', description: '残暴不仁，祸国殃民', traits: '奸臣', image: 'dong-zhuo.png' },
        { id: 'yuan-shikai', name: '袁世凯', title: '大总统', dynasty: '民国', description: '窃国大盗，复辟帝制', traits: '奸臣', image: 'yuan-shikai.png' }
    ],
    powerful: [
        { id: 'cao-cao', name: '曹操', title: '魏王', dynasty: '东汉', description: '治世之能臣，乱世之奸雄', traits: '权臣', image: 'cao-cao.png' },
        { id: 'sima-yi', name: '司马懿', title: '太傅', dynasty: '三国', description: '隐忍待时，篡魏建晋', traits: '权臣', image: 'sima-yi.png' },
        { id: 'yang-su', name: '杨坚', title: '隋国公', dynasty: '北周', description: '代周建隋，统一中国', traits: '权臣', image: 'yang-su.png' },
        { id: 'zhao-kangyin', name: '赵匡胤', title: '宋太祖', dynasty: '后周', description: '陈桥兵变，黄袍加身', traits: '权臣', image: 'zhao-kangyin.png' },
        { id: 'wang-meng', name: '王猛', title: '丞相', dynasty: '前秦', description: '功盖诸葛，辅佐苻坚', traits: '权臣', image: 'wang-meng.png' },
        { id: 'wen-tianxiang', name: '王安石', title: '宰相', dynasty: '北宋', description: '变法图强，锐意改革', traits: '权臣', image: 'wen-tianxiang.png' },
        { id: 'sima-jian', name: '司马昭', title: '晋王', dynasty: '三国', description: '司马昭之心，路人皆知', traits: '权臣', image: 'sima-jian.png' },
        { id: 'yang-xuanzhi', name: '杨秀清', title: '东王', dynasty: '太平天国', description: '权倾朝野，内讧被杀', traits: '权臣', image: 'yang-xuanzhi.png' }
    ],
    foreign: [
        { id: 'napoleon', name: '拿破仑', title: '皇帝', dynasty: '法国', description: '军事天才，横扫欧洲', traits: '枭雄', image: 'napoleon.png' },
        { id: 'alexander', name: '亚历山大', title: '大帝', dynasty: '马其顿', description: '征服世界，建立帝国', traits: '枭雄', image: 'alexander.png' },
        { id: 'caesar', name: '凯撒', title: '独裁官', dynasty: '罗马', description: '罗马帝国奠基者', traits: '枭雄', image: 'caesar.png' },
        { id: 'genghis-khan', name: '成吉思汗', title: '大汗', dynasty: '蒙古', description: '一代天骄，横扫欧亚', traits: '枭雄', image: 'genghis-khan.png' },
        { id: 'charlemagne', name: '查理曼', title: '皇帝', dynasty: '法兰克', description: '欧洲之父，建立帝国', traits: '枭雄', image: 'charlemagne.png' },
        { id: 'attila', name: '阿提拉', title: '上帝之鞭', dynasty: '匈人', description: '横扫欧洲，威震四方', traits: '枭雄', image: 'attila.png' },
        { id: 'shah-jahan', name: '沙贾汗', title: '皇帝', dynasty: '莫卧儿', description: '泰姬陵建造者，多情帝王', traits: '枭雄', image: 'shah-jahan.png' },
        { id: 'tokugawa', name: '德川家康', title: '征夷大将军', dynasty: '日本', description: '江户幕府开创者', traits: '枭雄', image: 'tokugawa.png' }
    ]
};

class MinistersDirectory {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.init();
    }
    
    init() {
        this.renderMinisters();
        this.addFilters();
    }
    
    renderMinisters() {
        const allMinisters = [
            ...ministersData.loyal,
            ...ministersData.wise,
            ...ministersData.treacherous,
            ...ministersData.powerful,
            ...ministersData.foreign
        ];
        
        this.container.innerHTML = '';
        
        allMinisters.forEach(minister => {
            const card = this.createMinisterCard(minister);
            this.container.appendChild(card);
        });
    }
    
    createMinisterCard(minister) {
        const card = document.createElement('div');
        card.className = 'minister-card';
        card.innerHTML = `
            <div class="minister-image">
                <div class="minister-portrait" data-minister="${minister.id}">
                    <div class="portrait-placeholder">${minister.name}</div>
                </div>
            </div>
            <div class="minister-info">
                <h3>${minister.name}</h3>
                <p class="minister-title">${minister.title}</p>
                <p class="minister-dynasty">${minister.dynasty}</p>
                <p class="minister-description">${minister.description}</p>
                <span class="minister-trait trait-${minister.traits}">${minister.traits}</span>
            </div>
        `;
        
        card.addEventListener('click', () => this.showMinisterDetail(minister));
        
        return card;
    }
    
    addFilters() {
        const filters = ['all', 'loyal', 'wise', 'treacherous', 'powerful', 'foreign'];
        
        const filterContainer = document.createElement('div');
        filterContainer.className = 'minister-filters';
        
        filters.forEach(filter => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.textContent = this.getFilterLabel(filter);
            btn.addEventListener('click', () => this.filterMinisters(filter));
            filterContainer.appendChild(btn);
        });
        
        this.container.parentNode.insertBefore(filterContainer, this.container);
    }
    
    getFilterLabel(filter) {
        const labels = {
            all: '全部大臣',
            loyal: '忠臣',
            wise: '智者',
            treacherous: '奸臣',
            powerful: '权臣',
            foreign: '外臣'
        };
        return labels[filter] || '全部大臣';
    }
    
    filterMinisters(filter) {
        let filteredMinisters = [];
        
        if (filter === 'all') {
            filteredMinisters = [
                ...ministersData.loyal,
                ...ministersData.wise,
                ...ministersData.treacherous,
                ...ministersData.powerful,
                ...ministersData.foreign
            ];
        } else {
            filteredMinisters = ministersData[filter] || [];
        }
        
        this.container.innerHTML = '';
        
        filteredMinisters.forEach(minister => {
            const card = this.createMinisterCard(minister);
            this.container.appendChild(card);
        });
    }
    
    showMinisterDetail(minister) {
        const modal = this.createDetailModal(minister);
        document.body.appendChild(modal);
    }
    
    createDetailModal(minister) {
        const modal = document.createElement('div');
        modal.className = 'minister-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${minister.name}</h2>
                <p class="modal-title">${minister.title}</p>
                <p class="modal-dynasty">${minister.dynasty}</p>
                <p class="modal-description">${minister.description}</p>
                <div class="modal-traits">
                    <span class="trait-badge trait-${minister.traits}">${minister.traits}</span>
                </div>
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
        `;
        
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.cssText = `
            background: #1a0f08;
            padding: 2rem;
            border-radius: 15px;
            max-width: 400px;
            width: 90%;
            border: 3px solid #d4af37;
            position: relative;
            color: #f8f4e9;
        `;
        
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.style.cssText = `
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 2rem;
            cursor: pointer;
            color: #d4af37;
        `;
        
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
        
        return modal;
    }
}

// 初始化大臣名录
document.addEventListener('DOMContentLoaded', function() {
    const ministersGrid = document.getElementById('ministersGrid');
    if (ministersGrid) {
        new MinistersDirectory('ministersGrid');
    }
});