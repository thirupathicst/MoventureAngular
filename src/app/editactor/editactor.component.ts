import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIserviceService } from '../apiservice.service';
import { appConstants } from '../app.constants';

@Component({
  selector: 'app-editactor',
  templateUrl: './editactor.component.html',
  styleUrls: ['./editactor.component.css']
})
export class EditactorComponent implements OnInit {
  submitted = false;
  _Form: FormGroup;
  daysOptions = appConstants.days;
  monthsOptions = appConstants.months;
  yearsOptions = appConstants.years;
  statsOptions: any;
  countriesOptions: any;
  constructor(private formBuilder: FormBuilder, private apiService: APIserviceService) { }

  ngOnInit(): void {
    this._Form = this.formBuilder.group({
      name: ['', Validators.required],
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      description: ['', Validators.required],
      genreName: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
    })
  }

  ngAfterViewInit(): void { 
    this.apiService.getStates().subscribe(resp=>{
      this.countriesOptions=resp;
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
