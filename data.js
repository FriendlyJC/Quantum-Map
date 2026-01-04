// 量子算法数据
const quantumData = {
    categories: [
        {
            id: 'algorithm',
            name: '演算法與核心',
            color: 'rgba(100, 150, 220, 0.3)',
            subcategories: [
                {
                    name: '特徵提取',
                    fullName: '特徵提取與頻譜分析',
                    color: 'rgba(100, 150, 220, 0.3)',
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
                    ]
                },
                {
                    name: '哈密頓模擬',
                    color: 'rgba(100, 150, 220, 0.45)',
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
                    ]
                },
                {
                    name: '振幅放大',
                    color: 'rgba(100, 150, 220, 0.3)',
                    items: [
                        { name: 'Grover', year: 1996, x: 690, y: 600 },
                        { name: 'AA', year: 1997, endYear: 2000, x: 690, y: 625 },
                        { name: 'AE', year: 2000, x: 690, y: 700 },
                        { name: 'Fixed-AA', year: 2014, x: 690, y: 1050 }
                    ]
                }
            ]
        },
        {
            id: 'communication',
            name: '通訊協議',
            color: 'rgba(255, 160, 100, 0.3)',
            subcategories: [
                {
                    name: '不可複製',
                    color: 'rgba(255, 160, 100, 0.4)',
                    items: [
                        { name: '不可複製原理', year: 1982, x: 910, y: 250 }
                    ]
                },
                {
                    name: '密碼學',
                    color: 'rgba(255, 160, 100, 0.3)',
                    items: [
                        { name: '共軛編碼', year: 1983, x: 995, y: 275 },
                        { name: 'BB84', year: 1984, x: 995, y: 300 },
                        { name: 'E91', year: 1991, x: 995, y: 475 },
                        { name: 'DI-QKD', year: 1991, x: 995, y: 500 },
                        { name: 'B92', year: 1992, x: 995, y: 525 }
                    ]
                },
                {
                    name: '通訊',
                    color: 'rgba(255, 160, 100, 0.4)',
                    items: [
                        { name: 'Supercoding', year: 1992, x: 1080, y: 525 },
                        { name: 'Teleporting', year: 1993, x: 1080, y: 550 },
                        { name: 'Entanglement', year: 1993, x: 1080, y: 575 }
                    ]
                }
            ]
        },
        {
            id: 'error-correction',
            name: '糾錯與容錯',
            color: 'rgba(130, 200, 130, 0.3)',
            subcategories: [
                {
                    name: '糾錯碼',
                    color: 'rgba(130, 200, 130, 0.35)',
                    items: [
                        { name: 'Shor Code', year: 1995, x: 1250, y: 565 },
                        { name: 'Steane', year: 1996, x: 1250, y: 590 },
                        { name: 'Surface', year: 1997, x: 1250, y: 615 },
                        { name: 'Topological', year: 2003, x: 1250, y: 775 }
                    ]
                }
            ]
        },
        {
            id: 'hardware',
            name: '硬體',
            color: 'rgba(230, 120, 120, 0.3)',
            subcategories: [
                {
                    name: 'Adiabatic',
                    color: 'rgba(230, 120, 120, 0.4)',
                    items: [
                        { name: 'Annealing', year: 1998, x: 1440, y: 640 },
                        { name: 'AQC', year: 2000, x: 1440, y: 700 },
                        { name: 'D-Wave', year: 2011, x: 1440, y: 975 }
                    ]
                },
                {
                    name: 'Gate-based',
                    color: 'rgba(230, 120, 120, 0.3)',
                    items: [
                        { name: '離子阱', year: 1995, x: 1580, y: 565 },
                        { name: '超導體', year: 1999, x: 1580, y: 675 },
                        { name: '光子', year: 2001, x: 1580, y: 725 },
                        { name: '拓撲', year: 2005, x: 1580, y: 825 }
                    ]
                }
            ]
        }
    ],
    
    // QSVT 集大成者（横跨三个算法区域）
    masterpiece: {
        name: 'QSVT',
        year: 2019,
        x: 200,
        y: 1170,
        width: 550,
        height: 60,
        color: 'rgba(148, 87, 235, 0.9)'
    },
    
    // HSP框（框住Deutsch到QPE）
    hspBox: {
        label: 'HSP',
        name: 'HSP',  // 用于点击识别
        year: 1995,
        startY: 310,
        endY: 610,
        x: 105,
        width: 280,
        // 椭圆位置（右下角）
        ellipseX: 320,
        ellipseY: 595,
        ellipseRx: 35,
        ellipseRy: 20
    },
    
    // 标题详细信息
    titleDetails: {
        '量子電腦': {
            name: '量子電腦',
            proposer: '理查德·費曼 (Richard Feynman)',
            quotes: [
                '"Nature isn\'t classical, dammit, and if you want to make a simulation of nature, you\'d better make it quantum mechanical, and by golly it\'s a wonderful problem, because it doesn\'t look so easy.自然界並不是古典的，該死! 如果想模擬大自然，你最好把它做成量子的。天吶!這是個非常精彩的問體，因為它看起來一點都不簡單。"'
            ],
            reason: `1. 含時間的薛丁格方程：

$$e^{-iHt}|\\varphi_0\\rangle = |\\varphi_t\\rangle$$

2. 哈密頓量 H (以Ising模型為例)：

$$H = -\\sum_i h_i Z_i - \\sum_{i \\lt j} J_{ij} Z_i Z_j$$

材料、化學反應、藥物蛋白質結合、最佳化組合等都可以寫成哈密頓量 $H$ 並計算求解。

<strong>古典難題：</strong>
以電子為例，一個電子有兩種狀態，$n$ 個電子就有 $N = 2^n$ 種狀態。
要計算300個電子時需要的硬體bits需要 $2^{300}$，遠超過宇宙粒子總數。
即便使用算法避開運算完整 $N \\times N$ 的 $H$ 矩陣（因為 $H$ 經常是稀疏矩陣），
仍然需要運算 $O(2^{3n})$ 才能夠算完。
因此古典在運算空間與時間都無法計算大量的量子問題。

<strong>量子優勢：</strong>
量子電腦本身使用量子運算，$n$ 個量子系統只需要 $n$ 個 qubits 即可！`,
            story: '費曼於1982年演講中提出量子電腦概念，但根據資料1980年蘇聯數學家 Yuri Manin 就已經有用量子來運算的想法，只是費曼的演講影響更大。'
        },
        '演算法與核心': {
            name: '演算法與核心',
            description: `此區塊介紹使用量子電腦計算的核心演算法。本地圖整理約九成多的核心算法或工具，目前絕大多數演算法都是透過這幾種算法工具組合、變形、優化衍伸出來的，因此弄懂這些核心就能夠輕易接軌任何新演算法。

演算法又可大致劃分為三類：
1. 特徵提取
2. 哈密頓模擬
3. 振幅放大

補充：
• 特徵提取對應為量子的波動性
• 哈密頓模擬對應為量子系統的動力學
• 振幅放大對應為量子的幾何結構`
        },
        '通訊協議': {
            name: '通訊協議',
            description: '量子通訊協議利用量子力學特性實現安全通訊、資訊傳輸等功能。包括量子密鑰分發、量子隱形傳態等核心技術。'
        },
        '糾錯與容錯': {
            name: '糾錯與容錯',
            description: '量子糾錯與容錯技術是實現實用量子計算的關鍵，通過編碼保護量子資訊免受環境噪聲影響。'
        },
        '硬體': {
            name: '硬體',
            description: '量子計算硬體包括各種物理實現平台，如超導、離子阱、光子等，以及不同的計算範式如門電路和絕熱計算。'
        },
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
        },
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
        },
        '糾錯碼': {
            name: '糾錯碼',
            description: '量子糾錯碼通過冗餘編碼保護量子資訊免受噪聲干擾，是實現容錯量子計算的關鍵技術。'
        },
        'Adiabatic': {
            name: 'Adiabatic量子計算',
            description: '絕熱量子計算通過緩慢改變系統哈密頓量，使系統始終保持在基態，最終得到優化問題的解。'
        },
        'Gate-based': {
            name: 'Gate-based量子計算',
            description: '門電路量子計算是主流範式，通過量子門的組合實現各種量子算法，類似經典計算機的邏輯門電路。'
        }
    },
    
    // 详细信息数据
    details: {
        // ========== 演算法類 ==========
        
        // 特徵提取與頻譜分析
        'Deutsch': {
            type: 'algorithm',
            name: 'Deutsch\'s Algorithm (1985)',
            author: 'David Deutsch',
            goal: '判斷單bit函數為常數函數或平衡函數',
            concept: `關鍵字：疊加平行運算、相位回彈、相位干涉<br>

1. 利用 H 閘同時處理所有疊加輸入，形成對 oracle 的平行查詢。<br>
2. 經過 oracle 黑盒運算，將「**函數值的一致性**」編碼為整體相位，透過相位回彈使得<br>
   constant 函數 → 所有分量相位一致<br>
   balanced 函數 → 分量之間產生相位分裂<br>
3. 透過干涉，若相位一致則表示常數函數，若不同相位則干涉抵銷表示平衡函數，從而得出資訊。<br>`,
            computation: '',
            supplement: `輸入為 $x \\in \\{0,1\\}$，函數運算 $f(x)$<br>
<br>
<strong>常數函數：</strong>輸出結果都相同。<br>
• 情況一：$f(0)=0； f(1)=0$（結果都是0）<br>
• 情況二：$f(0)=1； f(1)=1$（結果都是1）<br>
<br>
<strong>平衡函數：</strong>輸出結果為0跟輸出結果為1的次數相同。<br>
• 情況一：$f(0)=0； f(1)=1$（答案為0和1的次數各一次）<br>
• 情況二：$f(0)=1； f(1)=0$（答案為0和1的次數各一次）<br>
<br>
<strong>文獻：</strong>"Quantum theory, the Church-Turing principle and the universal quantum computer"(1985)`,
            story: `此演算法為**首個證明**量子計算比古典電腦更有優勢。<br>(*但不是實用問題)<br>
當 $x$ 輸入情況有0或1兩種時，要判斷此函數是常數或是平衡，古典至少需要檢查2次才可確定，量子電腦只需檢查一次即可。<br>`,
            imageSource: 'https://www.researchgate.net/figure/The-Deutsch-Algorithm_fig2_342979428'
        },
        'D-Jozsa': {
            type: 'algorithm',
            name: 'Deutsch-Jozsa Algorithm (1992)',
            author: 'David Deutsch & Richard Jozsa',
            goal: '判斷 $n$ 位元函數是常數函數還是平衡函數',
            concept: `關鍵字：疊加平行運算、相位回彈、相位干涉<br>
<br>
1. 利用 H 閘同時處理所有疊加輸入，形成對 oracle 的平行查詢。<br>
2. 經過 oracle 黑盒運算，將「**函數值的一致性**」編碼為整體**相位**，透過相位回彈使得<br>
   constant 函數 → 所有分量相位一致<br>
   balanced 函數 → 分量之間產生相位分裂<br>
3. 透過干涉，若相位一致則表示常數函數，若不同相位則干涉抵銷表示平衡函數，從而得出資訊。<br>`,
            computation: '',
            supplement: `輸入為 $n$ bits的 $x$，其中 $x \\in \\{0,1\\}$ 的組合，函數運算 $f(x)$。<br>
<br>
<strong>常數函數：</strong>輸出結果都相同。<br>
• 情況一：$f(x)=0$（結果都是0）<br>
• 情況二：$f(x)=1$（結果都是1）<br>
<br>
<strong>平衡函數：</strong>輸出結果為0跟輸出結果為1的次數相同。<br>
• $f(x)=0$；$f(x')=1$（答案為0和1的次數各一半）<br>
<br>
<strong>文獻：</strong>"Rapid solution of problems by quantum computation"(1992)`,
            story: `擴展了 Deutsch 演算法。$n$ bits的 $x$ 輸入總共 $N$ 種組合，$N=2^n$。<br>
判斷 $f(x)$ 函數屬於常數還是平衡時，<br>
古典需要 $N/2 + 1$ 次查詢才可判斷，量子只需 1 次即可判斷。<br>
展現指數級優勢。<br>`,
            imageSource: 'https://en.wikipedia.org/wiki/Deutsch%E2%80%93Jozsa_algorithm'
        },
        'Simon': {
            type: 'algorithm',
            name: 'Simon\'s Algorithm (1994)',
            author: 'Daniel R. Simon',
            goal: '尋找二對一函數 $f(x) = f(x \\oplus s)$ 中的隱藏數字 $s$',
            concept: `關鍵字：疊加平行運算、相位回彈、相位干涉<br>
<br>
1. 利用 H 閘同時處理所有疊加輸入，形成對 oracle 的平行查詢。<br>
2. 經過 oracle 黑盒運算，將「輸入之間的等價關係」編碼為量子態的相位／子空間結構，由於 $f(x)=f(x \\oplus s)$，oracle 使得量子態自然成對，形成 $|x\\rangle+|x \\oplus s\\rangle$。這表示在隱藏週期方向上的相位一致性，而在其他方向上產生相位分裂。<br>
3. 透過干涉性，消除不符合隱藏週期約束的相位分量，經過重複抽樣後得到隱藏週期 $s$。<br>`,
            computation: '',
            supplement: `$\\oplus$：表示二進制XOR運算，<br>
XOR運算滿足對合性(Involution)即 $x' = x \\oplus s$ 且 $x = x' \\oplus s$<br>
<br>
Simon演算法：將 $x$ 跟 $x \\oplus s$ 經過 $f$ 函數運算會得到同一個值，目標找出 $s$<br>
<br>
<strong>文獻：</strong>"On the power of quantum computation"`,
            story: `提供 Shor 演算法靈感。在「黑盒子」問題中，證明量子比古典有指數級加速。<br>`,
            imageSource: ''
        },
        'Shor': {
            type: 'algorithm',
            name: 'Shor\'s Algorithm (1994)',
            author: 'Peter W. Shor',
            goal: '整數質因數分解 (Factoring) / 離散對數',
            concept: `關鍵字：QFT、週期查找、模運算、求階問題<br>
<br>
將原本的質因數分解問題 $N=p \\times q$，轉成週期與求階問題 $x^{2a} \\equiv 1 \\mod N$，讓量子電腦快速算出 $a$，再用古典運算 $\\gcd(x^a-1, N)$ 即可獲得 $p$，使得能夠在合理時間內算出質因數分解。<br>`,
            computation: '',
            supplement: `<strong>1. 週期尋找(Period finding)：</strong><br>
函數滿足 $f(x+s)=f(x)$，尋找 $s$ (詳細週期尋找算法點此)<br>
<br>
以日曆的日期與星期比喻：<br>
某月的1號為星期一、2號為星期二、...、7號為星期日、8號又回到星期一、9號為星期二、...<br>
因此輸入 $x$ 為某月的幾號，函數 $f(x)$ 為對應的星期，得到週期 $s = 7$（每加7天對應到同個星期）<br>
<br>
<strong>2. 模運算(同餘)：</strong><br>
$a \\equiv b \\pmod{N}$，表示 $a$ 和 $b$ 除以 $N$ 的餘數相同<br>
若 $a \\gt N \\gt b$ 亦可看成 $a$ 除以 $N$ 的餘數為 $b$<br>
<br>
<strong>3. 求階問題(Order finding)：</strong><br>
已知 $x$ 和 $N$，求 $x^r \\equiv 1 \\pmod{N}$ 的階 $r$。(詳細求階算法點此)<br>
<br>
<strong>文獻：</strong>"Algorithms for quantum computation: discrete logarithms and factoring" (1994)`,
            story: `是**首個**在現實已有問題中**實際應用價值**的量子計算演算法！<br>
RSA 加密基於大整數分解的困難度，傳統電腦暴力運算無法在合理時間內破解。<br>
Shor演算法將複雜度從指數級降為多項式級。<br>
作為擊破(RSA)的殺手級應用。<br>`,
            imageSource: 'https://profmcruz.wordpress.com/wp-content/uploads/2017/08/quantum-computation-and-quantum-information-nielsen-chuang.pdf'
        },
        'QFT': {
            type: 'tool',
            name: 'Quantum Fourier Transform (1994-1998)',
            author: 'Artur Ekert, Richard Jozsa, Cleve et al.',
            goal: '在量子態上執行傅立葉變換',
            concept: '基底變換、相位累積',
            computation: '',
            supplement: `將振幅編碼轉換為相位編碼 (Time domain → Frequency domain)。<br>
<br>
<strong>待補充內容：</strong><br>
1. 離散傅立葉公式<br>
2. 量子態表示的DFT<br>
3. 量子且二進制表示DFT<br>
<br>
<strong>詳細參考資料：</strong><br>
1. Entangle Tech量子教育平台 https://www.entangletech.tw/<br>
2. Michael A. Nielsen, Isaac L. Chuang (2002)《Quantum Computation & Quantum Information》Ch5 p.184-188<br>
<br>
<strong>文獻：</strong>"An approximate Fourier transform useful in quantum factoring"`,
            story: `為眾多**演算法的核心工具**，例如：Shor、QPE、...<br>
<br>
古典快速傅立葉變換(FFT)需複雜度：資料量 $O(N\\log(N))$ 或 位元數 $O(n \\cdot 2^n)$<br>
量子傅立葉變換(QFT)只需：資料量 $O(\\log(N)^2)$ 或 位元數 $O(n^2)$<br>`,
            imageSource: 'https://profmcruz.wordpress.com/wp-content/uploads/2017/08/quantum-computation-and-quantum-information-nielsen-chuang.pdf'
        },
        'PKB': {
            type: 'tool',
            name: 'Phase KickBack (1998)',
            author: 'Cleve, Ekert, Macchiavello, Mosca',
            goal: '相位反沖技術',
            concept: '讓受控(目標)位元的特徵值(相位)反彈到控制位元上',
            computation: '',
            supplement: `Controlled-U 運算：當 Control bit(控制位元)為1時，對目標位元做 U 運算<br>
<br>
Phase KickBack 在線性代數上本質的概念只是：<br>
1. 純量交換率：$|1\\rangle \\otimes (e^{i\\theta}|u\\rangle) = |1\\rangle \\otimes e^{i\\theta} \\otimes |u\\rangle = e^{i\\theta}|1\\rangle \\otimes |u\\rangle$<br>
2. 基底展開：$|\\phi\\rangle = \\sum c_i|u_i\\rangle$ 任意狀態可表示成U算子的特徵基底組合<br>
<br>
需要單獨將此數學命名為**相位回彈**，因為古典邏輯上受控操作(Controlled-Operation)資訊上是單向流通，即控制位元決定目標位元。但是在量子中目標位元狀態並未改變，反而是控制位元得到了一個相位。<br>
<br>
<strong>文獻：</strong>"Quantum algorithms revisited"(1998)`,
            story: `在先前與後續許多演算法都使用到回彈與相位干涉性，Cleve等人是整理前人算法歸納出此概念。<br>
<br>
（註：此概念最早出現於 1992 Deutsch-Jozsa，但於1998此文獻中被系統化整理）<br>`,
            imageSource: 'https://quantumcomputing.stackexchange.com/questions/26960/does-phase-kickback-require-the-system-to-be-in-the-eigenstate'
        },
        'QPE': {
            type: 'tool',
            name: 'Quantum Phase Estimation (1995)',
            author: 'Kitaev et al.',
            goal: '估計 U 算子的特徵值/讀取 $e^{-i\\phi t}$ 的相位 $\\phi$',
            concept: `疊加態、相位回彈、逆傅立葉<br>
<br>
讓 U 算子的特徵值透過逆傅立葉變成基底資訊讀出，再用古典連分式運算得到 $\\phi$ 值<br>`,
            computation: '',
            supplement: `透過疊加與受控運算，使得電路設計只需使用 $U^{2^{t-1}}$ 即可組合出 $U^0, U^1, U^2, \\ldots, U^{2^{t-1}}$ 所有階組合的電路<br>
<br>
量子運算：以**振幅編碼**作為輸入、**相位**作為中間運算、**相位/振幅**作為輸出<br>
1. 輸入時無法確保全局相位基準，而振幅(機率幅)編碼非常容易<br>
2. 運算過程需要使用相位干涉(波動性)<br>
3. 而讀取最後答案可以用 QPE 讀取相位 或 Grover等機率振幅放大方式讀取<br>
<br>
<strong>文獻：</strong>"Quantum measurements and the Abelian Stabilizer Problem"(1995)`,
            story: `相位估計是許多算法提取運算結果的核心。<br>`,
            imageSource: 'https://profmcruz.wordpress.com/wp-content/uploads/2017/08/quantum-computation-and-quantum-information-nielsen-chuang.pdf'
        },
        'Q PCA': {
            type: 'algorithm',
            name: 'Quantum Principal Component Analysis (2014)',
            author: 'Seth Lloyd, Masoud Mohseni, Patrick Rebentrost',
            goal: '在量子電腦上對高維度數據進行主成分分析 (PCA)。即找出數據共變異數矩陣 (Covariance Matrix) 的特徵值（主成分的重要性）與特徵向量（主成分軸），且速度呈指數級加速。',
            concept: `關鍵字：密度矩陣/ 相位估計<br>
<br>
1. 密度矩陣映射：將古典數據向量轉化為量子態，使得這些量子態混合後的密度矩陣 (Density Matrix) $\\rho$，在數學上剛好正比於古典的共變異數矩陣 $C$。$$\\rho \\approx C = \\sum \\vec{v}_i \\vec{v}_i^T$$<br>
2. 密度矩陣指數化 (Density Matrix Exponentiation)：這是 QPCA 最天才的地方。通常哈密頓模擬是模擬一個已知的稀疏矩陣 $H$。但這裡我們要模擬的是數據本身 $\\rho$ (即 $e^{-i\\rho t}$)。作者證明，只要擁有 $\\rho$ 的多個副本，透過交叉的 SWAP 操作，就能讓 $\\rho$ 自己模擬自己演化。<br>
3. 相位估計 (QPE)：一旦能執行 $U = e^{-i\\rho t}$，就可以把它丟進 QPE。QPE 的輸出結果會揭露 $\\rho$ 的特徵值（主成分變異數）和特徵態（主成分向量）。<br>`,
            computation: '',
            supplement: `• 指數加速：古典 PCA 對 $N$ 維矩陣分解需要 $O(N^2)$ 或 $O(N^3)$；QPCA 只需要 $O(\\log N)$。<br>
• qRAM 瓶頸：前提是必須能將大量古典數據快速載入成量子態 $\\rho$，這需要高效的量子隨機存取記憶體 (qRAM)，這是目前的硬體挑戰。<br>
• 結果讀取：與 HHL 一樣，輸出的主成分是「量子態」，你無法印出整條向量，通常用於後續的量子分類或特徵壓縮。<br>
<br>
<strong>文獻：</strong>"Quantum principal component analysis"`,
            story: `這篇論文是 Seth Lloyd 繼 HHL 之後在量子機器學習領域的又一力作。<br>
在 2014 年，大家都在想「怎麼用量子電腦處理 Big Data？」Lloyd 提出了一個驚人的觀點：「在量子力學裡，密度矩陣 $\\rho$ 本身就是一個天然的共變異數矩陣。」
這意味著量子系統天生就在做 PCA，我們只需要設法把它提取出來。這篇論文發明了「密度矩陣指數化」技術，這成為後來許多量子機器學習演算法（如量子支持向量機 QSVM）的重要基石。`,
            imageSource: ''
        },
        'HHL': {
            type: 'algorithm',
            name: 'HHL Algorithm (2009)',
            author: 'Harrow, Hassidim, Lloyd',
            goal: '給定矩陣A 與結果b，$A\\mathbf{x} = \\mathbf{b}$ 求解線性方程解 $\\mathbf{x}$',
            concept: `關鍵字：QPE、受控旋轉、逆QPE<br>
<br>
1. $A\\mathbf{x}=\\mathbf{b}$，$(A^{-1})A\\mathbf{x} = (A^{-1})\\mathbf{b} = \\mathbf{x}$<br>
2. 特徵 $A|u_i\\rangle=\\lambda_i|u_i\\rangle$，$(A^{-1})|u_i\\rangle=1/\\lambda_i|u_i\\rangle$<br>
3. 基底展開 $|b\\rangle=\\sum\\beta_j|u_j\\rangle$<br>
4. 特徵分解 $A=PDP^{-1}$，$f(A)=Pf(D)P^{-1}$，故 $e^{-iAt}|u_j\\rangle=e^{-i\\lambda_j t}|u_j\\rangle$<br>

做出A的逆矩陣作用到b即可獲得x`,
            computation: `<strong>問題：</strong>求解 $A\\mathbf{x} = \\mathbf{b}$，其中 $A$ 是 $N \\times N$ 矩陣

<strong>步驟1：</strong>製備初態 $|b\\rangle$

將向量 $\\mathbf{b}$ 編碼為量子態：
$$|b\\rangle = \\sum_j b_j|u_j\\rangle$$

其中 $|u_j\\rangle$ 是 $A$ 的本徵態。

<strong>步驟2：</strong>量子相位估計（QPE）

$$|b\\rangle|0\\rangle \\xrightarrow{QPE} \\sum_j b_j|u_j\\rangle|\\lambda_j\\rangle$$

提取本徵值 $\\lambda_j$ 的資訊。

<strong>步驟3：</strong>受控旋轉（實現矩陣求逆）

$$\\xrightarrow{R(\\lambda)} \\sum_j b_j|u_j\\rangle|\\lambda_j\\rangle\\left(\\sqrt{1-\\frac{C^2}{\\lambda_j^2}}|0\\rangle + \\frac{C}{\\lambda_j}|1\\rangle\\right)$$

<strong>步驟4：</strong>測量輔助位元為 $|1\\rangle$

成功時得到解：
$$|x\\rangle = A^{-1}|b\\rangle = \\sum_j \\frac{b_j}{\\lambda_j}|u_j\\rangle$$

<strong>步驟5：</strong>逆QPE恢復計算基底`,
            supplement: `<strong>當前挑戰：</strong>
1. 把古典b編碼成量子 $|b\\rangle$ 本身耗時，失去量子加速優勢<br>
2. 輸出 $|x\\rangle$ 狀態需要 $\\langle x|M|x\\rangle$ 測量統計讀取 $O(N)$<br>
3. Ancilla測量到1才成功，需使用振幅放大提高成功率 $O(\\sqrt{N})$，成功率取決於...<br>
4. 僅限於A為Hermitian(即 $A=A^\\dagger$)，若不是則要用擴充矩陣 $\\tilde{A}=\\begin{pmatrix}0 & A \\\\ A^\\dagger & 0\\end{pmatrix}$ 大矩陣<br>
5. A需為稀疏矩陣<br>
<br>
<strong>文獻：</strong>"Quantum algorithm for linear systems of equations" (2009)`,
            story: `2009年，MIT的三位研究者Aram Harrow、Avinatan Hassidim和Seth Lloyd在Nature上發表了這個突破性算法。這是量子機器學習和量子數值計算領域的開創性工作。

<strong>發現意義：</strong>
線性方程組求解是科學計算的核心，幾乎所有數值計算問題最終都歸結為求解線性系統。HHL算法展示了量子計算在這個基礎問題上的指數級優勢。<br>
<br>
<strong>後續影響：</strong>
• 催生了量子機器學習研究熱潮
• 啟發了量子主成分分析（Q-PCA）
• 發展出量子支持向量機（QSVM）
• 推動了量子數值分析的研究
<br>
<strong>實用挑戰：</strong>
雖然理論上有指數加速，但實際應用面臨許多挑戰：態製備的效率、條件數依賴、經典資訊提取等。目前研究聚焦於找到適合HHL優勢的實際問題。<br>`,
            imageSource: 'https://www.researchgate.net/figure/Quantum-circuit-of-the-HHL-algorithm_fig2_358996216'
        },
        'QMI': {
            type: 'framework',
            name: 'Quantum Matrix Inversion (2009-2019)',
            author: 'Gilyén, Su, Low, Wiebe et al.',
            goal: '給定矩陣A 與結果b，$A\\mathbf{x} = \\mathbf{b}$ 求解線性方程解 $\\mathbf{x}$',
            concept: `關鍵字：Block Encoding、QSVT、多項式逼近 ($1/x$)<br>
<br>
1. 多項式轉換：將矩陣求逆視為函數變換 $f(x) = x^{-1}$。利用 QSVT 技術，設計一個多項式 $P(x) \\approx 1/x$。<br>
2. 區塊編碼 (Block Encoding)：將矩陣 $A$ 封裝成 Unitary $U_A$。<br>
3. 直接演化：透過 QSVT 電路直接對 $U_A$ 的奇異值做變換。`,
            computation: '',
            supplement: `<strong>與 HHL 的區別 (改良點)：</strong>
• 精度更高：HHL 的誤差隨 $1/\\epsilon$ 變化（多項式），現代 QMI 是 $\\log(1/\\epsilon)$（指數級改善）。<br>
• 電路更淺：不需要 QPE 的大暫存器，量子位元需求大幅減少。<br>
• 不需要 Hamiltonian 模擬：HHL 需要把 $A$ 放到 $e^{-iAt}$ 裡，現代 QMI 直接對 $A$ 的 Block Encoding 操作。<br>
• 穩定性：使用 Fixed-Point AA 或 Oblivious AA，成功機率更可控。<br>
<br>
<strong>文獻：</strong>"Quantum algorithm for linear systems of equations" (2009)`,
            story: `如果 HHL 是第一代「原型機」，證明了量子解方程的可能性；那麼基於 QSVT 的 QMI 就是「量產機」。<br>
<br>
在 HHL 發表後的十年間，科學家發現 QPE 的成本實在太高，很難在近期硬體上執行。隨著 2016-2019 年 Block Encoding 和 QSVT 的發展，Childs 和 Gilyén 等人發現，其實根本不需要「估計」特徵值（QPE），我們可以直接用多項式去「轉換」它。
<br>
這使得 QMI 的演算法複雜度達到了理論上的物理極限 (Optimal Scaling)，成為現在量子線性代數的標準實作方式。
<br>
（註：QMI 為問題名稱，首個解決方案為 HHL)`,
            imageSource: ''
        },
        
        'QSVE': {
            type: 'algorithm',
            name: 'Quantum Singular Value Estimation (2016)',
            author: 'Iordanis Kerenidis, Anupam Prakash',
            goal: '估計一個非 Hermitian (一般長方形) 矩陣 $A$ 的奇異值 $\\sigma$',
            concept: `關鍵字：SVD奇異值分解/ 量子漫步QW/ 相位估計<br>
<br>
1. 奇異值分解 (SVD)：任何矩陣都可以分解為 $A = U \\Sigma V^\\dagger$。奇異值 $\\sigma$ 是矩陣的「DNA」。<br>
   *其中U,V是酋(Unitary)的矩陣<br>
2. 量子漫步算符：定義漫步算符 $W = U^\\dagger V$。根據 Szegedy 的理論，這個 $W$ 的特徵相位與 $A$ 的奇異值 $\\sigma$ 有直接關係 ($\\cos(\\theta) = \\sigma$)。<br>
3. 相位估計：對這個 $W$ 做 QPE，就能讀出奇異值。`,
            computation: '',
            supplement: `<strong>推薦系統 (Recommendation Systems)：</strong>QSVE 是著名的「量子推薦系統演算法」的核心。<br>
Netflix 問題本質上就是透過 SVD 來預測使用者可能喜歡什麼電影。<br>
<br>
<strong>QSVT 的關係：</strong>QSVE 是「測量」奇異值；QSVT 是「轉換」奇異值。通常會先用類似 QSVE 的技術做 Block Encoding 分析，再用 QSVT 處理。
<br>
<strong>文獻：</strong>"Quantum Recommendation Systems" (2016)`,
            story: `如果說 QPE 是處理「方陣」的利器，那 QSVE 就是處理「真實世界數據」的鑰匙。現實中的數據通常不是方陣（例如：使用者 vs 商品的評分表）。
<br>
Kerenidis 和 Prakash 在 2016 年利用這個技術提出了一個量子推薦演算法，號稱比古典快指數倍。雖然後來 Ewin Tang 在 2018 年發明了一個受量子啟發的古典演算法 (Quantum-inspired classical algorithm) 縮小了這個差距，但 QSVE 依然是理解現代量子線性代數不可或缺的一環。`,
            imageSource: ''
        },
        
        'HSP': {
            type: 'framework',
            name: 'Hidden Subgroup Problem (1995)',
            author: 'Ettinger, Høyer, Knill, Mosca et al.',
            goal: '從數學本質上歸納某一類演算法的運算問題類型(即隱藏的子群)',
            concept: '從數學本質上歸納某一類演算法的運算問題類型(即隱藏的子群)',
            computation: '',
            supplement: `Deutsch/ Deutsch-Jorza/ Simon/ Shor(因式分解)/ 週期查找/ 離散對數...等問題都能規約為HSP問題。<br>
<br>
群論：滿足以下四個條件<br>
-<br>
-<br>
-<br>
-<br>
群論又可依照性質等分成...<br>
<br>
<strong>文獻：</strong>"Quantum algorithms for solving problems with the hidden subgroup structure" (1995)`,
            story: `在 Shor 演算法出現後，學界回頭重新理解量子加速本質時，由量子計算社群逐步抽象總結所提出的統一數學框架。<br>
那些看似不同的問題，其量子解法卻高度相似，學界因此發現，這些演算法其實都在解同一類問題。<br>
<br>
同時，HSP 也清楚界定了量子計算的已知邊界：<br>
Abelian(阿貝爾交換群)可高效解<br>
Non-Abelian(非阿貝爾群，如:對稱群)至今仍是開放難題`,
            imageSource: 'https://en.photo-ac.com/photo/24233602/my-self'
        },

        // ========== 哈密頓模擬 ==========
        'BQP': {
            type: 'framework',
            name: 'BQP Complexity Class (1993)',
            author: 'Ethan Bernstein, Umesh Vazirani',
            goal: '定義量子電腦運算的極限與能力範圍',
            concept: '定義了量子電腦運算的極限與能力範圍',
            computation: '',
            supplement: `B (Bounded-error)：容許有錯誤，但錯誤率低於 1/3 (可透過重複執行降低)。<br>
Q (Quantum)：使用量子電腦。<br>
P (Polynomial)：在多項式時間內完成。<br>
<br>
階層關係：$P \\subseteq BQP \\subseteq PSPACE$ ....(附圖)<br>
<br>
<strong>文獻：</strong>"Quantum complexity theory" (1993)`,
            story: `在量子計算剛起步時，大家把量子電腦當成魔法，以為它能瞬間算出所有答案。Bernstein 和 Vazirani 這兩位電腦科學家站出來劃下了界線。
<br>
他們定義了 BQP，就像是在地圖上畫出了量子電腦的「領土」。<br>

這告訴我們：量子電腦不是全能的上帝 (不能解不可判定問題)，也不是單純的超級電腦 (它能解 P 以外的問題)。BQP 這個框框，至今仍是所有量子演算法設計者試圖填滿的戰場。`,
imageSource: 'https://www.researchgate.net/figure/NP-Complete-problems-are-outside-the-BQP-class-meaning-that-quantum-computers-can-not_fig1_371318355'
},
        'QRW': {
            type: 'tool',
            name: 'Quantum Random Walk (1993)',
            author: 'Yakir Aharonov, Lorenzo Davidovich, Noah Zagury',
            goal: '探討量子疊加跟干涉的隨機行走，和古典隨機擴散有何區別',
            concept: `定義硬幣算符C(Coin)、位移算符S(Shift)<br>
丟硬幣決定下一步為一方向`,
            computation: '',
            supplement: `量子演化須滿足可逆，因此只有位移算符來行走不可逆(假設觀測到走到a點，無法得知上一步是從哪個方向到a點)，加入硬幣算符就能知道是丟到哪個硬幣而走這條路到a點(可逆)。
<br>
<strong>文獻：</strong>"Quantum random walks" (1993)`,
            story: `1993的 QRW 只是純粹從隨機行走的理念出發，直到後來才應用於圖論與哈密頓模擬。`,
            imageSource: 'https://ibco.com.tw/turing-college/%E9%87%8F%E5%AD%90%E8%A1%8C%E8%B5%B0%E8%A8%88%E7%AE%97Quantum-Walk-Computing%E7%9A%84%E9%9D%A9%E5%91%BD%E6%80%A7%E7%AA%81%E7%A0%B4%E7%90%86%E8%AB%96%E5%AF%A6%E7%8F%BE%E8%88%87%E6%87%89%E7%94%A8/'
        },
        'Trotterized': {
            type: 'method',
            name: 'Hamiltonian Simulation (Trotterized) (1996)',
            author: 'Seth Lloyd',
            goal: '證明Gate-Based的量子電腦可做哈密頓模擬',
            concept: `使用Trotter方法引入 $t$ 變數令 $t$ 很小，帶入BCH公式後可忽略 $t$ 多次項，使得複雜的哈密頓量可以看成對局部量子位元的閘操作而可行。`,
            computation: '',
            supplement: `1. 哈密頓量H：材料、組合問題等...都能描述成哈密頓量 $H$ 屬 $N \\times N$ 矩陣<br>
   其中 $H|\\psi\\rangle=E_i|\\psi_i\\rangle$<br>
   H的特徵值對應材料能量、組合成本等<br>
   H的特徵狀態對應材料排列、最佳組合等<br>
2. 含時間演化的薛丁格方程 $e^{-iHt}|\\psi_0\\rangle=|\\psi_t\\rangle$<br>
   表示初始狀態 $|\\psi_0\\rangle$ 經過操作演化 $t$ 秒後變成 $|\\psi_t\\rangle$<br>
3. $e^A$ 由泰勒展開定義 $e^A=I+A+A^2/2!+...+A^n/n!$<br>
4. 交換子 (Commutator)：$[A, B]=AB-BA$<br>
<br>
<strong>問題：</strong>假設兩個矩陣A, B<br>
其中 $[A, B]=AB-BA =0$(對易) 不等於0(不對易)<br>
滿足對易：$e^A \\cdot e^B = e^{(A+B)}$<br>
不對易BCH公式：$e^A \\cdot e^B = e^{(A+B) + 1/2[A, B] + 1/12[A, [A, B]] - 1/12[B, [A, B]] + ...}$ 誤差項<br>
已知每個量子閘運算都是酋操作，令 $e^A$ 跟 $e^B$，$A, B$ 為2x2量子操作矩陣(不對易)<br>
因此設 $e^H=e^{(A+B)}$ 則 $e^{(A+B)} \\neq e^A \\cdot e^B$ 無法將哈密頓量拆解成量子閘 $A \\otimes B$ 對量子位元操作<br>
<br>
<strong>解決方法：</strong>使用Trotter方法帶入BCH 得 $e^{Ht} = e^{(A+B)t + t^2/2[A, B] + ...}$ 誤差項 $= e^{At} \\cdot e^{Bt}$<br>
令 $t=\\Delta t$ 則 $e^{H\\Delta t} = e^{(A+B)\\Delta t} \\approx e^{A\\Delta t} \\cdot e^{B\\Delta t}$ (成功分離量子閘操作 $e^{A\\Delta t}$ 和 $e^{B\\Delta t}$)
<br>
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
            supplement: `<br><strong>文獻：</strong>"Quantum Computation by Adiabatic Evolution"`,
            story: `在2001-2002年從理論上證明了通用的AQC和通用的Gate-based量子計算兩者等價，只不過截止至2025末，目前只實現了通用Gate-based量子電腦，尚未存在通用的絕熱量子計算電腦(AQC)。`,
            imageSource: 'https://www.researchgate.net/figure/A-a-Adiabatic-quantum-optimization-AQO-and-b-Chimera-architecture-of-the-D-wave_fig5_349878055'
        },
        'DTQW': {
            type: 'tool',
            name: 'Discrete-Time Quantum Walk (2004-2012)',
            author: 'Andris Ambainis/ Mario Szegedy/ Berry-Childs Algorithm',
            goal: '將量子行走分別應用於搜尋、圖論(馬可夫鏈)、哈密頓模擬',
            concept: `利用 疊加態 (Superposition) 同時探索多條路徑，並透過 量子干涉 (Interference) 消除錯誤路徑（破壞性干涉）並增強正確路徑（建設性干涉）。<br>
<br>
1. 搜索：Ambainis 的元素相異性 (2004) - 給定 N 個元素的列表中，判斷是否存在兩個相同的元素 $(x_i = x_j)$。<br>
2. 圖論：Szegedy 的馬可夫鏈通用框架 (2004) - 目標是將任何古典馬可夫鏈轉換為量子漫步，藉此加速尋找圖中的目標節點(Hitting Time)或判斷圖的連通性。<br>
3. 模擬：Berry & Childs 從圖到物理模擬 (2012-2016) - 解決高精度哈密頓量模擬問題。`,
            computation: '',
            supplement: `搜索：相異元素問題，古典演算法需要 $O(N)$ 次查詢，量子漫步只需 $O(N^{2/3})$ 次<br>
圖論：古典遊走的混合時間取決於譜間隙 $\\delta$，量子漫步為 $\\sqrt{\\delta}$<br>
哈密頓模擬：傳統的 Trotter 切分法（誤差較大）。他們利用量子漫步算符的數學特性，實現了對 $t$ 和誤差 $\\epsilon$ 具有更佳漸進複雜度的模擬算法。<br>
<br>
<strong>文獻：</strong>
"Quantum walks on graphs" (2001)<br>
搜索-"Quantum walk algorithm for element distinctness"<br>
圖論-"Quantum Speed-Up of Markov Chain Based Algorithms"<br>
模擬-"Black-box Hamiltonian simulation and unitary implementation"`,
            story: `1993 QRW隨機行走出現後，直到1996 Grover搜索出現，為了超越Grover應用，2004 Ambainis將 QW應用於求解更複雜問題(即元素相異性問題)，證明非單純搜尋問題上也有多項式加速的例子，展現 DTQW的強大功能。`,
            imageSource: 'https://www.researchgate.net/figure/Quantum-circuit-representation-of-the-discrete-time-quantum-walk-The-quantum-coin-flip_fig1_249011868'
        },
        'BCH': {
            type: 'algorithm',
            name: 'Higher-Order Trotter-Suzuki Decomposition (2005-2007)',
            author: 'Masuo Suzuki (數學基礎 1990s) / Dominic W. Berry, Andrew Childs 等人',
            goal: '降低原本Lloyd方法哈密頓模擬的電路深度 (Depth) / 提高模擬精確度',
            concept: `關鍵字：Trotterized、BCH 公式、交換子 (Commutator)、對稱化 (Symmetrization)、遞迴結構 (Fractal)<br>
<br>
利用 BCH 公式的逆向思維，將電路排列成對稱結構 (例如 $A/2 \\to B \\to A/2$) 或遞迴結構。<br>
這種特殊的排列方式，就像是數學上的「相消干涉」，能讓展開式後面的誤差項（即 BCH 中的交換子 $[A, B]$ 等誤差項）自動互相抵銷。<br>
既然誤差被抵銷了，我們就可以使用較大的時間步伐 (Large Time Step) 來模擬，大幅減少所需的邏輯閘總數。`,
            computation: '',
            supplement: `1. BCH公式：$e^A \\cdot e^B = e^{(A+B) + 1/2[A, B] + 1/12[A, [A, B]] - 1/12[B, [A, B]] + ...}$ 誤差項<br>
2. 交換子 (Commutator)：$[A, B]=AB-BA$<br>
<br>
<strong>文獻：</strong>
數學基礎-"Fractal decomposition of exponential operators with applications to many-body theories" (1990)<br>
補償算法-"Efficient Quantum Algorithms for Simulating Sparse Hamiltonians" (2007)`,
            story: `直觀的解決Trotterized方法問題，原本令 $t$ 很小時，需要執行多次才完成模擬導致電路太深，因此放寬 $t$ 切分再補償BCH的誤差項即可。`,
            imageSource: 'https://www.researchgate.net/figure/a-Circuit-structure-of-the-lowest-order-Suzuki-Trotter-decomposed-time-evolution_fig9_349655313'
        },
        'CTQW': {
            type: 'tool',
            name: 'Continuous-Time Quantum Walk (1998)',
            author: 'Edward Farhi / Sam Gutmann / Andrew Childs',
            goal: '利用連續時間量子系統的哈密頓量(自然演化)來解決圖論遍歷與空間搜索問題',
            concept: `利用薛丁格方程式支配的連續時間演化算子 $U(t) = e^{-iHt}$，其中 H 為圖的鄰接矩陣。不使用硬幣算符(Coin)，而是直接依賴節點間的耦合與位能。<br>
<br>
1. 圖論遍歷：Childs 的指數加速 (2003) - 穿隧效應 (Quantum Tunneling)：在黏合樹問題中，古典隨機遊走會迷失在圖中間呈現指數成長的節點群中（找不到路）。CTQW 利用量子波包的穿隧特性，能夠保持相干性，直接「穿過」中間的瓶頸區域到達出口。<br>
2. 空間搜索：Childs & Goldstone 的空間搜尋 (2004) - 能量共振與局域化 (Resonance & Localization)：將目標節點的能量設定得比其他節點低（勢阱）。系統演化時，量子態會從均勻疊加態逐漸塌縮（局域化）並集中在能量最低的目標節點上。`,
            computation: '',
            supplement: `圖論遍歷：這是 CTQW 最著名的戰役。針對黏合樹圖形，古典演算法需要 $O(2^n)$ 指數時間才能走到出口，而 CTQW 只需要 $O(n)$ 多項式時間。這是首個證明在 Oracle 問題外具有指數級加速的案例。<br>
空間搜索：在 2D 網格等多維空間圖形上，CTQW 可以達到與 Grover 類似的 $O(\\sqrt{N})$ 加速（視維度 $d$ 而定）。<br>
差異：DTQW 需要「擲硬幣 (Coin)」來決定方向；CTQW 不需要硬幣，完全由圖的結構 (Hamiltonian) 驅動流動。<br>
<br>
<strong>文獻：</strong>
起源-"Quantum computation and decision trees" (1998)<br>
指數加速-"Exponential algorithmic speedup by quantum walk" (2003)<br>
空間搜索-"Spatial search by quantum walk" (2004)`,
            story: `早在 1998 年，Farhi 和 Gutmann 就提出了連續時間量子漫步的概念，當時主要被視為物理模擬的一種形式。學界原本認為量子漫步頂多像 Grover 一樣提供二次方加速。
<br>
直到 2003 年，Andrew Childs 等人設計出了「黏合樹 (Glued Trees)」這個特殊的迷宮圖，並證明 CTQW 可以像幽靈一樣穿牆而過，實現了驚人的指數級加速。這項發現震驚了學界，證明了量子漫步不僅僅是搜資料的工具，更是解決特定拓撲結構問題的「核武器」。`,
imageSource: 'https://ibco.com.tw/turing-college/%E9%87%8F%E5%AD%90%E8%A1%8C%E8%B5%B0%E8%A8%88%E7%AE%97Quantum-Walk-Computing%E7%9A%84%E9%9D%A9%E5%91%BD%E6%80%A7%E7%AA%81%E7%A0%B4%E7%90%86%E8%AB%96%E5%AF%A6%E7%8F%BE%E8%88%87%E6%87%89%E7%94%A8/'
},
        'LCU': {
            type: 'tool',
            name: 'Linear Combination of Unitaries (2012)',
            author: 'Andrew Childs, Nathan Wiebe, Berry et al.',
            goal: '讓只能做「乘法」(閘的連續操作) 的量子電腦學會做閘的「加法」(矩陣線性組合)。',
            concept: `關鍵字：線性組合酋分解、振幅係數分配、多工器<br>
<br>
利用輔助位元 (Ancilla) 將係數編碼為振幅，再透過受控操作 (Control) 將不同的 Unitary 疊加在一起。最後透過測量輔助位元，將系統投影到我們想要的線性組合上。`,
            computation: '',
            supplement: `線性組合酋分解：$A = c_1U_1 + c_2U_2 + ...$ (即 $A = \\sum c_i \\cdot U_i$)<br>
哈密頓分解：將 H 哈密頓矩陣描述成酋(么正)矩陣的線性組合<br>
成功機率：LCU 不是 100% 成功的。它有一定的機率測量到輔助位元為 $|0\\rangle$ (成功)，若失敗則得到「垃圾態」。通常需搭配 振幅放大 (Amplitude Amplification) 技術提高成功率。
<br>
<strong>文獻：</strong>"Hamiltonian simulation using linear combinations of unitary operations"
（註：基礎技術散見於多篇論文，如 Long 2006, Childs & Wiebe 2012)`,
            story: `在早期量子演算法中，大家只會把閘串聯起來（乘法）。LCU 的出現是一個概念上的突破，它告訴我們：只要稍微犧牲一點機率（使用輔助位元），我們就可以打破「只能做 Unitary」的限制，在量子電腦上自由地組裝出任何想要的矩陣（包含哈密頓量本身）。`,
            imageSource: 'https://www.researchgate.net/figure/A-circuit-implementing-a-linear-combination-of-4-unitaries_fig2_380070208'
        },
        'Taylor': {
            type: 'algorithm',
            name: 'Hamiltonian Simulation via Taylor Series (2012)',
            author: 'Andrew M. Childs, Nathan Wiebe',
            goal: '突破 Trotter 方法的精度瓶頸，用不同方法實現哈密頓模擬。',
            concept: `關鍵字：LCU、泰勒展開、哈密頓量分解<br>
<br>
將時間演化算符 $e^{-iHt}$ 進行泰勒級數展開，將其視為一系列 $H$ 的高次項 $H^k$ 的加權總和，並利用 LCU 工具來執行這個巨大的加法。`,
            computation: '',
            supplement: `1. 泰勒展開：$e^{-iHt}= I - iHt + (-iHt)^2/2! + ... + (-iHt)^n/n!$<br>
2. 截斷誤差 (Truncation Error)：我們取前 K 項。由於階乘 $k!$ 成長極快，誤差項收斂得非常快 (比 Trotter 快得多)。<br>
3. 不知情振幅放大 (Oblivious Amplitude Amplification)：這篇論文引入了特殊的振幅放大技術，讓 LCU 的成功率趨近 1。<br>
<br>
<strong>文獻：</strong>"Hamiltonian simulation using linear combinations of unitary operations" (2012)`,
            story: `在 Lloyd (1996) 之後的十幾年，大家都困在「如何把時間切得更細」(Trotter) 的思維裡，認為模擬精度跟運算量一定是多項式關係 (Polynomial)。
<br>
Childs 和 Wiebe 在 2012 年打破了這個框架，他們心想：「既然切時間會有交換子誤差，那我們乾脆不要切時間了，直接算泰勒級數！」
<br>
這項技術將模擬誤差的代價從 $O(1/\\epsilon)$ 驚人地降低到 $O(\\log(1/\\epsilon))$。這為後來的 Qubitization 奠定了基礎。`,
imageSource: 'https://arxiv.org/pdf/1202.5822'
},
        'QSP': {
            type: 'framework',
            name: 'Quantum Signal Processing (2016)',
            author: 'Guang Hao Low, Isaac L. Chuang',
            goal: '在單一量子位元上，透過一組可控的旋轉序列，合成出任意多項式函數變換。$x$ through $U$ operator to $P(x)$',
            concept: `使用 $R_z, R_x$ 旋轉組合可產生任意函數。`,
            computation: '',
            supplement: `要讓輸入 $x$ 經過量子電路得到 $P(x)$ 函數：<br>
傳統方法使用CNOT、X Gate等組合電路需要大量輔助位元。<br>
QSP只需1個位元，透過 $R_z(\\phi_n), R_x(\\theta)$ 即可獲得 $P(x)|0\\rangle+junk$，將函數編碼於單位元機率幅。<br>
<br>
<strong>文獻：</strong><br>
理論基礎-"Methodology of Resonant Equi-Pulse Sequences for Quantum Control" (2016)<br>
哈密頓模擬應用-"Optimal Hamiltonian Simulation by Quantum Signal Processing" (2016, PRL)`,
            story: `在 QSVT 統一大矩陣運算之前，Low 和 Chuang 先解決了一個更根本的問題：「如何完美控制一顆量子位元？」
<br>
傳統上，如果要對量子位元做複雜操作，大家會用一堆通用閘去逼近。但這兩位作者回頭去看 80 年代的 NMR 技術，發現只要用最簡單的 X 軸和 Z 軸旋轉交替，就能變出魔術。
<br>
他們證明了：只要你能轉動 Z 軸，你就能把 X 軸輸入的訊號變成任何你想要的多項式形狀。這篇論文雖然當時看起來只是控制理論的突破，但它其實是後來整個量子演算法「大統一理論」的種子——因為後來他們發現，只要把這顆「單量子位元」換成「Block Encoding 的大矩陣」，這套邏輯竟然完全通用！`,
imageSource: 'https://en.photo-ac.com/photo/24233602/my-self'
},
        'Block': {
            type: 'tool',
            name: 'Block Encoding (2016-2019)',
            author: 'Guang Hao Low, Isaac L. Chuang, András Gilyén',
            goal: '將一個任意矩陣 A (可能是非么正的、非方陣的) 嵌入到一個更大的酋(么正)矩陣 U 的左上角區塊中，以便量子電腦可以對其進行操作。',
            concept: `1. 嵌入 (Embedding)：<br>
量子電腦只能執行 Unitary(酋) 操作。如果我們想對一個普通的矩陣 A 進行運算，我們必須把它「偽裝」成一個 Unitary。<br>
我們構造一個更大的矩陣 U，使得當輔助位元 (Ancilla) 處於 $|0\\rangle$ 態時，系統位元所經歷的操作正好是 A (通常會除以一個縮放常數 $\\alpha$)`,
            computation: '',
            supplement: `LCU本質上就屬於一種Block Encoding<br>
<br>
1. 標準輸入格式 (Standard Input)：<br>
現在最先進的演算法 (Qubitization, QSVT) 都不再直接討論哈密頓量 H，而是假設你已經給定了一個 U (Block Encoding of H)。它是現代演算法的「標準接口」。<br>
2. 縮放因子 (Normalization factor $\\alpha$)：<br>
因為 Unitary 的每個元素絕對值不能超過 1，如果矩陣 $A$ 的元素很大，我們必須縮小它 ($A/\\alpha$) 才能塞進去。這個 $\\alpha$ 越小越好，因為成功機率通常與 $1/\\alpha^2$ 成正比。
<br>
<strong>文獻：</strong>
定義與應用-"Quantum singular value transformation and beyond: exponential improvements for quantum matrix arithmetics" (2019)
（註：早期概念-"Hamiltonian simulation by qubitization" (Low & Chuang, 2016))`,
            story: `在 2015 年之前，量子演算法的設計者通常是「看菜吃飯」，針對不同的矩陣性質設計不同的電路（稀疏的用一種，稠密的用一種）。
