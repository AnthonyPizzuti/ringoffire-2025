import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addDoc, doc, Firestore } from '@angular/fire/firestore';
import { collection, setDoc } from '@angular/fire/firestore';
import { Game } from 'src/models/game';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent implements OnInit {
  constructor(private router: Router, private fireStore: AngularFirestore) {}

  ngOnInit(): void {}

  newGame() {
    // Start game
    let game = new Game();
    this.fireStore
      .collection('games')
      .add(game.toJson())
      .then((gameInfo: any) => {
        this.router.navigateByUrl('/game/' + gameInfo.id);
      });
  }
}
