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
      {
        id: 21,
        question: 'What is true about the file /etc/localtime?',
        answers: ['It is a plain text file containing a string such as Europe/Berlin', 'It is created and maintained by the NTP service based on the location of the system\'s IP address.', 'It is a symlink to /sys/device/clock/ltime and always contains the current local time.', 'After changing this file, newtzconfighas to be run to make the changes effective.', 'E. It is either a symlink to or a copy of a timezone information file such as /usr/share/zoneinfo/Europe/Berlin.'],
        type: 'single',
        solution: ['It is either a symlink to or a copy of a timezone information file such as /usr/share/zoneinfo/Europe/Berlin.']
      },
      {
        id: 22,
        question: 'Which of the following statements is true regarding systemd timer units?',
        answers: ['Timer units can only be defined within a service unit\'s file.', 'The command executed by the timer is specified in the timer unit\'s [Cmd] section.', 'A dedicated system service, systemd-cron, handles the execution of timer units.', 'Timer units only exist in the system scope and are not available for users.', 'Each systemd timer unit controls a specific systemd service unit.'],
        type: 'single',
        solution: ['Each systemd timer unit controls a specific systemd service unit.']
      },
      {
        id: 23,
        question: 'Which of the following fields are available in the standard format of both the global /etc/crontab file as well as in user-specific crontab files? (Choose two.)',
        answers: ['Year', 'Minute', 'Username', 'Effective group ID', 'Command'],
        type: 'multi',
        solution: ['Minute', 'Command']
      },
      {
        id: 24,
        question: 'Which of the following commands should be executed when starting a login shell in order to change the language of messages for an internationalized program to Portuguese (pt)?',
        answers: ['export LANGUAGE=“pt"', 'export LC_MESSAGES=“pt"', 'export UI_MESSAGES=“pt"', 'export MESSAGE=“pt"', 'export ALL_MESSAGES=“pt"'],
        type: 'single',
        solution: ['export LC_MESSAGES=“pt"']
      },
      {
        id: 25,
        question: 'Which of the following files assigns a user to its primary group?',
        answers: ['/etc/pgroup', '/etc/shadow', '/etc/passwd', '/etc/group', '/etc/gshadow'],
        type: 'single',
        solution: ['/etc/passwd']
      },
      {
        id: 26,
        question: 'Which of the following steps prevents a user from obtaining an interactive login session?',
        answers: ['Setting the UID for the user to 0.', 'Running the command chsh -s /bin/false with the user name.', 'Removing the user from the group staff.', 'Adding the user to /etc/noaccess.', 'Creating a .nologin file in the user\'s home directory.'],
        type: 'single',
        solution: ['Running the command chsh -s /bin/false with the user name.']
      },
      {
        id: 27,
        question: 'Which command included in systemd supports selecting messages from the systemd journal by criteria such as time or unit name? (Specify only the command without any path or parameters.)',
        answers: ['journalctl'],
        type: 'typeIn',
        solution: ['journalctl']
      },
      {
        id: 28,
        question: 'Which of the following statements about systemd-journald are true? (Choose three.)',
        answers: ['It is incompatible with syslog and cannot be installed on a system using regular syslog.', 'It only processes messages of systemd and not messages of any other tools.', 'It can pass log messages to syslog for further processing.', 'It maintains metadata such as _UID or _PID for each message.', 'It supports syslog facilities such as kern, user, and auth.'],
        type: 'multi',
        solution: ['It can pass log messages to syslog for further processing.', 'It maintains metadata such as _UID or _PID for each message.', 'It supports syslog facilities such as kern, user, and auth.']
      },
      {
        id: 29,
        question: 'Which command must be run after adding a new email alias to the configuration in order to make this change effective? (Specify the command without any path but including all required parameters.)',
        answers: ['newaliases'],
        type: 'typeIn',
        solution: ['newaliases']
      },
      {
        id: 30,
        question: 'Which option in the chrony configuration file changes the initial interval of polls to a NTP server in order to speed up the initial synchronization?',
        answers: ['iburst', 'quickstart', 'fast', 'fsync', 'flood'],
        type: 'single',
        solution: ['iburst']
      },
      {
        id: 31,
        question: 'Which of the following commands is used to rotate, compress, and mail system logs?',
        answers: ['logrotate', 'striplog', 'syslogd --rotate', 'rotatelog', 'logger'],
        type: 'single',
        solution: ['logrotate']
      },
      {
        id: 32,
        question: 'Why is the correct configuration of a system\'s time zone important?',
        answers: ['Because the timezone is included in checksum calculations and timezone changes invalidate existing checksums.', 'Because the time zone is saved as part of the modification times of files and cannot be changed after a file is created.', 'Because the environment variables LANG and LC_MESSAGES are, by default, set according to the time zone.', 'Because NTP chooses servers nearby based on the configured time zone.', 'Because the conversion of Unix timestamps to local time relies on the time zone configuration.'],
        type: 'single',
        solution: ['Because the conversion of Unix timestamps to local time relies on the time zone configuration.']
      },
      {
        id: 33,
        question: 'Which command, available with all sendmail-compatible MTAs, is used to list the contents of the MTA\'s mail queue? (Specify only the command without any path or parameters.)',
        answers: ['mailq'],
        type: 'typeIn',
        solution: ['mailq']
      },
      {
        id: 34,
        question: 'What is the top-level directory which contains the configuration files for CUPS? (Specify the full path to the directory.)',
        answers: ['/etc/cups'],
        type: 'typeIn',
        solution: ['/etc/cups']
      },
      {
        id: 35,
        question: 'Which of the following commands lists all queued print jobs?',
        answers: ['lpd', 'lpr', 'lp', 'lsq', 'lpq'],
        type: 'single',
        solution: ['lpq']
      },
      {
        id: 36,
        question: 'Which of the following entries in /etc/syslog.conf writes all mail related events to the file /var/log/maillog and sends all critical events to the remote server logger.example.com?',
        answers: ['mail.* /var/log/maillog \\n mail,crit @logger.example.org', 'mail.* /var/log/maillog \\n mail.crit syslog://logger.example.org', 'mail /var/log/maillog \\n mail.crit @logger.example.org', 'mail.* /var/log/maillog \\n mail.crit @logger.example.org', 'mail * /var/log/maillog \\n mail crit @logger.example.org'],
        type: 'single',
        solution: ['mail.* /var/log/maillog \\n mail.crit @logger.example.org']
      },
      {
        id: 37,
        question: 'Which option in the /etc/ntp.conf file specifies an external NTP source to be queried for time information? (Specify only the option without any values or parameters.)',
        answers: ['server'],
        type: 'typeIn',
        solution: ['server']
      },
      {
        id: 38,
        question: 'Which of the following protocols is related to the term open relay?',
        answers: ['SMTP', 'POP3', 'NTP', 'IMAP', 'LDAP'],
        type: 'single',
        solution: ['SMTP']
      },
      {
        id: 39,
        question: 'Which of the following commands displays all environment and shell variables?',
        answers: ['getargs', 'lsenv', 'ls', 'env', 'lsshell'],
        type: 'single',
        solution: ['env']
      },
      {
        id: 40,
        question: 'Which of the following comparison operators for test work on elements in the file system? (Choose two.)',
        answers: ['-z', '-eq', '-d', '-f', '-lt'],
        type: 'multi',
        solution: ['-d', '-f']
      }
    ];

   }


getAll(): Question[] {
  return this.questions;
}


}