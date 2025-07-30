
export type UserType = {
  _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    profilePicture?: string;
    token?: string;
    isActive: boolean;
    lastLogin?: string;
    role: 'user' | 'admin';
}