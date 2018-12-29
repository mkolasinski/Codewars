using System;

namespace Switch_Calculator
{
    class Program
    {
        public static double SomeObject( double v1, double v2, char operation)
        {
            double result = 0;
            
            switch (operation)
            {
                case '+' : result = v1 + v2; break;
                case '-' : result = v1 - v2; break;
                case '/': result = v1 / v2; break;
                case '*' : result = v1 * v2; break;
                case '%': result = v1 % v2; break;
                case '^' : result = Math.Pow(v1, v2); break;
            }

            return result;
        }
    }
}
