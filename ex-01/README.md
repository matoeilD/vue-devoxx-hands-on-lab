# Exercice 1

## Buts

Le but principal de cet exercice est de vous montrer comment **intégrer Vue.js dans une application existante** et d'écrire **votre premier composant**.

Vous apprendrez également à:
- Comprendre la différence entre les différents builds de Vue
- Instancier plusieurs composants
- Initialiser des composants avec des données
- Éviter les pièges liés à l'escaping de variables
- Intégration de Vue.js dans une application existante
- Utiliser les méthodes de _lifecycle_ et vous comprendrez ce qui se passe quand on appelle `new Vue({ … })`

## Exercice 1.1

- [ ] Charger Vue.js dans la page
- [ ] Insérer un composant `<reaction-button />` à la fin du premier article (n.b. vous pouvez le définir soit dans `app.twig.html` ou dans `reactions.js` – nous comparerons les deux approches)

<details>
 <summary><b>Afficher les astuces</b></summary>
- Allez faire un tour sur la documentation officielle de Vue.js pour y trouver:
  - Les liens de téléchargement et de versions hébergées sur un CDN: https://fr.vuejs.org/v2/guide/installation.html#Inclusion-directe-lt-script-gt
  - La différence entre les builds: https://fr.vuejs.org/v2/guide/installation.html#Explication-des-differents-builds
</details>

## Exercice 1.2

- [ ] Définir les composants suivants:
  - [ ] `<article-reactions />` qui prend un tableau de réactions possibles en propriété
  - [ ] `<reaction-button />` qui est instancié pour chaque composant

## Exercice 1.3

- [ ] Instancier `<article-reactions />` pour chaque Article

## Exercice 1.4

- [ ] Récupérer le nombre de reactions pour chaque article lorsque <article-reactions /> est initialisé avec la fonction `getReactions(articleId)`

## Exercice 1.5

- [ ] Envoyer la réaction lorsque l'utilisateur clique sur un bouton avec la fonction `submitReaction(articleId, reaction)`
