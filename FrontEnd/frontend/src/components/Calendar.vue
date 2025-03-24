<template>
 <!--Calendar-->
  <div class="calendar">
    <h2>January 2025</h2>
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
    daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    weeks: [
      [null, null, null, null, null, 1, 2],
      [3, 4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 15, 16],
      [17, 18, 19, 20, 21, 22, 23],
      [24, 25, 26, 27, 28, 29, 30],
      [31, null, null, null, null, null]
    ]
  };
}
};
</script>

<style>
table {
border-spacing: 15px;
text-align: center;
border: 1px solid black;
padding-bottom: 10px;
}
td {
padding: 10px;
background-color: white;
text-align: center;
padding-bottom: 50px;
padding-right: 150px;
}
th {
padding: 10px;
background-color: white;
text-align: center;
}
h2 {
text-align: center;
padding-top: 100px;
}
.calendar {
  margin-top: 50px;
  margin-left: 450px;
}
</style>