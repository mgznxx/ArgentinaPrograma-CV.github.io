const userNameField = document.querySelector("[name=nombre]");
const userLastField = document.querySelector("[name=apellido]");
const emailField = document.querySelector("[name=email]");
const mensajeField = document.querySelector("[name=mensaje]");

const setErrors = (message, field, isError = true) => {
  if (isError) {
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = message;
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
  }
}

const validateEmptyField = (message, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue.trim().length === 0) {
    setErrors(message, field);
  } else {
    setErrors("", field, false);
  }
}
const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
      setErrors("* Por favor coloque un email valido", field);
    } else {
      setErrors("", field, false);
    }
  }
  
  userNameField.addEventListener("blur", (e) => validateEmptyField("* Debe colocar su nombre", e));
  userLastField.addEventListener("blur", (e) => validateEmptyField("* Debe colocar su apellido", e));
  emailField.addEventListener("blur", (e) => validateEmptyField("* Debe colocar su email", e));
  mensajeField.addEventListener("blur", (e) => validateEmptyField("* Debe colocar un mensaje", e));
  
  emailField.addEventListener("input", validateEmailFormat);
  