<br>
Guang Hao Low 等人引入 Block Encoding 的概念後，徹底改變了遊戲規則。他們說：「不管你的矩陣長什麼樣子，先把它封裝成這個標準的 $U$ 盒子。」
<br>
這個抽象化層次 (Abstraction Layer) 的提升，讓後續的演算法設計者（如 QSVT 的開發者）不需要煩惱底層矩陣怎麼做，只要專注於處理這個 $U$ 即可。這就像古典程式設計中，從「組合語言」進化到了「物件導向」，Block Encoding 就是那個將數據封裝好的「物件」。`,
imageSource: 'https://quantumcomputing.stackexchange.com/questions/18197/in-the-context-of-block-encoding-what-does-0-rangle-otimes-i-represent'
},
        'VQE': {
            name: 'Variational Quantum Eigensolver (2014)',
            author: 'Peruzzo et al.',
            goal: '求解分子和材料的基態能量',
            concept: 'VQE是近期量子電腦最重要的應用之一。作為混合量子-古典算法，它結合了量子電腦的態準備能力和古典電腦的優化能力，特別適合當前的NISQ時代量子裝置。',
            computation: `<strong>核心思想：</strong>使用變分原理<br>
<br>
$$E_0 = \\min_{|\\psi\\rangle} \\langle\\psi|H|\\psi\\rangle \\leq \\langle\\psi(\\theta)|H|\\psi(\\theta)\\rangle$$<br>
<br>
<strong>算法流程：</strong>

