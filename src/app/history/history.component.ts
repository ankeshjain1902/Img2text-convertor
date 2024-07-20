import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service'; // Update with your service

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  images: any[] = []; // Array to store uploaded images and data

  constructor(private imageService: ImageService) { } // Update with your service

  ngOnInit(): void {
    this.loadImages(); // Load images on component initialization
  }

  loadImages(): void {
    this.imageService.getImages().subscribe(
      (images) => {
        this.images = images; // Assign retrieved images to the component property
      },
      (error) => {
        console.error('Error fetching images', error);
      }
    );
  }

  copyText(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      // Optionally, you can show a tooltip or notification that the text was copied
      console.log('Text copied to clipboard');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  }
}
