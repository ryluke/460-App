var selectedRow = null

function onFormSubmit() {
    var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }


function readFormData() {
    var formData = {};
    formData["wheretxt"] = document.getElementById("wheretxt").value;
    formData["pricetxt"] = document.getElementById("pricetxt").value;
    formData["rangetxt"] = document.getElementById("rangetxt").value;
    formData["intxt"] = document.getElementById("intxt").value;
    formData["outtxt"] = document.getElementById("outtxt").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("PrefList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.wheretxt;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.pricetxt;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.rangetxt;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.intxt;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.outtxt;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("wheretxt").value = "";
    document.getElementById("pricetxt").value = "";
    document.getElementById("rangetxt").value = "";
    document.getElementById("intxt").value = "";
    document.getElementById("outtxt").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("wheretxt").value = selectedRow.cells[0].innerHTML;
    document.getElementById("pricetxt").value = selectedRow.cells[1].innerHTML;
    document.getElementById("rangetxtx").value = selectedRow.cells[2].innerHTML;
    document.getElementById("intxt").value = selectedRow.cells[3].innerHTML;
    document.getElementById("outtxt").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.wheretxt;
    selectedRow.cells[1].innerHTML = formData.pricetxt;
    selectedRow.cells[2].innerHTML = formData.rangetxt;
    selectedRow.cells[3].innerHTML = formData.intxt;
    selectedRow.cells[4].innerHTML = formData.outtxt;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("PrefList").deleteRow(row.rowIndex);
        resetForm();
    }
}
