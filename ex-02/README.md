# Exercice 2 - Vue Router

## Buts

Cet exercice à pour but d'intégrer le routeur Vue.js dans une page html. Pour ensuite explorer des fonctionnalités comme l'utilisation de plusieurs routeur "outlets", l'utilisation de paramètres dans les routes et les routes imbriquées (nested routes).

Vous comprendrez également comment:

- afficher un composant pour une route donnée
- réutiliser des composants
- utiliser une librairie de composant externe

## Etape 1

- [ ] Charger le router Vue dans la page et son initialisation
- [ ] Utilisation de `<router-link />` pour la navigation
- [ ] Utilisation de `<router-view />`
- [ ] Passer des paramètres à une vue

<details>
 <summary><b>Afficher les astuces</b></summary>
 
Allez faire un tour sur la <a href="https://router.vuejs.org/fr/" target="_blank">documentation officielle du router Vue.js</a>
  
</details>

## Etape 2

- [ ] ajouts de plusieurs sortie (outlets) de routeur
- [ ] nommage des vues

Le routeur permet d'afficher plusieurs vues pour la même route ce qui peut être très pratique pour créer un sous menu par exemple.

## Etape 3

- [ ] ajout de transition avec le composant `<transition />`

<details>
 <summary><b>Afficher les astuces</b></summary>
 
Allez faire un tour sur la <a href="https://router.vuejs.org/fr/guide/advanced/transitions.html#transition-par-route" target="_blank">documentation officielle du router Vue.js et des transitions</a>

Ne pas oublier la CSS!

</details>

## Etape 4

Les routes peuvent être imbriquée, du coup plusieurs vues peuvent aussi l'être.

- [ ] ajout de routes enfants

```js
// /route-a/route-b
// /route-a/route-c

const routes = [
  {
    path: "/route-a",
    component: ComponentA,
    children: [
      {
        path: "route-b",
        component: ComponentB
      },
      {
        path: "route-c",
        component: ComponentC
      }
    ]
  }
];
```

Le `ComponentA` a une vue qui va afficher le `ComponentB` ou `ComponentC`, à son tour, le composant sélectionné va afficher sa vue.

## Etape finale

Le routeur Vue peut aussi être utilisé de manière programmatique.

- [ ] Implémenation d'une méthode "next tab"
- [ ] Implémentation d'une méthode "go back"

<details>
 <summary><b>Afficher les astuces</b></summary>
 
Allez faire un tour sur la <a href="https://router.vuejs.org/fr/guide/essentials/navigation.html" target="_blank">documentation officielle du router Vue.js et la navigation programmatique</a>

Ne pas oublier la CSS!

</details>
