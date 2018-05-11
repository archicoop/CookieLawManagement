<?php
defined('TYPO3_MODE') or die();

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
    'Aip.' . $_EXTKEY,
    'CookieLaw',
    [
        'ConvertXmlToJson' => 'getJson',
    ],
    []
);
