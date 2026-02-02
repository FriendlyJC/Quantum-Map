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
            concept: `關鍵字：疊加平行運算、相位回彈、相位干涉<br>

1. 利用 H 閘同時處理所有疊加輸入，形成對 oracle 的平行查詢。<br>
2. 經過 oracle 黑盒運算，將「**函數值的一致性**」編碼為整體相位，透過相位回彈使得<br>
   constant 函數 → 所有分量相位一致<br>
   balanced 函數 → 分量之間產生相位分裂<br>
3. 透過干涉，若相位一致則表示常數函數，若不同相位則干涉抵銷表示平衡函數，從而得出資訊。<br>`,
            computation: `
<div style="font-family: 'Times New Roman', serif; overflow-x: auto; white-space: nowrap; padding-bottom: 10px;">
    
    <div style="display: inline-flex; align-items: flex-start; padding-top: 20px;">

        <div style="display: flex; align-items: center; height: 100%;">
            <div style="text-align: center;">|0⟩<sub>S</sub> |0⟩<sub>I</sub></div>
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">X<sub>I</sub></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 30px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div style="text-align: center;">|0⟩<sub>S</sub> |1⟩<sub>I</sub></div>

            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">H<sub>S</sub> ⊗ H<sub>I</sub></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; flex-grow: 1; min-width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div><span style="font-size: 1.1em;">½</span> [ |0⟩ + |1⟩ ]<sub>S</sub> ⊗ [ |0⟩ - |1⟩ ]<sub>I</sub></div>

            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">U<sub>f</sub> : |x⟩|y⊕f(x)⟩</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 80px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; border-left: 2px solid #000; border-radius: 5px 0 0 5px; padding-left: 10px; gap: 20px;">
            
            <div>
               <span style="color: #006400; font-weight: bold; font-size: 0.9em;">f(x)=0 (Const): </span>
               <span style="font-size: 0.9em; color: #555;">½ [ |0⟩(|0⊕0⟩ - |1⊕0⟩) + |1⟩(|0⊕0⟩ - |1⊕0⟩) ]</span>
               <span style="margin: 0 5px;">=</span> 
               <span style="font-size: 1.1em;">½ [ (|0⟩+|1⟩)<sub>S</sub> ⊗ (|0⟩-|1⟩)<sub>I</sub> ]</span>
            </div>

            <div>
               <span style="color: #006400; font-weight: bold; font-size: 0.9em;">f(x)=1 (Const): </span>
               <span style="font-size: 0.9em; color: #555;">½ [ |0⟩(|0⊕1⟩ - |1⊕1⟩) + |1⟩(|0⊕1⟩ - |1⊕1⟩) ]</span>
               <span style="margin: 0 5px;">=</span> 
               <span style="font-size: 1.1em;">½ [ (|0⟩+|1⟩)<sub>S</sub> ⊗ (-|0⟩+|1⟩)<sub>I</sub> ]</span>
            </div>

            <div>
               <span style="color: #00008B; font-weight: bold; font-size: 0.9em;">f(x)=x (Bal): </span>
               <span style="font-size: 0.9em; color: #555;">½ [ |0⟩(|0⊕0⟩ - |1⊕0⟩) + |1⟩(|0⊕1⟩ - |1⊕1⟩) ]</span>
               <span style="margin: 0 5px;">=</span> 
               <span style="font-size: 1.1em;">½ [ (|0⟩-|1⟩)<sub>S</sub> ⊗ (|0⟩-|1⟩)<sub>I</sub> ]</span>
            </div>

            <div>
               <span style="color: #00008B; font-weight: bold; font-size: 0.9em;">f(x)=¬x (Bal): </span>
               <span style="font-size: 0.9em; color: #555;">½ [ |0⟩(|0⊕1⟩ - |1⊕1⟩) + |1⟩(|0⊕0⟩ - |1⊕0⟩) ]</span>
               <span style="margin: 0 5px;">=</span> 
               <span style="font-size: 1.1em;">½ [ (|0⟩-|1⟩)<sub>S</sub> ⊗ (-|0⟩+|1⟩)<sub>I</sub> ]</span>
            </div>
        </div>

        <div style="display: flex; align-items: center; height: 100%; padding-top: 0px;"> 
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">H<sub>S</sub></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 30px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; border-left: 2px solid #000; border-radius: 5px 0 0 5px; padding-left: 10px; gap: 20px;">
                 <div>|0⟩<sub>S</sub> ⊗ (|0⟩-|1⟩)<sub>I</sub></div>
                 <div>|0⟩<sub>S</sub> ⊗ (-|0⟩+|1⟩)<sub>I</sub></div>
                 <div>|1⟩<sub>S</sub> ⊗ (|0⟩-|1⟩)<sub>I</sub></div>
                 <div>|1⟩<sub>S</sub> ⊗ (-|0⟩+|1⟩)<sub>I</sub></div>
            </div>

            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">M<sub>S</sub></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 30px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; border-left: 2px solid #000; border-radius: 5px 0 0 5px; padding-left: 10px; gap: 20px;">
                 <div><strong>0</strong></div>
                 <div><strong>0</strong></div>
                 <div><strong>1</strong></div>
                 <div><strong>1</strong></div>
            </div>
        </div>
    </div>
</div>
`,
            supplement: `輸入為 $x \\in \\{0,1\\}$，函數運算 $f(x)$
<br>
<strong>常數函數：</strong>輸出結果都相同。<br>
<strong>平衡函數：</strong>輸出結果為0跟輸出結果為1的次數相同。<br>
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
            computation: `
