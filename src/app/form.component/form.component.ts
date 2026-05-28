// form.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  staffForm!: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.staffForm = this.fb.group({
      nom:              ['', Validators.required],
      prenom:           ['', Validators.required],
      age:              ['', [Validators.required, Validators.min(18)]],
      genre:            ['', Validators.required],
      dateNaissance:    [''],
      email:            ['', [Validators.required, Validators.email]],
      telephone:        ['', Validators.required],
      etatMatrimoniale: ['', Validators.required],
      qualification:    [''],
      designation:      [''],
      bloodGroup:       ['', Validators.required],
      adresse:          [''],
      pays:             [''],
      region:           [''],
      ville:            [''],
      codePostal:       ['']
    });
  }

  isInvalid(field: string): boolean {
    const c = this.staffForm.get(field);
    return !!(c && c.invalid && c.touched);
  }

  onSubmit(): void {
    if (this.staffForm.invalid) { this.staffForm.markAllAsTouched(); return; }
    this.isLoading = true;
    // Appeler staffService.createStaff(this.staffForm.value) ici
    setTimeout(() => { this.isLoading = false; this.router.navigate(['/list']); }, 800);
  }

  onReset(): void { this.staffForm.reset(); }
}