import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {


  // miFormulario: FormGroup = new FormGroup({
  //   nombre      : new FormControl('RTX 4080ti'),
  //   precio      : new FormControl(100000),
  //   existencias : new FormControl(16)
  // })


  miFormulario: FormGroup = this.formBuild.group({
    nombre: [, [Validators.required,Validators.minLength(3)]],
    precio: [ , [Validators.min(0),Validators.required]],
    existencias: [, [Validators.required, Validators.min(0)]]
  })

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
  }

  validarCampo(campo:string):boolean {
    return this.miFormulario.controls[campo].invalid && this.miFormulario.controls[campo].touched 
  }

  agregar():void{
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
