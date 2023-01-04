import { getAllTopics } from "../api/data.js";
import { html, until } from "../lib.js";

const topicsTemplate = (topicsPromise) => html`   <h1>Topics</h1>
<div>
  ${until (topicsPromise, html `<p class="spinner">Loading &hellip; </p>`)}
</div>`;

const topicPreviewCard =(topic)=> html ` <article class="preview">
<header><a href=${`/topic/${topic._id}`}>${topic.title}</a></header>
<div>Comments : 15</div>
</article>`;


export function topicsPage(ctx) {
  ctx.render(topicsTemplate(loadTopics()));

}
 async function loadTopics(){
   const topics= await getAllTopics();
   return topics.map(topicPreviewCard)
 }