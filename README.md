# 量子電腦演化史互動地圖

這是一個互動式的量子電腦發展歷史可視化網站，展示了從1982年至今量子計算領域的重要演算法、協議和技術。

## 功能特點

- 🖱️ **可拖曳地圖**：使用滑鼠拖曳瀏覽整個時間軸
- 🔍 **縮放功能**：使用滾輪放大縮小查看細節
- 👆 **互動式詳情**：點擊任何節點查看詳細資訊
- ⏱️ **時間軸**：清晰展示各技術的發展時序

## 內容分類

### 1. 演算法與核心（藍色）
- **結構找尋與頻譜特徵分析**：Deutsch, D-Jorsa, Simon, Shor, QPE, HSP, PCA, HHL, QMI, QSVE
- **哈密頓模擬**：QRandomWalk, Lloyd-Trotter, DTQW&CTQW, BHC補償脈衝, LCU, QSP, Block coding
- **震幅放大**：Grover, AA, AE, fixed-point AA
- **集大成者**：QSVT

### 2. 通訊協議（橘色）
- **不可複製**：不可複製定理
- **密碼學**：共軛編碼, BB84, E91, B92
- **通訊**：Supercoding, Teleporting, Entangle swap

### 3. 糾錯與容錯（綠色）
- Shor Code, Steane Code, Surface Code, Topological

### 4. 硬體（紅色）
- **Adiabatic**：Quantum Annealing, AQC, D-Wave
- **Gate-based**：離子阱, 超導體, 光子, 拓撲

## 使用方法

### 本地運行

1. 直接打開 `index.html` 文件即可在瀏覽器中查看
2. 無需安裝任何依賴或伺服器

### 部署到網站

可以將整個專案資料夾上傳到以下任一平台：

#### GitHub Pages（推薦）
1. 在 GitHub 上創建新倉庫
2. 上傳所有文件
3. 在倉庫設置中啟用 GitHub Pages
4. 訪問 `https://你的用戶名.github.io/倉庫名`

#### Netlify
1. 訪問 [netlify.com](https://www.netlify.com)
2. 拖放整個資料夾到 Netlify
3. 獲得自動生成的網址

#### Vercel
1. 訪問 [vercel.com](https://vercel.com)
2. 導入專案
3. 自動部署

## 文件結構

```
.
├── index.html      # 主HTML文件
├── styles.css      # 樣式表
├── app.js          # 主要應用邏輯
├── data.js         # 量子算法數據
└── README.md       # 說明文件
```

## 自定義內容

### ⭐ 修改數據和資訊
**所有內容都在 `data.js` 文件中！** 這是您最常修改的文件。

### 添加數學公式
本專案支援 LaTeX 數學公式：

```javascript
// 行內公式：使用 $...$
description: `系統需要 $n$ 個量子位元`

// 獨立公式：使用 $$...$$
description: `薛丁格方程：
$$e^{-iHt}|\\varphi_0\\rangle = |\\varphi_t\\rangle$$`
```

**詳細說明請查看 `使用说明.md` 文件！**

### 修改節點資訊
編輯 `data.js` 文件中的 `details` 對象，添加或修改各算法的詳細資訊。

### 調整顏色
在 `app.js` 的 `drawBackgrounds()` 函數中修改各區域的顏色。

### 添加新節點
在 `data.js` 的對應類別 `items` 數組中添加新項目。

## 瀏覽器支援

- Chrome/Edge（推薦）
- Firefox
- Safari
- Opera

## 開發計劃

- [ ] 添加更多算法詳細資訊
- [ ] 添加搜索功能
- [ ] 添加節點之間的關係線
- [ ] 優化移動設備體驗
- [ ] 添加算法分類過濾器

## 授權

本專案僅供學習和研究使用。

---

製作於 2025 年

