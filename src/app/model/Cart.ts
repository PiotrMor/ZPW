import { CartElement } from './CartElement';

export interface Cart {
    id: number,
    elements: CartElement[]
}