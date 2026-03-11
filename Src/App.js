import React from "react";
import GoalForm from "./GoalForm";
import GoalList from "./GoalList";

function App() {
  return (
    <div>
      <h1>MicroGoals Tracker</h1>
      <GoalForm />
      <GoalList />
    </div>
  );
}

export default App;
