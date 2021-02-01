import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-confirm-delete',
  templateUrl: './alert-confirm-delete.component.html',
  styleUrls: ['./alert-confirm-delete.component.css']
})
export class AlertConfirmDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AlertConfirmDeleteComponent>,
  ) { }

  ngOnInit(): void {
  }
  cancelar(): void {
    this.dialogRef.close();
  }

}
