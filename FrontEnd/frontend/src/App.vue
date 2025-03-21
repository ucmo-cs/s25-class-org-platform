<template>

  <div class="Sidebar">
    hello
  </div>
  <div class="calendar">
    <div class="calendar-header">
      <button @click="prevMonth">Prev</button>
      <span>{{ currentMonth }} {{ currentYear }}</span>
      <button @click="nextMonth">Next</button>
    </div>
    <div class="calendar-body">
      <div class="days-of-week">
        <div v-for="day in daysOfWeek" :key="day" class="day">
          {{ day }}
        </div>
      </div>
      <div class="calendar-days">
        <div v-for="(day, index) in currentDays" :key="index" class="calendar-day">
          {{ day }}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  data() {
    return {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
    daysOfWeek() {
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    },
    currentDays() {
      const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
      const lastDate = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

      let days = [];

      // Add empty days before the 1st day of the month
      for (let i = 0; i < firstDay; i++) {
        days.push('');
      }

      // Add the days of the current month
      for (let i = 1; i <= lastDate; i++) {
        days.push(i);
      }

      return days;
    },
  },
  methods: {
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    convertMonth(currentMonth) {
      if (currentMonth === 0)
        return "January";
      else if (currentMonth === 1)
        return "Febuary";
      else if (currentMonth === 2)
        return "March";
      else if (currentMonth === 3)
        return "April";
      else if (currentMonth === 4)
        return "May";
      else if (currentMonth === 5)
        return "June";
      else if (currentMonth === 6)
        return "July";
      else if (currentMonth === 7)
        return "August";
      else if (currentMonth === 8)
        return "September";
      else if (currentMonth === 9)
        return "October";
      else if (currentMonth === 10)
        return "November";
      else if (currentMonth === 11)
        return "December";
    }
  },
};
</script>

<style scoped>
.calendar {
  max-width: 300px;
  max-height: 5000px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.calendar-body {
  display: flex;
  flex-direction: column;
}

.days-of-week {
  display: flex;
  justify-content: space-between;
}

.day {
  width: 30px;
  text-align: center;
}

.calendar-days {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.calendar-day {
  width: 30px;
  text-align: center;
  padding: 5px;
  margin: 2px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
