import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {
  @Input() selectedProject;

  
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  beginUpdatingProject(projectToUpdate){
    this.projectService.updateProject(projectToUpdate);
  }
  beginDeletingProject(projectToDelete){
    if(confirm("ARE YOU SURE?")){
      this.projectService.deleteProject(projectToDelete);
    }
  }

}
