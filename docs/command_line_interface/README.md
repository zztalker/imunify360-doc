# Command-line Interface


For access to Imunify360 agent features from command-line interface, use the following command:

<div class="notranslate">

```
imunify360-agent
```

</div>

Optional arguments:

| | |
|-------|-|
| <span class="notranslate">`-h, --help`</span>| Returns the help message|
| <span class="notranslate">`--console-log-level [ERROR,WARNING,INFO,DEBUG]`</span>| Level of logging input to the console|

Basic usage:

<div class="notranslate">

```
imunify360-agent [command] [--option1] [--option2]...
```

</div>

Available commands:
| | |
|-|-|
|<span class="notranslate">`3rdparty`</span>|Make Imunify360 the primary IDS|
|<span class="notranslate">`blacklist`</span>|Return/Edit IP blacklist|
|<span class="notranslate">`blocked-port`</span>|Return/Edit list of blocked ports|
|<span class="notranslate">`check-domains`</span>|Send domain list check|
|<span class="notranslate">`clean`</span>|Clean the incidents|
|<span class="notranslate">`checkdb`</span>|Check database integrity|
|<span class="notranslate">`doctor`</span>|Collect info about system and send it to CloudLinux|
|<span class="notranslate">`features`</span>|Manage available features for Imunify360|
|<span class="notranslate">`get`</span>|Returns list of incidents|
|<span class="notranslate">`graylist`</span>|Return/Edit IP <span class="notranslate">Gray List</span>|
|<span class="notranslate">`import`</span>|Import data|
|<span class="notranslate">`infected-domains`</span>|Returns infected domain list|
|<span class="notranslate">`malware`</span>|Allows to manage malware options|
|<span class="notranslate">`migratedb`</span>|Check and repair database if it is corrupted|
|<span class="notranslate">`plugins`</span>|Command for manipulating Imunify360 plugin|
|<span class="notranslate">`register`</span>|Agent registration|
|<span class="notranslate">`rstatus`</span>|Query the server to check if the license is valid|
|<span class="notranslate">`rules`</span>|Allows user to manage disabled rules|
|<span class="notranslate">`unregister`</span>|Unregistration the agent|
|<span class="notranslate">`vendors`</span>|Command for manipulating Imunify360 vendors|
|<span class="notranslate">`version`</span>|Show version|
|<span class="notranslate">`whitelist`</span>|Return/Edit operator for IP and domain white list|
|<span class="notranslate">`proactive`</span><sup>3.7.0+</sup>|Allows to manage Proactive Defense feature|
|<span class="notranslate">`check modsec directives `</span><sup> Beta 3.9.0+ cPanel</sup>|Allows to check whether the global ModSecurity<br>directives have values recommended by Imunify360|
|<span class="notranslate">`fix modsec directives `</span><sup> Beta 3.9.0+ cPanel</sup>|Fixes the non-recommended values (sets them to ones<br>recommended by Imunify360)|
|<span class="notranslate">`feature-management`</span>| manage Imunify360 features available for users|
|<span class="notranslate">`feature-management native enable`<sup> Beta 4.0+ cPanel</sup></span>|activate the Native Features Management using WHM/cPanel package extensions.|
|<span class="notranslate">`feature-management native disable`<sup> Beta 4.0+ cPanel</sup></span>|deactivate the Native Features Management using WHM/cPanel package extensions and return the original Imunify360 Features Management back.|

Optional arguments for the commands:

