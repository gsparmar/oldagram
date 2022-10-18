const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

const main = document.querySelector('main');

const cardEl = document.getElementById('card');
const titleEl = document.getElementById('title');

let heartIcon = document.getElementById('like-btn');

const render = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    main.innerHTML += `
      <div class="card" id="card">
      <div class="title-container" id="title">
        <img src="${arr[i].avatar}" alt="" />
        <p><span class="title-bold"><strong>${arr[i].name}</strong></span><br />${arr[i].location}</p>
      </div>

      <img src="${arr[i].post}" />

      <div class="icons">
        <img id="like-btn" src="images/icon-heart.png" alt="" />
        <img src="images/icon-comment.png" />
        <img src="images/icon-dm.png" alt="" />
      </div>
      <div class="likes">
        <p>${arr[i].likes} likes</p>
      </div>

      <div class="comments">
        <p><strong>${arr[i].username}</strong> ${arr[i].comment}</p>
      </div>
    </div>

      `;
  }
};

render(posts);
