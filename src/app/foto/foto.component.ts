import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  foto = 'https://cdn.pixabay.com/photo/2020/07/04/06/41/clouds-5368444__340.jpg';
  foto2 = 'https://cdn.pixabay.com/photo/2020/11/14/13/29/tidal-5741708__340.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
