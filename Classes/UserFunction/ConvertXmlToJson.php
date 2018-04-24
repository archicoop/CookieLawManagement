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

             if ($_GET['L'] != null)
                $locallang = self::labelLanguage($_GET['L']);
            else
                $locallang = $GLOBALS['TSFE']->config['config']['language'];

            if (
                $locallang == 'gb' || $locallang == 'scotland' ||
                $locallang == 'uk' || $locallang == 'england' ||
                $locallang == 'vg' || $locallang == 'wales' ||
                $locallang == 'qc' || $locallang == 'fam' ||
                $locallang == 'vi' || $locallang == 'eu')
                $locallang = 'en';

            if ($locallang == 'catalonia')
                $locallang = 'es';

            $languageFile = 'LLL:EXT:aip_cookie_law/Resources/Private/Language/';
            $languageFile.= ($locallang == 'en') ? 'locallang.xlf' : $locallang . '.locallang.xlf' ;

            $message = array(
                $GLOBALS['TSFE']->sL($languageFile.':jqueryWarning'),
                $GLOBALS['TSFE']->sL($languageFile.':invalidKeyWarning'),
                $GLOBALS['TSFE']->sL($languageFile.':socialDefaultTitle'),
                $GLOBALS['TSFE']->sL($languageFile.':analyticsDefaultTitle'),
                $GLOBALS['TSFE']->sL($languageFile.':socialDefaultDescription'),
                $GLOBALS['TSFE']->sL($languageFile.':analyticsDefaultDescription'),
                $GLOBALS['TSFE']->sL($languageFile.':notificationTitle'),
                $GLOBALS['TSFE']->sL($languageFile.':seeDetails'),
                $GLOBALS['TSFE']->sL($languageFile.':seeDetailsImplicit'),
                $GLOBALS['TSFE']->sL($languageFile.':hideDetails'),
                $GLOBALS['TSFE']->sL($languageFile.':savePreference'),
                $GLOBALS['TSFE']->sL($languageFile.':allowCookies'),
                $GLOBALS['TSFE']->sL($languageFile.':allowCookiesImplicit'),
                $GLOBALS['TSFE']->sL($languageFile.':privacySettings'),
                $GLOBALS['TSFE']->sL($languageFile.':privacySettingsDialogTitleA'),
                $GLOBALS['TSFE']->sL($languageFile.':privacySettingsDialogSubtitle'),
                $GLOBALS['TSFE']->sL($languageFile.':closeWindow'),
                $GLOBALS['TSFE']->sL($languageFile.':preferenceConsent'),
                $GLOBALS['TSFE']->sL($languageFile.':preferenceDecline'),
                $GLOBALS['TSFE']->sL($languageFile.':notificationTitleImplicit'),
                $GLOBALS['TSFE']->sL($languageFile.':informationCookies'),
                $GLOBALS['TSFE']->sL($languageFile.':textOff')
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
