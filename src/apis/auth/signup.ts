import { useMutation } from '@tanstack/react-query';
import type { UserType } from '../../Types/UserType';
import { useUserStore } from '@/store/useUser';
import { useNavigate } from 'react-router-dom';


type SignupInput ={
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}


const Signup=async (signupdata: SignupInput) => {
    const res = await fetch(`https://hptec.onrender.com/api/v1/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupdata),
    });
    
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Login failed');
    }
    
    const data: UserType = await res.json();
    return data; 

}

export const useSignup = () => {
  const navigate = useNavigate();
  return useMutation<UserType, Error, SignupInput>({
    mutationFn:Signup,
    onSuccess: (data) => {
      const setUser = useUserStore.getState().setUser;
      setUser(data); // Store user data in Zustand store
      
      navigate('/');

      console.log('Signup successful:', data);
    },
    onError: (error) => {
      console.error('Signup error:', error);
    }

   })
}

