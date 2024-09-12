import { Component, DestroyRef, inject, signal } from '@angular/core';
import { DropdownButtonComponent } from '../dropdown-button/dropdown-button.component';
import { ApplicationService } from '../application/application.service';
import { Datum } from '../application/application.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DropdownButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  applicationService = inject(ApplicationService);
  destroyRef = inject(DestroyRef);
  apps = signal<Datum[] | undefined>(undefined);


  // ngOnInit() {
  //   const subscription = this.applicationService.loadAllApps().subscribe({
  //     next: (apps) => {
  //       this.apps.set(apps);
  //       // apps.forEach((app) => {
  //       //   console.log(app.attributes.name);
  //       //   console.log(app.id)
  //       // })
  //     },
  //     error: (error: Error) => {
  //       console.log(error);
  //     },
  //     complete: () => {
  //       console.log('complete');
  //     },
  //   });

  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   });
  // }
}
