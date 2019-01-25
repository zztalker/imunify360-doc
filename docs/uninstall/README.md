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


For CloudLinux OS, please run the following commands:

```
/usr/sbin/cagefsctl  --force-update
/usr/sbin/cagefsctl  --remount-all
```

to remount CageFS and remove files from user's local directories as after uninstallation these files are not removed automatically and can generate errors to Apache log.
