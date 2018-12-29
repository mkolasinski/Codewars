using System;
using System.Linq;

namespace SumOfDigits
{
    class Program
    {
        public static int DigitalRoot(int n)
        {
            int someValue = n.ToString().Select(x => int.Parse(x.ToString())).Sum();
            return (someValue < 10) ? someValue : DigitalRoot(someValue);
        }

        public class Number
        {
            public int DigitalRoot(long n)
            {
                return (int)(1 + (n - 1) % 9);
            }
        }
    }
}
