using System;
using System.Linq;

namespace FindTheParityOutlier
{
    class Program
    {
        public static int Find(int[] integers)
        {
            if (integers[0] % 2 == 1 && integers[1] % 2 == 1)
            {
                for (int i = 2; i < integers.Count(); i++)
                {
                    if (integers[i] % 2 == 0)
                    {
                        return integers[i];
                    }
                }
            }
            else if (integers[0] % 2 == 0 && integers[1] % 2 == 0)
            {
                for (int i = 2; i < integers.Count(); i++)
                {
                    if (integers[i] % 2 == 1)
                    {
                        return integers[i];
                    }
                }
            }
            else
            {
                if (integers[2] % 2 == integers[0] % 2)
                {
                    return integers[1];
                }
                else
                {
                    return integers[0];
                }
            }

            return -1;
        }
    }
}
