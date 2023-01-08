import { getTopicById, getCommentsByTopicId, createComment } from "../api/data.js";
import { spinner } from "../common/spinner.js";
import { html, until } from "../lib.js";
import { getUserData, createSubmitHandler } from "../util.js";

const detailsTemplate = (topicPromise) => html` <div class="narrow">
  ${until(topicPromise, spinner())}
</div>`;

const topicCard = (topic, isOwner, comments, onCommentSubmit) => html`<div
    class="card"
  >
    <header class="details">
      <h2>${topic.title}</h2>
      ${isOwner
        ? html`<div class="btns">
            <a href="/edit/${topic._id}">Edit</a>
            <a href="javascript:void(0)">Delete</a>
          </div>`
        : html`<span>By ${topic.author.username}</span>`}
    </header>
    <p class="topic-content">${topic.content}</p>
  </div>
  ${commentForm(onCommentSubmit)}
  <div class="main">${comments.map(commentCard)}</div>`;

const commentCard = (comment) => html`
  <article class="preview">
    <header>By: ${comment.author.username}</header>
    <div>
      <p>${comment.content}</p>
    </div>
  </article>
`;
const commentForm = (onCommentSubmit) => html` <h3>Post Comment:</h3>
  <div class="preview">
    <form @submit=${onCommentSubmit}>
      <label
        >Content
        <textarea name="content" ></textarea>
      </label>
      <input class="action" type="submit" value="Post" />
    </form>
  </div>`;

let _topicData = null;

export function detailsPage(ctx) {
_topicData= getTopicById(ctx.params.id)
  update();
  function update(){
    ctx.render(detailsTemplate(loadTopic(ctx.params.id, onCommentSubmit)));
  }
 async function onCommentSubmit(data, ev) {

    if (data.content == "") {
      return alert("Can not post empty comment");
    }
    [...ev.target.querySelectorAll('input, textarea')].forEach(i=>i.disabled= true)

    data.topicId= ctx.params.id;
    await createComment(data);

    [...ev.target.querySelectorAll('input, textarea')].forEach(i=>i.disabled= false)
    update();
  }
}
async function loadTopic(id, onCommentSubmit) {
  const [topic, comments] = await Promise.all([
    _topicData,
    getCommentsByTopicId(id),
  ]);

  const userData = getUserData();
  const isOwner = userData && userData.id == topic._ownerId;
  return topicCard(
    topic,
    isOwner,
    comments,
    createSubmitHandler(onCommentSubmit, "content")
  );
}
