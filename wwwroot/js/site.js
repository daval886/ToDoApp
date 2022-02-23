const uri = 'api/todoitems';
let todos = [];


function getCurrentDate() {
    let date = new Date();
    let cDay = date.getDate();
    let cMonth = date.getMonth() + 1;
    let cYear = date.getFullYear();
    let cHour = date.getHours();
    let cMinutes = date.getMinutes();
    let cSeconds = date.getSeconds();

    return cDay + '.' + cMonth + '.' + cYear + ' ' + cHour + ':' + cMinutes + ':' + cSeconds;
}

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

function addItem() {
    const addNameTextbox = document.getElementById('add-name');

    const item = {
        isComplete: false,
        name: addNameTextbox.value.trim(),
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addNameTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}

function deleteItem(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to delete item.', error));
}

function displayEditForm(id) {
    const item = todos.find(item => item.id === id);

    document.getElementById('edit-name').value = item.name;
    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-isComplete').checked = item.isComplete;
    document.getElementById('editForm').style.display = 'block';
}

function updateItem() {
    const itemId = document.getElementById('edit-id').value;
    const item = {
        id: parseInt(itemId, 10),
        isComplete: document.getElementById('edit-isComplete').checked,
        name: document.getElementById('edit-name').value.trim()
    };

    fetch(`${uri}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to update item.', error));

    closeInput();

    return false;
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function _displayItems(data) {
    const tBody = document.getElementById('todos');
    tBody.innerHTML = '';

    const button = document.createElement('button');

    data.forEach(item => {
        let isCompleteCheckbox = document.createElement('input');
        isCompleteCheckbox.type = 'checkbox';
        isCompleteCheckbox.disabled = true;
        isCompleteCheckbox.checked = item.isComplete;

        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);
        editButton.style.backgroundColor = '#c92043';
        editButton.style.color = 'white';
        editButton.style.fontFamily = 'Ubuntu';
        editButton.style.border = 'none';
        editButton.style.padding = '5px 10px';
        editButton.style.borderRadius = '4px';

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);
        deleteButton.style.backgroundColor = '#c92043';
        deleteButton.style.color = 'white';
        deleteButton.style.fontFamily = 'Ubuntu';
        deleteButton.style.border = 'none';
        deleteButton.style.padding = '5px 10px';
        deleteButton.style.borderRadius = '4px';

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        td1.appendChild(isCompleteCheckbox);

        let td2 = tr.insertCell(1);
        let textNode = document.createTextNode(item.name);
        td2.appendChild(textNode);
        td2.style.width = '90vw';

        let td3 = tr.insertCell(2);
        let textNode2 = document.createTextNode(item.creationDate);
        td3.appendChild(textNode2);
        td3.style.width = '10vw';

        let td4 = tr.insertCell(3);
        td4.appendChild(editButton);

        let td5 = tr.insertCell(4);
        td5.appendChild(deleteButton);

        //Delete after 30 days
        //deleteAfter30(item);
    });

    todos = data;
}

function deleteAfter30(item) {
    if ('' + (parseInt(item.creationDate[4]) + 1) != '12') {
        if (('' + (new Date().getMonth() + 2) == ('' + (parseInt(item.creationDate[4]) + 1))) && ('' + new Date().getDate() == (item.creationDate[0] + item.creationDate[1]))) {
            deleteItem(item.id);
        }
    }
    else {
        if (('' + (new Date().getMonth() - 10) == ('' + (parseInt(item.creationDate[4]) + 1))) && ('' + new Date().getDate() == (item.creationDate[0] + item.creationDate[1]))) {
            deleteItem(item.id);
        }
    }
}