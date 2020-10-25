#Desafio 015 Python Prof Guanabara
#Car rent: input how many days? how much km? return you pay: R$1,55 p km
#Consider 1 day = 12*7=84 each day, price=(84*d)+(1.55xk)
d=int(input('How many days?'))
k=float(input('How much kilometers?'))
p=float((k*1.55)+(d*7))
print(p)
