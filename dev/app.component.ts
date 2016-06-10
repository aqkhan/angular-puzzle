import {Component} from 'angular2/core';
import {PuzzleComponent} from "./puzzle/puzzle.component";

@Component({
    selector: 'aqk-app',
    template: `
        <aqk-puzzle></aqk-puzzle>
    `,
    directives: [PuzzleComponent]
})
export class AppComponent {

}