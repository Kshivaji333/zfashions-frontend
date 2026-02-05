// import { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import { useForm, SubmitHandler } from 'react-hook-form'
// import { motion } from 'framer-motion'
// import { useAppDispatch, useAppSelector } from '../store/hooks'
// import { setCredintials, clearError, registerUser } from '../store/authSlice'

// interface RegisterFormInputs {
//     username: string
//     email: string
//     password: string
//     role: string
//     confirmPassword: string
// }

function Rigister() {
    // const navigate = useNavigate();
    // const dispatch = useAppDispatch();
    // const { isLoading, error } = useAppSelector((state) => state.auth);
    // const { showPassword, setShowPassword } = useState(false);

    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    // } = useForm<RegisterFormInputs>();

    // const password = watch("password");

    // const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    //     dispatch(clearError());
    //     const result = await dispatch(
    //         registerUser({
    //             username: data.username,
    //             email: data.email,
    //             password: data.password,
    //             role: data.role,
    //         })
    //     );
    //     if (registerUser.fulfilled.match(result)) {
    //         navigate("/");
    //     }
    // };



    return (
        <div>
           rigister page
        </div>
    )
}

export default Rigister
