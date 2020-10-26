// C Input/Output
#include <stdio.h>
int main()
{   // integer Input/Output
    int testInt;
    printf("Enter an integer: ");
    scanf("%d", &testInt);
    printf("Number = %d\n", testInt);
    // float Input/Output
    float num1;
    double num2;
    printf("Enter a number: \n");
    scanf("%f", &num1);
    printf("Enter another number: \n");
    scanf("%lf", &num2);
    printf("num1 = %f\n", num1);
    printf("num2 = %lf\n", num2);
    // Character Input/Output
    char chr;
    printf("Enter a character: \n");
    scanf("%c",&chr);     
    printf("You entered %c.\n", chr);
    // Multiple values
    int a;
    float b;
    printf("Enter integer and then a float: \n");
    // Taking multiple inputs
    scanf("%d%f", &a, &b);
    printf("You entered %d and %f\n", a, b);  
    return 0;  
}
