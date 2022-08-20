import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email, data.password);
        console.log(data)

        swal("Your account has been registered succssful", "success");

    };
    return (
        <div className='my-10 w-1/2 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                    <input {...register("name", {
                        required: {
                            value: true,
                            message: "Name field is required"
                        },
                        minLength: {
                            value: 4,
                            message: 'Atlest 4 character is required'
                        }
                    })} type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
                    <label>{errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}</label>
                    <label>{errors.name?.type === 'minLength' && <span className='text-red-500'>{errors.name.message}</span>}</label>
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                    <input {...register("email", {
                        required: {
                            value: true,
                            message: "Email field is required"
                        }

                    })} type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
                    <label>{errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}</label>
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                    <input {...register("password", {
                        required: {
                            value: true,
                            message: "Password field is required"
                        },
                        pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                            message: 'Password requires 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter'
                        }
                    })} type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
                    <label>{errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}</label>
                    <label>{errors.password?.type === 'pattern' && <span className='text-red-500'>{errors.password.message}</span>}</label>
                </div>

                <input type="submit" value="Register new account" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" />
            </form>
        </div>
    );
};

export default Signup;