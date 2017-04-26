import {Component, ViewEncapsulation, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SelectModule} from 'ng2-select';
@Component({
  selector: 'about',
  template: `
    <div style="width: 300px; margin-bottom: 20px;">
      <h3>Select multiple cities</h3>
      <ng-select [multiple]="true"
                 [items]="items"
                 [disabled]="disabled"
                 (data)="refreshValue($event)"
                 (selected)="selected($event)"
                 (removed)="removed($event)"
                 placeholder="No city selected"></ng-select>
      <pre>{{itemsToString(value)}}</pre>
      <div>
        <button type="button" class="btn btn-primary"
                [(ngModel)]="disabledV" btnCheckbox
                btnCheckboxTrue="1" btnCheckboxFalse="0">
          {{disabled === '1' ? 'Enable' : 'Disable'}}
        </button>
      </div>
    </div>

    <!--<app-tinymce [(ngModel)]='content'></app-tinymce>-->
    <!--<pre>{{content}}</pre>-->
  `,
  encapsulation: ViewEncapsulation.None
})

export class BlogPostComponent {
  @Input() content: string = 'viet';
//   public @Input content: string = '<h1>Hello, world!</h1>';
//   public contentControl: FormControl = new FormControl(
//     `<h2>Advantages</h2>
// <ul>
// 	<li>Works nice with both ngModel and formControl</li>
// 	<li>Updates on change and keyup</li>
// 	<li>More features in future</li>
// </ul>`);
  public items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
    'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
    'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
    'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
    'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
    'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
    'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

  private value: any = ['Athens'];
  private _disabledV: string = '0';
  private disabled: boolean = false;

  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }

  public itemsToString(value: Array<any> = []): string {
    return value
      .map((item: any) => {
        return item.text;
      }).join(',');
  }

  constructor() {

    let newData: Array<any> = [];
    let defaultTiming = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00"];

    let timing: any = {
      time: ""
    }
    newData = defaultTiming.map(t => ({time: t}));
    // for (let x in defaultTiming) {
    //   timing.time = (typeof defaultTiming[x] != 'undefined') ? defaultTiming[x] : undefined;
    //   newData.push(timing);
    // }
    console.log(newData)

  }

}
