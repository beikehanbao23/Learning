#include <iostream>

using namespace std;

std::string show1()
{
	return "show1" ;
}

std::string show2()
{
	return "show2" ;
}

int main()
{
    cout << "TEST, pointer!" << endl;

    int  var1;

    std:string var222= "abc";

    char var2[10];

    cout << "Address of var1 variable: ";
    cout << &var1 << endl;

    cout << "Address of var2 variable: ";
    cout << &var2 << endl;

    cout << show1() << endl;

    cout << show2() << endl;

    cout << *(&var222) << endl;
    cout << *(&var1) << endl;



    int * number;
	char * character;
	double * decimals;


	char char_var = 'c';
	character = &char_var;


    cout << character << endl;
    cout << *character << endl;
     cout << "==========" << endl;

    int firstvalue, secondvalue;
	int * mypointer;

	mypointer = &firstvalue;
	*mypointer = 10;
	mypointer = &secondvalue;
	*mypointer = 20;
	cout << "firstvalue is " << firstvalue << '\n';
	cout << "secondvalue is " << secondvalue << '\n';

    return 0;
}


