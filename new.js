
        const form = document.querySelector('form');
        const nameInput = document.querySelector('#name');
        const table = document.querySelector('#data-table');
        let data = [];

        form.addEventListener('submit', (event) => {
          // Prevent form from submitting
          event.preventDefault();
          
          // Check if name field is valid
          if (nameInput.value=="") {
            alert('Please enter a valid name');
          } else {
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email-input');
            const phone = formData.get('phone-input');
            const dob = formData.get('dob');
            const time = formData.get('time-input');
            const color = formData.get('dropdown-input');
            const paymentMethod = formData.get('radio-group');
            const option1 = formData.get('checkbox-1');
            const option2 = formData.get('checkbox-2');
            const age = formData.get('range-input');
            const photo = formData.get('file-input');
            
            // Add data to array
            data.push({
              name,
              email,
              phone,
              dob,
              time,
              color,
              paymentMethod,
              option1,
              option2,
              age,
              photo
            });
            
            // Update table
            updateTable();
            
            // Clear form
            form.reset();
          }
        });
        
        function updateTable() {
          // Clear existing table rows
          while (table.rows.length > 1) {
            table.deleteRow(1);
          }
          
          // Add data to table
          for (let i = 0; i < data.length; i++) {
            const row = table.insertRow(i + 1);
            const nameCell = row.insertCell(0);
            const emailCell = row.insertCell(1);
            const phoneCell = row.insertCell(2);
            const dobCell = row.insertCell(3);
            const timeCell = row.insertCell(4);
            const colorCell = row.insertCell(5);
            const paymentMethodCell = row.insertCell(6);
            const option1Cell = row.insertCell(7);
            const option2Cell = row.insertCell(8);
            const ageCell = row.insertCell(9);
            const photoCell = row.insertCell(10);
            
            nameCell.innerHTML = data[i].name;
            emailCell.innerHTML = data[i].email;
            phoneCell.innerHTML = data[i].phone;
            dobCell.innerHTML = data[i].dob;
            timeCell.innerHTML = data[i].time;
            colorCell.innerHTML = data[i].color;
            paymentMethodCell.innerHTML = data[i].paymentMethod;
            option1Cell.innerHTML = data[i].option1;
            option2Cell.innerHTML = data[i].option2;
            ageCell.innerHTML = data[i].age;
            photoCell.innerHTML = data[i].photo;
          }
        }
  
