import { Component, Input } from '@angular/core';

@Component({
  selector: 'simple-progress-bar',
  template: `
    <div class="container">
      <div class="progress" [style.width.%]="progress-5">{{ progress }}%</div>
    </div>
  `,
  styles: [
    `
      .container {
        background-color: #ededed;
        width: 400px;
        border-radius: 24px;
        position: relative;
        margin: 20px auto;
      }
      .progress {
        background-color: #10ADED;
        padding: 10px;
        text-align: center;
        font-weight: bold;
        border-radius: inherit;
        transition: width .5s ease-out;
      }
    `
  ]
})
export class ProgressBarComponent {
  @Input() progress!: number;
}
