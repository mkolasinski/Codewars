using System;
using System.Linq;

namespace Average
{
    class Program
    {
        public static double FindAverage(double[] array)
        {
            return (array.Length == 0) ? 0 : array.Average();
        }
    }
}
