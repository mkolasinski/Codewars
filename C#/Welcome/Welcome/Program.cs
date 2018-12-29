using System;

namespace Welcome
{
    public class Program
    {
        public static string Greetings(string language)
        {
            switch (language)
            {
                case "english": return "Welcome!";
                case "czech": return "Vitejte!";
                case "danish": return "Velkomst!";
                case "dutch": return "Welkom!";
                case "estonian": return "Tere tulemast!";
                case "french": return "Bienvenue!";
                case "german": return "Willkommen!";
                case "italian": return "Benvenuto!";
                case "lithuanian": return "Laukiamas!";
                case "polish": return "Witamy!";
                case "spanish": return "Bienvenido!";
                case "welsh": return "Croeso!";
                default: return "Welcome!";
            }
        }
    }
}
