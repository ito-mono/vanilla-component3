# Vitest のセットアップ

## ライブラリのインストール

`Jest` と互換性のあるテストフレームワーク  
`Jest` と比べて高速に動作し、 `vite` の設定ファイルと互換性があるため設定が楽  
`Jest` と同様にアサーション関数やモック関数等のテストの基礎となるメソッド群を提供します。

`npm i -D vitest`

### Testing library (必須)

マッチャーや描画テストを実行するためのメソッド群を提供します。  
`React.js` のテストの場合、これがないとテストになりません。

`npm i -D @testing-library/react @testing-library/jest-dom`

### DOM 操作ライブラリ (必須)

これが無いと `testing-library` の `render` 等するとエラーになります。  
どちらか一方を選択して入れください。

`npm i -D jsdom` 動作が安定的かつ最もメジャー  
`npm i -D happy-dom` 動作が高速 (jsdom のおよそ 10 倍)

### UI ライブラリ (任意)

`vitest` 実行時に `--ui` オプションをつけることでブラウザでテストの監視及び実行が可能となります。  
`VSCode` にある `vitest` 用の拡張機能が貧弱なため、ターミナルだと結果が見づらいという方は代わりに入れて置くと良いかもしれません。

`npm i -D @vitest/ui`

## 設定

### 設定ファイルの作成

`vite.config.ts` と同じ階層に `vitest.config.ts` を作成  
`environment` には `jsdom` か `happy-dom` のどちらかインストールした方を設定してください。

```ts:vitest.config.ts
import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: { environment: 'jsdom' か 'happy-dom', setupFiles: './vitest.setup.ts' },
  }),
);
```

### setup ファイルの作成

`vitest.config.ts` を作成した階層と同じ階層に `vitest.setup.ts` を作成  
各テストで共通で行う設定を記述します。

```ts: vitest.setup.ts
import '@testing-library/jest-dom/vitest';
```

### tsconfig.json の編集

`compilerOptions` に以下の内容を追記  
この設定をしないと `testing-library` で追加されたマッチャーが `TypeScript` で検出されません。

`"types": ["@testing-library/jest-dom"]`

## テスト用スクリプトの作成

`package.json` に以下のスクリプトを追加

`test: vitest` もしくは `test: vitest --ui`

## 実行

`npm run test`
