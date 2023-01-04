import { getAllTopics, getTopicById } from "../api/data.js";
import { spinner } from "../common/spiner.js";
import { html, until } from "../lib.js";

const detailsTemplate= (topicPromise)=> html `
<div class="narrow">
  ${until( topicPromise, spinner())}
</div>` 

const topicCard= (topic)=>html `<header class="details"><h2>${topic.title}</h2></header>
<p class="topic-content">${topic.content}</p>`

export function detailsPage(ctx){
  ctx.render(detailsTemplate(loadTopic(ctx.params.id)))
}
async function loadTopic(id){
 const topic = await getTopicById(id);
 return topicCard(topic)
}