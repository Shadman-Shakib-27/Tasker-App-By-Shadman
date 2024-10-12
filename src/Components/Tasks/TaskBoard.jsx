import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import NoTasksFound from "./NoTasksFound";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to Learn React such that i can treat it like my slave and make it do whatever i want to do.",
    tags: ["Web", "React", "Js"],
    priority: "High",
    isFavourite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  //Some Issue To Realize, Live Session
  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    handleCloseClick();
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  const handleDeleteTask = (taskId) => {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  };

  const handleDeleteAllTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  //   Search
  const handleSearch = (searchTerm) => {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setTasks([...filtered]);
  };

  const handleFavourite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    const newTasks = [...tasks];

    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;

    setTasks(newTasks);
  };

  const handleCloseClick = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <AddTaskModal
            onSave={handleAddEditTask}
            taskToUpdate={taskToUpdate}
            onCloseClick={handleCloseClick}
          />
        )}
        <div className="container">
          <SearchTask onSearch={handleSearch} />

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              onAddClick={() => {
                setShowAddModal(true);
              }}
              onDeleteAll={handleDeleteAllTask}
            />

            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onFav={handleFavourite}
              />
            ) : (
              <NoTasksFound />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
