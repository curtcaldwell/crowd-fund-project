import { Component, OnInit } from '@angular/core';
import { Project} from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }
  submitForm(title: string, organizer: string, goal: number, date: string, description: string) {
    var newProject: Project = new Project(title, organizer, goal, date, description);
    this.projectService.addProject(newProject);
  }
}
