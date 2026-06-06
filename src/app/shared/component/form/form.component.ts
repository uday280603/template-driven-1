import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  genderArr = ['Male','Female','Others'];
  selectedGender = 'Male';
  courseArr = ['Java','Spring Boot', 'Sql' , 'Angular','HTML','Css','JavaScript','TypeScript'];
  acceptedTerms  : boolean= false;




  constructor(private _snackbar : SnackbarService) { }

  ngOnInit(): void {
  }



  @ViewChild('signUpForm') signUpForm !: NgForm;

  onAddStudent(){
    if(this.signUpForm.valid){
      console.log("Form is Valid..!");
      this._snackbar.openSnackbar('FORM IS VALID..!!!');
      this.signUpForm.reset()
      

    }
    
  }

}
