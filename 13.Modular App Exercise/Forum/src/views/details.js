import {getTopicById, getCommentsByTopicId } from "../api/data.js";
import { spinner } from "../common/spinner.js";
import { html, until } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (topicPromise) => html` <div class="narrow">
  ${until(topicPromise, spinner())}
</div>`;

const topicCard = (topic, isOwner) => html`<header class="details">
    <h2>${topic.title}</h2>
    ${isOwner
      ? html`<div class= "btns"><a href="/edit/${topic._id}">Edit</a>
          <a href="javascript:void(0)">Delete</a></div>`
      : html`<span>By ${topic.author.username}</span>`}
  </header>
  <p class="topic-content">${topic.content}</p>`;

export function detailsPage(ctx) {
  ctx.render(detailsTemplate(loadTopic(ctx.params.id)));
}
async function loadTopic(id) {
  const topic = await getTopicById(id);

  const userData = getUserData();
  const isOwner = userData && userData.id == topic._ownerId;
  return topicCard(topic, isOwner);
}