**1. 參數化量子電路（Ansatz）**

$$|\\psi(\\theta)\\rangle = U(\\theta)|0\\rangle$$

例如：$U(\\theta) = \\prod_i R_y(\\theta_i) \\text{CNOT}_{i,i+1}$

**2. 量子測量能量**

$$E(\\theta) = \\langle\\psi(\\theta)|H|\\psi(\\theta)\\rangle = \\sum_i c_i \\langle P_i \\rangle$$

分解 $H = \\sum_i c_i P_i$（Pauli算符）

**3. 古典優化**

使用梯度下降或其他優化器：
$$\\theta_{\\text{new}} = \\theta_{\\text{old}} - \\eta \\nabla_{\\theta} E(\\theta)$$

**4. 迭代收斂**

重複步驟2-3直到 $E(\\theta)$ 收斂到最小值`,
            supplement: `<strong>為什麼是混合算法？</strong><br>
• 量子部分：態準備 + 期望值測量<br>
• 古典部分：參數優化（梯度計算、更新規則）<br>
• 💡 無法被純量子QSVT框架表示<br>
<br>
<strong>優勢：</strong><br>
• 對量子誤差有一定容忍度<br>
• 電路深度可控（適合NISQ裝置）<br>
• 不需要量子糾錯<br>
<br>
<strong>應用：</strong><br>
• 分子基態能量計算<br>
• 藥物設計<br>
• 材料科學<br>
• 組合優化問題<br>
<br>
<strong>文獻：</strong>"A variational eigenvalue solver on a photonic quantum processor" (2014)`,
            story: `2014年，由Alberto Peruzzo領導的團隊首次在實驗上實現了VQE，成功計算了氫分子的基態能量。這標誌著量子化學計算進入實用階段。
