s=str(input('Type the hour HH:MM:SSAM/PM: '))
M = (s[0])
m = (s[1])
h = int(M + m)
H = int(h + 12)
Hh = str(H)
mi = str(s[3])
min = str(s[4])
MM = str(mi + min)
se = str(s[6])
sec = str(s[7])
SS = str(se + sec)
hour=str(Hh + ':' + MM + ':' + SS)
print(hour)