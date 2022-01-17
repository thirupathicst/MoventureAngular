import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIserviceService } from '../apiservice.service';

@Component({
  selector: 'app-geners',
  templateUrl: './geners.component.html',
  styleUrls: ['./geners.component.css']
})
export class GenersComponent implements OnInit {

  submitted = false;
  _Form: FormGroup;
  actor: any;
  constructor(private formBuilder: FormBuilder, private apiService: APIserviceService) { }

  ngOnInit(): void {
    this._Form = this.formBuilder.group({
      genreName: ['', Validators.required],
    })
  }

  ngAfterViewInit(): void {
    this.apiService.getGenres().subscribe(resp => {
      this.actor = resp;
      console.log(this.actor)
    }, err => {
      console.log(err)

    })
  }


  onSubmit() {
    this.submitted = true;

    if (this._Form.invalid) {
      return;
    }

    let genres = {
      name: this._Form.controls.genreName.value
    }

    this.apiService.createGenres(genres).subscribe(resp => {
      this._Form.reset();
    }, err => {
      console.log(err)

    })
  }

  onClick(option:string,Id:number) {
    alert(JSON.stringify( {option,Id}))
  }

  get f() { return this._Form.controls; }
}
