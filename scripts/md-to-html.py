import os
import re
import sys

pwd=os.path.split(os.path.abspath(__file__))[0]#把工作区设置为py脚本所在位置（为什么不呢？）
os.chdir(pwd)

md_path_list=[r"..\\study\\OI\\posts\\data",r"..\\life\\notes\\posts\\data",r"..\\life\\records\\posts\\data",r"..\\study\\math\\posts\\data"]

def md_to_html():
    # f=open('log.txt','w')

    for md_path in md_path_list:
        filelist=os.listdir(md_path)
        for i in range(0,len(filelist)):
            if(filelist[i][-3:len(filelist[i])]!=".md"):
                continue
            str=md_path+r"\\"+filelist[i].split('.md')[0].replace(" ","\" \"")# cmd文件名的空格两边需要打双引号
            os.popen(r"..\\tools\\pandoc\\pandoc -s "+str+r".md ..\\tools\\pandoc\\metadata.yaml -o "+str+".html --katex")

md_to_html()
