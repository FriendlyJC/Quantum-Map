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
            description: `本區的概念最接近當時費曼所構想的量子電腦，即使用量子來模擬量子系統（或其他系統）的哈密頓量，並求解動態與靜態的目標。<br>
<br>
<strong>補充：</strong>
<br>
• <strong>動態演化：</strong>系統初始 $t=0$ 的狀態 $|\\varphi_0\\rangle$ 受哈密頓量作用，經過時間 $t$ 後演化成狀態 $|\\varphi_t\\rangle$
<br>
• <strong>靜態求解：</strong>某個哈密頓量描述的系統 $H$，求解其在什麼狀態組合 $|\\varphi\\rangle$ 時的系統能量最低，以及最低能量 $E_0$ 為多少。`
        },
        '振幅放大': {
            name: '振幅放大',
            description: '透過振幅放大算法，讓欲測量到的目標機率放大，提升量子電腦運算的成功率。對應量子的幾何結構。'
        }
    },

    // HSP 框架
    'HSP': {
            type: 'framework',
            name: 'Hidden Subgroup Problem (1995)',
            author: 'Ettinger, Høyer, Knill, Mosca et al.',
            goal: '從數學本質上歸納某一類演算法的運算問題類型(即隱藏的子群)',
            concept: '從數學本質上歸納某一類演算法的運算問題類型(即隱藏的子群)',
            computation: `
<div style="font-family: 'Times New Roman', serif; line-height: 1.6; color: #333; padding: 5px;">
    
    <div style="font-weight: bold; font-size: 1.1em; color: #00008B; border-bottom: 2px solid #00008B; padding-bottom: 5px; margin-bottom: 15px;">
        隱子群問題 (HSP) 的視覺化框架解析
    </div>

    <div style="margin-bottom: 15px;">
        這張圖非常直觀地描繪了 <strong>隱子群問題 (Hidden Subgroup Problem, HSP)</strong> 的數學結構。這是一個通用的框架，許多著名的量子演算法（如 Simon、Shor）都是這個問題的特例。<br>
        圖中展示了一個定義在群 <i>G</i> 上的函數 <i>f: G → X</i> 的特殊性質。
    </div>

    <div style="margin-bottom: 15px; background: #f9f9f9; padding: 10px; border-radius: 5px; border-left: 4px solid #333;">
        <div style="font-weight: bold; margin-bottom: 5px; font-size: 1.05em;">1. 左側大圓：群 <i>G</i> (The Group)</div>
        <ul style="margin: 0; padding-left: 20px;">
            <li>這是我們輸入的定義域（例如 <i>n</i> 位元的字串集合，或是整數集合）。</li>
            <li><strong>結構劃分：</strong>圖中將群 <i>G</i> 切割成好幾個雲朵狀的區塊。
                <ul style="margin-top: 5px; color: #444;">
                    <li><strong><i>K</i> 子群 (Subgroup K)：</strong>這是我們想要找出的「隱藏結構」。</li>
                    <li><strong><i>K</i> 的陪集 (Cosets, <i>Kᵢ</i>)：</strong>它們是子群 <i>K</i> 經過平移運算後產生的集合（例如 <i>x + K</i>）。</li>
                </ul>
            </li>
            <li style="margin-top: 5px; color: #006400;"><strong>重點：</strong>這些陪集將整個群 <i>G</i> 完美地分割 (Partition)，沒有重疊，且大小相同。</li>
        </ul>
    </div>

    <div style="margin-bottom: 15px; background: #f9f9f9; padding: 10px; border-radius: 5px; border-left: 4px solid #00008B;">
        <div style="font-weight: bold; margin-bottom: 5px; font-size: 1.05em;">2. 右側小圓：集合 <i>X</i> (The Set)</div>
        <div>
            這是函數 <i>f</i> 的輸出的對應域 (Codomain)。裡面包含了不同的函數值 <i>c, cᵢ, cⱼ</i> 等。
        </div>
    </div>

    <div style="margin-bottom: 15px; background: #fff0f0; padding: 10px; border-radius: 5px; border-left: 4px solid #B22222;">
        <div style="font-weight: bold; margin-bottom: 5px; font-size: 1.05em;">3. 中間的箭頭：函數映射 <i>f</i> (The Function)</div>
        <div>這張圖最關鍵的細節在於箭頭的走向，它揭示了 HSP 的兩大核心條件：</div>
        <ul style="margin-top: 8px; padding-left: 20px;">
            <li style="margin-bottom: 8px;">
                <strong>陪集內恆定 (Constant on Cosets)：</strong><br>
                從同一個雲朵（例如 <i>Kᵢ</i> 陪群）出發的所有箭頭，全部都指向右邊同一個點 (<i>cᵢ</i>)。這表示在同一個陪集內的輸入，經過 <i>f</i> 運算後會得到相同的輸出。
            </li>
            <li>
                <strong>陪集間區分 (Distinct on different Cosets)：</strong><br>
                不同的雲朵（例如 <i>Kᵢ</i> 和 <i>Kⱼ</i>）指向右邊不同的點 (<i>cᵢ ≠ cⱼ</i>)。這表示不同陪集的輸出是唯一的，不會混淆。
            </li>
        </ul>
    </div>

    <div style="margin-top: 20px; border-top: 1px dashed #999; padding-top: 15px;">
        <div style="font-weight: bold; font-size: 1.05em; margin-bottom: 8px;">總結：HSP 任務定義</div>
        <div style="margin-bottom: 10px;">
            給定一個黑盒子函數 <i>f</i> (Oracle)，我們已知它滿足上述圖中的結構——即：<br>
            <div style="text-align: center; font-weight: bold; margin: 5px 0; background: #eee; padding: 3px;">
                f(x) = f(y) ⟺ x - y ∈ K
            </div>
            我們的目標是：透過查詢這個函數 <i>f</i>，找出那個隱藏的子群 <i>K</i> 是什麼。
        </div>
        <div style="font-size: 0.95em; color: #555; background: #eef; padding: 8px; border-radius: 5px;">
            <strong>• 對應到 Simon 演算法：</strong><br>
            <i>K</i> 就是隱藏字串 <i>s</i> 生成的子群 {0, s}，陪集就是配對的 {x, x ⊕ s}。<br>
            <strong>• 對應到 Shor 演算法：</strong><br>
            <i>K</i> 就是週期 <i>r</i> 的倍數集合 <i>rℤ</i>，陪集就是具有相同餘數的數列。
        </div>
    </div>

</div>
`,
            supplement: `Deutsch/ Deutsch-Jorza/ Simon/ Shor(因式分解)/ 週期查找/ 離散對數...等問題都能規約為HSP問題。<br>
<br>
<strong>1. 群論 (Group Theory) 四大公理：</strong><br>
    若集合 G 與運算 ⋅ 構成一個群 (G, ⋅)，需滿足：<br>
    <div style="margin-left: 10px; background: #f9f9f9; padding: 5px; border-left: 3px solid #00008B;">
        • <strong>封閉性 (Closure)：</strong><br>
        &nbsp;&nbsp; ∀ a, b ∈ G  ⇒  a ⋅ b ∈ G<br>
        • <strong>結合律 (Associativity)：</strong><br>
        &nbsp;&nbsp; ∀ a, b, c ∈ G  ⇒  (a ⋅ b) ⋅ c = a ⋅ (b ⋅ c)<br>
        • <strong>單位元素 (Identity)：</strong><br>
        &nbsp;&nbsp; ∃ e ∈ G, s.t. ∀ a ∈ G,  a ⋅ e = e ⋅ a = a<br>
        • <strong>反元素 (Inverse)：</strong><br>
        &nbsp;&nbsp; ∀ a ∈ G, ∃ a⁻¹ ∈ G, s.t.  a ⋅ a⁻¹ = a⁻¹ ⋅ a = e
    </div>
    <br>
    <strong>2. HSP 分類 (依照群 G 的性質)：</strong><br>
    <table style="border-collapse: collapse; width: 100%; font-size: 0.9em;">
        <tr style="border-bottom: 1px solid #ccc;">
            <th style="text-align: left; color: #006400;">阿貝爾群 (Abelian)</th>
            <th style="text-align: left;">交換律 (ab=ba)，<span style="color: #006400;">可高效解</span></th>
        </tr>
        <tr>
            <td style="padding: 3px 0;">• <strong>ℤ₂ⁿ (Hypercube)</strong></td>
            <td>Simon's Algorithm (XOR運算)</td>
        </tr>
        <tr>
            <td style="padding: 3px 0;">• <strong>ℤₙ (Cyclic Group)</strong></td>
            <td>Shor's (Factoring, Period Finding)</td>
        </tr>
        <tr>
            <td style="padding: 3px 0;">• <strong>ℤ (Integer)</strong></td>
            <td>Discrete Logarithm (ECC加密)</td>
        </tr>
        <tr>
            <td style="padding: 3px 0;">• <strong>ℝ (Reals)</strong></td>
            <td>Pell's Equation (數論問題)</td>
        </tr>
        
        <tr style="border-bottom: 1px solid #ccc; border-top: 1px solid #ccc;">
            <th style="text-align: left; color: #B22222; padding-top: 10px;">非阿貝爾群 (Non-Abelian)</th>
            <th style="text-align: left; padding-top: 10px;">不交換，<span style="color: #B22222;">目前仍困難</span></th>
        </tr>
        <tr>
            <td style="padding: 3px 0;">• <strong>Dₙ (Dihedral)</strong></td>
            <td>Shortest Vector Problem (Lattice)</td>
        </tr>
        <tr>
            <td style="padding: 3px 0;">• <strong>Sₙ (Symmetric)</strong></td>
            <td>Graph Isomorphism (圖同構問題)</td>
        </tr>
    </table>
    <br>
    <span style="font-size: 0.85em; color: #666;">* 量子計算目前的黃金標準是解決 Abelian HSP (利用 QFT)；而 Non-Abelian HSP 仍是量子算法研究的前沿領域。</span>
</div>
<strong>文獻：</strong>"Quantum algorithms for solving problems with the hidden subgroup structure" (1995)`,
            story: `在 Shor 演算法出現後，學界回頭重新理解量子加速本質時，由量子計算社群逐步抽象總結所提出的統一數學框架。<br>
那些看似不同的問題，其量子解法卻高度相似，學界因此發現，這些演算法其實都在解同一類問題。<br>
<br>
同時，HSP 也清楚界定了量子計算的已知邊界：<br>
Abelian(阿貝爾交換群)可高效解<br>
Non-Abelian(非阿貝爾群，如:對稱群)至今仍是開放難題`,
            imageSource: 'https://en.photo-ac.com/photo/24233602/my-self'
    },

    // QSVT 集大成者
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

