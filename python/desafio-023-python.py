n = ([2, 3, 10])
t = (n[0])
r = int(1)
qsoma = int(0)
somaq = int(0)
for c in range(1, n[1]+1, r):
    qsoma = qsoma + int(format(c))
for d in range(1, n[1]+1, r):
    somaq = (somaq) + (int(format(d)))**2
print(qsoma)
print(somaq)
