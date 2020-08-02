---
layout: page
---
<script src='/fullcalendar/main.js'></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      initialDate: '2020-06-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      selectable: true,
      events: {
          url: '/calendar-data',
          failure: function() {
            alert('there was an error while fetching events!');
          },
      }
    });
    calendar.render();
  });
</script>

<div id="calendar"></div>