using System;

namespace PreFizzBuzzWorkout
{
    class Program
    {
        public static int[] PreFizzBuzz(int n)
        {
            int[] array = new int[n];

            for (int i = 0; i < n; i++)
            {
                array[i] = i + 1;
            }
            return array;
        }
    }
}
