using System.Linq;

namespace Repeat_String
{
    class Program
    {
        public static string repeatString(int n, string text)
        {
            return string.Concat(Enumerable.Repeat(text, n));
        }
    }
}
