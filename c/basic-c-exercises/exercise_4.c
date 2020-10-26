// lenght and height of a rectangle and perimeter

#include <stdio.h>
int main () {
    int length;
    printf("Enter length of the rectangle: ");
    scanf("%d", &length);
    int height;
    printf("Enter rectangle height: ");
    scanf("%d", &height);
    printf("The length of the rectangle is %d\n", length);
    printf("The rectangle heigth is %d\n", height);
    int perimeter;
    perimeter = (2*length)+(2*height);
    printf("The perimeter of rectangle is: %d\n", perimeter);
    printf("Thank's! See you soon.\n");
    return 0;
}