<template>
  <div :class="['field', 'field-upload', { 'field-error': invalid }]">
    <div
      class="drop-file"
      :class="{
        'drop-file': true,
        'is-loading': isSaving,
        'is-dragging': isDragging
      }"
      aria-live="polite"
      @click="selectFile"
      @drag.prevent=""
      @dragstart.prevent="isDragging = true"
      @dragend.prevent="isDragging = false"
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @dragenter.prevent="isDragging = true"
      @drop.prevent="isDragging = false; onFileChange($event, true)"
    >
      <label :for="name">{{ label }}</label>
      <input
        :id="name"
        ref="input"
        type="file"
        v-bind="$attrs"
        :name="name"
        :accept="accept"
        class="sr-only"
        :aria-describedby="name + 'Error ' + name + 'Instructions ' + name + 'Specs'"
        @change="onFileChange($event, false)"
      >
      <div v-if="!selectedFile" class="no-file">
        <div class="icon d-none d-md-block">
          <b-icon-upload />
        </div>
        <div class="icon d-md-none">
          <b-icon-camera />
        </div>
        <div :id="name + 'Instructions'" class="instructions d-none d-md-block">
          {{ $t('verify_id.instructions_desktop') }}
        </div>
        <div class="instructions d-md-none">
          {{ $t('verify_id.instructions_mobile') }}
        </div>
        <div :id="name + 'Specs'" class="instructions-detail" v-html="$t('verify_id.filetypes')" />
      </div>
      <div v-else class="has-file">
        <div v-if="isSaving">
          <div class="icon">
            <b-icon-circle-fill animation="throb" />
          </div>
          <div class="instructions">
            {{ $t('verify_id.uploading') }}
          </div>
        </div>
        <div v-else>
          <div class="icon success">
            <b-icon-file-earmark-check />
          </div>
          <div :id="name + 'Instructions'" class="instructions success">
            {{ $t('verify_id.uploaded') }}
          </div>
        </div>
      </div>
      <div v-if="invalidMessage && invalid" :id="name + 'Error'" class="invalid-message">
        {{ invalidMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { BIconUpload, BIconCamera, BIconFileEarmarkCheck, BIconCircleFill } from 'bootstrap-vue'

export default {
  name: 'InputFile',

  components: {
    BIconUpload,
    BIconCamera,
    BIconFileEarmarkCheck,
    BIconCircleFill
  },

  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    accept: {
      type: String,
      default: 'image/*,application/pdf'
    },
    required: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    },
    invalidMessage: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      selectedFile: null,
      uploadedFile: null,
      errors: [],
      isSaving: false,
      isDragging: false
    }
  },

  methods: {
    onFileChange (e, dragged) {
      this.errors = []
      this.selectedFile = dragged ? e.dataTransfer.files[0] : e.target.files[0]
      this.isSaving = true

      const formData = new FormData()
      formData.append('file', this.selectedFile)

      this.$api.uploadFile('id_validation', formData)
        .then((response) => {
          this.uploadedFile = response.file
          this.$emit('change', response.file)
        }).catch((errors) => {
          this.errors = errors
        }).then(() => {
          this.isSaving = false
        })
    },

    selectFile () {
      this.$refs.input.click()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

.field-upload {
  padding: 1rem;
  background: $white;

  .drop-file {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 240px;
    flex-direction: column;
    border: 2px var(--gray-300) dashed;
    border-radius: $card-radius;
    cursor: pointer;
    text-align: center;
    transition: 150ms ease-in-out;

    &.is-dragging,
    &.is-dragging:hover,
    &:focus-within {
      background: rgba($primary, .15);
      border-color: var(--primary);
    }

    &:hover {
      background: var(--gray-100);
      border-color: var(--gray-400);
    }
  }
}

label {
  font-size: 1.5rem;
  color: $text-muted;
}

.icon {
  font-size: 2.5rem;
  color: $text-muted;
}

.instructions {
  color: $text-supermuted;
  font-size: 1rem;

  &-detail {
    color: $text-supermuted;
    font-size: .85rem;
  }
}

.success {
  color: $success;
}

.field-error {
  .drop-file {
    border-color: $danger;
    background-color: rgba($danger, .15);

    &:hover {
      border-color: darken($danger, 10%);
      background-color: rgba($danger, .25);
    }
  }
}

.invalid-message {
  position: absolute;
  background: $danger;
  bottom: .5rem;
  left: .5rem;
  right: .5rem;
  font-size: .75rem;
  color: $white;
  border-radius: 4px;
}
</style>
