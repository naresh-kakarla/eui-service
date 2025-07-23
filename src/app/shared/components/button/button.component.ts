import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;

  get classes(): string {
    let base = 'px-4 py-2 rounded font-semibold transition ';
    if (this.disabled) {
      return base + 'opacity-50 cursor-not-allowed bg-gray-400 text-gray-700';
    }
    if (this.variant === 'primary') {
      return base + 'bg-indigo-600 text-white hover:bg-indigo-700';
    }
    if (this.variant === 'secondary') {
      return base + 'bg-gray-200 text-gray-800 hover:bg-gray-300';
    }
    return base;
  }
}
