import { PrecioBarrio } from '../barrio/preciobarrio.class';

export class Menu {
    id: number;
    title: string;
    image: any;
    isDeleted: boolean;
    isVisible: boolean;
    creationDate: Date;
    lastModification: Date;
    description: string;
    price: number;
    priceExtra: PrecioBarrio[] = [];
}
