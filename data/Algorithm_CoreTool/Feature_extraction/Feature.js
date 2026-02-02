// 特徵提取與頻譜分析 - 節點資料
// 包含: Deutsch, D-Jozsa, Simon, Shor, QFT, PKB, QPE, Q PCA, HHL, QMI, QSVE

const featureData = {
    // 節點位置配置
    items: [
        { name: 'Deutsch', year: 1985, x: 180, y: 325 },
        { name: 'D-Jozsa', year: 1992, x: 180, y: 500 },
        { name: 'Simon', year: 1994, x: 120, y: 550 },
        { name: 'Shor', year: 1994, x: 185, y: 550 },
        { name: 'QFT', year: 1994, endYear: 1998, x: 250, y: 550 },
        { name: 'PKB', year: 1998, x: 210, y: 650 },
        { name: 'QPE', year: 1995, x: 180, y: 575 },
        { name: 'Q PCA', year: 2014, x: 220, y: 1050 },
        { name: 'HHL', year: 2009, x: 260, y: 925 },
        { name: 'QMI', year: 2009, endYear: 2019, x: 180, y: 925 },
        { name: 'QSVE', year: 2016, x: 260, y: 1100 }
    ],

    // 節點詳細資料
    details: {
        'Deutsch': {
            type: 'algorithm',
            name: "Deutsch's Algorithm (1985)",
            author: 'David Deutsch',
            goal: '判斷單bit函數為常數函數或平衡函數',
            concept: `關鍵字：疊加平行運算、相位回彈、相位干涉

1. 利用 H 閘同時處理所有疊加輸入，形成對 oracle 的平行查詢。
2. 經過 oracle 黑盒運算，將「函數值的一致性」編碼為整體相位。
3. 透過干涉，若相位一致則表示常數函數，若不同相位則干涉抵銷表示平衡函數。`,
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `輸入為 $x \\in \\{0,1\\}$，函數運算 $f(x)$

<strong>常數函數：</strong>輸出結果都相同。
<strong>平衡函數：</strong>輸出結果為0跟輸出結果為1的次數相同。

<strong>文獻：</strong>"Quantum theory, the Church-Turing principle and the universal quantum computer"(1985)`,
            story: `此演算法為**首個證明**量子計算比古典電腦更有優勢。`,
            imageSource: 'https://www.researchgate.net/figure/The-Deutsch-Algorithm_fig2_342979428'
        },

        'D-Jozsa': {
            type: 'algorithm',
            name: 'Deutsch-Jozsa Algorithm (1992)',
            author: 'David Deutsch & Richard Jozsa',
            goal: '判斷 $n$ 位元函數是常數函數還是平衡函數',
            concept: `關鍵字：疊加平行運算、相位回彈、相位干涉

擴展了 Deutsch 演算法到 n 位元。`,
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `古典需要 $N/2 + 1$ 次查詢才可判斷，量子只需 1 次即可判斷。展現指數級優勢。

<strong>文獻：</strong>"Rapid solution of problems by quantum computation"(1992)`,
            story: `擴展了 Deutsch 演算法。展現指數級優勢。`,
            imageSource: 'https://en.wikipedia.org/wiki/Deutsch%E2%80%93Jozsa_algorithm'
        },

        'Simon': {
            type: 'algorithm',
            name: "Simon's Algorithm (1994)",
            author: 'Daniel R. Simon',
            goal: '尋找二對一函數 $f(x) = f(x \\oplus s)$ 中的隱藏數字 $s$',
            concept: `關鍵字：疊加平行運算、相位回彈、相位干涉

將「輸入之間的等價關係」編碼為量子態的相位／子空間結構。`,
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `$\\oplus$：表示二進制XOR運算

<strong>文獻：</strong>"On the power of quantum computation"`,
            story: `提供 Shor 演算法靈感。在「黑盒子」問題中，證明量子比古典有指數級加速。`,
            imageSource: ''
        },

        'Shor': {
            type: 'algorithm',
            name: "Shor's Algorithm (1994)",
            author: 'Peter W. Shor',
            goal: '整數質因數分解 (Factoring) / 離散對數',
            concept: `關鍵字：QFT、週期查找、模運算、求階問題

將原本的質因數分解問題，轉成週期與求階問題，讓量子電腦快速算出質因數。`,
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `<strong>1. 週期尋找(Period finding)</strong>
<strong>2. 模運算(同餘)</strong>
<strong>3. 求階問題(Order finding)</strong>
<strong>4. 連分式(Continued Fraction)</strong>

<strong>文獻：</strong>"Algorithms for quantum computation: discrete logarithms and factoring" (1994)`,
            story: `是**首個**在現實已有問題中**實際應用價值**的量子計算演算法！作為擊破(RSA)的殺手級應用。`,
            imageSource: 'https://profmcruz.wordpress.com/wp-content/uploads/2017/08/quantum-computation-and-quantum-information-nielsen-chuang.pdf'
        },

        'QFT': {
            type: 'tool',
            name: 'Quantum Fourier Transform (1994-1998)',
            author: 'Artur Ekert, Richard Jozsa, Cleve et al.',
            goal: '在量子態上執行傅立葉變換',
            concept: '基底變換、相位累積',
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `將振幅編碼轉換為相位編碼 (Time domain → Frequency domain)。

古典快速傅立葉變換(FFT)需複雜度：$O(N\\log(N))$
量子傅立葉變換(QFT)只需：$O(\\log(N)^2)$

<strong>文獻：</strong>"An approximate Fourier transform useful in quantum factoring"`,
            story: `為眾多**演算法的核心工具**，例如：Shor、QPE、...`,
            imageSource: 'https://profmcruz.wordpress.com/wp-content/uploads/2017/08/quantum-computation-and-quantum-information-nielsen-chuang.pdf'
        },

        'PKB': {
            type: 'tool',
            name: 'Phase KickBack (1998)',
            author: 'Cleve, Ekert, Macchiavello, Mosca',
            goal: '相位反沖技術',
            concept: '讓受控(目標)位元的特徵值(相位)反彈到控制位元上',
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `Phase KickBack 在線性代數上本質的概念只是純量交換率與基底展開。

<strong>文獻：</strong>"Quantum algorithms revisited"(1998)`,
            story: `在先前與後續許多演算法都使用到回彈與相位干涉性。`,
            imageSource: 'https://quantumcomputing.stackexchange.com/questions/26960/does-phase-kickback-require-the-system-to-be-in-the-eigenstate'
        },

        'QPE': {
            type: 'tool',
            name: 'Quantum Phase Estimation (1995)',
            author: 'Kitaev et al.',
            goal: '估計 U 算子的特徵值/讀取 $e^{-i\\phi t}$ 的相位 $\\phi$',
            concept: `疊加態、相位回彈、逆傅立葉

讓 U 算子的特徵值透過逆傅立葉變成基底資訊讀出。`,
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `透過疊加與受控運算，使得電路設計只需使用 $U^{2^{t-1}}$ 即可組合出所有階組合的電路。

<strong>文獻：</strong>"Quantum measurements and the Abelian Stabilizer Problem"(1995)`,
            story: `相位估計是許多算法提取運算結果的核心。`,
            imageSource: 'https://profmcruz.wordpress.com/wp-content/uploads/2017/08/quantum-computation-and-quantum-information-nielsen-chuang.pdf'
        },

        'Q PCA': {
            type: 'algorithm',
            name: 'Quantum Principal Component Analysis (2014)',
            author: 'Seth Lloyd, Masoud Mohseni, Patrick Rebentrost',
            goal: '在量子電腦上對高維度數據進行主成分分析 (PCA)。',
            concept: `關鍵字：密度矩陣/ 相位估計

1. 密度矩陣映射
2. 密度矩陣指數化
3. 相位估計 (QPE)`,
            computation: '',
            supplement: `• 指數加速：古典 PCA 對 $N$ 維矩陣分解需要 $O(N^2)$ 或 $O(N^3)$；QPCA 只需要 $O(\\log N)$。
• qRAM 瓶頸：前提是必須能將大量古典數據快速載入成量子態。

<strong>文獻：</strong>"Quantum principal component analysis"`,
            story: `這篇論文是 Seth Lloyd 繼 HHL 之後在量子機器學習領域的又一力作。`,
            imageSource: ''
        },

        'HHL': {
            type: 'algorithm',
            name: 'HHL Algorithm (2009)',
            author: 'Harrow, Hassidim, Lloyd',
            goal: '給定矩陣A 與結果b，$A\\mathbf{x} = \\mathbf{b}$ 求解線性方程解 $\\mathbf{x}$',
            concept: `關鍵字：QPE、受控旋轉、逆QPE

做出A的逆矩陣作用到b即可獲得x`,
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `<strong>當前挑戰：</strong>
1. 把古典b編碼成量子態本身耗時
2. 輸出狀態需要測量統計讀取
3. 僅限於A為Hermitian

<strong>文獻：</strong>"Quantum algorithm for linear systems of equations" (2009)`,
            story: `2009年，MIT的三位研究者在Nature上發表了這個突破性算法。這是量子機器學習和量子數值計算領域的開創性工作。`,
            imageSource: 'https://www.researchgate.net/figure/Quantum-circuit-of-the-HHL-algorithm_fig2_358996216'
        },

        'QMI': {
            type: 'framework',
            name: 'Quantum Matrix Inversion (2009-2019)',
            author: 'Gilyén, Su, Low, Wiebe et al.',
            goal: '給定矩陣A 與結果b，$A\\mathbf{x} = \\mathbf{b}$ 求解線性方程解 $\\mathbf{x}$',
            concept: `關鍵字：Block Encoding、QSVT、多項式逼近 ($1/x$)

1. 多項式轉換
2. 區塊編碼 (Block Encoding)
3. 直接演化`,
            computation: '',
            supplement: `<strong>與 HHL 的區別 (改良點)：</strong>
• 精度更高
• 電路更淺
• 不需要 Hamiltonian 模擬

<strong>文獻：</strong>"Quantum algorithm for linear systems of equations" (2009)`,
            story: `如果 HHL 是第一代「原型機」，那麼基於 QSVT 的 QMI 就是「量產機」。`,
            imageSource: ''
        },

        'QSVE': {
            type: 'algorithm',
            name: 'Quantum Singular Value Estimation (2016)',
            author: 'Iordanis Kerenidis, Anupam Prakash',
            goal: '估計一個非 Hermitian (一般長方形) 矩陣 $A$ 的奇異值 $\\sigma$',
            concept: `關鍵字：SVD奇異值分解/ 量子漫步QW/ 相位估計

1. 奇異值分解 (SVD)
2. 量子漫步算符
3. 相位估計`,
            computation: '',
            supplement: `<strong>推薦系統 (Recommendation Systems)：</strong>QSVE 是著名的「量子推薦系統演算法」的核心。

<strong>文獻：</strong>"Quantum Recommendation Systems" (2016)`,
            story: `如果說 QPE 是處理「方陣」的利器，那 QSVE 就是處理「真實世界數據」的鑰匙。`,
            imageSource: ''
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = featureData;
}
