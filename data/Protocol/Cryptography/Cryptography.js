// 密碼學 - 節點資料 (含不可複製原理)
// 包含: 不可複製原理, 共軛編碼, BB84, E91, DI-QKD, B92

const cryptographyData = {
    // 節點位置配置
    items: [
        { name: '不可複製原理', year: 1982, x: 875, y: 250 },
        { name: '共軛編碼', year: 1983, x: 960, y: 275 },
        { name: 'BB84', year: 1984, x: 960, y: 300 },
        { name: 'E91', year: 1991, x: 960, y: 475 },
        { name: 'DI-QKD', year: 2007, x: 960, y: 875 },
        { name: 'B92', year: 1992, x: 960, y: 500 }
    ],

    // 節點詳細資料
    details: {
        '不可複製原理': {
            name: '量子不可複製原理',
            author: 'William K. Wootters, Wojciech H. Zurek, Dennis Dieks',
            concept: '量子力學基本定理，證明量子態無法完美複製',
            circuit: '理論證明',
            process: `么正演化的線性性質
<strong>文獻：</strong>
A single quantum cannot be cloned <strong>Nature 299, 802–803 (1982)</strong>
Dieks: Communication by EPR devices <strong>Physics Letters A 92, 271 (1982)</strong>`,
            imageSource: 'https://bayareanotes.com/no-cloning-theorem/'
        },

        '共軛編碼': {
            name: '共軛編碼',
            author: 'Stephen Wiesner',
            goal: '量子密碼學基礎',
            concept: '使用非正交基底編碼',
            circuit: '量子電路圖示意',
            process: `隨機基底選擇 + 測量
<strong>文獻：</strong>Conjugate Coding
<strong>SIGACT News 15, 78–88 (1983)</strong>`,
            imageSource: ''
        },

        'BB84': {
            name: 'BB84 Protocol',
            author: 'Charles H. Bennett, Gilles Brassard',
            concept: '量子密鑰分發，利用量子態不可複製原理保證安全',
            circuit: '量子電路圖示意',
            process: `Alice(發送者)/ Bob(接收者)/ Eve(竊聽者)

<strong>定義：</strong>+方向的 |(直)=0, -(橫) = 1； X方向的 /=0, \\ = 1

<strong>流程：</strong>
<strong>(發送)</strong>
<strong>Step 1：</strong>Alice 隨機產生一組0/1序列 (隱密)
<strong>Step 2：</strong>Alice 使用任意 0={|,/}, 1={-,\\} 產生上述序列並發送量子態給Bob
<strong>(隨機基底測量)</strong>
<strong>Step 3：</strong>Bob使用{+, X}基底測量得到一組通過0/1序列
<strong>(公開比對)</strong>
<strong>Step 4：</strong>Bob將使用的序列公開告訴Alice
<strong>Step 5：</strong>Alice比對，哪些相同
<strong>(錯誤檢測)</strong>
<strong>Last：</strong>將使用+/X序列相異的移除，相同的部份其0/1序列作為密鑰使用。

* Eve 竊聽將導致 Bob成功率大大降低，可及時發現是否被竊聽。

<strong>文獻：</strong>
Quantum cryptography: Public key distribution and coin tossing <strong>Proc. IEEE Int. Conf. on Computers, Systems & Signal Processing (Bangalore, 1984)</strong>`,
            imageSource: 'https://www.researchgate.net/figure/The-Principle-of-QC-According-to-the-BB84-Protocol_fig6_305768369'
        },

        'E91': {
            name: 'E91 Protocol',
            author: 'Artur K. Ekert',
            goal: '基於糾纏的量子密鑰分發',
            concept: '利用Bell不等式檢測竊聽',
            circuit: '量子電路圖示意',
            process: `EPR對分發 + Bell測試
<strong>文獻：</strong>
Quantum cryptography based on Bell's theorem <strong>Physical Review Letters 67, 661 (1991)</strong>`,
            imageSource: ''
        },

        'DI-QKD': {
            name: 'Device-Independent QKD',
            author: 'Antonio Acín, Nicolas Gisin, Lluis Masanes et al.',
            goal: '裝置無關量子密鑰分發',
            concept: '不信任測量裝置的安全協議',
            circuit: '量子電路圖示意',
            process: `Bell不等式 + 隱私放大
<strong>文獻：</strong>
Device-independent security of quantum cryptography against collective attacks <strong>Physical Review Letters 98, 230501 (2007)</strong>`,
            imageSource: ''
        },

        'B92': {
            name: 'B92 Protocol',
            author: 'Charles H. Bennett',
            goal: '簡化的量子密鑰分發',
            concept: '僅使用兩個非正交態',
            circuit: '量子電路圖示意',
            process: `簡化版BB84
<strong>文獻：</strong>
Quantum cryptography using any two nonorthogonal states <strong>Physical Review Letters 68, 3121 (1992)</strong>`,
            imageSource: ''
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cryptographyData;
}
