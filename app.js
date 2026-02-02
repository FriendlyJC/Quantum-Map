// Canvas 设置
const canvas = document.getElementById('quantum-map');
const ctx = canvas.getContext('2d');
const container = document.getElementById('canvas-container');

// 设置canvas尺寸
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
}

// 视口变换参数
let viewport = {
    x: 50,
    y: 20,
    scale: 0.85,
    minScale: 0.3,
    maxScale: 2.5
};

// 拖拽状态
let isDragging = false;
let lastMousePos = { x: 0, y: 0 };

// 时间轴配置
const timeline = {
    startYear: 1982,
    endYear: 2025,
    x: 50,
    width: 80
};

// 初始化
window.addEventListener('load', () => {
    resizeCanvas();
    setupEventListeners();
});

window.addEventListener('resize', resizeCanvas);

// 设置事件监听
function setupEventListeners() {
    // 鼠标拖拽
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        lastMousePos = { x: e.clientX, y: e.clientY };
        container.classList.add('dragging');
    });

    canvas.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const dx = e.clientX - lastMousePos.x;
            const dy = e.clientY - lastMousePos.y;
            viewport.x += dx;
            viewport.y += dy;
            lastMousePos = { x: e.clientX, y: e.clientY };
            draw();
        } else {
            // 检查鼠标是否在可点击元素上
            const mouseX = (e.clientX - viewport.x) / viewport.scale;
            const mouseY = (e.clientY - viewport.y) / viewport.scale;

            let isOverClickable = false;

            // 检查主标题
            if (isPointInEllipse(mouseX, mouseY, 900, 50, 90, 35)) {
                isOverClickable = true;
            }

            // 检查HSP椭圆
            const hsp = quantumData.hspBox;
            if (isPointInEllipse(mouseX, mouseY, hsp.ellipseX, hsp.ellipseY, hsp.ellipseRx, hsp.ellipseRy)) {
                isOverClickable = true;
            }

            // 检查四大分类标题
            const categoryTitles = [
                { x: 475, y: 150, rx: 100, ry: 35 },
                { x: 995, y: 150, rx: 100, ry: 35 },
                { x: 1250, y: 150, rx: 100, ry: 35 },
                { x: 1440, y: 150, rx: 100, ry: 35 }
            ];
            categoryTitles.forEach(title => {
                if (isPointInEllipse(mouseX, mouseY, title.x, title.y, title.rx, title.ry)) {
                    isOverClickable = true;
                }
            });

            // 检查小标题
            const subcategoryTitles = [
                { x: 225, y: 217, width: 100, height: 28 },
                { x: 475, y: 217, width: 110, height: 28 },
                { x: 725, y: 217, width: 90, height: 28 },
                { x: 910, y: 217, width: 80, height: 28 },
                { x: 995, y: 217, width: 70, height: 28 },
                { x: 1080, y: 217, width: 60, height: 28 },
                { x: 1250, y: 217, width: 75, height: 28 },
                { x: 1440, y: 217, width: 85, height: 28 },
                { x: 1580, y: 217, width: 100, height: 28 }
            ];
            subcategoryTitles.forEach(title => {
                if (isPointInRect(mouseX, mouseY, title.x - title.width / 2, title.y - title.height / 2, title.width, title.height)) {
                    isOverClickable = true;
                }
            });

            // 检查节点
            if (!isOverClickable && isPointInNode(mouseX, mouseY, quantumData.masterpiece)) {
                isOverClickable = true;
            }

            if (!isOverClickable) {
                quantumData.categories.forEach(category => {
                    category.subcategories.forEach(subcat => {
                        subcat.items.forEach(item => {
                            if (isPointInNode(mouseX, mouseY, item)) {
                                isOverClickable = true;
                            }
                        });
                    });
                });
            }

            // 设置鼠标指针样式
            canvas.style.cursor = isOverClickable ? 'pointer' : 'grab';
        }
    });

    canvas.addEventListener('mouseup', () => {
        isDragging = false;
        container.classList.remove('dragging');
    });

    canvas.addEventListener('mouseleave', () => {
        isDragging = false;
        container.classList.remove('dragging');
    });

    // 鼠标滚轮缩放
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        const newScale = viewport.scale * delta;

        if (newScale >= viewport.minScale && newScale <= viewport.maxScale) {
            // 以鼠标位置为中心缩放
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            viewport.x = mouseX - (mouseX - viewport.x) * delta;
            viewport.y = mouseY - (mouseY - viewport.y) * delta;
            viewport.scale = newScale;

            draw();
        }
    });

    // 点击节点
    canvas.addEventListener('click', (e) => {
        if (!isDragging) {
            const mouseX = (e.clientX - viewport.x) / viewport.scale;
            const mouseY = (e.clientY - viewport.y) / viewport.scale;

            // 检查是否点击了某个节点或标题
            let clickedItem = null;
            let isTitle = false;

            // 检查主标题
            if (isPointInEllipse(mouseX, mouseY, 900, 50, 90, 35)) {
                clickedItem = '量子電腦';
                isTitle = true;
            }

            // 检查HSP椭圆
            if (!clickedItem) {
                const hsp = quantumData.hspBox;
                if (isPointInEllipse(mouseX, mouseY, hsp.ellipseX, hsp.ellipseY, hsp.ellipseRx, hsp.ellipseRy)) {
                    clickedItem = 'HSP';
                    isTitle = false;
                }
            }

            // 检查四大分类标题
            if (!clickedItem) {
                const categoryTitles = [
                    { name: '演算法與核心', x: 475, y: 150, rx: 100, ry: 35 },
                    { name: '通訊協議', x: 995, y: 150, rx: 100, ry: 35 },
                    { name: '雜訊處理', x: 1240, y: 150, rx: 100, ry: 35 },
                    { name: '硬體', x: 1500, y: 150, rx: 100, ry: 35 }
                ];

                categoryTitles.forEach(title => {
                    if (isPointInEllipse(mouseX, mouseY, title.x, title.y, title.rx, title.ry)) {
                        clickedItem = title.name;
                        isTitle = true;
                    }
                });
            }

            // 检查小标题（长方形）
            if (!clickedItem) {
                const subcategoryTitles = [
                    { name: '特徵提取', x: 225, y: 217, width: 100, height: 28 },
                    { name: '哈密頓模擬', x: 475, y: 217, width: 110, height: 28 },
                    { name: '振幅放大', x: 725, y: 217, width: 90, height: 28 },
                    { name: '密碼學', x: 950, y: 217, width: 100, height: 28 },
                    { name: '通訊', x: 1070, y: 217, width: 80, height: 28 },
                    { name: '糾錯', x: 1180, y: 217, width: 60, height: 28 },
                    { name: '容錯', x: 1260, y: 217, width: 60, height: 28 },
                    { name: '錯誤緩解', x: 1340, y: 217, width: 70, height: 28 },
                    { name: 'Adiabatic', x: 1520, y: 217, width: 85, height: 28 },
                    { name: 'Gate-based', x: 1660, y: 217, width: 100, height: 28 }
                ];

                subcategoryTitles.forEach(title => {
                    if (isPointInRect(mouseX, mouseY, title.x - title.width / 2, title.y - title.height / 2, title.width, title.height)) {
                        clickedItem = title.name;
                        isTitle = true;
                    }
                });
            }

            // 检查 QSVT
            if (!clickedItem && isPointInNode(mouseX, mouseY, quantumData.masterpiece)) {
                clickedItem = quantumData.masterpiece.name;
            }

            // 检查其他节点
            if (!clickedItem) {
                quantumData.categories.forEach(category => {
                    category.subcategories.forEach(subcat => {
                        subcat.items.forEach(item => {
                            if (isPointInNode(mouseX, mouseY, item)) {
                                clickedItem = item.name;
                            }
                        });
                    });
                });
            }

            if (clickedItem) {
                showDetailPanel(clickedItem, isTitle);
            }
        }
    });

    // 关闭详情面板
    document.getElementById('close-btn').addEventListener('click', () => {
        hideDetailPanel();
    });
}

