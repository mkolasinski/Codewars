using System;
using System.Collections.Generic;

namespace AddMoreItemToListBugFixes
{
    class Program
    {
        public static List<int> AddSomethingExtra(List<int> listOfNumbers)
        {
            List<int> result = new List<int>(listOfNumbers);
                result.Add(111);
            return result;
        }
    }
}
