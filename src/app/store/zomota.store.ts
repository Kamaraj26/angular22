import { signal } from '@angular/core';

export interface ZomotaAppState {
  name: string;
  age: string;
  dob: string;
}

/**
 * Global zomota application state.
 * - `zomotaApp()` returns the current state
 * - Use `updateZomotaField` to update individual fields
 */
export const zomotaApp = signal<ZomotaAppState>({
  name: '',
  age: '',
  dob: ''
});

export function updateZomotaField<K extends keyof ZomotaAppState>(field: K, value: ZomotaAppState[K]) {
  zomotaApp.update(s => ({ ...s, [field]: value } as ZomotaAppState));
}

export function setZomotaApp(next: ZomotaAppState) {
  zomotaApp.set(next);
}

export function resetZomotaApp() {
  zomotaApp.set({ name: '', age: '', dob: '' });
}
