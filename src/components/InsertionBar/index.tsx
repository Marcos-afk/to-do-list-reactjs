import styles from './styles.module.scss';
import PlusSvg from '../../assets/plus.svg';
import { useTaskContext } from '../../hooks/useTaskContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InsertionBarProps } from './InsertionBarProps';
import { InsertionBarDefaultValues } from './DefaultValues';
import { InsertionBarSchema } from './Schemas';
import { v4 } from 'uuid';

export const InsertionBar = () => {
  const { addTask } = useTaskContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InsertionBarProps>({
    defaultValues: InsertionBarDefaultValues,
    resolver: yupResolver(InsertionBarSchema),
  });

  const handleAddTask = ({ description }: InsertionBarProps) => {
    const task = {
      id: v4(),
      description,
      isCompleted: false,
      createdAt: new Date(),
    };

    addTask(task);
    reset(InsertionBarDefaultValues);
  };

  return (
    <div className={styles.insertionBar}>
      <input
        className={errors.description && styles.errorMessage}
        type="text"
        placeholder={errors.description ? errors.description.message : 'Adicione uma tarefa'}
        {...register('description')}
        maxLength={100}
      />
      <button onClick={handleSubmit(handleAddTask)}>
        <span>Criar</span>
        <img src={PlusSvg} alt="Search" />
      </button>
    </div>
  );
};
