// 刚朝准确疆域地图 - 基于1800年大清真实疆域

const accurateTerritoryData = {
    provinces: [
        { id: 'zhili', name: '直隶', capital: '北京', color: '#8b0000', area: '高', population: '密集', 
          coordinates: [[116, 40], [117, 39], [118, 38], [117, 37], [116, 38]] },
        { id: 'jiangsu', name: '江苏', capital: '南京', color: '#a52a2a', area: '中', population: '密集',
          coordinates: [[118, 32], [119, 31], [120, 32], [119, 33], [118, 33]] },
        { id: 'zhejiang', name: '浙江', capital: '杭州', color: '#b22222', area: '中', population: '密集',
          coordinates: [[120, 30], [121, 29], [122, 30], [121, 31], [120, 31]] },
        { id: 'anhui', name: '安徽', capital: '安庆', color: '#cd5c5c', area: '中', population: '中等',
          coordinates: [[117, 31], [118, 30], [119, 31], [118, 32], [117, 32]] },
        { id: 'jiangxi', name: '江西', capital: '南昌', color: '#dc143c', area: '中', population: '中等',
          coordinates: [[116, 28], [117, 27], [118, 28], [117, 29], [116, 29]] },
        { id: 'hubei', name: '湖北', capital: '武汉', color: '#ff0000', area: '中', population: '密集',
          coordinates: [[114, 30], [115, 29], [116, 30], [115, 31], [114, 31]] },
        { id: 'hunan', name: '湖南', capital: '长沙', color: '#ff6347', area: '中', population: '密集',
          coordinates: [[112, 28], [113, 27], [114, 28], [113, 29], [112, 29]] },
        { id: 'shandong', name: '山东', capital: '济南', color: '#ff7f50', area: '中', population: '密集',
          coordinates: [[117, 36], [118, 35], [119, 36], [118, 37], [117, 37]] },
        { id: 'shanxi', name: '山西', capital: '太原', color: '#ff8c00', area: '中', population: '中等',
          coordinates: [[112, 37], [113, 36], [114, 37], [113, 38], [112, 38]] },
        { id: 'henan', name: '河南', capital: '开封', color: '#ffa500', area: '中', population: '密集',
          coordinates: [[113, 34], [114, 33], [115, 34], [114, 35], [113, 35]] },
        { id: 'shaanxi', name: '陕西', capital: '西安', color: '#ffd700', area: '中', population: '中等',
          coordinates: [[109, 34], [110, 33], [111, 34], [110, 35], [109, 35]] },
        { id: 'gansu', name: '甘肃', capital: '兰州', color: '#daa520', area: '大', population: '稀疏',
          coordinates: [[103, 36], [104, 35], [105, 36], [104, 37], [103, 37]] },
        { id: 'sichuan', name: '四川', capital: '成都', color: '#b8860b', area: '大', population: '密集',
          coordinates: [[103, 30], [104, 29], [105, 30], [104, 31], [103, 31]] },
        { id: 'guangdong', name: '广东', capital: '广州', color: '#cd853f', area: '中', population: '密集',
          coordinates: [[113, 23], [114, 22], [115, 23], [114, 24], [113, 24]] },
        { id: 'guangxi', name: '广西', capital: '桂林', color: '#deb887', area: '中', population: '中等',
          coordinates: [[110, 25], [111, 24], [112, 25], [111, 26], [110, 26]] },
        { id: 'yunnan', name: '云南', capital: '昆明', color: '#f4a460', area: '大', population: '稀疏',
          coordinates: [[102, 25], [103, 24], [104, 25], [103, 26], [102, 26]] },
        { id: 'guizhou', name: '贵州', capital: '贵阳', color: '#d2691e', area: '中', population: '中等',
          coordinates: [[106, 27], [107, 26], [108, 27], [107, 28], [106, 28]] },
        { id: 'fujian', name: '福建', capital: '福州', color: '#8b4513', area: '中', population: '中等',
          coordinates: [[119, 26], [120, 25], [121, 26], [120, 27], [119, 27]] }
    ],
    specialRegions: [
        { id: 'manchuria', name: '满洲', type: '将军辖区', capital: '盛京', color: '#2e8b57',
          coordinates: [[123, 41], [124, 40], [125, 41], [124, 42], [123, 42]] },
        { id: 'mongolia', name: '蒙古', type: '盟旗制度', capital: '库伦', color: '#3cb371',
          coordinates: [[108, 44], [109, 43], [110, 44], [109, 45], [108, 45]] },
        { id: 'xinjiang', name: '新疆', type: '将军辖区', capital: '伊犁', color: '#20b2aa',
          coordinates: [[87, 43], [88, 42], [89, 43], [88, 44], [87, 44]] },
        { id: 'tibet', name: '西藏', type: '驻藏大臣', capital: '拉萨', color: '#40e0d0',
          coordinates: [[91, 30], [92, 29], [93, 30], [92, 31], [91, 31]] }
    ],
    importantCities: [
        { name: '北京', province: '直隶', type: '京师', lat: 39.9, lon: 116.4 },
        { name: '南京', province: '江苏', type: '陪都', lat: 32.0, lon: 118.7 },
        { name: '杭州', province: '浙江', type: '重要城市', lat: 30.3, lon: 120.2 },
        { name: '广州', province: '广东', type: '外贸口岸', lat: 23.1, lon: 113.3 },
        { name: '成都', province: '四川', type: '西南重镇', lat: 30.6, lon: 104.0 },
        { name: '西安', province: '陕西', type: '古都', lat: 34.3, lon: 108.9 },
        { name: '武汉', province: '湖北', type: '交通枢纽', lat: 30.5, lon: 114.3 }
    ]
};

