import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss'],
})
export class EditPlayerComponent implements OnInit {
  allProfilePictures = [
    'avatar-man.png',
    'avatar-woman.png',
    'avatar-man-bard.png',
    'avatar-woman-brown.png',
  ];

  DELETE = 'DELETE';

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) {}

  ngOnInit(): void {}
}
