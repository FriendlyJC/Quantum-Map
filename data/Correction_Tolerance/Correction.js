// 糾錯與容錯 - 分類介紹
const correctionData = {
    // 子分類介紹
    subcategories: {
        '糾錯': {
            name: '糾錯',
            description: '量子糾錯碼利用冗餘編碼來保護量子資訊，常見的包括 Shor code、Steane code、Surface code 等。'
        },
        '容錯': {
            name: '容錯',
            description: '容錯量子計算確保即使在糾錯過程中發生錯誤，也不會讓災難擴散，使我們能突破 NISQ 的硬體極限。'
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = correctionData;
}
