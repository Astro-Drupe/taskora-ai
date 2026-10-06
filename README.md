# Taskora AI

Site vitrine statique en français pour l’assistant de réponse aux avis Google. La présentation reprend les informations et les grandes lignes visuelles du site Wix Taskora AI : palette claire et bleue, cartes arrondies, brouillon de réponse, avantages, fonctionnement et secteurs.

## Avant publication

Le bouton de démonstration mène à la section contact de cette page. Le formulaire prépare un e-mail adressé à `antoine.cadet.pro@gmail.com` avec les champs nom, e-mail professionnel, entreprise et message. Le visiteur doit ensuite envoyer le message depuis son application e-mail. Cela dépend de la présence d’une application ou d’un service e-mail configuré sur son appareil.

Relis les descriptions pour qu’elles correspondent exactement aux fonctionnalités réellement proposées par Taskora AI.

## Publier avec GitHub Pages

1. Connecte-toi à GitHub et crée un dépôt public nommé `taskora-ai`.
2. Ajoute les fichiers `index.html`, `style.css`, `script.js`, `favicon.svg` et `README.md` à la racine du dépôt (pas dans un sous-dossier).
3. Dans le dépôt, ouvre **Settings → Pages**.
4. Sous **Build and deployment**, choisis **Deploy from a branch**, puis `main` et `/ (root)`, et enregistre.
5. Attends la fin du déploiement. GitHub indiquera l’adresse temporaire du site dans cette page.

## Utiliser ton domaine

Choisis d’abord un domaine principal, par exemple `taskora-ai.com`. Dans **Settings → Pages → Custom domain**, saisis le domaine et enregistre. Ensuite, dans le panneau DNS du fournisseur chez qui tu as acheté le domaine, suis les valeurs que GitHub Pages affiche pour ce dépôt : un domaine racine et un sous-domaine `www` ont des enregistrements différents. Une fois le DNS propagé, active **Enforce HTTPS** dans Pages.

Tu peux utiliser un seul domaine principal pour le site. Configure les autres domaines comme redirections chez leur fournisseur DNS/registrar vers le domaine principal. Vérifie l’extension du domaine saisi comme `taskora-ai.oline` avant de le configurer : tu voulais peut-être dire `.online`.

## Adresse GitHub temporaire

Si le dépôt s’appelle `taskora-ai`, l’adresse Pages sera généralement `https://TON-PSEUDO.github.io/taskora-ai/`. Avec un domaine personnalisé, elle sera remplacée par le domaine que tu auras choisi.
