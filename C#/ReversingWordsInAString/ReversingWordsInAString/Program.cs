using System;

namespace ReversingWordsInAString
{
    class Program
    {
        public static string Reverse(string text)
        {
            var someArray = text.Split(' ');
            Array.Reverse(someArray);

            return string.Join(" ", someArray);
        }
    }
}