// 检查点是否在椭圆内
function isPointInEllipse(x, y, cx, cy, rx, ry) {
    const dx = x - cx;
    const dy = y - cy;
    return (dx * dx) / (rx * rx) + (dy * dy) / (ry * ry) <= 1;
}

// 检查点是否在矩形内
function isPointInRect(x, y, rx, ry, width, height) {
    return x >= rx && x <= rx + width && y >= ry && y <= ry + height;
}

// 检查点是否在节点内（椭圆形碰撞检测）
function isPointInNode(x, y, node) {
    // 检查是否是QSVT节点（横跨大椭圆）
    if (node.name === 'QSVT') {
        const centerX = node.x + node.width / 2;
        const centerY = node.y + node.height / 2;
        return isPointInEllipse(x, y, centerX, centerY, node.width / 2, node.height / 2);
    }

    // 普通节点
    const width = 70;
    const height = 30;
    const centerX = node.x + width / 2;
    const centerY = node.y + height / 2;

    return isPointInEllipse(x, y, centerX, centerY, width / 2, height / 2);
}

// 显示详情面板
function showDetailPanel(itemName, isTitle = false) {
    const panel = document.getElementById('detail-panel');

    if (isTitle) {
        // 显示标题信息
        const titleInfo = quantumData.titleDetails[itemName];
        if (titleInfo) {
            document.getElementById('detail-title').textContent = titleInfo.name;

            let contentHtml = '';

            if (itemName === '量子電腦') {
                contentHtml = `
                    <div class="detail-section">
                        <h3>提出者：</h3>
                        <p>${titleInfo.proposer}</p>
                    </div>
                    <div class="detail-section">
                        <h3>名言：</h3>
                        ${titleInfo.quotes.map(q => `<p style="font-style: italic; margin: 10px 0;">${q}</p>`).join('')}
                    </div>
                    <div class="detail-section">
                        <h3>原因與重要性：</h3>
                        <div style="white-space: pre-line;">${titleInfo.reason}</div>
                    </div>
                    <div class="detail-section">
                        <h3>補充故事：</h3>
                        <p>${titleInfo.story}</p>
                    </div>
                `;
            } else {
                contentHtml = `
                    <div class="detail-section">
                        <h3>說明：</h3>
                        <div style="white-space: pre-line;">${titleInfo.description}</div>
                    </div>
                `;
            }

            document.querySelector('.panel-content').innerHTML = contentHtml;
            panel.classList.remove('hidden');

            // 重新渲染数学公式
            if (typeof MathJax !== 'undefined') {
                MathJax.typesetPromise([document.querySelector('.panel-content')]).catch((err) => console.log(err));
            }
        }
    } else {
        // 显示节点信息
        const details = quantumData.details[itemName];

        if (details) {
            document.getElementById('detail-title').textContent = details.name;

            // 尝试加载对应的电路图
            const circuitImageHtml = getCircuitImageHtml(itemName, details);

            // 判断是否为通訊協議（通过检查是否有 circuit 和 process 字段，且没有 computation 字段）
            const isCommunication = details.circuit !== undefined && details.process !== undefined && details.computation === undefined;

            if (isCommunication) {
                // 通訊協議的顯示架構
                // 獲取項目的年份信息
                let itemYear = null;
                quantumData.categories.forEach(category => {
                    category.subcategories.forEach(subcat => {
                        subcat.items.forEach(item => {
                            if (item.name === itemName) {
                                itemYear = item.year;
                            }
                        });
                    });
                });

                // 構建主題顯示（格式：超密編碼Superdense Coding / Supercoding (1992)）
                let topicDisplay = '';
                if (details.goal) {
                    topicDisplay += details.goal;
                }
                if (details.name) {
                    topicDisplay += (topicDisplay ? '' : '') + details.name;
                }
                if (itemName && itemName !== details.name) {
                    topicDisplay += ` / ${itemName}`;
                }
                if (itemYear) {
                    topicDisplay += ` (${itemYear})`;
                }
                if (!topicDisplay) {
                    topicDisplay = itemName || '待補充';
                }

                let contentHtml = `
                    <div class="detail-section">
                        <h3>主題：</h3>
                        <p id="detail-name">${topicDisplay}</p>
                    </div>`;

                // 作者（如果有）
                if (details.author) {
                    contentHtml += `
                    <div class="detail-section">
                        <h3>作者：</h3>
                        <p id="detail-author">${details.author}</p>
                    </div>`;
                }

                // 概念與目標（顯示 concept，goal 已在主題中顯示）
                contentHtml += `
                    <div class="detail-section">
                        <h3>概念與目標：</h3>
                        <div id="detail-concept-goal">${details.concept || '待補充'}</div>
                    </div>
                    <div class="detail-section">
                        <h3>示意圖：</h3>
                        <div id="detail-circuit" class="circuit-diagram">${circuitImageHtml}</div>
                    </div>
                    <div class="detail-section">
                        <h3>詳細資訊：</h3>
                        <div id="detail-computation">${details.process || '待補充'}</div>
                    </div>
                    <div class="detail-section">
                        <h3>故事介紹：</h3>
                        <div id="detail-story">${details.story || '待補充'}</div>
                    </div>`;

                document.querySelector('.panel-content').innerHTML = contentHtml;
                panel.classList.remove('hidden');

                // 重新渲染数学公式
                if (typeof MathJax !== 'undefined') {
                    MathJax.typesetPromise([document.querySelector('.panel-content')]).catch((err) => console.log(err));
                }
            } else {
                // 演算法的顯示架構（原有邏輯）
                // 根据类型决定标题
                let nameTitle = '演算法名稱：';
                if (details.type === 'tool') {
                    nameTitle = '核心工具名稱：';
                } else if (details.type === 'framework' || details.type === 'method') {
                    nameTitle = '題目與框架名稱：';
                }

                // 根据类型决定"量子電路圖"和"運算過程"的标题
                const isFramework = details.type === 'framework' || details.type === 'method';
                const circuitTitle = isFramework ? '問題概念框架圖：' : '量子電路圖：';
                const computationTitle = isFramework ? '框架圖解釋：' : '運算過程：';

                let contentHtml = `
                    <div class="detail-section">
                        <h3>${nameTitle}</h3>
                        <p id="detail-name">${details.name || '待補充'}</p>
                    </div>`;

                // 作者（如果有）
                if (details.author) {
                    contentHtml += `
                    <div class="detail-section">
                        <h3>作者：</h3>
                        <p id="detail-author">${details.author}</p>
                    </div>`;
                }

                contentHtml += `
                    <div class="detail-section">
                        <h3>目標：</h3>
                        <div id="detail-goal">${details.goal || '待補充'}</div>
                    </div>
                    <div class="detail-section">
                        <h3>核心概念：</h3>
                        <div id="detail-concept">${details.concept || '待補充'}</div>
                    </div>
                    <div class="detail-section">
                        <h3>${circuitTitle}</h3>
                        <div id="detail-circuit" class="circuit-diagram">${circuitImageHtml}</div>
                    </div>
                    <div class="detail-section">
                        <h3>${computationTitle}</h3>
                        <div id="detail-computation">${details.computation || '待補充'}</div>
                    </div>
                    <div class="detail-section">
                        <h3>補充：</h3>
                        <div id="detail-supplement">${details.supplement || '待補充'}</div>
                    </div>
                    <div class="detail-section">
                        <h3>故事介紹：</h3>
                        <div id="detail-story">${details.story || '待補充'}</div>
                    </div>`;

                document.querySelector('.panel-content').innerHTML = contentHtml;
                panel.classList.remove('hidden');

                // 重新渲染数学公式
                if (typeof MathJax !== 'undefined') {
                    MathJax.typesetPromise([document.querySelector('.panel-content')]).catch((err) => console.log(err));
                }
            }
        }
    }
}