<div style="font-family: 'Times New Roman', serif; overflow-x: auto; white-space: nowrap; padding-bottom: 10px;">
    
    <div style="display: inline-flex; align-items: flex-start; padding-top: 20px;">

        <div style="display: flex; align-items: center; height: 100%;">
            <div style="text-align: center;">|0⟩<sup>⊗n</sup><sub>S</sub> |0⟩<sub>I</sub></div>
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">X<sub>I</sub></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 30px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div style="text-align: center;">|0⟩<sup>⊗n</sup><sub>S</sub> |1⟩<sub>I</sub></div>

            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">H<sup>⊗n</sup><sub>S</sub> ⊗ H<sub>I</sub></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; flex-grow: 1; min-width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div>
                <span style="font-size: 1.1em;">1/√2ⁿ</span> [ ∑|x⟩ ]<sub>S</sub> ⊗ [ |0⟩ - |1⟩ ]<sub>I</sub>
            </div>

            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">U<sub>f</sub> : (-1)<sup>f(x)</sup></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 80px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; border-left: 2px solid #000; border-radius: 5px 0 0 5px; padding-left: 10px; gap: 20px;">
            
            <div>
               <span style="color: #006400; font-weight: bold; font-size: 0.9em;">f(x)=0 (Const): </span>
               <span style="font-size: 0.9em; color: #555;">1/√2ⁿ [ ∑ (+1)|x⟩ ] ... </span>
               <span style="margin: 0 5px;">=</span> 
               <span style="font-size: 1.1em;">1/√2ⁿ [ ( ∑|x⟩ )<sub>S</sub> ⊗ (|0⟩-|1⟩)<sub>I</sub> ]</span>
            </div>

            <div>
               <span style="color: #006400; font-weight: bold; font-size: 0.9em;">f(x)=1 (Const): </span>
               <span style="font-size: 0.9em; color: #555;">1/√2ⁿ [ ∑ (-1)|x⟩ ] ... </span>
               <span style="margin: 0 5px;">=</span> 
               <span style="font-size: 1.1em;">1/√2ⁿ [ ( -∑|x⟩ )<sub>S</sub> ⊗ (|0⟩-|1⟩)<sub>I</sub> ]</span>
            </div>

            <div>
               <span style="color: #00008B; font-weight: bold; font-size: 0.9em;">f(x)=Balanced: </span>
               <span style="font-size: 0.9em; color: #555;">1/√2ⁿ [ ∑ (-1)<sup>f(x)</sup>|x⟩ ] ... </span>
               <span style="margin: 0 5px;">=</span> 
               <span style="font-size: 1.1em;">1/√2ⁿ [ ( ∑ (-1)<sup>f(x)</sup>|x⟩ )<sub>S</sub> ⊗ (|0⟩-|1⟩)<sub>I</sub> ]</span>
            </div>
        </div>

        <div style="display: flex; align-items: center; height: 100%; padding-top: 0px;"> 
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">H<sup>⊗n</sup><sub>S</sub></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 30px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; border-left: 2px solid #000; border-radius: 5px 0 0 5px; padding-left: 10px; gap: 20px;">
                 <div>|0...0⟩<sub>S</sub> ⊗ (|0⟩-|1⟩)<sub>I</sub></div>
                 
                 <div>- |0...0⟩<sub>S</sub> ⊗ (|0⟩-|1⟩)<sub>I</sub></div>
                 
                 <div>( ∑<sub>y≠0</sub> c<sub>y</sub>|y⟩ )<sub>S</sub> ⊗ (|0⟩-|1⟩)<sub>I</sub></div>
            </div>

            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">M<sub>S</sub></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 30px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; border-left: 2px solid #000; border-radius: 5px 0 0 5px; padding-left: 10px; gap: 20px;">
                 <div><strong>00...0</strong> <span style="font-size:0.8em; color:#666;">(Const)</span></div>
                 
                 <div><strong>00...0</strong> <span style="font-size:0.8em; color:#666;">(Const)</span></div>
                 
                 <div><strong>≠ 0...0</strong> <span style="font-size:0.8em; color:#666;">(Balanced)</span></div>
            </div>
        </div>
    </div>
