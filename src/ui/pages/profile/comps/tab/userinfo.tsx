import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useUserStore } from "@/store/useUser";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";



const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email").min(1, "Email is required"),
  phonenum: z.string().min(10, "Phone number is required").max(10, "Phone number must be 10 digits"),
});

type FormData = z.infer<typeof schema>;
export default function UserInfo() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "Some User",
      email: "someuser@example.com",
      phonenum: "1234567890",
    },  
    });
    const onSubmit = (data: FormData) => {
          toast.success("You clicked , i didnt implement it maybe later ");

      console.log("Updated user info:", data);
      
    }
    return (
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <Input {...register("name")} placeholder="Your name" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <Input {...register("email")} type="email" placeholder="Your email" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <Input {...register("phonenum")} type="tel" placeholder="Your phone number" />
            {errors.phonenum && <p className="text-red-500 text-sm">{errors.phonenum.message}</p>}
          </div>

          <Button type="submit" className="w-full">Update Information</Button>
        </form>
      </div>
    );
  }