console.log('load serialPort.js successed!')

//资料地址：https://zhuanlan.zhihu.com/p/456427866?utm_id=0

//打开串口
// 提示用户选择一个串口
const port = await navigator.serial.requestPort();
// 获取用户之前授予该网站访问权限的所有串口
const ports = await navigator.serial.getPorts();

// 打开串口
await port.open({
  dataBits: 8, // 数据位
  stopBits: 1, // 停止位
  parity: "none", // 奇偶校验
  baudRate: 9600, // 波特率
});

//读取数据
const reader = port.readable.getReader();
// 监听来自串口的数据
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    // 允许稍后关闭串口
    reader.releaseLock();
    break;
  }
  // value 是一个 Uint8Array
  console.log(value);
}

//写入数据
await writer.write(
	new Uint8Array("hello".split("").map((s) => s.charCodeAt(0)))
	);

//串口关闭
