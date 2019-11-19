# Firewall Config

## External Black/Whitelist Management

To use external files with the list of <span class="notranslate">Black/White IPs</span>, place this list into the following directory:

* for the White List:

<div class="notranslate">

```
/etc/imunify360/whitelist/*.txt
```
</div>

* for the Black List:

<div class="notranslate">

```
/etc/imunify360/blacklist/*.txt
```
</div>

The files may have IP addresses or subnet in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).

In order to apply the IP lists, run the following command:

<div class="notranslate">

```
imunify360-agent reload-lists
```
</div>

Or restart the agent.