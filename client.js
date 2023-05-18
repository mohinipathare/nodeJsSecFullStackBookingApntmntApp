function saveUser() {
  //debugger;
  const data = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    phonenumber: document.getElementById("phonenumber").value
  };

  axios.post("http://localhost:3000/api/user",data).then((res) => {
    console.log("ressssssssssssssssssss", res);
    let ul = document.getElementById("userListId");
    let li = document.createElement("li");
    li.innerHTML = `<span>${res.data.username} </span>&nbsp;&nbsp;<span>${res.data.email} 
    </span>&nbsp;&nbsp;<span> ${res.data.phonenumber}</span>&nbsp;&nbsp; 
    <button onclick="editUser(${res.data.id})">Edit</button>
     &nbsp;&nbsp;<button onclick="deleteUser(${res.data.id})">Delete</button>`;
    li.setAttribute("id", res.data.id);
    ul.appendChild(li);
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phonenumber").value = "";
  });
}

function getUsers() {
  axios.get("http://localhost:3000/api/user").then((res) => {
    renderUserList(res.data);
  });
}

function getUser(id) {
  return axios.get(`http://localhost:3000/api/user/${id}`);
}
function renderUserList(data) {
  let ul = document.getElementById("userListId");
  data.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `<span>${item.username} </span>&nbsp;&nbsp;<span>${item.email} 
    </span>&nbsp;&nbsp;<span> ${item.phonenumber}</span>&nbsp;&nbsp; 
    <button onclick="editUser(${item.id})">Edit</button> &nbsp;&nbsp;
    <button onclick="deleteUser(${item.id})">Delete</button>`;
    li.setAttribute("id", item.id);
    ul.appendChild(li);
  });
}

function editUser(id) {
  //debugger;
  getUser(id).then((res) => {
    document.getElementById("username").value = res.data.username;
    document.getElementById("email").value = res.data.email;
    document.getElementById("phonenumber").value = res.data.phonenumber;
    document
      .getElementById("submitBtn")
      .setAttribute("onClick", `updateUser(${id})`);
    });
  }
function updateUser(id) {
  //debugger;
  const data = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    phonenumber: document.getElementById("phonenumber").value
  };

  axios.put(`http://localhost:3000/api/user/${id}`,{...data}).then((res) => {
    console.log("ressssssss of update api", res.data);
    let li = document.getElementById(`${id}`);
    li.innerHTML = `<span>${res.data.username} 
    </span>&nbsp;&nbsp;<span>${res.data.email} 
    </span>&nbsp;&nbsp;<span> ${res.data.phonenumber}</span>&nbsp;&nbsp; 
    <button onclick="editUser(${res.data.id})">Edit</button> 
    &nbsp;&nbsp;<button onclick="deleteUser(${res.data.id})">Delete</button>`;
  });
}

function deleteUser(id) {
  axios.delete(`http://localhost:3000/api/user/${id}`).then((res) => {
    document.getElementById(id).remove();
  });
}
