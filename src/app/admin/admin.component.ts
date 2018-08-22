import { Component, OnInit } from '@angular/core';
import { Project} from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }
  submitForm(title: string, organizer: string, goal: number, date: string, description: string) {
    var newProject: Project = new Project(title, organizer, goal, date, description);
    this.projectService.addProject(newProject);
  }
}
