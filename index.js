const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21462
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 12322
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 15137
  }
]

let avatarEl = document.getElementById("avatar-image")
let userdescriptionEl = document.getElementById("user-description")
let userPostEl = document.getElementById("user-post")
let likesEl = document.getElementById("likes")
let commentEl = document.getElementById("comment")

let avatarEl2 = document.getElementById("avatar-image2")
let userdescriptionEl2 = document.getElementById("user-description2")
let userPostEl2 = document.getElementById("user-post2")
let likesEl2 = document.getElementById("likes2")
let commentEl2 = document.getElementById("comment2")

let avatarEl3 = document.getElementById("avatar-image3")
let userdescriptionEl3 = document.getElementById("user-description3")
let userPostEl3 = document.getElementById("user-post3")
let likesEl3 = document.getElementById("likes3")
let commentEl3 = document.getElementById("comment3")


avatarEl.innerHTML = `<img src= ${posts[0].avatar} >`

userdescriptionEl.innerHTML = `<h1>${posts[0].name}</h1>
<p>${posts[0].location}</p>`

userPostEl.innerHTML = `<img src= ${posts[0].post} >`



commentEl.innerHTML = `
     <h3>${posts[0].username}</h3>
     <p>${posts[0].comment}</p>
`

avatarEl2.innerHTML = `<img src= ${posts[1].avatar} >`
userdescriptionEl2.innerHTML = `<h1>${posts[1].name}</h1>
<p>${posts[1].location}</p>`
userPostEl2.innerHTML = `<img src= ${posts[1].post} >`
likesEl2.innerHTML = `<h1>${posts[1].likes}</h1>`

commentEl2.innerHTML = `
     <h3>${posts[1].username}</h3>
     <p>${posts[1].comment}</p>
`

avatarEl3.innerHTML = `<img src= ${posts[2].avatar} >`
userdescriptionEl3.innerHTML = `<h1>${posts[2].name}</h1>
<p>${posts[2].location}</p>`
userPostEl3.innerHTML = `<img src= ${posts[2].post} >`
likesEl3.innerHTML = `<h1>${posts[2].likes}</h1>`

commentEl3.innerHTML = `
     <h3>${posts[2].username}</h3>
     <p>${posts[2].comment}</p>
`

let x = posts[0].likes
likesEl.textContent = x
heart.addEventListener("click", function(){
  likesEl.textContent = x ++
})

let y = posts[1].likes
likesEl2.textContent = y
heart2.addEventListener("click",function(){
  likesEl2.textContent = y++
})

let z = posts[2].likes
likesEl3.textContent = z
heart3.addEventListener("click",function(){
  likesEl3.textContent = z++
})
