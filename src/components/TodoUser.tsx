interface ITodoUser {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function TodoUser({ value, onChange }: ITodoUser) {
  return (
    <li className="relative">
      <select
        className="w-40 h-8 mr-4 font-bold text-gray-600 border-2 rounded hover:border-gray-400 focus:outline-none"
        value={value}
        onChange={onChange}
      >
        <option value="none">None</option>
        <option value="emma">Emma</option>
        <option value="michael">Michael</option>
        <option value="olivia">Olivia</option>
        <option value="ethan">Ethan</option>
      </select>
    </li>
  );
}

export default TodoUser;
