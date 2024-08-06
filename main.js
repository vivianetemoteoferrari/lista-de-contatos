document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    
    var table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    
    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.textContent = name;
    cell2.textContent = phone;
    
    document.getElementById('contactForm').reset();
});

document.getElementById('clearContacts').addEventListener('click', function() {
    var tableBody = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    
    while (tableBody.rows.length > 0) {
        tableBody.deleteRow(0);
    }
});