// 获取电路图HTML
function getCircuitImageHtml(algorithmName, details) {
    // 支持的图片格式
    const formats = ['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp'];

    // 生成图片HTML，浏览器会自动尝试加载
    let imagesHtml = '';

    formats.forEach(format => {
        imagesHtml += `<img src="Circuit_Graph/${algorithmName}.${format}" 
                           alt="${algorithmName} 電路圖" 
                           class="circuit-image"
                           onerror="this.style.display='none'"
                           onload="this.style.display='block'">`;
    });

    // 如果没有图片，显示默认提示
    //imagesHtml += `<div class="no-circuit-image">電路圖待補充<br><small>請將圖片命名為 ${algorithmName}.png 並放入 Circuit_Graph 資料夾</small></div>`;

    // 如果有图片来源网址，在图片下方显示
    if (details && details.imageSource) {
        imagesHtml += `<div class="image-source">圖片來源：<a href="${details.imageSource}" target="_blank" class="source-link">${details.imageSource}</a></div>`;
    }

    return imagesHtml;
}

// 隐藏详情面板
function hideDetailPanel() {
    document.getElementById('detail-panel').classList.add('hidden');
}

// 计算年份对应的Y坐标
function getYearY(year) {
    const pixelsPerYear = 25; // 每年25像素
    return 250 + (year - timeline.startYear) * pixelsPerYear;
}

