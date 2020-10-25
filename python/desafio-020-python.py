import random
n1 = str(input('First name:'))
n2 = str(input('Second name:'))
n3 = str(input('Third name:'))
n4 = str(input('Fourth name:'))
list = [n1, n2, n3, n4]
random.shuffle(list)
print('The order of presentation will be:')
print(list)
