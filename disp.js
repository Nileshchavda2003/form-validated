let data = [];
function onFormSubmit() {
  const form = document.forms.myForm;
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const dob = form.dob.value;
  const time = form.time.value;
  const fcolor = form.fcolor.value;
  const payment = form.payment.value;
  const checkbox1 = form.checkbox1.checked;
  const checkbox2 = form.checkbox2.checked;
  const age = form.age.value;
  const photo = form.photo.files[0].name;

  const newData = { name, email, phone, dob, time, fcolor, payment, checkbox1, checkbox2, age, photo };
  data.push(newData);
  
  form.reset();
  
  displayData();
}
function displayData() {
  const table = document.querySelector('#emplist tbody');
  table.innerHTML = '';
  
  data.forEach((item, index) => {
    const row = table.insertRow();
    
    const nameCell = row.insertCell();
    nameCell.textContent = item.name;
    
    const emailCell = row.insertCell();
    emailCell.textContent = item.email;
    
    const phoneCell = row.insertCell();
    phoneCell.textContent = item.phone;
    
    const dobCell = row.insertCell();
    dobCell.textContent = item.dob;
    
    const timeCell = row.insertCell();
    timeCell.textContent = item.time;
    
    const colorCell = row.insertCell();
    colorCell.textContent = item.fcolor;
    
    const paymentCell = row.insertCell();
    paymentCell.textContent = item.payment;
    
    const checkboxCell = row.insertCell();
    checkboxCell.textContent = `${item.checkbox1 ? 'Option 1' : ''} ${item.checkbox2 ? 'Option 2' : ''}`;
    
    const ageCell = row.insertCell();
    ageCell.textContent = item.age;
    
    const photoCell = row.insertCell();
    photoCell.textContent = item.photo;
  });
}
window.addEventListener('load', () => {
  displayData();
});
