const postArea = document.querySelector(".post-area-list");

let postList = "";

posts.reverse().map((item) => {
  postList += `
  <div class="post-header">
  <div class="author">
    <div class="author-profile-img">
      <img src="${item.author.ima}" alt="" />
    </div>
    <div class="post-author-name">
      <a href="#">${item.author.name}</a>
      <span><i class="fas fa-circle"></i> 1w</span>
      <a href="#"></a>
      <p>${item.text}</p>
    </div>
  </div>
  <div class="three-dot">
    <a href="#"><i class="fas fa-ellipsis-h"></i></a>
  </div>
</div>

<div class="post-body">
  <div class="post-img">
    <img src="${item.image}" alt="" />
  </div>
  <div class="post-reaction">
    <div class="p-reaction-left">
      <div class="post-like post-icon">
        <span><i class="far fa-heart"></i></span>
      </div>
      <div class="post-comment post-icon">
        <span><i class="far fa-comment"></i></span>
      </div>
      <div class="post-share post-icon">
        <span><i class="far fa-paper-plane"></i></span>
      </div>
    </div>
    <div class="post-save post-icon">
      <span><i class="far fa-bookmark"></i></span>
    </div>
  </div>
  <div class="post-like-total">
    <p>${item.react}</p>
  </div>
  <div class="post-content">
    <p>
      <a href="#">${item.author.name}</a>${item.author.content}
      <a href="#" class="post-tag">@taylorehill / @gettyimages</a>
    </p>
  </div>
  <div class="write-comment">
    <p>${item.comment}</p>
    <form action="#">
      <input
        type="text"
        name=""
        id=""
        placeholder="Add a comment…"
      />
    </form>
    <span><i class="far fa-smile"></i></span>
  </div>
</div>
    `;
});

postArea.innerHTML = postList;
