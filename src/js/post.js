let posts = data;

function show() {
    document.getElementById('postcontainer').innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        let commentsHtml = '';
        for (let j = 0; j < post.comments.length; j++) {
            const comment = post.comments[j];
            commentsHtml += `<div class="comment"><b>${comment.poster}</b> ${comment.comment}</div>`;
        }

        document.getElementById('postcontainer').innerHTML += `
        <div class="post">
            <div class="authorinfo">
                <img src="${post.authorimg}" id="authorimg">
                <div>${post.author}</div>
            </div>
            <img src="${post.image}">
            <div class="likes">Gefällt ${post.wholike} und ${post.likes} weiteren Personen</div>
            <div class="authorcomment"><b>${post.author}</b> ${post.description}</div>
            <div class="comments">${commentsHtml}</div>
            <div class="date">${post.date}</div>
        </div>
        `;        
    }
}
