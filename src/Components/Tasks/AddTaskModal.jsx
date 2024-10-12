/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTaskModal = ({ onSave, taskToUpdate, onCloseClick }) => {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );

  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",");
    }
    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0"></div>
      <form className="mx-auto my-10 w-full max-w-full md:max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-6 md:p-9 max-md:px-4 md:my-20 lg:p-11 z-10 absolute top-1/4 left-1/2 transform -translate-x-1/2 max-w-[90%] md:max-w-[60%] lg:max-w-[40%]">
        <h2 className="mb-6 text-center text-xl font-bold text-white md:mb-9 lg:text-[28px]">
          {isAdd ? "Add New Task" : "Edit Task"}
        </h2>

        <div className="space-y-6 md:space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title" className="text-sm md:text-base">
              Title
            </label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2 text-sm md:text-base"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description" className="text-sm md:text-base">
              Description
            </label>
            <textarea
              className="block min-h-[100px] w-full rounded-md bg-[#2D323F] px-3 py-2 text-sm md:text-base lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-4 lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags" className="text-sm md:text-base">
                Tags
              </label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2 text-sm md:text-base"
                type="text"
                name="tags"
                id="tags"
                value={task.tags}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority" className="text-sm md:text-base">
                Priority
              </label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2 text-sm md:text-base"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-between lg:mt-14">
          <button
            className="rounded bg-red-600 px-4 py-2 text-white text-sm md:text-base transition-all hover:opacity-80"
            onClick={onCloseClick}
          >
            Close
          </button>
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white text-sm md:text-base transition-all hover:opacity-80"
            onClick={() => onSave(task, isAdd)}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTaskModal;
