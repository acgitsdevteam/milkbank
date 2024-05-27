import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  list: any = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    {
      this.list = [
        {
          images: [
            '/assets/images/Milk Bank photos/mahi.jpg',
            '/assets/images/Milk Bank photos/IMG_20200203_150027.jpg',
            '/assets/images/Milk Bank photos/IMG_20180416_154251.jpg',
            '/assets/images/Milk Bank photos/IMG_20200131_122031.jpg',
            '/assets/images/Milk Bank photos/baby.jpg',
          ],
          name: 'Support Preterm Baby',
          category: 'baby',
        },
        {
          images: [
            '/assets/images/Milk Bank photos/IMG_20171002_095903.jpg',
            '/assets/images/Milk Bank photos/IMG_20171011_124725.jpg',
            '/assets/images/Milk Bank photos/IMG_20171011_163537.jpg',
          ],
          name: 'Support Lactating Mother',
          category: 'mother',
        },
        {
          images: [
            '/assets/images/support both/IMG_20191209_132455.jpg',
            '/assets/images/support both/IMG_20191213_151242.jpg',
            '/assets/images/support both/IMG_20200228_175221.jpg',
          ],
          name: 'Support Both',
          category: 'both',
        },
      ];
    }
  }

  navigate() {
    this.router.navigateByUrl('/access/login');
  }
}