</div>
`,
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
            name: "Simon's Algorithm (1994)",
            author: 'Daniel R. Simon',
            goal: '尋找二對一函數 $f(x) = f(x \\oplus s)$ 中的隱藏數字 $s$',
            concept: `關鍵字：疊加平行運算、相位回彈、相位干涉<br>
<br>
1. 利用 H 閘同時處理所有疊加輸入，形成對 oracle 的平行查詢。<br>
2. 經過 oracle 黑盒運算，將「輸入之間的等價關係」編碼為量子態的相位／子空間結構，由於 $f(x)=f(x \\oplus s)$，oracle 使得量子態自然成對，形成 $|x\\rangle+|x \\oplus s\\rangle$。這表示在隱藏週期方向上的相位一致性，而在其他方向上產生相位分裂。<br>
3. 透過干涉性，消除不符合隱藏週期約束的相位分量，經過重複抽樣後得到隱藏週期 $s$。<br>`,
            computation: `
<div style="font-family: 'Times New Roman', serif; overflow-x: auto; white-space: nowrap; padding-bottom: 10px;">
    
    <div style="display: inline-flex; align-items: flex-start; padding-top: 20px;">

        <div style="display: flex; align-items: center; height: 100%;">
            <div style="text-align: center;">|0⟩<sup>⊗n</sup><sub>1</sub> |0⟩<sup>⊗n</sup><sub>2</sub></div>
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">H<sup>⊗n</sup><sub>1</sub> ⊗ I<sub>2</sub></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; flex-grow: 1; min-width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div>
                <span style="font-size: 1.1em;">1/√2ⁿ</span> ∑|x⟩<sub>1</sub> |0⟩<sub>2</sub>
            </div>

            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">U<sub>f</sub> : |x⟩|y⊕f(x)⟩</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 80px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>
            
            <div>
                <span style="font-size: 1.1em;">1/√2ⁿ</span> ∑ |x⟩<sub>1</sub> |f(x)⟩<sub>2</sub>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin: 0 20px;">
            <span style="font-size: 0.8em; color: #666; margin-bottom: -3px;">假設 Reg 2 測得 z</span>
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="height: 1px; background: #999; border-bottom: 1px dashed #999; width: 80px;"></div><div style="font-size: 10px; margin-left: -1px; color: #999;">▶</div>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; border-left: 2px solid #000; border-radius: 5px 0 0 5px; padding-left: 10px; justify-content: center; gap: 5px;">
             <div style="font-size: 0.8em; color: #006400; font-weight: bold;">
                Reg 1 塌縮為兩個態 (週期 s):
             </div>
             <div style="font-size: 1.1em;">
                <span style="font-size: 1.1em;">1/√2</span> [ |x₀⟩ + |x₀ ⊕ s⟩ ]<sub>1</sub>
             </div>
        </div>

        <div style="display: flex; align-items: center; height: 100%; padding-top: 0px;"> 
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">H<sup>⊗n</sup><sub>1</sub></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; border-left: 2px solid #000; border-radius: 5px 0 0 5px; padding-left: 10px; gap: 15px;">
                 
                 <div>
                    <span style="font-size: 0.9em; color: #555;">1/√2 [ ∑(-1)<sup>x₀⋅y</sup>|y⟩ + ∑(-1)<sup>(x₀⊕s)⋅y</sup>|y⟩ ]</span>
                 </div>
                 
                 <div>
                    <span style="margin-right: 5px;">=</span>
                    <span style="font-size: 0.9em; color: #555;">1/√2 ∑ (-1)<sup>x₀⋅y</sup> [ 1 + (-1)<sup>s⋅y</sup> ] |y⟩</span>
                 </div>

                 <div style="margin-top: 5px;">
                    <div style="margin-bottom: 8px;">
                        <span style="color: #B22222; font-weight: bold; font-size: 0.9em;">If s⋅y = 1 : </span>
                        <span style="font-size: 0.9em; color: #555;">[ 1 + (-1) ] = 0</span> 
                        <span style="font-size: 0.8em; color: #999;">(相消)</span>
                    </div>
                    <div>
                        <span style="color: #006400; font-weight: bold; font-size: 0.9em;">If s⋅y = 0 : </span>
                        <span style="font-size: 0.9em; color: #555;">[ 1 + 1 ] = 2</span>
                        <span style="font-size: 0.8em; color: #999;">(保留)</span>
                    </div>
                 </div>

            </div>

            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">M<sub>1</sub></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 30px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; border-left: 2px solid #000; border-radius: 5px 0 0 5px; padding-left: 10px; justify-content: center;">
                 <div style="margin-bottom: 5px;">
                    <strong>y</strong>
                 </div>
                 <div style="font-size: 0.8em; color: #00008B;">
                    滿足 y ⋅ s = 0
                 </div>
            </div>
        </div>
    </div>
