import { Tienda } from '../tienda/tienda.class';

export class Barrio {
    id: number;
    nombre: string;
    isDeleted: boolean;
    creationDate: Date;
    lastModification: Date;
    priceExtra: number;
    lat: number;
    zoom: number;
    lng: number;
    tiendas: Tienda[] = [];
}
