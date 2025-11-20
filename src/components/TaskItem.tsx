import { motion } from "framer-motion";
import type { Task } from "../types/Task";

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.25 }}
      className="group flex justify-between items-center p-4 rounded-xl cursor-pointer 
                 shadow-md bg-white/20 backdrop-blur-lg border border-white/30 
                 hover:shadow-lg hover:bg-white/30 transition relative"
    >

      {/* CLICKABLE AREA */}
      <div
        className="flex-1"
        onClick={() => onToggle(task.id)}
      >
        <span
          className={
            task.completed
              ? "line-through text-gray-300"
              : "text-white"
          }
        >
          {task.text}
        </span>
      </div>

      {/* STATUS BADGE */}
      <motion.span
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className={
          "text-xs px-2 py-1 rounded-md ml-2 " +
          (task.completed
            ? "bg-green-400 text-black"
            : "bg-yellow-300 text-black")
        }
      >
        {task.completed ? "Done" : "Pending"}
      </motion.span>

     {/* RIGHT SIDE — delete button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent toggle
          onDelete(task.id);
        }}
        className="opacity-0 group-hover:opacity-100 transition 
                   text-red-400 hover:text-red-500 px-2 py-1"
      >
        ✕
      </button>
    </motion.div>
  );
}
