using System;

namespace Exercise1
{
    class Program
    {
        public static void createLine(int w, int number)//A function that prints the number of stars in each row of the triangle
        {
            Console.Write("".PadRight(w / 2));
            for (int i = 0; i < number; i++)
                Console.Write("*");
            Console.WriteLine("");
        }


        static void Main(string[] args)
        {
            int option, op;
            // int or double
            int height, width;
            Console.WriteLine("Hi\n" +
                              "If you want to choose rectangle tower please press 1\n" +
                              "If you want to choose triangular tower please press 2\n" +
                              "To exit please press 3");
            option = int.Parse(Console.ReadLine());

            while (option != 3)
            {
                Console.WriteLine("Please enter height:");
                height = int.Parse(Console.ReadLine());

                Console.WriteLine("Please enter width:");
                width = int.Parse(Console.ReadLine());

                switch (option)
                {
                    case 1:
                        {
                            if (Math.Abs(height - width) > 5 || height == width)  //rectangle
                                Console.WriteLine("The area is: " + height * width + "\n");
                            else
                                Console.WriteLine("The perimeter is: " + ((height + width) * 2) + "\n");
                            break;
                        }
                    case 2:
                        {
                            Console.WriteLine("If you want the perimeter of the triangular please press 1\n" +
                                              "If you want the shape of the triangular please press 2");
                            op = int.Parse(Console.ReadLine());
                            switch (op)
                            {
                                case 1:
                                    {
                                        double side = Math.Sqrt(Math.Pow(width / 2, 2) + Math.Pow(height, 2));

                                        Console.WriteLine("The perimeter is: " + (2 * side + width) + "\n");
                                        break;
                                    }
                                case 2:
                                    {
                                        if (width % 2 == 0 || width > height * 2)
                                            Console.WriteLine("There is no option to print the trianguler\n");
                                        else
                                        {
                                            int wh = width / 2 - 1;//The number of levels in the middle part of the triangle
                                            createLine(width, 1); //printing the first row- 1 star only

                                            if (wh > 0)
                                            {
                                                for (int i = 0;  i < (height - 2) % wh; i++)//prinring the part of the modulo in the triangle- will allways be 3 stars
                                                    createLine(width - 2, 3);

                                                for (int i = 0; i < wh; i++)//number of levels
                                                    for (int j = 0; j < (height - 2) / wh; j++)//number of rows in each level
                                                        createLine(width - 2 - 2 * i, 3 + i * 2);
                                            }
                                            // (X,3) is a מexception case because there is no odd number between 1 and 3.But you still need to put an intermediate row of asterisks,
                                            // so, I put a 3 asterisks line.
                                            else if (width == 3)
                                            {
                                                for (int i = 0; i <  height-2; i++)
                                                    createLine(0, width);
                                            }

                                            createLine(0, width); //printing the last row- the number of asterisks is width
                                        }
                                        break;
                                    }
                            }
                            break;
                        }
                }
                Console.WriteLine("If you want to choose rectangle tower please press 1\n" +
                                          "If you want to choose triangular tower please press 2\n" +
                                          "To exit please press 3");
                option = int.Parse(Console.ReadLine());
            }
        }
    }
}
