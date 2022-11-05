window.addEventListener("load", async () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", onRegister);
});

async function onRegister(ev) {
    const url = `http://localhost:3030/users/register`;
  ev.preventDefault();

  const form = ev.target;
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  const rePass = formData.get("rePass");
//   const user = {
//     email,
//     pass,
//     rePass,
//   };
// console.log(data)
  try {
    const res = await fetch(url, {
        method: 'post',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({email,
            password,
            rePass,})
    });
    if(res.ok != true){
        const error= await res.json();
        throw new Error(error.message);
    }
    const data = await res.json();
    const token = data.accessToken;
    localStorage.setItem("token", token);

    window.location='./index.html'
  } catch (err) {
    alert(err.message);
  }
}
