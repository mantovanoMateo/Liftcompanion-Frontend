import { useForm } from 'react-hook-form'

import { useAuth } from '../context/AuthContext'
import bg from '../assets/bgLogInMob.png'

import './login.css'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function register() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home');
        }
    }, [isAuthenticated])



    const onSubmit = handleSubmit(async (values) => {
        console.log(values)
        signup(values);
    })

    return (
        <div>
            <div className='landingBg' style={{ backgroundImage: `url(${bg})` }}>
                <div className='logInContainer'>
                    <div className='form-group'>
                        <h2 className='welcomeTitle'>Bienvenido!</h2>
                        {
                                <div className='errorDiv'>
                                    {registerErrors}
                                </div>
                        }
                        <form onSubmit={onSubmit}>
                            <input className='form-control' type="email" placeholder='Email' {...register('email', { required: true })} />
                            {errors.email && (
                                <p className='textoDeError'>Email requerido</p>
                            )}
                            <input className='form-control' type="text" placeholder='Username' {...register('username', { required: true })} />
                            {errors.username && (
                                <p className='textoDeError'>Username requerido</p>
                            )}
                            <input className='form-control' type="text" placeholder='Nombre' {...register('name', { required: true })} />
                            {errors.name && (
                                <p className='textoDeError'>Nombre requerido</p>
                            )}
                            <input className='form-control' type="text" placeholder='Apellido' {...register('lastname', { required: true })} />
                            {errors.lastname && (
                                <p className='textoDeError'>Apellido requerido</p>
                            )}
                            <input className='form-control' type="password" placeholder='Password' {...register('password', { required: true })} />
                            {errors.password && (
                                <p className='textoDeError'>Error en contrasena</p>
                            )}
                            <button type='submit' className='logInbtn'>Registrarme</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default register
