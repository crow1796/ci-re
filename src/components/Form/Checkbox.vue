<template>
    <div class="mb-4">
        <input class="styled-checkbox" 
            :id="name" 
            type="checkbox"
            v-model="model">
        <label :for="name" class="text-grey-darker">
            {{ label }}
        </label>
    </div>
</template>


<script>
import ModelMixin from './Mixins/ModelMixin.vue'
import NamedMixin from './Mixins/NamedMixin.vue'
import TextMixin from './Mixins/TextMixin.vue'

export default {
    mixins: [ModelMixin, NamedMixin, TextMixin]
}
</script>

<style lang="scss" scoped>
.styled-checkbox {
  position: absolute; // take it out of document flow
  opacity: 0; // hide it

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  // Box.
  & + label:before {
    content: '';
    margin-right: 5px;
    display: inline-block;
    vertical-align: text-top;
    width: 17px;
    height: 17px;
    background: #dadada;
  }

  // Box hover
  &:hover + label:before {
    background: #c92228;
  }

  // Box checked
  &:checked + label:before {
    background: #c92228;
  }
  
  // Disabled state label.
  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  // Disabled box.
  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  // Checkmark. Could be replaced with an image
  &:checked + label:after {
    content: '';
    position: absolute;
    left: 3px;
    top: 8px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 
      2px 0 0 white,
      4px 0 0 white,
      4px -2px 0 white,
      4px -4px 0 white,
      4px -6px 0 white,
      4px -8px 0 white;
    transform: rotate(45deg);
  }
}
</style>
