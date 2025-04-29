import { Component } from '@angular/core';

@Component({
  selector: 'app-plus-value',
  templateUrl: './plus-value.component.html',
  styleUrls: ['./plus-value.component.css']
})
export class PlusValueComponent {
  products = [
    {
      image: 'path_to_image1.jpg',
      name: 'PC Portable HP 15',
      price: '999,000',
      available: true
    },
    {
      image: 'path_to_image2.jpg',
      name: 'Kit Ruban LED RGB',
      price: '34,000',
      available: true
    },
    {
      image: 'path_to_image3.jpg',
      name: 'Manette sans fil PS5',
      price: '789,000',
      available: false
    },
    {
      image: 'path_to_image3.jpg', // Remplacez par le nom de votre image
      name: 'DELL VOSTRO 3520',
      price: '959,000',
      available: true
    }
  ];
}
