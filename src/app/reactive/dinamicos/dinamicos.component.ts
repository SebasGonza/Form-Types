import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  validarCampo(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }
}
