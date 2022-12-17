import { Injectable } from '@angular/core';
import { Info } from '../#interfaces/info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  infoDetail: Info[];

  constructor() {

    this.infoDetail = [
      {
        id: 1, 
        info: `The Linux hostname command is used to view or change a system’s domain and hostname. 
        It can also check a computer’s IP address.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/hostname.1.html')
      },
      {
        id: 2, 
        info: `Omit leading zeros:
        Specify IPv6 addresses by omitting leading zeros. 
        For example, IPv6 address 1050:0000:0000:0000:0005:0600:300c:326b can be written as 1050:0:0:0:5:600:300c:326b.
        Double colon:
        Specify IPv6 addresses by using double colons (::) in place of a series of zeros. For example, IPv6 address ff06:0:0:0:0:0:0:c3 can be written as ff06::c3. 
        Double colons can be used only once in an IP address.`, 
        link: new URL('https://www.man7.org/linux/man-pages/man7/ipv6.7.html')
      },
      {
        id: 3, 
        info: `Netstat prints information about the Linux networking subsystem.`, 
        link: new URL('https://man7.org/linux/man-pages/man8/netstat.8.html')
      },
      {
        id: 4, 
        info: `Nmtui is a terminal application which lets you manage your Wi-Fi connections on Linux distributions that use NetworkManager. 
        It exposes most of the functionality of the Nmcli CLI in a basic graphical interface. 
        Nmtui is short for Network Manager Text User Interface.`, 
        link: new URL('https://man7.org/linux/man-pages/man1/nm.1.html')
      },
      {
        id: 5, 
        info: `dig (domain information groper) is a flexible tool for interrogating DNS name servers. 
        It performs DNS lookups and displays the answers that are returned from the name server(s) that were queried. 
        Most DNS administrators use dig to troubleshoot DNS problems because of its flexibility, ease of use and clarity of output. 
        Other lookup tools tend to have less functionality than dig.`, 
        link: new URL('https://linux.die.net/man/1/dig')
      },
      {
        id: 6, 
        info: `The Name Service Switch (NSS) configuration file,
        /etc/nsswitch.conf, is used by the GNU C Library and certain
        other applications to determine the sources from which to obtain
        name-service information in a range of categories, and in what
        order.
        Each category of information is identified by a database name.`, 
        link: new URL('https://man7.org/linux/man-pages/man5/nsswitch.conf.5.html')
      },
      {
        id: 7, 
        info: `nmcli is a command-line tool for controlling NetworkManager and getting its status. 
        It is not meant as a replacement of nm-applet or other similar clients. 
        Rather it's a complementary utility to these programs. 
        The main nmcli's usage is on servers, headless machines or just for power users who prefer the command line.`, 
        link: new URL('https://linux.die.net/man/1/nmcli')
      },
      {
        id: 8, 
        info: `DNS resolution may not be working as route by default tries to resolve names of routers and destinations and may run into a timeout.`, 
        link: new URL('https://man7.org/linux/man-pages/man8/route.8.html')
      },
      {
        id: 9, 
        info: `Hop Limit – Indicates the maximum number of links over which the IPv6 packet can travel before being discarded. 
        The size of this field is 8 bits. 
        The Hop Limit is similar to the IPv4 TTL field except that there is no historical relation to the amount of time (in seconds) that the packet is queued at the router.`, 
        link: new URL('https://man7.org/linux/man-pages/man7/ipv6.7.html')
      },
      {
        id: 10, 
        info: `nmcli is a command-line tool for controlling NetworkManager and getting its status. 
        It is not meant as a replacement of nm-applet or other similar clients. 
        Rather it's a complementary utility to these programs. 
        The main nmcli's usage is on servers, headless machines or just for power users who prefer the command line`, 
        link: new URL('https://linux.die.net/man/1/nmcli')
      },
      {
        id: 11, 
        info: `ip - show / manipulate routing, network devices, interfaces and
        tunnels`, 
        link: new URL('https://man7.org/linux/man-pages/man8/ip.8.html')
      },
      {
        id: 12, 
        info: `Subnetting is the process of taking a network and splitting it into smaller networks, known as subnets. 
        It's used to free up more public IPv4 addresses and segment networks for security and easier management.`, 
        link: new URL('https://man7.org/linux/man-pages/man7/ip.7.html')
      },
      {
        id: 13, 
        info: `In the Internet addressing architecture, the Internet Engineering Task Force (IETF) and the Internet Assigned Numbers Authority (IANA) have reserved various Internet Protocol (IP) addresses for special purposes.`, 
        link: new URL('https://www.iana.org/assignments/iana-ipv4-special-registry/iana-ipv4-special-registry.xhtml')
      },
      {
        id: 14, 
        info: `Ifup activates a network interface, making it available to transmit and receive data.
        The ifdown command disables a network interface, placing it in a state where it cannot transmit or receive data.`, 
        link: new URL('https://man7.org/linux/man-pages/man8/ifconfig.8.html')
      },
      {
        id: 15, 
        info: `UID is a number associated with a user account and GID is a number associated with a group`, 
        link: new URL('https://man7.org/linux/man-pages/man1/id.1.html')
      },
      {
        id: 16, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 17, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 18, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 19, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 20, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 21, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 22, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 23, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 24, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 25, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 26, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 27, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 28, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 29, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 30, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 31, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 32, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 33, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 34, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 35, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 36, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 37, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 38, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 39, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 40, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 41, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 42, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 43, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 44, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 45, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 46, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 47, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 48, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 49, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 50, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 51, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 52, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 53, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 54, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 55, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 56, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 57, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 58, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 59, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 60, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 61, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 62, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 63, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 64, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 65, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 66, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 67, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 68, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 69, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 70, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 71, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 72, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 73, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 74, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 75, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 76, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 77, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 78, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 79,
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 80, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 81, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 82, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 83, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 84, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 85, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 86, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 87, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 88, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 89, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 90, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 91, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 92, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 93, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 94, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 95, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 96, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 97, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 98, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 99, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 100, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 101, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 102, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 103, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 104, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 105, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 106, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 107, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 108, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 109, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 110, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 111, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 112, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 113, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 114, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 115, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 116, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 117, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 118, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 119, 
        info: ``, 
        link: new URL('https://google.de')
      },
      {
        id: 120, 
        info: ``, 
        link: new URL('https://google.de')
      }
    ];

   }

   getAllInfo(): Info[] {
      return this.infoDetail;
   }

}
