<template>
  <div class="day column" @click="setActiveDay(day.id)">
    <div class="day-banner has-text-white has-text-centered is-size-4">{{ day.abbvTitle }}</div>
    <div class="day-details">
      <div class="day-number has-text-centered is-size-5">{{ day.id }}</div>

      <!-- DAY EVENTS -->
      <CalendarEvent v-for="(event, index) in day.events"
                     :key="index"
                     :event="event"
                     :day="day"/>

    </div>
  </div>
</template>

<script>
import {store} from '../store.js';
import CalendarEvent from './CalendarEvent.vue';

export default {
  name: "CalendarDay",
  props: ['day'],
  methods: {
    setActiveDay(dayId) {
      store.setActiveDay(dayId);
    }
  },
  components: {
    CalendarEvent
  },
};

</script>

<style lang="scss" scoped>

.day {
  //background-color: #4A4A4A;
  background-color: #567;
  color: #FFF;
  border-left: 1px solid #8F8F8F;
  border-bottom: 1px solid #8F8F8F;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    //background: darken(#4A4A4A, 3%);
    background: lighten(#567, 6%);
  }

  .day-banner {
    //background-color: #333333;
    background-color: #345;
    color: #FFF;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 600;
  }

  .day-details {
    padding: 10px;

    .day-number {
      color: #fd3;
    }
  }

  &:last-child {
    border-right: 1px solid #8F8F8F;
  }
}
</style>

