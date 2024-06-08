let posts = data;

function show() {
    document.getElementById('postcontainer').innerHTML += '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('postcontainer').innerHTML += `
        <div>
            <div class="authorinfo">
            <img src="${post['authorimg']}" id="authorimg">
            <div>${post['author']}</div>
            </div>
            <img src="${post['image']}">
            <div>${post['description']}</div>
        </div>
        `;        
    }
}