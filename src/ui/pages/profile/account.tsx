import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import OrderPage from "../Orders/Orders";

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

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-brand-primary">My Account</h1>
        <p className="text-gray-500">Manage your settings, orders and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        {/* Tabs List */}
        <TabsList className="w-full flex justify-start gap-4 flex-wrap mb-6 border-b pb-2">
          <TabsTrigger value="profile" className="text-lg">Profile Settings</TabsTrigger>
          <TabsTrigger value="orders" className="text-lg">Orders</TabsTrigger>
          <TabsTrigger value="notifications" className="text-lg">Notifications</TabsTrigger>
        </TabsList>

        {/* PROFILE SETTINGS */}
        <TabsContent value="profile" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>User Information</CardTitle>
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

          <div className="text-right">
            <Button
              variant="outline"
              className="text-red-600 border-red-300 hover:bg-red-50"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </div>
        </TabsContent>

        {/* ORDERS */}
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>My Orders</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <OrderPage />
            </CardContent>
          </Card>
        </TabsContent>

        {/* NOTIFICATIONS */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>You will receive notifications about order updates and new promotions.</p>
              {/* You can add toggles here later */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