可以實現任意度數 $d$ 的多項式變換。<br>
<br>
<strong>統一表示：</strong>

幾乎所有量子算法都可以歸約為：<br>
Step 1. 將問題矩陣進行區塊編碼<br>
Step 2. 選擇適當的多項式 $P$<br>
Step 3. 應用QSVT實現 $P(A)$`,
            supplement: `QSVT框架統整了先前所有算法(古典電腦結合的除外)。<br>
舊演算法為QSVT電路架構的特例，例如改變輸入狀態、旋轉閘的角度組合等，就能達成某個演算法的運算。<br>
<br>
萬能鑰匙：<br>Grover 是 QSVT 的 $P(x)$ 為低階多項式特例；<br>HHL 是 $P(x)=1/x$ 的特例；<br>哈密頓模擬是 $P(x)=e^{-ixt}$ 的特例。<br>
最優性：已經證明 QSVT 在查詢複雜度 (Query Complexity) 上達到了理論極限。<br>
<br>
<strong>文獻：</strong>"Quantum singular value transformation and beyond: exponential improvements for quantum matrix arithmetics" (2019)`,
            story: `比喻來說，先前的演算法屬於ASIC，每個算法對應一組電路。而QSVT為量子版FPGA，同樣電路架構改變參數即可運算不同演算法。

這是量子演算法發展史上的高光時刻。2019 年這篇論文證明了，過去二十年來發明的幾十種看似互不相關的量子演算法，其實全都是**「矩陣奇異值的多項式變換」**。這就像物理學家發現電力和磁力其實是同一個東西一樣。QSVT 簡化了演算法的設計流程：現在我們不需要設計複雜的量子電路，只需要設計一個「多項式」，剩下的交給 QSVT 框架就行了。`,
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
