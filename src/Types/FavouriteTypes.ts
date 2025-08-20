
import type { PhoneDetails } from './phone';



export type FavouriteState={
    items: PhoneDetails[];
    toggleFavourite: (item:PhoneDetails) => void;
    isFavourite: (itemId: string) => boolean;
    setItems: (items: PhoneDetails[]) => void;
}