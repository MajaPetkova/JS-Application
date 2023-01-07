import {getTopicById, getCommentsByTopicId } from "../api/data.js";
import { spinner } from "../common/spinner.js";
import { html, until } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (topicPromise) => html` <div class="narrow">
  ${until(topicPromise, spinner())}
</div>`;

const topicCard = (topic, isOwner, comments) => html`<div class="card"><header class="details">
    <h2>${topic.title}</h2>
    ${isOwner
      ? html`<div class= "btns"><a href="/edit/${topic._id}">Edit</a>
          <a href="javascript:void(0)">Delete</a></div>`
      : html`<span>By ${topic.author.username}</span>`}
  </header>
  <p class="topic-content">${topic.content}</p>
  </div>
  ${commentForm()}
  <div class="main">
    ${comments.map(commentCard)}
  </div>`;

const commentCard= (comment)=> html `
<article class="preview">
  <header>By: ${comment.author.username}</header>
  <div>
    <p>${comment.content}</p>
  </div>
</article>
`
const commentForm= ()=> html `
<h3>Post Comment:</h3>
<div class="preview">
  <form>
   <input type="text" name="comment-content">
  </form>
</div>`;

export function detailsPage(ctx) {
  ctx.render(detailsTemplate(loadTopic(ctx.params.id)));
}
async function loadTopic(id) {
  const [topic, comments]= await Promise.all([
   getTopicById(id),
   getCommentsByTopicId(id)
  ]);

  const userData = getUserData();
  const isOwner = userData && userData.id == topic._ownerId;
  return topicCard(topic, isOwner, comments);
}