</div>
`,
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
            name: "Shor's Algorithm (1994)",
            author: 'Peter W. Shor',
            goal: '整數質因數分解 (Factoring) / 離散對數',
            concept: `關鍵字：QFT、週期查找、模運算、求階問題<br>
<br>
將原本的質因數分解問題 $N=p \\times q$，轉成週期與求階問題 $x^{2a} \\equiv 1 \\mod N$，讓量子電腦快速算出 $a$，再用古典運算 $\\gcd(x^a-1, N)$ 即可獲得 $p$，使得能夠在合理時間內算出質因數分解。<br>`,
            computation: `
<div style="font-family: 'Times New Roman', serif; overflow-x: auto; white-space: nowrap; padding-bottom: 10px;">
    
    <div style="display: inline-flex; align-items: flex-start; padding-top: 20px;">

        <div style="display: flex; align-items: center; height: 100%;">
            <div style="text-align: center;">
                |0⟩<sup>⊗t</sup><sub>1</sub> ⊗ |1⟩<sup>⊗L</sup><sub>2</sub>
            </div>
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">H<sup>⊗t</sup> ⊗ I</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 30px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div>
                <span style="font-size: 1.1em;">1/√2ᵗ</span> ∑ |j⟩<sub>1</sub> |1⟩<sub>2</sub>
            </div>

            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">U<sub>f</sub> (Mod Exp)</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div>
                <span style="font-size: 1.1em;">1/√2ᵗ</span> ∑ |j⟩<sub>1</sub> ⊗ |x<sup>j</sup> mod N⟩<sub>2</sub>
            </div>
        </div>

        <div style="display: flex; align-items: center; height: 100%;">
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
                <span style="font-size: 0.8em; margin-bottom: -3px; color: #B22222;">Measure Reg 2</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 40px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
                <span style="font-size: 0.75em; color: #B22222;">Observe z</span>
            </div>

            <div style="display: flex; flex-direction: column; border-left: 2px solid #B22222; padding-left: 10px; gap: 5px;">
                 <div style="font-size: 0.85em; color: #B22222; font-weight: bold;">
                    狀態塌縮 (Reg 1 Collapse):
                 </div>
                 <div>
                    <span style="font-size: 1.1em;">1/√A</span> [ ∑<sub>k</sub> |j₀ + k·r⟩<sub>1</sub> ] ⊗ |z⟩<sub>2</sub>
                 </div>
                 <div style="font-size: 0.8em; color: #666;">
                    (保留了具備週期 r 的序列，起始點為 j₀)
                 </div>
            </div>
        </div>

        <div style="display: flex; align-items: center; height: 100%; padding-top: 0px;"> 
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">FT<sup>†</sup> (on Reg 1)</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; border-left: 2px solid #000; padding-left: 10px; gap: 5px;">
                 <div style="font-size: 0.9em; font-weight: bold; color: #00008B;">
                    頻率提取 (Peaks):
                 </div>
                 <div>
                    ∑ | m · <span style="font-size: 1.1em;">2ᵗ/r</span> ⟩<sub>1</sub> ⊗ |z⟩<sub>2</sub>
                 </div>
            </div>

            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">Measure Reg 1</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 40px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; border-left: 2px solid #000; padding-left: 10px; justify-content: center;">
                 <div><strong>Result y</strong></div>
                 <div style="font-size: 0.8em; color: #006400;">y ≈ m · 2ᵗ/r</div>
                 <div style="font-size: 0.8em; color: #666;">→ 連分數求 r</div>
            </div>
        </div>
    </div>
