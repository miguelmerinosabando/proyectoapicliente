import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../shared/services/proyecto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-proyecto-edit',
  templateUrl: './proyecto-edit.component.html',
  styleUrls: ['./proyecto-edit.component.css']
})
export class ProyectoEditComponent implements OnInit {

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.proyectoService.selectedProyecto = {
      proyectoId : null,
    nombre :'',
    empresa : '',
    presupuesto : null,
    tecnologias: '',
    fechaInicio : '',
    estadoActual : '',
    empleados: null
    }
  }
 
  onSubmit(form: NgForm) {
    if (form.value.proyectoId == null) {
      this.proyectoService.postProyecto(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.proyectoService.getProyectoList();
          //this.toastr.success('New Record Added Succcessfully', 'Employee Register');
        })
    }
    else {
      this.proyectoService.putProyecto(form.value.proyectoId, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.proyectoService.getProyectoList();
        //this.toastr.info('Record Updated Successfully!', 'Employee Register');
      });
    }
  }
}

