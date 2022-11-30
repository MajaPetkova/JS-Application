const main = document.querySelector("main");
document.querySelector("nav").addEventListener("click", onNavigate);

showSection('homeSection')
function onNavigate(e) {
      if (e.target.tagName == "BUTTON") {
    switch (e.target.id) {
      case "homeBtn":
        showSection("homeSection");
        break;
      case "catalogBtn":
        showSection("catalogSection");
        break;
      case "aboutBtn":
        showSection("contactSection");
        break;
    }
  }
}

function showSection(sectionId) {
  document.querySelectorAll("section").forEach((s) => s.style.display = "none");
  document.getElementById(sectionId).style.display=''
}
