.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../Includes.txt



.. _configuration:

Configuration
-------------

This chapter covers the TypoScript :ref:`constants <constants>` and :ref:`setup <setup>` associated with
cookie_consent.

In order to use "Cookie Law Management" you necessary need to configure the page of the site to contain the cookie policy.

#. Go to the module WEB > Template.

#. In the page tree, select a page where a TypoScript template is located, mostly the root page of your website.

#. In the upper left corner of the module, select 'Constant Editor' from the dropdown.

#. Under 'Category' select 'AIPCOOKIELAW(11)' from the dropdown.

#. Go to the constant IdPageInformation (the sixth from the top) and set the UID of the page which contains the cookie policy.

This extension manages the Google Analytics snippet by itself adding it in the <head> of the page as described here https://developers.google.com/analytics/devguides/collection/gtagjs.
To use it you must not insert the snippet in your template, you only need to fullfill the Tracking Id constant of the extension and choose whether you want to use the IP anonymizazion by setting the GAAnonymizeIp typoscript constant to true (default is false).

There are many other constants that allow full customization of the extension. You can find the complete list in the following section.


.. toctree::
   :maxdepth: 5
   :titlesonly:
   :glob:

   TyposcriptConstants/Index
   TyposcriptSetup/Index
   Languages/Index

