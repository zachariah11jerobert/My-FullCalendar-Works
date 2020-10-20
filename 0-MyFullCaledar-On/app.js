document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialDate: '2020-09-12',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      select: function(arg) {
        var title = prompt('Event Title:');
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay
          })
        }
        calendar.unselect()
      },
      eventClick: function(arg) {
        if (confirm('Are you sure you want to delete this event?')) {
          arg.event.remove()
        }
      },
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events:function(info, successCallback, failureCallback){
        console.log(new Date(info.start.valueOf()));
        console.log(new Date(info.end.valueOf()));
        // successCallback(
        //   [
        //     {
        //       title: "All Day Event",
        //       start: "2020-09-01",
        //     },
        //     {
        //       title: "Long Event",
        //       start: "2020-09-07",
        //       end: "2020-09-10",
        //     },
        //     {
        //       groupId: 999,
        //       title: "Repeating Event",
        //       start: "2020-09-09T16:00:00",
        //     },
        //     {
        //       groupId: 999,
        //       title: "Repeating Event",
        //       start: "2020-10-16T16:00:00",
        //     },
        //   ]
        // )
        
      }
    });

    
    // calendar.on('events',function(info, successCallback, failureCallback){
    //   successCallback(
    //     [
    //       {
    //         title: "All Day Event",
    //         start: "2020-09-01",
    //       },
    //       {
    //         title: "Long Event",
    //         start: "2020-09-07",
    //         end: "2020-09-10",
    //       },
    //       {
    //         groupId: 999,
    //         title: "Repeating Event",
    //         start: "2020-09-09T16:00:00",
    //       },
    //       {
    //         groupId: 999,
    //         title: "Repeating Event",
    //         start: "2020-10-16T16:00:00",
    //       },
    //     ]
    //   )
      
    // })

    calendar.render();
  });