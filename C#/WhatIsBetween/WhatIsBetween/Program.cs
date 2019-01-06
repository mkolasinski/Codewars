using System;
using System.Linq;

namespace WhatIsBetween
{
    class Program
    {
        public static int[] Between(int a, int b)
        {
            return Enumerable.Range(a, b - a + 1).ToArray();
        }
    }
}
