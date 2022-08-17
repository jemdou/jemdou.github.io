//this calculation only implements
//both note score and combo multiplier at the same time.

double total_score = 0;
double max_score = 1000000;

double hitnote = 1;
double holdnote = 0.5;
double letgonote = 1;

int cnt_hitnote = 0;
int cnt_holdnote = 0;
int cnt_letgonote = 0;

int combo = 0;

int hundreth_hitnote = 0;
int leftover_hitnote = 0;
int hundreth_holdnote = 0;
int leftover_holdnote = 0;
int hundreth_letgonote = 0;
int leftover_letgonote = 0;

int leftover = 0;
int multiplier = 0;



Console.WriteLine("======================");
Console.WriteLine("Enter hit note count");
string str = Console.ReadLine();
cnt_hitnote = Int32.Parse(str);
Console.WriteLine("Enter hold note count");
str = Console.ReadLine();
cnt_holdnote = Int32.Parse(str);
Console.WriteLine("Enter letgo note count");
str = Console.ReadLine();
cnt_letgonote = Int32.Parse(str);
Console.WriteLine("======================");

//여기서 부터 뭔가 잘 생각해봐야함
//콤보추가될때 마다 점수가 늘어나야 하기 때문에
hundreth_hitnote = cnt_hitnote / 100;
leftover += cnt_hitnote % 100;

for(int i = 0; i < hundreth_hitnote; i++) {
    total_score += hitnote * (1 + 0.1 * multiplier) * 100;
    multiplier++;
}

hundreth_holdnote = cnt_holdnote / 100;
leftover += cnt_holdnote % 100;

for(int i = 0; i < hundreth_holdnote; i++) {
    total_score += holdnote * (1 + 0.1 * multiplier) * 100;
    multiplier++;
}

total_score += leftover / 100 * (1+ 0.1 * multiplier) * 100;
leftover /= 100;

hundreth_letgonote = cnt_letgonote / 100;
leftover += cnt_letgonote % 100;

for(int i = 0; i < hundreth_letgonote; i++) {
    total_score += hundreth_letgonote * (1 + 0.1 * multiplier) * 100;
    multiplier++;
}

total_score += leftover / 100 * (1+ 0.1 * multiplier) * 100;