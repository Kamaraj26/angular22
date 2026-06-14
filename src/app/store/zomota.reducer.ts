import { Action } from '@ngrx/store';

export interface ZomotaAppState {
  name: string;
  age: string;
  dob: string;
}

export const initialZomotaAppState: ZomotaAppState = {
  name: '',
  age: '',
  dob: ''
};

export function zomotaReducer(state = initialZomotaAppState, action: Action & { field?: string; value?: any }) {
  switch (action.type) {
    case 'ZOMOTA/SET_FIELD':
      return { ...state, [action.field as string]: action.value };
    case 'ZOMOTA/SET':
      return { ...(action as any).payload };
    case 'ZOMOTA/RESET':
      return initialZomotaAppState;
    default:
      return state;
  }
}
