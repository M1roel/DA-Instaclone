let posts = data;

function show() {
    document.getElementById('postcontainer').innerHTML = '';

    const staticImages = [
        '/public/img/heart.png',
        '/public/img/speech-bubble.png',
        '/public/img/paper.png',
        '/public/img/favorite.png'
    ];

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        let commentsHtml = '';
        for (let j = 0; j < post.comments.length; j++) {
            const comment = post.comments[j];
            commentsHtml += `<div class="comment"><b>${comment.poster}</b> ${comment.comment}</div>`;
        }

        let staticImagesHtml = `
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

        document.getElementById('postcontainer').innerHTML += `
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
}
