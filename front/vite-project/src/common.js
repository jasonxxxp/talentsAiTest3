// 解析带中文单位的金额字符串（"1.50亿" → 1.5e8, "320.00万" → 3.2e6, "5000" → 5000）
function parseChineseAmount(str) {
  if (!str || str === '-') return 0
  const s = String(str)
  const num = parseFloat(s) || 0
  if (s.includes('亿')) return num * 1e8
  if (s.includes('万')) return num * 1e4
  return num
}

function formatTime(date) {
  const pad = n => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

export { parseChineseAmount,formatTime }