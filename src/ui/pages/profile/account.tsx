import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";

export default function AccountPage() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "Ayoub Salhi",
      email: "ayoub@email.com",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Updated account info:", data);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-brand-primary">My Account</h1>
        <p className="text-gray-500">Manage your personal information and orders</p>
      </div>

      <Separator />

      {/* Profile Info */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <Input {...register("name")} placeholder="Your name" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input {...register("email")} type="email" placeholder="you@example.com" />
            </div>

            <Button type="submit" className="bg-brand-primary text-white hover:bg-opacity-90">
              Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Orders */}
      <Card>
        <CardHeader>
          <CardTitle>My Orders</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-600">
          <p>You have 3 past orders. <a href="/orders" className="text-brand-primary underline">View all orders</a>.</p>
        </CardContent>
      </Card>

      {/* Password */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Current Password</label>
              <Input type="password" placeholder="••••••••" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">New Password</label>
              <Input type="password" placeholder="••••••••" />
            </div>

            <Button type="submit" className="bg-brand-primary text-white hover:bg-opacity-90">
              Update Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
