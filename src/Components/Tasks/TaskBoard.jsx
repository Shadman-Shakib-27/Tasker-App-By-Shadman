import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          {/* Task Search Component */}
          <SearchTask />
          {/* Task Search Component */}

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            {/* Task Action Component */}
            <TaskAction />
            {/* Task Action Component */}

            {/* Task List Component */}
            <TaskList />
            {/* Task List Component */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
