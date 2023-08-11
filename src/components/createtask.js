import React, { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";

export default function CreateTask() {
  const [activity, setOnchangeActivity] = useState(``);

  const onSubmit = (e) => {
    e.preventDefault();
    const activityvar = { activity: activity };

    axios.post("http://localhost:5000/todos/add", activityvar).then((res) => {
      window.location = "/";
    });
  };

  return (
    <div>
      <Navbar />

      <h3>Create New Task</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Task: </label>
          <input
            type="text"
            className="form-control"
            value={activity}
            onChange={(e) => setOnchangeActivity(e.target.value)}
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Create Activity Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
