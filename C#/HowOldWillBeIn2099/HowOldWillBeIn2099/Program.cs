using System;

namespace HowOldWillBeIn2099
{
    class Program
    {
        public static string Age(int birth, int yearToBe)
        {
            int numberOfYears = Math.Abs(yearToBe - birth);
            return yearToBe == birth ? "You were born this year" : yearToBe > birth ? $"You are {numberOfYears} year{(numberOfYears == 1 ? "" : "s")}old."
        }
    }
}
