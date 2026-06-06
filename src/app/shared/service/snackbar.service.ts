import { Inject, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";










@Injectable({
    providedIn : 'root'
})
export class SnackbarService{


    constructor(private snackbar : MatSnackBar){}
    openSnackbar(msg : string){
        this.snackbar.open(msg , 'Close' ,{
            horizontalPosition :'center',
            verticalPosition :'bottom',
            duration  : 3000
        })
    }

}