<br>
<strong>NISQ時代的明星：</strong>
VQE被認為是最有可能在近期實現量子優勢的算法之一。因為：<br>
• 不需要完美的量子電腦<br>
• 電路深度較淺<br>
• 可以在現有裝置上運行<br>
<br>
<strong>工業應用：</strong><br>
• Google、IBM、IonQ等公司都在開發VQE應用<br>
• 藥廠對VQE在藥物設計的應用高度關注<br>
• 2019年Google使用VQE計算了更大的分子<br>
<br>
<strong>當前挑戰：</strong>
如何設計好的Ansatz（參數化電路）、如何處理貧瘠高原（barren plateau）問題、如何提高收斂速度等，都是活躍的研究方向。`,
imageSource: 'https://www.entangletech.tw/lesson/optim-07'
},
        'QAOA': {
            type: 'algorithm',
            name: 'Quantum Approximate Optimization Algorithm (2014)',
            author: 'Edward Farhi, Jeffrey Goldstone, Sam Gutmann',
            goal: '用古典結合量子電腦，求解「組合優化問題」(Combinatorial Optimization Problems) 的近似最佳解',
            concept: `1. 絕熱演化：$H(t)= (1-S(t))H_0 + S(t)H_1$，$S(t)=\\begin{cases}0, & t=0 \\\\ 1, & t\\to\\infty\\end{cases}$<br>
