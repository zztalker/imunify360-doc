# Imunify360 Features

## RapidScan

RapidScan feature allows you to increase scanning speed by lower system resource usage and gives you an opportunity to scan more frequently, further hardening your systems’ security posture.

#### RapidScan techniques

* **Faster File Integrity Checking**. File metadata, such as file hashes, are stored locally. This means that unchanged files don't need to be rescanned.
* **Efficient Cloud-assisted Scanning**. Imunify360 stores its malicious file hash database in the cloud. We detect malicious files and skip white-listed files. The remaining files are fewer, so the overall scan time is significantly reduced.
* **Optimized Malware Signatures**. Our malware signature database continually expands to match the variety of malicious software. While the database becomes more accurate and comprehensive, it also becomes larger and more cumbersome to index. We tackle this by actively curating the database and re-evaluating complex signatures, recasting any that affect scanning performance.
 
#### What does it mean to you?

When you first enable the RapidScan feature, the first scan will run as before. But subsequent scans will see a speed improvement, anywhere between 5 to 20 times faster. This is the case for both on-demand and scheduled scans, and means you can afford more scans without affecting system performance.

To take advantage of these new improvements, go to your Imunify control panel and enable RapidScan in Settings→Malware Scanner. See details [here](/dashboard/#malware).

## Low Resource Usage mode

This is a special operation mode where Imunify360 consumes less CPU and RAM. It is intended for servers with limited resources.

This mode disables <span class="notranslate">[WebShield](/webshield/)</span> switching off GrayList and Captcha. 

<span class="notranslate">_Low Resource Usage_</span> mode also enables the <span class="notranslate">_[Minimized Modsec Ruleset](/dashboard/#waf-settings)_</span> option that disables Imunify WAF rules with a high memory footprint, leaving critical rulesets enabled. 

When the <span class="notranslate">_Low Resource Usage_</span> mode is activated it is reflected on the UI: an Imunify main menu changes color to light green, and an appropriate label appears on the top right.

![](/images/LowResourceUsage.png)
