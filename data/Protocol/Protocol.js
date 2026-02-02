// 通訊協議 - 分類介紹
const protocolData = {
    // 子分類介紹
    subcategories: {
        '不可複製': {
            name: '不可複製',
            description: '量子不可複製原理是量子力學的基本定理，說明未知的量子態無法被完美複製，這是量子密碼學安全性的基礎。'
        },
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
