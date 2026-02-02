// 通訊協議 - 分類介紹
const protocolData = {
    // 子分類介紹
    subcategories: {
        '密碼學': {
            name: '密碼學',
            description: '量子密碼學利用量子力學特性實現資訊理論安全的通訊協議，主要包括量子密鑰分發(QKD)等技術。'
        },
        '通訊': {
            name: '通訊',
            description: '量子通訊協議包括超密集編碼、量子隱形傳態、糾纏交換等，實現量子資訊的傳輸與處理。'
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = protocolData;
}
