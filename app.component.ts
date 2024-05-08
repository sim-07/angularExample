import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  nomeComponente = `${this.constructor.name}`;
  title: string = 'My Angular App';
  progress: number = 0;

  ngOnInit(): void {
    this.updateProgress(6);
  }

  updateProgress(value: number): void {
    if (this.progress >= 100 || value === 0) {
      return;
    }
    const delta = 100 - this.progress;

    if (value > delta) {
      value = delta;
    }

    setTimeout(() => {
      this.progress += value;
      this.updateProgress(value);
    }, 300);
  }

  sum(a: number, b: number): number {
    return a + b;
  }

  counter1 = 0;
  counter2 = 1;

}
