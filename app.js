const listaTaskuri = [
  {
    id: 1001,
    nume: "Task 1",
    completat: false
  },
  {
    id: 1002,
    nume: "Task 2",
    completat: false
  }
];

const proceseazaTaskNou = (taskObj) => {
  if (taskObj.nume === "" || taskObj.nume === undefined) {
    console.log("Eroare: Task-ul trebuie să aibă un nume!");
  } else {
    listaTaskuri.push(taskObj);
    console.log("Task adăugat cu succes!");
  }
};

proceseazaTaskNou({
  id: 1003,
  nume: "Task 3",
  completat: false
});

for (let i = 0; i < listaTaskuri.length; i++) {
  console.log(listaTaskuri[i].nume);
}
