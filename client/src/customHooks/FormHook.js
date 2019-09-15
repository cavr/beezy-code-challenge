import { useState } from 'react';

export const useForm = (resource = {}, ) => {
    const [values, setValues] = useState(resource);

    const onChange = e => {
        const { name, value } = e.target;
        setValues(values => ({ ...values, [name]: value }));
    };


    return {
        onChange,
        values
    };
};
