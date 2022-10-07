const postsEL = document.getElementById('posts');

const Data  = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    postsEL.innerHTML =`
    <div class="post1">
    <h1>Used id${data[1].userId}</h1>
    <p>id:${data[9].id}</h2>
    <p>${data[9].title}</p>
    <p>${data[9].body}</p>
    <div class="post2">
    <h1>Used id${data[5].userId}</h1>
    <p>id:${data[13].id}</h2>
    <p>${data[13].title}</p>
    <p>${data[13].body}</p>
    <div class="post3">
    <h1>Used id${data[9].userId}</h1>
    <p>id:${data[17].id}</h2>
    <p>${data[17].title}</p>
    <p>${data[17].body}</p>
    `
    console.log(data[0],  data[data.length - 1]);
};
Data();

const posts1EL = document.getElementById('posts1');

const Data1 = async () => {
    const get = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await get.json();
   
     posts1EL.innerHTML =`
     <div class="post4">
    <h1> Used id:${data[0].userId}</h1>
    <p>id:${data[8].id}</h2>
    <p>:${data[8].title}</p> 
    <p>${data[8].body}</p>
    <div class="post5">
    <h1>Used id${data[4].userId}</h1>
    <p>id:${data[12].id}</h2>
    <p>${data[12].title}</p>
    <p>${data[12].body}</p>
    <div class="post6">
    <h1>Used id${data[8].userId}</h1>
    <p>id:${data[16].id}</h2>
    <p>${data[16].title}</p>
    <p>${data[16].body}</p>
     `

    console.log(data[0], data[data.length - 1]);
}
Data1();

const posts2EL = document.getElementById('posts2');

const Data2 = async () => {
    const get = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await get.json();
   
     posts2EL.innerHTML =`
     <div class="post7">
    <h1>Used id${data[2].userId}</h1>
    <p>id:${data[10].id}</h2>
    <p>${data[10].title}</p>
    <p>${data[10].body}</p>
    <div class="post8">
    <h1>Used id${data[6].userId}</h1>
    <p>id:${data[14].id}</h2>
    <p>${data[14].title}</p>
    <p>${data[14].body}</p>
    <div class="post9">
    <h1>Used id${data[10].userId}</h1>
    <p>id:${data[18].id}</h2>
    <p>${data[18].title}</p>
    <p>${data[18].body}</p>
     `

    console.log(data[0], data[data.length - 1]);
}
Data2();

const posts3EL = document.getElementById('posts3');

const Data3 = async () => {
    const get = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await get.json();
   
     posts3EL.innerHTML =`
     <div class="post10">
    <h1>Used id${data[3].userId}</h1>
    <p>id:${data[11].id}</h2>
    <p>${data[11].title}</p>
    <p>${data[11].body}</p>
    <div class="post11">
    <h1>Used id${data[7].userId}</h1>
    <p>id:${data[15].id}</h2>
    <p>${data[15].title}</p>
    <p>${data[15].body}</p>
    <div class="post12">
    <h1>Used id${data[11].userId}</h1>
    <p>id:${data[19].id}</h2>
    <p>${data[19].title}</p>
    <p>${data[19].body}</p>
     `

    console.log(data[0], data[data.length - 1]);
}
Data3();
