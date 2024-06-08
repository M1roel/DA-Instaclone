let posts = data;

function show() {
    document.getElementById('postcontainer').innerHTML += '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('postcontainer').innerHTML += `
        <div>
            <img src="${post['image']}">
            <div>${post['author']}</div>
            <div>${post['description']}</div>
        </div>
        `;        
    }
}