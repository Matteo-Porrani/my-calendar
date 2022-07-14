import {reactive} from 'vue';
import {seedData} from "./seed.js";

export const store = {
    state: {
        data: reactive(seedData),
    },
    getActiveDay() {
        return this.state.data.find(day => day.active);
    },
    setActiveDay(dayId) {
        this.state.data.map(dayObj => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
        });
    },
    submitEvent(eventDetails) {
        const activeDay = this.getActiveDay();
        activeDay.events.push({
           details: eventDetails,
           edit: false,
        });
    },
    editEvent(dayId, eventDetails) {
        // first we set all events to 'non-edit' state
        this.resetEditOfAllEvents();
        const eventObj = this.getEventObj(dayId, eventDetails);
        eventObj.edit = true;
    },
    updateEvent(dayId, originalEventDetails, updatedEventDetails) {
        const eventObj = this.getEventObj(dayId, originalEventDetails);

        // set the event details to the new details
        // and turn off editing
        eventObj.details = updatedEventDetails;
        eventObj.edit = false;

    },
    resetEditOfAllEvents() {
      this.state.data.map(dayObj => {
         dayObj.events.map(event => {
            event.edit = false;
         });
      });
    },
    getEventObj(dayId, eventDetails) {
        const dayObj = this.state.data.find(day => day.id === dayId);
        return dayObj.events.find(event => event.details === eventDetails);
    },

}

