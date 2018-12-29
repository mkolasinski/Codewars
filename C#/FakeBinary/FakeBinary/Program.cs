using System;
using System.Linq;

namespace FakeBinary
{
    class Program
    {
        public static string FakeBinary(string a)
        {
            return string.Concat(a.Select(c => Int32.Parse(c.ToString()) < 5 ? 0 : 1));
        }
    }
}
