#include <iostream>
using namespace std;
int main()
{
  int length = 0, breadth = 0;

  cout << "Enter length and breadth" << endl;

  cin >> length >> breadth;

  int area = length * breadth;

  int perimeter = 2 * (length + breadth);

  printf("Area=%d\nPerimeter=%d\n", area, perimeter);

  return 0;
}