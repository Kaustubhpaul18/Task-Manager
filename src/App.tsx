import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import type { Task } from "./types/Task";
import {motion} from "framer-motion"

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id: number) => {
  setTasks((prev) =>
    prev.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  );
};

  const deleteTask = (id: number) => {
  setTasks(tasks.filter((t) => t.id !== id));
};


    return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-yellow-900 
                  flex justify-center items-center p-6">

    <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-6 rounded-3xl 
                    shadow-2xl border border-white/20">

      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-3xl font-bold text-center mb-4 drop-shadow-lg"
      >
        Task Manager Lite
      </motion.h1>
      
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
    
  </div>
);

}
