#Desafio 017 Python Prof Guanabara
#recebe os catetos de um triangulo retangulo e imrpime a hipotenusa
from math import sqrt
ca = int(input('Digite o valor cateto adjacente:'))
co = int(input('Digite o valor cateto oposto:'))
hi = sqrt((ca**2)+(co**2))
print('O triangulo retangulo com os catetos {} e {}, tem hipotenusa:{}'.format(ca, co, hi))
