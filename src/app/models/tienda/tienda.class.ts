import { Menu } from './menu.class';

export class Tienda {
    id: number;
    name: string;
    description: string;
    address: string;
    isDelete: boolean;
    creationDate: Date;
    lastModification: Date;
    imagen: any;
    menu: Menu[] = [];
}
