/**
 * Quantum Map - 模組化資料索引檔案
 * 
 * 此檔案統一導入所有子模組資料，組合成完整的 quantumData 結構
 * 供 app.js 使用
 * 
 * 使用方式: 在 index.html 中按順序引入各 JS 檔案，最後引入此檔案
 */

// 注意：在瀏覽器環境中，各模組檔案需先被引入
// 此檔案假設以下全域變數已存在：
// - mapData (from map.js)
// - coreToolData (from CoreTool.js)
// - featureData (from Feature.js)
// - hamiltonianData (from Hamiltonian.js)
// - amplificationData (from Amplification.js)
// - protocolData (from Protocol.js)
// - cryptographyData (from Cryptography.js)
// - communicationData (from Communication.js)
// - correctionData (from Correction.js)
// - errorCodeData (from ErrorCode.js)
// - toleranceData (from Tolerance.js)
// - hardwareData (from Hardware.js)
// - adiabaticData (from Adiabatic.js)
// - gateBasedData (from GateBased.js)

// 完整的量子資料物件組合
// 此區塊示範如何將模組化資料重新組合成原始 data.js 的結構
// 實際整合時需要根據 app.js 的需求進行調整

/*
const quantumData = {
    // 從 map.js 取得主標題資訊
    titleDetails: {
        '量子電腦': mapData.quantumComputer,
        '演算法與核心': mapData.categories['演算法與核心'],
        '通訊協議': mapData.categories['通訊協議'],
        '糾錯與容錯': mapData.categories['糾錯與容錯'],
        '硬體': mapData.categories['硬體']
    },

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
                    name: '密碼學',
                    color: 'rgba(255, 140, 0, 0.3)',
                    items: cryptographyData.items
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

    // 特殊元素
    masterpiece: coreToolData.mapConfig.masterpiece,
    hspBox: coreToolData.mapConfig.hspBox,

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
*/

// 模組結構說明
console.log('Quantum Map 模組化資料已載入');
console.log('可用模組: mapData, coreToolData, featureData, hamiltonianData, amplificationData');
console.log('          protocolData, cryptographyData, communicationData');
console.log('          correctionData, errorCodeData, toleranceData');
console.log('          hardwareData, adiabaticData, gateBasedData');
