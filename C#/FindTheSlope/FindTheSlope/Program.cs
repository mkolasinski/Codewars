using System;

namespace FindTheSlope
{
    class Program
    {
        public string slope(int[] points)
        {
            return points[2] == points[0] ? "undefined" : $"{(points[3] - points[1]) / (points[2] - points[0])}";
        }
    }
}
