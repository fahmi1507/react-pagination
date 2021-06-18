import React from "react";

const Task = ({ tasks }) => {
  return (
    <>
      {tasks.map((e, i) => (
        <tr key={i}>
          <th scope="row">{e.id}</th>
          <td>{e.title}</td>
          <td className="text-center">
            {e.completed ? (
              <button className="btn btn-success">complete</button>
            ) : (
              <button className="btn btn-danger">pending</button>
            )}
          </td>
        </tr>
      ))}
    </>
  );
};

export default Task;
