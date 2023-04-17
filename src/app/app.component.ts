import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required,  Validators.minLength(4)]],
      last_name: ['', [Validators.required,  Validators.minLength(4)]],
      // description: ['', [Validators.required]],
      stock: [100, [Validators.required]],
      password: [],
      // age: ['', [Validators.required]],
      // start: [new Date().toISOString().split('T')[0], [Validators.required]],
      // end: [new Date().toISOString().split('T')[0], [Validators.required]],
    });
  }

  saveForm(event: Event) {
    console.log(this.form.value);
  }
}
