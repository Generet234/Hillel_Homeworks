import * as Yup from 'yup';
export const validationSchema = Yup.object({name: Yup.string()
        .min(2, 'Must be at least 2 characters long')
        .required('Required'),
    username: Yup.string()
        .required('Required'),
    email: Yup.string()
        .matches(/@/,'Must have this sign @')
        .required('Required'),
    phone: Yup.string()
        .matches(/^(?:\+38)?(0\d{9})$/, 'Phone number must be a valid phone number')
        .matches(/^\+?\d{10,12}$/, 'Phone number must contain numbers')
        .required('Required'),
    website: Yup.string()
        .required('Required'),
    city: Yup.string()
        .required('Required'),
    street: Yup.string()
        .required('Required'),
    companyName: Yup.string()
        .required('Required'),}
)