系統從 $H_0$ **緩慢**演化至 $H_1$ 時，系統能量始終處於基態(最低能量)<br>
2. ...`,
            computation: '',
            supplement: `與VQE不同，VQE電路可任意設計。QAOA受絕熱計算啟發，使用固定交疊電路架構，用離散步長模擬絕熱演化。<br>
<br>
QAOA 將「尋找最低能量」對應到解決實際工程與商業問題，其中 $E_0$ 對應為最低成本，$|\\Phi\\rangle$ 對應為最佳組合：<br>
QAOA可解決問題可視化：(文氏圖)<br>
MaxCut (最大切割問題)：將網路節點分成兩群，使切斷的連線數最大化 (應用於晶片佈局、社群分群)。<br>
• 旅行推銷員問題：物流路徑規劃，尋找最短路徑。<br>
• 投資組合優化：在風險限制下尋找最大獲利的資產組合。<br>
Graph coloring(著色問題)：<br>
• 基地台頻譜分配<br>
• 交通流量<br>
<br>
<strong>文獻：</strong>"A Quantum Approximate Optimization Algorithm" (2014)`,
            story: `這篇論文是 Edward Farhi 團隊 (也是絕熱量子計算的發明者) 為了證明「量子霸權」而設計的。<br>
<br>
當時學界已經知道「絕熱量子計算 (AQC)」一定能找到最佳解，但 AQC 需要跑非常久的時間。Farhi 思考：能不能把緩慢的絕熱演化過程，切成幾步「大跨步」的邏輯閘操作 (Trotterization 的概念)，並在 Gate-Based 量子電腦上執行？
<br>
結果誕生了 QAOA。它繼承了 AQC 的理論保證，又具備 VQE 的變分彈性。它是目前公認在 NISQ 時代，最有希望在「優化問題」上超越古典電腦的候選人，也是現在各大科技公司 (Google, IBM) 測試硬體性能的標準考題。`,
imageSource: 'https://www.entangletech.tw/lesson/optim-06'
},
        // ========== 振幅放大 ==========
        'Grover': {
            type: 'algorithm',
            name: 'Grover\'s Algorithm (1996)',
            author: 'Lov K. Grover',
            goal: '在無結構資料庫 (Unstructured Database) 中搜尋特定標記的項目。',
            concept: `將狀態看成 $|\\Phi\\rangle=|\\text{目標}\\rangle+|\\text{非目標}\\rangle$ 兩組正交狀態，先給予目標負相位，再以 $|\\Phi\\rangle$ 做反射得到第一次Grover運算 $|\\Phi_1\\rangle$，重複數次使目標得到最高機率。
