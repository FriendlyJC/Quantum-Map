// 量子糾錯碼 - 節點資料
// 包含: Shor code, Steane code, CSS code, Stabilizer code, Surface code, Toric code

const errorCodeData = {
    // 節點位置配置
    items: [
        { name: 'Shor code', year: 1995, x: 1170, y: 575 },
        { name: 'Steane code', year: 1996, x: 1170, y: 600 },
        { name: 'CSS code', year: 1996, x: 1255, y: 600 },
        { name: 'Stabilizer code', year: 1997, x: 1170, y: 625 },
        { name: 'Surface code', year: 1998, x: 1170, y: 650 },
        { name: 'Toric code', year: 2003, x: 1255, y: 775 }
    ],

    // 節點詳細資料
    details: {
        'Shor code': {
            name: 'Shor Code (1995)',
            author: 'Peter W. Shor',
            goal: '第一個量子糾錯碼',
            concept: '使用9個物理量子位元編碼1個邏輯量子位元，可以糾正單一位元翻轉和相位翻轉錯誤',
            process: `Shor code 是第一個完整的量子糾錯碼。
它巧妙地結合了經典的三位元重複碼，同時糾正 bit-flip 和 phase-flip 錯誤。

<strong>文獻：</strong>
Scheme for reducing decoherence in quantum computer memory
Physical Review A 52, 2493 (1995)`,
            imageSource: ''
        },

        'Steane code': {
            name: 'Steane Code (1996)',
            author: 'Andrew Steane',
            goal: '更高效的量子糾錯碼',
            concept: 'CSS碼家族的成員，使用7個物理量子位元編碼1個邏輯量子位元',
            process: `Steane code 是第一個 CSS (Calderbank-Shor-Steane) 碼。
基於經典的 Hamming(7,4) 碼構造。

<strong>文獻：</strong>
Error Correcting Codes in Quantum Theory
Physical Review Letters 77, 793 (1996)`,
            imageSource: ''
        },

        'CSS code': {
            name: 'CSS Code (1996)',
            author: 'Calderbank, Shor, Steane',
            goal: '基於經典碼的量子糾錯碼構造方法',
            concept: '從兩個經典糾錯碼構造量子糾錯碼的通用方法',
            process: `CSS碼提供了一種從經典碼構造量子碼的系統方法。

<strong>文獻：</strong>
Good quantum error-correcting codes exist
Physical Review A 54, 1098 (1996)`,
            imageSource: ''
        },

        'Stabilizer code': {
            name: 'Stabilizer Code (1997)',
            author: 'Daniel Gottesman',
            goal: '量子糾錯碼的統一數學框架',
            concept: '使用Pauli群的穩定子群來描述量子碼',
            process: `穩定子形式主義是描述量子糾錯碼最優雅、最強大的數學語言。

<strong>文獻：</strong>
Stabilizer Codes and Quantum Error Correction
Ph.D. Thesis, Caltech (1997)`,
            imageSource: ''
        },

        'Surface code': {
            name: 'Surface Code (1998)',
            author: 'Kitaev, Bravyi, Freedman',
            goal: '二維拓撲量子糾錯碼',
            concept: '在二維格子上實現的拓撲碼，具有高容錯閾值',
            process: `Surface code 目前被認為是最有可能實現容錯量子計算的碼。
容錯閾值約為 1%，遠高於其他碼。

<strong>文獻：</strong>
Quantum accuracy threshold for concatenated distance-3 code
Quant. Inf. Comp. 6, 97-165 (2006)`,
            imageSource: ''
        },

        'Toric code': {
            name: 'Toric Code (2003)',
            author: 'Alexei Kitaev',
            goal: '拓撲量子糾錯碼',
            concept: '定義在環面上的拓撲碼，是 Surface code 的週期性版本',
            process: `Toric code 是拓撲量子糾錯的開創性工作。
展示了拓撲保護的強大之處。

<strong>文獻：</strong>
Fault-tolerant quantum computation by anyons
Annals of Physics 303, 2-30 (2003)`,
            imageSource: ''
        }
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = errorCodeData;
}
