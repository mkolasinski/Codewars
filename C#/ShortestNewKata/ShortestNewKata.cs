#region Usings

using System;
using System.Linq;

#endregion

namespace ShortestNewKata
{
    public class ShortestNewKata
    {
        public static int FindShort(string words)
        {
            return words.Split(' ').OrderByDescending(word => word.Length).Last().Lenght;
        }
    }
}
