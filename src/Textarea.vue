<template>
  <div :class="wrapperClasses">
    <label v-if="content.label" :for="textareaId" :class="labelClasses">
      {{ content.label }}
      <span v-if="content.required" class="text-destructive ml-1">*</span>
    </label>
    
    <textarea
      :id="textareaId"
      :placeholder="content.placeholder"
      :disabled="content.disabled"
      :readonly="content.readonly"
      :required="content.required"
      :rows="content.rows"
      :cols="content.cols"
      :maxlength="content.maxLength"
      :minlength="content.minLength"
      :class="textareaClasses"
      :value="modelValue"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      v-bind="$attrs"
    />
    
    <div v-if="content.showCounter && content.maxLength" :class="counterClasses">
      {{ (modelValue || '').length }} / {{ content.maxLength }}
    </div>
    
    <div v-if="content.helpText || hasError" :class="helpTextClasses">
      <span v-if="hasError" class="text-destructive">{{ errorMessage }}</span>
      <span v-else-if="content.helpText" class="text-muted-foreground">{{ content.helpText }}</span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { cn } from './cn.js'

export default {
  name: 'WewebTextarea',
  inheritAttrs: false,
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        placeholder: '',
        label: '',
        helpText: '',
        disabled: false,
        readonly: false,
        required: false,
        rows: 4,
        cols: null,
        maxLength: null,
        minLength: null,
        showCounter: false,
        resize: 'vertical',
        customClasses: '',
        errorMessage: '',
        hasError: false
      })
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue', 'change', 'focus', 'blur'],
  setup(props, { emit }) {
    const textareaId = `textarea-${Math.random().toString(36).substr(2, 9)}`

    const resizeClasses = {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize'
    }

    const wrapperClasses = computed(() => cn(
      "w-full",
      props.content.customClasses
    ))

    const labelClasses = computed(() => cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block"
    ))

    const textareaClasses = computed(() => cn(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      resizeClasses[props.content.resize] || resizeClasses.vertical,
      {
        "border-destructive": hasError.value
      }
    ))

    const counterClasses = computed(() => cn(
      "text-xs text-muted-foreground mt-1 text-right"
    ))

    const helpTextClasses = computed(() => cn(
      "text-sm mt-2"
    ))

    const hasError = computed(() => props.content.hasError || !!props.content.errorMessage)
    const errorMessage = computed(() => props.content.errorMessage)

    const handleInput = (event) => {
      const value = event.target.value
      emit('update:modelValue', value)
      
      // Update Weweb variable if defined
      if (props.content.wewebVariable && typeof wwLib !== 'undefined') {
        wwLib.wwVariable.updateValue(props.content.wewebVariable, value)
      }
    }

    const handleChange = (event) => {
      emit('change', event)
      
      // Execute Weweb workflow if defined
      if (props.content.changeWorkflowId && typeof wwLib !== 'undefined') {
        wwLib.executeWorkflow(props.content.changeWorkflowId)
      }
    }

    const handleFocus = (event) => {
      emit('focus', event)
    }

    const handleBlur = (event) => {
      emit('blur', event)
    }

    return {
      textareaId,
      wrapperClasses,
      labelClasses,
      textareaClasses,
      counterClasses,
      helpTextClasses,
      hasError,
      errorMessage,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur
    }
  }
}
</script>

<style>
/* Import global shadcn/ui styles */
@import './globals.css';
</style> 