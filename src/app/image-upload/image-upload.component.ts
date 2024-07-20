import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  selectedFile: File | null = null;
  uploadedImage: any = null;
  isLoading = false;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      this.isLoading = true;
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      this.imageService.uploadImage(formData).subscribe(
        (response) => {
          console.log('Image uploaded successfully', response);
          this.uploadedImage = response;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error uploading image', error);
          this.isLoading = false;
        }
      );
    }
  }

  copyText() {
    const textToCopy = this.uploadedImage.extractedText;
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Text copied to clipboard');
  }
}
