<template>
  <!--Calendar-->
  <div class="calendar">
    <h2>
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
        weeks: [
          [null, null, null, null, null, null, 1],
          [2, 3, 4, 5, 6, 7, 8],
          [9, 10, 11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20, 21, 22],
          [23, 24, 25, 26, 27, 28, 29],
          [30, 31, null, null, null, null]
        ]
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
      },
      nextMonth() {
        if (this.monthNum === 12) {
          this.monthNum = 1;
          this.currentYear++;
        } else {
          this.monthNum++;
        }
        this.currentMonth = this.returnMonth(this.monthNum);
      },
      returnMonth(month) {
        switch (month) {
          case(1):
            this.weeks = [
              [null, null, 1, 2, 3, 4, 5],
              [6, 7, 8, 9, 10, 11, 12],
              [13, 14, 15, 16, 17, 18, 19],
              [20, 21, 22, 23, 24, 25, 26],
              [27, 28, 29, 30, 31, null, null],
              [null, null, null, null, null, null]
            ]
            return "January";
          case(2):
            this.weeks = [
              [null, null, null, null, null, null, 1],
              [2, 3, 4, 5, 6, 7, 8],
              [9, 10, 11, 12, 13, 14, 15],
              [16, 17, 18, 19, 20, 21, 22],
              [23, 24, 25, 26, 27, 28, null],
              [null, null, null, null, null, null]
            ]
            return "February";
          case(3):
            this.weeks = [
              [null, null, null, null, null, null, 1],
              [2, 3, 4, 5, 6, 7, 8],
              [9, 10, 11, 12, 13, 14, 15],
              [16, 17, 18, 19, 20, 21, 22],
              [23, 24, 25, 26, 27, 28, 29],
              [30, 31, null, null, null, null]
            ]
            return "March";
          case(4):
            this.weeks = [
              [null, null, 1, 2, 3, 4, 5],
              [6, 7, 8, 9, 10, 11, 12],
              [13, 14, 15, 16, 17, 18, 19],
              [20, 21, 22, 23, 24, 25, 26],
              [27, 28, 29, 30, null, null, null],
              [null, null, null, null, null, null]
            ]
            return "April";
          case(5):
            this.weeks = [
              [null, null, null, null, 1, 2, 3],
              [4, 5, 6, 7, 8, 9, 10],
              [11, 12, 13, 14, 15, 16, 17],
              [18, 19, 20, 21, 22, 23, 24],
              [25, 26, 27, 28, 29, 30, 31],
              [null, null, null, null, null, null]
            ]
            return "May";
          case(6):
            this.weeks = [
              [1, 2, 3, 4, 5, 6, 7],
              [8, 9, 10, 11, 12, 13, 14],
              [15, 16, 17, 18, 19, 20, 21],
              [22, 23, 24, 25, 26, 27, 28],
              [29, 30, null, null, null, null, null],
              [null, null, null, null, null, null]
            ]
            return "June";
          case(7):
            this.weeks = [
              [null, null, 1, 2, 3, 4, 5],
              [6, 7, 8, 9, 10, 11, 12],
              [13, 14, 15, 16, 17, 18, 19],
              [20, 21, 22, 23, 24, 25, 26],
              [27, 28, 29, 30, 31, null, null],
              [null, null, null, null, null, null]
            ]
            return "July";
          case(8):
            this.weeks = [
              [null, null, null, null, null, 1, 2],
              [3, 4, 5, 6, 7, 8, 9],
              [10, 11, 12, 13, 14, 15, 16],
              [17, 18, 19, 20, 21, 22, 23],
              [24, 25, 26, 27, 28, 29, 30],
              [31, null, null, null, null, null]
            ]
            return "August";
          case(9):
            this.weeks = [
              [null, 1, 2, 3, 4, 5, 6],
              [7, 8, 9, 10, 11, 12, 13],
              [14, 15, 16, 17, 18, 19, 20],
              [21, 22, 23, 24, 25, 26, 27],
              [28, 29, 30, null, null, null, null],
              [null, null, null, null, null, null]
            ]
            return "September";
          case(10):
            this.weeks = [
              [null, null, null, 1, 2, 3, 4],
              [5, 6, 7, 8, 9, 10, 11],
              [12, 13, 14, 15, 16, 17, 18],
              [19, 20, 21, 22, 23, 24, 25],
              [26, 27, 28, 29, 30, 31, null],
              [null, null, null, null, null, null]
            ]
            return "October";
          case(11):
            this.weeks = [
              [null, null, null, null, null, null, 1],
              [2, 3, 4, 5, 6, 7, 8],
              [9, 10, 11, 12, 13, 14, 15],
              [16, 17, 18, 19, 20, 21, 22],
              [23, 24, 25, 26, 27, 28, 29],
              [30, null, null, null, null, null]
            ]
            return "November";
          case(12):
            this.weeks = [
              [null, 1, 2, 3, 4, 5, 6],
              [7, 8, 9, 10, 11, 12, 13],
              [14, 15, 16, 17, 18, 19, 20],
              [21, 22, 23, 24, 25, 26, 27],
              [28, 29, 30, 31, null, null, null],
              [null, null, null, null, null, null]
            ]
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