| | |
|-----------|-|
|<span class="notranslate">`-h, --help`</span>|Shows this help message.|
|<span class="notranslate">`--json`</span>|Returns data in JSON format.|
|<span class="notranslate">`--by-country-code [country_code]`</span>|Filters output by country code.<br>Requires valid country code as argument.<br> Find valid country codes [here](https://www.nationsonline.org/oneworld/country_code_list.htm) in column ISO ALPHA-2 CODE.|
|<span class="notranslate">`--by-ip [ip_address]`</span>|Filters output by abuser's IP or by subnet in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#IPv4_CIDR_blocks).<br>Example: <span class="notranslate">`--by-ip 1.2.3.0/24`</span>.|
|<span class="notranslate">`--by-list`</span>|Can be:<br><ul><li><span class="notranslate">any</span></li><li><span class="notranslate">gray (Gray List)</span></li><li><span class="notranslate">white (White List)</span></li><li><span class="notranslate">black (Black List)</span></li></ul>Filters output based on the list type.<br>Example: <span class="notranslate">`--by-list black`</span>.|
|<span class="notranslate">`--limit`</span>|limits the output with specified number of incidents.<br>Must be a number greater than zero. By default, equals 100.|
|<span class="notranslate">`--offset`</span>|Offset for pagination. By default, equals 0.|
|<span class="notranslate">`--to`</span>|Allows to set the end of the period for filter.<br>Format is a timestamp.|
|<span class="notranslate">`--manual-only`</span>|Show only IP’s that have been added manually.|
|<span class="notranslate">`--no-manual-only`</span>|Show IP’s that have been added both automatically<br>and manually.|
|<span class="notranslate">`--verbose, -v`</span>|Allows to return data in good-looking view if<br>option <span class="notranslate">`--json`</span> is used.|
 
<div class="notranslate">

## 3rdparty

</div>

Command for disabling 3rd party IDS (currently they are cPHulk and fail2ban) and make Imunify360 agent the primary IDS.

Usage:

<div class="notranslate">

```
imunify360-agent 3rdparty [-h]
```

</div>

<span class="notranslate">`command`</span> is a positional argument and can be:

| | |
|-|-|
|<span class="notranslate">`conflicts`</span>| Show conflicts with other software|
|<span class="notranslate">`list`</span>| List other IDS that might be running concurrently with Imunify360|

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>| Show this help message|
 
<div class="notranslate">

## Blacklist

</div>

This command allows to view or edit actual IPs in the <span class="notranslate">Black List</span>.

Usage:

<div class="notranslate">

```
imunify360-agent blacklist [subject] [command] <value> [--option]
```

</div>

<span class="notranslate">`subject`</span> is a positional argument and can be:

| | |
|-|-|
|<span class="notranslate">`country`</span>| Allows to manipulate with countries in the <span class="notranslate">Black List</span>|
|<span class="notranslate">`ip`</span>| Allows to manipulate with IPs in the <span class="notranslate">Black List</span>|

<span class="notranslate">`command`</span> is a second positional argument and can be:

| | |
|-|-|
|<span class="notranslate">`add`</span>| add item(-s) to <span class="notranslate">Black List</span>|
|<span class="notranslate">`delete`</span>| remove item(-s) from <span class="notranslate">Black List</span>|
|<span class="notranslate">`move`</span>| move item(-s) to <span class="notranslate">Black List</span>|
|<span class="notranslate">`edit`</span>| edit comment on item in the <span class="notranslate">Black List</span>|
|<span class="notranslate">`list`</span>| list items(-s) in <span class="notranslate">Black List</span>|


Please note that by default <span class="notranslate">`list`</span> command outputs only first 100 items in the list as if it was run as <span class="notranslate">`blacklist ip list --limit 100`</span>.
To check whether specific IP address is in the list, you can run the following command:

<div class="notranslate">

```
blacklist ip list --by-ip 12.34.56.78
```

</div>

where 12.34.56.78 is that specific IP address.

<span class="notranslate">`value`</span> is an item to manipulate with. It can be IP itself or a country code (find necessary country codes here in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#IPv4_CIDR_blocks) in the column <span class="notranslate">ISO ALPHA-2 CODE</span>).

<span class="notranslate">`option`</span> can be one or few of the optional arguments specified above and one more:

| | |
|-|-|
|<span class="notranslate">`--comment`</span>| allows to add comment to the item|

**Examples:**

* The following command adds IP 1.2.3.4 to the <span class="notranslate">Black List</span> with a comment “one bad IP”:

<div class="notranslate">

   ```
   imunify360-agent blacklist ip add 1.2.3.4 --comment “one bad ip”
   ```

</div>

* The following command returns a list of IPs in the <span class="notranslate">Black List</span> which are from Bolivia:

<div class="notranslate">

   ```
   imunify360-agent blacklist --by-country-code BO
   ```

</div>

<div class="notranslate">

## Blocked ports

</div>

This command allows to view or edit ports, IPs, and protocols in the list of blocked ports.

Usage:

<div class="notranslate">


```
imunify360-agent blocked-port [command] <value> [--option]
```

</div>

<span class="notranslate">`command`</span> is a first positional argument and can be:

| | |
|-|-|
|<span class="notranslate">`add`</span>|add item(-s) to blocked ports|
|<span class="notranslate">`delete`</span>|remove item(-s) from blocked ports|
|<span class="notranslate">`edit`</span>|edit comment on item in the blocked ports|
|<span class="notranslate">`list`</span>|list items(-s) in blocked ports|

<span class="notranslate">`value`</span> is an item to manipulate with. <span class="notranslate">`value`</span> is `:` separated pair of port number and protocol: `5432:tcp`, `28:udp`

<span class="notranslate">`option`</span> can be one or few of the optional arguments specified above and some more:

| | |
|-----|-|
|<span class="notranslate">`--comment`</span>| allows to add comment to the item|
|<span class="notranslate">`--ips`</span>| allows to add IP addresses to ignore list of the<br>blocked port (port won’t be blocked for this IP addresses)|

**Example:**

The following command blocks port 5555 for tcp connections with a comment <span class="notranslate">“Some comment”</span>:

<div class="notranslate">

```
imunify360-agent blocked-port add 5555:tcp --comment “Some comment”
```

</div>

<div class="notranslate">

## Check-domains

</div>

Allows to send domains list to check on Imunify360 central server. This command requires cPanel. After domains checked, the results is available via command <span class="notranslate">`infected-domains`</span>.

::: tip Note
The server requires some time for checking and the results may not be ready immediately.
:::
Usage:

<div class="notranslate">

```
imunify360-agent check-domains [--optional arguments]
```

</div>

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|show this help message|
|<span class="notranslate">`--json`</span>|return data in JSON format|
|<span class="notranslate">`--verbose, -v`</span>|allows to return data in good-looking view if option <span class="notranslate">`--json`</span> is used|

<div class="notranslate">

## Clean

</div>

Clean the incident list.

Usage:

<div class="notranslate">

```
imunify360-agent clean [--optional arguments]
```

</div>

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|show this help message|
|<span class="notranslate">`--json`</span>|return data in JSON format|
|<span class="notranslate">`--days`</span>|cleanups incidents from database, if there are more than specified days quantity<br>Example: <span class="notranslate">`--days 5`</span>.<br>this option will cause deletion of all incidents that are older than 5 days from today|
|<span class="notranslate">`--limit`</span>|leaves only limited number of the incidents in the database and deletes the others<br>Example: <span class="notranslate">`--limit 5000`</span>.<br>this option will leave only 5000 new incidents and delete the others|

<div class="notranslate">

## Checkdb

</div>

Checks database integrity. In case database is corrupt, then this command saves backup copy of the database at <span class="notranslate">`/var/imunify360`</span> and tries to restore integrity of the original database. Note that if this command cannot restore database integrity, then it will destroy the original broken database. Use <span class="notranslate">`migratedb`</span> command to create new clean database.

Usage:

<div class="notranslate">

```
imunify360-agent checkdb [-h]
```

</div>

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|Show this help message.|
|<span class="notranslate">`--json`</span>|Return data in JSON format.|
|<span class="notranslate">`--verbose, -v`</span>|Allows to return data in good-looking view if option <span class="notranslate">`--json`</span> is used.|

<div class="notranslate">

## Doctor

</div>

Collecting information about Imunify360 state, generating the report and sending it to Imunify360 Support Team. This command can be used in case of any troubles or issues with Imunify360. This command will generate a key to be sent to Imunify360 Support Team. With that key Imunify360 Support Team can help with any problem as fast as possible.

Usage:

<div class="notranslate">

```
imunify360-agent doctor [-h]
```

</div>

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|Show this help message.|
|<span class="notranslate">`--json`</span>|Return data in JSON format.|
|<span class="notranslate">`--verbose, -v`</span>|Allows to return data in good-looking view if option <span class="notranslate">`--json`</span> is used.|
 
<div class="notranslate">

## Features

</div>

Allows to enable or disable additional CloudLinux software included in Imunify360 for free. The following software is available:

* [KernelCare](https://www.kernelcare.com)
* <span class="notranslate">[HardenedPHP](https://www.cloudlinux.com/hardenedphp)</span>
* <span class="notranslate">Invisible Captcha</span>

Usage:

<div class="notranslate">

```
imunify360-agent features [-h] [command] <feature name>
```

</div>

<span class="notranslate">`command`</span> is a positional arguments and can be :

| | |
|-|-|
|<span class="notranslate">`install`</span>|allows to enable software|
|<span class="notranslate">`remove`</span>|allows to disable software|
|<span class="notranslate">`status`</span>|allows to check the status of the software|
|<span class="notranslate">`list`</span>|allows to list all available software|

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|show this help message|

**Examples:**

1. The following command checks if KernelCare is installed:

<div class="notranslate">

   ```
   imunify360-agent features status kernelcare
   ```

   </div>

2. The following command installs KernelCare:

<div class="notranslate">

   ```
   imunify360-agent features install kernelcare
   ```

</div>

3. The following command uninstalls KernelCare:

<div class="notranslate">

   ```
   imunify360-agent features remove kernelcare
   ```

</div>

<div class="notranslate">

## Get

</div>

The command returns the lists of incidents.

Usage:

<div class="notranslate">

```
imunify360-agent get [--required argument] [--optional argument]...
```

</div>

Option can be one or few of the optional arguments listed above and one more.

| | |
|-|-|
|<span class="notranslate">`--period [period]`</span>|Timeframe.<br>Allows to specify the amount of time starting from the current day.<br>Should be greater than (or equal to) 1 minute.<br>Can be specified in format:<ul><li><span class="notranslate">`<int>m`</span> – minutes, example <span class="notranslate">` --period 30m`</span></li><li><span class="notranslate">`<int>h`</span> – hours, example <span class="notranslate">`--period 4h`</span></li><li><span class="notranslate">`<int>d`</span> – days, example <span class="notranslate">`--period 7d`</span></li><li><span class="notranslate">`today`</span> – for today, example <span class="notranslate">`--period today`</span></li><li><span class="notranslate">`yesterday`</span> – for yesterday, example <span class="notranslate">`--period yesterday`</span></li></ul>For example, <span class="notranslate">` --period 5d`</span> will return a list of incidents for 5 days. |
|<span class="notranslate">`--since [timestamp]`</span>|allows to set start time to filter the list of incidents by period|
|<span class="notranslate">`--to [timestamp]`</span>|allows to set finish time to filter the list of incidents by period|
|<span class="notranslate">`--severity`</span>|allows to set severity to filter the list of incidents|

_Example:_

The following command shows the incidents (in JSON format) for recent one hour, filtered by country code UA and filtered by Black List IPs:

<div class="notranslate">

```
imunify360-agent get --period 1h --by-country-code UA --by-list black --json
```

</div>

<div class="notranslate">

## Graylist

</div>

This command allows to view or edit actual IP <span class="notranslate">Black List</span>.

Usage:

<div class="notranslate">

```
imunify360-agent graylist ip [command] [--optional argument]
```

</div>

Available commands:

| | |
|-|-|
|<span class="notranslate">`delete`</span>|allows to remove IP from <span class="notranslate">Gray List</span>|
|<span class="notranslate">`list`</span>|allows to list IPs in <span class="notranslate">Gray List</span>|

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|show this help message|

Optional arguments for <span class="notranslate">`list`</span>:

| | |
|-|-|
|<span class="notranslate">`--json`</span>|Returns data in JSON format.|
|<span class="notranslate">`--by-country-code [country_code]`</span>|Filters output by country code.<br>Requires valid country code as argument.<br>Find valid country codes<br>in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#IPv4_CIDR_blocks) in column ISO ALPHA-2 CODE.|
|<span class="notranslate">`--by-ip [ip_address]`</span>|Filters output by abuser's IP or by subnet in CIDR notation.<br>Example: <span class="notranslate">`--by-ip 1.2.3.0/24`</span>|
|<span class="notranslate">`--limit`</span>|Limits the output with specified number of IPs.<br>Must be a number greater than zero. By default, equals 100.|
|<span class="notranslate">`--offset`</span>|Offset for pagination. By default, equals 0.|
|<span class="notranslate">`--verbose, -v`</span>|Allows to return data in good-looking view<br>if option <span class="notranslate">`--json`</span> is used.|

Please note that by default <span class="notranslate">`list`</span> command outputs only first 100 items in the list as if it was run as <span class="notranslate">`graylist ip list --limit 100`</span>.
To check whether specific IP address is in the list, you can run the following command:

<div class="notranslate">

```
graylist ip list --by-ip 12.34.56.78
```

</div>

where `12.34.56.78` is that specific IP address.

**Example:**

The following command will remove IP `1.2.3.4` from the Gray List:

<div class="notranslate">

```
imunify360-agent graylist ip delete 1.2.3.4
```

</div>

<div class="notranslate">

## Import

</div>

This command allows to import <span class="notranslate">Black List</span> and <span class="notranslate">White List</span> from the other 3rd party IDS (only CSF supported at the moment) to Imunify360 database.
Note. If CSF is enabled, then it is not necessary to run the command because Imunify360 is integrated with CSF.

Usage:

<div class="notranslate">

```
imunify360-agent import [-h] {blocked-ports, wblist} ...
```

</div>

Positional arguments:

| | |
|-|-|
|<span class="notranslate">`blocked-ports`</span>|Import blocked-ports from other IDS|
|<span class="notranslate">`wblist`</span>|Import <span class="notranslate">White/Black List</span> from other IDS|

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|Show this help message|

**Example:**

The following command will import <span class="notranslate">Black List</span> and <span class="notranslate">White List</span> from the 3rd party IDS:

<div class="notranslate">

```
imunify360-agent import wblist
```

</div>

<div class="notranslate">

## Infected-domains

</div>

Allows to retrieve infected domains list.

Usage:

<div class="notranslate">

```
imunify360-agent infected-domains [-h] [--optional arguments]
```

</div>

Optional arguments for <span class="notranslate">`list`</span>:

| | |
|-|-|
|<span class="notranslate">`--json`</span>|Returns data in JSON format.|
|<span class="notranslate">`--limit`</span>|Limits the output with the specified number of domains.<br>Must be a number greater than zero. By default, equals 100.|
|<span class="notranslate">`--offset`</span>|Offset for pagination. By default, equals 0.|
|<span class="notranslate">`--verbose, -v`</span>|Allows to return data in a good-looking view if option <span class="notranslate">`--json`</span> is used.|
 
<div class="notranslate">

## Malware

</div>

Allows to manage malware options.

Usage:

<div class="notranslate">

```
imunify360-agent malware [-h] [--optional arguments]
```

</div>

Available commands:

| | |
|-|-|
|<span class="notranslate">`dashboard indicators`</span>|Show indicators for dashboard.|
|<span class="notranslate">`ignore`</span>|Allows to add, delete or show files which will not be scanned.|
|<span class="notranslate">`malicious`</span>|Allows to manage malicious files.|
|<span class="notranslate">`on-demand`</span>|Allows to manage on-demand scanner.|
|<span class="notranslate">`read`</span>|Allows to read malware files.|
|<span class="notranslate">`suspicious`</span>|Allows to manage suspicious files.|
 
Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|Show this help message.|
|<span class="notranslate">`--json`</span>|Returns data in JSON format.|
|<span class="notranslate">`--limit`</span>|Limits the output with the specified number of domains.<br>Must be a number greater than zero. By default, equals 100.|
|<span class="notranslate">`--offset`</span>|Offset for pagination. By default, equals 0.|
|<span class="notranslate">`--verbose, -v`</span>|Allows to return data in a good-looking view if option <span class="notranslate">`--json`</span> is used.|
|<span class="notranslate">`--since SINCE`</span>|Start date.|
|<span class="notranslate">`--to TO`</span>|End date.|
|<span class="notranslate">`--user USER`</span>|Returns results for a chosen user.|

<span class="notranslate">`command`</span> is a second positional argument for <span class="notranslate">`ignore`</span> and can be:

| | |
|-|-|
|<span class="notranslate">`add`</span>|Add a file or files divided by space to the <span class="notranslate">Ignore List</span>.|
|<span class="notranslate">`delete`</span>|Delete an ignored file or files divided by space from the list.|
|<span class="notranslate">`list`</span>|Show a list of ignored files.|
 
<span class="notranslate">`command`</span> is a second positional argument for <span class="notranslate">`malicious`</span> and can be:

| | |
|-|-|
|<span class="notranslate">`delete`</span>|Delete malicious file or files divided by space.|
|<span class="notranslate">`list`</span>|Show a list of malicious files.|
|<span class="notranslate">`move-to-ignore`</span>|Move a file or files divided by space to the <span class="notranslate">Ignore List</span>.|
|<span class="notranslate">`quarantine-malicious`</span>|Allows to add malicious files to quarantine.|
|<span class="notranslate">`restore-from-backup`</span>|Restore source files from backup.|
|<span class="notranslate">`restore-from-quarantine`</span>|Restore files from quarantine.|

<span class="notranslate">`command`</span> is a second positional argument for <span class="notranslate">`on-demand`</span> and can be:

| | |
|-|-|
|<span class="notranslate">`start`</span>|Start on-demand scanner for the path specified after the <span class="notranslate">`start`</span> command.<br>For example: <span class="notranslate">`imunify360-agent malware on-demand start --path /home/<username>/public_html/`</span>|
|<span class="notranslate">`list`</span>|Returns a list of all on-demand scanner session results.|
|<span class="notranslate">`status`</span>|Show current status for on-demand scanner.|
|<span class="notranslate">`stop`</span>|Stop current scanning.|

<span class="notranslate">`command`</span> is a second positional argument for <span class="notranslate">`suspicious`</span> and can be:

| | |
|-|-|
|<span class="notranslate">`delete`</span>|Delete suspicious file or files divided by space.|
|<span class="notranslate">`list`</span>|Show a list of suspicious files.|
|<span class="notranslate">`move-to-ignore`</span>|Move suspicious files divided by space to the <span class="notranslate">Ignore List</span>.|
|<span class="notranslate">`move-to-quarantine`</span>|Move suspicious files divided by space to the quarantine|
 
<div class="notranslate">

## Migratedb

</div>

Allows to create clean database if it was corrupted.

::: tip Note
Use <span class="notranslate">`checkdb`</span> to check database health.
:::

Usage:

<div class="notranslate">

```
Imunify360-agent migratedb [-h]
```

</div>

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`--help, -h`</span>|show this help message|


<div class="notranslate">

## Plugins

</div>

Command for manipulating Imunify360 plugins.

Usage:

<div class="notranslate">

```
imunify360-agent [command]
```

</div>

<span class="notranslate">`command`</span> is a positional argument and can be:

| | |
|-|-|
|<span class="notranslate">`enable-plugin`</span>|Enable Imunify360 plugin.|
|<span class="notranslate">`disable-plugin`</span>|Disable Imunify360 plugin.|

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|Show this help message.|
|<span class="notranslate">`--json`</span>|Return data in JSON format.|
|<span class="notranslate">`--verbose, -v`</span>|Return data in good-looking view if option <span class="notranslate">`--json`</span> is used.|

 
<div class="notranslate">

## Register

</div>

Allows to register and activate Imunify360. You can use it in case if Imunify360 was not activated during installation process or in case if activation key of the Imunify360 was changed for any reason. If you do not know what is an activation key or have any problem with it then, please, read [Installation guide](/installation/) or contact our [support team](https://cloudlinux.zendesk.com/hc/requests/new).

Usage:

<div class="notranslate">

```
imunify360-agent register [--optional arguments] [KEY]
```

</div>

<span class="notranslate">`KEY`</span> is a positional argument:

| | |
|-|-|
|<span class="notranslate">`KEY`</span>|Register with activation key (use <span class="notranslate">`IPL`</span> to register by IP).|

If you will use this command without the <span class="notranslate">`KEY`</span> argument, then it will try to register and activate current activation key.

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|Show this help message.|
|<span class="notranslate">`--json`</span>|Return data in JSON format.|
|<span class="notranslate">`--verbose, -v`</span>|Allows to return data in good-looking view if option <span class="notranslate">`--json`</span> is used.|

**Example 1:**

The following command will register and activate Imunify360 with the provided activation key:

<div class="notranslate">

```
imunify360-agent register IM250sdfkKK245kJHIL
```

</div>

**Example 2:**

If you have an IP-based license, you can use <span class="notranslate">`IPL`</span> argument to register and activate Imunify360:

<div class="notranslate">

```
imunify360-agent register IPL
```

</div>

<div class="notranslate">

## Rstatus

</div>

Allows to check if Imunify360 server license is valid.

Usage:

<div class="notranslate">

```
imunify360-agent rstatus [--optional arguments]
```

</div>

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|Show this help message.|
|<span class="notranslate">`-json`</span>|Return data in JSON format.|
|<span class="notranslate">`--verbose, -v`</span>|Allows to return data in good-looking view if option <span class="notranslate">`--json`</span> is used.|

<div class="notranslate">

## Rules

</div>

This command allows user to manage rules disabled for firewall plugins Imunify360 uses.

Usage:

<div class="notranslate">

```
imunify360-agent rules [command] [--option] <value> [--option] <value>
```

</div>

<span class="notranslate">`command`</span> is a positional argument and can be:

| | |
|-|-|
|<span class="notranslate">`disable`</span>|Add a new rule to the disabled rules list.|
|<span class="notranslate">`enable`</span>|Remove a rule from the disabled rules list.|
|<span class="notranslate">`list-disabled`</span>|Display the list of the disabled rules.|

Option can be:

| | |
|-|-|
|<span class="notranslate">`--id`</span>|ID number of the rule provided by the firewall plugin.|
|<span class="notranslate">`--plugin`</span>|Firewall plugin name. Can be one of the following:<ul><li><span class="notranslate">`modsec`</span> for ModSecurity</li><li><span class="notranslate">`ossec`</span> for OSSEC</li></ul>|
|<span class="notranslate">`--name`</span>|Name of the added rule or details of the rule from <span class="notranslate">ModSecurity</span> or OSSEC.|

**Examples**
1. The following command adds a rule with id 42 and name <span class="notranslate">‘Rule name’</span> for the <span class="notranslate">ModSecurity</span> rules to the disabled rules list:

<div class="notranslate">

   ```
   imunify360-agent rules disable --id 42 --plugin modsec --name 'Rule name'
   ```

   </div>

2. The following command removes a rule with id 42 for the ModSecurity rules from the disabled rules list:

<div class="notranslate">

   ```
   imunify360-agent rules enable --id 42 --plugin modsec
   ```

   </div>

3. The following command displays the list of disabled rules:

<div class="notranslate">

   ```
   imunify360-agent rules list-disabled
   ```

   </div>

   The list is displayed as follows:

   <div class="notranslate">

   ``` Python
   {'plugin': 'modsec', 'id': '214920', 'domains': ['captchatest.com'], 'name': 'Imported from config'}

   {'plugin': 'modsec', 'id': '42', 'domains': None, 'name': 'Rule name'}

   {'plugin': 'ossec', 'id': '1003', 'domains': None, 'name': 'Imported from config'}

   {'plugin': 'ossec', 'id': '2502', 'domains': None, 'name': 'User missed the password more than one time'}
   ```

</div>

   Where
   * <span class="notranslate">plugin</span> — is a firewall plugin name (modsec for <span class="notranslate">ModSecurity</span> and ossec for OSSEC)
   * id — is id number of the rule provided by the firewall plugin
   * <span class="notranslate">domains</span> — the list of the domains for which the rule is disabled (None means all domains)*
   * <span class="notranslate">name</span> — rule description or details of the rule from ModSecurity or OSSEC

   ::: tip Note
   Domains are specified only for <span class="notranslate">ModSecurity</span> rules. For OSSEC rules it is always applies to all domains.
   :::
 
<div class="notranslate">

## Unregister

</div>

Allows to unregister and disable Imunify360 on the server. 

::: tip Note
To remove Imunify360 from the server it needs to be [uninstalled](/uninstall/).
:::

Usage:

<div class="notranslate">

```
imunify360-agent unregister [--optional arguments]
```

</div>

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|Show this help message.|
|<span class="notranslate">`--json`</span>|Return data in JSON format.|
|<span class="notranslate">`--verbose, -v`</span>|Allows to return data in good-looking view if option <span class="notranslate">`--json`</span> is used.|

<div class="notranslate">

## Vendors

</div>

Command for manipulating Imunify360 vendors.

Usage:

<div class="notranslate">

```
imunify360-agent [command]
```

</div>

<span class="notranslate">`command`</span> is a positional argument and can be:

| | |
|-|-|
|<span class="notranslate">`install-vendors`</span>|Install ModSecurity vendors.<br>This command will install Imunify360 vendor and<br>[Comodo WAF](https://modsecurity.comodo.com/) if there are no conflicts with other installed vendors.|
|<span class="notranslate">`uninstall-vendors`</span>|uninstall <span class="notranslate">ModSecurity</span> vendors.|

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|Show this help message.|
|<span class="notranslate">`--json`</span>|Return data in JSON format.|
|<span class="notranslate">`--verbose, -v`</span>|Return data in good-looking view if option <span class="notranslate">`--json`</span> is used.|

<div class="notranslate">

## Version

</div>

Allows to view the actual Imunify360 version installed on the server.

Usage:

<div class="notranslate">

```
imunify360-agent version [-h] [--json]
```

</div>

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|Show this help message.|
|<span class="notranslate">`--json`</span>|Return data in JSON format.|
|<span class="notranslate">`--verbose, -v`</span>|Allows to return data in good-looking view if option <span class="notranslate">`--json`</span> is used.|


<div class="notranslate">

## Submit false-positive/false-negative

</div>

To submit file as false positive (if Imunify360 considers file as a malicious but it actually doesn’t) you can use the following command:

<div class="notranslate">

```
imunify360-agent submit false-positive <file>
```

</div>

To submit file as false negative (if Imunify360 considers file as a non-malicious but it actually does) you can use the following command:

<div class="notranslate">

```
imunify360-agent submit false-negative <file>
```

</div>

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`--to`</span>|Email to send.|
|<span class="notranslate">`--sender`</span>|User email.|
|<span class="notranslate">`-h, --help`</span>|Show this help message|
|<span class="notranslate">`--json`</span>|Return data in JSON format.|
|<span class="notranslate">`--verbose, -v`</span>|Allows to return data in good-looking view if option <span class="notranslate">`--json`</span> is used.|
 
<div class="notranslate">

## Whitelist 

</div>

This command allows to view or edit actual IPs and domains in the <span class="notranslate">White List</span>.

Usage:

<div class="notranslate">

```
imunify360-agent whitelist [subject] [command] <value> [--option]
```

</div>

<span class="notranslate">`subject`</span> is a positional argument and can be:

| | |
|-|-|
|<span class="notranslate">`ip`</span>|Allows to manipulate with IPs in the <span class="notranslate">White List</span>.|
|<span class="notranslate">`domain`</span>|Allows to manipulate with domains in the <span class="notranslate">White List</span>.|

<span class="notranslate">`command`</span> is a second positional argument and can be:

| | |
|-|-|
|<span class="notranslate">`add`</span>|Add item(-s) to the <span class="notranslate">White List</span>.|
|<span class="notranslate">`delete`</span>|Remove item(-s) from the <span class="notranslate">White List.</span>|
|<span class="notranslate">`move`</span>|Move item(-s) to the <span class="notranslate">White List</span>.|
|<span class="notranslate">`edit`</span>|Edit comment on the item in the <span class="notranslate">White List</span>.|
|<span class="notranslate">`list`</span>|List items(-s) in the <span class="notranslate">White List</span>.|

Please note that by default <span class="notranslate">`list`</span> command outputs only first 100 items in the list as if it was run as <span class="notranslate">`whitelist ip list --limit 100`</span>.
To check whether specific IP address is in the list, you can run the following command:

<div class="notranslate">

```
whitelist ip list --by-ip 12.34.56.78
```

</div>

where `12.34.56.78` is that specific IP address.

<span class="notranslate">`value`</span> is an item to manipulate with. It can be IP itself or a country code (find the necessary country codes in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#IPv4_CIDR_blocks) in ISO ALPHA-2 CODE column), or a domain name.

<span class="notranslate">`option`</span> can be one or few of the optional arguments from the table above and one more:

| | |
|-|-|
|<span class="notranslate">`--comment`</span>|Allows to add a comment to the item.|
|<span class="notranslate">`--full-access`</span>|Only for <span class="notranslate">`move`</span> and <span class="notranslate">`edit`</span> commands.<br>Allows to grant full access to the IP or subnet ignoring the rules in Blocked ports.|
|<span class="notranslate">`--no-full-access`</span>|Only for <span class="notranslate">`move`</span> and <span class="notranslate">`edit`</span> commands.<br>Allows to remove full access of the IP or subnet.|

**Examples:**

1. The following commands adds IP `1.2.3.4` to the <span class="notranslate">White List</span> with a comment <span class="notranslate">“one bad ip”</span>:

<div class="notranslate">

   ```
   imunify360-agent whitelist ip add 1.2.3.4 --comment “one good ip”
   ```

   </div>

2. The following command returns a list of IPs in the <span class="notranslate">White List</span> which are from Bolivia:

<div class="notranslate">

   ```
   imunify360-agent whitelist --by-country-code BO
   ```

</div>

3. The following command adds domain with a name <span class="notranslate">`example.com`</span> to the White List:

<div class="notranslate">

   ```
   imunify360-agent whitelist domain add example.com
   ```

   </div>

4. The following command checks domains in the <span class="notranslate">White List</span>:

<div class="notranslate">

   ```
   imunify360-agent whitelist domain list
   ```

</div>

<div class="notranslate">

## Proactive

</div>

These commands allow to manage <span class="notranslate">Proactive Defense</span> feature.

Usage:

<div class="notranslate">

```
imunify360-agent proactive [command] [--option] <value>
```

</div>

Available commands:

| | |
|-|-|
|<span class="notranslate">`ignore delete path`</span>|allows to remove a file from <span class="notranslate">Proactive Defense Ignore List</span>.|
|<span class="notranslate">`ignore delete rule`</span>|allows to remove a rule for a file from <span class="notranslate">Proactive Defense Ignore List</span>.|
|<span class="notranslate">`list`</span>|allows to list <span class="notranslate">Proactive Defense</span> events.|
|<span class="notranslate">`details`</span>|allows to show details for the event.|
|<span class="notranslate">`ignore list`</span>|allows to list files included to <span class="notranslate">Proactive Defense Ignore List</span>.|
|<span class="notranslate">`ignore add`</span>|allows to add a file to <span class="notranslate">Proactive Defense Ignore List</span>.|

<span class="notranslate">`option`</span> can be one or few of the optional arguments listed above and one more.

| | |
|-|-|
|<span class="notranslate">`--path`</span>|for <span class="notranslate">`ignore add`</span>, <span class="notranslate">`ignore delete path`</span>, <span class="notranslate">`ignore delete rule`</span> commands.<br>Allows to specify a path to the file.|
|<span class="notranslate">`--id`</span>|for <span class="notranslate">`details`</span>, <span class="notranslate">`ignore delete rule`</span> commands.<br>Allows to specify rule id.|
|<span class="notranslate">`--rule-id`</span>|only for <span class="notranslate">`ignore add`</span> command.<br>Allows to specify rule id.|
|<span class="notranslate">`--rule-name`</span>|only for <span class="notranslate">`ignore add`</span> command.<br>Allows to specify rule name.|

**Examples:**

1. This command adds a file located at <span class="notranslate">`/home/user/index.php`</span> to <span class="notranslate">Proactive Defense Ignore List</span> for the rule id 12 and name <span class="notranslate">`Suspicious detection rule`</span>.
It means that <span class="notranslate">Proactive Defense</span> will not analyze this file according to this rule:

<div class="notranslate">

   ```
   imunify360-agent proactive ignore add --path /home/user/index.php --rule-id 12 --rule-name 'Suspicious detection rule'
   ```
</div>

2. This command removes files located at <span class="notranslate">`<path to file 1>`</span> and <span class="notranslate">`<path to file 2>`</span> from <span class="notranslate">Proactive Defense Ignore List</span>:

<div class="notranslate">

   ```
   imunify360-agent proactive ignore delete path <path to file 1> <path to file 2>
   ```

   </div>

<div class="notranslate">

## Check modsec directives

</div>
	
::: tip Note
Beta Imunify360 version 3.9.0+ cPanel only
:::
	
Allows to check whether the global [ModSecurity directives](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual-%28v2.x%29#Configuration_Directives) have values recommended by Imunify360. 
	
Usage:
	
<div class="notranslate">

```
imunify360-agent check modsec directives [--optional arguments]
```

</div>
	
Optional arguments:
	
| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|Show this help message.|
|<span class="notranslate">`--json`</span>|Return data in JSON format.|
|<span class="notranslate">`--verbose, -v`</span>|Allows to return data in good-looking view if option <span class="notranslate">`--json`</span> is used.|
	
<div class="notranslate">

## Fix modsec directives

</div>
	
::: tip Note
Beta Imunify360 version 3.9.0+ cPanel only
:::
	
Fixes the non-recommended values (sets them to ones recommended by Imunify360)
	
Usage:
	
<div class="notranslate">

```
imunify360-agent fix modsec directives [--optional arguments]
```
	
</div>   

Optional arguments:

| | |
|-|-|
|<span class="notranslate">`-h, --help`</span>|Show this help message.|
|<span class="notranslate">`--json`</span>|Return data in JSON format.|
|<span class="notranslate">`--verbose, -v`</span>|Allows to return data in good-looking view if option <span class="notranslate">`--json`</span> is used.|

<div class="notranslate">

## Feature-management

</div>

Allows to manage Imunify360 features available for users.

**Usage:**

<div class="notranslate">

```
iimunify360-agent feature-management [command] [--optional argument]...
```

</div>

<span class="notranslate">`Command`</span> can be one of the following:

| | |
|-|-|
|<span class="notranslate">`defaults`</span>| show the default value for each feature that is applied for newly created user|
|<span class="notranslate">`disable`</span>| disable a feature for some or all users|
|<span class="notranslate">`enable`</span>| enable a feature for some or all users|
|<span class="notranslate">`get`</span>| obtains the status of all available features for a <span class="notranslate">`USER`</span>|
|<span class="notranslate">`list`</span>| list all available features|

<span class="notranslate">`Optional argument`</span> for the <span class="notranslate">`enable/disable`</span> commands can be one of the following:

| | |
|-|-|
|<span class="notranslate">`[--feature av]`</span>|enable/disable <span class="notranslate">Malware Cleanup</span>|
<span class="notranslate">`[--feature proactive]`</span>|enable/disable <span class="notranslate">Proactive Defense</span>|
|<span class="notranslate">`[--users [USERS [USERS ...]]]`</span>| specifies the list of users which will be affected, otherwise the default value will be changed|

The mandatory argument for the <span class="notranslate">`get`</span> command:

| | |
|-|-|
|<span class="notranslate">`[--user USER]`</span>| specifies a user name to obtain the status of features for|

**Example:**

The following command enables <span class="notranslate">Malware Cleanup</span> feature for the <span class="notranslate">`user1`</span>:

<div class="notranslate">

```
imunify360-agent feature-management enable --feature av --users user1
```

</div>

<div class="notranslate">

## Feature-management native enable

</div>

Allows to activate the <span class="notranslate">Native Features Management</span> using WHM/cPanel package extensions.

**Usage:**


<div class="notranslate">

```
imunify360-agent feature-management native enable
```

</div>

Once the command executed, the following default Imunify360 <span class="notranslate">Package Extension</span> settings will be applied to all Packages:
* <span class="notranslate">Malware Scanner - View Reports Only</span>
* <span class="notranslate">Proactive Defense - Available</span>

Imunify360 <span class="notranslate">Package Extensions</span> will be auto-enabled for all packages disregarding the fact they have Imunify360 plugin enabled or not. 


All existing <span class="notranslate">Features Management</span> settings will be overridden with the Imunify360 <span class="notranslate">Package Extensions</span> ones for all users.

::: tip Note
<span class="notranslate">Features Management</span> tab will be hidden on the User Interface.
:::

::: warning Warning
<span class="notranslate">`feature-management enable/disable --feature av`</span> and <span class="notranslate">`feature-management enable/disable --feature proactive`</span> commands will stop functioning.
:::


<div class="notranslate">

## Feature-management native disable

</div>

Allows to deactivate the <span class="notranslate">Native Features Management</span> using WHM/cPanel package extensions and return the original Imunify360 <span class="notranslate">Features Management</span> back.

**Usage:**


<div class="notranslate">

```
imunify360-agent feature-management native disable
```

</div>

Once the command executed:

* The <span class="notranslate">Native Features Management</span> will be deactivated
* The Imunify360 <span class="notranslate">Package Extensions</span> will be removed from all packages
* The original Imunify360 <span class="notranslate">Features Management</span> will be activated


::: tip Note
Imunify360 will keep applying users <span class="notranslate">Features Management</span> settings stored in their data bases after switching to the original Imunify360 <span class="notranslate">Features Management</span>.
:::

::: warning Warning
<span class="notranslate">`feature-management enable/disable --feature av`</span> and <span class="notranslate">`feature-management enable/disable --feature proactive`</span> commands will start functioning.
:::
