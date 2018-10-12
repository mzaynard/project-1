import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-data',
  templateUrl: './char-data.component.html',
  styleUrls: ['./char-data.component.css']
})

export class CharDataComponent implements OnInit {




  constructor(
    name: string = null,
    concept: string = null,
    age: number = null,
    splat: string = null,
    virtue: string = null,
    vice: string = null,
    intelligence: number = null,
    wits: number = null,
    resolve: number = null,
    strength: number = null,
    dexterity: number = null,
    stamina: number = null,
    presence: number = null,
    manipulation: number = null,
    composure: number = null,
    skills: string = null,
    specialties: string = null,
    merits: string = null,
    health: number = null,
    willpower: number = null,
    moralityType: string = null,
    morality: number = null,
    size: number = null,
    speed: number = null,
    initMod: number = null,
    defense: number = null
  ) { }

  ngOnInit() {
  }



}
