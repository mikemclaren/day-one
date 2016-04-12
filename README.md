# Day One
A GraphQL server, utilizing Koa v2, and Babel!

Spins up and grabs the most recent commits on this repository. Try it out!

## Spinning Up
You'll need to be running Node 4.0+!

```
  npm install
  npm start
```

Now journey to [http://127.0.0.1:3100/query](http://127.0.0.1:3100/query) and try
out some GraphQL queries! Here's the whole of the GraphQL query object currently available below,
so try this out in GraphiQL:

```
query {
  commits {
    url
    author
    time
    message
  }
}
```

Feel free to take this and play with it, maybe learn a thing or two about GraphQL along the way.
