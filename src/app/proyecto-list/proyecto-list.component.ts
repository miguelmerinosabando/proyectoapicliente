import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../shared/services/proyecto.service';
import { Proyecto } from '../shared/models/proyecto.model';

@Component({
  selector: 'app-proyecto-list',
  templateUrl: './proyecto-list.component.html',
  styleUrls: ['./proyecto-list.component.css'],
  providers : [ProyectoService]
})
export class ProyectoListComponent implements OnInit {

  proyectoList : Proyecto[];
  showNew: Boolean = false;
  constructor(private proyectoService : ProyectoService) { }
   

  ngOnInit() {
    this.proyectoService.getProyectoList();
  }

  showForEdit(pro: Proyecto) {
    this.proyectoService.selectedProyecto = Object.assign({}, pro);;
    
  } 



}
