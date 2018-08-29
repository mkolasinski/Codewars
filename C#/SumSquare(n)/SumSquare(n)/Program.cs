using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public static class Kata
{
    public static int SquareSum(int[] n)
    {
        int summ = 0;
        foreach (int value in n)
        {
            summ = summ + value * value;
        }
        return summ;
    }
}
