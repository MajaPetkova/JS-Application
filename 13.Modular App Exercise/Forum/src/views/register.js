import { register } from "../api/data.js";
import { input } from "../common/input.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const registerTemplate = (onSubmit, errorMsg, errors, values) => html`  <div class="narrow">
<header> <h2>Register</h2></header>
<form @submit=${onSubmit}>
${errorMsg ? html`<p class="err-msg">${errorMsg}</p>` : null}
${input("Email", "text", "email", values.email, errors.email)}
${input("Display Name", "text", "username", values.username, errors.username)}
${input("Password", "text", "password", values.password, errors.password)}
${input("Repeat Pass", "text", "repass", values.repass, errors.repass)}
    <!-- <label><span>Email:</span>  <input type="text" name="email" .value=${values.email}></label>
    <label><span>Display Name:</span>  <input type="text" name="username" .value=${values.username}></label>
    <label><span> Password:</span> <input type="text" name="password" .value=${values.password}></label>
    <label><span> Repeat Pass:</span> <input type="text" name="repass" .value=${values.repass}></label> -->
    <div class="center">
        <input type="submit" class="action" value="Sign Up">
    </div>
</form>
</div>`;

export function registerPage(ctx) {
 update();
  function update(errorMsg, errors ={},values={}){
    ctx.render(registerTemplate(createSubmitHandler(onSubmit, "email", "username", "password", "repass"), errorMsg, errors, values));
  }

  async function onSubmit(data, ev){
    try{
      const missing= Object.entries(data).filter(([k,v])=> v== "" )
   if(missing.length > 0){
      const errors= missing.reduce((a, [k])=>Object.assign(a, {[k]:true}) ,{})
      throw {
        error : new Error("All fields are required!"),
        errors
      }
   }
   if(data.password != data.repass){
    throw {
      error : new Error("Passwords don\'t match"),
      errors : {
        password: true,
        repass: true
      }
    }
    
  }
  await register(data.email, data.username, data.password);
  ev.target.reset();
  ctx.updateUserNav();
  ctx.page.redirect('/topics')
    }catch(err){
       const message= err.message || err.error.message;
       update(message, err.errors, data)
    }
  }
}
