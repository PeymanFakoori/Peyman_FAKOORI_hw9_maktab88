$(() => {
  renderTable();
});
function renderTable(sortBy = null) {
  const users = [...userData];
  $("tbody").html("");
  $("thead").html("");
  if (!!sortBy) {
    users.sort((a, b) => {
      const current = a[sortBy].toString();
      const next = b[sortBy].toString();
      return next.localeCompare(current, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    });
  }
  if (userData.length === 0) return;
  const tableColumn = ["row", ...Object.keys(users[0])];
  $("thead").append(
    "<tr>" +
      tableColumn
        .map((culomn) => {
          if (culomn === "row") {
            return `<th>${culomn}</th>`;
          }
          return `<th onclick ="renderTable('${culomn}')">${culomn}</th>`;
        })
        .join("") +
      "</tr>"
  );

  for (let [index, user] of users.entries()) {
    $("tbody").append(`<tr onclick = "renderReadUser(${user.uid})">
            <td>${index + 1}</td>
            <td>${user.uid}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.city}</td>
            <td>${user.postalCode}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.position}</td>
         </tr>`);
  }
}

function renderReadUser(uid) {
  const user = userData.find((user) => user.uid === uid);
  $("#modal-header").text("user info");
  $(".modal-body").html(
    Object.keys(user)
      .map((property) => `<p>${property}: ${user[property]}</p>`)
      .join("")
  );
  $(".modal-footer").append(
    `<button onclick ="removeUser(${uid})">"Delete"</button>
    <button onclick=renderUpdateUser(${uid})>Update</button>`
  );
  modalOpen();
}

function removeUser(uid) {
  const user = userData.find((user) => user.uid === uid);
  userData = userData.filter((item) => item.uid !== user.uid);
  renderTable();

  modalClose();
}
function renderUpdateUser(uid) {
  resetModal();

  const user = userData.find((user) => user.uid === uid);

  $("#modal-header").text("update");

  $(".modal-body").html(
    Object.keys(user)
      .map((property) => {
        if (property === "uid") {
          return `<input type="text" id="${property}" class="updateInputs" value="${user[property]}" placeholder="${property}" disabled/>`;
        }
        return `<input type="text" id="${property}" class="updateInputs" value="${user[property]}" placeholder="${property}"/>`;
      })
      .join("")
  );
  $(".modal-footer")
    .html(`<button onclick="renderReadUser(${uid})">cancel</button>
      <button onclick="updateUser(${uid})">save</button>`);

  modalOpen();
}
function updateUser(uid) {
  resetModal();

  const user = userData.find((user) => user.uid === uid);

  const updateInputs = $(".updateInputs");

  for (const input of updateInputs) {
    if (input.value.trim() === "") return alert("invalid input");

    if (input.id === "uid") {
      user[input.id] = Number(input.value);
      continue;
    }

    user[input.id] = input.value;
  }

  modalClose();

  renderTable();
}
function renderCreateUser() {
  resetModal();

  $("#modal-header").text("Create User");

  let properties = [
    "uid",
    "firstname",
    "lastname",
    "city",
    "postalCode",
    "phoneNumber",
    "position",
  ];

  if (userData.length !== 0) properties = Object.keys(userData[0]);

  $(".modal-body").html(
    properties
      .map((property) => {
        if (property === "uid") {
          return `<input type="number" min="0" id="${property}" class="createInputs" value="" placeholder="${property}"/>`;
        }

        return `<input type="text" id="${property}" class="createInputs" value="" placeholder="${property}"/>`;
      })
      .join("")
  );

  $(".modal-footer").html(`
        <button class="button" onclick="createUser()">save</button>
        <button class="button" onclick="modalClose()">cancel</button>`);

  modalOpen();
}

function createUser() {
  const createInputs = $(".createInputs");

  const newUser = {};

  for (const input of createInputs) {
    if (input.value.trim() === "") return alert("invalid input");

    if (
      input.id === "uid" &&
      !!userData.find((user) => user.uid === Number(input.value))
    ) {
      return alert("duplicated user !");
    }

    if (input.id === "uid") {
      newUser[input.id] = Number(input.value);
      continue;
    }

    newUser[input.id] = input.value;
  }

  userData.push(newUser);

  modalClose();

  renderTable();
}
