function validateForm(){
    var formData =readFormData();
}
function readFormData(){
    var formData =readFormData();

    const name = formData.get('name');
    const email = formData.get('email-input');
    const phone = formData.get('phone-input');
    const dob = formData.get('dob');
    const time = formData.get('time-input');
    const color = formData.get('fcolor');
    const paymentMethod = formData.get('payment');
    const option1 = formData.get('checkbox-1');
    const option2 = formData.get('checkbox-2');
    const age = formData.get('age');
    const photo = formData.get('photo');
}
function insertNewRecord(data){
    var table= document.getElementById("emplist").getElementByTagName('tbody')[0]; 
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML =data.name;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML =data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML =data.phone;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML =data.dob;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML =data.time;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML =data.color;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML =data.paymentMethod;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML =data.option1;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML =data.option2;
    
    cell10 = newRow.insertCell(9);
    cell10.innerHTML =data.age;
    
    cell11 = newRow.insertCell(10);
    cell11.innerHTML =data.photo;

    
    cell2 = newRow.insertCell(11);
    cell2.innerHTML =`<a onClick="onEdit(this)">Edit </a>`;
 
    cell2 = newRow.insertCell(12);
    cell2.innerHTML =`<a>Delete</a>`;







}