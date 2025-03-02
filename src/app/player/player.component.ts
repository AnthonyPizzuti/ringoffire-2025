import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {

  @Input() name: string = '';
  @Input() image: string = 'avatar-man.png';
  @Input() playerActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
