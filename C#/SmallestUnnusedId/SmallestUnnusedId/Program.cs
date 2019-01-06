using System;
using System.Linq;

namespace SmallestUnusedId
{
    public class Program
    {
        public static int NextId(int[] indexes)
        {
            int n = 0; 

            for ( int i = 0; i <= indexes.Length; i++)
            {
                if ( !indexes.Any( element => element == i))
                {
                    n = i;
                    break;
                }
            }
        }
    }
}
