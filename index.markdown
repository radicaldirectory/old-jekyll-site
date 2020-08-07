---
layout: page
---
<script src='/fullcalendar/main.js'></script>

<div id="calendar" class="bg-white pa4"></div>

<script>
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
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
    document.addEventListener('DOMContentLoaded', function() {
        calendar.render();
    });
    
    /*
    function myFunction(x) {
      if (x.matches) { // If media query matches
        document.body.style.backgroundColor = "yellow";
      } else {
        document.body.style.backgroundColor = "pink";
      }
    }
    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes   */ 
</script>