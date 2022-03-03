let data1 = fetch("https://ubahthebuilder.tech/posts/1").then((data) => {
  console.log(data.json);
  return data.json();
});
