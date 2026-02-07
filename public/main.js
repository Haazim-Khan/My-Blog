function handlerEdit(e){
    const parent = e.target.parentElement.parentElement;
    const id = parent.id;
    const title = prompt('Post title', parent.querySelector('h3').textContent);
    const content = prompt('Write your blog here...', parent.querySelector('p').textContent);
    fetch(`/edit/${id}`, {method: "POST", headers: {"Content-Type": "application/json"} , body : JSON.stringify({title: title, content: content})})
    .then(response => response.text())
    .then(html =>{
        document.body.innerHTML = html;
        call();
    });
}

function handlerDelete(e){
    const parent = e.target.parentElement.parentElement;
    const id = parent.id;
    fetch(`/delete/${id}`, {method: "POST", headers: {"Content-Type": "application/json"} })
    .then(response => response.text())
    .then(html =>{
        document.body.innerHTML = html;
        call();
    });
}

function call(){
    const handleEdit = document.getElementsByClassName('edit');
    const handleDelete = document.getElementsByClassName('delete');
    for(let i = 0; i <  handleEdit.length; i++){
        handleEdit[i].addEventListener('click', handlerEdit);
        handleDelete[i].addEventListener('click', handlerDelete);
    }
}

call();