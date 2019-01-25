# Uninstall


To uninstall Imunify360 run:

```
bash i360deploy.sh --uninstall
```

If you have already deleted `i360deploy.sh` then download it by running:

```
wget http://repo.imunify360.cloudlinux.com/defence360/i360deploy.sh
```

and proceed to the directory with the script.

After that please run:

/usr/sbin/cagefsctl  --force-update
/usr/sbin/cagefsctl  --remount-all

to remount cage and remove files from:

/usr/share/cagefs/.cpanel.multiphp/opt/cpanel/ea-php55/root/etc/php.d/i360.ini
/usr/share/cagefs/.cpanel.multiphp/opt/cpanel/ea-php54/root/etc/php.d/i360.ini
/usr/share/cagefs/.cpanel.multiphp/opt/cpanel/ea-php72/root/etc/php.d/i360.ini
/usr/share/cagefs/.cpanel.multiphp/opt/cpanel/ea-php71/root/etc/php.d/i360.ini
/usr/share/cagefs/.cpanel.multiphp/opt/cpanel/ea-php70/root/etc/php.d/i360.ini
/usr/share/cagefs/.cpanel.multiphp/opt/cpanel/ea-php56/root/etc/php.d/i360.ini
