// 錯誤緩解 - 節點資料
// Error Mitigation techniques for NISQ era

const mitigationData = {
    // 節點位置配置（預留給未來節點）
    items: [
        // 未來可新增節點，例如：
        // { name: 'Zero-Noise Extrapolation', year: 2017, x: 1340, y: 400 },
        // { name: 'Probabilistic Error Cancellation', year: 2017, x: 1340, y: 450 },
        // { name: 'Clifford Data Regression', year: 2020, x: 1340, y: 500 }
    ],

    // 節點詳細資料
    details: {
        // 預留給未來節點詳細資訊
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mitigationData;
}
