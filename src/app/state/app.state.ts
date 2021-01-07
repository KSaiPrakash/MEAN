import { Registration } from './../models/registration.model';

export interface AppState {
    readonly registration: Registration[];
}