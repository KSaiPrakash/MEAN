import {Action} from '@ngrx/store';

export enum RegistrationActionTypes {
  Profile_Get = '[PROFILE_GET] Load Profile',
  Profile_Get_Success = '[PROFILE_SUCCESS] Profile Get Success',
  Profile_Get_Failure = '[PROFILE_FAIL] Profile Get Failure',
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class LoadAction implements Action {
  readonly type;
}


  export class GetProfileSuccess implements ActionEx {
    readonly type = RegistrationActionTypes.Profile_Get_Success;
    constructor(public payload: any) {
    }
  }
  export class GetProfileFailure implements ActionEx {
    readonly type = RegistrationActionTypes.Profile_Get_Failure;
    constructor(public payload: any) {
  }
  }
  export class GetProfile implements ActionEx {
    readonly type = RegistrationActionTypes.Profile_Get;
    constructor(public payload: any) {
    }
}
