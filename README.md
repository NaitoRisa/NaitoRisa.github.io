# NaitoRisa.github.io
ポートフォリオサイトの作成

## 環境構築
### 使用するもの
- VSCode
  - プラグイン `Remote Development` さえ入れておけばOK
- Docker for Mac
  - [ここ](https://hub.docker.com/editions/community/docker-ce-desktop-mac/)からインストール

### PJの準備
- githubへの公開鍵の設定
  - pushなどを行うのに必要な設定
  - [この記事](https://qiita.com/shizuma/items/2b2f873a0034839e47ce)を元に実施
- PJのclone
  - ローカルにgithubに上がっているPJをコピーします。
  - 下記コマンドをターミナルで実行

```shell
git clone git@github.com:NaitoRisa/NaitoRisa.github.io.git
```

`NaitoRisa.github.io` という名前のディレクトリができてればOKです。

- 準備
  - VSCodeで、 `NaitoRisa.github.io` に開きます。
  - `Cmd + Shift + P` でコマンド入力画面を出す。
  - `Remote-Containers: Open Container in Container...` を選択
  - Finderが開くので、 `NaitoRisa.github.io` を選択
  - VSCodeが開き直ればオーケー

- 開発
  - VSCode上でターミナル開いて、下記コマンド

```shell
yarn start:dev
```

http://localhost:8080 でページが開けます。

※ scssの書き換えすると、自動でリロードされて変更が反映されます。htmlは未対応。。。手動リロードでいったんお願いします。

- 本番環境
  - 準備中

### ディレクトリ、ファイルの説明
基本的には3つ
- scss、html、jsは、`src` 内の各ディレクトリに追加
- ページを追加するしたときは、`webpack.common.js` ファイルを操作
- scssを追加した時は `src/main.jsを操作`

※ cssファイルは一つのstyle.cssで出力されるようになってます。もし分けたいなどのモチベーションあれば @fussy113 まで

### 注意点
-  `git commit` まではDev-Container上で可能ですが、pushはローカルのコンソールから実施いただければと思います。  

###各ページの確認方法  
'http://localhost:8080/Profile/' -> Profile/index.html
'http://localhost:8080/News/indexDetail.html' -> News/indexDetail.html
