import { Injectable } from '@angular/core';
import { Question } from '../#interfaces/question'; 

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
        question: 'What command, depending on its options, can display the open TCP connections, the routing tables, as well as network interface statistics? (Specify only the command without any path or parameters)',
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
      },
      {
        id: 41,
        question: 'What information is provided by the echo $$ command?',
        answers: ['The process ID of the current shell.', 'The process ID for the following command.', 'The process ID of the last command executed.', 'he process ID of the last command which has been placed in the background.', 'The process ID of the echo command.'],
        type: 'single',
        solution: ['The process ID of the current shell.']
      },
      {
        id: 42,
        question: 'Which command makes the shell variable named VARIABLE visible to subshells?',
        answers: ['export $VARIABLE', 'env VARIABLE', 'set $VARIABLE', 'set VARIABLE', 'export VARIABLE'],
        type: 'single',
        solution: ['export VARIABLE']
      },
      {
        id: 43,
        question: 'What output is produced by the following command sequence? echo \'1 2 3 4 5 6\' | while read a b c; do echo result: $c $b $a; done',
        answers: ['result: 6 5 4', 'result: 1 2 3 4 5 6', 'result: 3 4 5 6 2 1', 'result: 6 5 4 3 2 1', 'result: 3 2 1'],
        type: 'single',
        solution: ['result: 3 4 5 6 2 1']
      },
      {
        id: 44,
        question: 'Which of the following configuration files should be modified to globally set shell variables for all users?',
        answers: ['/etc/profile', '/etc/bashrc', '~/.bash_profile', '/etc/.bashrc', '/etc/shellenv'],
        type: 'single',
        solution: ['/etc/profile']
      },
      {
        id: 45,
        question: 'What output does the command seq 10 produce?',
        answers: ['A continuous stream of numbers increasing in increments of 10 until the command is stopped.', 'It creates no output because a second parameter is missing.', 'The number 0 through 9 with one number per line.', 'The number 10 to standard output.', 'The numbers 1 through 10 with one number per line.'],
        type: 'single',
        solution: ['The numbers 1 through 10 with one number per line.']
      },
      {
        id: 46,
        question: 'What command list the aliases defined in the current Bash shell? (Specify only the command without any path or parameters.)',
        answers: ['alias'],
        type: 'typeIn',
        solution: ['alias']
      },
      {
        id: 47,
        question: 'Which of the following commands can be used to limit the amount of memory a user may use?',
        answers: ['umask', 'usermod', 'passwd', 'ulimit', 'chage'],
        type: 'single',
        solution: ['ulimit']
      },
      {
        id: 48,
        question: 'What is a purpose of an SSH host key?',
        answers: ['It must be sent by any SSH client in addition to a user key in order to identify the client\'s host.', 'It is root key by which all user SSH keys must be signed.', 'It provides the server\'s identity information to connecting SSH clients.', 'It authenticates any user that logs into a remote machine from the key\'s host.', 'It is used by system services like cron, syslog or a backup job to automatically connect to remote hosts.'],
        type: 'single',
        solution: ['It provides the server\'s identity information to connecting SSH clients.']
      },
      {
        id: 49,
        question: 'What is the purpose of TCP wrapper?',
        answers: ['Manage and adjust bandwidth used by TCP services.', 'Bind a network service to a TCP port.', 'Encapsulate TCP messages in IP packets.', 'Add SSL support to plain text TCP services.', 'Limit access to a network service.'],
        type: 'single',
        solution: ['Limit access to a network service.']
      },
      {
        id: 50,
        question: 'Given the following excerpt of the sudo configuration: Jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk. - Which of the following statements are true? (Choose three.)',
        answers: ['Jane can run /bin/id only after specifying her password.', 'Jane can run /sbin/fdisk after specifying root\'s password.', 'Jane can run /sbin/fdisk after specifying her password.', 'Jane can run /bin/kill without specifying a password.', 'Jane can run /bin/id without specifying her password.'],
        type: 'multi',
        solution: ['Jane can run /sbin/fdisk after specifying her password.', 'Jane can run /bin/kill without specifying a password.', 'Jane can run /bin/id without specifying her password.']
      },
      {
        id: 51,
        question: 'Which configuration file contains the default options for SSH clients?',
        answers: ['/etc/ssh/sshd_config', '/etc/ssh/ssh', '/etc/ssh/ssh_config', '/etc/ssh/client', '/etc/ssh/ssh_client'],
        type: 'single',
        solution: ['/etc/ssh/ssh_config']
      },
      {
        id: 52,
        question: 'Depending on a system\'s configuration, which of the following files can be used to enable and disable network services running on this host?',
        answers: ['/etc/profile', '/etc/xinetd.conf', '/etc/ports', '/etc/services', '/etc/host.conf'],
        type: 'single',
        solution: ['/etc/xinetd.conf']
      },
      {
        id: 53,
        question: 'Which of the following commands can identify the PID or a process which opened a TCP port?',
        answers: ['ptrace', 'strace', 'debug', 'lsof', 'nessus'],
        type: 'single',
        solution: ['lsof']
      },
      {
        id: 54,
        question: 'When using X11 forwarding in SSH, what environment variable is automatically set in the remote shell in order to help applications to connect to the correct X11 server? (Specify only the environment variable without any additional commands or values.)',
        answers: ['DISPLAY'],
        type: 'typeIn',
        solution: ['DISPLAY']
      },
      {
        id: 55,
        question: 'The presence of what file will temporarily prevent all users except root from logging into a system? (Specify the full name of the file, including path.)',
        answers: ['/etc/nologin'],
        type: 'typeIn',
        solution: ['/etc/nologin']
      },
      {
        id: 56,
        question: 'Which of the following commands preloads and manages existing SSH keys that are used for automatic authentication while logging in to other machines using SSH?',
        answers: ['sshd', 'ssh-keyring', 'ssh-keygen', 'ssh-pki', 'ssh-agent'],
        type: 'single',
        solution: ['ssh-agent']
      },
      {
        id: 57,
        question: 'On a machine running several X servers, how do programs identify the different instances of the X11 server?',
        answers: ['By a fixed UUID that is defined in the X11 configuration file.', 'By a display name like :1 .', 'By the name of the user that runs the X server like x11: bob.', 'By a device name like /dev/X11/xservers/1.', 'By a unique IPv6 address from the fe80::/64subnet.'],
        type: 'single',
        solution: ['By a display name like :1 .']
      },
      {
        id: 58,
        question: 'What is the purpose of a screen reader?',
        answers: ['It manages virtual keyboards on touch screen displays.', 'It reads the parameters of the attached monitors and creates an appropriate X11 configuration.', 'It displays lines and markers to help people use speed reading techniques.', 'It manages and displays files that contain e-books.', 'It reads displayed text to accommodate the needs of blind or visually impaired people.'],
        type: 'single',
        solution: ['It reads displayed text to accommodate the needs of blind or visually impaired people.']
      },
      {
        id: 59,
        question: 'The X11 configuration file xorg.conf is grouped into sections. How is the content of the section SectionName represented?',
        answers: ['It is placed in curly brackets as in Section SectionName {…}.', 'It is placed between the tags <Section name=“SectionName"> and </Section>.', 'It is placed between a line containing Section “SectionName" and a line containing EndSection.', 'It is placed after the row [SectionName].', 'It is placed after an initial unindented Section “SectionName" and must be indented by exactly one tab character.'],
        type: 'single',
        solution: ['It is placed between a line containing Section “SectionName" and a line containing EndSection.']
      },
      {
        id: 60,
        question: 'Which of the following features are provided by SPICE? (Choose two.)',
        answers: ['Connecting local USB devices to remote applications.', 'Accessing graphical applications on a remote host.', 'Replacing Xorg as local X11 server.', 'Downloading and locally installing applications from a remote machine.', 'Uploading and running a binary program on a remote machine.'],
        type: 'multi',
        solution: ['Connecting local USB devices to remote applications.', 'Accessing graphical applications on a remote host.']
      },
      {
        id: 61,
        question: 'Where is the systemd journal stored?',
        answers: ['/var/jlog/and /var/jlogd/', '/proc/log/and /proc/klog/', '/run/log/journal/ or /var/log/journal/', '/var/log/syslog.binor /var/log/syslog.jrn', '/etc/systemd/journal/or /usr/lib/systemd/journal/'],
        type: 'single',
        solution: ['/run/log/journal/ or /var/log/journal/']
      },
      {
        id: 62,
        question: 'Which of the following is true regarding the command sendmail?',
        answers: ['With any MTA, the sendmail command must be run periodically by the cron daemon.', 'When using systemd, sendmail is an alias to relayctl.', 'The sendmail command prints the MTA\'s queue history of which mails have been sent successfully.', 'It is only available when the sendmail MTA is installed.', 'All common MTAs, including Postfix and Exim, provide a sendmail command.'],
        type: 'single',
        solution: ['All common MTAs, including Postfix and Exim, provide a sendmail command.']
      },
      {
        id: 63,
        question: 'Which file inside the CUPS configuration directory contains the settings of the printers?',
        answers: ['cups-devices.conf', 'snmp.conf', 'printers.conf', 'printcap.conf', 'cupsd.conf'],
        type: 'single',
        solution: ['printers.conf']
      },
      {
        id: 64,
        question: 'Which file is processed by newaliases? (Specify the full name of the file, including path.)',
        answers: ['/etc/aliases'],
        type: 'typeIn',
        solution: ['/etc/aliases']
      },
      {
        id: 65,
        question: 'Which of the following are syslog facilities? (Choose two.)',
        answers: ['local5', 'accounting', 'mail', 'postmaster', 'remote'],
        type: 'multi',
        solution: ['local5', 'mail']
      },
      {
        id: 66,
        question: 'Which of the following parameters are used for journalctl to limit the time frame of the output? (Choose two.)',
        answers: ['--since=', '--from=', '--until=', '--upto=', '--date='],
        type: 'multi',
        solution: ['--since=', '--until=']
      },
      {
        id: 67,
        question: 'What is true regarding the file ~/.forward?',
        answers: ['When configured correctly ~/.forward can be used to forward each incoming mail to one or more other recipients.', 'After editing ~/.forward the user must run newaliases to make the mail server aware of the changes.', 'Using ~/.forward, root may configure any email address whereas all other users may configure only their own addresses.', 'As ~/.forward is owned by the MTA and not writable by the user, it must be edited using the editaliases command.', 'By default, only ~/.forward files of users in the group mailq are processed while all other user\'s ~/.forward files are ignored.'],
        type: 'single',
        solution: ['When configured correctly ~/.forward can be used to forward each incoming mail to one or more other recipients.']
      },
      {
        id: 68,
        question: 'Which of the following commands display a list of jobs in the print queue? (Choose two.)',
        answers: ['cups --list', 'lprm -l', 'lpstat', 'lpr -q', 'lpq'],
        type: 'multi',
        solution: ['lpstat', 'lpq']
      },
      {
        id: 69,
        question: 'On a system using systemd-journald, which of the following commands add the message Howdy to the system log? (Choose two.)',
        answers: ['append Howdy', 'logger Howdy', 'systemd-cat echo Howdy', 'echo Howdy > /dev/journal', 'journalctl add Howdy'],
        type: 'multi',
        solution: ['logger Howdy', 'systemd-cat echo Howdy']
      },
      {
        id: 70,
        question: 'Which of the following options in the chrony configuration file define remote time sources? (Choose two.)',
        answers: ['source', 'clock', 'remote', 'pool', 'server'],
        type: 'multi',
        solution: ['pool', 'server']
      },
      {
        id: 71,
        question: 'Which command is used to sync the hardware clock to the system clock? (Specify only the command without any path or parameters.)',
        answers: ['hwclock'],
        type: 'typeIn',
        solution: ['hwclock']
      },
      {
        id: 72,
        question: 'Which of the following situations is observed and corrected by an NTP client?',
        answers: ['The skew in time between the system clock and the computer\'s hardware clock.', 'The physical location and the time zone configuration.', 'Changes in the time zone of the current computer\'s location.', 'Adjustment needed to support Daylight Saving Time.', 'The skew in time between the system clock and the reference clock.'],
        type: 'single',
        solution: ['The skew in time between the system clock and the reference clock.']
      },
      {
        id: 73,
        question: 'If an alias ls exists, which of the following commands updates the alias to point to the command ls -l instead of the alias\'s current target?',
        answers: ['set ls=\'ls -l\'', 'alias ls=\'ls -l\'', 'alias --force ls=\'ls -l\'', 'alias --update ls ls=\'ls -l\'', 'realias ls=\'ls -l\''],
        type: 'single',
        solution: ['alias ls=\'ls -l\'']
      },
      {
        id: 74,
        question: 'Which of the following commands puts the output of the command date into the shell variable mydate?',
        answers: ['mydate="date"', 'mydate="exec date"', 'mydate="$((date))"', 'mydate="$(date)"', 'mydate="${date}"'],
        type: 'single',
        solution: ['mydate="$(date)"']
      },
      {
        id: 75,
        question: 'What information is shown by the echo $? command?',
        answers: ['The process ID of the echo command.', 'The exit value of the command executed immediately before echo.', 'The process ID which will be used for the next command.', 'The exit value of the echo command.', 'The process ID of the current shell.'],
        type: 'single',
        solution: ['The exit value of the command executed immediately before echo.']
      },
      {
        id: 76,
        question: 'Which of the following files is not read directly by a Bash login shell?',
        answers: ['~/.bashrc', '~/.bash_profile', '~/.bash_login', '~/.profile', '/etc/profile'],
        type: 'single',
        solution: ['~/.bashrc']
      },
      {
        id: 77,
        question: 'What is true about the file .profile in a user\'s home directory?',
        answers: ['It must be executable.', 'It must call the binary of the login shell.', 'It must use a valid shell script syntax.', 'It must start with a shebang.', 'It must be readable for its owner only.'],
        type: 'single',
        solution: ['It must use a valid shell script syntax.']
      },
      {
        id: 78,
        question: 'What is true regarding the statement beginning with: #!, that is found in the first line of script? (Choose two.)',
        answers: ['It prevents the scripts from being executed until the ! is removed.', 'It triggers the installation of the script\'s interpreter.', 'It specifies the path and the arguments of the interpreter used to run the script.', 'It defines the character encoding of the script.', 'It is a comment that is ignored by the script interpreter.'],
        type: 'multi',
        solution: ['It specifies the path and the arguments of the interpreter used to run the script.', 'It is a comment that is ignored by the script interpreter.']
      },
      {
        id: 79,
        question: 'What output does the command seq 1 5 20 produce?',
        answers: ['1 5 10 15', '1 6 11 16', '1 2 3 4', '2 3 4 5', '5 10 15 20'],
        type: 'single',
        solution: ['1 6 11 16']
      },
      {
        id: 80,
        question: 'Which of the following commands lists all defines variables and functions within Bash?',
        answers: ['env', 'export', 'env -a', 'set', 'echo $ENV'],
        type: 'single',
        solution: ['set']
      },
      {
        id: 81,
        question: 'What information related to a user account is modified using the chage command?',
        answers: ['Default ownership for new files', 'Group membership', 'Set of commands available to the user', 'Password expiry information', 'Default permissions for new files'],
        type: 'single',
        solution: ['Password expiry information']
      },
      {
        id: 82,
        question: 'Which command is used to set restrictions on the size of a core file that is created for a user when a program crashes?',
        answers: ['core', 'edquota', 'quota', 'ulimit', 'ktrace'],
        type: 'single',
        solution: ['ulimit']
      },
      {
        id: 83,
        question: 'How do shadow passwords improve the password security in comparison to standard no-shadow password?',
        answers: ['Regular users do not have access to the password hashes of shadow passwords.', 'Every shadow password is valid for 45 days and must be changed afterwards.', 'The system\'s host key is used to encrypt all shadow passwords.', 'Shadow passwords are always combined with a public key that has to match the user\'s private key.', 'Shadow passwords are stored in plain text and can be checked for weak passwords.'],
        type: 'single',
        solution: ['Regular users do not have access to the password hashes of shadow passwords.']
      },
      {
        id: 84,
        question: 'After editing the TCP wrapper configuration to grant specific hosts access to a service, when do these changes become effective?',
        answers: ['The new configuration becomes effective after restarting the respective service.', 'The new configuration becomes effective at the next system reboot.', 'The new configuration becomes effective when the last established connection to the service is closed.', 'The new configuration becomes effective after restarting the tcpd service.', 'The new configuration becomes effective immediately for all new connections.'],
        type: 'single',
        solution: ['The new configuration becomes effective immediately for all new connections.']
      },
      {
        id: 85,
        question: 'What is true regarding public and private SSH keys? (Choose two.)',
        answers: ['For each user account, there is exactly one key pair that can be used to log into that account.', 'The private key must never be revealed to anyone.', 'Several different public keys may be generated for the same private key.', 'To maintain the private key\'s confidentiality, the SSH key pair must be created by its owner.', 'To allow remote logins, the user\'s private key must be copied to the remote server.'],
        type: 'multi',
        solution: ['The private key must never be revealed to anyone.', 'To maintain the private key\'s confidentiality, the SSH key pair must be created by its owner.']
      },
      {
        id: 86,
        question: 'Which of the following commands finds all files owned by root that have the SetUID bit set?',
        answers: ['find / -user root -perm -4000', 'find / -user 0 -mode +s', 'find / -owner root -setuid', 'find / -owner 0 -permbits 0x100000000', 'find / --filter uid=1 --filter pers=u+s'],
        type: 'single',
        solution: ['find / -user root -perm -4000']
      },
      {
        id: 87,
        question: 'What command is used to add OpenSSH private keys to a running ssh-agent instance? (Specify the command name only without any path.)',
        answers: ['ssh-add'],
        type: 'typeIn',
        solution: ['ssh-add']
      },
      {
        id: 88,
        question: 'Which directory holds configuration files for xinetd services? (Specify the full path to the directory.)',
        answers: ['/etc/xinetd.d/'],
        type: 'typeIn',
        solution: ['/etc/xinetd.d/']
      },
      {
        id: 89,
        question: 'Which mechanism does ssh use to interact with the SSH agent?',
        answers: ['Connecting to port 2222 which is used by the system-wide SSH agent.', 'Using the fixed socket .ssh-agent/ipc.', 'Creating an alias replacing ssh with calls to ssh-agent.', 'Starting ssh-agent as a child process for each ssh invocation.', 'Evaluating environment variables such as SSH_AUTH_SOCK.'],
        type: 'single',
        solution: ['Evaluating environment variables such as SSH_AUTH_SOCK.']
      },
      {
        id: 90,
        question: 'Which parameter of the ssh command specifies the location of the private key used for login attempts? (Specify only the option name without any values or parameters.)',
        answers: ['-i'],
        type: 'typeIn',
        solution: ['-i']
      },
      {
        id: 91,
        question: 'Which of the following is true about IPv6?',
        answers: ['IPv6 no longer supports broadcast addresses.', 'With IPv6, the TCP port numbers of most services have changed.', 'IPv4 addresses can be used without any change with IPv6.', 'IPv6 no longer supports multicast addresses.', 'For IPv6, UDP and TCP have been replaced by the Rapid Transmission Protocol RTP.'],
        type: 'single',
        solution: ['IPv6 no longer supports broadcast addresses.']
      },
      {
        id: 92,
        question: 'What is true about the following command? "nmcli device wifi connect WIFIoI"',
        answers: ['NetworkManager opens a new public hotspot with the SSID WIFIoI.', 'NetworkManager creates an unconfigured new virtual network interface named WIFIoI.', 'NetworkManager creates a new wifi connection WIFIoI and activates it.', 'NetworkManager returns an error in case the connection WIFIoI does not exist.', 'NetworkManager returns an error because WIFIoI is an invalid wifi device.'],
        type: 'single',
        solution: ['NetworkManager creates a new wifi connection WIFIoI and activates it.']
      },
      {
        id: 93,
        question: `
        Which of the commands below might have produced the following output?\n
        ;; global options: +cmd
        ;; Got answer:
        ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 14368
        ;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1
        
        ;; OPT PSEUDOSECTION:
        ; EDNS: version: 0, flags:; udp: 4096
        ;; QuESTION SECTION:
        ;www.example.org.               IN      NS
        
        ;; AUTHORITY SECTION:
        example.org.            3600    IN      SOA     ns.icann.org. noc.dns.icann.org. 2019121418 7200 3600 1209600 3600
        
        ;; Query time: 96 msec
        ;; SERVER: 172.21.0.9#53(172.21.0.9)
        ;; WHEN: Di Jun 23 13:57:34 CEST 2020
        ;; MSG SIZE  rcvd: 97
        `,
        answers: ['dig -t mx www.example.org', 'dig www.example.org', 'dig -t ns www.example.org', 'dig -t a www.example.org', 'dig -t soa www.example.org'],
        type: 'single',
        solution: ['dig -t ns www.example.org']
      },
      {
        id: 94,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 95,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 96,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 97,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 98,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 99,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 100,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 101,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 102,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 103,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 104,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 105,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 106,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 107,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 108,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 109,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 110,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 111,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 112,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 113,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 114,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 115,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 116,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 117,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 118,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 119,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      },
      {
        id: 120,
        question: '',
        answers: ['', '', '', '', ''],
        type: '',
        solution: ['', '']
      }
    ];

   }


getAll(): Question[] {
  return this.questions;
}


}