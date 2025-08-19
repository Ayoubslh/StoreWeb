// pages/login.tsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useLogin } from "../../../apis/auth/login"; // Adjust the import path as necessary
import { Loader } from "lucide-react";


const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function LoginPage() {
  const loginMutation = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    loginMutation.mutate(data);
    console.log("Login:", data);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left: Login Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              <input
                type="password"
                {...register("password")}
                className="mt-1 w-full px-4 py-2 border rounded"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex bg-[#C67C4E] text-white py-2 rounded justify-center"
            >{loginMutation.isPending ?  <Loader className="animate-spin "  /> : "Login"}
            </button>

            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-[#C67C4E] underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden lg:flex items-center justify-center ">
        <img
          src="/login.jpg"
          alt="Login Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
