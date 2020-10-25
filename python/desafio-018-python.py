#Desafio 018 Python Prof Guanabara
#recebe o valor de um angulo e imprime sen, cos e tan do angulo
a = int(input('Type the value of an angle from 0° to 360°:'))
from math import (sin, cos, tan)
sn = sin(a)
cs = cos(a)
tn = tan(a)
print('The angle {} ° has sin {}, cos {} and tan {}'.format(a, sn, cs, tn))
