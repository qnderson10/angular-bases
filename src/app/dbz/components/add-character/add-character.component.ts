import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
    id: ''
  };

  emitCharacter():void {
    // debugger;

    console.log(this.character);

    if (this.character.name.length === 0) { return; }

    this.character.id = uuid();

    this.onNewCharacter.emit(this.character);
    this.character = {
      id: '',
      name: '',
      power: 0
    };
  }
}
