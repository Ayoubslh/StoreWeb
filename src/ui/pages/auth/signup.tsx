// pages/register.tsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import{Link} from "react-router-dom";
import { useSignup } from "../../../apis/auth/signup"; 
import { useState } from "react";
// Adjust the import path as necessary
 const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  passwordConfirm: z.string().min(6, "Confirm your password"),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "Passwords must match",
  path: ["passwordConfirm"], // attach error to passwordConfirm field
});

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);
  const signupMutation = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: any) => {
    signupMutation.mutate(data);
    console.log("Register:", data);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left: Image */}
      <div className="hidden lg:flex items-center justify-center ">
        <img
          src="/register.jpg"
          alt="Register Illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* Right: Register Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                {...register("name")}
                className="mt-1 w-full px-4 py-2 border rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                {...register("email")}
                className="mt-1 w-full px-4 py-2 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
           <div>
  <label className="block text-sm font-medium">Password</label>
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      {...register("password")}
      className="mt-1 w-full px-4 py-2 border rounded pr-10"
    />
    <button
      type="button"
      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
      onClick={() => setShowPassword((prev) => !prev)}
    >
      {showPassword ? "Hide" : "Show"}
    </button>
  </div>
  {errors.password && (
    <p className="text-red-500 text-sm">{errors.password.message}</p>
  )}
</div>
<div>
  <label className="block text-sm font-medium">Confirm Password</label>
  <div className="relative">
    <input
      type={showConfirm ? "text" : "password"}
      {...register("passwordConfirm")}
      className="mt-1 w-full px-4 py-2 border rounded pr-10"
    />
    <button
      type="button"
      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
      onClick={() => setShowConfirm((prev) => !prev)}
    >
      {showConfirm ? "Hide" : "Show"}
    </button>
  </div>
  {errors.passwordConfirm && (
    <p className="text-red-500 text-sm">{errors.passwordConfirm.message}</p>
  )}
</div>


            <button
              type="submit"
              className="w-full bg-[#C67C4E] text-white py-2 rounded hover:bg-[#A65B3C]"
            >
              Register
            </button>

            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-[#C67C4E] underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
