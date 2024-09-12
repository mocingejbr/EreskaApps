import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dropdown-button',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dropdown-button.component.html',
  styleUrl: './dropdown-button.component.css',
})
export class DropdownButtonComponent {
  title = input.required<{name: string, id: string}>();
  option1 = input.required<string>();
  option2 = input.required<string>();
}
