import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import TaskBoard from "./Components/Tasks/TaskBoard";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <TaskBoard />
      <Footer />
    </>
  );
};

export default App;
