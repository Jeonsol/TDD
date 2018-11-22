<template>
  <div class="header">
    <div class="current">
      <div class="current">
        <span class="year"></span>년
        <span class="month"></span>월
        <span class="date"></span>일
      </div>
      <a href="#" class="prev" @click="prev()">
        <span class="year"></span>년
        <span class="month"></span>월
        <span class="date"></span>일
      </a>
      <a href="#" class="next" @click="next()">
        <span class="year"></span>년
        <span class="month"></span>월
        <span class="date"></span>일
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      document: '',
      year: '',
      month: '',
      date: ''
    }
  },
  methods: {
    header: function (newYear, newMonth, newDay) {
      var prevDate, nextDate, currentDate

      currentDate = new Date(newYear, newMonth - 1, newDay)

      prevDate = new Date(newYear, newMonth - 1, newDay - 1)
      nextDate = new Date(newYear, newMonth - 1, newDay + 1)

      this.document.querySelector('.current .year').innerHTML = currentDate.getFullYear()
      this.document.querySelector('.current .month').innerHTML = currentDate.getMonth() + 1
      this.document.querySelector('.current .date').innerHTML = currentDate.getDate()
      this.document.querySelector('.prev .year').innerHTML = prevDate.getFullYear()
      this.document.querySelector('.prev .month').innerHTML = prevDate.getMonth() + 1
      this.document.querySelector('.prev .date').innerHTML = prevDate.getDate()
      this.document.querySelector('.next .year').innerHTML = nextDate.getFullYear()
      this.document.querySelector('.next .month').innerHTML = nextDate.getMonth() + 1
      this.document.querySelector('.next .date').innerHTML = nextDate.getDate()
    },
    prev: function () {
      this.header(this.year, this.month, --this.date)
    },
    next: function () {
      this.header(this.year, this.month, ++this.date)
    }
  },
  async created () {
    this.document = await document
    if (this.$store.state.headerDate) {
      let dateArray = this.$store.state.headerDate.split('-')
      this.year = parseInt(dateArray[0])
      this.month = parseInt(dateArray[1])
      this.date = parseInt(dateArray[2])
    } else {
      this.year = new Date().getFullYear()
      this.month = new Date().getMonth() + 1
      this.date = new Date().getDate()
    }
    this.header(this.year, this.month, this.date)
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    margin-bottom: 20px;
    padding: 10px 0;
    font-size: 20px;
    box-sizing: border-box;
    .current {
      text-align: center;
    }
    .prev, .next {
      position: absolute;
      top: 16px;
      font-size: 12px;
      color: #000;
    }
    .prev {
      left: -10px;
    }
    .next {
      right: -10px;
    }
  }
</style>
