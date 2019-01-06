using System;
using System.Text.RegularExpressions;

namespace LowercaseCountCheck
{
    class Program
    {
        public static int LowercaseCountCheck(string text)
        {
            return Regex.Replace(text, @"[^a-z]+", "").Length;
        }
    }
}
