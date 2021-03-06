import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIserviceService } from '../apiservice.service';
import { appConstants } from '../app.constants';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  submitted = false;
  _Form: FormGroup;
  daysOptions = appConstants.days;
  monthsOptions = appConstants.months;
  yearsOptions = appConstants.years;
  constructor(private formBuilder: FormBuilder, private apiService: APIserviceService) { }

  ngOnInit(): void {
    this._Form = this.formBuilder.group({
      name: ['', Validators.required],
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this._Form.invalid) {
      return;
    }

    let actor = {
      name: this._Form.controls.name.value,
    }
    this.apiService.createActor(actor).subscribe(resp => {
      console.log(resp)
    }, err => {
      console.log(err)
    })
  }

  get f() { return this._Form.controls; }

}
