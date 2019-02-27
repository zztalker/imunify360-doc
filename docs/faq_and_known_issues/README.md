# FAQ and Known Issues


## Common Questions

### 1. End user IP is blocked and I do not know why

If you use CSF, then try to find the IP in [CSF](/ids_integration/#csf-integration) <span class="notranslate">Allow/Deny</span> Lists using their [documentation and support](https://support.configserver.com/knowledgebase/category/support%20). If not, then do the following:

* Go to cPanel Plugins section, choose Imunify360 and enter the <span class="notranslate">Incidents</span> page.

* Make sure that the IP checkbox at the top of the table is ticked. Enter proper IP or part of IP in the input field and click _Enter_.

  * If the IP was found, then follow instructions on [Incidents page](/dashboard/#incidents) and perform the actions you need, like: add IP to the <span class="notranslate">White List</span> or disable the security rule that has detected this incident.

* If the IP was not found on the Incidents page, then go to Firewall page and using the same way as in the previous step try to find proper IP in <span class="notranslate">Black List</span> or <span class="notranslate">Grey List</span>.

  * If the IP was found then follow this instruction for <span class="notranslate">[Grey List](/dashboard/#firewall)</span> or <span class="notranslate">[Black List](/dashboard/#firewall)</span> and move the IP to the <span class="notranslate">White List</span> or just remove from the <span class="notranslate">Black List</span> or <span class="notranslate">Grey List</span>.

If nothing helps, then [contact our support team](https://cloudlinux.zendesk.com/hc/requests/new).

### 2. Could I disable IPtables (firewall) or OSSEC, when using Imunify360?

No. Imunify360 will not be able to stop an attack without IPtables and will not be able to detect an attack without OSSEC.

### 3. Does Imunify360 log events such as adding or removing an IP to/from the Gray List?

Most Imunify360 logs are saved in <span class="notranslate">`/var/log/imunify360/console.log`</span>. For example, when IP is blocked and added to the <span class="notranslate">Black List</span>, the following lines are added:

<div class="notranslate">

``` Python
INFO [2017-04-15 18:30:00,889]
defence360agent.plugins.protector.lazy_init: IP 103.86.52.175 is BLOCKED
with 300 sec (expiration: 1492281300) (due to SensorAlert)
INFO [2017-04-15 18:30:00,889]
defence360agent.plugins.protector.lazy_init: Unblocking 103.86.52.175 in
CSF as it is already in our graylist
INFO [2017-04-15 18:30:01,663] defence360agent.internals.the_sink:
SensorAlert:
{'rule_id': 'LF_SMTPAUTH', 'timestamp': 1492281000.8720655, 'attackers_ip': '103.86.52.175', 'plugin_id': 'lfd', 'method': 'ALERT', 'ttl': '1'}
When user unblocks himself by captcha, logs look like this:
INFO [2017-04-17 00:51:26,956] defence360agent.internals.the_sink:
CaptchaEvent:
{'timestamp': 1492404686.9496775, 'errors': [], 'user_agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', 'accept_language': 'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4', 'event': 'PASSED', 'method': 'CAPTCHA', 'attackers_ip': '10.101.1.18'}
INFO [2017-04-17 00:51:26,967]
defence360agent.plugins.protector.lazy_init: IP 10.101.1.18 is UNBLOCKED
(due to ClientUnblock)
```

</div>

Adding and removing IPs from the <span class="notranslate">White List</span> is only possible manually, no IPs will be added automatically.

### 4. Comodo WAF has a lot false positive and trigger the CSF blocking, will Imunify360 improve it?

CSF only blocks IPs by <span class="notranslate">mod_security</span> if <span class="notranslate">mod_security</span> configured with <span class="notranslate">`SecRuleEngine On`</span>. Imunify360 works a bit differently: it uses <span class="notranslate">`SecRuleEngine DetectionOnly`</span> in <span class="notranslate">mod_security</span> configuration and only blocks by <span class="notranslate">mod_security</span> events with high severity, thus decreasing false positives rate.

In some cases <span class="notranslate">mod_security</span> needs to be configured not to cause blocks by csf/lfd.

Possible solutions are:

* Set <span class="notranslate">`SecRuleEngine`</span> to <span class="notranslate">`DetectionOnly`</span> – this way CSF will not block IPs by <span class="notranslate">mod_security</span> events and Imunify360 will still block by <span class="notranslate">mod_security</span> events with high severity (preferable way).

* In <span class="notranslate">`/etc/csf/csf.conf`</span> set <span class="notranslate">`LF_MODSEC`</span> to `0` so that CSF will ignore <span class="notranslate">mod_security</span> events and Imunify360 will still block IPs as described above. But note that in this case requests causing <span class="notranslate">mod_security</span> events will still be blocked by <span class="notranslate">mod_security</span> itself.

### 5. To start using Imunify360 we need to know which information is sent to your servers. Could you please give us some more information?

The following info is sent to our server:

* all the messages from IDS OSSEC (can be found in OSSEC logs)
* all the messages from <span class="notranslate">mod_security</span> (can be found in <span class="notranslate">`modsec_audit.log`</span>)
* users domains (to be checked in reputation engine);
* CAPTCHA verification info
* all running scans for malware (maldet scans) and information on moving to the quarantine or discovering suspicious files
* optionally, suspicious files can be sent to us for the analysis. Files can be sent via UI by marking a proper checkbox

### 6. No valid Imunify360 License Found.

Check if the agent is running.

Check access to the central server (<span class="notranslate">`IP: 148.251.130.176 port: 443)`</span>.

Call <span class="notranslate">`imunify360-agent rstatus`</span> and ensure that status is <span class="notranslate">`True`</span>:

<div class="notranslate">

```
{'expiration': 0, 'status': True, 'user_count': None, 'user_limit': None, 'redirect_url': None}
```

</div>

Ensure that <span class="notranslate">`/etc/sysconfig/imunify360/imunify360.id`</span> file contains <span class="notranslate">`server_id`</span>.

If no, <span class="notranslate">`imunify360-agent register KEY`</span>.

### 7. I have an error peewee.DatabaseError: database disk image is malformed. What should I do?

Imunify360 uses SQLite database to store its data. Although this database has proved its reliability, database files become corrupted in rare cases. To restore data try to perform the following steps:

Stop the agent.

If you have sqlite3 application installed on your machine, try to make dump of Imunify360 database:

<div class="notranslate">

```
#sqlite3 /var/imunify360/imunify360.db
.mode insert
.output dump_all.sql
.dump
.exit
```

</div>

You should see new file <span class="notranslate">`dump_all.sql`</span> in the directory <span class="notranslate">`/var/imunify/`</span>

Create a new database from this dump file:

<div class="notranslate">

```
#sqlite3 imunify360.db.new < dump_all.sql
```

</div>

Replace old database with the new one:

<div class="notranslate">

```
#cd /var/imunify/
#mv imunify360.db imunify360.db.corrupt && mv imunify360.db.new imunify360.db
```

</div>

Start the Imunify360 agent.

If these steps have not solved the problem or no sqlite3 package is installed, then you should create a completely new database:

Stop the agent.

<div class="notranslate">

```
#rm /var/imunify/imunify360.db
#imunify360-agent migratedb
```

</div>

Start the agent

### 8. Why does my cPanel with LiteSpeed and OWASP ModSecurity rule set trigger 500 error on all web pages after installing Imunify360?

OWASP rule set may conflict with Imunify360 default rule set on a server running <span class="notranslate">LiteSpeed Web Server</span>. We recommend to turn off OWASP rule set prior to installing Imunify360.

Please find more FAQs in our [Knowledge Base](https://cloudlinux.zendesk.com/hc/sections/115001538929-FAQ).


