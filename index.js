const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const likes = document.getElementById("likes")

function render() {
    const body = document.getElementById("body")
    for (let i = 0; i < posts.length; i++) {
        body.innerHTML += `
        <div class="container">
            <header>
                <img class="logo" src="images/logo.png">
                <img id="user-avatar" class="user-avatar" src="images/user-avatar.png">
            </header>

            <section class="main">
                <div class="post-heading">
                    <img class="poster-avatar" src="${posts[i].avatar}">
                    <div class="img-info">
                        <p id="poster-name" class="poster-name">${posts[i].name}</p>
                        <p id="location" class="post-location">${posts[i].location}</p>
                    </div>
                </div>
                <img class="main-img" src="${posts[i].post}">
            </section>

            <section class="bottom">
                <div class="icons">
                    <img class="icon-img" src="images/heart.svg">
                    <img class="icon-img" src="images/message-circle.svg">
                    <img class="icon-img" src="images/send.svg">
                </div>
                <p id="likes" class="likes">${posts[i].likes} likes</p>
                <p class="comments"><span id="username" class="username">${posts[i].username}</span>${posts[i].comment}</p>
            </section>
	    </div>`
    }
}

render()