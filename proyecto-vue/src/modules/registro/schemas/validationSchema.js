import * as yup from 'yup';

export const schema = yup.object().shape({
    nombre: yup.string().required('debe de completar este campo'),
    //aqui utlice expresiones regulares para validar en este caso
    //que tenga al menos un numero en la direccion 
    direccion: yup.string().matches(/\d/, 'La dirección debe contener elnúmero de la residencia').required('debe de completar este campo'),
    //aqui que solo tenga digitos :)
    telefono: yup.string().matches(/^\d+$/, 'sólo puede ingresar numeros').required('El número de teléfono es obligatorio'),
    correo: yup.string().email('el @ esta mal ubicado').required('debe de completar este campo')
});
