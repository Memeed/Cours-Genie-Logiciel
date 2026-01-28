#!/bin/bash

set -e

echo "===== CI PIPELINE LAB 2 ====="

# 1. Dépendances
pnpm install
rm -rf node_modules
pnpm install

# 2. Type checking
pnpm vue-tsc --noEmit

# 3. Analyse statique
pnpm eslint . --ext .ts,.vue

# 4. Build
pnpm vite build --outDir publish

# 5. Tests
pnpm vitest run

# 6. Dépendances (bonus)
mkdir -p reports
pnpm outdated --json > reports/outdated-dependencies.json
pnpm audit --json > reports/vulnerable-dependencies.json

echo "✅ Pipeline terminé avec succès"
exit 0