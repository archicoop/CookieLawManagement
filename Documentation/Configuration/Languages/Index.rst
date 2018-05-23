.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _languages:

Languages
^^^^^^^^^

The extension works with the standard localization system, so you have only to configure properly your language in your typoscript setup using something like this:

config {
      sys_language_uid = 0
      language = en
      locale_all = en_US.UTF-8
      htmlTag_langKey = en_US
      htmlTag_setParams = lang="en" dir="ltr" class="no-js"
}

And/Or like this:

[globalVar = GP:L = 1]
config {
      sys_language_uid = 1
      language = it
      locale_all = it_IT.UTF-8
      htmlTag_langKey = it_IT
      htmlTag_setParams = lang="it" dir="ltr" class="no-js"
}
[global]

Please note that if you configure your language directly in the backend template module, you have to add the following lines so that they are after the last language configuration.

ajaxLanguageJson {
   config {
       language < config.language
       locale_all < config.locale_all
       sys_language_uid < config.sys_language_uid
       }
   10 < tt_content.list.20.aipcookielaw_cookielaw
}