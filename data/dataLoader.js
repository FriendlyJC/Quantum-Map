/**
 * Quantum Map - 資料整合檔案
 * 
 * 此檔案將所有模組化資料組合成 app.js 所需的 quantumData 結構
 * 確保 app.js 可以正常運作而不需任何修改
 */

// 組合完整的 quantumData 物件（與原本 data.js 結構完全相同）
const quantumData = {
    // 分類結構
    categories: [
        {
            id: 'algorithm',
            name: '演算法與核心',
            color: 'rgba(100, 150, 220, 0.3)',
            subcategories: [
                {
                    name: '特徵提取與頻譜分析',
                    color: 'rgba(70, 130, 180, 0.3)',
                    items: featureData.items
                },
                {
                    name: '哈密頓模擬',
                    color: 'rgba(100, 149, 237, 0.3)',
                    items: hamiltonianData.items
                },
                {
                    name: '振幅放大',
                    color: 'rgba(135, 206, 250, 0.3)',
                    items: amplificationData.items
                }
            ]
        },
        {
            id: 'communication',
            name: '通訊協議',
            color: 'rgba(255, 160, 100, 0.3)',
            subcategories: [
                {
                    name: '不可複製',
                    color: 'rgba(255, 200, 100, 0.3)',
                    items: [cryptographyData.items[0]] // 只有不可複製原理
                },
                {
                    name: '密碼學',
                    color: 'rgba(255, 140, 0, 0.3)',
                    items: cryptographyData.items.slice(1) // 其餘密碼學節點
                },
                {
                    name: '通訊',
                    color: 'rgba(255, 165, 0, 0.3)',
                    items: communicationData.items
                }
            ]
        },
        {
            id: 'error-correction',
            name: '糾錯與容錯',
            color: 'rgba(130, 200, 130, 0.3)',
            subcategories: [
                {
                    name: '糾錯',
                    color: 'rgba(60, 179, 113, 0.3)',
                    items: errorCodeData.items
                },
                {
                    name: '容錯',
                    color: 'rgba(46, 139, 87, 0.3)',
                    items: toleranceData.items
                }
            ]
        },
        {
            id: 'hardware',
            name: '硬體',
            color: 'rgba(230, 120, 120, 0.3)',
            subcategories: [
                {
                    name: '絕熱',
                    color: 'rgba(220, 20, 60, 0.3)',
                    items: adiabaticData.items
                },
                {
                    name: '門電路',
                    color: 'rgba(178, 34, 34, 0.3)',
                    items: gateBasedData.items
                }
            ]
        }
    ],

    // 特殊元素 - QSVT 跨區塊框
    masterpiece: coreToolData.mapConfig.masterpiece,

    // 特殊元素 - HSP 框
    hspBox: coreToolData.mapConfig.hspBox,

    // 標題詳細資料
    titleDetails: {
        '量子電腦': mapData.quantumComputer,
        '演算法與核心': mapData.categories['演算法與核心'],
        '通訊協議': mapData.categories['通訊協議'],
        '糾錯與容錯': mapData.categories['糾錯與容錯'],
        '硬體': mapData.categories['硬體'],
        '特徵提取與頻譜分析': coreToolData.subcategories['特徵提取'],
        '哈密頓模擬': coreToolData.subcategories['哈密頓模擬'],
        '振幅放大': coreToolData.subcategories['振幅放大'],
        '不可複製': protocolData.subcategories['不可複製'],
        '密碼學': protocolData.subcategories['密碼學'],
        '通訊': protocolData.subcategories['通訊'],
        '糾錯': correctionData.subcategories['糾錯'],
        '容錯': correctionData.subcategories['容錯'],
        '絕熱': hardwareData.subcategories['絕熱'],
        '門電路': hardwareData.subcategories['門電路']
    },

    // 合併所有節點詳細資料
    details: Object.assign({},
        featureData.details,
        hamiltonianData.details,
        amplificationData.details,
        cryptographyData.details,
        communicationData.details,
        errorCodeData.details,
        toleranceData.details,
        adiabaticData.details,
        gateBasedData.details,
        { 'HSP': coreToolData.HSP },
        { 'QSVT': coreToolData.QSVT }
    )
};

// 為所有項目添加默認詳細信息（與原本 data.js 相同的邏輯）
quantumData.categories.forEach(category => {
    category.subcategories.forEach(subcat => {
        subcat.items.forEach(item => {
            if (!quantumData.details[item.name]) {
                quantumData.details[item.name] = {
                    name: item.name,
                    goal: `${item.name} 的研究目標`,
                    concept: `${item.name} 的核心概念與原理`,
                    circuit: '量子電路圖示意（待補充）',
                    process: `${item.name} 的電路流程說明`
                };
            }
        });
    });
});

console.log('Quantum Map 模組化資料載入完成，quantumData 已準備就緒');
