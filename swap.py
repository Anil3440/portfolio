import sys

with open('d:/Portfolio/index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

def find_idx(lines, marker):
    for i, l in enumerate(lines):
        if marker in l: return i
    return -1

ed_start = find_idx(lines, '<!-- Education Section -->')
sk_start = find_idx(lines, '<!-- Skills Section -->')
pr_start = find_idx(lines, '<!-- Projects Section -->')

if ed_start != -1 and sk_start != -1 and pr_start != -1:
    ed_section = lines[ed_start:sk_start]
    sk_section = lines[sk_start:pr_start]
    
    for i, l in enumerate(ed_section):
        if 'id=\"education\"' in l:
            ed_section[i] = l.replace(' alt-bg', '')
            break
            
    for i, l in enumerate(sk_section):
        if 'id=\"skills\"' in l:
            sk_section[i] = l.replace('class=\"skills section\"', 'class=\"skills section alt-bg\"')
            break
            
    new_lines = lines[:ed_start] + sk_section + ed_section + lines[pr_start:]
    with open('d:/Portfolio/index.html', 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print("Swapped sections successfully!")
else:
    print("Could not find sections.")
