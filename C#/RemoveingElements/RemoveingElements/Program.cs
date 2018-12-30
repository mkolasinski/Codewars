using System.Linq;

namespace RemoveingElements
{
    class Program
    {
        public static object[] RemoveEveryOther(object[] array)
        {
            return array.Where((x, i) => { return i % 2 == 0; }).ToArray();
        }
    }
}
