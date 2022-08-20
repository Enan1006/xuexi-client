import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        userEmail,
        loadingEmail,
        errorEmail,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
        console.log(data)

        if (userEmail || userGoogle) {
            swal(
                {
                    title: "Login successful",
                    icon: "success",
                }
            );
        }
        if (errorEmail || errorGoogle) {
            swal(
                {
                    title: "Login unsuccessful",
                    icon: "error",
                }
            );
        }
    }
    return (
        <div className='my-10 w-1/2 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        }
                    })} type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
                    <label>{errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}</label>
                </div>

                <input type="submit" value="Login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" />
            </form>
            <button onClick={() => signInWithGoogle()} type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 mt-10">
                <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                Sign in with Google
            </button>
        </div>
    );
};

export default Login;