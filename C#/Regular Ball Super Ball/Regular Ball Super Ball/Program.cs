using System;

namespace Regular_Ball_Super_Ball
{
    public class Ball
    {
        public string ballType { get; set; }

        public Ball()
        {
            ballType = "regular";
        }

        public Ball(string ballType)
        {
            this.ballType = ballType;
        }
    }
}
