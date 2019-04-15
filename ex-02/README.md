# ex-02 Vue Router

## Step 1

Integrate routing in a simple `html` page. Configure routes, initialize the router and add a simple navigation. This can be achieved in a few lines of code.

## Step 2

Explore routers functionalities, for example it is possible to have more than one router outlet.

## Step 3

With Vue router it is easy to add transitions, basically a few lines of CSS are needed and the router outlet needs to wrapped in the default `<transition>` component.

## Step 4

Routes can be nested, and therefore many outlets can be nested too.

```js
// /route-a/route-b
// /route-a/route-c

const routes = [
  {
    path: "/route-a/",
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

`ComponentA` has a router outlet which will render `ComponentB` or `ComponentC`, in turn, the rendered component will render its router outlet.

## Final Step

The router has an API that can be accessed programmatically.

Let's implement a next tab method.
