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
            computation: `
<div style="font-family: 'Times New Roman', serif; padding: 5px; line-height: 1.6;">

    <div style="font-weight: bold; font-size: 1.1em; color: #4B0082; border-bottom: 2px solid #4B0082; padding-bottom: 5px; margin-bottom: 15px;">
        問題複雜度位階解析 (Complexity Classes)
    </div>

    <div style="margin-bottom: 10px; border-left: 4px solid #00008B; padding-left: 10px; background: #f0f8ff;">
        <strong style="color: #00008B;">P (Polynomial Time)</strong>
        <div style="font-size: 0.95em; color: #333;">
            • 定義：<strong>經典電腦</strong>能在多項式時間內「解決」的問題。<br>
            • 意義：簡單、快速、傳統電腦能輕鬆搞定的題目（如：排序、基本算術）。
        </div>
    </div>

    <div style="margin-bottom: 10px; border-left: 4px solid #8A2BE2; padding-left: 10px; background: #f8f0ff;">
        <strong style="color: #8A2BE2;">BQP (Bounded-error Quantum Polynomial)</strong>
        <div style="font-size: 0.95em; color: #333;">
            • 定義：<strong>量子電腦</strong>能在多項式時間內「解決」的問題（容許微小錯誤率，可透過重複運算消除）。<br>
            • 意義：量子電腦的主戰場。包含整數分解 (Shor)、模擬量子系統等。
        </div>
    </div>

    <div style="margin-bottom: 10px; border-left: 4px solid #4682B4; padding-left: 10px; background: #f0faff;">
        <strong style="color: #4682B4;">NP (Nondeterministic Polynomial)</strong>
        <div style="font-size: 0.95em; color: #333;">
            • 定義：如果給定一個答案，經典電腦能在多項式時間內「驗證」它是否正確。<br>
            • 意義：解題可能很難，但改考卷很快。所有 P 問題都屬於 NP。
        </div>
    </div>

    <div style="margin-bottom: 15px; border-left: 4px solid #B22222; padding-left: 10px; background: #fff0f0;">
        <strong style="color: #B22222;">NP-Complete / NP-Hard</strong>
        <div style="font-size: 0.95em; color: #333;">
            • 定義：NP 中最難的問題集合。若能高效解決其中一個，就能解決所有 NP 問題。<br>
            • 意義：<strong>經典與量子電腦目前的噩夢</strong>。例如：旅行推銷員問題 (TSP)、3-SAT。
        </div>
    </div>

    <div style="border: 2px dashed #666; padding: 10px; border-radius: 5px; background: #fafafa;">
        <div style="font-weight: bold; margin-bottom: 5px;">集合關係圖解 (如上圖所示)：</div>
        <ul style="margin: 0; padding-left: 20px; font-size: 0.95em;">
            <li><strong>P ⊆ BQP</strong>：凡是經典電腦能算的，量子電腦也能算 (且可能更快)。</li>
            <li><strong>BQP 與 NP 交集</strong>：BQP 能解決部分 NP 裡的難題 (如質因數分解)，這些題目在 P 之外。</li>
            <li><strong>BQP ≠ NP-Complete</strong>：目前的共識是，量子電腦<strong>無法</strong>高效解決 NP-Complete 問題 (即圖中 BQP 圈圈沒有蓋住最上面的深藍色區域)。</li>
        </ul>
    </div>

</div>
`,
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
computation: `
<div style="font-family: 'Times New Roman', serif; overflow-x: auto; white-space: nowrap; padding-bottom: 10px;">
    
    <div style="display: inline-flex; align-items: flex-start; padding-top: 20px;">

        <div style="display: flex; align-items: center; height: 100%;">
            <div style="text-align: center;">
                |x=0⟩<sub>P</sub> ⊗ |0⟩<sub>C</sub>
            </div>
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">Coin Flip (H)</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
                <span style="font-size: 0.75em; color: #666;">Create Superposition</span>
            </div>

            <div>
                |0⟩<sub>P</sub> ⊗ <span style="font-size: 1.1em;">1/√2</span> (|0⟩ + |1⟩)<sub>C</sub>
            </div>
        </div>

        <div style="display: flex; align-items: center; height: 100%;">
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">Shift (S)</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
                <span style="font-size: 0.75em; color: #666;">|0⟩<sub>c</sub>→L, |1⟩<sub>c</sub>→R</span>
            </div>

            <div style="border: 1px dashed #00008B; padding: 5px; border-radius: 5px; background: #f0f8ff;">
                <span style="font-size: 1.1em;">1/√2</span> 
                [ 
                  <span style="color: #006400;">|-1⟩<sub>P</sub>|0⟩<sub>C</sub></span> 
                  + 
                  <span style="color: #B22222;">|+1⟩<sub>P</sub>|1⟩<sub>C</sub></span> 
                ]
            </div>
        </div>

        <div style="display: flex; align-items: center; height: 100%;">
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">Next Step (H+S)</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 60px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
                <span style="font-size: 0.75em; color: #B22222;">Paths Merge</span>
            </div>

            <div style="display: flex; flex-direction: column; border-left: 3px solid #333; padding-left: 10px; gap: 5px;">
                 
                 <div>
                    <span style="font-size: 0.8em; color: #006400;">From |-1⟩:</span> |-2⟩ + |0⟩
                 </div>

                 <div>
                    <span style="font-size: 0.8em; color: #B22222;">From |+1⟩:</span> |0⟩ + |+2⟩
                 </div>
                 
                 <div style="height: 1px; background: #ccc; width: 100%; margin: 2px 0;"></div>

                 <div>
                    <strong>Result: </strong>
                    a|-2⟩ + <span style="background: #ffffcc; padding: 0 3px; border-radius: 3px;">(b + c)|0⟩</span> + d|+2⟩
                 </div>
                 <div style="font-size: 0.8em; color: #666;">
                    (Amplitudes b, c interfere!)
                 </div>
            </div>

        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin-left: 20px; justify-content: center;">
             <div style="font-size: 2em; color: #666; line-height: 0.8;">Ballistic<br>Spread</div>
             <div style="font-size: 0.8em;">(Not Gaussian)</div>
        </div>

    </div>
</div>
`,
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
            computation: '閱讀附錄(待提供)',
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
computation: `
<div style="font-family: 'Times New Roman', serif; overflow-x: auto; white-space: nowrap; padding-bottom: 10px;">
    <div style="font-size: 0.9em; font-weight: bold; color: #4B0082; margin-bottom: 10px;">
        DTQW (Szegedy Model) on Graph G
    </div>

    <div style="display: inline-flex; align-items: flex-start; padding-top: 10px;">

        <div style="display: flex; align-items: center; height: 100%;">
            <div style="text-align: center;">
                |u⟩<sub>1</sub> |0⟩<sub>2</sub>
            </div>
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">Prepare edges</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 60px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
                <span style="font-size: 0.75em; color: #666;">using √P<sub>uv</sub></span>
            </div>

            <div style="border: 1px dashed #666; padding: 5px; background: #fafafa;">
                <span style="font-size: 1.1em;">|ψ<sub>u</sub>⟩</span> = 
                ∑<sub>v</sub> <span style="color: #006400; font-weight: bold;">√P<sub>uv</sub></span> |u⟩<sub>1</sub>|v⟩<sub>2</sub>
            </div>
        </div>

        <div style="display: flex; align-items: center; height: 100%;">
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
                <span style="font-size: 0.8em; margin-bottom: -3px; font-weight: bold;">Reflect (R)</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
                <span style="font-size: 0.75em; color: #666;">2|ψ⟩⟨ψ| - I</span>
            </div>

            <div>
                (Diffused Amplitudes)
            </div>
        </div>

        <div style="display: flex; align-items: center; height: 100%;">
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
                <span style="font-size: 0.8em; margin-bottom: -3px; font-weight: bold;">SWAP (S)</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
                <span style="font-size: 0.75em; color: #00008B;">Jump to neighbor</span>
            </div>

            <div style="border: 1px solid #00008B; padding: 5px; background: #f0f8ff;">
                ∑<sub>v</sub> (Amp') 
                <span style="color: #B22222; font-weight: bold;">|v⟩<sub>1</sub></span>|u⟩<sub>2</sub>
            </div>
            
            <div style="margin-left: 10px; font-size: 0.8em; color: #666;">
                (Walker moved u → v)
            </div>
        </div>

    </div>
</div>
`,
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
            computation: '(太複雜省略)',
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
computation: `
<div style="font-family: 'Times New Roman', serif; overflow-x: auto; white-space: nowrap; padding-bottom: 10px;">
    <div style="font-size: 0.9em; font-weight: bold; color: #006400; margin-bottom: 10px;">
        CTQW (Continuous-Time) via Hamiltonian
    </div>

    <div style="display: inline-flex; align-items: center; padding-top: 10px;">

        <div style="display: flex; align-items: center;">
            <div style="text-align: center;">
                |Node<sub>start</sub>⟩
            </div>
            
            <div style="margin-left: 10px; font-size: 0.7em; color: #999; border: 1px dashed #ccc; padding: 2px;">
                (No Coin Space)
            </div>
        </div>

        <div style="display: flex; align-items: center;">
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 20px;">
                <span style="font-size: 0.9em; margin-bottom: -3px; font-weight: bold;">U(t) = e<sup>-iHt</sup></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 80px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
                <span style="font-size: 0.75em; color: #006400;">H ≈ Adjacency Matrix (A)</span>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; border-left: 3px solid #006400; padding-left: 10px; gap: 5px;">
             
             <div>
                <span style="font-size: 1.1em;">|ψ(t)⟩</span> = 
                ∑<sub>k</sub> <span style="color: #B22222; font-weight: bold;">α<sub>k</sub>(t)</span> |k⟩
             </div>

             <div style="font-size: 0.85em; color: #666;">
                α<sub>k</sub>(t) = ⟨k| e<sup>-iAt</sup> |start⟩
             </div>
             
             <div style="font-size: 0.8em; color: #555; font-style: italic;">
                "Quantum Tunneling across the graph"
             </div>
        </div>

        <div style="display: flex; align-items: center; margin-left: 15px;">
            
            <div style="display: flex; flex-direction: column; align-items: center; margin-right: 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">Measure</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 30px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div style="border: 1px solid #333; padding: 3px 8px; border-radius: 3px;">
                Prob(k) = |α<sub>k</sub>(t)|²
            </div>
        </div>

    </div>
</div>
`,
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
computation: `
<div style="font-family: 'Times New Roman', serif; overflow-x: auto; white-space: nowrap; padding-bottom: 10px;">
    
    <div style="font-size: 0.9em; font-weight: bold; color: #333; margin-bottom: 10px;">
        LCU: Implementing Matrix Addition ( ∑ cₖ Uₖ )
    </div>

    <div style="display: inline-flex; align-items: center; padding-top: 10px;">

        <div style="text-align: center;">
            <div style="font-size: 0.9em; color: #B22222;">|0⟩<sub>A</sub></div>
            <div style="font-size: 0.9em; color: #00008B;">|ψ⟩<sub>S</sub></div>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
            <div style="border: 1px solid #000; padding: 3px 8px; font-size: 0.8em; background: #fff;">
                PREP
            </div>
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="height: 1px; background: #000; width: 40px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
            </div>
            <span style="font-size: 0.75em; color: #666;">Encode Coeffs</span>
        </div>

        <div>
            ( ∑ <span style="color: #006400;">√cₖ</span> <span style="color: #B22222;">|k⟩<sub>A</sub></span> ) 
            ⊗ <span style="color: #00008B;">|ψ⟩<sub>S</sub></span>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
            <div style="border: 1px solid #000; padding: 3px 8px; font-size: 0.8em; background: #fff;">
                SELECT (C-Uₖ)
            </div>
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="height: 1px; background: #000; width: 60px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
            </div>
            <span style="font-size: 0.75em; color: #666;">Entangle A & S</span>
        </div>

        <div style="border: 1px dashed #999; padding: 5px; background: #fafafa;">
            ∑ <span style="color: #006400;">√cₖ</span> 
            <span style="color: #B22222;">|k⟩<sub>A</sub></span> 
            <span style="color: #00008B;">( Uₖ |ψ⟩ )<sub>S</sub></span>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
            <div style="border: 1px solid #000; padding: 3px 8px; font-size: 0.8em; background: #fff;">
                PREP<sup>†</sup>
            </div>
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="height: 1px; background: #000; width: 40px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
            </div>
            <span style="font-size: 0.75em; color: #666;">Uncompute / Interfere</span>
        </div>

        <div>
            <span style="color: #B22222;">|0⟩<sub>A</sub></span> 
            ⊗ 
            ( ∑ <span style="color: #006400; font-weight: bold;">cₖ</span> <span style="color: #00008B;">Uₖ |ψ⟩<sub>S</sub></span> ) 
            + <span style="color: #999; font-size: 0.8em;">...|k≠0⟩</span>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
            <span style="font-size: 0.8em; margin-bottom: -3px; font-weight: bold;">Measure |0⟩</span>
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="height: 1px; background: #000; width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
            </div>
            <span style="font-size: 0.75em; color: #B22222;">Success!</span>
        </div>

        <div style="border: 2px solid #00008B; padding: 5px 10px; border-radius: 5px; background: #f0f8ff;">
            <span style="font-weight: bold;">|ψ'⟩</span> 
            ∝ ( ∑ cₖ Uₖ ) |ψ⟩
            <div style="font-size: 0.8em; color: #666; margin-top: 3px;">
                (Linear Combination Achieved)
            </div>
        </div>

    </div>
</div>
`,
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
computation: `
<div style="font-family: 'Times New Roman', serif; overflow-x: auto; white-space: nowrap; padding-bottom: 10px;">
    
    <div style="font-size: 0.9em; font-weight: bold; color: #006400; margin-bottom: 10px;">
        Taylor Expansion LCU: Simulating e⁻ⁱᴴᵗ
    </div>

    <div style="display: inline-flex; align-items: center; padding-top: 10px;">

        <div style="text-align: center;">
            <div style="font-size: 0.9em; color: #B22222;">|0⟩<sub>A</sub></div>
            <div style="font-size: 0.9em; color: #00008B;">|ψ⟩<sub>S</sub></div>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
            <div style="border: 1px solid #000; padding: 3px 8px; font-size: 0.8em; background: #fff;">
                PREP
            </div>
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="height: 1px; background: #000; width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
            </div>
            <span style="font-size: 0.75em; color: #666;">Coeff: √(tᵏ/k!)</span>
        </div>

        <div>
            ( ∑ <span style="color: #006400;">√ (tᵏ/k!)</span> <span style="color: #B22222;">|k⟩<sub>A</sub></span> ) 
            ⊗ <span style="color: #00008B;">|ψ⟩<sub>S</sub></span>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
            <div style="border: 1px solid #000; padding: 3px 8px; font-size: 0.8em; background: #fff;">
                SELECT (Hᵏ)
            </div>
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="height: 1px; background: #000; width: 60px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
            </div>
            <span style="font-size: 0.75em; color: #666;">Apply (-iH)ᵏ</span>
        </div>

        <div style="border: 1px dashed #999; padding: 5px; background: #fafafa;">
            ∑ <span style="color: #006400;">√ (tᵏ/k!)</span> 
            <span style="color: #B22222;">|k⟩<sub>A</sub></span> 
            <span style="color: #00008B;">( (-iH)ᵏ |ψ⟩ )<sub>S</sub></span>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
            <div style="border: 1px solid #000; padding: 3px 8px; font-size: 0.8em; background: #fff;">
                PREP<sup>†</sup>
            </div>
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="height: 1px; background: #000; width: 40px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
            </div>
            <span style="font-size: 0.75em; color: #666;">Uncompute</span>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin-right: 15px;">
            <span style="font-size: 0.8em; margin-bottom: -3px; font-weight: bold;">Measure |0⟩</span>
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="height: 1px; background: #000; width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
            </div>
        </div>

        <div style="border: 2px solid #00008B; padding: 5px 10px; border-radius: 5px; background: #f0f8ff;">
            <span style="font-weight: bold;">|ψ(t)⟩</span> 
            ≈ ∑ <span style="color: #006400;">( (-it)ᵏ/k! )</span> <span style="color: #00008B;">Hᵏ |ψ⟩</span>
            <div style="font-size: 0.85em; color: #B22222; margin-top: 3px; border-top: 1px solid #ccc; padding-top: 2px;">
                = e<sup>-iHt</sup> |ψ⟩
            </div>
        </div>

    </div>
</div>
`,
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
        'VQE': {
            name: 'Variational Quantum Eigensolver (2014)',
            author: 'Peruzzo et al.',
            goal: '求解分子和材料的基態能量',
            concept: 'VQE是近期量子電腦最重要的應用之一。作為混合量子-古典算法，它結合了量子電腦的態準備能力和古典電腦的優化能力，特別適合當前的NISQ時代量子裝置。',
            computation: `
<div style="font-family: 'Times New Roman', serif; line-height: 1.6; color: #333; padding: 5px;">
    
    <div style="font-weight: bold; font-size: 1.1em; color: #006400; border-bottom: 2px solid #006400; padding-bottom: 5px; margin-bottom: 15px;">
        VQE 演算法流程解析 (Variational Quantum Eigensolver)
    </div>

    <div style="margin-bottom: 15px; font-size: 0.95em;">
        這張圖展示了一個典型的 <strong>量子-古典混合演算法 (Hybrid Quantum-Classical Algorithm)</strong> 迴圈。
        <br>目標是尋找哈密頓量 <i>H</i> 的基態能量 <i>E₀</i>。整個過程分為兩個主要部分：量子處理器 (QPU) 負責計算期望值，古典處理器 (CPU) 負責優化參數。
    </div>

    <div style="margin-bottom: 15px; background: #fdfdfd; padding: 10px; border-radius: 5px; border-left: 4px solid #333;">
        <div style="font-weight: bold; margin-bottom: 5px; font-size: 1.05em; color: #333;">
            1. 量子子程序 (Quantum Subroutine)
        </div>
        <ul style="margin: 0; padding-left: 20px;">
            <li><strong>初始狀態：</strong>輸入全零態 |0⟩<sup>⊗n</sup>。</li>
            <li><strong>參數化電路 (Ansatz)：</strong>
                應用一個由參數 <span style="color: #B22222; font-weight: bold;">θ</span> 控制的么正算符 <i>U(θ)</i>。
                <br><span style="font-size: 0.9em; color: #666;">(如您所述，通常包含 R<sub>y</sub>, R<sub>z</sub> 旋轉閘與糾纏層，目的是在希爾伯特空間中探索可能的特徵態。)</span>
            </li>
            <li><strong>試驗態生成：</strong>產生試驗波函數 |ψ(<span style="color: #B22222;">θ</span>)⟩。</li>
            <li><strong>測量 (Measurement)：</strong>
                在哈密頓量 <i>H</i> 的各個 Pauli 基底上進行測量，收集統計數據並傳送給古典電腦。
            </li>
        </ul>
    </div>

    <div style="margin-bottom: 15px; background: #f0f8ff; padding: 10px; border-radius: 5px; border-left: 4px solid #00008B;">
        <div style="font-weight: bold; margin-bottom: 5px; font-size: 1.05em; color: #00008B;">
            2. 古典優化器 (Classical Optimizer)
        </div>
        <ul style="margin: 0; padding-left: 20px;">
            <li><strong>計算期望值 (Expectation Value)：</strong>
                利用量子測量結果，計算當前參數下的能量期望值：
                <div style="margin: 5px 0; font-weight: bold;">E = ⟨ψ(θ)| H |ψ(θ)⟩</div>
            </li>
            <li><strong>變分原理 (Variational Principle)：</strong>
                根據變分原理，此期望值 E 永遠大於或等於真實基態能量 E₀。
            </li>
            <li><strong>參數更新 (Gradient Descent)：</strong>
                計算能量對參數的梯度 ∇E，並更新參數以尋找能量極小值：
                <div style="margin: 5px 0; color: #B22222; font-weight: bold;">θ<sub>new</sub> ← θ<sub>old</sub> - η∇E</div>
            </li>
        </ul>
    </div>

    <div style="margin-top: 15px; border-top: 1px dashed #999; padding-top: 10px;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 10px; background: #eee; padding: 8px; border-radius: 5px;">
            <span style="font-size: 1.5em;">↻</span>
            <div>
                <strong>迭代迴圈 (The Loop)：</strong><br>
                將新的 <span style="color: #B22222;">θ</span> 傳回量子電路，重複上述步驟，直到能量 E 收斂至最小值 (E ≈ E₀)。
            </div>
        </div>
    </div>

</div>
`,
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
computation: `
<div style="font-family: 'Times New Roman', serif; line-height: 1.6; color: #333; padding: 5px;">
    
    <div style="font-weight: bold; font-size: 1.1em; color: #4B0082; border-bottom: 2px solid #4B0082; padding-bottom: 5px; margin-bottom: 15px;">
        QAOA 演算法流程解析 (Quantum Approximate Optimization Algorithm)
    </div>

    <div style="margin-bottom: 15px; font-size: 0.95em;">
        這張圖展示了 QAOA 處理組合優化問題（如 MaxCut）的標準流程。<br>
        其核心概念是將連續時間的絕熱演化，離散化為 <i>p</i> 層的參數化電路。
    </div>

    <div style="margin-bottom: 15px; background: #fdfdfd; padding: 10px; border-radius: 5px; border-left: 4px solid #333;">
        <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.05em; color: #333;">
            1. 量子處理器 (Quantum Processor)
        </div>
        
        <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 8px;">
                <strong>初始化 (Superposition)：</strong><br>
                所有量子位元從 |0⟩ 開始，經過 Hadamard 閘 (H)，產生所有可能解的均勻疊加態：
                <div style="margin-top: 2px; color: #555; font-size: 0.9em;">|+⟩<sup>⊗n</sup> = Σ |x⟩ / √2ⁿ</div>
            </li>

            <li style="margin-bottom: 8px;">
                <strong>交替演化層 (Levels 1 to p)：</strong><br>
                電路重複執行 <i>p</i> 次（Level-1 ... Level-p），每一層包含兩個步驟：
                <div style="display: flex; gap: 10px; margin-top: 5px;">
                    <div style="background: #e8f5e9; border: 1px solid #4CAF50; padding: 5px; border-radius: 4px; flex: 1;">
                        <span style="font-weight: bold; color: #006400;">Phase Separator (U<sub>C</sub>)</span><br>
                        <span style="font-size: 0.9em;">e<sup>-i γₖ H<sub>C</sub></sup></span><br>
                        <span style="font-size: 0.85em; color: #555;">(綠色區塊：根據問題目標函數 H<sub>C</sub> 引入相位 γ)</span>
                    </div>
                    <div style="background: #e3f2fd; border: 1px solid #2196F3; padding: 5px; border-radius: 4px; flex: 1;">
                        <span style="font-weight: bold; color: #00008B;">Mixer (U<sub>B</sub>)</span><br>
                        <span style="font-size: 0.9em;">e<sup>-i βₖ H<sub>B</sub></sup></span><br>
                        <span style="font-size: 0.85em; color: #555;">(藍色區塊：引入橫向場 H<sub>B</sub> 進行混合 β，通常是 R<sub>x</sub>)</span>
                    </div>
                </div>
            </li>

            <li>
                <strong>測量 (Measure)：</strong><br>
                在計算基底 (Z-basis) 測量量子態，得到一個位元串 (Bitstring)，代表一個候選解。
            </li>
        </ul>
    </div>

    <div style="margin-bottom: 15px; background: #fff5e6; padding: 10px; border-radius: 5px; border-left: 4px solid #FF8C00;">
        <div style="font-weight: bold; margin-bottom: 5px; font-size: 1.05em; color: #d35400;">
            2. 古典電腦 (Classical Computer)
        </div>
        <ul style="margin: 0; padding-left: 20px;">
            <li><strong>計算目標函數 (Objective Evaluation)：</strong>
                收集多次測量結果，計算平均成本函數值 F<sub>p</sub>(γ, β)。
            </li>
            <li><strong>判斷收斂 (Optimization Objective Met?)：</strong>
                檢查結果是否夠好，或參數變化是否停滯。
                <br><span style="color: #B22222; font-weight: bold;">Yes (Stop):</span> 輸出最佳解。
                <br><span style="color: #00008B; font-weight: bold;">No (Loop):</span> 繼續優化。
            </li>
            <li><strong>參數更新 (Classical Optimizer)：</strong>
                使用古典演算法（如 COBYLA, SPSA）調整角度參數 
                <span style="background: #ffe0b2; padding: 0 4px; border-radius: 3px;">(γ₁, β₁ ... γₚ, βₚ)</span>，
                並傳回量子處理器進行下一輪迭代。
            </li>
        </ul>
    </div>

    <div style="margin-top: 15px; border-top: 1px dashed #999; padding-top: 10px; font-size: 0.9em; color: #666;">
        <strong>直觀理解：</strong> QAOA 就像是在優化一條「路徑」，試圖找到一組最佳的操作參數 (γ, β)，使得初始的均勻疊加態，能夠最大機率地演化到目標問題的最佳解狀態。
    </div>

</div>
`,
            supplement: `與VQE不同，VQE電路可任意設計。QAOA受絕熱計算啟發，使用固定交疊電路架構，用離散步長模擬絕熱演化。<br>
<br>
QAOA 將「尋找最低能量」對應到解決實際工程與商業問題，其中 $E_0$ 對應為最低成本，$|\\Phi\\rangle$ 對應為最佳組合：<br>
QAOA可解決問題可視化：(文氏圖)<br>
MaxCut (最大切割問題)：將網路節點分成兩群，使切斷的連線數最大化 (應用於晶片佈局、社群分群)。<br>
• 旅行推銷員問題：物流路徑規劃，尋找最短路徑。<br>
• 投資組合優化：在風險限制下尋找最大獲利的資產組合。
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
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = hamiltonianData;
}
