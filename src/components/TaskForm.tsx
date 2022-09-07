import { PlusCircle } from 'phosphor-react';
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  InvalidEvent,
  useState,
} from 'react';
import styles from './TaskForm.module.css';

interface ITaskFormProps {
  onCreateTask: (content: string) => void;
}

function TaskForm({ onCreateTask }: ITaskFormProps) {
  const [content, setContent] = useState('');

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    onCreateTask(content);
    setContent('');
  }

  function handleCreateTaskChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    event.target.setCustomValidity('');

    setContent(value);
  }

  function handleCreateTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!');
  }

  return (
    <form className={styles.newTaskForm} onSubmit={handleCreateTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={content}
        onChange={handleCreateTaskChange}
        onInvalid={handleCreateTaskInvalid}
        required
      />
      <button type="submit">
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}

export default TaskForm;
