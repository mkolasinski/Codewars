using System;

namespace FinishGuessTheNumberGame
{
    class Guesser
    {
        private int num;
        private int lives;

        public Guesser(int num, int lives)
        {
            this.num = num;
            this.lives = lives;
        }

        public bool Guess(int n)
        {
            if (lives == 0)
            {
                throw new Exception();
            }

            return n == num ? true : new Func<bool>(() => { lives--; return false; })();
        }
    }
}
