#!/bin/bash

# 1. Installation des dépendances
pnpm install
rm -rf node_modules
pnpm install

# 2. Type checking
pnpm nuxt typecheck

# 3. Analyse statique 
pnpm eslint . --ext .ts,.vue # or use pnpm eslint .

# 4. Build
pnpm build 
#pnpm preview

# 5. Tests
pnpm vitest run # or use pnpm test



