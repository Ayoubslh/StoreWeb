import {create} from 'zustand';
import type { FavouriteState } from './../Types/FavouriteTypes';
import type { PhoneDetails } from '@/Types/phone';


export const useFavouriteStore = create<FavouriteState>((set,get)=>({
    items:[],
    
    toggleFavourite: (item)=>{
        const existingItem = get().items.find(i => i._id === item._id);
        if(existingItem){
            set((state)=>({items: state.items.filter(i=> i._id !==item._id)}))
        }else{
            set((state)=>({
                items:[...state.items,item]}))
        }
    },
    isFavourite:(id)=>!!get().items.find((i)=>i._id===id),
    setItems: (items: PhoneDetails[]) => set({ items }),
      
}))