# Apache bench压力测试工具--搭建指导

** Apache bench 简称 ab，以下以简称为主

**Ab****工作原理：**

Apache的ab命令模拟多线程并发请求，测试服务器负载压力，也可以测试nginx、lighthttp、IIS等其它Web服务器的压力。 

 

一、**安装**：

下载：<http://httpd.apache.org/download.cgi>

找到[Files for Microsoft Windows](http://httpd.apache.org/docs/current/platform/windows.html#down)
 ![img](file:///C:\Users\TEMPLE~1\AppData\Local\Temp\msohtmlclip1\01\clip_image002.jpg)

选择[ApacheHaus](http://www.apachehaus.com/cgi-bin/download.plx)

![img](file:///C:\Users\TEMPLE~1\AppData\Local\Temp\msohtmlclip1\01\clip_image004.jpg)

 

根据自己的系统版本位数下载，X86为32位系统版本；X64为64位系统版本

![img](file:///C:\Users\TEMPLE~1\AppData\Local\Temp\msohtmlclip1\01\clip_image006.jpg)

 

把下载下来的压缩文件解压在自己的盘符下目录下

![img](file:///C:\Users\TEMPLE~1\AppData\Local\Temp\msohtmlclip1\01\clip_image008.jpg)

我是解压在G盘符下，如果不是解压在C盘下，则要配置一下参数

 

 

 

二、**配置参数**：设置参数，conf->httpd.conf 使用文本编辑器打开

有三处地方需要修改： 

 

a)     运行根目录，修改成自己解压到本地的路径（我这里是G:\Program Files\Apache24）

![img](file:///C:\Users\TEMPLE~1\AppData\Local\Temp\msohtmlclip1\01\clip_image010.jpg)

 

b)   监听端口，默认监听端口是80，如果已被使用会报错需要修改，如果80端口未被使用，可不修改；如果修改了监听端口，则需要把ServerName localhost也相应改成同样的端 口号（我自己改成了8081）

![img](file:///C:\Users\TEMPLE~1\AppData\Local\Temp\msohtmlclip1\01\clip_image012.jpg)

![img](file:///C:\Users\TEMPLE~1\AppData\Local\Temp\msohtmlclip1\01\clip_image014.jpg)

 

 

 

 

c)     DocumentRoot 测试文件存放地，且该目录必须存在 （手动新建一个test的文件夹；我这边是G:\Program Files\Apache24\test）

![img](file:///C:\Users\TEMPLE~1\AppData\Local\Temp\msohtmlclip1\01\clip_image016.jpg)

 配置完成后，保存退出后：进入G:\Program Files\Apache24\bin目录下，以管理员身份进入命令窗口运行安装命令httpd.exe  -k  install即可

![img](file:///C:\Users\TEMPLE~1\AppData\Local\Temp\msohtmlclip1\01\clip_image017.png)

 

**三、**    **检查安装：**

ab -n 2000 -c 500 <http://192.168.253.12:23400/provider/home>

![img](file:///C:\Users\TEMPLE~1\AppData\Local\Temp\msohtmlclip1\01\clip_image019.jpg)

有以上返回结果，证明已经搭建完成。