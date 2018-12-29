using System;
using System.Numerics;

namespace PowerOf2
{
    class Program
    {
        public static BigInteger[] PowerOfTwo(int n)
        {
            BigInteger[] array = new BigInteger[n + 1];
            for ( int i = 0; i < n + 1; i++)
            {
                array[i] = BigInteger.Pow(2, i);
            }

            return array;
        }
    }
}
