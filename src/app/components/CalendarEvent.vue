<template>
  <div class="day-event" :style="getEventBackgroundColor">

    <div v-if="!event.edit">
      <span class="has-text-centered details is-size-6">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i class="fa fa-2x fa-pencil-square-o edit-icon"
           @click="editEvent(day.id, event.details)"></i>
        <i class="fa fa-2x fa-trash-o delete-icon"></i>
      </div>
    </div>

    <div v-if="event.edit">
      <input type="text" :placeholder="event.details" v-model="newEventDetails">
      <div class="has-text-centered icons">
        <i @click="updateEvent(day.id, event.details, newEventDetails)" class="fa fa-check"></i>
      </div>
    </div>

  </div>
</template>

<script>
import {store} from '../store.js';

export default {
  name: "CalendarEvent",
  props: ['day', 'event'],
  data() {
    return {
      newEventDetails: '',
    }
  },
  methods: {
    editEvent(dayId, eventDetails) {
      store.editEvent(dayId, eventDetails);
    },
    updateEvent(dayId, originalEventDetails, updatedEventDetails) {
      if (updatedEventDetails === '') updatedEventDetails = originalEventDetails;
      store.updateEvent(dayId, originalEventDetails, updatedEventDetails);
      this.newEventDetails = '';
    },
  },
  computed: {
    getEventBackgroundColor() {
      const colors = ['#F99', '#8df', '#9F9'];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    }
  }
}
</script>

<style lang="scss" scoped>

.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4C4C4C;
  padding: 5px;

  .details {
    display: block;
  }

  .icons .fa {
    padding: 0 2px;
  }

  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #FFF;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
}

</style>