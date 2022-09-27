import { Component } from "@angular/core"

@Component({
    selector: "card-app",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"]
})

export class CardComponent {
    title = "first card";
    i:number | null = null
}