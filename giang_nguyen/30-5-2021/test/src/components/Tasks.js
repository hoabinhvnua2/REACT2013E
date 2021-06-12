import React from "react";
import Table from "react-bootstrap/Table";
import FormRegister from "./FormRegister";

const tasks = [
  {
    firstName: "Nguyễn",
    lastName: "Quang",
    userName: "quang123",
  },
  {
    firstName: "Phương",
    lastName: "Lan",
    userName: "lan123",
  },
  {
    firstName: "Trần",
    lastName: "Đức",
    userName: "duc123",
  },
  {
    firstName: "Lê",
    lastName: "Nam",
    userName: "nam123",
  },
  {
    firstName: "Nguyễn",
    lastName: "Minh",
    userName: "minh123",
  },
];

const Tasks = () => {
  return (
    <div>
      {/* <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Fullname</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index.toString()}>
              <td>{index + 1}</td>
              <td>{task.firstName}</td>
              <td>{task.lastName}</td>
              <td>{task.userName}</td>
              <td>{task.firstName + task.lastName}</td>
            </tr>
          ))}
        </tbody>
      </Table> */}

      <FormRegister />

    </div>
  );
};

export default Tasks;
