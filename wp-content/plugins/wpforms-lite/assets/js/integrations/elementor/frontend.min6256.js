"use strict";var WPFormsElementorFrontend=window.WPFormsElementorFrontend||function(o,e,r){var t={forceLoadChoices:!1,forceSetStripe:!1,init:function(){t.events()},events(){e.addEventListener("elementor/popup/show",function(e){e=r("#elementor-popup-modal-"+e.detail.id).find(".wpforms-form");e.length&&(t.forceSetStripe=!0,t.initFields(e))}),r(o).on("elementor/popup/show",()=>{t.forceLoadChoices=!0,wpforms.loadChoicesJS()}),r(o).on("wpformsBeforeLoadElementChoices",(e,o)=>{t.isFormInElementorPopup(o)&&!t.forceLoadChoices&&e.preventDefault()}),r(o).on("wpformsBeforeStripePaymentElementSetup",(e,o)=>{t.isFormInElementorPopup(o)&&!t.forceSetStripe&&e.preventDefault()})},isFormInElementorPopup(e){return r(e).parents('div[data-elementor-type="popup"]').length},initFields:function(e){wpforms.ready(),"undefined"!=typeof wpformsModernFileUpload&&wpformsModernFileUpload.init(),"undefined"!=typeof wpformsRecaptchaLoad&&("recaptcha"===wpformsElementorVars.captcha_provider&&"v3"===wpformsElementorVars.recaptcha_type?"undefined"!=typeof grecaptcha&&grecaptcha.ready(wpformsRecaptchaLoad):wpformsRecaptchaLoad()),"undefined"!=typeof WPFormsRepeaterField&&WPFormsRepeaterField.ready(),"undefined"!=typeof WPFormsStripePaymentElement&&WPFormsStripePaymentElement.setupStripeForm(e),r(o).trigger("wpforms_elementor_form_fields_initialized",[e])}};return t}(document,window,jQuery);WPFormsElementorFrontend.init();