<br>
Oracle (黑盒)：識別正確答案。將目標狀態 $|w\\rangle$ 的相位翻轉 (Phase Flip)，$f(x)=1 \\to -1$。<br>
擴散算符 (Diffusion Operator)：關於平均值的反射 (Inversion about the mean)。將所有振幅以平均值為中心進行鏡像翻轉，此舉會放大被 Oracle 標記（變負號）的那個項目的振幅。<br>
幾何旋轉：將搜尋過程視為在「目標態」與「非目標態」構成的 2D 平面上旋轉。`,
            computation: `<strong>問題：</strong>在 $N$ 個項目中找到滿足條件的項目

<strong>步驟1：</strong>初始化為均勻疊加態

$$|\\psi\\rangle = H^{\\otimes n}|0\\rangle^{\\otimes n} = \\frac{1}{\\sqrt{N}}\\sum_{x=0}^{N-1}|x\\rangle$$

<strong>步驟2：</strong>Grover迭代（重複 $O(\\sqrt{N})$ 次）

a) Oracle標記：
$$U_f|x\\rangle = \\begin{cases} -|x\\rangle & \\text{if } f(x)=1 \\\\ |x\\rangle & \\text{if } f(x)=0 \\end{cases}$$

b) Diffusion擴散算子：
$$U_s = 2|\\psi\\rangle\\langle\\psi| - I$$

