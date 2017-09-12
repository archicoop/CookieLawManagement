 var compDefault = {
        cookies: {
            social: {},
            analytics: {}
        },
        settings: {
        },
        strings: {
        }
 };

 var count = 0;
 if (typeof componente != 'undefined'){
     jQuery.each(componente.settings, function (key, value) {
            if (key == 'consenttype' && value == 'Opt-in(Explicit)')
                componente.settings[key] = 'explicit'
            if (key == 'consenttype' && value == 'Opt-out(Implicit)')
                componente.settings[key] = 'implicit'
            count ++;
     });
 }

 if (count == 0){
    cc.initialise(compDefault);
 }else{
    cc.initialise(componente);

 }




