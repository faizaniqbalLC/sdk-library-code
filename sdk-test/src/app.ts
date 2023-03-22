import Typicode from "sdknow";
const client = new Typicode({
  apiKey: "123",
});

// client.getPosts().then((res) => {
//   console.log(res);
// });
client.getPostById(1).then((res) => {
  console.log(res );
});
