const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

const getUsers = (cb) => {
  cb(users);
};

const getUserById = (id, cb) => {
  const user = users.find((user) => user.id === Number(id)); // ✅ fix here
  cb(user);
};

exports.getUsers = getUsers;
exports.getUserById = getUserById;
