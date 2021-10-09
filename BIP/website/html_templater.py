import re
def formatter(target_file):
    file = open(target_file, "r").readline()
    get_targeted = re.findall(r'="/[\w*]+/[\w*]+.[\w*]+.[\w*]+"',file)
    for replaced in get_targeted:
        file = re.sub(replaced, "='{%static "+replaced[1:]+" %}'",file)

    f = open(target_file, "w")
    f.write("{%load static%}"+file)
    f.close()

formatter("html/index.html")