<template>
  <!--Calendar-->
  <div class="calendar">
    <h2>
      <button class="calendar_button" @click="prevMonth"><</button>
      {{ currentMonth }} {{ currentYear }}
      <button class="calendar_button" @click="nextMonth">></button>
    </h2>
    <table>
      <thead>
      <tr>
        <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(week, index) in weeks" :key="index">
        <td v-for="(day, i) in week" :key="i">
          {{ day || '' }}
          <div class="event-container">
            
          </div>
          <div class="event-container" v-if="day">
            <div class="event" v-for="(event, index) in eventsForDate(day).slice(0, 2)" :key="event.title + day + index">
              <button @click="$emit('navigateToClass', 'Algorithms')">{{ event.title }}</button>
            </div>
            <div v-if="eventsForDate(day).length > 2" class="event more">
              <button class="event_more" @click="$emit('openModal', ['events', [day, currentMonth, currentYear, allEventsForDate(day)]])"> +{{ eventsForDate(day).length - 2 }} more</button>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        monthNum: new Date().getMonth() + 1,
        currentMonth: this.returnMonth(new Date().getMonth() + 1),
        currentYear: new Date().getFullYear(),
        daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        weeks: this.updateCalendar(new Date().getMonth() + 1, new Date().getFullYear()),
      };
    },
    props: {
      events: {
        type: Array,
        required: true,
      }
    },
    methods: {
      prevMonth() {
        if (this.monthNum === 1) {
          this.monthNum = 12;
          this.currentYear--;
        } else {
          this.monthNum--;
        }
        this.currentMonth = this.returnMonth(this.monthNum);
        this. weeks = this.updateCalendar(this.monthNum, this.currentYear);
      },
      nextMonth() {
        if (this.monthNum === 12) {
          this.monthNum = 1;
          this.currentYear++;
        } else {
          this.monthNum++;
        }
        this.currentMonth = this.returnMonth(this.monthNum);
        this.weeks = this.updateCalendar(this.monthNum, this.currentYear);
      },
      isLeepYear(year) {
        if(year % 4 ==0) {
          if(year % 100 == 0) {
            return year % 400 == 0;
          }
          return true;
        } else {
          return false;
        }
      },
      getDaysInMonth(month, year) {
        switch(month) {
          case(1):
          case(3):
          case(5):
          case(7):
          case(8):
          case(10):
          case(12):
            return 31;
          case(4):
          case(6):
          case(9):
          case(11):
            return 30;
          case(2):
            return this.isLeepYear(year) ? 29 : 28;
          default:
            return -1; //Should never be reached
        }
      },
      getStartingDay(month, year) {
        let date = new Date(year, month - 1, 1);
        console.log(year + " " + month + " " + date.getDay());
        return date.getDay();
      },
      updateCalendar(month, year) {
        let k = 1;
        let start = this.getStartingDay(month, year);
        let end = this.getDaysInMonth(month, year);
        let calendar = [
          [],[],[],[],[],[]
        ];
        for(let i = 0; i < Math.ceil((start+end)/7); i++) {
          for(let j = 0; j < 7; j ++) {
            if(k == 1) {
              if(j == start) {
                calendar[i][j] = k;
                k++;
              } else {
                calendar[i][j] = null;
              }
            } else {
              if(k <= end) {
                calendar[i][j] = k;
                k++;
              }
              else {
                calendar[i][j] = null;
              }
            }
          }
        }
        return calendar;
      },
      returnMonth(month) {
        switch (month) {
          case(1):
            return "January";
          case(2):
            return "February";
          case(3):
            return "March";
          case(4):
            return "April";
          case(5):
            return "May";
          case(6):
            return "June";
          case(7):
            return "July";
          case(8):
            return "August";
          case(9):
            return "September";
          case(10):
            return "October";
          case(11):
            return "November";
          case(12):
            return "December";
        }
      },
      eventsForDate(day) {
        if (!day) return [];

        const currentDate = new Date(this.currentYear, this.monthNum - 1, day);
        const currentWeekday = currentDate.getDay();

        return this.events.filter(event => {
          const isDateMatch = event.day === day &&
          event.month === this.monthNum &&
          event.year === this.currentYear

          const isRepeatMatch = event.repeatWeekly === true && Array.isArray(event.weekdays) && event.weekdays.includes(currentWeekday);

          return isDateMatch || isRepeatMatch;
        }
        );
      },
      allEventsForDate(day) {
        return this.eventsForDate(day)
      }
    }
  }
</script>

<style scoped>
    table {
      border: 2px solid #2c3e50;
      border-collapse: collapse;
      height: 100%;
      width: 100%;
    }
    th {
      text-align: center;
      background-color: white;
      padding: 25px;
    }
    td {
      text-align: left;
      background-color: white;
      border: 1px solid #2c3e50;
      width: 250px;
      height: 150px;
      padding-top: 5px;
      padding-left: 5px;
      padding-right: 15px;
    }
    h2 {
      text-align: center;
    }
    .calendar {
      display: inline-block;
      align-items: center;
      justify-content: center;
      margin-left: 5%;
      margin-right: 5%;
      padding-bottom: 250px;
    }
    .calendar_button {
      background: none;
      color: black;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      font-weight: bold;
      font-size: large;
    }
    .event-container {
      width: 100%;
      height: 75px;
    }
    .event-container .event {
      width: 100%;
      height: 20px;
      background-color: green;
      margin: 5px;
      text-align: center;
    }
    .event.more {
      background-color: transparent;
      color: #888;
      font-size: 12px;
      text-align: center;
      margin-top: 2px;
    }
</style>