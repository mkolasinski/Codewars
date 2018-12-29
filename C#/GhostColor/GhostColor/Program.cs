using System;

namespace GhostColor
{
    class Program
    {
        Random random = new Random();
        string[] color = { "white", "blue", "yellow", "green" };

        public string GetColor()
        {
            return color[random.Next(0, 4)];
        }
    }
}
