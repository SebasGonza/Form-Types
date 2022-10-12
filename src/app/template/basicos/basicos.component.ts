import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm

  constructor() { }

  ngOnInit(): void {
  }


  validarNombre(): boolean {
    return this.miFormulario?.controls['nombre']?.invalid && this.miFormulario?.controls['nombre']?.touched
  }
  validarPrecio(): boolean {
    return this.miFormulario?.controls['precio']?.invalid && this.miFormulario?.controls['precio']?.touched
  }



  // guardar(argumento:any): void{
  //   console.log(argumento);
  guardar(): void {
    console.log(this.miFormulario);
    
    this.miFormulario.resetForm(); // Esto sirve para borrar los campos del formulario

  }

}
