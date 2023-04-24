/** @format */

import React from "react";
import TodoCard from "./TodoCard";
import Tracker from "./Tracker";

function TodoContainer() {
  return (
    <div className="w-full gap-5 flex flex-col h-full">
      <div className="w-full text-center font-bold text-2xl py-5">
        <h1>Frontend</h1>
      </div>

      <div className="w-full flex justify-between">
        <div className="flex-1 space-y-10">
          <TodoCard
            title={"Delete my name"}
            description={
              "ijenkfonceodcnwidncindwndicn woddscinpdodmscpinodcsoin iodncpindnscwndoisunc"
            }
          />
          <TodoCard title={"Delete my name"} />
          <TodoCard title={"Delete my name"} />
          <TodoCard title={"Delete my name"} />
        </div>
      </div>
    </div>
  );
}

export default TodoContainer;
