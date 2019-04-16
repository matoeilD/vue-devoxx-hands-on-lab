# ex-03 Vue CLI

## Step 1

Install vue CLI, this needs to be done globally in order to be able to invoke the `vue` command from anywhere.

```
    npm install -g @vue/cli
        # OR
    yarn global add @vue/cli
```

Check that everything works as expected by invoking the `vue` command. A help screen should be displayed.

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

## Step 2

Let's prototype a vue component. First we create a `.vue` file, then we serve it, and finally we can prototype a component with no overhead.

1. `$ touch step2.vue`
2. `$ vue serve step2.vue`
3. Probably a dependency will be missing, install it: `$ npm install -g @vue/cli-service-global`

We can now prototype:

1. Add a `<template>` tag
2. Add a script, and play with hot reloading that comes out of the box
3. We can even style our component.

Styling can be done in pure CSS or using a preprocessor. The `<style>` tag can take an attribute `lang="saas"`

## Step 3

Vue CLI can help you create a full project.

```
    $ vue create step3
```

The wizard will guide us through configuration steps, to have a starter project with everything we need configured out of the box.

Let's see our scaffolded project:

1. `$ cd step3`
2. `$ npm run serve`

We can save our configuration and reuse it for another project.

This configured project can be modified and we can, for example, add a plugin:

```
    $ vue add vuetify
```

What has happened?

- The plugin has been installed
- A wizard proposed a few options
- The scaffolded project has been modified.

Notice that the whole project configuration was taken into consideration and updated.

## Step 4

Sometimes it might be easier, or for teams that are more used to visual environnement, Vue.js CLI offers a GUI.

It can be explored by just launching it from the console: `$ vue ui`.

With it you can:

- edit configuration
- edit PWA features
- launch commands (build, serve, lint, etc.)
- add/update plugins
- etc.
