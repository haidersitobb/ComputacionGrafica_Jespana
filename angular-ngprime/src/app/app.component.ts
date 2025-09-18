import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';      // reemplaza a Dropdown
import { DatePickerModule } from 'primeng/datepicker'; // reemplaza a Calendar
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    SelectModule,
    DatePickerModule,
    CheckboxModule,
    RadioButtonModule,
    SliderModule,
    PanelModule,
    CardModule,
    ToastModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  name: string = '';
  password: string = '';
  gender: string = '';
  city: any;
  birthDate: Date | null = null;
  acceptTerms: boolean = false;
  volume: number = 30;

  cities = [
    { label: 'Bogotá', value: 'bogota' },
    { label: 'Medellín', value: 'medellin' },
    { label: 'Cali', value: 'cali' },
    { label: 'Cartagena', value: 'cartagena' }
  ];

  constructor(private messageService: MessageService) {}

  submitForm() {
    this.messageService.add({
      severity: 'success',
      summary: 'Formulario enviado',
      detail: `Usuario: ${this.name}`
    });
  }
}
