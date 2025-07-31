import { useMutation } from '@tanstack/react-query';
import type { UserType } from '../../Types/UserType';
import { useUserStore } from '@/store/useUser';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";



type LoginInput = {
  email: string;
  password: string;
};


const Login=async ({ email, password }: LoginInput) => {

    const res = await fetch(`https://hptec.onrender.com/api/v1/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Login failed');
    }
    
    const data: UserType = await res.json();
   
    return data; // returns user or token

}

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation<UserType, Error, LoginInput>({
    mutationFn:Login,
    onSuccess: (data) => {
      const setUser = useUserStore.getState().setUser;
      setUser(data); 
      toast('Login Successful', {
        description: "Welcome back! You are now logged in.",
      dismissible: true,
      });
      navigate('/');

      console.log('Login successful:', data);
    },
    onError: (error) => {
      toast('Login Failed', {
        description: error.message,
        dismissible: true,
      });
      console.error('Login error:', error);
    }

   })
}

