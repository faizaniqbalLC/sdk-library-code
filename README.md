[![sdknow1](https://i.ibb.co/kSPqvp6/myLogo.png)](#sdknow1)    

## [Documentation_Pending](pending)

**Installing sdknow1**

With NPM:

```bash
$ npm install sdknow1
```

You can install Node.js easily with [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) or [ASDF](https://blog.natterstefan.me/how-to-use-multiple-node-version-with-asdf).

Sdk-now1 is a software-development-kit for getting a single post by id,getAllPosts,and createPost in jsonplaceholder api with a built-in load balancer.

**Use case ( How you can use this package )**

```jsx
import Typicode from "sdknow1";
const client = new Typicode({
  apiKey: "123",
});

client.getPosts().then((res) => {
  // this code shall show you all jsonplaceholder posts
  console.log(res);
});
client.getPostById(1).then((res) => {
  // this function shall show you only post according to id that you passed.
  console.log(res);
});

client
  .createPost({
    title: "fizanTest",
    body: "This testing phase is going well.",
    userId: 1,
  })
  .then((p) => {
    console.log(`Created new post with id ${p.id}`);
    // this function shall createPost according to passed data
  });
```
