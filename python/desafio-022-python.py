name = input('What is your name?')
print('Name upper {}'.format(name.upper()))
print('Name lower {}'.format(name.lower()))
nspc = int(name.count(' ', 0, len(name)))
nlet = int((len(name))-nspc)
print('The number os letters is: {}'.format(nlet))
print('The first name has {} letters'.format(name.find(' ')))
#poderia ser (name.count(' ') no lugar de -nspc em nlet