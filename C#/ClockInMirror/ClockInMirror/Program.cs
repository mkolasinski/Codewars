using System;
using System.Globalization;

namespace ClockInMirror
{
    class Program
    {
        public static string WhatIstheTime(string timeInMirror)
        {
            DateTime dateTime = DateTime.ParseExact(timeInMirror, "HH:mm", CultureInfo.InvariantCulture);

            int hour = (int)dateTime.Hour;

            int minute = (int)dateTime.Minute;

            hour = 12 - hour;

            minute = (60 - minute) % 60;

            if ( minute != 0)
            {
                --hour;
            } else
            {
                minute = 0;
            }

            if (hour <= 0) hour += 12;

            return String.Format("{0:00}:{1:00}", hour, minute);


        }
    }
}
