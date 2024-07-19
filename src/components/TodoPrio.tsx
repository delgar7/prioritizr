function TodoPrio() {
  return (
    <li className="relative">
      <select className="w-40 h-8 mr-4 font-bold text-gray-600 border-2 rounded hover:border-gray-400 focus:outline-none">
        <option value="urgent">🔥 Urgent</option>
        <option value="high">🟥 High</option>
        <option value="medium">🟧 Medium</option>
        <option value="low">🟨 Low</option>
        <option value="none">⬜️ None</option>
      </select>
    </li>
  );
}

export default TodoPrio;