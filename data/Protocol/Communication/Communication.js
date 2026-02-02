// 通訊 - 節點資料
// 包含: Supercoding, Teleporting, Entanglement

const communicationData = {
    // 節點位置配置
    items: [
        { name: 'Supercoding', year: 1992, x: 1045, y: 500 },
        { name: 'Teleporting', year: 1993, x: 1080, y: 525 },
        { name: 'Entanglement', year: 1993, x: 1015, y: 525 }
    ],

    // 節點詳細資料
    details: {
        'Supercoding': {
    name: 'Superdense Coding 超密編碼',
    author: 'Charles H. Bennett, Stephen J. Wiesner',
    concept: '超密集編碼，只傳送一個實體量子位元即可傳遞4種資訊',
    circuit: '量子電路圖示意',
    process: `<strong>紅線上方：</strong>Alice(傳送者)<br><strong>紅線下方：</strong>Bob(接收者) *兩人相隔兩地<br>
<br>
<strong>Step 1：</strong>產生任意2 qubits貝爾態 Ex: β₀₀=1/√2(|00⟩+|11⟩)，並將 1 個qubit給Alice， 另 1 個給Bob。<br>
<strong>Step 2：</strong>Alice將要發送的2 bits訊息{ab} = {00/ 01/ 10/ 11} 透過Controlled-X、Controlled-Z 施加於qubit<br>
<strong>Step 3：</strong>Alice 將編碼後的<strong> 1 顆qubit</strong>發送給 Bob<br>
<strong>Step 4：</strong>Bob 將接收到的 qubit與原本手中的qubit，執行C-NOT、H 閘操作即可獲取兩位元經典資訊<br>
<br>
<strong>文獻：</strong><br>Communication via one- and two-particle operators on Einstein-Podolsky-Rosen states<strong>Physical Review Letters 69, 2881 (1992)</strong>`,
    story: '待補充',
    imageSource: 'https://www.researchgate.net/figure/Superdense-coding-circuit_fig3_265853605'
},
        'Teleporting': {
    name: 'Quantum Teleportation 隱形傳態',
    author: 'Charles H. Bennett, Gilles Brassard, Claude Crépeau, Richard Jozsa, Asher Peres, William K. Wootters',
    concept: '量子態傳輸，利用糾纏態透過古典方式傳送量子態訊息',
    circuit: '量子電路圖示意',
    process: `<strong>紅線上方：</strong>Alice(傳送者)<br><strong>紅線下方：</strong>Bob(接收者) *兩人相隔兩地<br>
<br>
<strong>Step 1：</strong>產生任意2 qubits貝爾態 Ex: β₀₀=1/√2(|00⟩+|11⟩)，並將 1 個qubit給Alice， 另 1 個給Bob。<br>
<strong>Step 2：</strong>Alice 將手上另一顆要發送給Bob的量子態|ψ⟩，和手中糾纏qubit，一起經過 C-NOT和H閘作用<br>
<strong>Step 3：</strong>作用後 Alice再測量手上兩顆 qubits測量得到結果{00/ 01/ 10/ 11}之一<br>
<strong>Step 4：</strong>Alice 將測量結果透過古典方式告訴 Bob，遠方的 Bob接收到古典訊息後，將結果對手中 qubit做相應的Controlled-X、Controlled-Z操作，即可獲得量子態|ψ⟩<br>
<br>
<strong>文獻：</strong><br>Teleporting an unknown quantum state via dual classical and Einstein-Podolsky-Rosen channels<strong>Physical Review Letters 70, 1895 (1993)</strong>`,
    imageSource: 'https://www.researchgate.net/figure/Circuit-implementing-the-quantum-teleportation-protocol-The-formal-specification-of-the_fig4_347965429'
},
        'Entanglement': {
            name: 'Entanglement Swapping',
            author: 'Michael Żukowski, Anton Zeilinger, Marek A. Horne, Artur K. Ekert',
            goal: '糾纏交換',
            concept: '遠程建立糾纏態',
            circuit: '量子電路圖示意',
            process: 'Bell測量 + 糾纏轉移<br><strong>文獻：</strong><br>“Event-ready-detectors” Bell experiment via entanglement swapping<br><strong>Physical Review Letters 71, 4287 (1993)</strong>',
            imageSource: ''
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = communicationData;
}
