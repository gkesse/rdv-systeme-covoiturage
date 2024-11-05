<template>
  <div>
    <v-row id="pad" role="navigation">
      <v-col
        cols="2"
        class="d-flex section justify-center align-center text-center text-uppercase text-body-2 pa-1"
      >
        <a
          :href="$t('pad.carpool.link')"
          :alt="$t('pad.carpool.title')"
          target="_blank"
        >
          {{ $t("pad.carpool.title") }}
        </a>
      </v-col>
      <v-col
        cols="2"
        class="section justify-center align-center text-center text-uppercase text-body-2 pa-1"
      >
        <a
          :href="$t('pad.mobility.link')"
          :alt="$t('pad.mobility.title')"
          target="_blank"
        >
          {{ $t("pad.mobility.title") }}
        </a>
        <br />
        <a
          :href="$t('pad.mobility.link')"
          :alt="$t('pad.mobility.title')"
          target="_blank"
          class="font-italic text-lowercase"
        >
          {{ $t("pad.mobility.subtitle") }}
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { merge } from "lodash";
import {
  messages_fr,
  messages_en,
} from "@translations/components/base/MHeader/";
import {
  messages_client_fr,
  messages_client_en,
} from "@clientTranslations/components/base/MHeader/";

let MessagesMergedFr = merge(messages_fr, messages_client_fr);
let MessagesMergedEn = merge(messages_en, messages_client_en);

export default {
  i18n: {
    messages: {
      fr: MessagesMergedFr,
      en: MessagesMergedEn,
    },
  },
  props: {
    locale: {
      type: String,
      default: "fr",
    },
  },
  data() {
    return {
      defaultLocale: "fr",
      dlocale: this.locale,
    };
  },
  created() {
    this.$root.$i18n.locale = this.dlocale;
  },
};
</script>

<style lang="scss" scoped>
#pad {
  background-color: #007b85;
  margin: 0px;
  color: white;
  font-family: Poppins, sans-serif !important;

  a {
    text-decoration: none;
    color: white;
    font-family: Poppins, sans-serif !important;
  }
  .section {
    border-right: 1px solid white;
    margin: 0px;
    vertical-align: middle;
  }
}
</style>
