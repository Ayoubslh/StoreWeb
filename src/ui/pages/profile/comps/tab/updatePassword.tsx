import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useUserStore } from "@/store/useUser";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const schema = z.object({
  currentPassword: z.string().min(6, "Current password is required"),
  newPassword: z.string().min(6, "New password is required"),
  confirmPassword: z.string().min(6, "Confirm password is required"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof schema>;
export default function UpdatePassword() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
        toast.success("You clicked , i didnt implement it maybe later ");

    console.log("Updated password:", data);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
    
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Current Password</label>
          <Input {...register("currentPassword")} type="password" placeholder="Current password" />
          {errors.currentPassword && <p className="text-red-500 text-sm">{errors.currentPassword.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">New Password</label>
          <Input {...register("newPassword")} type="password" placeholder="New password" />
          {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
          <Input {...register("confirmPassword")} type="password" placeholder="Confirm new password" />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>

        <Button type="submit" className="w-full">Update Password</Button>
      </form>
    </div>
  );
}