import { Registration } from './../../models/registration.model';
import { RegistrationActionTypes } from './../actions/registration.action';

export function registrationReducer(state: Registration[] = [], action) {
  switch (action.type) {
    case RegistrationActionTypes.Profile_Get:
        return [...state, action.payload];
    case RegistrationActionTypes.Profile_Get_Success:
        return [...state, action.payload];
    default:
        return state;
    }
}
