// 振幅放大 - 節點資料
// 包含: Grover, AA, AE, Fixed-AA

const amplificationData = {
    // 節點位置配置
    items: [
        { name: 'Grover', year: 1996, x: 690, y: 600 },
        { name: 'AA', year: 1997, endYear: 2000, x: 690, y: 625 },
        { name: 'AE', year: 2000, x: 690, y: 700 },
        { name: 'Fixed-AA', year: 2014, x: 690, y: 1050 }
    ],

    // 節點詳細資料
    details: {
        'Grover': {
            type: 'algorithm',
            name: "Grover's Algorithm (1996)",
            author: 'Lov K. Grover',
            goal: '在無結構資料庫中搜尋特定標記的項目。',
            concept: `將狀態看成目標+非目標兩組正交狀態，先給予目標負相位，再以均勻疊加態做反射得到第一次Grover運算，重複數次使目標得到最高機率。

Oracle (黑盒)：識別正確答案，將目標狀態的相位翻轉。
擴散算符 (Diffusion Operator)：關於平均值的反射。
幾何旋轉：將搜尋過程視為在2D平面上旋轉。`,
            computation: `<strong>問題：</strong>在 $N$ 個項目中找到滿足條件的項目

<strong>步驟1：</strong>初始化為均勻疊加態

$$|\\psi\\rangle = H^{\\otimes n}|0\\rangle^{\\otimes n} = \\frac{1}{\\sqrt{N}}\\sum_{x=0}^{N-1}|x\\rangle$$

<strong>步驟2：</strong>Grover迭代（重複 $O(\\sqrt{N})$ 次）

a) Oracle標記
b) Diffusion擴散算子

<strong>步驟3：</strong>測量得到目標態`,
            supplement: `二次方加速：古典需要 $O(N)$，量子只需 $O(\\sqrt{N})$。

過度旋轉 (Over-rotation)：如果旋轉次數太多，成功率反而會下降。

<strong>文獻：</strong>"A fast quantum mechanical algorithm for database search" (1996)`,
            story: `這是繼 Shor 演算法之後的第二顆震撼彈。它改變了人們對量子優勢廣度的看法。`,
            imageSource: 'https://www.researchgate.net/figure/The-Grovers-algorithm-circuit_fig1_355342607'
        },

        'AA': {
            type: 'tool',
            name: 'Amplitude Amplification (1997-2000)',
            author: 'Gilles Brassard, Peter Høyer, Michele Mosca, Alain Tapp',
            goal: '將 Grover 演算法一般化，提高任何量子演算法成功量測到目標狀態的機率。',
            concept: `通用算符 $\\mathcal{A}$：不再限制於均勻疊加態，適用於任何演算法製備出的初始狀態。
廣義 Grover 迭代：定義 $Q = - \\mathcal{A} S_0 \\mathcal{A}^{-1} S_\\chi$。
機率提升：如果原本成功的機率是 $p$，經過 $O(1/\\sqrt{p})$ 次迭代後，成功率可接近 100%。`,
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `Oblivious AA：前幾題提到的「不知情振幅放大」，是 AA 的一個變體，專門用於哈密頓模擬等 Unitary 操作的機率恢復。

<strong>文獻：</strong>"Quantum Amplitude Amplification and Estimation"(2000)`,
            story: `Brassard 等人將「振幅的幾何旋轉」概念提取出來，發明了 AA。從此，Grover 不再只是一個獨立的搜尋演算法，而變成了一個可以掛載在其他演算法後面的標準插件。`,
            imageSource: ''
        },

        'AE': {
            type: 'tool',
            name: 'Amplitude Estimation (2000)',
            author: 'Gilles Brassard, Peter Høyer, Michele Mosca, Alain Tapp',
            goal: '估算出目標出現的機率（或數量）。即 Quantum Counting。',
            concept: `關鍵字：QPE/ Grover

Grover 算符 $Q$ 的特徵值與目標機率 $p$ 有關。
相位估計：使用 QPE 來估計 Grover 算符的特徵相位 $\\theta$。
反推機率：由測得的 $\\theta$ 推算出振幅大小或機率。`,
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `原本計算機率的方式，是使用多次測量統計結果。AE將振幅資訊轉換為相位資訊並測出。
古典需要 $N$ 次採樣，AE 只需要 $\\sqrt{N}$ 次運算。

量子蒙地卡羅 (Quantum Monte Carlo)：這是 AE 最重要的應用。對金融衍生品定價、風險評估極具價值。

<strong>文獻：</strong>"Quantum Amplitude Amplification and Estimation" (2000)`,
            story: `如果說 AA 是「大海撈針」，那 AE 就是「不用撈針，也能算出海裡有幾根針」。這讓量子電腦的應用從單純的「找解」擴展到了「數值積分」與「統計估計」領域。`,
            imageSource: 'https://www.nature.com/articles/s41534-021-00379-1'
        },

        'Fixed-AA': {
            type: 'tool',
            name: 'Fixed-Point Amplitude Amplification (2014)',
            author: 'T.J. Yoder, G.H. Low, I.L. Chuang',
            goal: '解決傳統 Grover/AA 的「過度旋轉」問題，在不知道確切成功機率的情況下也能穩定收斂。',
            concept: `1. 失去振盪 (Loss of oscillation)：設計特殊的遞迴相位序列，讓機率曲線呈現單調上升。
2. 定點性質：一旦機率接近 1，它就會停在那裡，即使多做幾次運算也不會變壞。
3. 保留相位資訊：是構建 QSP 和解線性方程等非么正演算法的關鍵技術。`,
            computation: '',
            supplement: `<strong>文獻：</strong>"Fixed-point quantum search with an optimal number of queries" (2014)`,
            story: `這是 Low & Chuang 在發展 QSP/QSVT 過程中的重要前置工作。沒有 Fixed-AA，許多現代演算法的容錯率會很低。

傳統 Grover 演算法就像烤舒芙蕾，時間要抓得剛剛好。MIT 團隊發明的 Fixed-AA 則像是一個有溫控的烤箱。`,
            imageSource: 'https://www.nature.com/articles/s41598-022-15093-x'
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = amplificationData;
}
