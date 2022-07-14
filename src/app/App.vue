<template>
  <div id="app">

    <!-- CALENDAR WEEK -->
    <CalendarWeek />

    <!-- CALENDAR ENTRY -->
    <CalendarEntry />

  </div>
</template>



<script>
// import CalendarWeek from "@/app/components/CalendarWeek"; (automatic import)
import CalendarWeek from "./components/CalendarWeek";
// import CalendarEntry from "@/app/components/CalendarEntry"; (automatic import)
import CalendarEntry from "./components/CalendarEntry";

export default {
  name: 'App',
  components: {
    CalendarEntry,
    CalendarWeek
  }
}
</script>



<style lang="scss">

html,
body,
#app {
  height: 100%;
}

#app {
  //background: #6e6e6e;
  background: #789;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}

</style>
