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
            name: 'Grover\'s Algorithm (1996)',
            author: 'Lov K. Grover',
            goal: '在無結構資料庫 (Unstructured Database) 中搜尋特定標記的項目。',
            concept: `將狀態看成 $|\\Phi\\rangle=|\\text{目標}\\rangle+|\\text{非目標}\\rangle$ 兩組正交狀態，先給予目標負相位，再以 $|\\Phi\\rangle$ 做反射得到第一次Grover運算 $|\\Phi_1\\rangle$，重複數次使目標得到最高機率。
<br>
Oracle (黑盒)：識別正確答案。將目標狀態 $|w\\rangle$ 的相位翻轉 (Phase Flip)，$f(x)=1 \\to -1$。<br>
擴散算符 (Diffusion Operator)：關於平均值的反射 (Inversion about the mean)。將所有振幅以平均值為中心進行鏡像翻轉，此舉會放大被 Oracle 標記（變負號）的那個項目的振幅。<br>
幾何旋轉：將搜尋過程視為在「目標態」與「非目標態」構成的 2D 平面上旋轉。`,
            computation: `<strong>問題：</strong>在 $N$ 個項目中找到滿足條件的項目<br>

<strong>步驟1：</strong>初始化為均勻疊加態

$$|\\psi\\rangle = H^{\\otimes n}|0\\rangle^{\\otimes n} = \\frac{1}{\\sqrt{N}}\\sum_{x=0}^{N-1}|x\\rangle$$

<strong>步驟2：</strong>Grover迭代{Oracle + Diffusion}（重複 $O(\\sqrt{N})$ 次）<br>

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
            computation: `
<div style="font-family: 'Times New Roman', serif; padding: 10px; line-height: 1.6;">

    <div style="margin-bottom: 10px;">
        <span style="color: #00008B; font-weight: bold;">問題：</span> 
        給定一個能夠以機率 <i>p</i> 產生正確解的演算法算子 <span style="font-family: math; font-weight: bold;">𝒜</span>，將其成功機率放大至接近 1。
    </div>

    <div style="margin-bottom: 15px;">
        <span style="color: #00008B; font-weight: bold;">步驟 1：</span> 
        使用算子 𝒜 初始化狀態 (替代 Grover 的 H<sup>⊗n</sup>)
        <div style="background: #f9f9f9; padding: 8px; border-left: 3px solid #B22222; margin-top: 5px;">
            |ψ⟩ = 𝒜|0⟩<sup>⊗n</sup> = sin(θ)|Good⟩ + cos(θ)|Bad⟩
        </div>
        <div style="font-size: 0.85em; color: #666; margin-top: 2px;">
            (這創造了一個包含目標解的非均勻疊加態)
        </div>
    </div>

    <div style="margin-bottom: 15px;">
        <span style="color: #00008B; font-weight: bold;">步驟 2：</span> 
        QAA 迭代 (重複 <i>O(1/√p)</i> 次)
        
        <div style="margin-top: 8px; margin-left: 10px;">
            <span style="font-weight: bold;">a) Oracle 標記 (Phase Flip)：</span>
            <div style="padding: 5px; font-family: math;">
                S<sub>χ</sub> = I - 2|Good⟩⟨Good|
            </div>
            <span style="font-size: 0.85em; color: #555;">(翻轉目標解的相位，圖中標示為 U<sub>g</sub>)</span>
        </div>

        <div style="margin-top: 8px; margin-left: 10px;">
            <span style="font-weight: bold;">b) Generalized Diffusion (廣義擴散)：</span>
            <div style="padding: 5px; font-family: math; background: #fff0f0; border-radius: 4px;">
                D = 𝒜 S₀ 𝒜<sup>†</sup>
            </div>
            <div style="font-size: 0.85em; color: #B22222;">
                其中 S₀ = 2|0⟩⟨0| - I (只對零態變號)
            </div>
            <span style="font-size: 0.85em; color: #555;">(這就是圖中 𝒜<sup>-1</sup> → S₀ → 𝒜 的由來，這是對「初始態」做反射)</span>
        </div>
    </div>

    <div style="margin-bottom: 20px;">
        <span style="color: #00008B; font-weight: bold;">步驟 3：</span> 
        測量得到目標態，成功機率接近 1
    </div>

    <div style="border-top: 1px dashed #999; padding-top: 10px;">
        <div style="font-size: 0.9em; font-weight: bold; margin-bottom: 5px;">Circuit Visualization (Match your image):</div>
        
        <div style="display: inline-flex; align-items: center; overflow-x: auto; white-space: nowrap; padding-bottom: 5px;">
            
            <div style="border: 1px solid #000; padding: 5px 10px;">𝒜</div>
            <div style="margin: 0 5px;">→</div>

            <div style="border: 2px dashed #B22222; padding: 5px; background: #fffafa; display: flex; align-items: center;">
                
                <div style="border: 1px solid #000; padding: 5px; background: #e0f7fa;">U<sub>g</sub></div>
                
                <div style="margin: 0 5px; font-size: 0.8em;">+</div>

                <div style="display: flex; gap: 3px; border: 1px solid #999; padding: 3px; background: #fff;">
                    <div style="border: 1px solid #000; padding: 2px 5px; font-size: 0.9em;">𝒜<sup>-1</sup></div>
                    <div style="border: 1px solid #000; padding: 2px 5px; font-size: 0.9em; background: #f0f0f0;">S₀</div>
                    <div style="border: 1px solid #000; padding: 2px 5px; font-size: 0.9em;">𝒜</div>
                </div>

            </div>
            <div style="margin-left: 5px; font-size: 0.8em; color: #B22222;">× m times</div>
            
            <div style="margin: 0 5px;">→</div>
            <div style="border: 1px solid #000; padding: 2px 8px; border-radius: 10px;">Measure</div>

        </div>
    </div>

