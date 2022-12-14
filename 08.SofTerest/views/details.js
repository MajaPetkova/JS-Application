import { deleteIdeaById, getById } from "../src/api/data.js";
import { element } from "./dom.js";

const section = document.getElementById("detailsPage");
section.remove();

export function showDetailsPage(ctxTarget, id) {
  // console.log(id);
  ctx= ctxTarget;
  ctx.showView(section);
  loadIdea(id)
}
let ctx= null;

async function loadIdea(id) {
  const idea = await getById(id);
  section.replaceChildren(createDiv(idea))
}



function createDiv(idea) {
  const fragment = document.createDocumentFragment();
  fragment.appendChild(element("img", { className: "det-img", src: idea.img }));
  fragment.appendChild(
    element("div", { className: "desc" },
    element("h2", { className: "display-5" }, idea.title),
    element("p", { className: "infoType" }, "Description:"),
    element("p", { className: "idea-description" }, idea.description)
  ));

  const userData= JSON.parse(sessionStorage.getItem('userData'));
  if(userData && userData.id ==idea._ownerId ){

    fragment.appendChild(
      element(
        "div",
        { className: "text-center" },
        element("a", { className: "btn detb", href: "", onClick: onDelete }, "Delete")
      )
    );
  }

  return fragment;

  async function onDelete(ev){
    ev.preventDefault();

    const confirmed= confirm('Are you sure you want to delete this idea?');

    if(confirmed){
      await deleteIdeaById(idea._id);
      ctx.goTo('catalog')
    }
  }
}
