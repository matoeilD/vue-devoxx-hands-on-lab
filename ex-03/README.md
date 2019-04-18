# Exercice 3 - Vue CLI

Cet exercice à pour but de faire découvrir la CLI de Vue. C'est un outil qui permet de simplifier beaucoup la configuration d'un projet.

Vous apprendrez également à:

- prototyper un composant
- générer un projet
- ajouter un plugin
- utiliser l'UI qui accompagne cet CLI.

## Etape 1

- [ ] installation de la CLI

Cette installation doit se faire de manière globale pour que la commande `vue` puisse être invoquée de partout.

```
    npm install -g @vue/cli
        # OR
    yarn global add @vue/cli
```

Contrôlez que tout se s'est bien passé en invoquant la commande `vue`. Un écran d'aide devrait s'afficher.

```
Options:
  -V, --version                              output the version number
  -h, --help                                 output usage information

Commands:
  create [options] <app-name>                create a new project powered by vue-cli-service
  add [options] <plugin> [pluginOptions]     install a plugin and invoke its generator in an already created project
  invoke [options] <plugin> [pluginOptions]  invoke the generator of a plugin in an already created project
  inspect [options] [paths...]               inspect the webpack config in a project with vue-cli-service
  serve [options] [entry]                    serve a .js or .vue file in development mode with zero config
  build [options] [entry]                    build a .js or .vue file in production mode with zero config
  ui [options]                               start and open the vue-cli ui
  init [options] <template> <app-name>       generate a project from a remote template (legacy API, requires @vue/cli-init)
  config [options] [value]                   inspect and modify the config
  upgrade [semverLevel]                      upgrade vue cli service / plugins (default semverLevel: minor)
  info                                       print debugging information about your environment

  Run vue <command> --help for detailed usage of given command.

```

## Etape 2

- [ ] créer un fichier `.vue` (easy :))
- [ ] prototypage d'un composant vue
- [ ] servir un fichier

1. `$ touch step2.vue`
2. `$ vue serve step2.vue`
3. Une dépendance va sûrement manquer: `$ npm install -g @vue/cli-service-global`

Nous pouvons maintenant prototyper.

- [ ] Ajout d'une balise `<template>`
- [ ] Ajout d'une balise script. Jouons avec le "hot reloading"
- [ ] Ajout de style

On peut ajouter du style avec de la CSS ou un préprocesseur. La balise `<style>` peut prendre un attribut `lang="saas"`

Si nous choisissons d'utiliser un loader, il faudra l'installer:

```
# Sass
npm install -D sass-loader sass

# Less
npm install -D less-loader less

# Stylus
npm install -D stylus-loader stylus

```

## Etape 3

- [ ] Créer un projet complet

```
    $ vue create step3
```

L'assistant va nous guider à travers quelques étape pour que nous puissions configurer le projet selon nos goûts.

Regardons notre projet:

1. `$ cd step3`
2. `$ npm run serve`

Si besoin est ou pour une équipe qui fait beaucoup de projet. La configuration choisie peut être sauvegardée pour être réutilisée plus tard.

Nous pouvons aussi très simplement installer et configurer un projet.

```
    $ vue add vuetify
```

Que s'est-il passé?

- Le plugin a été installé
- Des options nous ont été proposée
- Le projet que nous avions créé a été modifié.

Remarquez que la configuration de notre projet a été prise en compte et updatée.

## Etape 4

Il est certaines fois plus facile pour certaines équipe d'utiliser un environement visuel, c'est aussi pour cela que Vue CLI offre une GUI.

Elle peut-être démarrée de la manière suivante: `$ vue ui`.

La GUI permet:

- d'éditer la configuration
- d'éditer le manifeste de la PWA.
- d'utiliser des commandes (build, serve, lint, etc.)
- d'ajouter ou de mettre à jour des plugins
- etc.
