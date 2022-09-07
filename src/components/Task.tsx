import { CheckCircle, Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export type ITask = {
  content: string;
  done: boolean;
};

interface ITaskProps {
  task: ITask;
  onTaskToggle: (content: string) => void;
  onTaskDelete: (content: string) => void;
}

function Task({ task, onTaskToggle, onTaskDelete }: ITaskProps) {
  function handleTaskToggle() {
    onTaskToggle(task.content);
  }

  function handleTaskDelete() {
    onTaskDelete(task.content);
  }

  return (
    <li className={styles.task}>
      <button
        className={styles.checkedWrapper}
        type="button"
        onClick={handleTaskToggle}
      >
        {task.done ? (
          <>
            <CheckCircle size={24} weight="fill" color="var(--purple-700)" />
            <div />
          </>
        ) : (
          <Circle size={24} color="var(--blue-500)" />
        )}
      </button>

      <p className={`${task.done && styles.done}`}>{task.content}</p>

      <button type="button" onClick={handleTaskDelete}>
        <Trash size={24} />
      </button>
    </li>
  );
}

export default Task;
