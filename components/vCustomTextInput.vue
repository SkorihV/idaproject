<template>
  <div class="form__group-item">
    <label class="form__label" :class="{'required': isRequired}" :for="idForLabel">{{labelText}} <i class="requiredMark"></i> </label>
    <input
      v-if="typeInput === 'text'"
      v-model="inputValue"
      class="form__input"
      :required=isRequired
      type="text"
      :id="idForLabel"
      :placeholder="placeholder"
    >
    <textarea
      v-else-if="typeInput === 'textarea'"
      v-model="inputValue"
      class="form__textarea"
      :required=isRequired
      :id="idForLabel"
      :placeholder="placeholder">
    </textarea>
    <div
      class="form__padding-error"
      v-if="!isRequiredCheck"
    >Обязательное поле для заполнения</div>
    <div class="form__padding-error"
         v-else-if="!isLengthCheck">
      Заполнено {{inputValue.length}}   символов из {{validationRules?.length}}
    </div>
    <div class="form__padding-error"
         v-else-if="!isRegCheck">
      Не правильно заполнено поле
    </div>
  </div>



</template>

<script>
export default {
  name: "vCustomTextInput",
  props: {
    labelText: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: false
    },
    idForLabel: {
      type: String,
      require: true
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    validationRules: {
      type: Object,
      require: false,
      default: () => {}
    },
    typeInput: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'textarea'].includes(value);
      }
    }
  },
  beforeMount() {
    const dataAccess = {
      [this.idForLabel] : this.isRequiredCheck
    }
    console.log(dataAccess)
    this.$emit('checkedAccessValue', dataAccess );
  },
  data: () => {
    return {
      inputValue: '',
      valueAccess: false
    }
  },

  computed: {
    checkedValue(){
      let controlPoints = [];
      controlPoints.push(this.isRequiredCheck);

      if (this.validationRules?.length) {
        controlPoints.push(this.isLengthCheck);
      }
      if (this.validationRules?.reg) {
        controlPoints.push(this.isRegCheck);
      }
      return controlPoints.every( currentValue => currentValue);
    },
    isRegCheck() {
      if (this.validationRules?.reg) {
        return this.inputValue.match(this.validationRules.reg) !== null
      }
      return true;
    },
    isLengthCheck(){
      if (this.validationRules?.length) {
        return this.inputValue.length >= this.validationRules.length;
      }
      return true;
    },
    isRequiredCheck() {
      if (this.isRequired) {
        return  this.inputValue.length > 0
      }
      return true;
    }
  },
  watch: {
    inputValue(){
      this.valueAccess = this.checkedValue;
      const dataAccess = {
        [this.idForLabel] : this.valueAccess
      }
      this.$emit('checkedAccessValue', dataAccess );
    }
  }
}
</script>

<style lang="scss" scoped>

.requiredMark {
  display: none;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #FF8484;
}

.form {
  &__group-item {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 16px 0;
    box-sizing: border-box;
  }

  &__label {
    font-style: normal;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
    position: relative;
    display: flex;
    &.required .requiredMark {
      display: flex;
    }
  }
  &__input {
    background: #FFFEFB;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
  }
  &__input::placeholder {
    color: #B4B4B4;
    font-size: 12px;
    line-height: 15px;
  }

  &__padding-error {
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;

    color: #FF8484;
  }

}
</style>
