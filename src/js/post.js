/* Daten der einzelnen Beiträge */
let posts = data;

/* Statische Icons unter dem Post Img */
const staticImages = [
  "/public/img/heart.png",
  "/public/img/speech-bubble.png",
  "/public/img/paper.png",
  "/public/img/favorite.png",
];

/* Funktion um die statischen Icons zu rendern */
function generateStaticImagesHtml(index) {
  return `
    <div class="static-images-container">
        <div class="static-images-row">
            <img src="${staticImages[0]}" class="static-image" id="post-heart-${index}" onClick="toggleHeart(${index})">
            <img src="${staticImages[1]}" class="static-image">
            <img src="${staticImages[2]}" class="static-image">
        </div>
        <div class="static-images-row">
            <img src="${staticImages[3]}" class="static-image">
        </div>
    </div>
  `;
}

/* Funktion um beim Klick auf das Herz das Image zu ändern */
function toggleHeart(index) {
  const postHeart = document.getElementById(`post-heart-${index}`);
  if (postHeart.src.includes("heart.png")) {
    postHeart.src = "/public/img/heart-red.png";
    countUp(index);
  } else {
    postHeart.src = "/public/img/heart.png";
    countDown(index);
  }
}

/* Funktion um die Likes zu erhöhen */
function countUp(index) {
  let likesElement = document.getElementById(`likes-${index}`);
  let currentLikes = parseInt(likesElement.textContent.match(/\d+/)[0], 10);
  likesElement.textContent = `Gefällt ${posts[index].wholike} und ${
    currentLikes + 1
  } weiteren Personen`;
  posts[index].likes = currentLikes + 1;
}

/* Funktion um die Likes zu verringern */
function countDown(index) {
  let likesElement = document.getElementById(`likes-${index}`);
  let currentLikes = parseInt(likesElement.textContent.match(/\d+/)[0], 10);
  likesElement.textContent = `Gefällt ${posts[index].wholike} und ${
    currentLikes - 1
  } weiteren Personen`;
  posts[index].likes = currentLikes - 1;
}

/* Funktion um die Kommentare für die Posts zu rendern */
function generateCommentsHtml(comments) {
  let commentsHtml = "";
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    commentsHtml += `<div class="comment"><b>${comment.poster}</b> ${comment.comment}</div>`;
  }
  return commentsHtml;
}

/* Funktion zum Posten eines neuen Kommentars */
function postComment(index) {
  const commentInput = document.getElementById(`comment-input-${index}`);
  const newComment = commentInput.value;
  if (newComment) {
    posts[index].comments.push({ poster: "peter", comment: newComment });
    commentInput.value = "";
    show();
  }
}

/* Funktion um die einzelnen Post-Container zu rendern */
function generatePostContainer(post, commentsHtml, staticImagesHtml, index) {
  return `
    <div class="post">
        <div class="authorinfo">
            <img src="${post.authorimg}" id="authorimg">
            <div>${post.author}</div>
        </div>
        <img src="${post.image}">
        ${staticImagesHtml}
        <div class="likes" id="likes-${index}">Gefällt ${post.wholike} und ${post.likes} weiteren Personen</div>
        <div class="authorcomment"><b>${post.author}</b> ${post.description}</div>
        <div class="comments">${commentsHtml}</div>
        <div class="writepost">
          <input type="text" id="comment-input-${index}" placeholder="Kommentieren..." />
          <button onclick="postComment(${index})">Posten</button>
        </div>
    </div>
  `;
}

/* Funktion um den gesamten Post-Container zu rendern */
function show() {
  document.getElementById("postcontainer").innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    let commentsHtml = generateCommentsHtml(post.comments);
    let staticImagesHtml = generateStaticImagesHtml(i);

    document.getElementById("postcontainer").innerHTML += generatePostContainer(
      post,
      commentsHtml,
      staticImagesHtml,
      i
    );
  }
}