<template>
  <div id="calendar_wrap">
      <table id="calendar">
        <caption class="header">
          <div class="current">
            <span class="year"></span>년
            <span class="month"></span>월
          </div>
          <a href="#" class="prev" @click="prev()">
            <span class="year"></span>년
            <span class="month"></span>월
          </a>
          <a href="#" class="next" @click="next()">
            <span class="year"></span>년
            <span class="month"></span>월
          </a>
        </caption>
        <tr>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" >
                <span class="bar todo"><span class="blind">todo</span></span>
                <span class="bar diet"><span class="blind">diet</span></span>
                <span class="bar diary"><span class="blind">diary</span></span>
              </div>
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
          <td>
            <a href="#">
              <div class="day">
                &nbsp;
              </div>
              <div class="bar_area" />
            </a>
          </td>
        </tr>
      </table>
</div>
</template>

<script>

export default {
  name: 'calendar',
  data () {
    return {
      document: null,
      year: 0,
      month: 0,
      date: 0
    }
  },
  methods: {
    calendar (newYear, newMonth) {
      var currentDate, dLength, year, month, date, day, currentYear, currentMonth, prevDate, prevYear, prevMonth, nextDate, nextYear, nextMonth, td, startDay, link

      currentDate = new Date(newYear, newMonth - 1, 1)
      dLength = 32 - new Date(newYear, newMonth - 1, 32).getDate()

      year = currentDate.getFullYear()
      month = currentDate.getMonth()
      date = currentDate.getDate()
      day = currentDate.getDay()

      prevDate = new Date(year, month - 1, 1)
      nextDate = new Date(year, month + 1, 1)

      currentYear = this.document.querySelector('.current .year')
      currentMonth = this.document.querySelector('.current .month')
      prevYear = this.document.querySelector('.prev .year')
      prevMonth = this.document.querySelector('.prev .month')
      nextYear = this.document.querySelector('.next .year')
      nextMonth = this.document.querySelector('.next .month')
      td = this.document.querySelectorAll('td')
      startDay = this.document.querySelectorAll('td .day')
      link = this.document.querySelectorAll('td a')

      for (let i = 0; i < startDay.length; i++) {
        startDay[i].innerHTML = '&nbsp;'
        td[i].classList.remove('active')
      }

      for (let i = day; i < day + dLength; i++) {
        link[i].onclick = (e) => {
          let selectedDate = link[i].querySelector('.day').innerHTML
          this.$store.state.showLayer = true
          this.$store.state.selectedDate = year.toString() + (month + 1).toString() + selectedDate.toString()
        }
        startDay[i].innerHTML = date
        td[i].classList.add('active')

        date++
      }

      currentYear.innerHTML = year
      currentMonth.innerHTML = month + 1
      prevYear.innerHTML = prevDate.getFullYear()
      prevMonth.innerHTML = prevDate.getMonth() + 1
      nextYear.innerHTML = nextDate.getFullYear()
      nextMonth.innerHTML = nextDate.getMonth() + 1
    },
    prev () {
      this.calendar(this.year, --this.month)
    },
    next () {
      this.calendar(this.year, ++this.month)
    }
  },
  async created () {
    this.document = await document
    this.year = new Date().getFullYear()
    this.month = new Date().getMonth() + 1
    this.date = new Date().getDate()
    this.calendar(this.year, this.month)

    this.$store.state.today = this.year.toString() + this.month.toString() + this.date.toString()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/scss/variable';

  #calendar_wrap {
    text-align: center;
  }
  #calendar {
    width: 100%;
    table-layout: fixed;
  }
  .header {
    position: relative;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 20px;
    color: #fff;
    box-sizing: border-box;
  }
  table,th,td {
    color: #fff;
    border-collapse: collapse;
  }
  td {
    &.active {
      background-color: #757575;
      .day {
        height: 20px;
        line-height: 20px;
        font-size: 10px;
      }
      .bar_area {
        width: 100%;
        height: 50px;
        padding: 5px;
        background-color: #f1efe7;
        box-sizing: border-box;
        .bar {
          display: block;
          height: 10px;
          & + .bar {
            margin-top: 5px;
          }
          &.todo {
            background-color: $todo;
          }
          &.diet {
            background-color: $diet;
          }
          &.diary {
            background-color: $diary;
          }
        }
      }
    }
    & + td {
      border-left: 6px solid #3a3a3a;
    }
    a {
      display: block;
      color: #fff;
    }
  }
  tr {
    & + tr {
      border-top: 6px solid #3a3a3a;
    }
  }
  .prev, .next {
    position: absolute;
    top: 16px;
    font-size: 12px;
    color: #fff;
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
</style>
