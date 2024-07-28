interface TodoCategoryProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
function TodoCategory({ value, onChange }: TodoCategoryProps) {
  return (
    <select
      className="w-40 h-8 mr-4 font-bold text-gray-600 border-2 rounded hover:border-gray-400 focus:outline-none"
      value={value}
      onChange={onChange}
    >
      <option value="Todo">📥 Todo</option>
      <option value="In Progress">🏃 In Progress</option>
      <option value="In Review">🙇 In Review</option>
      <option value="Done">☑️ Done</option>
      <option value="Canceled">🗑 Canceled</option>
    </select>
  );
}

export default TodoCategory;
