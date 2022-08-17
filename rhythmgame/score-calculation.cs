double total_score = 0;
int combo = 0;
int hundreth = 0;
int leftover = 0;
int multiplier = 0;
int n = 1;

double max_score = 10000;
Console.WriteLine ("Enter the max combo");
string str = Console.ReadLine ();
combo = Int32.Parse (str);
Console.WriteLine("======================");
 
hundreth = combo / 100;
leftover = combo % 100;
  
for(int i = 0;i < hundreth; i++) {
    total_score += n * (1 + 0.1 * i) * 100;
    multiplier = i;
}
total_score += n * (1 + 0.1 * (multiplier + 1));

Console.WriteLine("max combo is " + combo);
Console.WriteLine("hundreth is " + hundreth);
Console.WriteLine("leftover is " + leftover);
Console.WriteLine("multiplier is " + multiplier);

Console.WriteLine("total_score is " + total_score);
Console.WriteLine("======================");
