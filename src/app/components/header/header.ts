import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
} from '@angular/core';
import { Store } from '@ngrx/store';

const API_URL = 'http://localhost:5247/api/jobs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements OnInit {
  constructor(private http: HttpClient) {}
  headerTitle = 'Zomota';

  store = inject(Store);
  valuenameValue = signal(this.functionCall());
  age = this.store.selectSignal((state) => state.zomotaData.age);
  dob = signal('1990-01-01');

  isMajor = computed(() => this.age() >= 18);

  ngOnInit(): void {
    this.valuenameValue.set('set value using set method');
    this.loadJobs();
  }

  loadJobs(): void {
    this.http.get(API_URL).subscribe({
      next: (response) => {
        console.log('API Response:', response);
      },
      error: (error) => {
        console.error('API Error:', error);
      },
    });
  }

  functionCall() {
    console.log('function called');
    return 'function called';
  }
  buttonClick() {
    console.log('clicked');
    this.headerTitle = 'Zomota App';
    setTimeout(() => {
      this.valuenameValue.update((v) => v + ' updated value using update method');
    }, 2000);
  }

  cumputedEvent() {
    console.log('computed event called');
  }
}
