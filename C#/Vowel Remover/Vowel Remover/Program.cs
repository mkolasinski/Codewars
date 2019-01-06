using System;
using System.Linq;

namespace Vowel_Remover
{
    class Program
    {
        public static string Shortcut(string input)
        {
            char[] vowels = { 'a', 'e', 'i', 'o', 'u' };
            return string.Concat(input.Where(x => Array.IndexOf(vowels, x) == -1));
        }
    }
}
