<template>
  <div class="form-ext-control">
    <label class="form-ext-toggle__label">
      <span><slot /></span>
      <div :class="[
        'form-ext-toggle',
        {
          'form-ext-toggle--success': this.success,
          'form-ext-toggle--error': this.error,
        },
      ]">
        <input
          :name="name"
          type="checkbox"
          class="form-ext-input"
          :checked="checked"
          :disabled="disabled"
          @change="$emit('change', $event)"
        >
        <div class="form-ext-toggle__toggler">
          <i :data-check-icon="dataCheckIcon" :data-uncheck-icon="dataUncheckIcon"></i>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    dataCheckIcon: {
      type: String,
      default: '',
    },
    dataUncheckIcon: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'toggleCheckbox',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
