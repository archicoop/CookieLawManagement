<?php

namespace Aip\AipCookieLaw\Controller;

use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;
use TYPO3\CMS\Extbase\Utility\LocalizationUtility;

class ConvertXmlToJsonController extends ActionController {

    /**
     * @var string
     */
    protected $defaultViewObjectName = 'TYPO3\CMS\Extbase\Mvc\View\JsonView';

    public function getJsonAction() {
        $message = [
            LocalizationUtility::translate('jqueryWarning', 'aip_cookie_law'),
            LocalizationUtility::translate('invalidKeyWarning', 'aip_cookie_law'),
            LocalizationUtility::translate('socialDefaultTitle', 'aip_cookie_law'),
            LocalizationUtility::translate('analyticsDefaultTitle', 'aip_cookie_law'),
            LocalizationUtility::translate('socialDefaultDescription', 'aip_cookie_law'),
            LocalizationUtility::translate('analyticsDefaultDescription', 'aip_cookie_law'),
            LocalizationUtility::translate('notificationTitle', 'aip_cookie_law'),
            LocalizationUtility::translate('seeDetails', 'aip_cookie_law'),
            LocalizationUtility::translate('seeDetailsImplicit', 'aip_cookie_law'),
            LocalizationUtility::translate('hideDetails', 'aip_cookie_law'),
            LocalizationUtility::translate('savePreference', 'aip_cookie_law'),
            LocalizationUtility::translate('allowCookies', 'aip_cookie_law'),
            LocalizationUtility::translate('allowCookiesImplicit', 'aip_cookie_law'),
            LocalizationUtility::translate('privacySettings', 'aip_cookie_law'),
            LocalizationUtility::translate('privacySettingsDialogTitleA', 'aip_cookie_law'),
            LocalizationUtility::translate('privacySettingsDialogSubtitle', 'aip_cookie_law'),
            LocalizationUtility::translate('closeWindow', 'aip_cookie_law'),
            LocalizationUtility::translate('preferenceConsent', 'aip_cookie_law'),
            LocalizationUtility::translate('preferenceDecline', 'aip_cookie_law'),
            LocalizationUtility::translate('notificationTitleImplicit', 'aip_cookie_law'),
            LocalizationUtility::translate('informationCookies', 'aip_cookie_law'),
            LocalizationUtility::translate('textOff', 'aip_cookie_law')
        ];

        $this->view->assign('value', $message);
    }
}
