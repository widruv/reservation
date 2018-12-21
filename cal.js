var FullCalendar = {
    lists : [],
    set:function(events) {
        this.lists = events;
    },
    insert:function(title, start, end, color='blue') {
        this.lists.push({
            title: title,
            start: start,
            end: end,
            color: color
        });
    },
    show:function(id) {
        $(id).fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
      },
      defaultDate: '2018-03-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: this.lists

    });

    } 
}
