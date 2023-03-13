var selectedRow = null;
// function validateForm() {
//     if (validate()) {
//         var formData = readFormData();
//         if (selectedRow == null)
//             insertNewRecord(formData);
//         else
//             updateRecord(formData);
//         resetForm();
//     }
// }

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}


sub.addEventListener("click", function(){ 

  
        var formData = readFormData();

            insertNewRecord(formData);

            updateRecord(formData);
        resetForm();
    
});

function readFormData(){
    formData["name"]  = document.getElementById('name').value;
    formData["email"]   = document.getElementById('email').value;
    formData["phone"]     = document.getElementById('phone').value;
    formData["dob"] = document.getElementById('dob').value;
    formData["time"]  = document.getElementById('time').value;
    formData["fcolor"]   = document.getElementById('fcolor').value;
    formData["payment"]     = document.getElementById('payment').value;
    formData["checkbox1"] =document.getElementById ('checkbox1').value;
    formData["checkbox2"]  = document.getElementById('checkbox2').value;
    formData["age"]   =document.getElementById ('age').value;
    formData["photo"]     =document.getElementById ('photo').value;
    return formData;
}
function insertNewRecord(data){
    var table= document.getElementById("emplist").getElementByTagName('tbody')[0]; 
    var newRow = table.insertRow(table.length);


    cell1 = newRow.insertCell(0);
    cell1.innerHTML =data.name;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML =data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML =data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML =data.phone;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML =data.time;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML =data.fcolor;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML =data.payment;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML =data.checkbox1;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML =data.checkbox2;
    
    cell10 = newRow.insertCell(9);
    cell10.innerHTML =data.age;
    
    cell11 = newRow.insertCell(10);
    cell11.innerHTML =data.photo;

    cell12.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;

}

function resetForm(){
document.getElementById('name').value="";
document.getElementById('email-input').value="";
document.getElementById('phone-input').value="";
document.getElementById('dob').value="";
document.getElementById('time-input').value="";
document.getElementById('fcolor').value="";
document.getElementById('payment').value="";
document.getElementById('checkbox-1').value="";
document.getElementById('checkbox-2').value="";
document.getElementById('age').value="";
document.getElementById('photo').value="";
selectedRow = null;

}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;

    document.getElementById('name').value = selectedRow.cells[0].innerHTML;;
    document.getElementById('email-input').value = selectedRow.cells[1].innerHTML;
    document.getElementById('phone-input').value = selectedRow.cells[2].innerHTML;
    document.getElementById('dob').value = selectedRow.cells[3].innerHTML;
    document.getElementById('time-input').value = selectedRow.cells[4].innerHTML;
    document.getElementById('fcolor').value = selectedRow.cells[5].innerHTML;
    document.getElementById('payment').value = selectedRow.cells[6].innerHTML;
    document.getElementById('checkbox-1').value = selectedRow.cells[7].innerHTML;
    document.getElementById('checkbox-2').value = selectedRow.cells[8].innerHTML;
    document.getElementById('age').value = selectedRow.cells[9].innerHTML;
    document.getElementById('photo').value = selectedRow.cells[10].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.phone;
    selectedRow.cells[3].innerHTML = formData.dob;
    selectedRow.cells[4].innerHTML = formData.time;
    selectedRow.cells[5].innerHTML = formData.fcolor;
    selectedRow.cells[6].innerHTML = formData.payment;
    selectedRow.cells[7].innerHTML = formData.checkbox1;
    selectedRow.cells[8].innerHTML = formData.checkbox2;
    selectedRow.cells[9].innerHTML = formData.age;
    selectedRow.cells[10].innerHTML = formData.photo;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("emplist").deleteRow(row.rowIndex);
        resetForm();
    }
}
// function validate() {
//     isValid = true;
//     if (document.getElementById("name").value == "") {
//         isValid = false;
//         document.getElementById("fullNameValidationError").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
//             document.getElementById("fullNameValidationError").classList.add("hide");
//     }
//     return isValid;
// }

function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