</div>
`,
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
<strong>4. 連分式(Continued Fraction)：</strong><br>
求階運算與相位估計中，測得可能的 $s/r$ 後，使用古典電腦連分式運算得到所有可能的 $r$ 值。(詳細求階算法點此)<br>
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
            computation: `
<div style="font-family: 'Times New Roman', serif; overflow-x: auto; white-space: nowrap; padding-bottom: 10px;">
    
    <div style="display: inline-flex; align-items: flex-start; padding-top: 20px;">

        <div style="display: flex; align-items: center; height: 100%;">
            <div style="text-align: center;">
                |j<sub>1</sub> j<sub>2</sub> ... j<sub>n</sub>⟩
            </div>
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">H, R<sub>k</sub> Gates</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; border-left: 2px solid #666; padding-left: 10px; gap: 15px;">
             
             <div>
                <span style="font-size: 1.1em; margin-right: 5px;">1/√2</span>
                <span>( |0⟩ + e<sup>2πi <span style="color: #B22222;">0.j<sub>1</sub>...j<sub>n</sub></span></sup> |1⟩ )</span>
             </div>

             <div style="text-align: center; color: #999; font-size: 0.8em;">⊗ ... ⊗</div>

             <div>
                <span style="font-size: 1.1em; margin-right: 5px;">1/√2</span>
                <span>( |0⟩ + e<sup>2πi <span style="color: #006400;">0.j<sub>n</sub></span></sup> |1⟩ )</span>
             </div>
             
             <div style="font-size: 0.8em; color: #666; font-style: italic; margin-top: -5px;">
                (Bit-Reversed Order)
             </div>
        </div>

        <div style="display: flex; align-items: center; height: 100%;">
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
                <span style="font-size: 0.8em; margin-bottom: -3px; font-weight: bold;">SWAP Gates</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
                <span style="font-size: 0.75em; color: #666;">Reverse Qubits</span>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; border-left: 2px solid #00008B; padding-left: 10px; gap: 15px;">
             
             <div>
                <span style="font-size: 1.1em; margin-right: 5px;">1/√2</span>
                <span>( |0⟩ + e<sup>2πi <span style="color: #006400;">0.j<sub>n</sub></span></sup> |1⟩ )</span>
             </div>

             <div style="text-align: center; color: #000; font-size: 1.2em;">⊗</div>

             <div>
                <span style="font-size: 1.1em; margin-right: 5px;">1/√2</span>
                <span>( |0⟩ + e<sup>2πi <span style="color: #4B0082;">0.j<sub>n-1</sub>j<sub>n</sub></span></sup> |1⟩ )</span>
             </div>

             <div style="text-align: center; color: #000; font-size: 1.2em;">⊗ ... ⊗</div>

             <div>
                <span style="font-size: 1.1em; margin-right: 5px;">1/√2</span>
                <span>( |0⟩ + e<sup>2πi <span style="color: #B22222;">0.j<sub>1</sub>...j<sub>n</sub></span></sup> |1⟩ )</span>
             </div>
        </div>

    </div>
