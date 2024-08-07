// Sélectionner l'élément où les articles seront ajoutés
var postsList = document.querySelector(".PostsList");

// Créer une section pour contenir tous les articles
var postsSection = document.createElement("section");
postsSection.className = "PostsSection";

// Générer cinq articles
for (var i = 0; i < 5; i++) {
    // Créer un nouvel élément d'article
    var post = document.createElement("article");
    post.className = "Post";

    // Créer le contenu de l'article
    var postContent = document.createElement("div");
    postContent.className = "PostContent";

    var postDiv = document.createElement("div");

    var postLink = document.createElement("a");
    postLink.href = "../Pages/Table.html";

    var postTitle = document.createElement("h2");
    postTitle.className = "PostTitle";
    postTitle.textContent = "Post " + (i + 1);

    var authorLink = document.createElement("a");
    authorLink.href = "../Pages/Blog.html";

    var author = document.createElement("h3");
    author.textContent = "Black_Fox"; // Remplacez "Auteur" par le nom réel de l'auteur

    authorLink.appendChild(author);

    postLink.appendChild(postTitle);
    postDiv.appendChild(postLink);
    postDiv.appendChild(authorLink);

    var postText = document.createElement("p");
    postText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
    postDiv.appendChild(postText);

    postContent.appendChild(postDiv);

    var postImage = document.createElement("img");
    postImage.src = "../Assets/img/feed_placeholder.webp";
    postImage.alt = "Image for Post " + (i + 1);
    postContent.appendChild(postImage);

    post.appendChild(postContent);

    // Créer les commentaires de l'article
    var comments = document.createElement("section");
    comments.className = "Comments";

    var commentsTitle = document.createElement("h4");
    commentsTitle.textContent = "Comments (3)";
    comments.appendChild(commentsTitle);

    for (var j = 0; j < 3; j++) {
        var comment = document.createElement("div");
        comment.className = "Comment";

        var author = document.createElement("p");
        author.innerHTML = 'Author: <a href="Blog.html" tabindex="-1">Black-Fox</a>';
        comment.appendChild(author);

        var published = document.createElement("p");
        published.textContent = "Published: ";
        var publishedTime = document.createElement("time");
        publishedTime.dateTime = "2021-10-01";
        publishedTime.textContent = "October 1, 2021";
        published.appendChild(publishedTime);
        comment.appendChild(published);

        var commentText = document.createElement("p");
        commentText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
        comment.appendChild(commentText);

        comments.appendChild(comment);
    }

    post.appendChild(comments);

    // Ajouter l'article à la section des articles
    postsSection.appendChild(post);
}

// Ajouter la section des articles à la liste des articles
postsList.appendChild(postsSection);