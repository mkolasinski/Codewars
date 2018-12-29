using System;
using System.Linq;

namespace StringRepeat
{
    class Program
    {
        public static string repeatString(int n, string str)
        {
            return string.Concat(Enumerable.Repeat(str, n));
        }
    }
}
