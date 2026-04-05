// 刚朝疆域地图交互功能

const territoryData = {
    provinces: [
        { id: 'zhili', name: '直隶', capital: '北京', color: '#8b0000', area: '高', population: '密集' },
        { id: 'jiangsu', name: '江苏', capital: '南京', color: '#a52a2a', area: '中', population: '密集' },
        { id: 'zhejiang', name: '浙江', capital: '杭州', color: '#b22222', area: '中', population: '密集' },
        { id: 'anhui', name: '安徽', capital: '安庆', color: '#cd5c5c', area: '中', population: '中等' },
        { id: 'jiangxi', name: '江西', capital: '南昌', color: '#dc143c', area: '中', population: '中等' },
        { id: 'hubei', name: '湖北', capital: '武汉', color: '#ff0000', area: '中', population: '密集' },
        { id: 'hunan', name: '湖南', capital: '长沙', color: '#ff6347', area: '中', population: '密集' },
        { id: 'shandong', name: '山东', capital: '济南', color: '#ff7f50', area: '中', population: '密集' },
        { id: 'shanxi', name: '山西', capital: '太原', color: '#ff8c00', area: '中', population: '中等' },
        { id: 'henan', name: '河南', capital: '开封', color: '#ffa500', area: '中', population: '密集' },
        { id: 'shaanxi', name: '陕西', capital: '西安', color: '#ffd700', area: '中', population: '中等' },
        { id: 'gansu', name: '甘肃', capital: '兰州', color: '#daa520', area: '大', population: '稀疏' },
        { id: 'sichuan', name: '四川', capital: '成都', color: '#b8860b', area: '大', population: '密集' },
        { id: 'guangdong', name: '广东', capital: '广州', color: '#cd853f', area: '中', population: '密集' },
        { id: 'guangxi', name: '广西', capital: '桂林', color: '#deb887', area: '中', population: '中等' },
        { id: 'yunnan', name: '云南', capital: '昆明', color: '#f4a460', area: '大', population: '稀疏' },
        { id: 'guizhou', name: '贵州', capital: '贵阳', color: '#d2691e', area: '中', population: '中等' },
        { id: 'fujian', name: '福建', capital: '福州', color: '#8b4513', area: '中', population: '中等' }
    ],
    specialRegions: [
        { id: 'manchuria', name: '满洲', type: '将军辖区', capital: '盛京', color: '#2e8b57' },
        { id: 'mongolia', name: '蒙古', type: '盟旗制度', capital: '库伦', color: '#3cb371' },
        { id: 'xinjiang', name: '新疆', type: '将军辖区', capital: '伊犁', color: '#20b2aa' },
        { id: 'tibet', name: '西藏', type: '驻藏大臣', capital: '拉萨', color: '#40e0d0' }
    ],
    importantCities: [
        { name: '北京', province: '直隶', type: '京师', x: 300, y: 150 },
        { name: '南京', province: '江苏', type: '陪都', x: 400, y: 250 },
        { name: '杭州', province: '浙江', type: '重要城市', x: 450, y: 280 },
        { name: '广州', province: '广东', type: '外贸口岸', x: 350, y: 400 },
        { name: '成都', province: '四川', type: '西南重镇', x: 200, y: 300 },
        { name: '西安', province: '陕西', type: '古都', x: 250, y: 200 },
        { name: '武汉', province: '湖北', type: '交通枢纽', x: 320, y: 270 }
    ]
};

class ImperialMap {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.svg = null;
        this.zoomLevel = 1;
        this.panX = 0;
        this.panY = 0;
        this.isDragging = false;
        this.lastX = 0;
        this.lastY = 0;
        
