// 門電路量子計算 - 節點資料
// 包含: Superconducting, Ion trap, Photonic, NV center, Topological

const gateBasedData = {
    // 節點位置配置
    items: [
        { name: 'Superconducting', year: 1999, x: 1450, y: 675 },
        { name: 'Ion trap', year: 1995, x: 1450, y: 575 },
        { name: 'Photonic', year: 2001, x: 1450, y: 725 },
        { name: 'NV center', year: 1997, x: 1450, y: 625 },
        { name: 'Topological', year: 2003, x: 1535, y: 775 }
    ],

    // 節點詳細資料
    details: {
        'Superconducting': {
            name: 'Superconducting Qubits (1999)',
            author: 'Nakamura, Pashkin, Tsai et al.',
            goal: '使用超導電路實現量子位元',
            concept: '超導量子位元利用約瑟夫森結 (Josephson Junction) 的非線性特性來實現量子二能階系統。',
            process: `超導量子位元是目前最成熟的量子計算平台之一。

<strong>優點：</strong>
• 製造可擴展性好（半導體工藝）
• 閘操作速度快（納秒級）
• 可調控性高

<strong>挑戰：</strong>
• 需要極低溫（~15mK）
• T1/T2 時間有限

<strong>代表公司：</strong>IBM, Google, Rigetti`,
            imageSource: ''
        },

        'Ion trap': {
            name: 'Ion Trap Quantum Computing (1995)',
            author: 'Cirac & Zoller, Monroe & Wineland',
            goal: '使用囚禁離子實現量子計算',
            concept: '離子阱量子電腦使用電磁場囚禁單個離子，利用離子的內部能階作為量子位元。',
            process: `離子阱是最早實現量子閘操作的物理平台之一。

<strong>優點：</strong>
• 極長的相干時間（秒級）
• 極高的閘保真度（>99.9%）
• 天然的全連接性

<strong>挑戰：</strong>
• 閘速度較慢（微秒級）
• 擴展性挑戰

<strong>代表公司：</strong>IonQ, Honeywell/Quantinuum`,
            imageSource: ''
        },

        'Photonic': {
            name: 'Photonic Quantum Computing (2001)',
            author: 'Knill, Laflamme, Milburn (KLM)',
            goal: '使用光子實現量子計算',
            concept: '光量子計算利用光子的偏振、路徑或時間模式作為量子位元。',
            process: `光量子計算有獨特的優勢和挑戰。

<strong>優點：</strong>
• 室溫操作
• 天然適合量子通訊
• 極低的去相干

<strong>挑戰：</strong>
• 光子間相互作用弱
• 光子損失問題

<strong>代表公司：</strong>PsiQuantum, Xanadu`,
            imageSource: ''
        },

        'NV center': {
            name: 'NV Center Quantum Computing (1997)',
            author: 'Various research groups',
            goal: '使用鑽石中的氮空位中心實現量子位元',
            concept: 'NV中心是鑽石晶格中的一種點缺陷，可以在室溫下操作。',
            process: `NV中心是一種有潛力的固態量子位元。

<strong>優點：</strong>
• 可在室溫操作
• 長相干時間
• 光學可尋址

<strong>挑戰：</strong>
• 擴展性困難
• 製造一致性`,
            imageSource: ''
        },

        'Topological': {
            name: 'Topological Quantum Computing (2003)',
            author: 'Kitaev, Freedman, Microsoft Research',
            goal: '利用拓撲保護實現容錯量子計算',
            concept: '拓撲量子計算利用任意子（Anyons）的編織操作來執行量子閘，天然具有容錯性。',
            process: `拓撲量子計算是最具野心的量子計算方案。

<strong>優點：</strong>
• 天然的拓撲保護
• 理論上無需額外糾錯

<strong>挑戰：</strong>
• 實現非阿貝爾任意子困難
• 仍處於早期研究階段

<strong>代表公司：</strong>Microsoft`,
            imageSource: ''
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gateBasedData;
}
