#Desafio 019 Python Prof Guanabara
#recebe os nomes, cria uma lista (biblioteca), import random,
#random.choice e print(.format(x))
import random
n1 = str(input('First name:'))
n2 = str(input('Second name:'))
n3 = str(input('Third name:'))
n4 = str(input('Fourth name:'))
list = [n1, n2, n3, n4]
chosen = random.choice(list)
print('The chosen is {}'.format(chosen))