</div>
`,
            supplement: `將振幅編碼轉換為相位編碼 (Time domain → Frequency domain)。<br>
<br>
<strong>待補充內容：</strong><br>
<div style="font-family: 'Times New Roman', serif; margin-top: 10px; display: flex; flex-direction: column; gap: 20px;">

    <div>
        <div style="font-weight: bold; color: #333; margin-bottom: 5px;">1. 離散傅立葉公式 (Classical DFT):</div>
        <div style="background: #f9f9f9; padding: 10px; border-left: 3px solid #666; font-size: 1.1em; overflow-x: auto;">
            y<sub>k</sub> = 
            <span style="font-size: 1.2em;">1/√N</span> 
            <span style="font-size: 1.3em; margin: 0 5px;">∑</span><sub>j=0</sub><sup>N-1</sup> 
            x<sub>j</sub> · e<sup> i 2π jk / N </sup>
        </div>
    </div>

    <div>
        <div style="font-weight: bold; color: #333; margin-bottom: 5px;">2. 量子態表示的 DFT:</div>
        <div style="background: #f9f9f9; padding: 10px; border-left: 3px solid #006400; font-size: 1.1em; overflow-x: auto;">
            |j⟩ = 
            <span style="font-size: 1.2em;">1/√N</span> 
            <span style="font-size: 1.3em; margin: 0 5px;">∑</span><sub>k=0</sub><sup>N-1</sup> 
            e<sup> i 2π jk / N </sup> |k⟩
        </div>
        <div style="font-size: 0.85em; color: #666; margin-top: 2px;">(其中 N = 2ⁿ，將基底態轉換為所有態的均勻疊加，相位由 k 決定)</div>
    </div>

    <div>
        <div style="font-weight: bold; color: #333; margin-bottom: 5px;">3. 量子二進制表示 (Tensor Product):</div>
        <div style="background: #f9f9f9; padding: 10px; border-left: 3px solid #00008B; font-size: 1.1em; overflow-x: auto; white-space: nowrap;">
            |j⟩ <span style="margin: 0 5px;">→</span> 
            <span style="font-size: 1.2em;">1/2<sup>n/2</sup></span>
            [ 
              (|0⟩ + e<sup>2πi 0.j<sub>n</sub></sup>|1⟩) 
              ⊗ 
              (|0⟩ + e<sup>2πi 0.j<sub>n-1</sub>j<sub>n</sub></sup>|1⟩) 
              ⊗ ... ⊗ 
              (|0⟩ + e<sup>2πi 0.j<sub>1</sub>...j<sub>n</sub></sup>|1⟩) 
            ]
        </div>
        <div style="font-size: 0.85em; color: #666; margin-top: 2px;">
            (這是 QFT 電路設計的靈魂：將糾纏態分解為單量子位元的旋轉)
        </div>
    </div>

