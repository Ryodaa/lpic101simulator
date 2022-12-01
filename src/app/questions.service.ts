import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions!: Question[]

  constructor() {

    this.questions = [

      // types: typeIn, single, multi
  
      {
        id: 1,
        question: 'Which command is used to set the hostname of the local system? (Specify only the command without any path or parameters.)',
        answers: ['hostname'],
        type: 'typeIn',
        solution: ['hostname']
      },
      {
        id: 2,
        question: 'Which of the following is a valid IPv6 address?',
        answers: ['2001:db8:0g21::1', '2001::db8:4581::1', '2001:db8:3241::1', '2001%db8%9990%%1', '2001.db8.819f..1'],
        type: 'single',
        solution: ['2001:db8:3241::1']
      },
      {
        id: 3,
        question: 'What command, depending on its options, can display the open TCP connections, the routing tables, as well as network interface statistics? (Specify only the command without any path or parameters',
        answers: ['netstat'],
        type: 'typeIn',
        solution: ['netstat']
      },
      {
        id: 4,
        question: 'Which command included in NetworkManager is a curses application which provides easy acces to the NetworkManager on the command line? (Specify only the command without any path or parameters.)',
        answers: ['nmtui'],
        type: 'typeIn',
        solution: ['nmtui']
      },
      {
        id: 5,
        question: 'Which of the following tools, used for DNS debugging, reports not only the response from the name sever but also details about the query?',
        answers: ['dnsq', 'hostname', 'dig', 'dnslookup', 'zoneinfo'],
        type: 'single',
        solution: ['dig']
      },
      {
        id: 6,
        question: 'Which of the following statements is valid in the file /etc/nsswitch.conf?',
        answers: ['multi on', '192.168.168.4 dns-server', 'namespaces: net mount procs', 'include /etc/nsswitch.d/', 'hosts: files dns'],
        type: 'single',
        solution: ['hosts: files dns']
      },
      {
        id: 7,
        question: 'Which of the following connection types, as seen in nmcli connection show, may exist in NetworkManager? (Choose three.)',
        answers: ['tcp', 'ethernet', 'wifi', 'ipv6', 'bridge'],
        type: 'multi',
        solution: ['ethernet', 'wifi', 'bridge']
      },
      {
        id: 8,
        question: 'On a Linux workstation, the route command takes a long time before printing out the routing tab. Which of the following errors does that indicate?',
        answers: ['The local routing information may be corrupted and must be re-validated using a routing protocol.', 'One of the routers in the routing table is not available which causes the automatic router failure detection mechanism (ARF-D) to wait for a timeout.', 'There may accidentally be more than one default router in which case a default router election has to be done on the network in order to choose one router as the default.', 'The Linux Kernel Routing Daemon (LKRD) is not running and should be started using its init script or systemd unit.', 'DNS resolution may not be working as route by default tries to resolve names of routers and destinations and may run into a timeout.'],
        type: 'single',
        solution: ['DNS resolution may not be working as route by default tries to resolve names of routers and destinations and may run into a timeout.']
      },
      {
        id: 9,
        question: 'What is true about the Hop Limit field in the IPv6 header?',
        answers: ['The field is not changed during the transport of a package.', 'The field is transmitted within a hop-by-hop extension header.', 'Each router forwarding the packet increases the field\'s value.', 'Each router forwarding the packet decreases the field\'s value.', 'For multicast packages, the field\'s value is always 1.'],
        type: 'single',
        solution: ['Each router forwarding the packet decreases the field\'s value.']
      },
      {
        id: 10,
        question: 'Which of the following nmcli subcommands exist? (Choose two.)',
        answers: ['nmcli ethernet', 'nmcli device', 'nmcli wifi', 'nmcli address', 'nmcli connection'],
        type: 'multi',
        solution: ['nmcli device', 'nmcli connection']
      },
      {
        id: 11,
        question: 'Which of the following changes may occur as a consequence of using the command ip? (Choose three.)',
        answers: ['Network interfaces may become active or inactive.', 'New name servers may be added to the resolver configuration.', 'The system\'s host name may change.', 'IP addresses may change.', 'The routing table may change.'],
        type: 'multi',
        solution: ['Network interfaces may become active or inactive.', 'IP addresses may change.', 'The routing table may change.']
      },
      {
        id: 12,
        question: 'How many IP addresses can be used for unique hosts inside the IPv4 subnet 192.168.2.128/26?',
        answers: ['33', '14', '30', '62', '126'],
        type: 'single',
        solution: ['62']
      },
      {
        id: 13,
        question: 'Which of the following IPv4 networks are reserved by IANA for private address assignment and private routing? (Choose three.)',
        answers: ['10.0.0.0/8', '127.0.0.0/8', '169.255.0.0/16', '172.16.0.0/12', '192.168.0.0/16'],
        type: 'multi',
        solution: ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16']
      },
      {
        id: 14,
        question: 'Which of the following commands configure network interfaces based on the system\'s existing distribution-specific configuration files? (Choose two.)',
        answers: ['ifconf', 'ifdown', 'ifpause', 'ifstart', 'ifup'],
        type: 'multi',
        solution: ['ifdown', 'ifup']
      },
      {
        id: 15,
        question: 'Which of the following statements is true if the UID of a regular user is identical to the GID of a group?',
        answers: ['UID have precedence over GIDs, therefore the user is available while the group doesn\'t.', 'The user as well as the group are not available to avoid ambiguity due to the ID conflict.', 'UIDs and GIDs are independent of each other, therefore the user as well as the group are still available.', 'The user is the only member of the group, even if the group configuration contains other members.', 'GIDs have precedence over UIDs, therefore the group is available while the user isn\'t.',],
        type: 'single',
        solution: ['UIDs and GIDs are independent of each other, therefore the user as well as the group are still available.']
      },
      {
        id: 16,
        question: 'Which of the following information is stored in /etc/shadow for each user?',
        answers: ['The timestamp of the user\'s last login', 'The user\'s private SSH keys', 'The hashed password of the user', 'The numerical user ID (UID)', 'The path to the user\'s home directory'],
        type: 'single',
        solution: ['The hashed password of the user']
      },
      {
        id: 17,
        question: 'Which of the following commands shows all active systemd timers?',
        answers: ['systemctl-timer show', 'imectl list', 'systemctl -t', 'systemctl list-timers', 'timeq'],
        type: 'single',
        solution: ['systemctl list-timers']
      },
      {
        id: 18,
        question: 'Which of the following tasks can the date command accomplish? (Choose two.)',
        answers: ['Set the system\'s date and time.', 'Set the system\'s date but not the time.', 'Calculate the time span between two dates.', 'Print a calendar for a month or a year.', 'Display time in a specific format.'],
        type: 'multi',
        solution: ['Set the system\'s date and time.', 'Display time in a specific format.']
      },
      {
        id: 19,
        question: 'Which file, if present, must contain all users that are allowed to use the cron scheduling system? (Specify the full name of the file, including path.)',
        answers: ['/etc/cron.allow'],
        type: 'typeIn',
        solution: ['/etc/cron.allow']
      },
      {
        id: 20,
        question: 'What can be specified with useradd? (Choose two.)',
        answers: ['Commands the user can run using sudo.', 'The absolute path to the user\'s home directory.', 'Which printers are available for the new user.', 'The SSH keys used to login to the new account.', 'The numeric user ID (UID) of the user.'],
        type: 'multi',
        solution: ['The absolute path to the user\'s home directory.', 'The numeric user ID (UID) of the user.']
      },
    ];

   }


getAll(): Question[] {
  return this.questions;
}


}