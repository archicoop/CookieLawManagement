<?php
/**
 * Created by PhpStorm.
 * User: greca
 * Date: 25/07/17
 * Time: 12.04
 */

namespace Aip\AipCookieLaw\UserFunction;


    class ConvertXmlToJson {
        /**
         * Output the current time in red letters
         *
         * @param    string          Empty string (no content to process)
         * @param    array           TypoScript configuration
         * @return   string          output.
         */
        public function getJson($content, $conf) {

            $local_language = '';
            if ($_GET['L'] != null)
                $local_language = self::labelLanguage($_GET['L']);
            else
                $local_language = $GLOBALS['TSFE']->config['config']['language'];
            if ($local_language == 'gb' || $local_language == 'england' ||
                $local_language == 'uk' || $local_language == 'scotland' ||
                $local_language == 'vg' || $local_language == 'vi' ||
                $local_language == 'wales' || $local_language == 'scotland' ||
                $local_language == 'qc' || $local_language == 'fam' ||
                $local_language == 'eu')
                $local_language = 'en';
            if ($local_language == 'catalonia')
                $local_language = 'es';

            $languageFile = 'locallang_'.$local_language.'.xfl';

            $message = array(
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':jqueryWarning'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':invalidKeyWarning'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':socialDefaultTitle'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':analyticsDefaultTitle'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':socialDefaultDescription'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':analyticsDefaultDescription'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':notificationTitle'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':seeDetails'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':seeDetailsImplicit'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':hideDetails'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':savePreference'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':allowCookies'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':allowCookiesImplicit'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':privacySettings'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':privacySettingsDialogTitleA'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':privacySettingsDialogSubtitle'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':closeWindow'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':preferenceConsent'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':preferenceDecline'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':notificationTitleImplicit'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':informationCookies'),
                $GLOBALS['TSFE']->sL('LLL:EXT:aip_cookie_law/Resources/Private/Language/'.$languageFile.':textOff')
            );

            return json_encode($message, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        }


        protected function labelLanguage($uidLang){

            $sys_languages = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
                'flag',
                'sys_language',
                'uid='.$uidLang
            );
            foreach ($sys_languages as $row) {
                $languageIcon=$row['flag'];
            }
            return $languageIcon;
        }

    }