        this.init();
    }
    
    init() {
        this.createSVG();
        this.drawMap();
        this.addInteractions();
        this.createLegend();
    }
    
    createSVG() {
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('viewBox', '0 0 800 600');
        this.svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        this.svg.style.width = '100%';
        this.svg.style.height = '100%';
        this.svg.style.cursor = 'grab';
        
        this.container.innerHTML = '';
        this.container.appendChild(this.svg);
    }
    
    drawMap() {
        this.drawBackground();
        this.drawProvinces();
        this.drawSpecialRegions();
        this.drawCities();
        this.drawRivers();
        this.drawBorders();
    }
    
    drawBackground() {
        const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bg.setAttribute('width', '800');
        bg.setAttribute('height', '600');
        bg.setAttribute('fill', '#f8f4e9');
        bg.setAttribute('stroke', '#d4af37');
        bg.setAttribute('stroke-width', '2');
        this.svg.appendChild(bg);
    }
    
    drawProvinces() {
        territoryData.provinces.forEach(province => {
            const path = this.createProvincePath(province.id);
            if (path) {
                path.setAttribute('fill', province.color);
                path.setAttribute('stroke', '#8b0000');
                path.setAttribute('stroke-width', '1');
                path.setAttribute('data-province', province.id);
                path.classList.add('province');
                
                path.addEventListener('mouseenter', (e) => this.onProvinceHover(e, province));
                path.addEventListener('mouseleave', () => this.onProvinceLeave());
                path.addEventListener('click', () => this.onProvinceClick(province));
                
                this.svg.appendChild(path);
            }
        });
    }
    
    createProvincePath(provinceId) {
        const paths = {
            'zhili': 'M300,100 L350,120 L320,180 L280,150 Z',
            'jiangsu': 'M380,220 L420,240 L400,280 L360,260 Z',
            'zhejiang': 'M430,250 L460,270 L440,300 L410,280 Z',
            'anhui': 'M360,240 L390,260 L370,290 L340,270 Z',
            'jiangxi': 'M390,270 L420,290 L400,320 L370,300 Z',
            'hubei': 'M320,260 L350,280 L330,310 L300,290 Z',
            'hunan': 'M340,290 L370,310 L350,340 L320,320 Z',
            'shandong': 'M350,180 L380,200 L360,230 L330,210 Z',
            'shanxi': 'M280,170 L310,190 L290,220 L260,200 Z',
            'henan': 'M320,200 L350,220 L330,250 L300,230 Z',
            'shaanxi': 'M250,190 L280,210 L260,240 L230,220 Z',
            'gansu': 'M200,150 L230,170 L210,200 L180,180 Z',
            'sichuan': 'M180,250 L210,270 L190,300 L160,280 Z',
            'guangdong': 'M330,350 L360,370 L340,400 L310,380 Z',
            'guangxi': 'M280,330 L310,350 L290,380 L260,360 Z',
            'yunnan': 'M150,300 L180,320 L160,350 L130,330 Z',
            'guizhou': 'M250,300 L280,320 L260,350 L230,330 Z',
            'fujian': 'M400,280 L430,300 L410,330 L380,310 Z'
        };
        
        if (paths[provinceId]) {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', paths[provinceId]);
            return path;
        }
        return null;
    }
    
    drawSpecialRegions() {
        territoryData.specialRegions.forEach(region => {
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', region.id === 'manchuria' ? '100' : 
                             region.id === 'mongolia' ? '50' : 
                             region.id === 'xinjiang' ? '20' : '120');
            rect.setAttribute('y', region.id === 'manchuria' ? '50' : 
                             region.id === 'mongolia' ? '80' : 
                             region.id === 'xinjiang' ? '100' : '350');
            rect.setAttribute('width', '150');
            rect.setAttribute('height', '100');
            rect.setAttribute('fill', region.color);
            rect.setAttribute('stroke', '#2e8b57');
            rect.setAttribute('stroke-width', '2');
            rect.setAttribute('stroke-dasharray', '5,5');
            rect.setAttribute('data-region', region.id);
            rect.classList.add('special-region');
            
            rect.addEventListener('mouseenter', (e) => this.onRegionHover(e, region));
            rect.addEventListener('mouseleave', () => this.onRegionLeave());
            rect.addEventListener('click', () => this.onRegionClick(region));
            
            this.svg.appendChild(rect);
        });
    }
    
    drawCities() {
        territoryData.importantCities.forEach(city => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', city.x);
            circle.setAttribute('cy', city.y);
            circle.setAttribute('r', '4');
            circle.setAttribute('fill', '#d4af37');
            circle.setAttribute('stroke', '#8b0000');
            circle.setAttribute('stroke-width', '2');
            circle.setAttribute('data-city', city.name);
            circle.classList.add('city');
            
            circle.addEventListener('mouseenter', (e) => this.onCityHover(e, city));
            circle.addEventListener('mouseleave', () => this.onCityLeave());
            
            this.svg.appendChild(circle);
            
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', city.x + 8);
            text.setAttribute('y', city.y + 4);
            text.setAttribute('font-size', '12');
            text.setAttribute('fill', '#8b0000');
            text.textContent = city.name;
            this.svg.appendChild(text);
        });
    }
    
    drawRivers() {
        const rivers = [
            { id: 'yellow', points: 'M250,100 L280,150 L300,200 L320,250', color: '#ffff00' },
            { id: 'yangtze', points: 'M200,180 L250,220 L300,260 L350,300', color: '#0000ff' },
            { id: 'pearl', points: 'M300,320 L320,350 L340,380', color: '#00ff00' }
        ];
        
        rivers.forEach(river => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', river.points);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', river.color);
            path.setAttribute('stroke-width', '2');
            path.setAttribute('stroke-dasharray', '3,3');
            this.svg.appendChild(path);
        });
    }
    
    drawBorders() {
        const borders = [
            'M50,50 L100,80 L150,100 L200,120 L250,140 L300,160 L350,180 L400,200 L450,220 L500,240 L550,260 L600,280 L650,300 L700,320 L750,340',
            'M50,400 L100,380 L150,360 L200,340 L250,320 L300,300 L350,280 L400,260 L450,240 L500,220 L550,200 L600,180 L650,160 L700,140 L750,120'
        ];
        
        borders.forEach(border => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', border);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', '#8b0000');
            path.setAttribute('stroke-width', '1');
            path.setAttribute('stroke-dasharray', '5,5');
            this.svg.appendChild(path);
        });
    }
    
    createLegend() {
        const legend = document.createElement('div');
        legend.className = 'map-legend';
        legend.innerHTML = `
            <h4>图例</h4>
            <div class="legend-item">
                <span class="color-box" style="background: #8b0000"></span>
                <span>行省</span>
            </div>
            <div class="legend-item">
                <span class="color-box" style="background: #2e8b57; border: 2px dashed #2e8b57"></span>
                <span>特殊辖区</span>
            </div>
            <div class="legend-item">
                <span class="color-box" style="background: #d4af37; border: 2px solid #8b0000"></span>
                <span>重要城市</span>
            </div>
        `;
        
        legend.style.cssText = `
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.9);
            padding: 1rem;
            border-radius: 10px;
            border: 2px solid #d4af37;
            font-size: 0.9rem;
        `;
        
        this.container.appendChild(legend);
    }
    
    addInteractions() {
        this.svg.addEventListener('mousedown', (e) => this.startDrag(e));
        this.svg.addEventListener('mousemove', (e) => this.drag(e));
        this.svg.addEventListener('mouseup', () => this.endDrag());
        this.svg.addEventListener('wheel', (e) => this.zoom(e));
        
        document.addEventListener('keydown', (e) => this.onKeyDown(e));
    }
    
    startDrag(e) {
        this.isDragging = true;
        this.lastX = e.clientX;
        this.lastY = e.clientY;
        this.svg.style.cursor = 'grabbing';
    }
    
    drag(e) {
        if (!this.isDragging) return;
        
        const deltaX = e.clientX - this.lastX;
        const deltaY = e.clientY - this.lastY;
        
        this.panX += deltaX / this.zoomLevel;
        this.panY += deltaY / this.zoomLevel;
        
        this.updateView();
        
        this.lastX = e.clientX;
        this.lastY = e.clientY;
    }
    
    endDrag() {
        this.isDragging = false;
        this.svg.style.cursor = 'grab';
    }
    
    zoom(e) {
        e.preventDefault();
        const zoomIntensity = 0.1;
        const wheel = e.deltaY < 0 ? 1 : -1;
        const zoom = Math.exp(wheel * zoomIntensity);
        
        this.zoomLevel *= zoom;
        this.zoomLevel = Math.max(0.5, Math.min(3, this.zoomLevel));
        
        this.updateView();
    }
    
    updateView() {
        const viewBox = `
            ${this.panX} ${this.panY} 
            ${800 / this.zoomLevel} ${600 / this.zoomLevel}
        `;
        this.svg.setAttribute('viewBox', viewBox);
    }
    
    onKeyDown(e) {
        if (e.key === 'r' || e.key === 'R') {
            this.resetView();
        }
    }
    
    resetView() {
        this.zoomLevel = 1;
        this.panX = 0;
        this.panY = 0;
        this.updateView();
    }
    
    onProvinceHover(e, province) {
        e.target.style.filter = 'brightness(1.2)';
        this.showTooltip(e, `${province.name}省 - 省会：${province.capital}`);
    }
    
    onProvinceLeave() {
        document.querySelectorAll('.province').forEach(p => {
            p.style.filter = 'brightness(1)';
        });
        this.hideTooltip();
    }
    
    onProvinceClick(province) {
        this.showProvinceDetail(province);
    }
    
    onRegionHover(e, region) {
        e.target.style.filter = 'brightness(1.2)';
        this.showTooltip(e, `${region.name} - ${region.type} - 治所：${region.capital}`);
    }
    
    onRegionLeave() {
        document.querySelectorAll('.special-region').forEach(r => {
            r.style.filter = 'brightness(1)';
        });
        this.hideTooltip();
    }
    
    onRegionClick(region) {
        this.showRegionDetail(region);
    }
    
    onCityHover(e, city) {
        e.target.setAttribute('r', '6');
        this.showTooltip(e, `${city.name} - ${city.type} - 所属：${city.province}`);
    }
    
    onCityLeave() {
        document.querySelectorAll('.city').forEach(c => {
            c.setAttribute('r', '4');
        });
        this.hideTooltip();
    }
    
    showTooltip(e, content) {
        let tooltip = document.querySelector('.map-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'map-tooltip';
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(139, 0, 0, 0.9);
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                font-size: 0.9rem;
                pointer-events: none;
                z-index: 1000;
                border: 1px solid #d4af37;
            `;
            document.body.appendChild(tooltip);
        }
        
        tooltip.textContent = content;
        tooltip.style.left = (e.clientX + 10) + 'px';
        tooltip.style.top = (e.clientY + 10) + 'px';
        tooltip.style.display = 'block';
    }
    
    hideTooltip() {
        const tooltip = document.querySelector('.map-tooltip');
        if (tooltip) {
            tooltip.style.display = 'none';
        }
    }
    
    showProvinceDetail(province) {
        const modal = this.createDetailModal(
            `${province.name}省`,
            `省会：${province.capital}\n面积：${province.area}\n人口：${province.population}`
        );
        document.body.appendChild(modal);
    }
    
    showRegionDetail(region) {
        const modal = this.createDetailModal(
            region.name,
            `类型：${region.type}\n治所：${region.capital}\n辖区特点：特殊行政制度`
        );
        document.body.appendChild(modal);
    }
    
    createDetailModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'map-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>${title}</h3>
                <p>${content.replace(/\\n/g, '<br>')}</p>
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
            background: #f8f4e9;
            padding: 2rem;
            border-radius: 15px;
            max-width: 400px;
            width: 90%;
            border: 3px solid #d4af37;
            position: relative;
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

let imperialMapInstance = null;

document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.getElementById('territoryMap');
    if (mapContainer) {
        imperialMapInstance = new ImperialMap('territoryMap');
    }
});

function resetMapView() {
    if (imperialMapInstance) {
        imperialMapInstance.resetView();
    }
}

function toggleMapInfo() {
    const infoPanel = document.querySelector('.territory-info');
    if (infoPanel) {
        infoPanel.style.display = infoPanel.style.display === 'none' ? 'block' : 'none';
    }
}

window.resetMapView = resetMapView;
window.toggleMapInfo = toggleMapInfo;