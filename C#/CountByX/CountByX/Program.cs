using System;
using System.Linq;

namespace CountByX
{
    class Program
    {
        public static int[] CountByX(int x, int b)
        {
            return Enumerable.Range(1, b).Select(v => v * x).ToArray();
        }
    }
}
