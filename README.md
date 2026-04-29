# XO Event Calendar

Simple event calendar plugin for WordPress.

## フォークについて

このプラグインは、[Xakuro](https://xakuro.com/) によって開発された [XO Event Calendar](https://xakuro.com/wordpress/xo-event-calendar/) のフォークです。

開発元の開発が終了したため、[sato-jp](https://github.com/sato-jp) がメンテナンスを継続しています。

## オリジナルプラグイン

- **Original Plugin**: [XO Event Calendar](https://xakuro.com/wordpress/xo-event-calendar/)
- **Original Author**: [Xakuro](https://xakuro.com/)
- **Original Author URI**: https://xakuro.com/

## ライセンス

GPL v2 or later

## インストール

1. このリポジトリをクローンまたはダウンロードします
2. `xo-event-calendar` フォルダを `/wp-content/plugins/` ディレクトリにアップロードします
3. WordPressのプラグインメニューからプラグインを有効化します

## 開発

```bash
# 依存関係のインストール
npm install

# ビルド
npm run build

# 開発モード（ウォッチモード）
npm start
```

## コントリビューション

プルリクエストやイシューの報告を歓迎します。

## Release

GitHub Actions でタグをプッシュすると、`@wordpress/scripts` の `plugin-zip` で作成した `xo-event-calendar.zip` を GitHub Release のアセットとして公開します（例: `v3.3.2`）。

```bash
git tag v3.3.2
git push origin v3.3.2
```

ローカルで ZIP を作る場合は `npm run build` のあと `npm run plugin-zip` を実行してください。
