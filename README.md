# teamWebsite use jQuery and webpack

+ 勤奋蜂团队官网
    * 进入项目: `npm install`
    * 启动项目：`npm start`
    * 在`localhost:8080`打开

    
# 开发流程

### 1.克隆仓库到本地

`git clone ssh://git@ssh.alexxd.com:2222/diffusion/TW/teamwebsite.git`

### 2.进行开发

### 3.提交更改

`git add .`

`git commit -m '更改'`

### 4.创建revision

创建revision的两种方法：

#### 方法一（推荐）：

(1) `arc diff`

(2) 填写revision信息（指定reviewer、说明更改等）

(3) 等待review通过

(4) revision accepted （通过）

(5) 推送代码到线上仓库 

`arc land` 或 `git push`

#### 方法二（不推荐）：

(1) 通过`git diff`手动输出更改信息，复制下来。在[PHA平台上创建一个revision](http://code.alexxd.com/differential/diff/create/)，将信息粘贴进去，按要求指定reviewer，创建。