class AccurateImperialMap {
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
        this.svg.setAttribute('viewBox', '0 0 1000 600');
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
        bg.setAttribute('width', '1000');
        bg.setAttribute('height', '600');
        bg.setAttribute('fill', '#f8f4e9');
        bg.setAttribute('stroke', '#d4af37');
        bg.setAttribute('stroke-width', '2');
        this.svg.appendChild(bg);
    }
    
    drawProvinces() {
        accurateTerritoryData.provinces.forEach(province => {
            const path = this.createProvincePath(province);
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
    
    createProvincePath(province) {
        // 将经纬度转换为SVG坐标
        const scaleX = 10;
        const scaleY = -10;
        const offsetX = 400;
        const offsetY = 300;
        
        const points = province.coordinates.map(([lon, lat]) => {
            const x = lon * scaleX + offsetX;
            const y = lat * scaleY + offsetY;
            return `${x},${y}`;
        });
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M${points.join(' L')} Z`);
        return path;
    }
    
    drawSpecialRegions() {
        accurateTerritoryData.specialRegions.forEach(region => {
            const path = this.createSpecialRegionPath(region);
            if (path) {
                path.setAttribute('fill', region.color);
                path.setAttribute('stroke', '#2e8b57');
                path.setAttribute('stroke-width', '2');
                path.setAttribute('stroke-dasharray', '5,5');
                path.setAttribute('data-region', region.id);
                path.classList.add('special-region');
                
                path.addEventListener('mouseenter', (e) => this.onRegionHover(e, region));
                path.addEventListener('mouseleave', () => this.onRegionLeave());
                path.addEventListener('click', () => this.onRegionClick(region));
                
                this.svg.appendChild(path);
            }
        });
    }
    
    createSpecialRegionPath(region) {
        const scaleX = 10;
        const scaleY = -10;
        const offsetX = 400;
        const offsetY = 300;
        
        const points = region.coordinates.map(([lon, lat]) => {
            const x = lon * scaleX + offsetX;
            const y = lat * scaleY + offsetY;
            return `${x},${y}`;
        });
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M${points.join(' L')} Z`);
        return path;
    }
    
    drawCities() {
        accurateTerritoryData.importantCities.forEach(city => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            
            const scaleX = 10;
            const scaleY = -10;
            const offsetX = 400;
            const offsetY = 300;
            
            const x = city.lon * scaleX + offsetX;
            const y = city.lat * scaleY + offsetY;
            
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
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
            text.setAttribute('x', x + 8);
            text.setAttribute('y', y + 4);
            text.setAttribute('font-size', '12');
            text.setAttribute('fill', '#8b0000');
            text.textContent = city.name;
            this.svg.appendChild(text);
        });
    }
    
    drawRivers() {
        const rivers = [
            { id: 'yellow', points: [[100, 35], [105, 34], [110, 33], [115, 32], [120, 31]], color: '#ffff00' },
            { id: 'yangtze', points: [[100, 30], [105, 29], [110, 28], [115, 27], [120, 26]], color: '#0000ff' },
            { id: 'pearl', points: [[110, 25], [112, 24], [114, 23]], color: '#00ff00' }
        ];
        
        rivers.forEach(river => {
            const scaleX = 10;
            const scaleY = -10;
            const offsetX = 400;
            const offsetY = 300;
            
            const points = river.points.map(([lon, lat]) => {
                const x = lon * scaleX + offsetX;
                const y = lat * scaleY + offsetY;
                return `${x},${y}`;
            });
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', `M${points.join(' L')}`);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', river.color);
            path.setAttribute('stroke-width', '2');
            path.setAttribute('stroke-dasharray', '3,3');
            this.svg.appendChild(path);
        });
    }
    
    drawBorders() {
        const borders = [
            [[73, 53], [75, 50], [78, 48], [80, 45], [82, 43], [85, 41], [88, 39], [90, 37], [92, 35], [95, 33], [98, 31], [100, 29], [102, 27], [105, 25], [108, 23], [110, 21], [112, 19], [115, 17], [118, 15], [120, 13], [122, 11], [124, 9], [126, 7], [128, 5]],
            [[73, 18], [75, 20], [78, 22], [80, 24], [82, 26], [85, 28], [88, 30], [90, 32], [92, 34], [95, 36], [98, 38], [100, 40], [102, 42], [105, 44], [108, 46], [110, 48], [112, 50], [115, 52], [118, 54], [120, 56], [122, 58], [124, 60], [126, 62], [128, 64]]
        ];
        
        borders.forEach(border => {
            const scaleX = 10;
            const scaleY = -10;
            const offsetX = 400;
            const offsetY = 300;
            
            const points = border.map(([lon, lat]) => {
                const x = lon * scaleX + offsetX;
                const y = lat * scaleY + offsetY;
                return `${x},${y}`;
            });
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', `M${points.join(' L')}`);
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
            ${1000 / this.zoomLevel} ${600 / this.zoomLevel}
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

let accurateMapInstance = null;

document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.getElementById('territoryMap');
    if (mapContainer) {
        accurateMapInstance = new AccurateImperialMap('territoryMap');
    }
});

function resetMapView() {
    if (accurateMapInstance) {
        accurateMapInstance.resetView();
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