import React, { useState } from "react";
import { createGoal } from "./api";

function GoalForm() {

  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createGoal({ title });

    setTitle("");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Goal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
