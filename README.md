# LOF 实时数据查询系统

前后端分离项目，展示 LOF 基金的实时交易价格、溢价率和申购限额。

## 技术栈

| 端 | 技术 |
|---|---|
| 前端 | Vue 3 + Vite + Element Plus + Axios |
| 后端 | FastAPI + Uvicorn + akshare + pandas |

---

## 目录结构

```
lof_project/
├── start.sh                    # 一键启动脚本
├── back/                       # 后端服务
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py             # FastAPI 应用入口
│   │   ├── cache.py            # 缓存管理
│   │   ├── routers/
│   │   │   ├── __init__.py
│   │   │   └── lof.py          # LOF 接口控制器
│   │   ├── services/
│   │   │   ├── __init__.py
│   │   │   └── fetcher.py      # 数据获取服务
│   │   └── utils/
│   │       ├── __init__.py
│   │       └── formatters.py   # 格式化工具
│   ├── run.py                  # uvicorn 启动入口
│   └── requirements.txt
├── front/                      # 前端项目
│   └── vite-project/
│       ├── package.json
│       └── src/
└── README.md
```

---

## 快速启动（推荐）

> 一键同时启动前后端，自动切换 Node 版本。

```bash
./start.sh
```

脚本会自动完成：

1. 激活后端 Python 虚拟环境，启动 FastAPI（`http://localhost:8000`）
2. 通过 `nvm use` 切换到 `.nvmrc` 指定的 Node 版本，启动 Vite 开发服务器（`http://localhost:5173`）
3. 按 `Ctrl+C` 同时停止所有服务

---

## 一、前端服务（手动启动）

> **前置要求**：电脑上需安装 [nvm](https://github.com/nvm-sh/nvm)（Node 版本管理工具）。

### 1. 切换 Node 版本

前端项目通过 `.nvmrc` 文件锁定 Node 版本（当前为 `v22.21.1`）。

**macOS / Linux：**

```bash
cd front/vite-project

# 自动读取 .nvmrc 中的版本并切换
nvm use

# 如果该版本未安装，先安装再切换
nvm install
nvm use
```

**Windows：**

Windows 版 nvm 不支持自动读取 `.nvmrc`，需显式指定版本号：

```bash
cd front/vite-project

nvm install v22.21.1
nvm use v22.21.1
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动服务

```bash
npm run dev
```

默认运行在 [http://localhost:5173](http://localhost:5173)

### 3. 构建生产包

```bash
npm run build
```