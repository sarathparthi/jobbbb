#include<stdio.h>
#include<string.h>
#include<conio.h>
int main()
{
    int i=0;
    char ch;
    char pass[20];
    printf("enter your password: ");
    while(ch=getchar()!=13)
    {
        pass[i]=ch;
        i=i+1;
        printf("*");
    }
    printf("you entered is %s",pass);
}
