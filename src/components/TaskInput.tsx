import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}

export default function TaskInput({ onAdd }: Props) {
  const [text, setText] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-2 rounded-xl bg-white/30 text-white placeholder-white/60 
                   border border-white/40 backdrop-blur-lg shadow-inner"
        placeholder="Write a task..."
      />

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        className="px-5 py-2 bg-white text-indigo-600 font-semibold rounded-xl shadow-md"
      >
        Add
      </motion.button>
    </motion.form>
  );
}
