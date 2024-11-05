'use strict'

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {fr, en} from 'vuetify/es5/locale'

import Vuetify, {
    VApp, VContainer, VFlex, VLayout, VMain, VSpacer, VRow, VCol, VForm, VChip, VAlert, VTextarea, VTextField, VSelect, VAutocomplete, VTooltip, VSwitch, VMenu, VDatePicker, VTimePicker, VIcon,
    VTabs, VTabsItems, VTab, VTabItem, VCheckbox, VAvatar, VCard, VCardTitle, VCardSubtitle, VCardActions, VDivider, VList, VListItem, VListItemIcon, VListItemContent, VListItemTitle, VListItemSubtitle,
    VSkeletonLoader, VSnackbar, VDataIterator, VOverlay, VDialog, VSlider, VCarousel, VCarouselItem, VSheet, VResponsive,
    VFileInput, VProgressCircular, VProgressLinear, VSimpleTable, VDataTable, VListItemGroup, VListItemAvatar, VListItemAction, VStepper, VStepperHeader, VStepperStep, VStepperItems, VStepperContent, VRadioGroup, VRadio, VTimeline, VTimelineItem,
    VExpansionPanels, VExpansionPanel, VExpansionPanelHeader, VExpansionPanelContent, VBadge, VPagination, VItemGroup,
    VToolbar, VAppBar, VToolbarTitle, VToolbarItems, VBtn, VFabTransition, VImg,
    VFooter, VCardText
} from 'vuetify/lib'

Vue.use(Vuetify, {
    components: {
        // vuetify
        VApp, VContainer, VFlex, VLayout, VMain, VSpacer, VRow, VCol, VForm, VChip, VAlert, VTextarea, VTextField, VSelect, VAutocomplete, VTooltip, VSwitch, VMenu, VDatePicker, VTimePicker, VIcon,
        VTabs, VTabsItems, VTab, VTabItem, VCheckbox, VAvatar, VCard, VCardTitle, VCardSubtitle, VCardActions, VDivider, VList, VListItem, VListItemIcon, VListItemContent, VListItemTitle, VListItemSubtitle,
        VSkeletonLoader, VSnackbar, VDataIterator, VOverlay, VDialog, VSlider, VCarousel, VCarouselItem, VSheet, VResponsive,
        VFileInput, VProgressCircular, VProgressLinear, VSimpleTable, VDataTable, VListItemGroup, VListItemAvatar, VListItemAction, VStepper, VStepperHeader, VStepperStep, VStepperItems, VStepperContent, VRadioGroup, VRadio, VTimeline, VTimelineItem,
        VExpansionPanels, VExpansionPanel, VExpansionPanelHeader, VExpansionPanelContent, VBadge, VPagination, VItemGroup,
        VToolbar, VAppBar, VToolbarTitle, VToolbarItems, VBtn, VFabTransition, VImg,
        VFooter, VCardText
    }
});

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'fr',
    fallbackLocale: 'fr',
    silentTranslationWarn: true
});

const vuetify = new Vuetify({
    lang: {
        locales: {fr, en},
        current: 'fr',
    }
});

export {
    Vue,
    vuetify,
    i18n
}
