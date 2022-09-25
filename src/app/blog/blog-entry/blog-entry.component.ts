import { Component, OnInit } from '@angular/core';

import { Entry } from '../../interfaces';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})

export class BlogEntryComponent implements OnInit {

  blogEntrys: Entry[] = [];

  constructor() { }

  ngOnInit(): void {
    this.blogEntrys = [
      {
        img: '../../../assets/img/news-110x110-1.jpg',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at lectus. Facilisis sed odio morbi quis commodo. Molestie ac feugiat sed lectus vestibulum. Mollis aliquam ut porttitor leo. Arcu bibendum at varius',
        autor: 'John Doe',
        autoImg: '../../../assets/img/user.jpg'
      },
      {
        img: '../../../assets/img/news-110x110-2.jpg',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at lectus. Facilisis sed odio morbi quis commodo. Molestie ac feugiat sed lectus vestibulum. Mollis aliquam ut porttitor leo. Arcu bibendum at varius',
        autor: 'John Doe',
        autoImg: '../../../assets/img/user.jpg'
      },
      {
        img: '../../../assets/img/news-110x110-3.jpg',
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at lectus. Facilisis sed odio morbi quis commodo. Molestie ac feugiat sed lectus vestibulum. Mollis aliquam ut porttitor leo. Arcu bibendum at varius',
        autor: 'John Doe',
        autoImg: '../../../assets/img/user.jpg'
      },
      {
        img: '../../../assets/img/news-110x110-4.jpg',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at lectus. Facilisis sed odio morbi quis commodo. Molestie ac feugiat sed lectus vestibulum. Mollis aliquam ut porttitor leo. Arcu bibendum at varius',
        autor: 'John Doe',
        autoImg: '../../../assets/img/user.jpg'
      }
    ]
  }
}
