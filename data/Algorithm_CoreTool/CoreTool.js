// 演算法與核心 - 分類介紹 + QSVT + HSP
const coreToolData = {
    // 三個子分類介紹
    subcategories: {
        '特徵提取': {
            name: '特徵提取',
            description: '本區的演算法核心目標概念為找尋答案的結構、頻譜分析等，可以總結為提取其中的特徵。對應量子的波動性。'
        },
        '哈密頓模擬': {
            name: '哈密頓模擬',
            description: `本區的概念最接近當時費曼所構想的量子電腦，即使用量子來模擬量子系統（或其他系統）的哈密頓量，並求解動態與靜態的目標。

<strong>補充：</strong>

• <strong>動態演化：</strong>系統初始 $t=0$ 的狀態 $|\\varphi_0\\rangle$ 受哈密頓量作用，經過時間 $t$ 後演化成狀態 $|\\varphi_t\\rangle$

• <strong>靜態求解：</strong>某個哈密頓量描述的系統 $H$，求解其在什麼狀態組合 $|\\varphi\\rangle$ 時的系統能量最低，以及最低能量 $E_0$ 為多少。`
        },
        '振幅放大': {
            name: '振幅放大',
            description: '透過振幅放大算法，讓欲測量到的目標機率放大，提升量子電腦運算的成功率。對應量子的幾何結構。'
        }
    },

    // HSP 框架
    HSP: {
        type: 'framework',
        name: 'Hidden Subgroup Problem (1995)',
        author: 'Ettinger, Høyer, Knill, Mosca et al.',
        goal: '從數學本質上歸納某一類演算法的運算問題類型(即隱藏的子群)',
        concept: '從數學本質上歸納某一類演算法的運算問題類型(即隱藏的子群)',
        computation: `待補充 (原始內容過長，請從原始 data.js 中複製)`,
        supplement: `Deutsch/ Deutsch-Jorza/ Simon/ Shor(因式分解)/ 週期查找/ 離散對數...等問題都能規約為HSP問題。

<strong>文獻：</strong>"Quantum algorithms for solving problems with the hidden subgroup structure" (1995)`,
        story: `在 Shor 演算法出現後，學界回頭重新理解量子加速本質時，由量子計算社群逐步抽象總結所提出的統一數學框架。`,
        imageSource: 'https://en.photo-ac.com/photo/24233602/my-self'
    },

    // QSVT 集大成者
    QSVT: {
        type: 'framework',
        name: 'Quantum Singular Value Transformation (2019)',
        author: 'András Gilyén, Yuan Su, Guang Hao Low, Nathan Wiebe',
        goal: '對任意矩陣 $A$ 的奇異值進行任意多項式函數變換 $P(\\sigma)$。',
        concept: `關鍵字：LCU/ Block Encoding/ QSP/ SVD奇異值分解

Block Encoding + QSP：將一個大矩陣 $A$ 透過 Block Encoding 嵌入電路，然後利用 QSP 的技術（Signal Processing Rotations）來處理這個大矩陣。
奇異值變換：矩陣 $A$ 的每個奇異值 $\\sigma_i$ 都會被映射為 $P(\\sigma_i)$。$$A = \\sum \\sigma_i |u_i\\rangle\\langle v_i| \\xrightarrow{QSVT} P(A) = \\sum P(\\sigma_i) |u_i\\rangle\\langle \\tilde{v}_i|$$
多項式奇蹟：只要你能找到一個多項式 $P(x)$ 近似你想做的功能（如 $1/x, e^{-ix}, \\sqrt{x}$），QSVT 就能幫你實作出來。`,
        computation: `<strong>核心思想：</strong>對矩陣的奇異值應用多項式變換

給定矩陣 $A$ 的區塊編碼和多項式 $P$，QSVT可以實現：

$$\\tilde{U} = \\begin{pmatrix} P(A) & \\cdot \\\\ \\cdot & \\cdot \\end{pmatrix}$$

<strong>量子訊號處理（QSP）：</strong>

使用相位序列 $\\Phi = (\\phi_0, \\phi_1, ..., \\phi_d)$ 構造：

$$U(\\Phi) = e^{i\\phi_0 Z} \\prod_{k=1}^{d} W e^{i\\phi_k Z}$$

可以實現任意度數 $d$ 的多項式變換。`,
        supplement: `QSVT框架統整了先前所有算法(古典電腦結合的除外)。
舊演算法為QSVT電路架構的特例，例如改變輸入狀態、旋轉閘的角度組合等，就能達成某個演算法的運算。

萬能鑰匙：Grover 是 QSVT 的 $P(x)$ 為低階多項式特例；HHL 是 $P(x)=1/x$ 的特例；哈密頓模擬是 $P(x)=e^{-ixt}$ 的特例。
最優性：已經證明 QSVT 在查詢複雜度 (Query Complexity) 上達到了理論極限。

<strong>文獻：</strong>"Quantum singular value transformation and beyond: exponential improvements for quantum matrix arithmetics" (2019)`,
        story: `比喻來說，先前的演算法屬於ASIC，每個算法對應一組電路。而QSVT為量子版FPGA，同樣電路架構改變參數即可運算不同演算法。

這是量子演算法發展史上的高光時刻。2019 年這篇論文證明了，過去二十年來發明的幾十種看似互不相關的量子演算法，其實全都是**「矩陣奇異值的多項式變換」**。`,
        imageSource: 'https://en.photo-ac.com/photo/24233602/my-self'
    },

    // 地圖節點位置配置
    mapConfig: {
        masterpiece: {
            name: 'QSVT',
            year: 2019,
            x: 200,
            y: 1170,
            width: 550,
            height: 60,
            color: 'rgba(148, 87, 235, 0.9)'
        },
        hspBox: {
            label: 'HSP',
            name: 'HSP',
            year: 1995,
            startY: 310,
            endY: 610,
            x: 105,
            width: 280,
            ellipseX: 320,
            ellipseY: 595,
            ellipseRx: 35,
            ellipseRy: 20
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = coreToolData;
}
