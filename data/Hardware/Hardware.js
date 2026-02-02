// 硬體 - 分類介紹
const hardwareData = {
    // 子分類介紹
    subcategories: {
        '絕熱': {
            name: '絕熱',
            description: '絕熱量子計算 (Adiabatic Quantum Computing) 通過緩慢演化系統哈密頓量來求解優化問題。'
        },
        '門電路': {
            name: '門電路',
            description: '門電路模型 (Gate-based) 是最常見的量子計算模型，通過一系列量子閘操作來執行計算。包括各種物理實現平台如超導、離子阱、光子等。'
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = hardwareData;
}
