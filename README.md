# Day One
A GraphQL server, utilizing Koa v2, and Babel.

Spins up and grabs the most recent commits on this repository. This repo is
a really simple GraphQL execution that gives at least a little insight into how
GraphQL is set up and works. Try it out!

You can try out the GraphQL server without spinning up locally by visiting [http://day-one.mikemclaren.io/query](http://day-one.mikemclaren.io/query)

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
    author {
      login
      name
      id
      email
    }
    time
    message
  }

  authors {
    id
    name
    email
    login
    commits {
      url
      author {
        login
        name
        id
        email
      }
      time
      message
    }
  }}
```

Try taking some objects out, mix and match, give it a try! GraphiQL will tell you
when you mess up.

Optionally, you can search for just a single commit using the SHA of that commit, like this:

```
query {
  commit(sha: "88ea021fa47efe0505f0eb4ebc4708b990685ef5") {
    sha
    message
  }
}
```

Feel free to take this and play with it, maybe learn a thing or two about GraphQL along the way.
