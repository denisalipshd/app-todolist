let todoName = document.getElementById("todo-name");
let btnSimpan = document.getElementById("btn-simpan");

btnSimpan.addEventListener("click", function () {
  if (todoName.value == "") {
    alert("Nama todo tidak boleh kosong!!");
  } else {
    let todoContainer = document.querySelector(".list-group");
    let todoHTML = todoContainer.innerHTML;
    todoHTML += `
        <li class="list-group-item d-flex justify-content-between">
            <div>
              <input class="form-check-input me-1" type="checkbox" />
              <label class="form-check-label"><span>${todoName.value}</span></label>
            </div>
            <button class="badge border-0 bg-danger btn-hapus">X</button>
        </li>
       `;
    todoContainer.innerHTML = todoHTML;
    todoName.value = "";
    todoName.focus();

    let checkTodo = document.querySelectorAll(".form-check-input");
    for (let i = 0; i < checkTodo.length; i++) {
      const input = checkTodo[i];
      input.addEventListener("change", function () {
        let todoSpan = input.nextElementSibling;
        todoSpan.classList.toggle("text-decoration-line-through");
      });
    }

    let btnHapus = document.querySelectorAll('.btn-hapus');
    for (let x = 0; x < btnHapus.length; x++) {
        const hapus = btnHapus[x];
        hapus.addEventListener('click', function () {
            this.parentElement.remove();
        })
    }
  }
});
