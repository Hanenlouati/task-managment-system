import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal'; // importer la bibliothèque ScrollReveal

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const sr = ScrollReveal({
      distance: '65px',
      duration: 2600,
      delay: 450,
      reset: true
    });
    sr.reveal('.home-text', { delay: 150, origin: 'left' }); 
    sr.reveal('.home-img', { delay: 150, origin: 'right' }); 
    
  }

}