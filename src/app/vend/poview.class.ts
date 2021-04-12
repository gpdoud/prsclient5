import { Requestline } from "../reql/requestline.class";
import { Vendor } from "./vendor.class";

export class PoView {
    vendor: Vendor = null;
    polines: Requestline[] = [];
    total: number = 0;
}