// 绘制主函数
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(viewport.x, viewport.y);
    ctx.scale(viewport.scale, viewport.scale);

    // 绘制背景区域
    drawBackgrounds();

    // 绘制时间轴
    drawTimeline();

    // 绘制主标题和连接线
    drawMainTitle();

    // 绘制类别标题（椭圆形）
    drawCategoryTitles();

    // 绘制子类别标题（长方形）
    drawSubcategoryTitles();

    // 绘制HSP框
    drawHSPBox();

    // 绘制所有节点
    drawNodes();

    // 绘制误差线（时间范围）
    drawErrorBars();

    // 绘制 QSVT 特殊节点（横跨大椭圆）
    drawMasterpiece();

    // 绘制连接线（QSVT到其他算法）
    drawConnections();

    ctx.restore();
}

// 绘制背景区域
function drawBackgrounds() {
    const backgroundHeight = 1200;
    const startY = 200;

    // 演算法与核心 - 三个垂直条（淺藍、藍、淺藍）
    const algoColumns = [
        { x: 100, width: 250, color: 'rgba(100, 150, 220, 0.20)' },  // 淺藍 - 結構找尋
        { x: 350, width: 250, color: 'rgba(100, 150, 220, 0.35)' },  // 藍 - 哈密頓模擬
        { x: 600, width: 250, color: 'rgba(100, 150, 220, 0.20)' }   // 淺藍 - 震幅放大
    ];

    // 通訊协议 - 两个垂直条（深橘、淡橘）
    const commColumns = [
        { x: 850, width: 160, color: 'rgba(255, 140, 0, 0.35)' },    // 深橘 - 密碼學
        { x: 1010, width: 140, color: 'rgba(255, 165, 0, 0.25)' }    // 淡橘 - 通訊
    ];

    // 糾錯與容錯 - 三个条（深綠、中綠、深綠）
    const errorColumns = [
        { x: 1150, width: 90, color: 'rgba(60, 179, 113, 0.35)' },   // 深綠 - 糾錯
        { x: 1240, width: 90, color: 'rgba(46, 139, 87, 0.25)' },    // 中綠 - 容錯
        { x: 1330, width: 90, color: 'rgba(34, 139, 34, 0.35)' }     // 深綠 - 錯誤緩解
    ];

    // 硬體 - 两个垂直条（紅、淺紅）
    const hardwareColumns = [
        { x: 1420, width: 160, color: 'rgba(230, 120, 120, 0.30)' }, // 紅 - Adiabatic
        { x: 1580, width: 160, color: 'rgba(230, 120, 120, 0.20)' }  // 淺紅 - Gate-based
    ];

    // 绘制所有垂直条
    [...algoColumns, ...commColumns, ...errorColumns, ...hardwareColumns].forEach(col => {
        ctx.fillStyle = col.color;
        ctx.fillRect(col.x, startY, col.width, backgroundHeight);
    });
}

