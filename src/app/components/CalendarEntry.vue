<template>
  <div id="calendar-entry" class="has-text-centered">
    <div class="calendar-entry-note">
      <p class="calendar-entry-day is-size-5">Day of event:
        <span class="tag is-primary is-size-4 has-text-weight-bold">{{ titleOfActiveDay }}</span>
      </p>
      <input type="text" placeholder="Type Something" v-model="inputEntry" required/>
      <p v-if="error" class="error-alert tag is-danger is-size-6 has-text-weight-bold">
        You must type something first!
      </p>
      <a class="button is-info is-big is-outlined"
         @click="submitEvent(inputEntry)"
      >Submit</a>
    </div>

  </div>
</template>


<script>
import {store} from '../store.js';

export default {
  name: "CalendarEntry",
  data() {
    return {
      inputEntry: '',
      error: false,
    }
  },
  methods: {
    submitEvent(eventDetails) {
      if (eventDetails === '') return this.error = true;

      // the component 'submitEvent()' method relies on its equivalent in 'store.js'
      store.submitEvent(eventDetails);
      this.inputEntry = '';
      this.error = false;
    },
  },
  computed: {
    titleOfActiveDay() {
      return store.getActiveDay().fullTitle;
    }
  }
};
</script>


<style lang="scss" scoped>

// SCSS for #calendar-entry
#calendar-entry {
  background: #FFF;
  border: 1px solid #42b883;
  border-radius: 10px;
  width: 40vw;
  margin: 0 auto;
  padding: 20px;

  .calendar-entry-note {
    input {
      display: block;
      width: 300px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #CCC;
      font-size: 15px;
      height: 30px;
      margin-inline: auto;
      margin-bottom: 30px;

      &:focus {
        outline: none;
      }
    }

    .calendar-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .error-alert {
      display: block !important;
      width: fit-content;
      margin: 30px auto;

    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }


}

</style>