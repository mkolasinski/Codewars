using System;
using System.Text;

namespace StringKatas
{
    public class Program
    {
        public string ToCamelCase(string s)
        {
            var strings = s.Split(new[] { '-', '_' });
            return $"{strings[0]}{UpperCaseFirstChars(strings)}";
        }

        private string UpperCaseFirstChars(string[] strings)
        {
            var x = new StringBuilder();
            for (int i = 1; i < strings.Length; i++)
            {
                var chars = strings[i].ToCharArray();
                chars[0] = Char.ToUpper(chars[0]);
                var s = string.Join("", chars);
                x.Append(s);
            }

            return x.ToString();
        }
    }
}
