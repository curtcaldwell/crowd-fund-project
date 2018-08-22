import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdminComponent }   from './admin/admin.component';
import { NewProjectComponent } from './new-project/new-project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'new-project',
    component: NewProjectComponent
  },
  {
    path: 'admin',
    component: ProjectsComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
