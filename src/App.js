import React from "react";

import "./App.css";

import TodoItem from "./Components/todoitem";
import todosData from "./Components/todosData";

// import Header from "./Components/header";
// import MainContent from "./Components/maincontent";
// import Footer from "./Components/footer";

/*class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}*/

function App() {
  const todoItems = todosData.map(item => (
    <TodoItem key={item.id} item={item} />
  ));

  return <div className="todo-list">{todoItems}</div>;
}

export default App;
