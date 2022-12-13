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
      {
        id: 21, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 22, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 23, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 24, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 25, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 26, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 27, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 28, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 29, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 30, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 31, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 32, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 33, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 34, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 35, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 36, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 37, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 38, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 39, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 40, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 41, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 42, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 43, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 44, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 45, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 46, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 47, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 48, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 49, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 50, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 51, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 52, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 53, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 54, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 55, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 56, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 57, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 58, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 59, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 60, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 61, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 62, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 63, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 64, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 65, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 66, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 67, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 68, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 69, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 70, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 71, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 72, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 73, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 74, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 75, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 76, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 77, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 78, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 79,
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 80, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 81, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 82, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 83, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 84, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 85, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 86, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 87, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 88, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 89, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 90, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 91, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 92, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 93, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 94, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 95, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 96, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 97, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 98, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 99, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 100, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 101, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 102, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 103, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 104, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 105, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 106, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 107, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 108, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 109, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 110, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 111, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 112, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 113, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 114, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 115, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 116, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 117, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 118, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 119, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 120, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      }
    ];

   }

   getAllInfo(): Info[] {
      return this.infoDetail;
   }

}
