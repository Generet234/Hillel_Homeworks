import * as Yup from 'yup';
export const validationSchema = Yup.object({title: Yup.string()
        .min(3, 'Must be at least 3 characters long')
        .required('Required'),
    description: Yup.string()
        .min(10, 'Must be at least 10 characters long')
        .required('Required'),
    price: Yup.number()
        .min(Yup.ref('priceSale'), 'Must be less than price')
        .required('The price needs to be greater than 0'),
    priceSale: Yup.number()
        .min(1, 'Must be more than 0 and less than price'),
    category: Yup.string()
        .required('Required'),
    brand: Yup.string()
        .required('Required'),
    sku: Yup.string()
        .required('Required'),
    quantity: Yup.number()
        .min(0,'Must be at least 0')
        .required('Required'),
    url: Yup.string()
        .url('Enter a valid URL'),}
)