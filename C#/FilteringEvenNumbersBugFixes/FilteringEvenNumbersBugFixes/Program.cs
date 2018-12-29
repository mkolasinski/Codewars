using System.Collections.Generic;
using System.Linq;

namespace FilteringEvenNumbersBugFixes
{
    public class Program
    {
        public static List<int> FilterOddNumber( List<int> listOfNumbers)
        {
            return listOfNumbers.Where(n => n % 2 == 1).ToList();
        }
    }
}
