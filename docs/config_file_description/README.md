# Config File Description


Imunify360 config file is available on the following location after installation:

_/etc/sysconfig/imunify360/imunify360.config_

In the config file it is possible to set up Imunify360 configuration. The following options are available:

<table>
<tr>
<th colspan="2" align="left">AUTO_WHITELIST:</th>
</tr>
<tr>
<td width="250px;">timeout: 1440</td><td># set in minutes how long to keep automatically whitelisted IP</td></tr>
<tr><td>after_unblock_timeout: 1440</td><td>
# set in minutes for how long IP will be added to the WhiteList after it passes Imunify360 CAPTCHA</td></tr>
<tr>
<th colspan="2" align="left">DOS:</th>
</tr>
<tr>
<td width="250px;">enabled: false</td><td># allows to enable (true) or disable (false) DOS detection</td></tr>
<tr><td>timeout: 30</td><td># set in minutes how often DOS detection should be launched</td></tr>
<tr><td>max_connections: 250</td><td># set the maximum simultaneous connections before IP will be blocked</td></tr>
<tr>
<th colspan="2" align="left">INCIDENT_LOGGING:</th>
</tr>
<tr>
<td width="250px;">min_log_level: 4</td><td># minimum severity level for incidents displayed in UI. Please find the levels description <a href="/dashboard/#incidents-logging">here</a></td></tr>
<tr><td>num_days: 100</td><td># incidents older than <em>num_days</em> are automatically deleted</td></tr>
<tr><td>limit: 100000</td><td># how many incidents should be stored in Imunify360 log file</td></tr>
<tr><td>ui_autorefresh_timeout: 10</td><td># set auto refresh time for incidents in user interface</td></tr>
<tr>
<th colspan="2" align="left">MOD_SEC_BLOCK_BY_SEVERITY:</th></tr>
 <tr><td>enable: true</td><td># allows to enable or disable option that moves IPs to Gray List if the ModSecurity rule is triggered</td></tr>
<tr><td>max_incidents: 2</td><td># set a number of repeats of the ModSecurity incident from the same IP for adding it to Gray List</td></tr>
<tr><td>denied_num_limit: 2</td>
<td># set a number of repeats of the ModSecurity incidents that got Access Denied error from the same IP for adding it to Gray List</td></tr>
<tr><td>check_period: 120</td>
<td># set a period in seconds during which incident from the same IP will be recorded as a repeat</td></tr>
<tr><td>severity_limit: 2</td>
<td># set a level of severity for DOS detection sensitivity. <a href="/dashboard/#settings">Read more</a> about severity levels</td></tr>
<tr>
<th align="left">MOD_SEC_BLOCK_BY_CUSTOM_RULE:</th><th  align="left"># this section allows to add custom configuration for blocking by ModSecurity incidents</th></tr>
<tr><td>33332:</td>
<td># set ModSecurity rule ID</td></tr>
<tr><td>check_period: 120</td>
<td># set a period in seconds during which incident from the same IP will be recorded as a repeat</td></tr>
<tr><td>max_incidents: 10</td>
<td># set a number of repeats of the ModSecurity incident from the same IP for adding it to Gray List</td></tr>
<tr>
<th colspan="2" align="left">MALWARE_SCANNING:</th></tr>
<tr><td>try_restore_from_backup_first: false</td>
<td># allows to enable (true) or disable (false) automatic malicious file restore from backup if a clean copy exists,
otherwise <em>default_action</em> is applied</td></tr>
<tr><td>default_action: quarantine</td>
<td># default action on malicious file detected.<br>
Available options:
<ul><li>quarantine – do not delete and move to quarantine</li>
<li>notify – do not delete and send email notification</li>
<li>delete – delete malicious file</li></ul></td></tr>
<tr><td>notify_on_detect: false</td>
<td>#  allows to enable (true) or disable (false) email notification if file is detected as infected</td></tr>
<tr><td>enable_scan_inotify: false</td>
<td># enable (true) or disable (false) real-time scanning for modified files using <a href="https://en.wikipedia.org/wiki/Inotify" target="_blank">inotify</a> library</td></tr>
<tr><td>enable_scan_pure_ftpd: true</td>
<td># enable (true) or disable (false) real-time scanning for files uploaded through PureFTPd</td></tr>
<tr><td>enable_scan_modsec: true</td>
<td>#  enable (true) or disable (false) real-time scanning of all the files
that were uploaded via http/https. Note that it requires <a href="https://modsecurity.org" target="_blank">ModSecurity</a> to be installed</td></tr>
<tr>
<th colspan="2" align="left">CAPTCHA:</th></tr>
<tr><td>cert_refresh_timeout: 3600</td>
<td># set in seconds how often SSL certificate will be refreshed</td></tr>
<tr>
<th colspan="2" align="left">ERROR_REPORTING:</th></tr>
<tr><td>enable: true</td>
<td># automatically report errors to imunify360 team</td></tr>
<tr>
<th colspan="2" align="left">SEND_ADDITIONAL_DATA:</th></tr>
<tr><td>enable: true</td>
<td># send anonymized data from query string/post parameters and cookies.</td></tr>
<tr>
<th align="left">NETWORK_INTERFACE:</th>
<th aligh="left"># manages for what network interfaces Imunify360 rules will be applied</th></td>
<tr>
<td>eth_device: null</td>
<td># by default, Imunify360 will auto-configure iptables to filter all traffic. 
If you want iptables rules to be applied to a specific NIC only, list them here (e.g. eth1)</td></tr>
<tr><td>eth6_device: null</td>
<td># it is the same as <em>eth_device</em>, but configures ip6tables to use specific device</td></tr>
<tr><td>eth_device_skip: []</td>
<td># if you don't want iptables\ip6tables rules to be applied to specific NICs, list them here (e.g [eth1, eth2])</td></tr>
<tr>
<th colspan="2" align="left">BACKUP_RESTORE:</th></tr>
<tr><td>max_days_in_backup: 90</td>
<td># restore from backup files that are not older than <em>max_days_in_backup</em></td></tr>
<tr><td>cl_backup_allowed: true</td>
<td># show CloudLinux Backup in the list of available backup system (true) or hide it (false)</td></tr>
<tr>
<th colspan="2" align="left">CAPTCHA_DOS:</th></tr>
<tr><td>enabled: true</td>
<td># enable (true) or disable (false) CAPTCHA Dos protection</td></tr>
<tr><td>time_frame: 21600</td>
<td># set a period in seconds during which requests to CAPTCHA from the same IP
will be recorded as repeated</td></tr>
<tr><td>max_count: 100</td>
<td># set the maximum number of repeated CAPTCHA requests after which IP is moved
to the CAPTCHA Dos list without an ability to request CAPTCHA again</td></tr>
<tr><td>timeout: 864000</td>
<td># set in seconds the time on which to add the IP in CAPTCHA Dos list without an ability
to request CAPTCHA again</td></tr>
<tr>
<th colspan="2" align="left">BLOCKED_PORTS:</th></tr>
<tr><td>default_mode: allowed</td>
<td># defines the default state of ports which is not explicitly set by user (<em>denied</em> by default or <em>allowed</em> by default). Currently only <em>allowed</em> is supported</td></tr>
 
 </table>
