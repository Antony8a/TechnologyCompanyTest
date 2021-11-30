import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image';
import { ImageService } from '../sevices/image.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  image: Image;
  images: Image[];
  busqueda: string;
  photo: string = "";
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {

  }

  getImages(busqueda: string) {

    this.imageService.get(busqueda).subscribe(result => {
      this.images = result["hits"];
    })

  }

  viewPhoto(photo: string) {
    this.photo = photo;
  }

  getCategory(category:string){
    this.imageService.getCategory(category).subscribe(result =>{
      this.images = result["hits"]
    })
  }




}
