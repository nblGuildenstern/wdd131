const form = document.querySelector("#fsyForm");
const userType = document.querySelector("#userType");
const iNumContainer = document.querySelector("#iNumContainer");
const codeContainer = document.querySelector("#codeContainer");
const iNum = document.querySelector("#iNum");
const code = document.querySelector("#code");
const output = document.querySelector("#output");

function updateNotesField() {
  const value = userType.value;

  if(value === 'student') {
    codeContainer.hidden = true;
    code.required = false;

    iNumContainer.hidden = false;
    iNum.required = true;
  } else if (value === 'guest') {
    iNumContainer.hidden = true;
    iNum.required = false;

    codeContainer.hidden = false;
    code.required = true;
  } else {
    iNumContainer.hidden = true;
    iNum.required = false;
    codeContainer.hidden = true;
    code.required = false;
  }  
}

userType.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.userType.value;
  const eventDate = form.eventDate.value;
  const iNum = form.iNum.value.trim();
  const code = form.code.value.trim();

  // Validate the input
  
  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date";
    return;
  }

  if (type === 'student' && !iNum) {
    output.textContent = "Please add your student i.";
    return;
  }

  if (type === 'student' && iNum.length !== 9) {
    output.textContent = "Student i# must be 9 digits";
    return;
  }

  if (type === 'guest' && !code) {
    output.textContent = "Please add the access cod.";
    return;
  }

  if (type === 'guest' && code !== 'EVENT131') {
    output.textContent = "Incorrect access code";
    return;
  }


  output.innerHTML = `
  <h2>Ticket Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateNotesField();
});
          