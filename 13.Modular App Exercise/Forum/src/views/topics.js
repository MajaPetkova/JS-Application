import { getAllTopics } from "../api/data.js";
import { spinner } from "../common/spinner.js";
import { html, until } from "../lib.js";

const topicsTemplate = (topicsPromise) => html`   <h1>Topics</h1>
<div>
  ${until (topicsPromise, spinner())}
</div>`;

const topicPreviewCard =(topic)=> html ` <article class="preview">
<header><a href=${`/topic/${topic._id}`}>${topic.title}</a></header>
<div>By ${topic.author.username}<span></span> | <span>15 Comments</span></div>
</article>`;


export function topicsPage(ctx) {
  ctx.render(topicsTemplate(loadTopics()));

}
 async function loadTopics(){
   const topics= await getAllTopics();
   return topics.map(topicPreviewCard)
 }