/*
 Copyright 2012-2013 Silktide Ltd.

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>
*/

var cc =
{
    version: '1.0.10',
    jqueryversionrequired: '1.4.4',
    initobj: false,
    ismobile: false,
    setupcomplete: false,
    allasked: false,
    checkedlocal: false,
    frommodal: false,
    hassetupmobile: false,
    noclosewin: false,
    closingmodal: false,
    jqueryattempts: 0,
    reloadkey: false,
    forcereload: false,
    allagree: true,
    refreshOnConsent: true,
    hideallsitesbutton: false,
    cookies: {},
    uniqelemid: 0,
    executionblock: 0,
    defaultCookies: { social: {}, analytics: {}},
    cookieAnalytics: ['_ga', '_gat' ,'__utmt' ,'__utma' ,'__utmb' ,'__utmc' ,'__utmz'],
    approved: {},
    onlyshowbanneronce: false,
    scriptdelay: 800,
    bindfunctions: {},
    eumemberstates: [
        "BE",//"Belgium"
        "BG",//"Bulgaria"
        "CZ",//"Czech Republic"
        "DK",//"Denmark"
        "DE",//"Germany"
        "EE",//"Estonia"
        "IE",//"Ireland"
        "EL",//"Grecia"
        "GR",//"Greece"
        "ES",//"Spain"
        "FR",//"France"
        "IT",//"Italy"
        "CY",//"Cyprus"
        "LV",//"Latvia"
        "LT",//"Lithuania"
        "LU",//"Luxembourg"
        "HU",//"Hungary"
        "MT",//"Malta"
        "NL",//"Netherlands" (Paesi Bassi-Olanda)
        "AT",//"Austria"
        "PL",//"Poland"
        "PT",//"Portugal"
        "RO",//"Romania"
        "SI",//"Slovenia"
        "SK",//"Slovakia"
        "FI",//"Finland"
        "SE",//"Sweden"
        "UK",// "Regno Unito"
        "GB",// "United Kingdom"
        "EU" //"Europe"
    ],
    noteumemberstates: [
        "A1",//"Anonymous Proxy"
        "A2",//"Satellite Provider"
        "O1",//"Other Country"
        "AD",//"Andorra"
        "AE",//"United Arab Emirates"
        "AF",//"Afghanistan"
        "AG",//"Antigua and Barbuda"
        "AI",//"Anguilla"
        "AL",//"Albania"
        "AN",// antille olandesi
        "AM",//"Armenia"
        "AO",//"Angola"
        "AP",//"Asia/Pacific Region"
        "AQ",//"Antarctica"
        "AR",//"Argentina"
        "AS",//"American Samoa"
        "AU",//"Australia"
        "AW",//"Aruba"
        "AX",//"Aland Islands"
        "AZ",//"Azerbaijan"
        "BA",//"Bosnia and Herzegovina"
        "BB",//"Barbados"
        "BD",//"Bangladesh"
        "BF",//"Burkina Faso"
        "BH",//"Bahrain"
        "BI",//"Burundi"
        "BJ",//"Benin"
        "BL",//"Saint Bartelemey"
        "BM",//"Bermuda"
        "BN",//"Brunei Darussalam"
        "BO",//"Bolivia"
        "BQ",//"Bonaire, Saint Eustatius and Saba"
        "BR",//"Brazil"
        "BS",//"Bahamas"
        "BT",//"Bhutan"
        "BV",//"Bouvet Island"
        "BW",//"Botswana"
        "BY",//"Belarus"
        "BZ",//"Belize"
        "CA",//"Canada"
        "CC",//"Cocos (Keeling) Islands"
        "CD",//"Congo, The Democratic Republic of the"
        "CF",//"Central African Republic"
        "CG",//"Congo"
        "CH",//"Switzerland"
        "CI",//"Cote d'Ivoire"
        "CK",//"Cook Islands"
        "CL",//"Chile"
        "CM",//"Cameroon"
        "CN",//"China"
        "CO",//"Colombia"
        "CR",//"Costa Rica"
        "CS",//"Serbia e Montenegro"
        "CU",//"Cuba"
        "CV",//"Cape Verde"
        "CW",//"Curacao"
        "CX",//"Christmas Island"
        "DJ",//"Djibouti"
        "DM",//"Dominica"
        "DO",//"Dominican Republic"
        "DZ",//"Algeria"
        "EC",//"Ecuador"
        "EG",//"Egypt"
        "EH",//"Western Sahara"
        "ER",//"Eritrea"
        "ET",//"Ethiopia"
        "FJ",//"Fiji"
        "FK",//"Falkland Islands (Malvinas)"
        "FM",//"Micronesia, Federated States of"
        "FO",//"Faroe Islands"
        "GA",//"Gabon"
        "GD",//"Grenada"
        "GE",//"Georgia"
        "GF",//"French Guiana"
        "GG",//"Guernsey"
        "GH",//"Ghana"
        "GI",//"Gibraltar"
        "GL",//"Greenland"
        "GM",//"Gambia"
        "GN",//"Guinea"
        "GP",//"Guadeloupe"
        "GQ",//"Equatorial Guinea"
        "GS",//"South Georgia and the South Sandwich Islands"
        "GT",//"Guatemala"
        "GU",//"Guam"
        "GW",//"Guinea-Bissau"
        "GY",//"Guyana"
        "HK",//"Hong Kong"
        "HM",//"Heard Island and McDonald Islands"
        "HN",//"Honduras"
        "HR",//"Croatia"
        "HT",//"Haiti"
        "ID",//"Indonesia"
        "IL",//"Israel"
        "IM",//"Isle of Man"
        "IN",//"India"
        "IO",//"British Indian Ocean Territory"
        "IQ",//"Iraq"
        "IR",//"Iran, Islamic Republic of"
        "IS",//"Iceland"
        "JE",//"Jersey"
        "JM",//"Jamaica"
        "JO",//"Jordan"
        "JP",//"Japan"
        "KE",//"Kenya"
        "KG",//"Kyrgyzstan"
        "KH",//"Cambodia"
        "KI",//"Kiribati"
        "KM",//"Comoros"
        "KN",//"Saint Kitts and Nevis"
        "KP",//"Korea, Democratic People's Republic of"
        "KR",//"Korea, Republic of"
        "KW",//"Kuwait"
        "KY",//"Cayman Islands"
        "KZ",//"Kazakhstan"
        "LA",//"Lao People's Democratic Republic"
        "LB",//"Lebanon"
        "LC",//"Saint Lucia"
        "LI",//"Liechtenstein"
        "LK",//"Sri Lanka"
        "LR",//"Liberia"
        "LS",//"Lesotho"
        "LY",//"Libyan Arab Jamahiriya"
        "MA",//"Morocco"
        "MC",//"Monaco"
        "MD",//"Moldova, Republic of"
        "ME",//"Montenegro"
        "MF",//"Saint Martin"
        "MG",//"Madagascar"
        "MH",//"Marshall Islands"
        "MK",//"Macedonia"
        "ML",//"Mali"
        "MM",//"Myanmar"
        "MN",//"Mongolia"
        "MO",//"Macao"
        "MP",//"Northern Mariana Islands"
        "MQ",//"Martinique"
        "MR",//"Mauritania"
        "MS",//"Montserrat"
        "MU",//"Mauritius"
        "MV",//"Maldives"
        "MW",//"Malawi"
        "MX",//"Mexico"
        "MY",//"Malaysia"
        "MZ",//"Mozambique"
        "NA",//"Namibia"
        "NC",//"New Caledonia"
        "NE",//"Niger"
        "NF",//"Norfolk Island"
        "NG",//"Nigeria"
        "NI",//"Nicaragua"
        "NO",//"Norway"
        "NP",//"Nepal"
        "NR",//"Nauru"
        "NU",//"Niue"
        "NZ",//"New Zealand"
        "OM",//"Oman"
        "PA",//"Panama"
        "PE",//"Peru"
        "PF",//"French Polynesia"
        "PG",//"Papua New Guinea"
        "PH",//"Philippines"
        "PK",//"Pakistan"
        "PM",//"Saint Pierre and Miquelon"
        "PN",//"Pitcairn"
        "PR",//"Puerto Rico"
        "PS",//"Palestinian Territory"
        "PW",//"Palau"
        "PY",//"Paraguay"
        "QA",//"Qatar"
        "RE",//"Reunion"
        "RS",//"Serbia"
        "RU",//"Russian Federation"
        "RW",//"Rwanda"
        "SA",//"Saudi Arabia"
        "SB",//"Solomon Islands"
        "SC",//"Seychelles"
        "SD",//"Sudan"
        "SG",//"Singapore"
        "SH",//"Saint Helena"
        "SJ",//"Svalbard and Jan Mayen"
        "SL",//"Sierra Leone"
        "SM",//"San Marino"
        "SN",//"Senegal"
        "SO",//"Somalia"
        "SR",//"Suriname"
        "SS",//"South Sudan"
        "ST",//"Sao Tome and Principe"
        "SV",//"El Salvador"
        "SX",//"Sint Maarten"
        "SY",//"Syrian Arab Republic"
        "SZ",//"Swaziland"
        "TC",//"Turks and Caicos Islands"
        "TD",//"Chad"
        "TF",//"French Southern Territories"
        "TG",//"Togo"
        "TH",//"Thailand"
        "TJ",//"Tajikistan"
        "TK",//"Tokelau"
        "TL",//"Timor-Leste"
        "TM",//"Turkmenistan"
        "TN",//"Tunisia"
        "TO",//"Tonga"
        "TR",//"Turkey"
        "TT",//"Trinidad and Tobago"
        "TV",//"Tuvalu"
        "TW",//"Taiwan"
        "TZ",//"Tanzania, United Republic of"
        "UA",//"Ukraine"
        "UG",//"Uganda"
        "UM",//"United States Minor Outlying Islands"
        "US",//"United States"
        "UY",//"Uruguay"
        "UZ",//"Uzbekistan"
        "VA",//"Città del Vaticano"
        "VC",//"Saint Vincent e Grenadine"
        "VE",//"Venezuela"
        "VI",//"Isole Vergini Americane"
        "VG",//"Isole Vergini Britanniche"
        "VN",//"Vietnam"
        "VU",//"Vanuatu"
        "WF",//"Wallis e Futuna"
        "WS",//"Samoa"
        "YE",//"Yemen"
        "YT",//"Mayotte"
        "ZA",//"Sud Africa"
        "ZM",//"Zambia"
        "ZW"//"Zimbabwe"
    ],

    settings: {

        style: "light",
        bannerPosition: "bottom",
        tagPosition: 'bottom-right',
        hideprivacysettingstab: 1,
        hidepopupprivatesettings: 1,
        onlyshowwithineu: 1,
        httpserviceapilocation:'http://api.wipmania.com/jsonp?',
        consenttype: 'explicit',
        confirmClick:1,
        confirmScroll:1,
        idPageInformation:47,
        cookieExpire:365

    },

    strings: {
        jqueryWarning: "Developer: Caution! You need to use jQuery 1.4.4 or higher.",
        invalidKeyWarning: "Developer: Warning! You must provide a valid API.",
        socialDefaultTitle: "Social media",
        analyticsDefaultTitle: "Analytics",
        socialDefaultDescription: "Facebook, Twitter and other social websites need to know who you are to work properly.",
        analyticsDefaultDescription: "We anonymously measure your use of this website to improve your experience.",
        notificationTitle: "Your experience on this site will be improved by allowing cookies",
        seeDetails: "see details",
        seeDetailsImplicit: "change your settings",
        hideDetails: "hide details",
        savePreference: 'Save preference',
        allowCookies: 'Allow cookies',
        allowCookiesImplicit: 'Close',
        privacySettings: "Privacy settings",
        privacySettingsDialogTitleA: "Privacy settings",
        privacySettingsDialogSubtitle: "Some features of this website need your consent to remember who you are.",
        closeWindow: "Close window",
        preferenceConsent: "I consent",
        preferenceDecline: "I decline",
        notificationTitleImplicit: "We use cookies to ensure you get the best experience on our website",
        informationCookies:"Information on Cookies",
        textOff: "player off press cookies"
    },

    geturlparameter: function (name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if (results == null)
            return false;
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    },

    isfunction: function (functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
    },

    setup: function () {
        jQuery.each(cc.bindfunctions, function (key, value) {
            for (i = 0; i < value.length; i++) {
                jQuery(document).bind("cc_" + key, value[i]);
            }
        });
        verstr = jQuery().jquery;
        parts = verstr.split('.');
        versionRequired = cc.jqueryversionrequired.split('.');
        jqueryOk = true;
        for (i = 0; i < parts.length && i < versionRequired.length; i++) {
            currentpart = parseInt(parts[i]);
            requiredpart = parseInt(versionRequired[i]);
            if (currentpart < requiredpart) {
                /* Unsatisfied - this part of the version string is less than the version we require */
                jqueryok = false;
                break;
            }
            if (currentpart > requiredpart) {
                /* Satisfied - this part of the version string is greater than the version we require */
                break;
            }
            /* This version is the same as the one we require.  Check the next part of the version number. */
        }
        if (!jqueryOk) {
            alert(cc.strings.jqueryWarning);
        }

        jQuery.each(cc.defaultCookies, function (key, value) {
             if (key == "social") {
                cc.defaultCookies[key].title = cc.strings.socialDefaultTitle;
                cc.defaultCookies[key].description = cc.strings.socialDefaultDescription;
            }
            else if (key == "analytics") {
                cc.defaultCookies[key].title = cc.strings.analyticsDefaultTitle;
                cc.defaultCookies[key].description = cc.strings.analyticsDefaultDescription;
            }

        });
        jQuery.each(cc.initobj.cookies, function (key, value) {

            if (!value.title) {
                if (key == "social") {
                    cc.initobj.cookies[key].title = cc.strings.socialDefaultTitle;
                }
                else if (key == "analytics") {
                    cc.initobj.cookies[key].title = cc.strings.analyticsDefaultTitle;
                }
               else {
                    cc.initobj.cookies[key].title = cc.strings.defaultTitle;
                }
            }
            if (!value.description) {
                if (key == "social") {
                    cc.initobj.cookies[key].description = cc.strings.socialDefaultDescription;
                }
                else if (key == "analytics") {
                    cc.initobj.cookies[key].description = cc.strings.analyticsDefaultDescription;
                }
                else {
                    cc.initobj.cookies[key].description = cc.strings.defaultDescription;
                }
            }

            if (!value.defaultstate) {
                cc.initobj.cookies[key].defaultstate = "on";
            }

            cc.initobj.cookies[key].asked = false;
            cc.initobj.cookies[key].approved = false;
            cc.initobj.cookies[key].executed = false;
            cc.executeoff(key);
        });

        testmode = cc.geturlparameter('cctestmode');
        if (testmode == 'accept' || testmode == 'decline') {
            cc.settings.testmode = testmode;
        }
       /* if (cc.settings.disableallsites) {
            cc.hideallsitesbutton = true;
        }*/
        for (var attrname in cc.initobj.cookies) {
            cc.cookies[attrname] = cc.initobj.cookies[attrname];
            if (cc.settings.testmode == "accept") {
                cc.approved[attrname] = "yes";
            }
            if (cc.settings.testmode == "decline") {
                cc.approved[attrname] = "no";
            }
        }

    },

    initialise: function (obj) {

        /* controlla che l'oggetto abbia il suo vettore di lingua valorizzato
           altrimenti utilizza quello di default
        */
        var stringLanguage = cc.messageLanguage();
        if (stringLanguage != '' && stringLanguage != 'error')
           obj.strings = stringLanguage;
        cc.initobj = obj;

        if (obj.settings !== undefined) {
            for (var attrname in obj.settings) {
                this.settings[attrname] = obj.settings[attrname];
            }
        }
        if (obj.strings !== undefined) {
            for (var attrname in obj.strings) {
                this.strings[attrname] = obj.strings[attrname];
            }
        }


        cc.settings.style = "cc-" + cc.settings.style;
        cc.settings.bannerPosition = "cc-" + cc.settings.bannerPosition;


        if (window.jQuery) {
           cc.setupcomplete = true;
           cc.setup();

        }
    },
    insertscript: function (script) {
        var newfile = document.createElement('script');
        newfile.setAttribute("type", "text/javascript");
        newfile.setAttribute("src", script);
        document.getElementsByTagName("head")[0].appendChild(newfile);
    },

    insertscripttag: function (content) {
        var newfile = document.createElement('script');
        newfile.setAttribute("type", "text/javascript");
        newfile.innerHTML = content;
        document.getElementsByTagName("head")[0].appendChild(newfile);
    },

    checklocal: function () {
        this.checkedlocal = true;
        jQuery.each(cc.cookies, function (key, value) {
            cookieval = cc.getcookie('cc_' + key);
            if (cookieval) {
                cc.approved[key] = cookieval;
            }
        });
        this.checkapproval();
    },


    deletecookie: function (key) {
        date = new Date();
        date.setDate(date.getDate() - 1);
        document.cookie = escape("cc_" + key) + '=; path=/; expires=' + date;

    },

    removecookieAnalytics: function (key, sPath, sDomain) {
        for (var i = 0; i < cc.cookieAnalytics.length; i++){
            if (key == cc.cookieAnalytics[i]){
                document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");

            }
        }
    },


    reloadifnecessary: function () {
        if (cc.refreshOnConsent || cc.ismobile || cc.forcereload) {
            setTimeout("location.reload(true);", 0);
        }
    },

    onkeyup: function (e) {
        if (e.keyCode == 27) {
            cc.closemodals();
        }
    },

    closemodals: function () {
        if (!cc.closingmodal) {
            if (cc.noclosewin) {
                cc.noclosewin = false;
            } else {
                    if (jQuery('#cc-modal').is(":visible")) {
                        jQuery('#cc-modal .cc-modal-closebutton a').click();
                    }

                    if (jQuery('#cc-settingsmodal').is(":visible")) {
                        jQuery('#cc-settingsmodal #cc-settingsmodal-closebutton a').click();
                    }

            }
        }
    },

    showbanner: function () {

        jQuery('#cc-tag').fadeOut(null, function () {
            jQuery(this).remove();
        });
        jQuery('#cc-notification').remove();
        if (cc.ismobile) {
            cc.setupformobile();
            jQuery('head').append('<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">');

        }
        data = '<div id="cc-notification">' +
            '<div id="cc-notification-wrapper">' +
            '<h2><span>' + cc.strings.notificationTitle + '</span></h2>' +
            '<div id="cc-notification-permissions">' +
            '</div>' +
            '<ul class="cc-notification-buttons">' +
            '<li>' +
            '<a class="cc-link" href="#" id="cc-approve-button-thissite">' + cc.strings.allowCookies + '</a>' +
            '</li>' +
            '</ul>' +
            '<div class="cc-clear"></div>' +
            '</div>' +
            '</div>';

        jQuery('body').prepend(data);
        if (cc.hideallsitesbutton) {
            jQuery('#cc-approve-button-allsites').hide();
        }
        if (cc.settings.consenttype == 'implicit') {
            jQuery('#cc-notification h2 span').html(cc.strings.notificationTitleImplicit)
            jQuery('#cc-approve-button-thissite').html(cc.strings.allowCookiesImplicit);
            jQuery('#cc-approve-button-thissite').parent().after(jQuery('#cc-approve-button-allsites').parent());
            jQuery('#cc-approve-button-allsites').hide();
        }
        jQuery('#cc-notification-logo').hide();
        jQuery('#cc-notification').addClass(cc.settings.style).addClass(cc.settings.bannerPosition);
        bannerh = jQuery('#cc-notification').height();
        jQuery('#cc-notification').hide();
        if (cc.ismobile) {
            jQuery('#cc-notification').addClass("cc-mobile");
        }
        jQuery('#cc-notification-permissions').prepend('<ul></ul>');
        allcustom = true;
        jQuery.each(cc.cookies, function (key, value) {
            if (!value.asked) {
                jQuery('#cc-notification-permissions ul').append('<li><input type="checkbox" checked="checked" id="cc-checkbox-' + key + '" /> <label id="cc-label-' + key + '" for="cc-checkbox-' + key + '"><strong>' + value.title + '</strong> ' + value.description + '</label></li>');
                if (value.link) {
                    jQuery('#cc-label-' + key).append(' <a target="_blank" href="' + value.link + '" class="cc-learnmore-link">' + cc.strings.learnMore + '</a>');
                }
                if (key == "social" || key == "analytics" ) {
                    allcustom = false;
                }
                jQuery('#cc-checkbox-' + key).change(function () {
                    if (jQuery(this).is(':checked')) {
                        jQuery(this).parent().removeClass('cc-notification-permissions-inactive');
                    } else {
                        jQuery(this).parent().addClass('cc-notification-permissions-inactive');

                    }
                });
                if (value.defaultstate == "off") {
                    jQuery('#cc-checkbox-' + key).removeAttr("checked").parent().addClass('cc-notification-permissions-inactive');
                }
                if (key == "necessary") {
                    jQuery('#cc-checkbox-' + key).attr("disabled", "disabled");
                }
            }
        });
        jQuery('#cc-notification-wrapper h2').append(' - <a href="/index.php?id=' + cc.settings.idPageInformation + '">' +cc.strings.informationCookies+'</a>');
        jQuery('#cc-notification-wrapper h2').append(' - <a class="cc-link" href="#" id="cc-notification-moreinfo">' + cc.strings.seeDetails + '</a>');

        if (cc.settings.consenttype == "implicit") {
            jQuery('#cc-notification-moreinfo').html(cc.strings.seeDetailsImplicit);
        }

        jQuery('#cc-notification-moreinfo').click(function () {
            if (jQuery(this).html() == cc.strings.seeDetails || jQuery(this).html() == cc.strings.seeDetailsImplicit) {
                if (cc.settings.consenttype == 'implicit') {
                    if (!cc.hideallsitesbutton) {
                        jQuery('#cc-approve-button-allsites').show();
                    }
                }
                jQuery('#cc-approve-button-thissite').html(cc.strings.savePreference);
                jQuery(this).html(cc.strings.hideDetails);
            } else {
                jQuery.each(cc.cookies, function (key, value) {
                    if (value.defaultstate == "off") {
                        jQuery('#cc-checkbox-' + key).removeAttr("checked");
                        jQuery(this).parent().addClass('cc-notification-permissions-inactive');
                    } else {
                        jQuery('#cc-checkbox-' + key).attr('checked', 'checked');
                        jQuery(this).parent().removeClass('cc-notification-permissions-inactive');

                    }
                });

                if (cc.settings.consenttype == 'implicit') {
                    jQuery(this).html(cc.strings.seeDetailsImplicit);
                    jQuery('#cc-approve-button-thissite').html(cc.strings.allowCookiesImplicit);
                    jQuery('#cc-approve-button-allsites').hide();
                } else {
                    jQuery(this).html(cc.strings.seeDetails);
                    jQuery('#cc-approve-button-thissite').html(cc.strings.allowCookies);
                    jQuery('#cc-approve-button-allsites').html(cc.strings.allowForAllSites);
                }

            }
            jQuery('#cc-notification-logo').fadeToggle();
            jQuery('#cc-notification-permissions').slideToggle();
            jQuery(this).blur();
            return false;
        });

        if (!cc.ismobile) {
            if (cc.settings.bannerPosition == "cc-push") {
                jQuery('html').animate({marginTop: bannerh}, 400);
            }
            jQuery('#cc-notification').slideDown();
        } else {
            jQuery('#cc-notification').show();
        }



        if (cc.settings.confirmClick == 1 && cc.settings.consenttype == 'implicit'){
            jQuery(window).addClass(cc.settings.style).click(cc.onlocalconsentgiven);
        }
        if (cc.settings.confirmScroll == 1 && cc.settings.consenttype == 'implicit'){
            jQuery(window).addClass(cc.settings.style).scroll(cc.onlocalconsentgiven);
        }
        jQuery('#cc-approve-button-thissite').click(cc.onlocalconsentgiven);

       if (allcustom) {
            jQuery('#cc-notification h2 span').html(cc.strings.customCookie);

        }

    },

    timestamp: function () {
        return Math.round((new Date()).getTime() / 1000);
    },

    locationcallback: function (data) {
        status = cc.jsonserviceapi(data);
        if (status != "error") {
            ineu = "yes";
            if (jQuery.inArray(status, cc.eumemberstates) == -1) {
                //Visitor is from outside EU
                ineu = "no";
                jQuery.each(cc.cookies, function (key, value) {
                    cc.approved[key] = "yes";
                });
                cc.settings.hideprivacysettingstab = 1;
                cc.settings.hidepopupprivatesettings = 1;
            }
            cc.setcookie('cc_ineu', ineu, cc.settings.cookieExpire);
        }else{
            alert(cc.strings.invalidKeyWarning)
        }

        cc.checkapproval();
    },



    checkapproval: function () {

        if (cc.settings.onlyshowwithineu != 1) {
            ineu = cc.getcookie('cc_ineu');
            if (ineu) {
                if (ineu == "no") {
                    jQuery.each(cc.cookies, function (key, value) {
                        cc.approved[key] = "yes";
                    });
                    cc.settings.hideprivacysettingstab = 1;
                    cc.settings.hidepopupprivatesettings = 1;



                }
            } else {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(cc.success);
                }
            }
        }
        cc.allasked = true;
        jQuery.each(cc.cookies, function (key, value) {
            if (cc.approved[key]) {
                if (cc.approved[key] == "yes" ){
                    cc.cookies[key].asked = true;
                    cc.cookies[key].approved = true;
                    cc.execute(key);
            } else if ( cc.approved[key] == "no") {
                    cc.cookies[key].asked = true;
                    cc.cookies[key].approved = false;
                    cc.executeoff(key);
                } else {

                    cc.allasked = false;
                }
            } else {

                cc.allasked = false;
            }
        });
        if (!cc.allasked) {
            if (!cc.checkedlocal) {
                cc.checklocal();
                return;
            }
            if (cc.settings.consenttype == "implicit") {
                jQuery.each(cc.cookies, function (key, value) {
                    if (!cc.cookies[key].asked) {
                        if (cc.onlyshowbanneronce) {
                            cc.setcookie('cc_' + key, 'yes', cc.settings.cookieExpire);
                        }
                        cc.execute(key);
                    }
                });
            }
            // visualizzare il banner iniziale
           if (cc.settings.hideprivacysettingstab == 1){
                cc.showbanner();
            }

        } else {
            if (cc.settings.hidepopupprivatesettings == 1) {
                cc.showminiconsent();
            }
        }
    },

    success:function(position) {
        if (position){
            jQuery.getScript(cc.settings.httpserviceapilocation+"callback=cc.locationcallback");
            return;
        }

    },


    execute: function (cookieType) {
        if (cookieType == "necessary") {
            return;
        }
        jQuery('.cc-placeholder-' + cookieType).remove();
        jQuery('script.cc-onconsent-' + cookieType + '[type="text/plain"]').each(function () {

            var str = jQuery(this).text();
            var initframe = str.indexOf("<iframe");
            if (initframe > -1){
                var theframe = str.indexOf("</iframe>");
                var strframe = str.substring(initframe, theframe+9);
                jQuery(this).next().hide()
                jQuery(this).after(strframe)
            }else{
                if (jQuery(this).attr('src')) {
                    jQuery(this).next().hide();
                    jQuery(this).after('<script type="text/javascript" src="' + jQuery(this).attr('src') + '"></script>');
                } else {
                    jQuery(this).next().hide();
                    jQuery(this).after('<script type="text/javascript">' + jQuery(this).html() + '</script>');

                }
            }

        });

        cc.cookies[cookieType].executed = true;
        jQuery(document).trigger("cc_" + cookieType);

        cc.executescriptinclusion(cookieType);

    },


    executeoff: function (cookieType) {
        if (cookieType == "necessary") {
            return;
        }
        var i = 0;

        jQuery('script.cc-onconsent-' + cookieType + '[type="text/plain"]').each(function () {
                i++;
                var str_id ="id_"+cookieType+"_"+i;
                if ($('#'+str_id).length == 0){
                    var vuoto = "<div class='image_off' id="+str_id+"><span class='text_off'><span class='bg_text'>"+cc.strings.textOff+"</span></span></div>" ;
                    jQuery(this).after(vuoto);
                }

        });

    },


    executescriptinclusion: function (cookieType) {
        timetaken = jQuery('script.cc-onconsent-inline-' + cookieType + '[type="text/plain"]').length * cc.scriptdelay;
        now = new Date().getTime();
        if (now < cc.executionblock) {
            setTimeout(cc.executescriptinclusion, cc.executionblock - now, [cookieType]);
            return;
        }
        cc.executionblock = now + timetaken;

        cc.insertscripts(cookieType);
    },

    insertscripts: function (cookieType) {

        jQuery('script.cc-onconsent-inline-' + cookieType + '[type="text/plain"]').first().each(function () {
            cc.uniqelemid++;

            if (jQuery(this).parents('body').length  > 0) {
                jQuery(this).after('<div id="cc-consentarea-' + cc.uniqelemid + '" class="' + cookieType + '"></div>');
                document.write = function (g) {
                    jQuery('#cc-consentarea-' + cc.uniqelemid).append(g);
                };
                document.writeln = function (g) {
                    jQuery('#cc-consentarea-' + cc.uniqelemid).append(g);
                };
            }

            if (jQuery(this).attr('src')) {
                jQuery(this).after('<script type="text/javascript" src="' + jQuery(this).attr('src') + '"></script>');
            } else {
                jQuery(this).after('<script type="text/javascript">' + jQuery(this).html() + '</script>');
            }
            jQuery(this).remove();


        });

        if (jQuery('script.cc-onconsent-inline-' + cookieType + '[type="text/plain"]').length > 0) {
            setTimeout(cc.insertscripts, cc.scriptdelay, [cookieType]);
        }

    },

    getcookie: function (c_name) {
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) {
                return unescape(y);
            }
        }
        return false;
    },

    setcookie: function (name, value, expirydays) {
        var exdate = new Date();
        exdate.setTime(exdate.getTime()+(expirydays*24*60*60*1000));
        document.cookie = name + '=' + value + '; expires=' + exdate.toGMTString() + '; path=/'
    },




    onremoteconsentgiven: function () {
        cc.allagree = true;
        jQuery.each(cc.cookies, function (key, value) {
            if (!value.approved && !value.asked) {
                if (jQuery('#cc-checkbox-' + key).is(':checked')) {

                    cc.approved[key] = "yes";

                    cc.cookies[key].asked = true;
                } else {

                    cc.approved[key] = "no";

                    cc.allagree = false;
                    cc.cookies[key].asked = true;

                }
                cc.setcookie('cc_' + key, cc.approved[key], cc.settings.cookieExpire);
            } else {
            }
        });


        if (!cc.ismobile) {
            jQuery('#cc-notification').slideUp();
            if (cc.settings.bannerPosition == "cc-push") {
                //detect body margin
                jQuery('html').animate({marginTop: 0}, 400);
            }
        }
        cc.checkapproval();

        return false;
    },

    onlocalconsentgiven: function () {
        enableall = false;
        enablejustone = false;
        if (jQuery(this).hasClass('cc-button-enableall') || jQuery(this).hasClass('cc-button-enable-all')) {
            enableall = true;
            jQuery.each(cc.cookies, function (key, value) {
                cc.cookies[key].asked = false;
            });
        }
        elem = this;
        jQuery.each(cc.cookies, function (key, value) {
            if (jQuery(elem).hasClass('cc-button-enable-' + key)) {
                enablejustone = true;
                cc.approved[key] = "yes";
                cc.cookies[key].asked = true;
                cc.setcookie('cc_' + key, cc.approved[key], cc.settings.cookieExpire);
            }
        });

        cc.allagree = true;
        if (!enablejustone) {
            jQuery.each(cc.cookies, function (key, value) {
                if (!value.approved && !value.asked) {
                    if (enableall || jQuery('#cc-checkbox-' + key).is(':checked')) {
                        cc.approved[key] = "yes";
                        cc.cookies[key].asked = true;
                    } else {
                        cc.approved[key] = "no";
                        cc.cookies[key].asked = true;
                        cc.allagree = false;
                    }
                    cc.setcookie('cc_' + key, cc.approved[key], cc.settings.cookieExpire);
                } else {
                }
            });
        }

        if (!cc.allagree && cc.settings.consenttype == "implicit") {
            cc.forcereload = true;
        }

        if (!cc.ismobile) {
            jQuery('#cc-notification').slideUp();
            if (cc.settings.bannerPosition == "cc-push") {
                //detect body margin
                jQuery('html').animate({marginTop: 0}, 400);
            }
        }
        cc.checkapproval();
        cc.reloadifnecessary();

        return false;
    },

    showminiconsent: function () {
        if (jQuery('#cc-tag').length == 0) {
            var data = '<div id="cc-tag" class="cc-tag-' + cc.settings.tagPosition + '"><a class="cc-link" href="#" id="cc-tag-button" title="' + cc.strings.privacySettings + '"><span>' + cc.strings.privacySettings + '</span></a></div>';
            jQuery('body').prepend(data);
            jQuery('#cc-tag').addClass(cc.settings.style);
            if (cc.settings.hideprivacysettingstab == 1) {
                if (cc.settings.hidepopupprivatesettings == 1){
                    jQuery('#cc-tag').fadeIn();
                }
            } else {
                jQuery('#cc-tag').hide();
            }
            jQuery('.cc-privacy-link').click(cc.showmodal);
            jQuery('#cc-tag-button').click(cc.showmodal);



            // disabilito tutti gli iframe id_social_
            if (cc.approved['social'] == 'no'){
                var iframe_id_social = jQuery("div[id^='id_social']")
                iframe_id_social.each(function(){
                    jQuery(this).children().click(cc.showmodal);
                })
            }

            // disabilito tutti gli iframe id_analytics_
            if (cc.approved['analytics'] == 'no'){
                var iframe_id_analytics = jQuery("div[id^='id_analytics']")
                iframe_id_analytics.each(function(){
                    jQuery(this).children().click(cc.showmodal);
                })
            }
        }

    },
    getsize: function (obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    },



    showmodal: function () {

        jQuery(document).bind('keyup', cc.onkeyup);
        jQuery('body').prepend('<div id="cc-modal-overlay"></div>');
        jQuery(this).blur();
        if (cc.ismobile) {
            cc.setupformobile();
        }
        data = '<div id="cc-modal">' +
            '<div id="cc-modal-wrapper">' +
            '<h2>' + cc.strings.privacySettingsDialogTitleA + '</h2>' +
            '<p class="cc-subtitle">' + cc.strings.privacySettingsDialogSubtitle + '</p>' +

            '<div class="cc-content">' +
            '</div>' +

            '<div class="cc-clear"></div>' +

            '<p id="cc-modal-closebutton" class="cc-modal-closebutton"><a class="cc-link" href="#" title="' + cc.strings.closeWindow + '"><span>' + cc.strings.closeWindow + '</span></a></p>' +
            '<div id="cc-modal-footer-buttons">' +
            '<div class="cc-clear"></div>' +
            '</div>' +
            '</div>';
        jQuery('body').prepend(data);
        if (cc.settings.confirmClick == 1)
            jQuery('#cc-modal').addClass(cc.settings.style).click(cc.closemodals);
        if (cc.settings.confirmScroll == 1)
           jQuery(window).addClass(cc.settings.style).scroll(cc.closemodals);

        if (cc.ismobile) {
            jQuery('#cc-modal').addClass("cc-mobile");
        }
        cc.reloadmodal();
        jQuery('#cc-modal').fadeIn();
        jQuery('#cc-modal-overlay').fadeIn();
        jQuery('#cc-modal-wrapper').click(function () {
            cc.noclosewin = true;
        });
        jQuery('#cc-modal .cc-modal-closebutton a').click(function () {
            cc.showhidemodal();
            cc.reloadifnecessary();
            return false;
        });

        jQuery('#cc-modal-global').click(function () {
            cc.frommodal = true;
            cc.gotosettings();
            return false;
        });
        jQuery('#cc-tag-button').unbind('click').click(cc.showhidemodal);
        jQuery('.cc-privacy-link').unbind('click').click(cc.showhidemodal);

        //parte aggiuntiva
        if (cc.approved['social'] == 'no'){
            var iframe_id_social = jQuery("div[id^='id_social']")
            iframe_id_social.each(function(){
                jQuery(this).children().unbind('click').click(cc.showmodal);
            })
        }
        if (cc.approved['analytics'] == 'no'){
            var iframe_id_analytics = jQuery("div[id^='id_analytics']")
            iframe_id_analytics.each(function(){
                jQuery(this).children().unbind('click').click(cc.showmodal);
            })
        }

        return false;
    },

    closepreferencesmodal: function () {
        jQuery.each(cc.defaultCookies, function (key, value) {
            value = jQuery('#cc-globalpreference-selector-' + key).val();
            if (cc.approved[key] != "yes" && cc.approved[key] != "no") {
                cc.approved[key] = value;
                cc.setcookie('cc_' + key, cc.approved[key], cc.settings.cookieExpire);
            }

        });


        jQuery('#cc-notification').hide().remove();
        jQuery(this).blur();
        jQuery('#cc-settingsmodal').fadeOut(null, function () {
            jQuery('#cc-settingsmodal').remove();
        });
        if (!cc.frommodal) {
            cc.checkapproval();
            cc.reloadifnecessary();
        } else {
            cc.frommodal = false;
            cc.showhidemodal();
        }
        return false;
    },

    showhidemodal: function () {
        jQuery(this).blur();
        cc.checkedlocal = false;
        if (jQuery('#cc-modal').is(":visible") && !cc.frommodal) {
            cc.closingmodal = true;
            jQuery('#cc-modal-overlay').fadeToggle(null, function () {
                cc.closingmodal = false;
            });
            jQuery.each(cc.cookies, function (key, value) {
                thisval = jQuery('#cc-preference-selector-' + key).val();

                if (key == "necessary") {
                    thisval = "yes";
                }

                if (thisval == "no") {
                    var str_domain = window.location.hostname;
                    var id = str_domain.indexOf("www");
                    if (id != -1)
                        var s_domain = str_domain.substring(id+3);
                    cc.cookies[key].approved = false;
                    cc.approved[key] = "no";
                    cc.setcookie('cc_' + key, cc.approved[key], cc.settings.cookieExpire);
                    var i, x, Arraycookie = document.cookie.split(";");
                    for (i = 0; i < Arraycookie.length; i++) {
                        x = Arraycookie[i].substr(0, Arraycookie[i].indexOf("="));
                        x = x.replace(/^\s+|\s+$/g, "");
                        if (key == 'analytics'){
                            cc.removecookieAnalytics(x,'/',s_domain);
                        }
                    }

                } else if (thisval == "yes") {
                    cc.cookies[key].approved = true;
                    cc.approved[key] = "yes";
                    cc.setcookie('cc_' + key, cc.approved[key], cc.settings.cookieExpire);


                } else {
                    cc.cookies[key].approved = false;
                    cc.deletecookie(key);
                    delete cc.approved[key];
                }
                cc.cookies[key].asked = false;

            });
            cc.checkapproval();
        } else if (!jQuery('#cc-settingsmodal').is(":visible") && !jQuery('#cc-modal').is(":visible")) {
            cc.closingmodal = true;
            jQuery('#cc-modal-overlay').fadeToggle(null, function () {
                cc.closingmodal = false;
            });
        }
        if (cc.ismobile) {
            jQuery('#cc-modal').toggle();
        } else {
            jQuery('#cc-modal').fadeToggle();
        }
        return false;
    },


    reloadmodal: function () {
        jQuery('#cc-modal-wrapper .cc-content').html('');
        if (cc.getsize(cc.cookies) > 0) {
            jQuery('#cc-modal-wrapper .cc-content').append('<ul></ul>');
            jQuery.each(cc.cookies, function (key, value) {
                jQuery('#cc-modal-wrapper ul').append('<li id="cc-preference-element-' + key + '"><label for="cc-preference-selector-' + key + '"><strong>' + value.title + '</strong><span>' + value.description + '</span></label><select id="cc-preference-selector-' + key + '"><option value="yes">' + cc.strings.preferenceConsent + '</option><option value="no">' + cc.strings.preferenceDecline + '</option></select></li>');
                if (value.link) {
                    jQuery('#cc-preference-element-' + key + ' label span').append(' <a target="_blank" href="' + value.link + '" class="cc-learnmore-link">' + cc.strings.learnMore + '</a>');
                }
                jQuery('#cc-change-button-allsites').unbind('click').click(function () {
                    cc.frommodal = true;
                    cc.gotosettings();
                    return false;
                });
                jQuery('#cc-preference-selector-' + key).change(function () {

                });
                if (key == "necessary") {
                    jQuery('#cc-preference-selector-' + key).remove();
                }
                if (cc.approved[key] == "yes") {
                    jQuery('#cc-preference-selector-' + key).val("yes")
                }
                else if (cc.approved[key] == "no") {
                    jQuery('#cc-preference-selector-' + key).val("no")
                }
                else {
                    jQuery('#cc-preference-selector-' + key).val("global")
                }

            });
        } else {
            jQuery('#cc-modal-wrapper .cc-content').append('<p>' + cc.strings.notUsingCookies + '</p>');
        }
        jQuery('.cc-content').append('<div class="cc-clear"></div>');
    },

    gotosettings: function () {
        if (jQuery('#cc-modal').is(":visible")) {
            cc.showhidemodal();
        }
        jQuery(this).blur();
        if (cc.ismobile) {
            cc.setupformobile();
            jQuery('#cc-notification').remove();
        }
        if (cc.frommodal) {
            buttontext = cc.strings.backToSiteSettings;
        } else {
            buttontext = cc.strings.closeWindow;
        }

        data = '<div id="cc-settingsmodal">' +
            '<div id="cc-settingsmodal-wrapper">' +
            '<div class="cc-content">' +
            '</div>' +
            '<div class="cc-clear"></div>' +
            '<p id="cc-settingsmodal-closebutton" class="cc-settingsmodal-closebutton"><a class="cc-link" href="#" title="' + buttontext + '"><span>' + buttontext + '</span></a></p>' +
            '<div id="cc-settingsmodal-footer-buttons">' +
            '<p id="cc-settingsmodal-secondclosebutton" class="cc-settingsmodal-closebutton"><a class="cc-link" href="#" title="' + buttontext + '"><span>' + buttontext + '</span></a></p>' +
            '</div>' +
            '</div>' +
            '</div>';
        jQuery('body').prepend(data);
        if (cc.settings.confirmClick == 1)
            jQuery('#cc-settingsmodal').addClass(cc.settings.style).click(cc.closemodals);
        if (cc.settings.confirmScroll == 1)
            jQuery('#cc-settingsmodal').addClass(cc.settings.style).scroll(cc.closemodals);

        jQuery('#cc-settingsmodal-wrapper').click(function () {
            cc.noclosewin = true;
        });
        if (cc.ismobile) {
            jQuery('#cc-settingsmodal').addClass("cc-mobile");
        }
        jQuery('#cc-settingsmodal').fadeIn();
        jQuery('.cc-settingsmodal-closebutton').click(cc.closepreferencesmodal);

        return false;
    },

    setupformobile: function () {
        if (!cc.hassetupmobile) {
            cc.hassetupmobile = true;
            jQuery('head').append('<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">');
            if (cc.settings.style == 'cc-light') {
                bgcol = '#e1e1e1';
            } else {
                bgcol = '#1d1d1d'
            }
        }
    },

    onfirstload: function () {
        if (!cc.setupcomplete && cc.initobj) {

            if (!(window.jQuery)) {
                cc.jqueryattempts++;
                if (cc.jqueryattempts >= 5) {
                    return;
                }
                setTimeout(cc.onfirstload, 200);
                return;
            }

            cc.setupcomplete = true;
            cc.setup();

        }
        setTimeout(cc.afterload, 50);
        cc.checkapproval();

    },

    afterload: function () {
        jQuery('.cc-button-enableall').addClass('cc-link').click(cc.onlocalconsentgiven);
        jQuery('.cc-button-enable-all').addClass('cc-link').click(cc.onlocalconsentgiven);
        jQuery.each(cc.cookies, function (key, value) {
            jQuery('.cc-button-enable-' + key).addClass('cc-link').click(cc.onlocalconsentgiven);
        });
    },


    jsonserviceapi:function(data){
        var searchstates = '';
        var acronyms_countries = jQuery.map(data, function(value, index) { return[value]; });
         for (var i = 0; i <= acronyms_countries.length; i++){

            if (acronyms_countries[i] instanceof Object){
                var elem_acronyms_countries = jQuery.map(acronyms_countries[i], function(value, index) { return[value]; });
                for (var j = 0; j <= elem_acronyms_countries.length; j++){
                    if (jQuery.inArray(elem_acronyms_countries[j], cc.eumemberstates) >=0){
                        searchstates = elem_acronyms_countries[j]
                        break;
                    }else if(jQuery.inArray(elem_acronyms_countries[j], cc.noteumemberstates) >= 0){
                        searchstates = elem_acronyms_countries[j]
                        break;
                    }
                }
            }else{
                // controllo se il paese è della comunità europea
                 if (jQuery.inArray(acronyms_countries[i], cc.eumemberstates) >=0){
                     searchstates = acronyms_countries[i]
                     break;
                 }else if(jQuery.inArray(acronyms_countries[i], cc.noteumemberstates) >= 0){
                     searchstates = acronyms_countries[i]
                     break;
                 }
            }
        }
        if (searchstates == '') searchstates = 'error'
        return searchstates;

    },


    messageLanguage :function () {
        var ajaxResponse = '';
        var objectLanguage = '';
        var lang = cc.localeLanguage();
        var url = '';
        if (lang != 0)
            url =  window.location.protocol + '//' + window.location.hostname + lang + '?type=1525962364';
        else
            url =  window.location.protocol + '//' + window.location.hostname + '/?type=1525962364';

		
			
        jQuery.ajax({
            async: false,
            type:'POST',
            //inserire indirizzo della root
            url: url,
            dataType : 'text',
            success : function (response)
            {
                ajaxResponse = response;
            },
            error: function( req, status, err ) {
                console.log( 'something went wrong:', status, err );
                ajaxResponse = 'error'
            }
        });
        if (ajaxResponse != 'error'){
            var indResponse = ajaxResponse.split('","')
            var strMessage = [];
            for (var i = 0; i < indResponse.length; i++){
                strMessage[i] = indResponse[i].replace('["','');
                if (i == 21){
                    idx = indResponse[i].indexOf('"]');
                    strMessage[i] = indResponse[i].substring(0, idx);
                }
            }

            objectLanguage = {
                strings:{
                    jqueryWarning: strMessage[0],
                    invalidKeyWarning: strMessage[1],
                    socialDefaultTitle: strMessage[2],
                    analyticsDefaultTitle: strMessage[3],
                    socialDefaultDescription: strMessage[4],
                    analyticsDefaultDescription: strMessage[5],
                    notificationTitle: strMessage[6],
                    seeDetails: strMessage[7],
                    seeDetailsImplicit: strMessage[8],
                    hideDetails: strMessage[9],
                    savePreference: strMessage[10],
                    allowCookies: strMessage[11],
                    allowCookiesImplicit: strMessage[12],
                    privacySettings: strMessage[13],
                    privacySettingsDialogTitleA: strMessage[14],
                    privacySettingsDialogSubtitle: strMessage[15],
                    closeWindow: strMessage[16],
                    preferenceConsent: strMessage[17],
                    preferenceDecline: strMessage[18],
                    notificationTitleImplicit: strMessage[19],
                    informationCookies:strMessage[20],
                    textOff:strMessage[21]
                }
            }
            return objectLanguage.strings;
        }
        else
           return ajaxResponse;
    },

    localeLanguage :function () {

        var aip_cookie_language = jQuery('meta[name=aip_cookielaw_language]').attr('content');
        if (aip_cookie_language !== undefined)
            return aip_cookie_language;
        else
           return 0;

    }

}

if (!(window.jQuery)) {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
    s.setAttribute('type', 'text/javascript');
    document.getElementsByTagName('head')[0].appendChild(s);

    if (window.onload != null) {
        var oldOnload = window.onload;
        window.onload = function (e) {
            oldOnload(e);
            cc.onfirstload();
        };
    } else {

            window.onload = cc.onfirstload;
    }

} else {
     jQuery(document).ready(cc.onfirstload);
}

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device - modified so that cc.ismobile is true
 *
 **/
(function (a) {
    cc.ismobile = /android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