// 绘制时间轴
function drawTimeline() {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 1;
    ctx.font = '12px Arial';
    ctx.fillStyle = '#666';

    for (let year = timeline.startYear; year <= 2020; year++) {
        const y = getYearY(year);

        // 绘制水平线
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(1700, y);
        ctx.stroke();

        // 绘制年份标签（移到线的下方）
        let label = year.toString();
        if (year === 2020) label = '2019+';
        ctx.fillText(label, 10, y + 12);
    }
}

// 绘制主标题（椭圆形）
function drawMainTitle() {
    const mainTitle = {
        x: 900,
        y: 50,
        width: 180,
        height: 70,
        text: '量子電腦'
    };

    // 绘制椭圆形
    ctx.beginPath();
    ctx.ellipse(mainTitle.x, mainTitle.y, mainTitle.width / 2, mainTitle.height / 2, 0, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 3;
    ctx.stroke();

    // 绘制文字
    ctx.fillStyle = '#333';
    ctx.font = 'bold 24px Microsoft JhengHei';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(mainTitle.text, mainTitle.x, mainTitle.y);

    // 绘制连接线到四个分类
    const categories = [
        { x: 475, y: 150 }, // 演算法
        { x: 995, y: 150 }, // 通讯
        { x: 1250, y: 150 }, // 纠错
        { x: 1440, y: 150 }  // 硬体
    ];

    ctx.strokeStyle = '#666';
    ctx.lineWidth = 2;

    categories.forEach(cat => {
        ctx.beginPath();
        ctx.moveTo(mainTitle.x, mainTitle.y + mainTitle.height / 2);
        ctx.lineTo(cat.x, cat.y - 35);
        ctx.stroke();
    });

    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
}

// 绘制类别标题（椭圆形）
function drawCategoryTitles() {
    const titles = [
        { text: '演算法與核心', x: 475, y: 150, color: '#4682B4', bgColor: 'rgba(100, 150, 220, 0.4)' },
        { text: '通訊協議', x: 995, y: 150, color: '#FF8C42', bgColor: 'rgba(255, 160, 100, 0.4)' },
        { text: '雜訊處理', x: 1240, y: 150, color: '#5FAD56', bgColor: 'rgba(130, 200, 130, 0.4)' },
        { text: '硬體', x: 1500, y: 150, color: '#E57373', bgColor: 'rgba(230, 120, 120, 0.4)' }
    ];

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    titles.forEach(title => {
        // 绘制椭圆形背景
        ctx.beginPath();
        ctx.ellipse(title.x, title.y, 100, 35, 0, 0, 2 * Math.PI);
        ctx.fillStyle = title.bgColor;
        ctx.fill();
        ctx.strokeStyle = title.color;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // 绘制文字
        ctx.fillStyle = title.color;
        ctx.font = 'bold 16px Microsoft JhengHei';
        ctx.fillText(title.text, title.x, title.y);
    });

    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
}

// 绘制子类别标题（长方形）
function drawSubcategoryTitles() {
    const subcategories = [
        // 演算法与核心 - 三个子类别（对应三个垂直条的中心）
        { text: '特徵提取', x: 225, y: 217, color: 'rgba(100, 150, 220, 0.4)', width: 100 },
        { text: '哈密頓模擬', x: 475, y: 217, color: 'rgba(100, 150, 220, 0.5)', width: 110 },
        { text: '振幅放大', x: 725, y: 217, color: 'rgba(100, 150, 220, 0.4)', width: 90 },

        // 通讯协议 - 两个子类别
        { text: '密碼學', x: 950, y: 217, color: 'rgba(255, 140, 0, 0.45)', width: 100 },
        { text: '通訊', x: 1070, y: 217, color: 'rgba(255, 165, 0, 0.35)', width: 80 },

        // 纠错与容错 - 三个子类别
        { text: '糾錯', x: 1180, y: 217, color: 'rgba(60, 179, 113, 0.45)', width: 60 },
        { text: '容錯', x: 1260, y: 217, color: 'rgba(46, 139, 87, 0.35)', width: 60 },
        { text: '錯誤緩解', x: 1340, y: 217, color: 'rgba(34, 139, 34, 0.45)', width: 70 },

        // 硬体 - 两个子类别
        { text: 'Adiabatic', x: 1520, y: 217, color: 'rgba(230, 120, 120, 0.45)', width: 85 },
        { text: 'Gate-based', x: 1660, y: 217, color: 'rgba(230, 120, 120, 0.35)', width: 100 }
    ];

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    subcategories.forEach(sub => {
        const height = 28;

        // 绘制长方形
        ctx.fillStyle = sub.color;
        ctx.fillRect(sub.x - sub.width / 2, sub.y - height / 2, sub.width, height);

        // 绘制边框
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 2;
        ctx.strokeRect(sub.x - sub.width / 2, sub.y - height / 2, sub.width, height);

        // 绘制文字
        ctx.fillStyle = '#333';
        ctx.font = 'bold 11px Microsoft JhengHei';
        ctx.fillText(sub.text, sub.x, sub.y);
    });

    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
}

// 绘制HSP框和椭圆
function drawHSPBox() {
    const box = quantumData.hspBox;

    // 绘制不填充的深蓝色虚线框
    ctx.strokeStyle = 'rgba(70, 130, 180, 0.6)';
    ctx.lineWidth = 2.5;
    ctx.setLineDash([8, 4]);
    ctx.strokeRect(box.x, box.startY - 15, box.width, box.endY - box.startY);
    ctx.setLineDash([]);

    // 绘制右下角的HSP椭圆（实线）
    ctx.beginPath();
    ctx.ellipse(box.ellipseX, box.ellipseY, box.ellipseRx, box.ellipseRy, 0, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(70, 130, 180, 0.3)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(70, 130, 180, 0.9)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // 绘制HSP文字
    ctx.fillStyle = 'rgba(70, 130, 180, 1)';
    ctx.font = 'bold 13px Microsoft JhengHei';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(box.label, box.ellipseX, box.ellipseY);

    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
}

// 绘制误差线（时间范围线段）
function drawErrorBars() {
    // 收集所有带有endYear的节点
    const nodesWithRange = [];
    quantumData.categories.forEach(category => {
        category.subcategories.forEach(subcat => {
            subcat.items.forEach(item => {
                if (item.endYear) {
                    nodesWithRange.push({
                        ...item,
                        color: subcat.color
                    });
                }
            });
        });
    });

    // 绘制每个时间范围线
    nodesWithRange.forEach(node => {
        const startY = getYearY(node.year);
        const endY = getYearY(node.endYear);
        const centerX = node.x + 35;

        // 绘制垂直线段
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX, startY + 15);
        ctx.lineTo(centerX, endY);
        ctx.stroke();

        // 绘制底部横线
        ctx.beginPath();
        ctx.moveTo(centerX - 8, endY);
        ctx.lineTo(centerX + 8, endY);
        ctx.stroke();
    });
}

// 绘制连接线（已移除QSVT连接线，因为理论上所有演算法都可以规约成QSVT）
function drawConnections() {
    // 不再绘制连接线
}

// 绘制节点
function drawNodes() {
    quantumData.categories.forEach(category => {
        category.subcategories.forEach(subcat => {
            subcat.items.forEach(item => {
                drawNode(item, subcat.color);
            });
        });
    });
}

// 绘制单个节点（椭圆形）
function drawNode(node, bgColor) {
    const width = 70;
    const height = 30;
    const centerX = node.x + width / 2;
    const centerY = node.y + height / 2;

    // 检查是否是混合算法（VQE, QAOA）
    const isHybrid = node.isHybrid === true;

    // 绘制椭圆形
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, width / 2, height / 2, 0, 0, 2 * Math.PI);

    if (isHybrid) {
        // 混合算法：淡黄色底
        ctx.fillStyle = 'rgba(255, 255, 200, 0.9)';
    } else {
        ctx.fillStyle = bgColor;
    }
    ctx.fill();

    // 边框
    if (isHybrid) {
        // 混合算法：黄色边框
        ctx.strokeStyle = 'rgba(200, 180, 0, 0.9)';
        ctx.lineWidth = 2;
    } else {
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.4)';
        ctx.lineWidth = 1.5;
    }
    ctx.stroke();

    // 文字
    ctx.fillStyle = '#333';  // 黑色文字
    ctx.font = isHybrid ? 'bold 11px Microsoft JhengHei' : '11px Microsoft JhengHei';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // 自动换行
    const text = node.name;
    if (text.length > 8) {
        const mid = Math.ceil(text.length / 2);
        ctx.fillText(text.substring(0, mid), centerX, centerY - 6);
        ctx.fillText(text.substring(mid), centerX, centerY + 6);
    } else {
        ctx.fillText(text, centerX, centerY);
    }

    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
}

// 绘制 QSVT 特殊节点（横跨大椭圆）
function drawMasterpiece() {
    const node = quantumData.masterpiece;
    const centerX = node.x + node.width / 2;
    const centerY = node.y + node.height / 2;

    // 发光效果
    ctx.shadowColor = 'rgba(148, 87, 235, 0.5)';
    ctx.shadowBlur = 20;

    // 绘制大椭圆形背景
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, node.width / 2, node.height / 2, 0, 0, 2 * Math.PI);
    ctx.fillStyle = node.color;
    ctx.fill();

    ctx.shadowBlur = 0;

    // 边框
    ctx.strokeStyle = '#9457EB';
    ctx.lineWidth = 4;
    ctx.stroke();

    // 文字
    ctx.fillStyle = 'white';
    ctx.font = 'bold 28px Microsoft JhengHei';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(node.name, centerX, centerY);

    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
}

// 初始绘制
draw();

