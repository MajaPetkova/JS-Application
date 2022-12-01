const main= document.querySelector('main')
export function showSection(section) {
main.replaceChildren(section)
    // document.querySelectorAll("section").forEach((s) => s.style.display = "none");
    // document.getElementById(sectionId).style.display=''

  }
  export function element(type, attributes, ...content){
    const result= document.createElement(type);

    for(let [attr, value] of Object.entries(attributes || {})){
        if(attr.substring(0, 2)== 'on'){
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value)
        }else{
            result[attr]=value
        }
    }
    content=content.reduce((a,c)=> a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(element => {
        if(typeof element=='string' || typeof element =='number'){
            const node=document.createTextNode(element)
            result.appendChild(node);
        }else{
            result.appendChild(element)
        }
    });
    return result
  }