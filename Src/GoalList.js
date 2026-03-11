import React, { useEffect, useState } from "react";
import { getGoals, deleteGoal } from "./api";

function GoalList() {

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    loadGoals();
  }, []);

  const loadGoals = async () => {
    const res = await getGoals();
    setGoals(res.data);
  };

  const removeGoal = async (id) => {
    await deleteGoal(id);
    loadGoals();
  };

  return (
    <div>
      {goals.map(goal => (
        <div key={goal._id}>
          {goal.title}
          <button onClick={() => removeGoal(goal._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default GoalList;
