import { Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Application, Datum } from './application.model';
import { ApplicationService } from './application.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [],
  templateUrl: './application.component.html',
  styleUrl: './application.component.css',
})
export class ApplicationComponent {
  application = input.required<Datum>();

  private applicationService = inject(ApplicationService);
  destroyRef = inject(DestroyRef);
  apps: any;

  // ngOnInit() {
  //   const subscription = this.applicationService.loadAllApps().subscribe({
  //     next: (apps) => {
  //       apps.forEach((app) => {
  //         console.log(app.attributes.name);
  //         console.log(app.id)
  //       })
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

export const resolveApplication: ResolveFn<Datum | void> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const applicationService = inject(ApplicationService);
  console.log(applicationService.testApps);
  const application = applicationService.testApps?.find(
    (app) => app.id === activatedRoute.paramMap.get('appId')
  );
  console.log(application?.id)

  return application;
};

/*

 usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
*/