</div>

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
            computation: `
<div style="font-family: 'Times New Roman', serif; overflow-x: auto; white-space: nowrap; padding-bottom: 10px;">
    
    <div style="display: inline-flex; align-items: center; padding-top: 15px;">

        <div>
            <span style="font-size: 1.1em;">1/√2</span> (|0⟩ + |1⟩) ⊗ |ψₖ⟩
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
            <span style="font-size: 0.8em; margin-bottom: -3px;">C-U</span>
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="height: 1px; background: #000; width: 40px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
            </div>
        </div>

        <div>
            <span style="font-size: 1.1em;">1/√2</span> 
            ( |0⟩⊗|ψₖ⟩ + |1⟩⊗<span style="color: #B22222; font-weight: bold;">e<sup>iφₖ</sup></span>|ψₖ⟩ )
        </div>

        <div style="margin: 0 15px; font-size: 1.2em;">=</div>

        <div style="border: 2px solid #00008B; padding: 5px 10px; border-radius: 5px; background: #f0f8ff;">
            <span style="font-size: 1.1em;">1/√2</span> 
            ( |0⟩ + <span style="color: #B22222; font-weight: bold;">e<sup>iφₖ</sup></span>|1⟩ ) ⊗ |ψₖ⟩
        </div>

    </div>
</div>
`,
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
computation: `
<div style="font-family: 'Times New Roman', serif; overflow-x: auto; white-space: nowrap; padding-bottom: 10px;">
    
    <div style="display: inline-flex; align-items: center; padding-top: 20px;">

        <div style="display: flex; align-items: center;">
            <div style="text-align: center;">|0⟩<sup>⊗t</sup> |u⟩</div>
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">H<sup>⊗t</sup></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 30px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div>1/√2ᵗ ∑ |k⟩ |u⟩</div>
        </div>

        <div style="display: flex; align-items: center;">
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">C-U<sup>k</sup></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
                <span style="font-size: 0.75em; color: #666;">Kickback</span>
            </div>

            <div style="border: 1px dashed #999; padding: 5px; border-radius: 5px; background: #f9f9f9;">
                <span style="font-size: 1.1em;">1/√2ᵗ</span> 
                [ 
                  (|0⟩+e<sup>2πi <span style="color:#B22222;">0.φ₁...</span></sup>|1⟩) 
                  ⊗ ... ⊗ 
                  (|0⟩+e<sup>2πi <span style="color:#006400;">0.φₜ</span></sup>|1⟩) 
                ] ⊗ |u⟩
            </div>
        </div>

        <div style="display: flex; align-items: center;">
            
            <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
                <span style="font-size: 0.9em; font-weight: bold; margin-bottom: -3px;">FT<sup>†</sup></span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 40px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px; border-left: 3px solid #000; padding-left: 10px; position: relative;">
            
            <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 5px; border-top: 2px solid #000; border-bottom: 2px solid #000;"></div>

            <div style="display: flex; align-items: center;">
                <span style="font-weight: bold; color: #B22222; width: 30px;">| φ₁ ⟩</span>
                <span style="font-size: 0.8em; color: #666; margin-left: 10px;">(High Bit 2⁻¹)</span>
            </div>

            <div style="display: flex; align-items: center;">
                <span style="font-weight: bold; color: #4B0082; width: 30px;">| φ₂ ⟩</span>
                <span style="font-size: 0.8em; color: #666; margin-left: 10px;">(Bit 2⁻²)</span>
            </div>

            <div style="text-align: center; line-height: 0.5em; color: #999;">⋮</div>

            <div style="display: flex; align-items: center;">
                <span style="font-weight: bold; color: #006400; width: 30px;">| φₜ ⟩</span>
                <span style="font-size: 0.8em; color: #666; margin-left: 10px;">(Low Bit 2⁻ᵗ)</span>
            </div>

        </div>

        <div style="display: flex; align-items: center; margin-left: 15px;">
            
            <div style="display: flex; flex-direction: column; align-items: center; margin-right: 10px;">
                <span style="font-size: 0.8em; margin-bottom: -3px;">Measure</span>
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="height: 1px; background: #000; width: 30px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
                </div>
            </div>

            <div style="border: 2px solid #00008B; padding: 5px 10px; border-radius: 5px; background: #f0f0ff;">
                <div style="font-size: 0.85em; color: #666; margin-bottom: 2px;">Binary Fraction:</div>
                <div style="font-size: 1.2em; font-weight: bold;">
                    φ ≈ 0.<span style="color: #B22222;">φ₁</span><span style="color: #4B0082;">φ₂</span>...<span style="color: #006400;">φₜ</span>
                </div>
            </div>

        </div>

    </div>
</div>
`,
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
computation: `
<div style="font-family: 'Times New Roman', serif; overflow-x: auto; white-space: nowrap; padding-bottom: 10px;">
    
    <div style="display: inline-flex; align-items: center; padding-top: 15px;">

        <div style="text-align: center;">
            <div style="font-size: 0.9em; color: #B22222;">|0⟩<sub>S</sub></div>
            <div style="font-size: 0.9em; color: #006400;">|0⟩<sub>C</sub></div>
            <div style="font-size: 0.9em; color: #00008B;">|b⟩<sub>In</sub></div>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
            <div style="border: 1px solid #000; padding: 3px 8px; font-size: 0.8em; background: #fff;">
                QPE (e<sup>iAt</sup>)
            </div>
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="height: 1px; background: #000; width: 60px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
            </div>
            <span style="font-size: 0.75em; color: #666;">Extract Eigenvalues</span>
        </div>

        <div>
            ∑ βⱼ 
            <span style="color: #B22222;">|0⟩<sub>S</sub></span> 
            <span style="color: #006400;">|λⱼ⟩<sub>C</sub></span> 
            <span style="color: #00008B;">|uⱼ⟩<sub>In</sub></span>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
            <div style="border: 1px solid #000; padding: 3px 8px; font-size: 0.8em; background: #fff;">
                C-R<sub>y</sub>(2arcsin(C/λ))
            </div>
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="height: 1px; background: #000; width: 80px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
            </div>
            <span style="font-size: 0.75em; color: #666;">Invert Eigenvalues</span>
        </div>

        <div style="display: flex; flex-direction: column; border: 1px dashed #999; padding: 5px; background: #f9f9f9; border-radius: 5px;">
            <div>
                ∑ βⱼ 
                ( <span style="color: #999; font-size: 0.8em;">...|0⟩</span> + 
                <span style="color: #B22222; font-weight: bold;">C/λⱼ |1⟩<sub>S</sub></span> ) 
                <span style="color: #006400;">|λⱼ⟩<sub>C</sub></span> 
                <span style="color: #00008B;">|uⱼ⟩<sub>In</sub></span>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
            <div style="border: 1px solid #000; padding: 3px 8px; font-size: 0.8em; background: #fff;">
                QPE<sup>†</sup>
            </div>
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="height: 1px; background: #000; width: 60px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
            </div>
            <span style="font-size: 0.75em; color: #666;">Uncompute Clock</span>
        </div>

        <div>
            ∑ βⱼ 
            ( <span style="color: #B22222;">C/λⱼ |1⟩<sub>S</sub></span> ) 
            <span style="color: #006400;">|0⟩<sub>C</sub></span> 
            <span style="color: #00008B;">|uⱼ⟩<sub>In</sub></span>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin: 0 15px;">
            <span style="font-size: 0.8em; margin-bottom: -3px; font-weight: bold;">Measure S=1</span>
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="height: 1px; background: #000; width: 50px;"></div><div style="font-size: 10px; margin-left: -1px;">▶</div>
            </div>
            <span style="font-size: 0.75em; color: #B22222;">Post-selection</span>
        </div>

        <div style="border: 2px solid #00008B; padding: 5px 10px; border-radius: 5px; background: #f0f8ff;">
            <span style="font-weight: bold;">|x⟩</span> 
            ≈ ∑ (βⱼ/λⱼ) |uⱼ⟩ 
            <span style="font-size: 0.9em; color: #666; margin-left: 5px;">∝ A⁻¹|b⟩</span>
        </div>

    </div>
</div>
`,
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
<strong>後續影響：</strong><br>
• 催生了量子機器學習研究熱潮<br>
• 啟發了量子主成分分析（Q-PCA）<br>
• 發展出量子支持向量機（QSVM）<br>
• 推動了量子數值分析的研究<br>
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
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = featureData;
}
