#!/usr/bin/env bash
set -euo pipefail

VERSION="${1:-$(php -r "preg_match('/Version:\s+([0-9.]+)/', file_get_contents('xo-event-calendar.php'), $m); echo $m[1];")}"
ZIP_NAME="xo-event-calendar-${VERSION}.zip"
TMP_DIR="$(mktemp -d)"
trap "rm -rf "$TMP_DIR"" EXIT

mkdir -p dist
rsync -a --delete \
  --exclude ".git" \
  --exclude "dist" \
  --exclude "node_modules" \
  --exclude "*.zip" \
  ./ "$TMP_DIR/xo-event-calendar/"

( cd "$TMP_DIR" && zip -qr "$OLDPWD/dist/$ZIP_NAME" xo-event-calendar )
echo "Created dist/$ZIP_NAME"
