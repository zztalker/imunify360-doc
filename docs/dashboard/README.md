# Imunify360 User Interface

Imunify360 dashboard is available directly within your control panel. It displays all the security events and the latest incidents updated every 30 seconds. It allows filtering and selecting events based on various parameters, reviewing the details of the incidents, managing <span class="notranslate">White List, Gray List</span>, and <span class="notranslate">Black List</span>, Blocked ports and configuring settings.

::: tip Note
cPanel, Plesk, and DirectAdmin are supported at the moment. Standalone version are coming soon.
:::

Log in to WHM as an admin and go to <span class="notranslate">Plugins</span>, choose Imunify360 to get to the Imunify360 user interface.

It allows to access:
* <span class="notranslate">[Support](/dashboard/#support)</span> – allows you to contact our support team directly from your Imunify360 User Interface
  
* <span class="notranslate">[Dashboard](/dashboard/#dashboard)</span> – allows you to see retrospective data in form of charts/heatmaps in your Imunify360 User Interface

* <span class="notranslate">[Incidents](/dashboard/#incidents)</span> – the list of all suspicious activity on the server.

* <span class="notranslate">[Firewall](/dashboard/#firewall)</span> – a dashboard of <span class="notranslate">Black List, White List</span> and <span class="notranslate">Gray List</span>, and Blocked ports with the ability to manage them.

* <span class="notranslate">[Malware Scanner](/dashboard/#malware-scanner)</span> – real-time file scanner.

* <span class="notranslate">[Proactive Defense](/dashboard/#proactive-defense)</span> – a unique Imunify360 feature that can prevent malicious activity through PHP scripts

* <span class="notranslate">[Reputation Management](/dashboard/#reputation-management)</span> – analyzing and notifying tool intended to inform about websites blocking and blacklisting.

* <span class="notranslate">[KernelCare](/dashboard/#kernelcare-integration)</span> – KernelCare current state.

* <span class="notranslate">[Imunify360 Settings](/dashboard/#settings)</span> – configuring and controlling Imunify360 options.


## Support


This tab allows you to contact our support team directly from your Imunify360 User Interface. You can create a request and attach some files to it.

To contact our support team in Imunify360 User Interface, please click the _Call_ icon at the top right corner of the page.

![](/images/contactsupport_zoom70.png)

A support ticket will be created and an email will be sent to a specified email address. When a status of your request will change you receive a notification to your email address. You will be able to track your request via [https://cloudlinux.zendesk.com/hc/](https://cloudlinux.zendesk.com/hc/) and email.


## Dashboard

:::tip Note
Beta 4.0
:::

Click <span class="notranslate">_Dashboard_</span> tab to display an overview of incidents recorded during the selected time interval, an estimate of the intensity of attacks, and correlate events across all sources.

![](/images/DashboardGeneral.png)

The following time periods are available:

* Last 24 hours
* Last7 days
* Last 30 days

The following representation form is available:

* Heatmap visualizes the geographical distribution of incidents
* Histogram represents the numerical distribution of incidents

![](/images/DashboardGeo.png)

![](/images/DashboardNum.png)

Hover mouse over the particular bar to check the accurate value.

::: tip Note
Charts may have gaps. This means that no incidents or alerts were recorded during that day/time period.
:::

The following charts are available.

* **Alerts total**

Security incidents recorded within the selected time interval. Data includes all ModSecurity incidents, Imunify360 DOS plugin alerts, cPanel Login Failure Daemon (for cPanel only) and OSSEC alerts. This is a summary of all major alert sources.

* **CAPTCHA events**

Recorded requests coming from detected attackers or bad bots that show the CAPTCHA challenge within the selected interval.

* **WAF alerts**

Web attacks recorded by ModSecurity within the selected time interval. It may include CMS brute-force and login attempts, websites hacking attempts, attempts to access “sensitive” files or restricted areas, and other malicious requests.

* **Web-based Brute-force Attacks**

Web-based brute-force attacks against the CMS and hosting panel, and incidents recorded by ModSecurity.

* **OSSEC: Network Level Attacks**

Attacks against network services, e.g. FTP, SSH, POP, IMAP, etc., recorded by OSSEC IDS  within the selected time interval. It includes authentication failures, requests from blocked IPs, break-in attempts alerts and more.

* **Denied Requests from Bad Bots**

Attacks detected by the Imunify360 Bot-Detector heuristics-based plugin. Bot-Detector is a part of Imunify360’s “herd immunity” feature that collects and analyzes a massive amount of information on new attacks on a global scale which it uses to prevent attacks across multiple servers.

:::tip Note
Some charts may be hidden if no alerts of a particular type were recorded within the selected time interval.
:::

## Incidents


Choose <span class="notranslate">_Incidents_</span> tab to view and manage the list of all the [incidents](/terminology/). The table displays a list of detected incidents with all the information about the incidents reasons.

Use filters to show the exact list of incidents:

* <span class="notranslate">_Timeframe_</span> – allows filtering incidents by different time periods.
* <span class="notranslate">_List_</span> – allows filtering incidents by <span class="notranslate">White List, Black List</span>, or <span class="notranslate">Gray List</span>, or showing the incidents from all lists.
* _IP_ – allows showing all the incidents of a proper IP address. Tick <span class="notranslate">_Description/IP_</span> checkbox to enable input field where you can enter a proper IP or a part of it and filter the list by clicking on magnifier or pressing Enter.
* <span class="notranslate">_Country_</span> – allows filtering the incidents by abusers country. Tick <span class="notranslate">_Country_</span> checkbox to enable input field with auto-complete where you can enter a proper country and  filter the incidents by clicking magnifier or _Enter_.

![](/images/tloi_zoom86.png)

Slide _Auto-refresh_ to enable or disable automatic refresh of the incidents in the table without reloading the web page.
Set the number of incidents to be shown on a page by choosing the number of items per page in the bottom right of the page.

![](/images/auto_refresh_zoom92.png)

The list of incidents contains the following information:

* <span class="notranslate">_Date_</span> – the time when the incident happened.
* _IP_ - the IP address of the abuser.
There is a color indication for IP address.
  * A gray bubble means that this IP address is currently in the <span class="notranslate">Gray List</span> (so, every connection from this IP address will redirect to the CAPTCHA).
  * A blue bubble means that this IP address is currently in no one list (<span class="notranslate">White/Gray/Black</span>). IP is not blocked.
  * A white bubble means that this IP address is currently in the <span class="notranslate">White List</span>. IP will never be blocked by Imunify360.
  * A black bubble means that this IP address is currently in the <span class="notranslate">Black List</span>. And access from this IP is totally blocked without ability to unblock by the CAPTCHA.
  * No bubble is shown when this incident doesn’t contain IP address.
* <span class="notranslate">_Country_ </span>– country origin of the abuser IP address.
* <span class="notranslate">_# of Times_</span> – the number of times the abuser tried to repeat the action.
* <span class="notranslate">_Event_</span> – description of the event or suspicious activity (as it is described by OSSEC and Mod_Security sensors).
* <span class="notranslate">_Severity_</span> – severity level of the incidents (as it is estimated in [OSSEC severity levels](http://ossec-docs.readthedocs.io/en/latest/manual/rules-decoders/rule-levels.html) and [Mod_Security severity levels](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#severity)). The color of severity means:

  * Green – Mod_Security levels 7-5, OSSEC levels 00-03
  * Orange – Mod_Security level 4, OSSEC levels 04-10
  * Red – Mod_Security levels 3-0, OSSEC levels 11-15

![](/images/list.jpg)

Click an incident to expand the detailed information.

![](/images/expand.jpg)

**Actions available for the Incidents:**

* Disabling the rule of the incident and add it to the list of Disabled rules. Click _Ban_ icon in a proper incident row and confirm the action.

![](/images/disable_ossec_zoom85.png)

* Adding IP to the Black or White list. Click _Cog_ icon and choose the action.

![](/images/move_button_zoom94.png)

## Firewall


<span class="notranslate">_Firewall_</span> tab allows viewing and managing the IP addresses in the lists:

* <span class="notranslate">White List</span> – allows to always accept IPs from the list.
* <span class="notranslate">Gray List</span> – an auto-generated list of all the IPs blocked by Imunify360, based on Sensors alerts and alerts from the central server.
* <span class="notranslate">Black List</span> – allows to always block IPs from the list.
* Blocked ports – allows to manage the list of blocked ports.

### White List

Click <span class="notranslate">_Firewall_</span> in the main menu then choose <span class="notranslate">_White List_</span>.

Use filters to show the exact list of the IPs:

* <span class="notranslate">_Page size_</span> – allows setting the number of the incidents to be shown on the page.
* _IP_ – allows filtering the list by IP. Tick _IP_ checkbox to enable input field where you can enter an IP or a part of.
* <span class="notranslate">_Country_</span> – allows filtering the list by country origin. Tick <span class="notranslate">_Country_</span> checkbox to enable an input field with autocomplete where you can enter a country name. Imunify360 will show the list of IPs of the chosen country.

You can perform the following actions with the IPs in the <span class="notranslate">White List</span>:

* Add IPs manually
* Add a comment to IP
* Move IPs from the White List to the Black List
* Remove IPs from the White List

#### How to add IPs manually

To add an IP to the <span class="notranslate">White List</span> click <span class="notranslate">_Add_</span> on the right side of the page:

![](/images/add.jpg)

In the pop-up choose <span class="notranslate">_Add IP_</span> tab and specify the following:

* <span class="notranslate">_Enter IP_</span> – add IP or subnet in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) .

* <span class="notranslate">_Enter a comment_</span> – add a comment to the IP or subnet (optional).
* Choose where to add the IP or subnet: to the <span class="notranslate">Black List</span> or to <span class="notranslate">White List</span>.
  * For White list it is possible to tick <span class="notranslate">_Full Access_</span> checkbox to make this IP or subnet ignore the rules in Blocked ports. The IPs with full access have a crown icon in the IP column. Note that it is possible to grant or remove full access afterwards in the table, just click _Cog_ icon and choose <span class="notranslate">_Grant Full Access_</span> to grant or <span class="notranslate">_Remove Full Access_</span> to remove it.

![](/images/hmfile_hash_1d7287fc.jpg)

When done, click <span class="notranslate">_Add IP_</span> to confirm your action or <span class="notranslate">_Cancel_</span> to hide pop-up.

![](/images/add_ip_zoom76.png)

You will see a notification if an IP has been added successfully:

![](/images/added_zoom80.png)

#### How to add a comment to IP

In the proper IP row click plus sign (+) in the <span class="notranslate">_Comment_</span> column, type a comment and click <span class="notranslate">_Save_</span> in the pop-up.

![](/images/add_comment_zoom72.png)

To remove a comment just delete the text in the pop-up and click <span class="notranslate">_Save_</span>.

#### How to move IP from the White List to the Black List

To move several IPs from the <span class="notranslate">White List</span> to the <span class="notranslate">Black List</span> choose proper IPs (use checkboxes), click <span class="notranslate">_Move permanently_</span> at the top of the table and choose <span class="notranslate">_Black List_</span> in the drop-down.

![](/images/move_ip_zoom97.png)

To move one IP address, click _Cog_ icon in proper IP row and choose <span class="notranslate">_Black List_</span> in the drop-down.

 ![](/images/move_ip_01.jpg)
You will see a notification if IP is moved successfully.

![](/images/success.jpg)
#### How to remove IP address from the White List

To remove several IPs from the <span class="notranslate">White List</span>, choose proper IPs (use checkboxes) and click <span class="notranslate">_Delete permanently_</span>.

![](/images/remove_zoom86.png)

To move an exact IP, just click _Bin_ icon in front of a proper IP address.

You will see a notification if the IP is deleted successfully:

![](/images/success_01_zoom75.png)


#### Whitelisted trusted services

Imunify360 has a predefined whitelisted services. The actual list is always available on the [link](https://files.imunify360.com/static/whitelist/v2/).

### Gray List

Choose <span class="notranslate">_Firewall_</span> tab in the main menu then click <span class="notranslate">_Gray List_</span>.

Use filters to show the exact list of IPs:

* <span class="notranslate">_Page size_</span> – allows setting the number of the incidents to be shown on the page.
* _IP_ – allows filtering the list by IP. Tick _IP_ checkbox to enable input field where you can enter an IP or part of IP.
* <span class="notranslate">_Country_</span> – allows filtering the list by country origin. Tick <span class="notranslate">_Country_</span> checkbox to enable an input field with autocomplete where you can enter a country name. Imunify360 will show the list of IPs of the chosen country.

In the <span class="notranslate">Gray List</span> you can only remove IPs from it.

#### How to remove IP from the Gray list

To remove several IPs from the <span class="notranslate">Gray List</span> choose IPs in the list (use checkboxes) and click <span class="notranslate">_Delete permanently_</span>.

![](/images/remove_ip_fro_gray.jpg)

To remove an exact IP click _Bin_ icon in front of a proper IP.

You will see a notification if the IP is deleted successfully.

![](/images/success_01_zoom76.png)

### Black List

Choose <span class="notranslate">_Firewall_</span> tab in the main menu then click <span class="notranslate">_Black List_</span>.

Use filters to show an exact list of the IPs:

* <span class="notranslate">_Page size_</span> – allows setting the number of the incidents to be shown on the page.
* _IP_ – allows filtering the list by IP. Tick _IP_ checkbox to enable input field where you can enter an IP or a part of.
* <span class="notranslate">_Country_</span> – allows filtering the list by country origin. Tick <span class="notranslate">_Country_</span> checkbox to enable an input field with autocomplete where you can enter a country name. Imunify360 will show the list of IPs of the chosen country.

The following actions are available with IPs in the <span class="notranslate">Black List</span>:

* Add IPs manually
* Add a country
* Add comments to IPs
* Move IPs from the <span class="notranslate">Black List</span> to the <span class="notranslate">White List</span>
* Remove IPs manually

#### How to add IPs manually

To add an IP to the <span class="notranslate">Black List</span> click <span class="notranslate">_Add_</span> on the right side of the page.

![](/images/firewallblacklistwarning_zoom70.png)

In the pop-up choose <span class="notranslate">_Add IP_</span> tab and fill out:

* <span class="notranslate">_Enter IP_</span> – IP or subnet in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
* <span class="notranslate">_Enter a comment_</span> – type a comment to the IP or subnet (optional)
* Choose <span class="notranslate">_Black List_</span> radio button

When done, click <span class="notranslate">_Add IP_</span> to confirm your action or <span class="notranslate">_Cancel_</span> to close the pop-up.

![](/images/add_ip_black_zoom81.png)

You will see a notification if the IP is added successfully.

![](/images/added_zoom92.png)

::: tip Note
Required Imunify360 Beta version 2.7.4 or later
:::

If <span class="notranslate">_Show only manually added_</span> switcher is disabled (default setting) than IPs automatically blocked by Imunify360 without access to CAPTCHA are displayed in a B<span class="notranslate">lack List</span> along with manually added IPs. They have _**Imunify360**_ in the <span class="notranslate">**Source**</span> column and <span class="notranslate">_**Automatically blocked due to distributed attack**_</span> in <span class="notranslate">**Comment**</span> column.


::: tip Note
Regardless of switched CSF off or on, blocked by Imunify360 IPs exist along with CSF deny list.Warning displayed at the top of the table says that CSF is running and can be used for blacklisting along with Imunify360.
:::

#### How to add a country manually

To add a country to the Black List, click <span class="notranslate">_Add_</span> on the right side of the page:

![](/images/add_black.jpg)

In the pop-up choose <span class="notranslate">_Add Country_</span> tab and fill out:

* <span class="notranslate">_Enter country_</span> – autocomplete field. Just start typing.
* <span class="notranslate">_Enter comment_</span> – type a comment to IP or subnet (optional).

When done, click <span class="notranslate">_Add Country_</span> to confirm or <span class="notranslate">_Cancel_</span> to close the pop-up.

![](/images/north_korea_zoom92.png)

You will see a notification if a country has been added successfully.

![](/images/sucess_country_zoom82.png)

#### How to add a comment to IP

In a proper IP line click plus sign (+) in the Comment column, add a comment and click <span class="notranslate">_Save_</span> in the pop-up:

![](/images/add_comment_zoom86.png)

To remove a comment just delete the text in the pop-up and click <span class="notranslate">_Save_</span>.

#### How to move IPs from the Black List to the White List

To move IPs from the <span class="notranslate">Black List</span> to the <span class="notranslate">White List</span> choose proper IPs in the list (use checkboxes), click <span class="notranslate">_Move permanently_</span> at the top of the table and choose <span class="notranslate">White List</span> in the drop-down.

![](/images/move_ip_black.jpg)

To move an exact IP just click on a _Cog_ icon in a proper IP row and choose <span class="notranslate">_White List_</span> in the drop-down.

 ![](/images/move_black.jpg)
You will see a notification if an IP is moved to the <span class="notranslate">White List</span> successfully.

![](/images/success.jpg)
#### How to remove IPs from the Black List

To remove IPs from the Black List choose proper IPs in the table (use checkboxes) and click <span class="notranslate">_Delete permanently_</span>.

![](/images/delete_permanently.jpg)
To remove an exact IP just click _Bin_ icon in the row.

You will see a notification if an IP is successfully deleted.

![](/images/success_01_zoom75.png)

### Blocked ports

This feature allows to block specific ports for TCP/UDP connection. It is also possible to add specific IPs or subnet as a whitelisted, so that the rule for the port will not work.

Click <span class="notranslate">_Firewall_</span> and choose <span class="notranslate">_Blocked Ports_</span>.


::: tip Note
If CSF integration enabled, then <span class="notranslate">Blocked Ports</span> will be disabled. Imunify360 imports Closed ports and their whitelisted IPs from CSF.
:::

Use filters to show the exact list of IPs:

* <span class="notranslate">Page size</span> – allows setting the number of the incidents to be shown on the page.
* IP – allows filtering the list by IP. Tick IP checkbox to enable input field where you can enter an IP or a part of.
* <span class="notranslate">Description</span> – allows filtering the list by text in notes.

The following actions are available for the ports:

* add port to the list of blocked ports
* edit ports in the list of blocked ports

#### Add a port to the list of blocked ports

On the <span class="notranslate">Firewall</span> page choose <span class="notranslate">_Blocked ports_</span> and click <span class="notranslate">_Add Port_</span>. In the pop-up specify the following:

* <span class="notranslate">Port</span> – the number of the port to be added to the list of blocked ports.
* TCP/UDP – tick the checkboxes of connection types for the port that should be blocked.
* <span class="notranslate">Description</span> (optional) – a text to be added as a note for the port.
* <span class="notranslate">List of IPs/Subnets</span> – add IPs or subnets to the Whitelist separated by commas. They will be able to use the port.

Click <span class="notranslate">_Add Port_</span> to proceed or <span class="notranslate">_Cancel_</span> to close the pop-up.

![](/images/add_port.jpg)

#### Edit ports in the blocked ports list

To add an IP or a subnet to the <span class="notranslate">White List</span> for the port, click _+IP_ and in the <span class="notranslate">_Add IP/Subnet_</span> pop-up specify the following:

* Enter IP – IP or subnet that should be added to the whitelist
* Enter description – a desxription to be added as a note to the IP or subnet.

![](/images/add_ip_ports.jpg)

In the blocked ports list it is possible to edit notes for IPs and ports. Click _Pen_ icon near the note and make changes.

![](/images/add_port_01.jpg)

To delete port or separate IP/subnet, click _Bin_ icon in the row of the element.

![](/images/add_port_02.jpg)


## Malware Scanner

Click <span class="notranslate">_Malware Scanner_</span> in the main menu of Imunify360 user interface to get to the <span class="notranslate">Malware Scanner</span> page.

::: tip Note
 The functionality described on this page depends on <span class="notranslate">[Malware Scanner settings](/dashboard/#malware)</span>.
:::

Imunify360 <span class="notranslate">Malware Scanner</span> can scan file systems for malware injection and quarantine infected files.

This is also a real time file scanner for vulnerability and it can:

* scan files uploaded via FTP (supporting [Pure-FTPd](https://www.pureftpd.org/project/pure-ftpd))

* scan files uploaded via HTTP/HTTPS

* scan files for changes via [inotify](https://en.wikipedia.org/wiki/Inotify)

* scan on-demand (any folder needed)

::: tip Note
When using Mod_Security for real-time scans, it is only possible to detect file owner if Apache is running with `mod_ruid2` configured. In other cases, the user for these files will always be the user a web server is running under (usually <span class="notranslate">`nobody`</span>).
:::

Malware scanning allows you to:

* observe scanner activity
* start on-demand file scanner
* manage malicious and quarantined files
* manage ignore list

### Observing Malware Scanner activity

Go to <span class="notranslate">_Malware Scanner_</span> page and choose <span class="notranslate">_Dashboard_</span> tab. On this page, the file scanning activity from the beginning of the current day is displayed by default. It is possible to use a <span class="notranslate">_Timeframe_</span> filter to observe scanner activity within the particular time period.

![](/images/malwarescannerdashboard_zoom70.png)

The scanner activity is filtered by:
* <span class="notranslate">_Malicious_</span> – the number of files where Malware Scanner has detected a malicious activity. It is possible to configure the action to be applied to the files:
  * Delete permanently
  * Move to quarantine
  * Try to restore from backup
  * Display in dashboard
Please find more details in the <span class="notranslate">[Malware Scanner Settings](/dashboard/#malware)</span> section.
* <span class="notranslate">_Quarantined_</span> – the number of quarantined files that are not available for the user.
* <span class="notranslate">_Restored from quarantine_</span> – the list of the files restored from the quarantine manually.


### On-demand file scanner

It is possible to scan a specific directory for malware. Go to <span class="notranslate">_Malware Scanner_</span> page and choose <span class="notranslate">_Scan_</span> tab. Then proceed the following steps:

1. Enter a folder name you need to scan in the <span class="notranslate">_Folder to scan_</span> field. Start typing with the slash `/`.

    It is possible to use Advanced Settings:

   * <span class="notranslate">_Filename mask_</span>. It allows to set file type for scanning (for example, `*.php` – all the files with extension php). Default setting is `*` which means all files without restriction.
   * <span class="notranslate">_Ignore mask_</span>. It allows to set file type to ignore (for example, `*.html` – will ignore all file with extension html).
   * <span class="notranslate">_Intensity_</span>. Defines the priority and resources consumption for scanning without decreasing efficiency:
	     * <span class="notranslate">Low</span> – low priority and resources consumption
	     * <span class="notranslate">Moderate</span> – moderate priority and resources consumption
	     * <span class="notranslate">High</span> – high priority and resources consumption
	* <span class="notranslate">_Follow symlinks<sup> 3.9.0+</sup>_</span>. Follow all symlinks within the folder to scan. 

![](/images/malwarescannerondemandscan_zoom70.png)

2. Click <span class="notranslate">_Start_</span>.

At the top right corner Malware Scanner progress and status are displayed:
* <span class="notranslate">Scanner is stopped</span> – means that there is no scanning process running.
* <span class="notranslate">Scanning…%</span> – means that the scanner is working at the moment. A percentage displays the scanning progress. You can also see the scanning status beneath the <span class="notranslate">_Mask_</span> or <span class="notranslate">_Advanced options_</span>.
  
![](/images/ondemandscannerprogressbar_zoom70.png)

After <span class="notranslate">Malware Scanner</span> stops on-demand scanning you will see the results in the table below with the following information:

* <span class="notranslate">_Date_</span> – the date when the scanning process was started.
* <span class="notranslate">_Path_</span> – the name of the folder that was scanned.
* <span class="notranslate">_Total_</span> – the total number of files scanned.
* <span class="notranslate">_Malicious_</span> – the number of malicious files found during the scanning.
* <span class="notranslate">_Action_</span> – click icon in this column to perform particular actions.

![](/images/malwarescannerondemand_zoom70.png)

To review and manage malicious files go to <span class="notranslate">_Malicious Files_</span> tab described below.

### Managing files detected as malicious

Go to <span class="notranslate">_Malware Scanner_ → _Dashboard_ → _Malicious Files_</span>. This page has a table with malicious and quarantined files.

![](/images/malwarescannerdashboardgeneral_zoom70.png)

Use filters to show a list of files in a table:

* <span class="notranslate">_Timeframe_</span> – allows to filter files for different time period of detection.
* <span class="notranslate">_Page size_</span> – allows to set the number of files to be shown on a page.
* <span class="notranslate">_Search field_</span> – allows to search files by filename.

### Malicious Files Table

The following information is available in the table:

* <span class="notranslate">Date/time of detection</span> – hover mouse over clock icon to show the exact time when file was detected as malicious.
* <span class="notranslate">Username</span> – file owner name.
* <span class="notranslate">File</span> – the path where the file is located.
* <span class="notranslate">Scan type</span> – shows which way was used to detect the malicious activity. Can be one of the following:
  * <span class="notranslate">On-demand</span>, which means that the file was found during manual scanning;
  * <span class="notranslate">Real-time</span>, which means that the file was detected during real-time scanning process.
* <span class="notranslate">Reason</span> – describes the signature which was detected during the scanning process. Names in this column depend on the signature vendor.
* <span class="notranslate">Quarantined</span> – displays whether a file is put on quarantine or not.
* <span class="notranslate">Actions</span> – displays the possible actions with a file.

It is possible to manage suspicious files in the table:

* Delete files permanently
* Add to Ignore List
* View file content
* Restore from quarantine
* Restore from backup
* Cleanup files from malicious code

#### Delete files permanently

Click _Cog_ icon in the file line and choose <span class="notranslate">_Delete permanently_</span> in the drop-down.

![](/images/maliciousfilesdeletepermanently_zoom70.png)

To do mass action tick several checkboxes or one in the table header to perform action on all files and click _Cog_ icon or <span class="notranslate">_Group Actions_</span> link above the table. Choose <span class="notranslate">_Delete permanently_</span> in the drop-down.

![](/images/maliciousfilesdeletepermanentlygroupaction_zoom70.png)

#### Add to ignore list

<span class="notranslate">_Add to ignore list_</span> action is performed simultaneously with <span class="notranslate">_Restore from quarantine_</span> action. Please go to <span class="notranslate">[Restore from quarantine](/malware_scanner.htm#restorefromquarantine/)</span> section.
Read more about [ignore list](/terminology/).

::: tip Note
If a file is added to <span class="notranslate">Ignore List, Malware Scanner</span> will no longer scan this file.
:::

#### View file content

Click _Eye_ icon in the file line and the file content will be displayed in the pop-up. Only the first 100Kb of the file content will be shown in case if a file has bigger size.

#### Restore from quarantine

Click _Fish_ icon in the file line and approve the action in the pop-up. It is possible to send a file to Imunify360 team for analysis and add file to the <span class="notranslate">Ignore List</span>. To do so, tick <span class="notranslate">_Submit to the Imunify360 team for analysis_</span> checkbox and/or <span class="notranslate">_Add to ignore list_</span> checkbox and confirm by clicking <span class="notranslate">_Yes, Restore_</span>.

![](/images/malwarescannerrestorefromquarantine_zoom70.png)

To do mass action tick several checkboxes or one in the table header to perform action on all files and click <span class="notranslate">_Not malware. Restore from quarantine_</span> above the table. Confirm the action in the pop-up.

![](/images/malwarescannerrestorefromquarantinemass_zoom70.png)

#### Restore from backup

Click _Cog_ icon in the file line and choose <span class="notranslate">_Try to restore clean version from backup_</span> in the drop-down. Confirm the action in the pop-up bу clicking <span class="notranslate">_Yes, restore from backup_</span>.

![](/images/malwarescannerrestorefrombackup_zoom70.png)
To do mass action tick several checkboxes or one in the table header to perform action on all files and click _Cog_ icon or <span class="notranslate">_Group actions_</span> link above the table. Then choose <span class="notranslate">_Try to restore clean version from backup_</span> in the drop-down.

![](/images/malwarescannerrestorefrombackupmass_zoom70.png)

#### Cleanup files from malicious code<sup> 3.7.1+</sup>

This feature allows users to cleanup infected files from malicious code or to remove malicious files.
Click _Cleanup_ icon in the file line. Cleanup confirmation pop-up opens.

![](/images/malwarecleanupclickicon_zoom70.png)

Click _Yes, cleanup_ to confirm the action or _Cancel_ to close the pop-up.
![](/images/cleanupconfirmationpopup_zoom80.png)

File status will change to <span class="notranslate">_Cleanup in progress_</span>. When cleanup will be finished the status changes to <span class="notranslate">_Cleaned_</span>.
To do mass action tick several checkboxes or one in the table header to perform action on all files and click _Cleanup_ icon or <span class="notranslate">_Cleanup files_</span> above the table. Confirm the action in the confirmation pop-up or click <span class="notranslate">_Cancel_</span> to close the pop-up.

![](/images/cleanupmassaction_zoom70.png)

To cleanup all files, click <span class="notranslate">_Cleanup all_</span> button and confirm the action in the confirmation pop-up or click <span class="notranslate">_Cancel_</span> to close the pop-up.

![](/images/cleanupall_zoom70.png)

A user can restore original file cleaned or removed by <span class="notranslate">Malware Cleanup</span> before the infected file expiration date. The keeping period is set in <span class="notranslate">[Malware Scanner Settings](/malware.htm#malwarecleanup/)</span> section.

### Managing Ignore List

Go to <span class="notranslate">Malware Scanner</span> page and choose <span class="notranslate">_Ignore List_</span> tab. The table on the page shows all items (files and folders) added to ignore list and date and time when they have been added.

To add a new file or a new path to the <span class="notranslate">Ignore List</span> do the following:

* click <span class="notranslate">_Add new file_</span> or directory
* in the pop-up enter the path to be added
* click <span class="notranslate">_Add_</span>

![](/images/addnewfileordirectory_zoom70.png)

::: tip Note
Wildcards are not supported when adding paths to Ignore List. For example, the following paths are not supported:
* <span class="notranslate">`/home/*/mail/`</span>
* <span class="notranslate">`/home/user/*.html`</span>
* <span class="notranslate">`/home/*`</span>
:::

To delete the item click _Bin_ icon and confirm the action. The item(s) will be rechecked by <span class="notranslate">Malware Scanner</span> after removal.

To search file or folder in the <span class="notranslate">Ignore List</span> use <span class="notranslate">_Search_</span> input field above the table.


## Proactive Defense


### Overview

 
<span class="notranslate">Proactive Defense</span> is a unique Imunify360 feature that can prevent malicious activity through PHP scripts. It is available as a PHP module for Apache and LiteSpeed web servers and analyzes script activity using known patterns like obfuscated command injection, malicious code planting, sending spam, SQL injection etc.

### User Interface

Go to <span class="notranslate">Imunify360 → Proactive Defense</span>.

![](/images/proactivedefensemain_zoom70.png)

Here you can set a mode, view detected events and perform actions on them.

![](/images/proactivedefensegeneralui_zoom70.png)

#### Mode Settings

The following <span class="notranslate">Proactive Defense</span> modes are available:
* <span class="notranslate">Disabled</span> — means that <span class="notranslate">Proactive Defense</span> feature is not working and a system is not protected enough (default mode)
* <span class="notranslate">Log Only</span> — means that possible malicious activity is only logged, no actions are performed
* <span class="notranslate">Kill Mode</span> — the highest level of protection — the script is terminated as soon as malicious activity is detected

To select a mode, tick the desired checkbox. When an action is completed, you will see a pop-up with the successful mode changing message.
![](/images/proactivedefensemodesettings_zoom70.png)

::: tip Note
* Data is logged in all modes except <span class="notranslate">Disabled</span>.
* A user can disable <span class="notranslate">Proactive Defense</span> anytime. Any mode that is not disabled (for user’s hosting account) by admin can be activated by user.
:::

#### Detected Events

The <span class="notranslate">Detected Events</span> table displays all the necessary information about PHP scripts with malicious activity detected by Imunify360 <span class="notranslate">Proactive Defense</span>.
![](/images/proactivedefensedetectedevents_zoom70.png)

You can filter items by time frame in a <span class="notranslate">_Timframe_</span> dropdown and search a certain entity in a search field.
The items in the <span class="notranslate">_Detected Events_</span> table are displayed per 25 on a page. To change a number of items displayed, click the number at the bottom right corner <span class="notranslate">_Items per page_</span> and select a desired number in the dropdown.
To go to the next or the previous page click >> or << button or click a desired page number.
The <span class="notranslate">_Detected Events_</span> table includes the following columns:
* <span class="notranslate">Group/individual action</span> checkbox — allows to perform actions on one or several desired entities
* <span class="notranslate">Detection Date/Time</span> — displays the date and the exact time of event detected. To view the exact time click the clock icon in the desired event line. To order the events from the last to the first or vice versa click the ▲ icon in the <span class="notranslate">Date/Time</span> of detection column header
* <span class="notranslate">Description</span> — displays a special Proactive Defense rule according to which a suspicious activity was detected
* <span class="notranslate">Script Path</span> — displays the path to the suspicious script. A number near the path describes how many times this event has repeated
* <span class="notranslate">Host</span> — displays the host of the script
* First script call from — displays the IP in which the first call of the script was detected.
  * White color means that this IP is whitelisted
  * Black color means that this IP is blacklisted
  * Gray color means that this IP is graylisted
  * All the others IPs are blue colored
* <span class="notranslate">Action</span> — displays the current mode
* <span class="notranslate">Actions</span> — allows to view details and perform actions on the event

#### Actions

The following actions are available for the detected event:
* View file content
* Move IP to the <span class="notranslate">Black List</span>
* Move file to <span class="notranslate">Ignore List</span><sup> 3.7.0+</sup> (ignore detected rule) — allows a user to exclude a file from <span class="notranslate">Proactive Defense</span> analysis for a particular rule
* Move file to <span class="notranslate">Ignore List</span> (ignore all rules)<sup> 3.7.0+</sup> — allows a user to exclude a file from <span class="notranslate">Proactive Defense</span> analysis for all rules
* Remove file from <span class="notranslate">Ignore List</span><sup> 3.7.0+</sup> — allows a user to include ignored file to <span class="notranslate">Proactive Defense</span> analysis again.

**View file content**

This action can be performed in two ways.

**The first way**

Click the _View details_ icon in the row of the desired event. Here you can see the same information as in the table and plus all environment variables and their values. Then, click <span class="notranslate">_View file content_</span> button. The file content will be displayed in a new pop-up.

![](/images/proactivedefenseviewfilecontent_zoom70.png)

**The second way**
Click _Cog_ icon in the row of the desired event and choose <span class="notranslate">_View file content_</span>.

![](/images/proactivedefenseviewfilecontentway2_zoom70.png)

The file content will be displayed in a new pop-up.
![](/images/proactivedefensefilecontent_zoom70.png)
The group action is not available for this action.

**Move IP to the Black List**

Click _View details_ icon in the row of the desired event. Then, click <span class="notranslate">_Block IP_</span> button. To move the IP to the Black list click <span class="notranslate">_Yes, move to Black list_</span>. In the pop-up displayed click <span class="notranslate">_Yes, move to black list_</span> to complete the action or <span class="notranslate">_Cancel_</span> to return to the <span class="notranslate">_Details_</span> window. When a file is added to the <span class="notranslate">Black List</span>, you will see the confirmation pop-up.

![](/images/proactivedefenseblockip_zoom70.png)

**Move file to Ignore List (ignore detected rule) <sup> 3.7.0+</sup>**

**The first way**
Click _Cog_ icon in the row of the desired event and choose <span class="notranslate">_Ignore detected rule for the file_</span>. Click <span class="notranslate">_Yes, add to Ignore List_</span> in the confirmation pop-up or click <span class="notranslate">_Cancel_</span> to close pop-up. Now you can see this file on the <span class="notranslate">Ignore List</span> tab.
![](/images/proactivedefenseignoredetectedruleforfile_zoom70.png)

**The second way**
Click _View details_ icon and then in the file details pop-up click <span class="notranslate">_Ignore detected rule for this file_</span>. Click <span class="notranslate">_Yes, add to Ignore List_</span> in the confirmation pop-up or click <span class="notranslate">_Cancel_</span> to close the pop-up. Now you can see this file on the <span class="notranslate">Ignore List</span> tab.

![](/images/proactivedefenseignoredetectedruleforfile1_zoom70.png)

**Move file to Ignore List (ignore all rules) <sup>3.7.0+</sup>**

**The first way**
Click _Cog_ icon in the row of the desired event and choose <span class="notranslate">_Ignore all rules for the file_</span>. Click <span class="notranslate">_Yes, add to Ignore List_</span> in the confirmation pop-up or click <span class="notranslate">_Cancel_</span> to close pop-up. The file will be moved to <span class="notranslate">Ignore List</span> tab.
![](/images/proactivedefenseignoreallrulesforfile_zoom70.png)

**The second way**
Click _View details_ icon and then in the file details pop-up click <span class="notranslate">_Ignore all rules for this file_</span>. Click <span class="notranslate">_Yes, add to Ignore List_</span> in the confirmation pop-up or click <span class="notranslate">_Cancel_</span> to close the pop-up. Now you can see this file on the <span class="notranslate">Ignore List</span> tab.

![](/images/proactivedefenseignoreallrulesforfile1_zoom70.png)

**Remove file from Ignore List <sup>3.7.0+</sup>**

On the Ignore List tab click _Bin_ icon and confirm the action.
![](/images/proactivedefenseignorelistbin_zoom70.png)

To perform bulk action, tick required checkboxes and click <span class="notranslate">_Remove from ignore list_</span> at the top of the table, then confirm the action in the pop-up.

**Ignore List tab <sup>3.7.0+</sup>**

Here, there is a table with files with ignored rules. If file is added to <span class="notranslate">Ignore List, Proactive Defense</span> will not analyze scripts activity from this file for all or specified rule.
![](/images/proactivedefenseignorelist_zoom70.png)

The <span class="notranslate">_Ignore List_</span> table includes the following columns:

* <span class="notranslate">Add Date/Time</span> — displays the date and the exact time of adding a file. To view the exact time click the clock icon in the desired file line. To order the files from the last to the first or vice versa click the ▲ icon in the <span class="notranslate">Add Date/Time</span> column header.
* <span class="notranslate">Script Path</span> — displays the path to the script.
* <span class="notranslate">Rules to ignore</span> — displays the pattern to be ignored.
* <span class="notranslate">Actions</span> — allows to view details and perform actions on the file.

**How to test Proactive Defense**

1. Set <span class="notranslate">Proactive Defense</span> to <span class="notranslate">_Log only_</span> mode (requests will not be blocked) or to <span class="notranslate">_Kill mode_</span> to kill all requests.
2. Create a file with the following content:

<div class="notranslate">

``` PHP
<?php
/* Imunify360 Proactive Defence test script */

echo "<pre>";
echo "Step 1<br>";

// Decode string with domain: 37kddsserrt.xyz
$url=base64_decode("MzdrZGRzc2VycnQueHl6");

echo "Step 2<br>";
echo "</pre>";

// Try to access a malicious domain
include($url);
die();
?>
```
</div>

3. Place this file on the server.
4. Call a test page with the script from the point 2.
5. If <span class="notranslate">Proactive Defense</span> is disabled, you will see _Step 1_ and _Step 2_ strings after calling the script.
6. If <span class="notranslate">Proactive Defense</span> is enabled and <span class="notranslate">_Log only_</span> mode is set, you will see _Step 1_ and _Step 2_ strings after calling the script and a new event in the <span class="notranslate">_Detected Events_</span> table.
7. If <span class="notranslate">Proactive Defense</span> is enabled and <span class="notranslate">_Kill mode_</span> is set, the test page returns an error.

## Reputation Management

Choose <span class="notranslate">_Reputation Management_</span> in the main menu of the Imunify360 user interface to get to the <span class="notranslate">Reputation Management</span> page.

Based on the [Google Safe Browsing](https://safebrowsing.google.com/), the <span class="notranslate">Reputation Management</span> allows to check if a domain registered on your server is safe or not.

How does it work:

* We get a list of domains periodically (via crontab)
* Send it to the central Imunify360 server
* Get results from it
* Add bad domains to the list of <span class="notranslate">Reputation Management</span>

If a domain or an IP is blocked, then this information will be available in the table below. Imunify360 uses [Google Safe Browsing](https://safebrowsing.google.com/) technology. If a user’s website appears in this table, then it would be useful to send [this link](https://developers.google.com/webmasters/hacked/) to the user. This instruction can help to solve problems with the domain.

At the top of the page (also in the main menu near <span class="notranslate">Reputation Management</span> item), Imunify360 shows the number of affected domains. This number is a quantity of affected domains that exist on the server.

The table shows:

* <span class="notranslate">_ID_</span> – domain owner username
* _URL_ – the affected domain link
* <span class="notranslate">_Type_</span> – read more about types [on the link](https://developers.google.com/safe-browsing/v4/reference/rest/v4/ThreatType) (we still do not support <span class="notranslate">THREAT_TYPE_UNSPECIFIED</span> and <span class="notranslate">POTENTIALLY_HARMFUL_APPLICATION</span>).
* <span class="notranslate">_Detection time_</span> – exact time when the <span class="notranslate">Reputation Management</span> has detected the domain

![](/images/reputation_zoom73.png) 

Click link icon in the <span class="notranslate">_Action_</span> column to copy the URL to the clipboard.

::: tip Note
<span class="notranslate">Reputation Management</span> online and browser look may differ. This is because Google Safe Browsing has an issue described on github.
:::


## KernelCare Integration


Imunify360 has [KernelCare](https://www.kernelcare.com) KernelCare integration. To install KernelCare go to the [Settings](/dashboard/#settings) tab and click <span class="notranslate">_Install KernelCare_</span>.

![](/images/kc_int.jpg)

To observe current KernelCare status in the Imunify360 main menu choose _KernelCare_ tab.

Here you can check:

* <span class="notranslate">Effective Kernel Version</span> – version of the kernel that KernelCare enable on the server
* <span class="notranslate">Real Kernel Version</span> – real version of the kernel
* <span class="notranslate">Update mode</span> – auto updated mode On or Off
* <span class="notranslate">Uptime</span> – uptime of the kernel in days

To disable auto update mode toggle the <span class="notranslate">`Update mode`</span> switch to <span class="notranslate">`No`</span>.


![](/images/kcint.jpg)

::: tip Note
If you have KernelCare license(s) on the same server(s), then cancel this license in CLN because KernelCare will be free for that server. If you do not know how to cancel licenses then follow [this link](https://www.cloudlinux.com/getting-started-with-cloudlinux-os/43-getting-more-information/938-billing-faq#8) for details.
:::

::: tip Note
KernelCare tab can load slowly on highly loaded systems.
:::

Read more about KernelCare [on the link](https://www.kernelcare.com).

## Settings


Choose <span class="notranslate">_Settings_</span> in the main menu to get to the Imunify360 settings page.
The following tabs are available:

* <span class="notranslate">[General](/dashboard/#general)</span>
* <span class="notranslate">[Malware](/dashboard/#malware)</span>
* <span class="notranslate">[Backups](/dashboard/#backups)</span>
* <span class="notranslate">[Disables Rules](/dashboard/#disabled-rules)</span>
* <span class="notranslate">[Attributions](/dashboard/#attributions)</span>

### General

Go to <span class="notranslate">_Imunify360 → Settings → General_</span>. The following sections are available:

* <span class="notranslate">[Installation](/dashboard/#installation)</span>
* <span class="notranslate">[DoS Protection](/dashboard/#dos-protection)</span>
* <span class="notranslate">[Auto White List](/dashboard/#auto-white-list)</span>
* <span class="notranslate">[Incidents Logging](/dashboard/#incidents-logging)</span>
* <span class="notranslate">[WebShield](/dashboard/#webshield)</span>
* <span class="notranslate">[Error Reporting](/dashboard/#error-reporting)</span>

#### Installation

Here you can install and uninstall the following components:
* HardenedPHP
* Invisible Captcha
* KernelCare

![](/images/settingsgeneralinstallation.png)


**HardenedPHP**

To install or uninstall HardenedPHP click on a button related. Please find additional information about HardenedPHP in [this article](https://www.cloudlinux.com/hardenedphp).
During HardenedPHP installation process the installation log will appear and will update automatically.

::: tip Note
HardenedPHP is free on the servers with Imunify360 installed.
:::

![](/images/kc_install_log_zoom91.png)


**Invisible Captcha**

**Overview**

This feature allows to automatically determine if the user is a human. The system falls back to CAPTCHA solving if the algorithm determines that a user may not be a human.
It is possible to enable Invisible CAPTCHA feature via Imunify360 user interface (UI) and via command line interface (CLI).

**How to install Invisible CAPTCHA**

Go to <span class="notranslate">Imunify360 → Settings → General → Installation → Invisible CAPTCHA</span> and click <span class="notranslate">_Install Invisible CAPTCHA_</span> button. Confirm the installation in the pop-up.

![](/images/invisiblecaptchainstall_zoom70.png)

**How to check if Invisible CAPTCHA is currently installed**

Go to <span class="notranslate">Imunify360 → Settings → General → Installation → Invisible CAPTCHA</span>. The red <span class="notranslate">_Remove Invisible CAPTCHA_</span> button means that Invisible CAPTCHA is enabled.

![](/images/invisiblecaptchaenabled_zoom70.png)

**How to uninstall Invisible CAPTCHA**

Go to <span class="notranslate">Imunify360 → Settings → General → Installation → Invisible CAPTCHA</span> and click <span class="notranslate">_Remove Invisible CAPTCHA_</span> button. Confirm the action in the pop-up.

![](/images/invisiblecaptcharemove_zoom70.png)


**KernelCare**

To install or uninstall KernelCare click on a button related. Please find additional information about KernelCare [here](https://www.kernelcare.com).

::: tip Note
KernelCare is free on the servers with Imunify360 installed.
:::
Click <span class="notranslate">_Save changes_</span> button on the bottom of the section to save changes.

#### DoS Protection

<span class="notranslate">DoS Protection</span> section allows to enable or disable DoS protection. DoS protection works by counting connections from each remote IP address per local port separately.
Tick checkbox <span class="notranslate">_Enable Dos Protection_</span>.
It is possible to configure how Imunify360 will behave:

* <span class="notranslate">_Max Connections_</span>– allows to setup the number of simultaneous connections allowed before IP will be blocked. Cannot be set lower than 100.
* <span class="notranslate">_Check delay_</span> – allows to setup period in seconds between each DoS detection system activation that will check a server for DoS attack. Also, it is possible to set different limits for different local ports by editing the configuration file directly.
	
![](/images/DosProtection.png)

Click <span class="notranslate">_Save changes_</span> button on the bottom of the section to save changes.

#### Auto White List
 
<span class="notranslate">Auto White List</span> section allows to automatically add admin IP to the <span class="notranslate">White List</span> each time when he logs in to hosting panel and enters Imunify360 user interface.
In <span class="notranslate">_Timeout_</span> field enter the number of minutes – the IP will be removed from the white list automatically after this time.

::: tip Note
0 means adding IP to the <span class="notranslate">White List</span> permanently.
:::

![](/images/auto-whitelist.png)

Click <span class="notranslate">_Save changes_</span> button on the bottom of the section to save changes.

#### Incidents Logging
 
In this section it is possible to control what kind of incidents will be shown on the [Incidents page](/dashboard/#incidents).
Move the slider to change your preferences.

There are 15 available levels related to [OSSEC](http://ossec-docs.readthedocs.io/en/latest/manual/rules-decoders/rule-levels.html) and [ModSecurity](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#severity) severity levels:

| |  | |
|-|--|-|
|Log level | ModSecurity | OSSEC|
|1 | 7 – <span class="notranslate">DEBUG</span> | 01 – None|
|2 | 6 – <span class="notranslate">INFO</span> | 02 – System low priority notification|
|3 | 5 – <span class="notranslate">NOTICE</span> | 03 – Successful/Authorized events|
|4 | 4 – <span class="notranslate">WARNING</span> | 04 – System low priority error|
|5 | 4 – <span class="notranslate">WARNING</span> | 05 – User generated error|
|6 | 3 – <span class="notranslate">ERROR</span> | 06 – Low relevance attack|
|7 | 3 – <span class="notranslate">ERROR</span> | 07 – “Bad word” matching.|
|8 | 3 – <span class="notranslate">ERROR</span> | 08 – First time seen|
|9 | 3 – <span class="notranslate">ERROR</span> | 09 – Error from invalid source|
|10 | 3 – <span class="notranslate">ERROR</span> | 10 – Multiple user generated errors|
|11 | 3 – <span class="notranslate">ERROR</span> | 11 – Integrity checking warning|
|12 | 2 – <span class="notranslate">CRITICAL</span> | 12 – High importancy event|
|13 | 2 – <span class="notranslate">CRITICAL</span> | 13 – Unusual error (high importance)|
|14 | 1 – <span class="notranslate">ALERT</span> | 14 – High importance security event.|
|15 | 0 – <span class="notranslate">EMERGENCY</span> | 15 – Severe attack|

Autocleanup configuration allows to keep the <span class="notranslate">Incidents</span> page clean by default. The possible settings are as follows:

* <span class="notranslate">_Keep incidents for the last days_</span> – set the number of days Imunify360 will keep the incidents
* <span class="notranslate">_Keep maximum incidents count_</span> – set maximum quantity of the incidents to keep on the server
* <span class="notranslate">_Auto-refresh time for Incidents page_</span> – set <span class="notranslate">Incidents</span> page auto-refresh time in seconds

![](/images/incidents-logging.png)
	
Click <span class="notranslate">_Save changes_</span> button on the bottom of the section to save changes.
	
#### WebShield

Tick <span class="notranslate">_Detect IPs behind CDN_</span> checkbox to allow to recognize and block IPs with suspicious activity behind Cloudflare and MaxCDN.
	
![](/images/webshield.png)

Click <span class="notranslate">_Save changes_</span> button on the bottom of the section to save changes.

#### Error Reporting
 
Tick <span class="notranslate">_Enable Sentry error reporting_</span> checkbox to send reports to Imunify360 error reports server.

![](/images/error-reporting.png)

Click <span class="notranslate">_Save changes_</span> button on the bottom of the section to save changes.

### Malware

Go to <span class="notranslate">Imunify360 → Settings → Malware</span>. Here you can configure General and <span class="notranslate">Malware Cleanup</span> Settings<sup>3.7.1+</sup>.

::: tip Note
Read [CXS integration](/ids_integration/#cxs-integration) documentation carefully to make Malware Scanner work properly if you decided to use the former instead of Imunify360 anti-malware protection.
:::
**General**

![](/images/SettingsMalware.png)

* <span class="notranslate">_Automatically scan all modified files_</span> – enables real-time scanning for modified files using [inotify](https://en.wikipedia.org/wiki/Inotify) library. The Scanner searches for modified files in user’s DocumentRoot directories.
  ::: tip Note
  It requires inotify to be installed and may put an additional load on a system.
  :::
* <span class="notranslate">_Automatically scan any file uploaded using web_</span> – enables real-time scanning of all the files that were uploaded via http/https.
  ::: tip Note
  It requires [ModSecurity](https://modsecurity.org/) to be installed.
  :::
* <span class="notranslate">_Automatically scan any file uploaded using ftp_</span> – enables real-time scanning of all the files that were uploaded via ftp.
  ::: tip Note
  It requires [Pure-FTPd](https://www.pureftpd.org/project/pure-ftpd) to be used as FTP service.
  :::
* <span class="notranslate">_Automatically send suspicious and malicious files for analysis_</span> – malicious and suspicious files will be sent to the Imunify360 Team for analysis automatically.
* <span class="notranslate">_Show ClamAV scanning results_</span> – show ClamAV scanning results in <span class="notranslate">_Users/Files_</span> tab.
* <span class="notranslate">_Try to restore from backup first_</span> – allows to restore file as soon as it was detected as malicious from backup if a clean copy exists. If a clean copy does not exist or it is outdated, default action will be applied. See also <span class="notranslate">[CloudLinux Backup](/dashboard/#backups)</span>.
* <span class="notranslate">_Use backups not older than (days)_</span> – allows to set the a maximum age of a clean file.
* <span class="notranslate">_Default action on detect_</span> – configure Malware Scanner actions when detecting malicious activity:
  * <span class="notranslate">Delete permanently</span>
  * <span class="notranslate">Quarantine file in place</span>
  * <span class="notranslate">Just display in dashboard</span>

Tick required checkboxes and click <span class="notranslate">_Save changes_</span> button.

**Cleanup<sup>3.7.1+</sup>**

* <span class="notranslate">_Trim file instead of removal_</span> — do not remove infected file during cleanup but make the file zero-size (for malwares like web-shells);
* <span class="notranslate">_Keep original files for … days_</span> — the original infected file is available for restore within the defined period. Default is 14 days.

![](/images/malwarescannersettings_zoom70.png)


**Proactive Defense<sup> 4.0+</sup>**

* <span class="notranslate">_Enable Blamer_</span> — tick to allow Imunify360 to find a root cause of how infection got injected into the server through PHP. Blamer pinpoints exact URL, PHP script & PHP execution path that allowed a hacker to inject malware onto the server.
Imunify360 security team will use that information to prevent future infections from happening.

![](/images/SettingsBlamer.png)

Click <span class="notranslate">_Save changes_</span> button at the page bottom to apply all changes.

### Backups

::: tip Note
Imunify360 2.7.0+
:::
#### Overview

Imunify360 provides customers with an ability to integrate with backup providers and automatically or manually restore files from their backup if they have become infected. Only administrator can choose backup provider but end user has an ability to backup and restore files within this selected backup provider.

The following integrated with Imunify360 backup providers are available:
* <span class="notranslate">CloudLinux Backup</span>
* Hosting panel Backup (cPanel or Plesk)
* <span class="notranslate">Acronis Backup</span>

**Requirements**

* Imunify360 version 2.7.0 and later
* For <span class="notranslate">Acronis Backup</span>, it is required to have Acronis account
* For hosting panel backup, it is required to configure backup option by the administrator of the hosting panel


#### User Interface

This section describes the following:
* how to [enable](/dashboard/#how-to-enable-backups) and [disable](/dashboard/#how-to-disable-backups) backups
* how to [manage](/dashboard/#manage-cloudlinux-backup) <span class="notranslate">CloudLinux Backup</span>
* how to [resize](/dashboard/#change-cloudlinux-backup-storage-size) <span class="notranslate">CloudLinux Backup</span>
* how to [schedule](/dashboard/#schedule-cloudlinux-backup) <span class="notranslate">CloudLinux Backup</span>
* how to [restore](/dashboard/#how-to-restore-file) files

#### How to enable backups

To enable backups log in to a hosting panel as administrator, go to Imunify360 plugin and do the following.
* Go to <span class="notranslate">_Imunify360 → Settings → Backups_</span>. If the feature is not currently used the <span class="notranslate">_Backup and restore_</span> is <span class="notranslate">_Disabled_</span>.
* To enable it, select backup provider from the dropdown:
  * <span class="notranslate">[CloudLinux Backup](https://www.imunify360.com/cloudlinux-backup)</span>
  * <span class="notranslate">[Acronis Backup](https://www.acronis.com/en-eu/)</span>
  * cPanel or Plesk Backup (according to user’s hosting panel)

![](/images/settingsbackup.png)

#### CloudLinux Backup

<span class="notranslate">CloudLinux Backup</span> option provides a customer with the most integrated with Imunify360 backup feature. It is powered by the Acronis technology, but you do not need to have an active Acronis account (if you have an existing Acronis account and would like to continue using it, skip to the <span class="notranslate">Acronis Backup</span> section for choosing an <span class="notranslate">Acronis Backup</span> option).

<span class="notranslate">CloudLinux Backup</span> offers 10 GB of free storage space, and you can purchase additional space as needed.

With this backup and restore service, you can restore malicious or suspicious files from the backup if a clean version exists, schedule backups, see total and used storage space, and locate the data storage server. You can learn more about the <span class="notranslate">CloudLinux Backup</span> for Imunify360 [here](https://www.imunify360.com/cloudlinux-backup).

To activate <span class="notranslate">CloudLinux Backup</span>, follow the next simple steps:
* Select <span class="notranslate">_CloudLinux Backup_</span> in the dropdown
* Click <span class="notranslate">_Connect Backup_</span> button
* You will be redirected to the <span class="notranslate">CloudLinux Network</span> page which opens in a new tab. Please log in with existing <span class="notranslate">[CloudLinux Network (CLN)](https://cln.cloudlinux.com/console/auth/login)</span> credentials otherwise create a new account.
* On the purchase page, you can choose and purchase required size of the storage.
* After successful payment, the installation will be in progress and you will see a Welcome Page with the follow-up instructions.
  ::: tip Note
   Installation can take up to 10 minutes depending on specific server size. You can use Imunify360 as usual during the installation process. Also, we will send you an email with detailed information to the specified email address.
   :::
* You can see the purchased storage space on the <span class="notranslate">_Settings → Backups_</span> tab.
* Imunify360 creates an initial backup of a current server. If all is OK the system returns successful message otherwise, please [contact our support team](https://cloudlinux.zendesk.com/hc/requests/new).
* You can see used and total storage space on the <span class="notranslate">_Settings → Backups_</span> tab.

![](/images/backuprestorecloudlinux.png)

**Acronis Backup**

Choose it if you have Acronis account. So that Imunify360 can use backups to restore malicious or suspicious files from the backup if a clean version exists.

* Select <span class="notranslate">_Acronis Backup_</span> from the dropdown
* Specify <span class="notranslate">_Acronis username_</span> and <span class="notranslate">_password_</span>
* Click <span class="notranslate">_Connect Backup_</span> button

Imunify360 checks if Acronis agent is already installed. If not, Imunify360 installs it. Then Imunify360 checks, if a backup of entire server exists, if not, Imunify360 creates a backup of a current server. If all is OK the system returns successful message.

![](/images/acronisbackup.png)

**cPanel or Plesk Backup**

* Choose cPanel/Plesk backup
* Select <span class="notranslate">_cPanel/Plesk Backup_</span>
* Click <span class="notranslate">_Connect Backup_</span> button

![](/images/backuprestorecpanel.png)

After successful connection, Imunify360 will return an appropriate message.

#### How to disable backups

To disable backups do the following:
* Go to <span class="notranslate">_Imunify360 → Settings → Backups_</span>
* Move the slider to <span class="notranslate">_Disabled_</span>
* Imunify360 returns confirmation pop-up
* Click <span class="notranslate">_Yes, disable backup_</span> to disable backups or click <span class="notranslate">_Cancel_</span> to close the pop-up.
  ::: tip Note
  If you use <span class="notranslate">CloudLinux Backup</span> your backup will be still active in <span class="notranslate">CloudLinux Network (CLN)</span>. To disable backup totally and terminate billing, please log in to [CLN](https://cln.cloudlinux.com/console/auth/login) and deactivate <span class="notranslate">CloudLinux Backup</span> manually on the current server.
  :::
  ![](/images/disablebackup.png)

#### Manage CloudLinux Backup

Click <span class="notranslate">_Manage Backups_</span> button. You will be redirected to the <span class="notranslate">_Backup Management Console_</span>. The console opens in a new tab in the browser. Please go to [documentation](https://www.acronis.com/en-us/support/documentation/BackupService/index.html#33836.html) to find out more information.

![](/images/managebackups.png)

#### Change CloudLinux Backup storage size

Click <span class="notranslate">_Resize_</span> link. You will be redirected to the <span class="notranslate">CloudLinux Network</span> where you can add or remove storage space.
![](/images/resize.png)

After successful payment, the backup storage size will be increased. Imunify360 creates an initial backup of a current server if it was not done before or it just increases the storage size.
On the <span class="notranslate">_Settings → Backups_</span> tab you can see the actual and used amount of backup storage in GB.
If you get an error message, please follow the instructions in the message or [contact our support team](https://cloudlinux.zendesk.com/hc/requests/new) .

#### Schedule CloudLinux Backup

Click <span class="notranslate">_Manage Backups_</span> button. You will be redirected to the <span class="notranslate">_Backup Management Console_</span> (read the documentation [here](https://www.acronis.com/en-us/support/documentation/BackupService/index.html#33507.html) ). When a schedule is set it is displayed on the <span class="notranslate">_Backups_</span> tab.

#### How to restore file

To restore a file do the following:

* Go to <span class="notranslate">_Imunify360 → Malware Scanner_</span>.
* Find the file to restore in the table and click _Cog_ icon, then click <span class="notranslate">_Try to restore clean version from backup_</span>.
* In the pop-up confirm the action by clicking <span class="notranslate">_Yes, restore from backup_</span> or click <span class="notranslate">_Cancel_</span> to close the pop-up.

You can configure the automatic restore. Please find more details [here](/dashboard/#malware).


### Disabled Rules

Go to <span class="notranslate">_Settings_</span> page and choose <span class="notranslate">_Disabled rules_</span>. This page allows user to manage disabled rules which have already been added.

::: tip Note
You can also add a new rule to the <span class="notranslate">Disabled Rules</span> list on [Incidents](/dashboard/#incidents) page.
:::
The list of disabled rules contains:

* <span class="notranslate">_Rule ID_</span> — ID number of the rule provided by the plugin
* <span class="notranslate">_Plugin_</span> — the name of the firewall plugin of the added rule
* <span class="notranslate">_Description_</span> — rule description or details of the rule from ModSecurity or OSSEC
* <span class="notranslate">_Domains_</span> — the list of the domains for which the rule is disabled (blank field means all domains)

To add a new rule click <span class="notranslate">_Add Rule_</span> button.

![](/images/disabledrulesaddbutton_zoom70.png)

In the pop-up specify the following:

* <span class="notranslate">_Rule ID_</span> — ID provided by firewall plugin;
* Select firewall plugin from the drop-down (ossec for OSSEC, modsec for ModSecurity)
* <span class="notranslate">_Description_</span> — rule description or details from ModSecurity or OSSEC
* <span class="notranslate">_Domains_</span> — this option is available only for modsec firewall plugin. Specify comma-separated list of domains for which this rule will be disabled. Leave empty to disable for all domains

Click <span class="notranslate">_Add Rule_</span> to add rule to the list or <span class="notranslate">_Cancel_</span> to close the pop-up.

![](/images/addrule_zoom90.png)

To edit the list of domains where the rule should be disabled, click edit icon in the row of the rule and enter domains registered on the server separated by comma.

::: tip Note
It is possible to specify domains only for ModSecurity rules. For OSSEC rules it is always applies to all domains.
:::

![](/images/disabledruleseditbutton_zoom70.png)

To remove the rule from disabled list click <span class="notranslate">_Enable_</span> and confirm action in the pop-up.

![](/images/disabledrulesenablepopup_zoom60.png)

### Features Management

**Overview**

<span class="notranslate">Features Management</span> allows hosters to enable/disable Imunify360 features for each customer. On <span class="notranslate">Feature Management</span> it is possible to manage <span class="notranslate">Proactive Defense</span> and <span class="notranslate">Malware Cleanup</span> for each customer account.
If a feature is enabled for the user in hoster’s account, the user will be able to see and use it in his account.

::: tip Note
Default settings in <span class="notranslate">Features Management</span> are inherited by newly created user accounts only.
:::

:::tip Note
Features are enabled/disabled account-wide.
:::

![](/images/FeaturesManagementGeneral.png)

Below, there is a table with all users and their domains and features for each user.

![](/images/FeaturesManagementTable.png)

* <span class="notranslate">**Name**</span> — username or path to a user;
* <span class="notranslate">**Domains**</span> — a list of user’s domains; 
* <span class="notranslate">**Proactive Defense**</span> — a slider to enable/disable the feature for a specific user.
  Move a slider in feature column to enable/disable that feature for a specific user. After that, this specific feature tab will be displayed/hid in that user’s account.
* <span class="notranslate">**Malware Cleanup**</span> — a slider to enable/disable the feature for a specific user.
  Move a slider in feature column to enable/disable that feature for a specific user. After that, the <span class="notranslate">Cleanup</span> button will be available in the Malicious files list in that user’s account.

**Group Action**
To perform a group action tick the users and move sliders for them.

![](/images/FeaturesManagementGroupAction.png)

**How to enable/disable <span class="notranslate">Proactive Defense</span>**

The <span class="notranslate">Proactive Defense</span> feature is enabled by default account-wide. So, all newly created user accounts will have <span class="notranslate">Proactive Defence</span> tab in their Imunify360 Section. 

![](/images/FeaturesManagementProactiveDefense.png)

To disable <span class="notranslate">Proactive Defense</span> account-wide just move the slider to <span class="notranslate">_Turned Off_</span>. And confirm the action in the popup by clicking <span class="notranslate">_Yes, disable Proactive Defense for new users_</span> or click <span class="notranslate">_Cancel_</span> to close the popup.

![](/images/FeaturesManagementProactiveDefenseConfirmation.png)

**How to enable/disable <span class="notranslate">Malware Cleanup</span>**

The <span class="notranslate">Malware Cleanup</span> feature is enabled by default account-wide. So, all newly created user accounts will have <span class="notranslate">Malware Cleanup</span> feature in their Imunify360. 

![](/images/FeaturesManagementMalwareCleanup.png)

To disable <span class="notranslate">Malware Cleanup</span> account-wide just move the slider to <span class="notranslate">_Turned Off_</span>. And confirm the action in the popup by clicking <span class="notranslate">_Yes, disable Malware Cleanup for new users_</span> or click <span class="notranslate">_Cancel_</span> to close the popup.

![](/images/FeaturesManagementMalwareCleanupConfirmation.png)

You can perform all these actions via [CLI](/command_line_interface/).

______________________ Imunify360 v.4.0 _________________

<div class="notranslate">

### Native Features Management<sup> 4.0</sup>

</div>

<span class="notranslate">Native Features Management</span> allows a hoster to enable/disable different Imunify360 features for server users. Using this functionality, hosting companies may resell chosen Imunify360 features as a part of hosting packages to end users.


### cPanel<sup> 4.0</sup>

<span class="notranslate">Native Features Management</span> is now available under WHM's <span class="notranslate">Feature Management</span> as a <span class="notranslate">Package Extension</span> (PE).

Using cPanel <span class="notranslate">Native Features Management</span> a hoster can enable/disable <span class="notranslate">Malware Scanner</span> and <span class="notranslate">Proactive Defense</span> for all users with the same package (service plan) instantly.

::: tip Note
When switched to <span class="notranslate">Native Features Management</span>, the same functionality will be disabled in the Imunify360 UI for cPanel. The previous Feature Management config becomes overridden by defaults.

:::

**How to switch to cPanel Native Features Managemet**

Go to <span class="notranslate">Imunify360 → Settings → Features Management</span>. You will see the following.

![](/images/NativeFeaturesManagement.png)

Click <span class="notranslate">_Details_</span>. You will see the following pop-up.

![](/images/SwitchToNativeFeaturesManagement.png)

Click <span class="notranslate">_Agree and Switch_</span> to confirm the action or click <span class="notranslate">_Cancel_</span> to close the popup.

When switched, you will see the following.

![](/images/SwitchedFM.png)

**How to configure Imunify360 Features using WHM/cPanel Package Extensions**

Go to <span class="notranslate">WHM/cPanel → Add a Package → Package Extensions</span> and tick <span class="notranslate">Imunify360 Features</span>.

![](/images/WHMPackageExtension.png)

Choose an option for each feature.

<span class="notranslate">**Malaware Scanner**</span>
* <span class="notranslate">_View reports + Cleanup_</span> – a user can view scanning reports and cleanup found malware
* <span class="notranslate">_View reports only_</span> – a user can view scanning reports but can't cleanup found malware
* <span class="notranslate">_Not available_</span> – the <span class="notranslate">Malware Scanner</span> is not available for a user, and its tab is hidden on the Imunify360 main menu
  
<span class="notranslate">**Proactive Defense**</span>
* <span class="notranslate">_Available_</span> – the <span class="notranslate">Proactive Defense</span> feature is available for a user
* <span class="notranslate">_Not available_</span> – the <span class="notranslate">Proactive Defense</span> is deactivated for a user: the feature does not run and its UI is hidden from the Imunify360 main menu

Click <span class="notranslate">_Add_</span> to apply changes.

See also: [CLI](http://localhost:8080/command_line_interface/).
 
__________________________

### Attributions

Click <span class="notranslate">_Settings_</span> and choose <span class="notranslate">_Attributions_</span> tab to observe a list of [IDS](/terminology/) install on the server.

* <span class="notranslate">_Name_</span> – name of the IDS
* <span class="notranslate">_Version_</span> – IDS version
* <span class="notranslate">_License_</span> – under which licenses this IDS is working
* <span class="notranslate">_Link_</span> – URL to the IDS official page

![](/images/pfattr.jpg)

#### Hosting panels specific settings

**cPanel**

It is possible to enable Service Status checker for Imunify360. Perform the following steps:

* Go to <span class="notranslate">_Service Configuration_</span> and choose <span class="notranslate">_Service Manager_</span>.
* In <span class="notranslate">_Additional Services_</span> section tick <span class="notranslate">`imunify360-agent`</span> and <span class="notranslate">`imunify360-captcha`</span> checkboxes.
* Click <span class="notranslate">_Save_</span> and wait until cPanel enables the Service Status checker for Imunify360.

![](/images/cpanel.jpg)

If succeeded, the status of Imunify360 service will be displayed at Service Status section of Server Status.

![](/images/service_status.jpg)



