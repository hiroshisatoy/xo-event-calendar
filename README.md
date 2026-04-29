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

GitHub ActionsでタグPush時に自動リリースされます（例: `v3.3.1`）。

```bash
git tag v3.3.1
git push origin v3.3.1
```

ワークフローは以下を自動実行します。
- `npm ci && npm run build`
- `./scripts/build-release-zip.sh` でZIP生成
- GitHub ReleasesへZIPをassetとして公開
- GitHub Actions の `workflow_dispatch` からも version 指定で手動リリース可能
