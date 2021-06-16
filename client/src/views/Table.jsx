import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import Task from "../components/Task";
import { fetchTask } from "../store/action";

const Table = () => {
  const tasks = useSelector((state) => state.tasks);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage, setTasksPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  if (loading) {
    return <h2>loading....</h2>;
  }

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section className="container d-flex flex-column">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Title</th>
            <th className="text-center" scope="col">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <Task tasks={currentTasks} />
        </tbody>
      </table>
      <Pagination className="align-self-center" tasksPerPage={tasksPerPage} totalTasks={tasks.length} paginate={paginate} />
    </section>
  );
};

export default Table;
