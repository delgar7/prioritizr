# Components for Todo App
- App.tsx (root)
- Header.tsx
- TodoCategoryRow.tsx (contains In Progress, Todo, and Done + total count)
- AddTodo.tsx
- TodoStatus.tsx
- SingleTodos.tsx

# State Overview
- State to track the number of todos in each category. Incremented when the "+ button" is clicked.
- Boolean state to track whether a todo is completed or not.
- State to manage the title of a todo that is being edited.
- State to manage the current theme mode (dark or light).
- State to track the priority of an individual todo.
- State to track the status of an individual todo (e.g., In Review, In Progress, Todo, Done, Canceled).