</div>
`,
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
            computation: `
<div style="font-family: 'Times New Roman', serif; padding: 10px; line-height: 1.6;">

    <div style="font-size: 1.1em; font-weight: bold; color: #4B0082; margin-bottom: 15px; border-bottom: 2px solid #4B0082; padding-bottom: 5px;">
        QAE 運算過程解析 (QPE on Grover Operator)
    </div>

    <div style="margin-bottom: 15px; font-size: 0.9em; background: #f0f8ff; padding: 8px; border-radius: 5px;">
        <span style="font-weight: bold; color: #00008B;">電路結構：</span> 
        分為上方的 <strong>估計暫存器 (m qubits)</strong> 與下方的 <strong>模擬暫存器 (n qubits)</strong>。<br>
        本質上就是標準的 Phase Estimation，只是輸入的 Unitary 變成了 Grover Operator <span style="font-family: math;">Q</span>。
    </div>

    <div style="margin-bottom: 15px;">
        <span style="color: #00008B; font-weight: bold;">步驟 1：</span> 雙重初始化
        <div style="display: flex; gap: 20px; margin-top: 5px; margin-left: 10px;">
            <div>
                <span style="font-weight: bold; color: #666;">Top (j):</span> 
                H<sup>⊗m</sup>|0⟩ = <span style="font-family: math;">∑ |k⟩</span>
                <br><span style="font-size: 0.8em; color: #999;">(時間/計數基底)</span>
            </div>
            <div>
                <span style="font-weight: bold; color: #666;">Bottom (ψ):</span> 
                <span style="font-family: math;">|ψ⟩ = 𝒜|0⟩</span>
                <br><span style="font-size: 0.8em; color: #999;">(包含目標振幅的狀態)</span>
            </div>
        </div>
    </div>

    <div style="margin-bottom: 15px;">
        <span style="color: #00008B; font-weight: bold;">步驟 2：</span> 
        受控 Grover 演化 (Controlled-Q Powers)
        <div style="padding: 8px; border-left: 3px solid #4B0082; background: #fdfdfd; margin-top: 5px;">
            圖中顯示： <span style="font-family: math; font-weight: bold;">Q<sup>2⁰</sup>, Q<sup>2¹</sup>, ... Q<sup>2ᵐ⁻¹</sup></span>
        </div>
        <div style="margin-top: 5px; margin-left: 10px; font-size: 0.9em;">
            • 利用 <span style="color: #B22222;">Phase Kickback</span> 機制。<br>
            • Grover 算子 Q 的特徵值為 <span style="font-family: math;">e<sup>±i2θ</sup></span>。<br>
            • 經過此步驟，相位資訊 <span style="font-family: math;">e<sup>i(k·2θ)</sup></span> 被踢回並累積在上方暫存器中。
        </div>
    </div>

    <div style="margin-bottom: 15px;">
        <span style="color: #00008B; font-weight: bold;">步驟 3：</span> 
        逆傅立葉變換 (Inverse QFT)
        <div style="padding: 8px; margin-top: 5px; font-family: math; background: #fff0f0; border-radius: 4px;">
            ℱ<sup>†</sup><sub>m</sub> (Phase State) ⟶ |y⟩
        </div>
        <div style="font-size: 0.85em; color: #555; margin-top: 2px;">
            (圖中標示為 ℱ<sup>†</sup><sub>m</sub>，將頻率域的相位資訊解碼為整數 y)
        </div>
    </div>

    <div style="margin-bottom: 10px;">
        <span style="color: #00008B; font-weight: bold;">步驟 4：</span> 
        測量與估算 (Measurement)
    </div>
    <div style="border: 2px dashed #999; padding: 10px; background: #fafafa; border-radius: 5px;">
        <div style="font-family: math; font-size: 1.1em; text-align: center; margin-bottom: 8px;">
            y ≈ (2θ / 2π) · 2<sup>m</sup>
        </div>
        <div style="border-top: 1px solid #ccc; padding-top: 8px;">
            <strong>最終結果：</strong> 推算振幅機率 <i>p</i>
            <div style="color: #B22222; font-weight: bold; text-align: center; margin-top: 5px; font-size: 1.2em;">
                p = sin²(θ) ≈ sin²(π · y / 2<sup>m</sup>)
            </div>
        </div>
    </div>

    <div style="margin-top: 15px; font-size: 0.9em; color: #666;">
        <strong>直觀理解：</strong> QAE 就像是用「量子時鐘 (m qubits)」去計時 Grover 搜索旋轉的速度。旋轉速度 (θ) 越快，代表目標解越多 (機率 p 越高)。
    </div>

</div>
`,
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
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = amplificationData;
}
