# 如何进行支付功能测试

支付功能测试的执行
1、公司交给专门负责支付接口等相关的人员进行支付测试

2、如果是支付宝支付可以用到支付沙漏，模拟支付测试。但是好像只能核对成功支付的情况。

3、给公司申请测试备用金，继续实际支付操作

4、把收款方改成自己的收款账号。这样就可以自己支付，自己收款，避免浪费自己的金钱做公司项目的支付测试。但是这也是有风险的。万一扣款成功，但是支付的金额 没有到账 可该怎么办？

支付功能测试考虑点
支付功能在很多软件应用中常常涉及到。支付功能的测试关注点是有没有出现资损 和事务的一致性。



一、在支付金额上
1、金额的最小值 ：如0.01 

2、无实际支付意义的金额：如0元订单

3、支付金额错误：格式错误 、数字错误（支付金额为负数）

3、超大金额 ：设置的最高金额上限。（如微信红包单个最大值为200等）

4、余额小于实际需要支付的金额

5、银行卡或其他设置当日消费金额或者是单笔消费金额超限



二、支付接口上
关于支付会设计到很多第三方接口的相关的事件。比如：支付宝 、微信、网银系统 、手机银行、POS机的终端服务 甚至是 扫码枪 等硬件设备也是有关系的。


三、支付的操作问题上
1、指纹支付

2、免密支付

3、账号+密码支付

4、动态获取支付验证码支付

5、银行卡号+密码绑定支付

6、信用卡可能会设计到支付码等

如今的支付方式多样化、快捷支付和银行卡支付之间的差异性。信用卡和普通储蓄卡之间的差异处。等都是需要考虑的。



四、产品的容错性上（异常处理）
1、如何处理退款

2、支付时出现断网 

3、支付失败之后 如何补单和退单

4、支付金额不足的情况下 ，充值后 是否可以继续支付

5、持续点击 是否会出现多次扣款

6、如果发生多次扣款，如何退款到支付账号



五、产品后台处理上
成功订单的账务处理、失败订单的账务处理、退款订单的账务处理、差错账处理等等。



微信支付验收用例文档：https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=23_1

支付宝：https://docs.open.alipay.com/27