# Notes – Lab 2 CI

## Objectif
L’objectif de ce TP est de mettre en place un script d’intégration continue permettant
d’automatiser l’installation des dépendances, la vérification du typage, l’analyse
statique du code, le build du projet et l’exécution des tests.

## Choix techniques
Le script a été écrit en Bash afin d’être compatible avec macOS et Linux et facilement
exécutable dans un contexte CI.

## Étapes du script

### 1. Dépendances
Les dépendances sont installées avec pnpm. Le dossier node_modules est supprimé puis
réinstallé afin de vérifier l’utilisation du cache pnpm et réduire le temps
d’installation.

### 2. Vérification du typage
Le typage statique est vérifié avec vue-tsc via la commande :
pnpm vue-tsc --noEmit.
Une erreur volontaire sur une prop permet de vérifier la détection par l’IDE et la CLI.

### 3. Analyse statique
ESLint est utilisé pour analyser statiquement les fichiers TypeScript et Vue.
Toute erreur de lint fait échouer le script.

### 4. Build
Le projet est buildé avec Vite dans le dossier publish grâce à :
pnpm vite build --outDir publish.
Ce dossier est ignoré par git.

### 5. Tests
Les tests unitaires sont exécutés avec Vitest.
Un test a été ajouté pour vérifier le style d’une tuile du jeu 2048.

### 6. Analyse des dépendances
Les dépendances obsolètes et vulnérables sont détectées avec pnpm outdated et pnpm audit.
Les résultats sont enregistrés au format JSON dans le dossier reports.

## Notions apprises
- Intégration continue
- pnpm et gestion du cache
- Type checking Vue / TypeScript
- Analyse statique avec ESLint
- Tests unitaires avec Vitest
- Build avec Vite
- Sécurité des dépendances
