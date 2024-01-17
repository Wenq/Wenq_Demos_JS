# GitHub无法访问、443 Operation timed out的解决办法

参考链接：
http://www.360doc.com/content/21/0516/01/26211242_977363172.shtml
http://www.coolpython.net/informal_essay/21-09/github-time-out.html

## 问题：
1.突然电脑无法访问github了，重启电脑，重置网络都无法使用
2.科学上网git客户端也无法访问到GitHub
3.科学上网，命令行上敲上你熟悉的git 、pull、push等命令进行访问远程库的时候，都是回复 【Failed to connect to github.com port 443: Operation timed out】

# 身为一个专业的开发人员，这些错误是难不到你的！然后你疯狂的百度、Google搜索，然后得到的是为git的设置代理
 git config --global https.proxy http://127.0.0.1:1080
 git config --global http.proxy http://127.0.0.1:1080
复制代码
当你以为你很快速的解决的时候！！！现实却是打脸的！！！ 你得到的命令行再一次甩你一行【connect to 127.0.0.01 port 1080: Connection refused】

你是否也像本人一样，接近【发烂渣】的边缘？
如果你也遇到这些情况，那你很幸运，这篇文章可以帮你解决90%的问题。
【发烂渣】解决办法
# 1. 打开 https://github.com.ipaddress.com/
把IP Address 记录下来

# 2.打开https://fastly.net./github.global.ssl.fastly.net#ipinfo
把IP Address 记录下来

# 3.打开https://github.com./assets-cdn.github.com 
把IP Address 记录下来

# 4.打开电脑的hosts文件，把下列的东东写在最后，然后保存即可
140.82.113.4(图1的IP Address) github.com 
199.232.69.194(图2的IP Address) github.global.ssl.fastly.net
185.199.108.153(图3的IP Address)  assets-cdn.github.com
185.199.109.153(图3的IP Address)  assets-cdn.github.com
185.199.110.153(图3的IP Address)  assets-cdn.github.com
185.199.111.153(图3的IP Address)  assets-cdn.github.com

# 5.在终端在输以下指令刷新DNS（需要权限）--非必须操作
sudo killall -HUP mDNSResponder;say DNS cache has been flushed

# 提示1:
用Mac电脑,Mac的Hosts文件可以通过以下路径进行找打： 1.Finder->Go->Go to Folder 2.然后输入/etc/hosts即可找到

# 提示2:
这个Hosts文件一般的编辑器还真打不开，可以使用NotePad++、SubLineText等编辑器进行编辑
