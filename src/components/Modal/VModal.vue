<template>
  <div
    :class="[
      'modal',
      {
        'modal-large': this.size === 'large',
        'modal-small': this.size === 'small',
        'modal-animated--zoom-in': this.animation === 'zoomIn',
        'modal-animated--zoom-out': this.animation === 'zoomOut',
        'modal-animated--dropdown': this.animation === 'dropdown',
        'dark': this.dark,
      },
    ]"
    :id="mId"
  >
    <a
      :href="closeTarget"
      class="modal-overlay close-btn"
      aria-label="Close"
    ></a>
    <div
      class="modal-content"
      role="document"
    >
      <div class="modal-header">
        <a
          :href="closeTarget"
          class="u-pull-right"
          aria-label="Close"
          style="font-size: 20px;"
        >X</a>
        <div class="modal-title">{{title}}</div>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Modal Dialog',
    },
    closeTarget: {
      type: String,
      default: '#target',
    },
    mId: {
      type: String,
      default: 'modal',
    },
    animation: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.modal.dark .modal-content {
  background-color: #272727;
  color: white;
}
</style>
