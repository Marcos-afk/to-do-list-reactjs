import * as yup from 'yup';

export const InsertionBarSchema = yup.object({
  description: yup
    .string()
    .required('A tarefa precisa ter conteúdo')
    .max(100, 'A tarefa não pode ter mais de 100 caracteres'),
});
