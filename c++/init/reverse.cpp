#include <iostream>
using namespace std;

int main()
{
    int n, r, rev = 0;
    cout << "Enter the number: " << endl;
    cin >> n;
    while (n > 0)
    {
        r = n % 10;
        n = n / 10;
        rev = rev * 10 + r;
    }
    cout << "Reverse of a number is " << rev << endl;
    return 0;
}