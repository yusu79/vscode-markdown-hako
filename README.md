# Markdown Box
![GitHub License](https://img.shields.io/github/license/yusu79/vscode-markdown-info)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/yusu79.vscode-markdown-box)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/yusu79.vscode-markdown-box)
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/yusu79.vscode-markdown-box)

便利なMarkdown用プラグインを一括導入できるVSCode拡張機能です。この拡張機能をインストールするだけで、Markdownの編集や表示に役立つ様々な機能を利用できるようになります。

<!-- omit in toc -->
## 目次
- [インストール](#インストール)
- [プラグイン](#プラグイン)
- [設定オプション](#設定オプション)
- [クレジット](#クレジット)
- [謝辞](#謝辞)

## インストール
VScodeのマーケットプレイスで「**Markdown Box**」と入力してください｡

<p align="center">
<img src="./images/setup.png"/>
</p>



## プラグイン

「Markdown Box」をインストールすることで、下記のプラグインが使用可能となります。各プラグインは設定でON/OFFの切り替えのほか、独自のコンフィグを設定することも可能です。

| プラグイン                                                                                   | 入力                       | レンダリング                                           | 説明                       | 
| -------------------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------ | -------------------------- | 
| [markdown-it-table-of-contents](https://www.npmjs.com/package/markdown-it-table-of-contents) | `[[toc]]`                  | <img src="./images/markdown-it-table-of-contents.png"> | 目次生成                   | 
| [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote)                   | `[^1]`                     | <img src="./images/markdown-it-footnote.png">          | 脚注生成                   | 
| [markdown-it-sup](https://www.npmjs.com/package/markdown-it-sup)                             | `x^2^ + y^2^ = z^2^`       | <img src="./images/markdown-it-sup.png">               | 上付き文字生成             | 
| [markdown-it-sub](https://www.npmjs.com/package/markdown-it-sub)                             | `H~2~O`                    | <img src="./images/markdown-it-sub.png">               | 下付き文字生成             | 
| [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs)                         | `# タイトル {#カスタムID}` | <img src="./images/markdown-it-attrs.png">             | {}部分を削除する           | 
| [markdown-it-kbd](https://www.npmjs.com/package/markdown-it-kbd)                             | `[[ctrl]]+[[shift]]+[[c]]` | <img src="./images/markdown-it-kbd.png">               | キーボードを表現する       | 
| [markdown-it-underline](https://www.npmjs.com/package/markdown-it-underline)                 | `_文字_`                   | <img src="./images/markdown-it-underline.png">         | 下線部を表現する           | 
| [markdown-it-mark](https://www.npmjs.com/package/markdown-it-mark)                           | `==文字==`                 | <img src="./images/markdown-it-mark.png">              | 文脈上重要な箇所を強調する | 
| [markdown-it-mojicolor](https://www.npmjs.com/package/markdown-it-mojicolor)                 | `%文字%{色}`               | <img src="./images/markdown-it-mojicolor.png">         | 文字色を指定する           | 





### markdown-it-table-of-contents

`[[toc]]`と書いた箇所に、自動生成された目次をレンダリングするプラグインです。


![](./images/markdown-it-table-of-contents.png)

<img src="./images/link.png" alt="リンクアイコン" width="12">：  [markdown-it-table-of-contents](https://www.npmjs.com/package/markdown-it-table-of-contents)


### markdown-it-footnote


`テキスト[^1]`及び`[^1]: 脚注`とセットで書くと、文章下部に脚注が出現します。


![](./images/markdown-it-footnote.png)

<img src="./images/link.png" alt="リンクアイコン" width="12">： [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote) 

### markdown-it-sup


supは「**Superscript（上付き文字）**」の略です。`x^2^`のように`^`で囲むと、`x<sup>2</sup>`のように`<sup>`タグで囲まれてレンダリングされます。



![](./images/markdown-it-sup.png)

<img src="./images/link.png" alt="リンクアイコン" width="12">： [markdown-it-sup](https://www.npmjs.com/package/markdown-it-sup)

### markdown-it-sub


subは「**Subscript（下付き文字）**」の略です。`H~2~O`のように`~`で囲むと`H<sub>2</sub>O`のように`<sub>`タグで囲われてレンダリングされます。

![](./images/markdown-it-sub.png)

<img src="./images/link.png" alt="リンクアイコン" width="12"> ： [markdown-it-sub](https://www.npmjs.com/package/markdown-it-sub) 

### markdown-it-attrs

`# タイトル{#カスタムID}`とすると、レビューから`{#カスタムID}`部分は削除されます。また、`<h1 id="カスタムID">タイトル</h1>`のようにIDが付与されてレンダリングされます。

![](./images/markdown-it-attrs.png)

<img src="./images/link.png" alt="リンクアイコン" width="12">： [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs)

### markdown-it-kbd


kbdは「**keyboard（キーボード）**」の略です。`[[ctrl]]+[[shift]]+[[c]]`のように各文字を`[[]]`で囲むと、`<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>c</kbd>`のように`<kbd>`で囲われてレンダリングされます。



![](./images/markdown-it-kbd.png)

<img src="./images/link.png" alt="リンクアイコン" width="12">： [markdown-it-kbd](https://www.npmjs.com/package/markdown-it-kbd) 

### markdown-it-underline


`_文字_`とすることで`<u>underline</u>`でレンダリングできるプラグインです。`<u>`は以前は単なる下線を引くタグでしたが、HTML5で役割が変更されました。主にスペルミスや綴りの誤りを指摘する用途に使います。

ちなみにこのプラグインを導入しない場合、`_文字_`は`<em>文字</em>`でレンダリングされます。`<em>`は「**強調（emphasis）**」を表現するためのタグです。



![](./images/markdown-it-underline.png)

<img src="./images/link.png" alt="リンクアイコン" width="12">： [markdown-it-underline](https://www.npmjs.com/package/markdown-it-underline) 

### markdown-it-mark



`==文字==`とすることで`<mark>文字</mark>`でレンダリングされるプラグインです。`<mark>`は検索結果を表示する際など、文脈上重要な箇所を強調するために使うタグです。



![](./images/markdown-it-mark.png)

<img src="./images/link.png" alt="リンクアイコン" width="12">： [markdown-it-mark](https://www.npmjs.com/package/markdown-it-mark)  

### markdown-it-mojicolor


`%文字%{黄色}`とすることで、`<span style="color: #ffd900;">文字</span>`のように指定した色がレンダリングされるプラグインです。




![](./images/markdown-it-mojicolor.png)

<img src="./images/link.png" alt="リンクアイコン" width="12">： [markdown-it-mojicolor](https://www.npmjs.com/package/markdown-it-mojicolor)  

## 設定オプション

markdown-boxには2つの設定があります。


### 1. プラグインのON/OFF機能
- `Markdown-box > Markdown-it-〇〇: Enable`（デフォルト: true）
  - **true（チェック）** : プラグインが有効となり、Markdownプレビューに反映されます
  - **false（チェックを外す）** : プラグインは無効になり、Markdownプレビューに反映されなくなります

### 2. プラグインのオプション設定機能
- `Markdown-box > Markdown-it-〇〇: Options`（デフォルト: 各プラグインで異なります）
  - **settings.json で編集** : 各プラグインの詳細設定を編集できます

各プラグインを独自の設定にしたい場合は`settings.json で編集`をクリックします。

## クレジット
VScode拡張機能で表示されるアイコンは、以下の2つの画像を組み合わせたものです。


| 画像                                                                                                                                                                                          | ライセンス                                                      | 作者/サイト                                                                                                     | 
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | 
| [Free Markdown Icon](https://iconscout.com/free-icon/markdown-1)                                                                                                                                  | [MIT ライセンス](https://opensource.org/license/MIT)            | [Benjamin J sperry](https://iconscout.com/contributors/benjamin-j-sperry) / [IconScout](https://iconscout.com/) | 
| [段ボール箱　11](https://icooon-mono.com/12408-%e6%ae%b5%e3%83%9c%e3%83%bc%e3%83%ab%e7%ae%b1-11/)| [icooon-mono独自のライセンス](https://icooon-mono.com/license/) | [icooon-mono](https://icooon-mono.com/)    

## 謝辞
このプロジェクトの開発にあたり、以下のオープンソースソフトウェアを参考にさせていただきました。この場を借りて感謝の意を表します。

- [qjebbs/vscode-markdown-extended](https://github.com/qjebbs/vscode-markdown-extended)
