using System;

namespace Are_You_Playing_Banjo
{
    class Program
    {
        public static string AreYouPlayingBanjo(string name)
        {
            return name + (Char.ToLower(name[0]) == 'r' ? "plays" : "does not play") + "banjo";
        }
    }
}
