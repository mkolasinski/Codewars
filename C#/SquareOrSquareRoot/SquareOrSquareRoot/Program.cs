using System;
using System.Linq;

namespace SquareOrSquareRoot
{
    public class Program
    {
        public static int[] SquareOrSquareRoot(int[] arr)
        {
            return arr.Select(x => Convert.ToInt32(Math.Sqrt(x) - Math.Floor(Math.Sqrt(x)) > 0 ? Math.Pow(x, 2) : Math.Sqrt(x))).ToArray();
        }
    }
}
