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
  url;

  ngOnInit() : void{
    this.title = 'Hello from BridgeLabz.';
    this.imgUrl = "../assets/BridgeLabz.jpg";
    this.url = "https://www.bridgelabz.com";
  }

  onClick($event){
    console.log("Save button is clicked!",$event);
    window.open(this.url,"_blank");
  }
}
