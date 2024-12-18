import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const useFormValidation = (schema) => {
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    return { register, handleSubmit, setValue, getValues, errors };
};