<strong>步驟3：</strong>測量得到目標態，成功機率接近1`,
            supplement: `二次方加速：古典需要 $O(N)$，量子只需 $O(\\sqrt{N})$。雖然不是指數加速，但在 $N$ 極大時（如 AES 破解）影響巨大。<br>
<br>
過度旋轉 (Over-rotation)：如果旋轉次數太多，成功率反而會下降（就像指針轉過頭了）。<br>
<br>
<strong>文獻：</strong>"A fast quantum mechanical algorithm for database search" (1996)`,
            story: `這是繼 Shor 演算法之後的第二顆震撼彈。Shor 證明了量子電腦對「特定數學結構」問題有效，而 Grover 則證明了量子電腦對「毫無結構」的蠻力搜尋也有優勢。它改變了人們對量子優勢廣度（Breadth）的看法。`,
            imageSource: 'https://www.researchgate.net/figure/The-Grovers-algorithm-circuit_fig1_355342607'
        },
        'AA': {
            type: 'tool',
            name: 'Amplitude Amplification (1997-2000)',
            author: 'Gilles Brassard, Peter Høyer, Michele Mosca, Alain Tapp',
            goal: '將 Grover 演算法一般化，提高任何量子演算法成功量測到目標狀態的機率。',
            concept: `通用算符 $\\mathcal{A}$：不再限制於均勻疊加態，適用於任何用演算法 $\\mathcal{A}$ 製備出的初始狀態。<br>
