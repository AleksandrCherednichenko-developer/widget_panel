
document.addEventListener("DOMContentLoaded", () => {
   var myDate = new Date();
   let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
   let months = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
   }

   let burgerBtn = document.querySelector('.nav__menu-btn'),
      navMenu = document.querySelector('.nav');

   let subscribeInput = document.querySelector('.subscribe input'),
      subscribeBtn = document.querySelector('.subscribe button');
   let emailTest = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

   let widgetEvent = document.querySelector('.event'),
      prewDay = widgetEvent.querySelector('.prew-day'),
      nextDay = widgetEvent.querySelector('.next-day'),
      dayOfTheWeek = widgetEvent.querySelector('.day-of-the-week'),
      dayOfTheMonth = widgetEvent.querySelector('.day-of-the-month');

   let widgetStatistic = document.querySelector('.statistic'),
      monthValue = widgetStatistic.querySelector('.month'),
      yearValue = widgetStatistic.querySelector('.year')


   //вывод сегоднешней даты и дня недели в виджете события
   function nowDayEvent() {
      dayOfTheWeek.textContent = days[myDate.getDay()]
      dayOfTheMonth.textContent = myDate.getDate()

      prewDay.addEventListener('click', () => {
         let prewtDate = new Date(myDate.setDate(myDate.getDate() - 1))

         dayOfTheWeek.textContent = days[prewtDate.getDay()]
         dayOfTheMonth.textContent = prewtDate.getDate()
      })

      nextDay.addEventListener('click', () => {
         let nextDate = new Date(myDate.setDate(myDate.getDate() + 1))

         dayOfTheWeek.textContent = days[nextDate.getDay()]
         dayOfTheMonth.textContent = nextDate.getDate()
      })
   }
   nowDayEvent()

   // запись значения месяца и года в виджет статистика
   function statisticMonth() {
      monthValue.textContent = months[myDate.getMonth()]
      yearValue.textContent = myDate.getFullYear()
   }
   statisticMonth()

   // создание календаря
   flatpickr(".flatpickr-calendar", {
      inline: true,
      mode: "single",
      minDate: "today",
      altInput: true,
      altFormat: "d.m.Y",
      dateFormat: "d.m.Y",
      monthSelectorType: "static",
      showMonths: 1,
      defaultDate: false,
      "locale": {
         "firstDayOfWeek": 1 // start week on Monday
      }
   });


   document.addEventListener('click', (event) => {
      let target = event.target;

      // валидация email при нажатии на кнопку подписаться
      if (target === subscribeBtn) {
         if (!(emailTest.test(subscribeInput.value))) {
            subscribeInput.classList.add('error')
            setTimeout(() => {
               subscribeInput.classList.remove('error')
            }, 3000);
         }
      }

      // нажатие на кнопку бургер меню при адаптиве
      if (target.closest('.nav__menu-btn')) {
         burgerBtn.classList.toggle('active')
         navMenu.classList.toggle('active')
      }
   })
})
