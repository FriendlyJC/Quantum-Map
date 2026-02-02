// 絕熱量子計算 - 節點資料
// 包含: D-Wave

const adiabaticData = {
    // 節點位置配置
    items: [
        { name: 'D-Wave', year: 2011, x: 1365, y: 975 }
    ],

    // 節點詳細資料
    details: {
        'D-Wave': {
            name: 'D-Wave Systems (2011)',
            author: 'D-Wave Systems Inc.',
            goal: '商業化的絕熱量子電腦',
            concept: 'D-Wave 是第一個商業化的量子電腦公司，專注於絕熱量子計算和量子退火。',
            process: `D-Wave 的量子電腦使用量子退火 (Quantum Annealing) 來解決優化問題。

<strong>特點：</strong>
• 專注於優化問題
• 使用超導量子位元
• 非通用量子電腦

<strong>應用領域：</strong>
• 機器學習
• 優化
• 財務建模`,
            imageSource: ''
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = adiabaticData;
}
