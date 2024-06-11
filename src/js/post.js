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
function generateStaticImagesHtml() {
  return `
    <div class="static-images-container">
        <div class="static-images-row">
            <img src="${staticImages[0]}" class="static-image">
            <img src="${staticImages[1]}" class="static-image">
            <img src="${staticImages[2]}" class="static-image">
        </div>
        <div class="static-images-row">
            <img src="${staticImages[3]}" class="static-image">
        </div>
    </div>
  `;
}

/* Funktion um die Kommentare für die Posts zu rendern */
function generateCommentsHtml(comments) {
  let commentsHtml = '';
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    commentsHtml += `<div class="comment"><b>${comment.poster}</b> ${comment.comment}</div>`;
  }
  return commentsHtml;
}

/* Funktion um die einzelnen Post-Container zu rendern */
function generatePostContainer(post, commentsHtml, staticImagesHtml) {
  return `
    <div class="post">
        <div class="authorinfo">
            <img src="${post.authorimg}" id="authorimg">
            <div>${post.author}</div>
        </div>
        <img src="${post.image}">
        ${staticImagesHtml}
        <div class="likes">Gefällt ${post.wholike} und ${post.likes} weiteren Personen</div>
        <div class="authorcomment"><b>${post.author}</b> ${post.description}</div>
        <div class="comments">${commentsHtml}</div>
        <div class="date">${post.date}</div>
    </div>
  `;
}

/* Funktion um den gesamten Post-Container zu rendern */
function show() {
  document.getElementById("postcontainer").innerHTML = '';

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    let commentsHtml = generateCommentsHtml(post.comments);
    let staticImagesHtml = generateStaticImagesHtml();
    
    document.getElementById("postcontainer").innerHTML += generatePostContainer(post, commentsHtml, staticImagesHtml);
  }
}