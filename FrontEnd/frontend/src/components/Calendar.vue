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
            <div class="event" v-for="(event, index) in eventsForDate(day).slice(0, 2)" :key="event.name + day + index">
              <button @click="openEventOrClass(event, index)">{{ event.name }}</button>
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


  import { Class } from '@/data/Model/Class';
import { toRaw } from 'vue';


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
      },
      classes: {
        type: Array,
        required: true
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
        if(year % 4 === 0) {
          if(year % 100 === 0) {
            return year % 400 === 0;
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
            if(k === 1) {
              if(j === start) {
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
      //Function to get the events for a day from the events and classes lists
      eventsForDate(day) {
        //If the day is not set, or the arrays are empty return nothing
        if (!day) return [];
        if (!this.events || !this.classes) return [];
        
        //Create needed variables
        let calendarEventsOut = [];
        const currentDate = new Date(this.currentYear, this.monthNum - 1, day);
        const nextDate = new Date(this.currentYear, this.monthNum - 1, day + 1);
        const currentWeekday = currentDate.getDay();

        //Loop through the events. If they are on this day, add them to the output array
        for(let i = 0; i < this.events.length; i++) {
          let event = this.events[i];
          let date = new Date(event.start);
          if(currentDate <= date && date < nextDate) {
            calendarEventsOut.push(event);
          }
        }

        //Loop through the classes. If the current day is in their time range, and this is the right day of the week, add them to the output array
        for(let i = 0; i < this.classes.length; i++) {
          let c = this.classes[i];
          if(c.meetingTimes == null) {
            continue;
          }
          if(new Date(c.startDate) <= currentDate && currentDate <= new Date(c.endDate)) {
            switch (currentWeekday) {
              case (0):
                if(c.meetingTimes.sundayStart != null) {
                  calendarEventsOut.push(c);
                }
                break;
              case (1):
                if(c.meetingTimes.mondayStart != null) {
                  calendarEventsOut.push(c);
                }
                break;
              case (2):
                if(c.meetingTimes.tuesdayStart != null) {
                  calendarEventsOut.push(c);
                }
                break;
              case (3):
                if(c.meetingTimes.wednesdayStart != null) {
                  calendarEventsOut.push(c);
                }
                break;
              case (4):
                if(c.meetingTimes.thursdayStart != null) {
                  calendarEventsOut.push(c);
                }
                break;
              case (5):
                if(c.meetingTimes.fridayStart != null) {
                  calendarEventsOut.push(c);
                }
                break;
              case (6):
                if(c.meetingTimes.saturdayStart != null) {
                  calendarEventsOut.push(c);
                }
                break;
            }
          }
        }

        //Return the output array
        return calendarEventsOut;
      },
      allEventsForDate(day) {
        return this.eventsForDate(day)
      },
      openEventOrClass(event, index) {
        let isClass;
        try {
          let x = event.meetingTimes.meetingTimesId;
          isClass = true;
        } catch (e) {
          isClass = false;
        }
        if (isClass) {
          this.$emit('navigateToClass', event, 'Home', index)
        } else {
          this.$emit('openModal', ['editEvent', event])
        }
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
      background-color: #53708d;
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