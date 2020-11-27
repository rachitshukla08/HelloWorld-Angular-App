import { Component } from '@angular/core';

@Component({
  //Selector is a unique ID for an app component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "";
  ngOnInit() : void{
    this.title = 'Hello from BridgeLabz.'
    this.imgUrl = "../assets/BridgeLabz.jpg"
  }
}
