import { Injectable } from '@angular/core';
import { Info } from './info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  infoDetail: Info[];

  constructor() {

    this.infoDetail = [
      {
        id: 1, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 2, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 3, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 4, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 5, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 6, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 7, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 8, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 9, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 10, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 11, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 12, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 13, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 14, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 15, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 16, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 17, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 18, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 19, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 20, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
    ];

   }

   getAllInfo(): Info[] {
      return this.infoDetail;
   }

}
