<template>
  <!--Calendar-->
  <div class="calendar">
    <h2>x
      <button @click="prevMonth">Previous Month</button>
      {{ currentMonth }} {{ currentYear }}
      <button @click="nextMonth">Next Month</button>
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
        weeks: this.updateCalendar(new Date().getMonth() + 1, new Date().getFullYear())
      };
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
        for(let i = 0; i < 6; i++) {
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
      padding-top: 10px;
      padding-left: 10px;
      padding-bottom: 100px;
      padding-right: 175px;
      text-align: left;
      background-color: white;
      border: 1px solid #2c3e50;
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
    }
</style>