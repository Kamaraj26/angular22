import { Component, inject, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { ZomotaAppState } from './store/zomota.reducer';
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [HeaderComponent]
})
export class App implements OnInit {
  protected readonly title = signal('zomotaApp');
  // Use selectSignal to read the `zomotaData` slice as a signal
  store = inject<Store<{ zomotaData: ZomotaAppState }>>(Store);
  zomota = this.store.selectSignal((state) => state.zomotaData) as () => ZomotaAppState;

  updateField(field: 'name' | 'age' | 'dob', value: string) {
    // Dispatch an action so the value appears in Redux DevTools
    this.store.dispatch({ type: 'ZOMOTA/SET_FIELD', field, value });
  }

  ngOnInit(): void {
    // Initialize the store slice with default values
    this.store.dispatch({ type: 'ZOMOTA/SET', payload: { name: 'John Doe', age: '30', dob: '1990-01-01' } });
  }
}
