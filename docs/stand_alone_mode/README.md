# Table of Contents

1.  [How to run Imunify360 in stand-alone mode on a Linux server](#org14433b2)
    1.  [What Imunify360 requires to run properly](#org70f5a63)
    2.  [How to configure the Imunify360 UI](#orga1642e9)
    3.  [How to provide Imunify360 with an actual list of users (optional)](#org17759f2)
    4.  [How to configure authentication for Imunify360 (optional)](#orga87f5bf)
    5.  [How to install Imunify360](#orgb326b96)
    6.  [How  to open Imunify360 UI Once Imunify360 is installed](#orgf51656b)
    7.  [Further steps](#orgd26c3b9)
    8.  [Prerequisites](#org7e33b2d)


<a id="org14433b2"></a>

# How to run Imunify360 in stand-alone mode on a Linux server

Prior to version 4.5, Imunify360 supported cPanel, Plesk, and
DirectAdmin control panels only. Starting from v4.5, Imunify360 could
be run on any CloudLinux OS, CentoOS 6/7, RHEL 6/7, and Ubuntu
16.04/18.04 systems without requiring any of these web panels to be
installed. Imunify360 can be run with any web panel, as the UI is
implemented using the single-page application (SPA) approach.

Below you can find the steps to install and run Imunify360, in
stand-alone mode (without panel), or within any hosting panel.


<a id="org70f5a63"></a>

## What Imunify360 requires to run properly

There are some basic steps to run Imunify360
 as a stand-alone application. They are:

1.  Define a way to serve web-based UI
2.  Provide Imunify360 with an actual list of users in the system
3.  Configure a user authentication process


<a id="orga1642e9"></a>

## How to configure the Imunify360 UI

Create the file `/etc/sysconfig/imunify360/integration.conf` with a
`UI_PATH` option defining the path that will serve web-based UI. For
example:

    [PATHS]
    UI_PATH = /var/www/vhosts/imunify360/imunify360.hosting.example.com/html/im360

Imunify360 will automatically copy UI files there during installation/upgrade.

Note: Ensure that the domain you are going to use for the Imunify360
web-based UI refers to this path, and that there are no other scripts
or files under `UI_PATH`, as they might be overridden by the Imunify360
installation.


<a id="org17759f2"></a>

## How to provide Imunify360 with an actual list of users (optional)

By default, Imunify360 will use Linux system users, limited
by `UID_MIN` and `UID_MAX` from `/etc/login.defs`

If you want to see a specific list of users (note, that all of them
must be real linux users accessible via PAM), you can specify the
`USER_LIST_SCRIPT` option in
`/etc/sysconfig/imunify360/integration.conf`:

    [PATHS]
    UI_PATH = …
    USER_LIST_SCRIPT = /path/to/get-users-script.sh

It should point to an executable file that generates a json file with
the following schema (domains are optional):

    {"version": 1, "users": [{"name": "user1", "domains": ["user1.com"]}, {"name": "user2"},..]}

Note, that any type of executable file is acceptable. For example,
you can use a Python or PHP script.


<a id="orga87f5bf"></a>

## How to configure authentication for Imunify360 (optional)

Imunify360 can use PAM to authenticate users.
Once the UI is opened, the user sees a sign-in form. The credentials are checked via PAM.

You can specify which PAM service Imunify360 should use with the SERVICE<sub>NAME</sub> option:

    [PAM]
    SERVICE_NAME = system-auth

If it is not specified, the “system-auth” service is used.

By default, “root” is considered to be the only “admin” user.
To add more administrators, list them in the `/etc/sysconfig/imunify360/auth.admin` file.


<a id="orgb326b96"></a>

## How to install Imunify360

Now everything is ready to install Imunify360.

The installation instructions are the same as for
cPanel/DirectAdmin version, and can be found in the technical
documentation:
<https://docs.imunify360.com/imunify360/#installation-instructions> 


<a id="orgf51656b"></a>

## How  to open Imunify360 UI Once Imunify360 is installed

The web-based UI is available via the domain configured in `UI_PATH`.

For example, if
`/var/www/vhosts/imunify360/imunify360.hosting.example.com/html/im360`
is the document root folder for `imunify360.hosting.example.com`
domain, then you could open ImunifyAV with the following URL:
<https://imunify360.hosting.example.com/> (when you have TLS
certificate configured for the domain) or
<http://imunify360.hosting.example.com/> 


<a id="orgd26c3b9"></a>

## Further steps

Detailed instructions on how to use Imunify360 can be found in the
technical documentation: <https://docs.imunify360.com/>


<a id="org7e33b2d"></a>

## Prerequisites

-   [ModSecurity 2.9.x](https://modsecurity.org/)
-   [Apache Module mod<sub>remoteip</sub>](http://httpd.apache.org/docs/2.4/mod/mod_remoteip.html)

If you have questions, or experience any issues regarding the
product, submit a ticket to our technical support team. For feature
requests, just drop us an email to feedback@imunify360.com.

