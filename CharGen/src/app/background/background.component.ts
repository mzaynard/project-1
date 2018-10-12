import { Component, OnInit } from '@angular/core';
import { CharDataComponent } from '../char-data/char-data.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})

@NgModule({
  declarations: [],
  imports: [
    CharDataComponent,
    NgModule
  ],
  providers: [],
})

export class BackgroundComponent implements OnInit {
  Splats = ['Human','Vampire','Werewolf','Mage'];
  Virtues = ['Charity', 'Faith', 'Fortitude', 'Hope', 'Justice', 'Prudence', 'Temperance'];
  Vices = ['Envy', 'Gluttony', 'Greed', 'Lust', 'Pride', 'Sloth', 'Wrath'];
  Skills = ['Academics', 'Computer', 'Crafts', 'Investigation', 'Medicine', 'Occult', 'Politics', 'Science', 'Athletics', 'Brawl', 'Drive', 'Firearms', 'Larceny', 'Stealth', 'Survival', 'Weaponry', 'Animal Ken', 'Empathy', 'Expression', 'Intimidation', 'Persuasion', 'Socialize', 'Streetwise', 'Subterfuge'];
  constructor() { }

  ngOnInit() {
  }

}

let character = new CharDataComponent();
