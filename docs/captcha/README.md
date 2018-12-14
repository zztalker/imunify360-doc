# Captcha


The CAPTCHA is a feature intended to distinguish human from machine input and protect websites from the spam and different types of automated abuse. Imunify360 uses [reCAPTCHA](https://www.google.com/recaptcha/intro/invisible.html) service.

There are two layers in CAPTCHA behavior:

1. If a user of a website is added to the Grey List (the access is blocked), then the CAPTCHA allows him to unblock himself. When he tries to get to the website he is redirected to the Captcha Server by ipset, where he can see the protection page asking to confirm that he is not a robot by ticking a checkbox.

![](/images/captcha.jpg)

::: tip Note
The IP address on the screenshot above is given as an example.
:::

If successful, a user is redirected to the website, which means that the access is unblocked and the IP address of this user is removed from the Grey List.

It is also possible to enable the invisible reCAPTCHA via the Imunify360 [Settings page](/dashboard/#settings). With the invisible reCAPTCHA enabled, a human user is not required to go through human confirmation - the process will pass under the hood and a user will be redirected to the website. In case if invisible reCAPTCHA failed to detect if a user is a human or not, then visible reCAPTCHA appears.

2. The CAPTCHA is always on guard of the websites and checks the activity of each IP. With the help of reCAPTCHA it blocks bots and protects websites from spam and abuse. To learn more about reCAPTCHA follow the [link](https://www.google.com/recaptcha/intro/).

The reCaptcha supports localization. Depending on user’s browser settings, reCaptcha will use the browser default language and allow to change it:

![](/images/local.jpg)

## Captcha page customization

To modify footer, header or body of the CAPTCHA use the templates in `/usr/share/imunify360-webshield/captcha/templates/`.

There are three files:

* `head.tpl` – this file goes inside `<head></head>` tags. So you can add JavaScript, CSS styles, etc.

* `body.tpl` – the main template file, modify it as you wish. CAPTCHA goes above all the layers.

* `static` – here you can place images, CSS, JavaScript, etc. and access these files as `/static/<filename>`.

To find information on supported browsers follow this link [https://support.google.com/recaptcha/answer/6223828](https://support.google.com/recaptcha/answer/6223828).

## Update Captcha localizations
::: tip Note
Custom Captcha localization is available starting from Imunify360 version 2.6.0 and later.
:::

A user can change the text of captcha messages for the supported languages. Note that adding custom language is not supported.

To change the text of the Imunify360 Captcha and update the localizations text, please do the following:

1. Locate appropriate Captcha localization files by running:

   ```
   ls /usr/share/imunify360-webshield/captcha/translations/locale/{lang}/LC_MESSAGES/messages.po
   ```
   For example for Polish language the catalog looks like this: `/usr/share/imunify360-webshield/captcha/translations/locale/pl/LC_MESSAGES/messages.po`

2. Update Captcha localization files by editing `msgstr "my customization or translation"` for appropriate `msgid “original plain english text"`.

   Where `msgstr` contains text that is shown to user and `msgid` contains Captcha original English text.

   For example:

   ``` HTML
   #: templates/index.html:154
   msgid ""
   "We have noticed an unusual activity from your <b>IP {client_ip}</b> and "
   "blocked access to this website."
   msgstr ""
   "Zauważyliśmy nietypową aktywność związaną z twoim adresem <b>IP "
   "{client_ip}</b> i zablokowaliśmy dostęp do tej strony internetowej"
   ```
3. To add Polish translation edit text in the `msgstr` field. To change the text for a default English translation, edit text in the `msgid` field.
4. Save files.
5. When translation in `messages.po` files is finished, restart imunify360-webshield service:

```
service imunify360-webshield restart
```

6. Block yourself (remove your IP from Imunify360 White List and try to log in to the server via ssh with wrong password until it blocks you). Then go to website and log in. Captcha should appear. Set Polish language and assert that new text is displayed.







