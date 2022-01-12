import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string;
    date: string;
    amount: number;
    height: number;

    onHeightChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.height = parseFloat(target.value);
    }

    onNameChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.name = target.value;
    }

    onDateChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.date = target.value;
    }

    onAmountChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.amount = parseFloat(target.value);
    }
}
