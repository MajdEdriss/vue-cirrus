<template>
  <span
    :class="squared ? 'usquare' : dSquared ? 'usquare delay' : null"
  >
    <a
      :href="href"
      :class="classes"
      :target="blank ? '_blank' : ''"
      :data-tooltip=tooltipData
      @click="$emit('click', $event)"
    >
      <slot></slot>
    </a>
  </span>
</template>

<script>
import Tooltip from '@/mixins/tooltip';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Tooltip,
    Animations,
  ],

  props: {
    href: {
      type: String,
      default: '#',
    },
    blank: {
      type: Boolean,
      default: false,
    },
    ltr: {
      type: Boolean,
      default: false,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
    c: {
      type: Boolean,
      default: false,
    },
    oltr: {
      type: Boolean,
      default: false,
    },
    ortl: {
      type: Boolean,
      default: false,
    },
    oc: {
      type: Boolean,
      default: false,
    },
    olr: {
      type: Boolean,
      default: false,
    },
    orl: {
      type: Boolean,
      default: false,
    },
    squared: {
      type: Boolean,
      default: false,
    },
    dSquared: {
      type: Boolean,
      default: false,
    },
    underlined: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return Object.assign(
        this.tooltipMixins,
        this.animationsMixins,
        {
          'u u-LR': this.ltr,
          'u u-RL': this.rtl,
          'u u-C': this.c,
          'utb utb-LR': this.oltr,
          'utb utb-RL': this.ortl,
          'utb utb-C': this.oc,
          'utb utb-OLR': this.olr,
          'utb utb-ORL': this.orl,
          'utb utb-OLR sq': this.squared,
          'utb utb-OLR delay': this.dSquared,
          underline: this.underlined,
        },
      );
    },
  },
};
</script>
