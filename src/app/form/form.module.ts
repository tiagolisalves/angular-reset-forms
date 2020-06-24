import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { FormRoutingModule } from './form-routing.module';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
  ],
  exports: [FormComponent],
})
export class FormModule {}