廣義 Grover 迭代：定義 $Q = - \\mathcal{A} S_0 \\mathcal{A}^{-1} S_\\chi$。<br>
• $S_\\chi$：標記目標狀態。<br>
• $\\mathcal{A} S_0 \\mathcal{A}^{-1}$：對初始狀態做反射。<br>
機率提升：如果原本成功的機率是 $p$，經過 $O(1/\\sqrt{p})$ 次迭代後，成功率可接近 100%。`,
            computation: '',
            supplement: `Oblivious AA：前幾題提到的「不知情振幅放大」，是 AA 的一個變體，專門用於哈密頓模擬等 Unitary 操作的機率恢復。<br>
<br>
<strong>文獻：</strong>"Quantum Amplitude Amplification and Estimation"(2000)`,
            story: `Grover 提出演算法後，大家意識到「搜尋」其實只是表象，其數學本質是「振幅的幾何旋轉」。Brassard 等人將這個概念提取出來，發明了 AA。從此，Grover 不再只是一個獨立的搜尋演算法，而變成了一個可以掛載在其他演算法後面、用來「增強訊號」的標準插件 (Subroutine)。`,
            imageSource: ''
        },
        'AE': {
            type: 'tool',
            name: 'Amplitude Estimation (2000)',
            author: 'Gilles Brassard, Peter Høyer, Michele Mosca, Alain Tapp',
            goal: '估算出目標出現的機率（或數量）。即 Quantum Counting。',
            concept: `關鍵字：QPE/ Grover<br>
<br>
Grover 算符 $Q$ 的特徵值與目標機率 $p$ 有關 ($\\lambda = e^{\\pm i 2\\theta}, \\sin^2\\theta = p$)。<br>
相位估計：使用 QPE (Quantum Phase Estimation) 來估計 Grover 算符的特徵相位 $\\theta$。<br>
反推機率：由測得的 $\\theta$ 推算出振幅大小 $a$ 或機率 $p$。`,
            computation: '',
            supplement: `原本計算機率的方式，是使用多次測量統計結果。AE將振幅資訊轉換為相位資訊並測出。<br>
古典需要 $N$ 次採樣才能達到某個精度，AE 只需要 $\\sqrt{N}$ 次運算 (Grover 運算子)。<br>
<br>
量子蒙地卡羅 (Quantum Monte Carlo)：這是 AE 最重要的應用。它能以 $O(1/\\epsilon)$ 的速度收斂，比古典蒙地卡羅的 $O(1/\\epsilon^2)$ 快。這對金融衍生品定價、風險評估極具價值。
<br>
<strong>文獻：</strong>"Quantum Amplitude Amplification and Estimation" (2000)`,
            story: `如果說 AA 是「大海撈針」（把針吸過來），那 AE 就是「不用撈針，也能算出海裡有幾根針」。這讓量子電腦的應用從單純的「找解」擴展到了「數值積分」與「統計估計」領域，成為後來金融量子計算 (Quantum Finance) 的核心引擎。`,
            imageSource: 'https://www.nature.com/articles/s41534-021-00379-1'
        },
        'Fixed-AA': {
            type: 'tool',
            name: 'Fixed-Point Amplitude Amplification (2014)',
            author: 'T.J. Yoder, G.H. Low, I.L. Chuang',
            goal: '解決傳統 Grover/AA 的「過度旋轉」問題，在不知道確切成功機率的情況下也能穩定收斂。',
            concept: `1. 失去振盪 (Loss of oscillation)：傳統 AA 像是一個鐘擺，轉過頭會盪回來。Fixed-AA 設計了一種特殊的遞迴相位序列（不再只是轉 180 度 $\\pi$），讓機率曲線呈現單調上升 (Monotonic)。<br>
2. 定點性質：一旦機率接近 1，它就會停在那裡，即使多做幾次運算也不會變壞。<br>
3. 保留相位資訊：它是構建 QSP 和解線性方程等非么正 (Non-unitary) 演算法的關鍵技術，因為它能避免破壞振幅之間的比例關係。`,
            computation: '',
            supplement: `<br><strong>文獻：</strong>"Fixed-point quantum search with an optimal number of queries" (2014)`,
            story: `這是 Low & Chuang 在發展 QSP/QSVT 過程中的重要前置工作。沒有 Fixed-AA，許多現代演算法的容錯率會很低。
<br>
傳統 Grover 演算法就像烤舒芙蕾，時間要抓得剛剛好，烤太久會塌掉（機率歸零）。MIT 團隊發明的 Fixed-AA 則像是一個有溫控的烤箱，溫度到了就保溫。這項技術的突破，直接移除了量子演算法需要「精確預知答案機率」這個不合理的限制，為後來的 QSP 鋪平了道路。`,
imageSource: 'https://www.nature.com/articles/s41598-022-15093-x'
},
        
        // 通訊協議
        '不可複製原理': {
            name: '量子不可複製原理',
            goal: '證明量子態無法完美複製',
            concept: '量子力學基本定理',
            circuit: '理論證明',
            process: '么正演化的線性性質'
        },
        '共軛編碼': {
            name: '共軛編碼',
            goal: '量子密碼學基礎',
            concept: '使用非正交基底編碼',
            circuit: '量子電路圖示意',
            process: '隨機基底選擇 + 測量'
        },
        'BB84': {
            name: 'BB84 Protocol',
            goal: '量子密鑰分發',
            concept: '利用量子態不可複製性保證安全',
            circuit: '量子電路圖示意',
            process: '隨機基底測量 + 公開比對 + 錯誤檢測'
        },
        'E91': {
            name: 'E91 Protocol',
            goal: '基於糾纏的量子密鑰分發',
            concept: '利用Bell不等式檢測竊聽',
            circuit: '量子電路圖示意',
            process: 'EPR對分發 + Bell測試'
        },
        'DI-QKD': {
            name: 'Device-Independent QKD',
            goal: '裝置無關量子密鑰分發',
            concept: '不信任測量裝置的安全協議',
            circuit: '量子電路圖示意',
            process: 'Bell不等式 + 隱私放大'
        },
        'B92': {
            name: 'B92 Protocol',
            goal: '簡化的量子密鑰分發',
            concept: '僅使用兩個非正交態',
            circuit: '量子電路圖示意',
            process: '簡化版BB84'
        },
        'Supercoding': {
            name: 'Superdense Coding',
            goal: '超密集編碼',
            concept: '傳送1個量子位元攜帶2個經典位元',
            circuit: '量子電路圖示意',
            process: 'EPR對 + 本地操作 + Bell測量'
        },
        'Teleporting': {
            name: 'Quantum Teleportation',
            goal: '量子態傳輸',
            concept: '利用糾纏態傳送量子訊息',
            circuit: '量子電路圖示意',
            process: 'Bell測量 + 經典通訊 + 么正操作'
        },
        'Entanglement': {
            name: 'Entanglement Swapping',
            goal: '糾纏交換',
            concept: '遠程建立糾纏態',
            circuit: '量子電路圖示意',
            process: 'Bell測量 + 糾纏轉移'
        },
        
        // ========== 集大成者 ==========
        'QSVT': {
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

可以實現任意度數 $d$ 的多項式變換。

<strong>統一表示：</strong>

幾乎所有量子算法都可以歸約為：
1. 將問題矩陣進行區塊編碼
2. 選擇適當的多項式 $P$
3. 應用QSVT實現 $P(A)$`,
            supplement: `QSVT框架統整了先前所有算法(古典電腦結合的除外)。
舊演算法為QSVT電路架構的特例，例如改變輸入狀態、旋轉閘的角度組合等，就能達成某個演算法的運算。

萬能鑰匙：Grover 是 QSVT 的 $P(x)$ 為低階多項式特例；HHL 是 $P(x)=1/x$ 的特例；哈密頓模擬是 $P(x)=e^{-ixt}$ 的特例。
最優性：已經證明 QSVT 在查詢複雜度 (Query Complexity) 上達到了理論極限。

<strong>文獻：</strong>"Quantum singular value transformation and beyond: exponential improvements for quantum matrix arithmetics" (2019)`,
            story: `比喻來說，先前的演算法屬於ASIC，每個算法對應一組電路。而QSVT為量子版FPGA，同樣電路架構改變參數即可運算不同演算法。

這是量子演算法發展史上的高光時刻。2019 年這篇論文證明了，過去二十年來發明的幾十種看似互不相關的量子演算法，其實全都是**「矩陣奇異值的多項式變換」**。這就像物理學家發現電力和磁力其實是同一個東西一樣。QSVT 簡化了演算法的設計流程：現在我們不需要設計複雜的量子電路，只需要設計一個「多項式」，剩下的交給 QSVT 框架就行了。`,
imageSource: 'https://en.photo-ac.com/photo/24233602/my-self'
},
    }
};

// 为所有项目添加默认详细信息
quantumData.categories.forEach(category => {
    category.subcategories.forEach(subcat => {
        subcat.items.forEach(item => {
            if (!quantumData.details[item.name]) {
                quantumData.details[item.name] = {
                    name: item.name,
                    goal: `${item.name} 的研究目標`,
                    concept: `${item.name} 的核心概念與原理`,
                    circuit: '量子電路圖示意（待補充）',
                    process: `${item.name} 的電路流程說明`
                };
            }
        });
    });
});

