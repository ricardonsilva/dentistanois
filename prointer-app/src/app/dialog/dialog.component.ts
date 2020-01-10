import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: 'dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

      
    }

    ngOnInit() {
  
    }

    save() {
        this.dialogRef.close(this);
    }

    close() {
        this.dialogRef.close();
    }
}
