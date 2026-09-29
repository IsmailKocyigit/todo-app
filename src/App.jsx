import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    }

    return [];
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [editingTodoId, setEditingTodoId] = useState(null);

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  function handleSubmit(event) {
    event.preventDefault();

    if (editingTodoId !== null) {
      setTodos((currentTodos) => {
        return currentTodos.map((todo) => {
          if (todo.id === editingTodoId) {
            return {
              ...todo,
              title: title,
              description: description
            };
          }

          return todo;
        });
      });

      setEditingTodoId(null);
      setTitle("");
      setDescription("");

      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
      createdAt: new Date().toISOString().split("T")[0]
    };

    setTodos((currentTodos) => {
      return [...currentTodos, newTodo];
    });

    setTitle("");
    setDescription("");
  }


  function handleToggleComplete(id) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }

        return todo;
      });
    });
  }


  function handleDelete(id) {
    const isConfirmed = window.confirm(
      "Bu yapılacak kartını silmek istediğinizden emin misiniz?"
    );

    if (!isConfirmed) {
      return;
    }

    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }


  function handleEdit(todo) {
    setEditingTodoId(todo.id);
    setTitle(todo.title);
    setDescription(todo.description);
  }


  return (
    <div className="app">
      <header className="app-header">
        <h1>Yapılacaklar Listesi</h1>
        <p>Yapılacak işlerinizi buradan takip edin.</p>
      </header>

      <main className="app-content">
        <section className="todo-form-section">
          <h2>
            {editingTodoId !== null ? "Todo Düzenle" : "Yeni Yapılacak"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Başlık</label>

              <input
                id="title"
                type="text"
                placeholder="Örneğin: React öğren"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Açıklama</label>

              <textarea
                id="description"
                placeholder="Yapılacak iş hakkında açıklama..."
                rows="4"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            <button type="submit">
              {editingTodoId !== null ? "Güncelle" : "Ekle"}
            </button>
          </form>
        </section>

        <section className="todo-list-section">
          <h2>Yapılacaklar</h2>

          <div className="todo-list">
            {todos.map((todo) => (
              <article className="todo-card" key={todo.id}>
                <h3>{todo.title}</h3>

                <p>
                  {todo.description}
                </p>

                <p className="todo-date">
                  Oluşturulma: {todo.createdAt}
                </p>

                <div className="todo-status">
                  <label>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggleComplete(todo.id)} 
                    />

                    {todo.completed ? "Tamamlandı" : "Tamamlanmadı"}
                  </label>
                </div>

                <div className="todo-actions">
                  <button
                    type="button"
                    onClick={() => handleEdit(todo)}
                  >
                    Düzenle
                  </button>

                  <button 
                    type="button"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Sil
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;