import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validator,
  Validators,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  exampleForm: FormGroup;

  @ViewChild('form')
  form: NgForm;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.exampleForm = this.fb.group({ name: [null, Validators.required] });
  }

  submit() {
    console.log('Form submitted!');
    this.form.resetForm();
  }
}
