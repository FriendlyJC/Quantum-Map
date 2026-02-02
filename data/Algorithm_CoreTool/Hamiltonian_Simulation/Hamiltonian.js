// 哈密頓模擬 - 節點資料
// 包含: BQP, QRW, Trotterized, Adiabatic, DTQW, BCH, CTQW, LCU, Taylor, VQE, QAOA, QSP, Block

const hamiltonianData = {
    // 節點位置配置
    items: [
        { name: 'BQP', year: 1993, x: 430, y: 525 },
        { name: 'QRW', year: 1993, x: 520, y: 525 },
        { name: 'Trotterized', year: 1996, x: 430, y: 600 },
        { name: 'Adiabatic', year: 2000, x: 430, y: 700 },
        { name: 'DTQW', year: 2004, endYear: 2012, x: 520, y: 800 },
        { name: 'BCH', year: 2005, endYear: 2007, x: 420, y: 825 },
        { name: 'CTQW', year: 1998, x: 430, y: 650 },
        { name: 'LCU', year: 2012, x: 430, y: 1000 },
        { name: 'Taylor', year: 2012, x: 520, y: 1000 },
        { name: 'VQE', year: 2014, x: 430, y: 1050, isHybrid: true },
        { name: 'QAOA', year: 2014, x: 520, y: 1050, isHybrid: true },
        { name: 'QSP', year: 2016, x: 520, y: 1100 },
        { name: 'Block', year: 2016, endYear: 2019, x: 430, y: 1100 }
    ],

    // 節點詳細資料
    details: {
        'BQP': {
            type: 'framework',
            name: 'BQP Complexity Class (1993)',
            author: 'Ethan Bernstein, Umesh Vazirani',
            goal: '定義量子電腦運算的極限與能力範圍',
            concept: '定義了量子電腦運算的極限與能力範圍',
            computation: '(詳細內容請參考原始 data.js)',
            supplement: `B (Bounded-error)：容許有錯誤，但錯誤率低於 1/3。
Q (Quantum)：使用量子電腦。
P (Polynomial)：在多項式時間內完成。

階層關係：$P \\subseteq BQP \\subseteq PSPACE$

<strong>文獻：</strong>"Quantum complexity theory" (1993)`,
            story: `Bernstein 和 Vazirani 這兩位電腦科學家站出來劃下了界線，定義了 BQP。`,
            imageSource: 'https://www.researchgate.net/figure/NP-Complete-problems-are-outside-the-BQP-class-meaning-that-quantum-computers-can-not_fig1_371318355'
        },

        'QRW': {
            type: 'tool',
            name: 'Quantum Random Walk (1993)',
            author: 'Yakir Aharonov, Lorenzo Davidovich, Noah Zagury',
            goal: '探討量子疊加跟干涉的隨機行走',
            concept: `定義硬幣算符C(Coin)、位移算符S(Shift)
丟硬幣決定下一步為一方向`,
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `量子演化須滿足可逆，因此只有位移算符來行走不可逆，加入硬幣算符就能知道是丟到哪個硬幣而走這條路到a點(可逆)。

<strong>文獻：</strong>"Quantum random walks" (1993)`,
            story: `1993的 QRW 只是純粹從隨機行走的理念出發，直到後來才應用於圖論與哈密頓模擬。`,
            imageSource: 'https://ibco.com.tw/turing-college/%E9%87%8F%E5%AD%90%E8%A1%8C%E8%B5%B0%E8%A8%88%E7%AE%97Quantum-Walk-Computing%E7%9A%84%E9%9D%A9%E5%91%BD%E6%80%A7%E7%AA%81%E7%A0%B4%E7%90%86%E8%AB%96%E5%AF%A6%E7%8F%BE%E8%88%87%E6%87%89%E7%94%A8/'
        },

        'Trotterized': {
            type: 'method',
            name: 'Hamiltonian Simulation (Trotterized) (1996)',
            author: 'Seth Lloyd',
            goal: '證明Gate-Based的量子電腦可做哈密頓模擬',
            concept: `使用Trotter方法引入 $t$ 變數令 $t$ 很小，帶入BCH公式後可忽略多次項，使得複雜的哈密頓量可以看成對局部量子位元的閘操作而可行。`,
            computation: '閱讀附錄(待提供)',
            supplement: `1. 哈密頓量H：材料、組合問題等...都能描述成哈密頓量
2. 含時間演化的薛丁格方程
3. 泰勒展開定義
4. 交換子 (Commutator)

<strong>文獻：</strong>"Universal Quantum Simulators" (1996)`,
            story: `首次證明當初費曼提出的哈密頓模擬想法可行`,
            imageSource: 'https://youtu.be/97JsjncDQAk?si=p6hCIwjaVfQveFpW'
        },

        'Adiabatic': {
            type: 'method',
            name: 'Adiabatic Quantum Computing (2000)',
            author: 'Farhi et al.',
            goal: '提供哈密頓模擬的另類方法',
            concept: `系統隨時間緩慢變化時，會始終留在基態上演化，保證結果為基態(最低)能量與狀態`,
            computation: '',
            supplement: `<strong>文獻：</strong>"Quantum Computation by Adiabatic Evolution"`,
            story: `在2001-2002年從理論上證明了通用的AQC和通用的Gate-based量子計算兩者等價。`,
            imageSource: 'https://www.researchgate.net/figure/A-a-Adiabatic-quantum-optimization-AQO-and-b-Chimera-architecture-of-the-D-wave_fig5_349878055'
        },

        'DTQW': {
            type: 'tool',
            name: 'Discrete-Time Quantum Walk (2004-2012)',
            author: 'Andris Ambainis/ Mario Szegedy/ Berry-Childs Algorithm',
            goal: '將量子行走分別應用於搜尋、圖論(馬可夫鏈)、哈密頓模擬',
            concept: `利用疊加態同時探索多條路徑，並透過量子干涉消除錯誤路徑。

1. 搜索：Ambainis 的元素相異性 (2004)
2. 圖論：Szegedy 的馬可夫鏈通用框架 (2004)
3. 模擬：Berry & Childs 從圖到物理模擬 (2012-2016)`,
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `搜索：相異元素問題，古典演算法需要 $O(N)$ 次查詢，量子漫步只需 $O(N^{2/3})$ 次

<strong>文獻：</strong>
"Quantum walks on graphs" (2001)
"Quantum walk algorithm for element distinctness"`,
            story: `2004 Ambainis將 QW應用於求解更複雜問題，展現 DTQW的強大功能。`,
            imageSource: 'https://www.researchgate.net/figure/Quantum-circuit-representation-of-the-discrete-time-quantum-walk-The-quantum-coin-flip_fig1_249011868'
        },

        'BCH': {
            type: 'algorithm',
            name: 'Higher-Order Trotter-Suzuki Decomposition (2005-2007)',
            author: 'Masuo Suzuki / Dominic W. Berry, Andrew Childs 等人',
            goal: '降低原本Lloyd方法哈密頓模擬的電路深度 / 提高模擬精確度',
            concept: `關鍵字：Trotterized、BCH 公式、交換子、對稱化、遞迴結構

利用 BCH 公式的逆向思維，將電路排列成對稱結構或遞迴結構，讓誤差項自動互相抵銷。`,
            computation: '(太複雜省略)',
            supplement: `1. BCH公式：$e^A \\cdot e^B = e^{(A+B) + 1/2[A, B] + ...}$
2. 交換子 (Commutator)：$[A, B]=AB-BA$

<strong>文獻：</strong>
"Fractal decomposition of exponential operators" (1990)
"Efficient Quantum Algorithms for Simulating Sparse Hamiltonians" (2007)`,
            story: `直觀的解決Trotterized方法問題。`,
            imageSource: 'https://www.researchgate.net/figure/a-Circuit-structure-of-the-lowest-order-Suzuki-Trotter-decomposed-time-evolution_fig9_349655313'
        },

        'CTQW': {
            type: 'tool',
            name: 'Continuous-Time Quantum Walk (1998)',
            author: 'Edward Farhi / Sam Gutmann / Andrew Childs',
            goal: '利用連續時間量子系統的哈密頓量來解決圖論遍歷與空間搜索問題',
            concept: `利用薛丁格方程式支配的連續時間演化算子 $U(t) = e^{-iHt}$，其中 H 為圖的鄰接矩陣。

1. 圖論遍歷：Childs 的指數加速 (2003)
2. 空間搜索：Childs & Goldstone 的空間搜尋 (2004)`,
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `圖論遍歷：古典演算法需要 $O(2^n)$ 指數時間，CTQW 只需要 $O(n)$ 多項式時間。

<strong>文獻：</strong>
"Quantum computation and decision trees" (1998)
"Exponential algorithmic speedup by quantum walk" (2003)`,
            story: `2003 年，Andrew Childs 等人設計出了「黏合樹」，證明了 CTQW 可以實現驚人的指數級加速。`,
            imageSource: 'https://ibco.com.tw/turing-college/%E9%87%8F%E5%AD%90%E8%A1%8C%E8%B5%B0%E8%A8%88%E7%AE%97Quantum-Walk-Computing%E7%9A%84%E9%9D%A9%E5%91%BD%E6%80%A7%E7%AA%81%E7%A0%B4%E7%90%86%E8%AB%96%E5%AF%A6%E7%8F%BE%E8%88%87%E6%87%89%E7%94%A8/'
        },

        'LCU': {
            type: 'tool',
            name: 'Linear Combination of Unitaries (2012)',
            author: 'Andrew Childs, Nathan Wiebe, Berry et al.',
            goal: '讓只能做「乘法」的量子電腦學會做閘的「加法」(矩陣線性組合)。',
            concept: `關鍵字：線性組合酋分解、振幅係數分配、多工器

利用輔助位元將係數編碼為振幅，再透過受控操作將不同的 Unitary 疊加在一起。`,
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `線性組合酋分解：$A = c_1U_1 + c_2U_2 + ...$
成功機率：需搭配振幅放大技術提高成功率。

<strong>文獻：</strong>"Hamiltonian simulation using linear combinations of unitary operations"`,
            story: `LCU 的出現是一個概念上的突破，讓我們可以打破「只能做 Unitary」的限制。`,
            imageSource: 'https://www.researchgate.net/figure/A-circuit-implementing-a-linear-combination-of-4-unitaries_fig2_380070208'
        },

        'Taylor': {
            type: 'algorithm',
            name: 'Hamiltonian Simulation via Taylor Series (2012)',
            author: 'Andrew M. Childs, Nathan Wiebe',
            goal: '突破 Trotter 方法的精度瓶頸，用不同方法實現哈密頓模擬。',
            concept: `關鍵字：LCU、泰勒展開、哈密頓量分解

將時間演化算符進行泰勒級數展開，並利用 LCU 工具來執行這個巨大的加法。`,
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `1. 泰勒展開：$e^{-iHt}= I - iHt + (-iHt)^2/2! + ...$
2. 截斷誤差收斂得非常快
3. 不知情振幅放大

<strong>文獻：</strong>"Hamiltonian simulation using linear combinations of unitary operations" (2012)`,
            story: `Childs 和 Wiebe 將模擬誤差的代價從 $O(1/\\epsilon)$ 驚人地降低到 $O(\\log(1/\\epsilon))$。`,
            imageSource: 'https://arxiv.org/pdf/1202.5822'
        },

        'VQE': {
            name: 'Variational Quantum Eigensolver (2014)',
            author: 'Peruzzo et al.',
            goal: '求解分子和材料的基態能量',
            concept: 'VQE是近期量子電腦最重要的應用之一。作為混合量子-古典算法，結合了量子電腦的態準備能力和古典電腦的優化能力。',
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `<strong>為什麼是混合算法？</strong>
• 量子部分：態準備 + 期望值測量
• 古典部分：參數優化
• 💡 無法被純量子QSVT框架表示

<strong>應用：</strong>
• 分子基態能量計算
• 藥物設計
• 材料科學

<strong>文獻：</strong>"A variational eigenvalue solver on a photonic quantum processor" (2014)`,
            story: `2014年，由Alberto Peruzzo領導的團隊首次在實驗上實現了VQE。VQE被認為是最有可能在近期實現量子優勢的算法之一。`,
            imageSource: 'https://www.entangletech.tw/lesson/optim-07'
        },

        'QAOA': {
            type: 'algorithm',
            name: 'Quantum Approximate Optimization Algorithm (2014)',
            author: 'Edward Farhi, Jeffrey Goldstone, Sam Gutmann',
            goal: '用古典結合量子電腦，求解「組合優化問題」的近似最佳解',
            concept: `1. 絕熱演化
2. 離散化交替電路`,
            computation: '(詳細運算過程請參考原始 data.js)',
            supplement: `QAOA 將「尋找最低能量」對應到解決實際工程與商業問題：
• MaxCut (最大切割問題)
• 旅行推銷員問題
• 投資組合優化

<strong>文獻：</strong>"A Quantum Approximate Optimization Algorithm" (2014)`,
            story: `這篇論文是 Edward Farhi 團隊為了證明「量子霸權」而設計的。它是目前公認在 NISQ 時代最有希望超越古典電腦的候選人。`,
            imageSource: 'https://www.entangletech.tw/lesson/optim-06'
        },

        'QSP': {
            type: 'framework',
            name: 'Quantum Signal Processing (2016)',
            author: 'Guang Hao Low, Isaac L. Chuang',
            goal: '在單一量子位元上，透過一組可控的旋轉序列，合成出任意多項式函數變換。',
            concept: `使用 $R_z, R_x$ 旋轉組合可產生任意函數。`,
            computation: '',
            supplement: `QSP只需1個位元，透過 $R_z(\\phi_n), R_x(\\theta)$ 即可獲得 $P(x)|0\\rangle+junk$

<strong>文獻：</strong>
"Methodology of Resonant Equi-Pulse Sequences for Quantum Control" (2016)
"Optimal Hamiltonian Simulation by Quantum Signal Processing" (2016, PRL)`,
            story: `這是 Low 和 Chuang 發展 QSVT 過程中的重要前置工作，是後來整個量子演算法「大統一理論」的種子。`,
            imageSource: 'https://en.photo-ac.com/photo/24233602/my-self'
        },

        'Block': {
            type: 'tool',
            name: 'Block Encoding (2016-2019)',
            author: 'Guang Hao Low, Isaac L. Chuang, András Gilyén',
            goal: '將一個任意矩陣嵌入到一個更大的酋矩陣的左上角區塊中。',
            concept: `1. 嵌入 (Embedding)：量子電腦只能執行 Unitary 操作，我們必須把普通的矩陣「偽裝」成一個 Unitary。`,
            computation: '',
            supplement: `LCU本質上就屬於一種Block Encoding

1. 標準輸入格式 (Standard Input)
2. 縮放因子 (Normalization factor $\\alpha$)

<strong>文獻：</strong>
"Quantum singular value transformation and beyond" (2019)
"Hamiltonian simulation by qubitization" (Low & Chuang, 2016)`,
            story: `Guang Hao Low 等人引入 Block Encoding 的概念後，徹底改變了遊戲規則。`,
            imageSource: 'https://quantumcomputing.stackexchange.com/questions/18197/in-the-context-of-block-encoding-what-does-0-rangle-otimes-i-represent'
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = hamiltonianData;
}
