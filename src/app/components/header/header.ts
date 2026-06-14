import { Component, OnInit, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  headerTitle = 'Zomota';
  store = inject(Store);
  valuenameValue = signal(this.functionCall());
  age = this.store.selectSignal((state) => state.zomotaData.age);
  dob = signal('1990-01-01');

  isMajor = computed(() =>  this.age() >= 18);

  ngOnInit(): void {
    this.valuenameValue.set("set value using set method");
  }
functionCall(){
  console.log('function called');
  return 'function called';
}
  buttonClick() {
    console.log('clicked');
    this.headerTitle = 'Zomota App';
    setTimeout(() => {
     this.valuenameValue.update((v) => v+' updated value using update method');
    }, 2000);
  }

  cumputedEvent(){
  console.log('computed event called');
  }
}
