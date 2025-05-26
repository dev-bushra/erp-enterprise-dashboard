import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.scss']
})

export class AddEmployeeDialogComponent {
  form: FormGroup; // Reactive form group to hold employee form controls and validations


  constructor(
    private fb: FormBuilder, // FormBuilder service to easily create reactive forms
    private dialogRef: MatDialogRef<AddEmployeeDialogComponent> // Reference to control the dialog (open/close)
  ) {
    // Initialize form with form controls and validation rules
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      companyName: ['', Validators.required]
    });
  }

  // Closes dialog and passing form data if valid
  save() {
    console.log('saving form...', this.form);
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  // Closes dialog
  cancel() {
    this.dialogRef.close();
  }
}
