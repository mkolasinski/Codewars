using System;

namespace Theatre
{
    class Program
    {
        public static int SeatsInTheater (int Cols, int Rows, int col, int row)
        {
            return ((Cols - (col - 1) * (Rows - row)));
        }
    }
}
