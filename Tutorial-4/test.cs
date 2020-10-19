[System.Web.Services.WebMethod]
        public static List<Event> filter(string location)
        {
            return GetFilterData(location);
        }

        public class Event
        {
            public string id { get; set; }
            public string title { get; set; }
            public string start { get; set; }
            public string end { get; set; }
            public string City { get; set; }
        }
        private static List<Event> GetFilterData(string location)
        {

            var events = (new List<Event>() {
                new Event()
            {
                id = "1",
                title = "EventName 1",
                start = "2017-08-04",
                end = "2017-08-07",
                City = "city1"
            },
                     new Event()
            {
                id = "2",
                title = "EventName 2",
                start = "2017-08-01",
                end = "2017-08-03",
                City = "city1"
            },
            new Event()
            {
                id = "3",
                title = "EventName 3",
                start = "2017-08-04",
                end = "2017-08-07",
                City = "city2"
            }
            }).Where(o => o.City == location).ToList();

            return events;
        }