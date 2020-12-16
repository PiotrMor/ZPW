import { CartElement } from './CartElement';

export interface Cart {
    id: string,
    elements: CartElement[]
}