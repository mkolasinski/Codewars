using System;
using System.Linq;

namespace DoubleChar
{
    class Program
    {
        public static string DoubleChar(string text)
        {
            return string.Concat(text.Select(x => x.ToString() + x.ToString()));
        }
    }
}
