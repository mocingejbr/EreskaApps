import { Component, input } from '@angular/core';
import { Application } from '../application.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conditions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.css'
})
export class ConditionsComponent {
  application = input.required<Application>();
}
