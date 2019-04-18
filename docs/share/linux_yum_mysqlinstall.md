# linux 安装mysql数据库——yum安装法

mysql数据库有多种安装方式，本文只介绍在Linux服务器上最实用、最快捷的mysql server安装方法。


一、Linux服务器yum安装（CentOS6.3 64位）
所有在服务器上执行的命令，都在 # 后面
1、命令安装mysql
`yum install mysql mysql-server mysql-devel -y`
最后提示 Complete! 表示安装成功

2、查看是否生成了mysqld服务, 并设置随机启动
`chkconfig --list |grep mysql`
数字代码服务器启动级别，off 代表不随机启动mysqld服务，on代表随机启动服务



我们需要设置mysqld随机启动，执行下面命令进行设置
`chkconfig mysqld on` 


这样的结果代表正常 
`chkconfig --list |grep mysql`


3、启动mysqld服务

执行如下命令进行启动，两种方法都可以:
`/etc/init.d/mysqld start`
`service mysqld start`

启动后，ps一下，看下进程是否起来 
`ps -ef |grep mysql|grep -v grep`
root 1582 1 0 23:26 pts/0 00:00:00 /bin /usr/bin/mysqld_safe --datadir=arb/mysql --socket=arb/mysql/mysql.sock --pid-file=ar/run/mysqld/mysqld.pid --basedir=/usr --user=mysql
mysql 1684 1582 1 23:26 pts/0 00:00:00 /usrbexec/mysqld --basedir=/usr --datadir=arb/mysql --user=mysql --log-error=ar/log/mysqld.log --pid-file=ar/run/mysqld/mysqld.pid --socket=arb/mysql/mysql.sock


根据进程信息可以看到，mysql的数据库data目录是 arb/mysql ，错误日志文件是 `ar/log/mysqld.log`

查看都有哪些库
`cd arb/mysql`
`ls -l`
发现有两个库，都是mysql默认自带的，如何手动创建数据库，会在后续的教程中说明。

查看占用端口，默认占用3306端口
`netstat -nutlp | grep mysql`
tcp 0 0 0.0.0.0:3306 0.0.0.0:* LISTEN 1684/mysqld 

4、停止mysqld服务
执行如下命令进行停止，两种方法都可以:
`/etc/init.d/mysqld stop` 
`service mysqld stop`

5、重启mysqld服务
执行如下命令进行重启，两种方法都可以:
`/etc/init.d/mysqld restart`
`service mysqld srestart`

6、命令行测试连接mysql ，后续可以在命令行中直接管理数据库
直接执行，yum安装的mysql，本地root密码默认为空
`mysql`





7、设置初始密码\权限设置新的密码并同时授权限
`mysql> grant all on *.* to root@'%' identified by 'youpassword'`;
刷新使之生效
`mysql> flush privileges`;
退出
`mysql> exit`;

8、重新登陆查看新密码和权限是否生效
`mysql> [root@nzp_redhat bin]# mysql -u root -p`
Enter password:"输入设置的密码" 