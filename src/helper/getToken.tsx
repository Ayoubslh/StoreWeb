import { useUserStore } from "@/store/useUser";

export  const getUserToken = (): string | null => {
  const user = useUserStore.getState().user;
  return user?.token ?? null;
};

export default getUserToken;
