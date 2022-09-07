import { useCallback, useState } from 'react';
import clipboard from '../assets/clipboard.svg';
import TaskForm from './TaskForm';
import Task, { ITask } from './Task';
import styles from './Tasks.module.css';

function Tasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const totalTasks = tasks.length;

  const tasksCompleted = tasks.reduce((acc, curr) => {
    if (curr.done) {
      acc++;
    }

    return acc;
  }, 0);

  const taskToggle = useCallback((content: string) => {
    setTasks((prevState) => {
      const newState = [...prevState].map((task) => {
        if (task.content === content) {
          task.done = !task.done;
        }
        return task;
      });

      return newState;
    });
  }, []);

  const deleteTask = useCallback((content: string) => {
    setTasks((prevState) => {
      const newState = [...prevState].filter(
        (task) => task.content !== content
      );

      return newState;
    });
  }, []);

  const createTask = useCallback((content: string) => {
    setTasks((prevState) => [{ content, done: false }, ...prevState]);
  }, []);

  return (
    <>
      <TaskForm onCreateTask={createTask} />

      <div className={styles.tasks}>
        <header className={styles.info}>
          <strong className={styles.created}>
            Tarefas criadas
            <span>{totalTasks}</span>
          </strong>
          <strong className={styles.done}>
            Concluídas
            <span>
              {tasksCompleted} de {totalTasks}
            </span>
          </strong>
        </header>

        {tasks.length > 0 ? (
          <ul className={styles.taskList}>
            {tasks.map((task, index) => (
              <Task
                key={index}
                task={task}
                onTaskToggle={taskToggle}
                onTaskDelete={deleteTask}
              />
            ))}
          </ul>
        ) : (
          <div className={styles.emptyContent}>
            <img src={clipboard} alt="clipboard" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Tasks;
