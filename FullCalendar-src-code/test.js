var calendarEl = document.getElementById('calendar');
        let today = new Date().toISOString().slice(0, 10)

        var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                initialDate: today,
                slotDuration: {hours: 1},
                slotLabelInterval: {days: 1},
                events: 'dashboard/MyWidgets/Absences/response.php?data=getAbsence&username={{username}}',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                },
                eventColor: 'green',
                eventTimeFormat: {
                    hour: 'numeric',
                    minute: '2-digit',
                    meridiem: false
                },
                eventRender: function eventRender( event, element, view ) {
                    var showTypes, showFacilities, showSearchTerms = true;
                    var types = $j('#eventType').val();
                    var searchTerms = $j('#searchTerm').val();
                            
                    / filters /
                    if (searchTerms.length > 0){
                        showSearchTerms = event.title.toLowerCase().indexOf(searchTerms) >= 0 || event.desc.toLowerCase().indexOf(searchTerms) >= 0;
                    }
                            
                    if (types && types.length > 0) {				
                        if (types.trim().toLowerCase() == "all") {
                    showTypes = true;
                    } 
                        else {
                    showTypes = types.indexOf(event.type) >= 0;
                    }
                    }
                                
                    return showTypes && showSearchTerms;					
                }
        });

        calendar.render();

	